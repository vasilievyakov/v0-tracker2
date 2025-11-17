"use server";

import { createClient } from "@/lib/supabase/server";
import { logger } from "@/lib/logger";
// import { revalidatePath } from "next/cache"; // Not available in Next.js 12
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
    logger.info({ channelUrl, timeRange }, "[v0] Starting addChannelByUrl");

    // Extract username from URL
    const username = extractChannelUsername(channelUrl);

    logger.debug({ username }, "[v0] Extracted username");

    if (!username) {
      logger.warn("[v0] Invalid username extracted");
      return { success: false, error: "Invalid channel URL format" };
    }

    const { data: existingChannel } = await supabase
      .from("channels")
      .select("id")
      .eq("channel_username", username)
      .maybeSingle();

    logger.debug({ existing: !!existingChannel }, "[v0] Existing channel check");

    // Check if channel exists and we're not updating
    if (existingChannel && timeRange !== "update") {
      logger.warn("[v0] Channel exists, returning error");
      return { success: false, error: "Channel already exists. Use 'Update' mode to fetch new posts." };
    }

    // Process channel immediately instead of creating background job
    const result = await processChannelDirectly({
      username,
      timeRange,
      channelId: existingChannel?.id,
      jobType: existingChannel && timeRange === "update" ? "update_channel" : "add_channel"
    });

    // revalidatePath("/"); // Not available in Next.js 12
    return result;
  } catch (error) {
    logger.error({ err: error }, "[v0] Error in addChannelByUrl");
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
}

// Process channel directly (synchronous processing)
async function processChannelDirectly(params: {
  username: string;
  timeRange: "all" | "year" | "month" | "update";
  channelId?: string;
  jobType: "add_channel" | "update_channel";
}) {
  const supabase = await createClient();
  const { username, timeRange, channelId, jobType } = params;

  try {
    // Import telegram client function
    const { fetchChannelData } = await import("@/lib/telegram-client");

    // Fetch channel data using Telegram API
    const channelData = await fetchChannelData(username, timeRange);

    if (jobType === "update_channel" && channelId) {
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

      return {
        success: true,
        message: `Channel updated successfully. Added ${newPosts.length} new posts.`,
        postsAdded: newPosts.length
      };
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
          logger.error({ err: postsError }, "[v0] Error inserting posts");
          // Don't fail the whole operation
        }
      }

      return {
        success: true,
        message: `Channel added successfully with ${channelData.posts.length} posts.`,
        channelId: channel.id,
        postsAdded: channelData.posts.length
      };
    }
  } catch (error) {
    logger.error({ err: error }, "[v0] Error processing channel");
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
      logger.error({ err: error }, "Error saving API settings");
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    logger.error({ err: error }, "Error in saveApiSettings");
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
    logger.error({ err: error }, "Error testing API connection");
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
    logger.error({ err: error }, "Error adding channel");
    return { success: false, error: error.message };
  }

  // revalidatePath("/"); // Not available in Next.js 12
  return { success: true };
}

export async function deleteChannel(channelId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("channels")
    .delete()
    .eq("id", channelId);

  if (error) {
    logger.error({ err: error }, "Error deleting channel");
    return { success: false, error: error.message };
  }

  // revalidatePath("/"); // Not available in Next.js 12
  return { success: true };
}
