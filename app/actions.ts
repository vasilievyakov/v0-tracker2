"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

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

    if (existingChannel && timeRange === "update") {
      console.log("[v0] [SERVER] Updating existing channel with new posts");
      
      const channelData = await fetchTelegramChannelData(
        username,
        timeRange
      );

      if (!channelData.success) {
        console.log("[v0] [SERVER] Failed to fetch channel data:", channelData.error);
        return { success: false, error: channelData.error };
      }

      // Get existing post IDs to avoid duplicates
      const { data: existingPosts } = await supabase
        .from("posts")
        .select("post_id")
        .eq("channel_id", existingChannel.id);

      const existingPostIds = new Set(existingPosts?.map(p => p.post_id) || []);

      // Filter out posts that already exist
      const newPosts = channelData.data.posts.filter(
        (post: any) => !existingPostIds.has(post.postId)
      );

      console.log("[v0] [SERVER] Found", newPosts.length, "new posts to add");

      if (newPosts.length > 0) {
        const postsToInsert = newPosts.map((post: any) => ({
          channel_id: existingChannel.id,
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
          console.error("[v0] [SERVER] Error inserting posts:", postsError);
          return { success: false, error: "Failed to add new posts: " + postsError.message };
        }

        revalidatePath("/");
        console.log("[v0] [SERVER] Successfully added", newPosts.length, "posts");
        return { 
          success: true, 
          message: `Added ${newPosts.length} new post${newPosts.length === 1 ? '' : 's'}` 
        };
      } else {
        return { 
          success: true, 
          message: "No new posts found. Channel is up to date." 
        };
      }
    }

    if (existingChannel && timeRange !== "update") {
      console.log("[v0] [SERVER] Channel exists, returning error");
      return { success: false, error: "Channel already exists. Use 'Update' mode to fetch new posts." };
    }

    console.log("[v0] [SERVER] Adding new channel with real Telegram data");
    
    const channelData = await fetchTelegramChannelData(
      username,
      timeRange
    );

    if (!channelData.success) {
      console.log("[v0] [SERVER] Failed to fetch channel data:", channelData.error);
      return { success: false, error: channelData.error };
    }

    console.log("[v0] [SERVER] Inserting channel into database");

    const { data: channel, error: channelError } = await supabase
      .from("channels")
      .insert({
        channel_name: channelData.data.title,
        channel_url: `https://t.me/${username}`,
        channel_username: username,
        subscribers_count: channelData.data.subscribers || 0,
        description: channelData.data.description || null,
        category: channelData.data.category || "Other",
        language: channelData.data.language || "Unknown",
      })
      .select()
      .single();

    if (channelError) {
      console.error("[v0] [SERVER] Error adding channel:", channelError);
      return { success: false, error: "Failed to add channel: " + channelError.message };
    }

    console.log("[v0] [SERVER] Channel added successfully, ID:", channel.id);

    if (channelData.data.posts && channelData.data.posts.length > 0) {
      console.log("[v0] [SERVER] Inserting", channelData.data.posts.length, "posts");
      
      const postsToInsert = channelData.data.posts.map((post: any) => ({
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
        console.error("[v0] [SERVER] Error inserting posts:", postsError);
        // Don't fail the whole operation if posts fail
      } else {
        console.log("[v0] [SERVER] Posts inserted successfully");
      }
    }

    revalidatePath("/");
    console.log("[v0] [SERVER] Operation completed successfully");
    return { 
      success: true,
      message: `Added channel with ${channelData.data.posts.length} post${channelData.data.posts.length === 1 ? '' : 's'}`
    };
  } catch (error) {
    console.error("[v0] [SERVER] Error in addChannelByUrl:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    };
  }
}

async function fetchTelegramChannelData(
  username: string,
  timeRange: "all" | "year" | "month" | "update" = "month"
) {
  try {
    console.log("[v0] [SERVER] Fetching real Telegram data for channel:", username, "with time range:", timeRange);
    
    const response = await fetch(`/api/telegram/channel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, timeRange }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
      console.error("[v0] [SERVER] API response not OK:", response.status, errorData);
      throw new Error(errorData.message || 'Failed to fetch channel data');
    }

    const channelInfo = await response.json();
    
    console.log("[v0] [SERVER] Received", channelInfo.posts?.length || 0, "real posts from Telegram API");

    return {
      success: true,
      data: channelInfo,
    };
  } catch (error) {
    console.error("[v0] [SERVER] Error fetching Telegram data:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to connect to Telegram API" 
    };
  }
}

export async function saveApiSettings(apiId: string, apiHash: string) {
  const supabase = await createClient();

  try {
    const { error } = await supabase
      .from("api_settings")
      .upsert({
        id: 1,
        api_id: apiId,
        api_hash: apiHash,
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
  const supabase = await createClient();

  try {
    const { data: settings } = await supabase
      .from("api_settings")
      .select("*")
      .maybeSingle();

    if (!settings || !settings.api_id || !settings.api_hash) {
      return { 
        success: false, 
        error: "No API credentials found. Please save your settings first." 
      };
    }

    const result = await fetchTelegramChannelData("telegram", "month");

    return result;
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
