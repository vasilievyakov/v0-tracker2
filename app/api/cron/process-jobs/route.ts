import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { processJob } from "@/app/actions";

export async function GET(request: NextRequest) {
  // Verify that this is called from Vercel Cron
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();

  try {
    // Get pending jobs (limit to 5 at a time to avoid timeout)
    const { data: jobs, error } = await supabase
      .from("jobs")
      .select("id")
      .eq("status", "pending")
      .order("created_at", { ascending: true })
      .limit(5);

    if (error) {
      console.error("[CRON] Error fetching jobs:", error);
      return NextResponse.json(
        { error: "Failed to fetch jobs" },
        { status: 500 }
      );
    }

    if (!jobs || jobs.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No pending jobs",
        processed: 0,
      });
    }

    // Process each job
    const results = await Promise.allSettled(
      jobs.map((job) => processJob(job.id))
    );

    const successful = results.filter(
      (r) => r.status === "fulfilled" && r.value.success
    ).length;
    const failed = results.length - successful;

    return NextResponse.json({
      success: true,
      message: `Processed ${jobs.length} job(s)`,
      processed: jobs.length,
      successful,
      failed,
    });
  } catch (error) {
    console.error("[CRON] Error processing jobs:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}

