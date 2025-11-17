import { createClient } from "../lib/supabase/server";
import { PostsTable } from "../components/posts-table";
import { PostFilters } from "../components/post-filters";
import { PostStats } from "../components/post-stats";
import { AddChannelDialog } from "../components/add-channel-dialog";
import { DatabaseSetupBanner } from "../components/database-setup-banner";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Settings } from 'lucide-react';
import type { Post } from "../lib/types";

interface HomeProps {
  searchParams?: {
    search?: string;
    channelUsername?: string;
    minViews?: string;
    maxViews?: string;
    minEngagement?: string;
    hasMedia?: string;
    dateFrom?: string;
    dateTo?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams || {};
  const supabase = await createClient();

  let isSetup = true;
  let posts: Post[] | null = null;
  let channels = null;

  try {
    let query = supabase
      .from("posts")
      .select(`
        *,
        channel:channels(*)
      `)
      .order("published_at", { ascending: false });

    if (params.search) {
      query = query.ilike("content", `%${params.search}%`);
    }

    if (params.channelUsername) {
      query = query.eq("channel_username", params.channelUsername);
    }

    if (params.minViews) {
      query = query.gte("views_count", parseInt(params.minViews));
    }

    if (params.maxViews) {
      query = query.lte("views_count", parseInt(params.maxViews));
    }

    if (params.minEngagement) {
      query = query.gte("engagement_rate", parseFloat(params.minEngagement));
    }

    if (params.hasMedia === "true") {
      query = query.eq("has_media", true);
    }

    if (params.dateFrom) {
      query = query.gte("published_at", params.dateFrom);
    }

    if (params.dateTo) {
      query = query.lte("published_at", params.dateTo);
    }

    const { data, error } = await query;

    if (error) {
      // Check if error is due to table not existing
      if (error.code === 'PGRST205' || error.message.includes('Could not find the table')) {
        console.log("[v0] Posts table not found, database setup required");
        isSetup = false;
      } else {
        console.error("Error fetching posts:", error);
      }
    } else {
      posts = data as Post[];
    }

    // Get all channels for filter dropdown
    if (isSetup) {
      const { data: channelsData } = await supabase
        .from("channels")
        .select("*")
        .order("channel_name");
      channels = channelsData;
    }
  } catch (error) {
    console.error("[v0] Error in database query:", error);
    isSetup = false;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Telegram Posts Tracker
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              Monitor and analyze posts from Telegram channels
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/settings">
              <Button variant="outline" size="lg" className="gap-2">
                <Settings className="h-5 w-5" />
                Settings
              </Button>
            </Link>
            <AddChannelDialog />
          </div>
        </div>

        {!isSetup ? (
          <DatabaseSetupBanner />
        ) : (
          <>
            <PostStats posts={posts || []} />
            <PostFilters channels={channels || []} />
            <PostsTable posts={posts || []} />
          </>
        )}
      </div>
    </main>
  );
}
