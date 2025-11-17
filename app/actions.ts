"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { encrypt } from "@/lib/encryption";

function extractChannelUsername(url: string): string {
  // Remove @ if present
  let username = url.replace('@', '');
  
  // Extract from t.me URL formats
  if (username.includes('t.me/')) {
    username = username.split('t.me/')[1].split('/')[0].split('?')[0];
  }
  
  // Remove any trailing slashes or query params
  username = username.split('/')[0].split('?')[0];
  
  return username;
}

export async function addChannelByUrl(
  channelUrl: string, 
  timeRange: "all" | "year" | "month" | "update" = "month"
) {
  const supabase = await createClient();
  
  try {
    console.log("[v0] [SERVER] Starting addChannelByUrl for:", channelUrl, "timeRange:", timeRange);
    
    // Extract username from URL
    const username = extractChannelUsername(channelUrl);
    
    console.log("[v0] [SERVER] Extracted username:", username);
    
    if (!username) {
      console.log("[v0] [SERVER] Invalid username extracted");
      return { success: false, error: "Invalid channel URL format" };
    }

    const { data: existingChannel } = await supabase
      .from("channels")
      .select("id")
      .eq("channel_username", username)
      .maybeSingle();

    console.log("[v0] [SERVER] Existing channel check:", existingChannel ? "found" : "not found");

    // Determine job type
    const jobType = existingChannel && timeRange === "update" ? "update_channel" : "add_channel";

    if (existingChannel && timeRange !== "update") {
      console.log("[v0] [SERVER] Channel exists, returning error");
      return { success: false, error: "Channel already exists. Use 'Update' mode to fetch new posts." };
    }

    // Create background job
    const { data: job, error: jobError } = await supabase
      .from("jobs")
      .insert({
        job_type: jobType,
        status: "pending",
        payload: {
          channelUrl,
          username,
          timeRange,
          channelId: existingChannel?.id || null,
        },
      })
      .select()
      .single();

    if (jobError) {
      console.error("[v0] [SERVER] Error creating job:", jobError);
      return { success: false, error: "Failed to create background job: " + jobError.message };
    }

    console.log("[v0] [SERVER] Created background job:", job.id);

    revalidatePath("/");
    return { 
      success: true,
      message: "Channel processing started. The data will be available shortly.",
      jobId: job.id,
    };
  } catch (error) {
    console.error("[v0] [SERVER] Error in addChannelByUrl:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    };
  }
}

// Process a background job (called by cron job)
export async function processJob(jobId: string) {
  const supabase = await createClient();
  
  try {
    // Get job
    const { data: job, error: jobFetchError } = await supabase
      .from("jobs")
      .select("*")
      .eq("id", jobId)
      .eq("status", "pending")
      .maybeSingle();

    if (jobFetchError || !job) {
      console.error("[v0] [CRON] Job not found or already processed:", jobId);
      return { success: false, error: "Job not found" };
    }

    // Update job status to processing
    await supabase
      .from("jobs")
      .update({
        status: "processing",
        started_at: new Date().toISOString(),
        attempts: (job.attempts || 0) + 1,
        updated_at: new Date().toISOString(),
      })
      .eq("id", jobId);

    const { username, timeRange, channelId } = job.payload as {
      username: string;
      timeRange: "all" | "year" | "month" | "update";
      channelId?: string;
    };

    // Import telegram client function
    const { fetchChannelData } = await import("@/lib/telegram-client");
    
    // Fetch channel data using Telegram API
    const channelData = await fetchChannelData(username, timeRange);

    if (job.job_type === "update_channel" && channelId) {
      // Update existing channel
      const { data: existingPosts } = await supabase
        .from("posts")
        .select("post_id")
        .eq("channel_id", channelId);

      const existingPostIds = new Set(existingPosts?.map(p => p.post_id) || []);

      const newPosts = channelData.posts.filter(
        (post) => !existingPostIds.has(post.postId)
      );

      if (newPosts.length > 0) {
        const postsToInsert = newPosts.map((post) => ({
          channel_id: channelId,
          post_id: post.postId,
          channel_username: username,
          content: post.content,
          post_url: post.postUrl,
          views_count: post.viewsCount || 0,
          reactions_count: post.reactionsCount || 0,
          comments_count: post.commentsCount || 0,
          forwards_count: post.forwardsCount || 0,
          engagement_rate: post.engagementRate,
          published_at: post.publishedAt,
          has_media: post.hasMedia || false,
          media_type: post.mediaType,
        }));

        const { error: postsError } = await supabase
          .from("posts")
          .insert(postsToInsert);

        if (postsError) {
          throw new Error("Failed to insert posts: " + postsError.message);
        }
      }

      // Update job as completed
      await supabase
        .from("jobs")
        .update({
          status: "completed",
          result: { postsAdded: newPosts.length },
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", jobId);

      revalidatePath("/");
      return { success: true, postsAdded: newPosts.length };
    } else {
      // Add new channel
      const { data: channel, error: channelError } = await supabase
        .from("channels")
        .insert({
          channel_name: channelData.title,
          channel_url: `https://t.me/${username}`,
          channel_username: username,
          subscribers_count: channelData.subscribers || 0,
          description: channelData.description || null,
          category: channelData.category || "Other",
          language: channelData.language || "Unknown",
        })
        .select()
        .single();

      if (channelError) {
        throw new Error("Failed to add channel: " + channelError.message);
      }

      // Insert posts
      if (channelData.posts && channelData.posts.length > 0) {
        const postsToInsert = channelData.posts.map((post) => ({
          channel_id: channel.id,
          post_id: post.postId,
          channel_username: username,
          content: post.content,
          post_url: post.postUrl,
          views_count: post.viewsCount || 0,
          reactions_count: post.reactionsCount || 0,
          comments_count: post.commentsCount || 0,
          forwards_count: post.forwardsCount || 0,
          engagement_rate: post.engagementRate,
          published_at: post.publishedAt,
          has_media: post.hasMedia || false,
          media_type: post.mediaType,
        }));

        const { error: postsError } = await supabase
          .from("posts")
          .insert(postsToInsert);

        if (postsError) {
          console.error("[v0] [CRON] Error inserting posts:", postsError);
          // Don't fail the whole operation
        }
      }

      // Update job as completed
      await supabase
        .from("jobs")
        .update({
          status: "completed",
          result: { channelId: channel.id, postsAdded: channelData.posts.length },
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", jobId);

      revalidatePath("/");
      return { success: true, channelId: channel.id, postsAdded: channelData.posts.length };
    }
  } catch (error) {
    console.error("[v0] [CRON] Error processing job:", error);
    
    // Update job as failed
    const supabase = await createClient();
    const { data: job } = await supabase
      .from("jobs")
      .select("attempts, max_attempts")
      .eq("id", jobId)
      .maybeSingle();

    const attempts = (job?.attempts || 0) + 1;
    const maxAttempts = job?.max_attempts || 3;
    const status = attempts >= maxAttempts ? "failed" : "pending";

    await supabase
      .from("jobs")
      .update({
        status,
        error_message: error instanceof Error ? error.message : "Unknown error",
        attempts,
        updated_at: new Date().toISOString(),
      })
      .eq("id", jobId);

    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    };
  }
}

export async function saveApiSettings(apiId: string, apiHash: string) {
  const supabase = await createClient();

  try {
    // Encrypt the credentials before storing
    const encryptedApiId = encrypt(apiId);
    const encryptedApiHash = encrypt(apiHash);

    const { error } = await supabase
      .from("api_settings")
      .upsert({
        id: 1,
        api_id: encryptedApiId,
        api_hash: encryptedApiHash,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      console.error("Error saving API settings:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in saveApiSettings:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    };
  }
}

export async function testApiConnection() {
  try {
    const { getTelegramClient } = await import("@/lib/telegram-client");
    const client = await getTelegramClient();
    
    // Try to get "me" to verify connection
    const me = await client.getMe();
    
    return {
      success: true,
      message: `Connected as ${me.firstName || 'User'} (${me.id})`,
    };
  } catch (error) {
    console.error("Error testing API connection:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Connection test failed" 
    };
  }
}

export async function addChannel(data: {
  channel_name: string;
  channel_url: string;
  subscribers_count: number;
  description: string;
  category: string;
  language: string;
  engagement_rate: number;
  tags: string[];
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("channels").insert({
    channel_name: data.channel_name,
    channel_url: data.channel_url,
    subscribers_count: data.subscribers_count,
    description: data.description || null,
    category: data.category,
    language: data.language,
    engagement_rate: data.engagement_rate || null,
    tags: data.tags,
    last_post_date: new Date().toISOString(),
  });

  if (error) {
    console.error("Error adding channel:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

export async function deleteChannel(channelId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("channels")
    .delete()
    .eq("id", channelId);

  if (error) {
    console.error("Error deleting channel:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}
