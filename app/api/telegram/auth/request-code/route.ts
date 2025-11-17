import { NextRequest, NextResponse } from "next/server";
import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { createClient } from "@/lib/supabase/server";
import { decrypt } from "@/lib/encryption";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Get API credentials
    const supabase = await createClient();
    const { data: settings } = await supabase
      .from("api_settings")
      .select("api_id, api_hash")
      .eq("id", 1)
      .maybeSingle();

    if (!settings || !settings.api_id || !settings.api_hash) {
      return NextResponse.json(
        { error: "API credentials not configured" },
        { status: 400 }
      );
    }

    const apiId = parseInt(decrypt(settings.api_id));
    const apiHash = decrypt(settings.api_hash);

    if (isNaN(apiId) || !apiHash) {
      return NextResponse.json(
        { error: "Invalid API credentials" },
        { status: 400 }
      );
    }

    // Create temporary client for authentication
    const session = new StringSession("");
    const client = new TelegramClient(session, apiId, apiHash, {
      connectionRetries: 5,
    });

    await client.connect();

    // Send code
    const result = await client.sendCode(
      {
        apiId,
        apiHash,
      },
      phoneNumber
    );

    await client.disconnect();

    return NextResponse.json({
      success: true,
      phoneCodeHash: result.phoneCodeHash,
    });
  } catch (error) {
    logger.error({ err: error }, "Error requesting code");
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to request verification code",
      },
      { status: 500 }
    );
  }
}

