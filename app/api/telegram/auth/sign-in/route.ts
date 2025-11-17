import { NextRequest, NextResponse } from "next/server";
import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { Api } from "telegram/tl";
import { createClient } from "@/lib/supabase/server";
import { decrypt, encrypt } from "@/lib/encryption";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, phoneCodeHash, code, password } = await request.json();

    if (!phoneNumber || !phoneCodeHash || !code) {
      return NextResponse.json(
        { error: "Phone number, code hash, and code are required" },
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

    try {
      // Sign in with code
      await client.invoke(
        new Api.auth.SignIn({
          phoneNumber,
          phoneCodeHash,
          phoneCode: code,
        })
      );
    } catch (error: any) {
      // Check if 2FA is required
      if (error.errorMessage === "SESSION_PASSWORD_NEEDED" || error.code === 401) {
        if (!password) {
          await client.disconnect();
          return NextResponse.json(
            { error: "2FA password required", requiresPassword: true },
            { status: 400 }
          );
        }

        // Handle 2FA - use the client's built-in method which handles SRP automatically
        try {
          await client.signInWithPassword(phoneNumber, password);
        } catch (passwordError: any) {
          await client.disconnect();
          throw new Error(
            passwordError.message || "Failed to verify 2FA password"
          );
        }
      } else {
        await client.disconnect();
        throw error;
      }
    }

    // Save session
    const sessionString = client.session.save() as unknown as string;
    const encryptedSession = encrypt(sessionString);

    await supabase.from("telegram_sessions").upsert({
      id: 1,
      session_string: encryptedSession,
      phone_number: phoneNumber,
      updated_at: new Date().toISOString(),
    });

    await client.disconnect();

    return NextResponse.json({
      success: true,
      message: "Successfully authenticated",
    });
  } catch (error) {
    logger.error({ err: error }, "Error signing in");
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to sign in",
      },
      { status: 500 }
    );
  }
}

