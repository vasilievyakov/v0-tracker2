"use client";

import { Post } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge"; // Not compatible with React 17
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Eye, Heart, MessageCircle, Share2, ImageIcon, Video, FileText } from 'lucide-react';
import { formatDistanceToNow } from "date-fns";

interface PostsTableProps {
  posts: Post[];
}

export function PostsTable({ posts }: PostsTableProps) {
  const exportToCSV = () => {
    const headers = [
      "Channel",
      "Content",
      "Published",
      "Views",
      "Reactions",
      "Comments",
      "Forwards",
      "Engagement Rate",
      "URL",
    ];

    const rows = posts.map((post) => [
      post.channel?.channel_name || post.channel_username,
      (post.content || "").replace(/"/g, '""').substring(0, 200),
      post.published_at,
      post.views_count.toString(),
      post.reactions_count.toString(),
      post.comments_count.toString(),
      post.forwards_count.toString(),
      post.engagement_rate?.toString() || "",
      post.post_url,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `telegram-posts-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getMediaIcon = (mediaType: string | null) => {
    if (!mediaType) return null;
    switch (mediaType) {
      case "photo":
        return <ImageIcon className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      case "document":
        return <FileText className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-slate-900">
          Posts ({posts.length})
        </CardTitle>
        <Button onClick={exportToCSV} variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Channel</TableHead>
                <TableHead className="w-[400px]">Content</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Engagement</TableHead>
                <TableHead>Stats</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="h-24 text-center text-slate-500"
                  >
                    No posts found. Try adjusting your filters or add a channel.
                  </TableCell>
                </TableRow>
              ) : (
                posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {post.channel?.channel_name || post.channel_username}
                        </div>
                        {post.channel?.category && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 mt-1">
                            {post.channel.category}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-md">
                        <p className="line-clamp-2 text-sm text-slate-700">
                          {post.content || "No content"}
                        </p>
                        {post.has_media && post.media_type && (
                          <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                            {getMediaIcon(post.media_type)}
                            <span className="capitalize">{post.media_type}</span>
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-slate-600">
                        {formatDistanceToNow(new Date(post.published_at), {
                          addSuffix: true,
                        })}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Eye className="h-4 w-4 text-slate-400" />
                        <span className="font-semibold">
                          {post.views_count.toLocaleString()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {post.engagement_rate && (
                        <span className="font-medium text-green-600">
                          {post.engagement_rate}%
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1 text-xs text-slate-600">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {post.reactions_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {post.comments_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="h-3 w-3" />
                          {post.forwards_count}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={post.post_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
