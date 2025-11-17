"use client";

import { Channel } from "@/lib/types";
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
import { ExternalLink, Download, Trash2 } from 'lucide-react';
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { DeleteChannelDialog } from "@/components/delete-channel-dialog";

interface ChannelsTableProps {
  channels: Channel[];
}

export function ChannelsTable({ channels }: ChannelsTableProps) {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  const exportToCSV = () => {
    const headers = [
      "Channel Name",
      "URL",
      "Subscribers",
      "Category",
      "Language",
      "Engagement Rate",
      "Last Post",
    ];

    const rows = channels.map((channel) => [
      channel.channel_name,
      channel.channel_url,
      channel.subscribers_count.toString(),
      channel.category || "",
      channel.language || "",
      channel.engagement_rate?.toString() || "",
      channel.last_post_date || "",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `telegram-channels-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Card className="border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-semibold text-slate-900">
            Channels ({channels.length})
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
                  <TableHead className="w-[250px]">Channel</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Language</TableHead>
                  <TableHead className="text-right">Subscribers</TableHead>
                  <TableHead className="text-right">Engagement</TableHead>
                  <TableHead>Last Post</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {channels.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className="h-24 text-center text-slate-500"
                    >
                      No channels found. Try adjusting your filters.
                    </TableCell>
                  </TableRow>
                ) : (
                  channels.map((channel) => (
                    <TableRow key={channel.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-semibold text-slate-900">
                            {channel.channel_name}
                          </div>
                          {channel.description && (
                            <div className="mt-1 text-sm text-slate-500 line-clamp-1">
                              {channel.description}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {channel.category && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">{channel.category}</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {channel.language && (
                          <span className="text-sm text-slate-600">
                            {channel.language}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        {channel.subscribers_count.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        {channel.engagement_rate && (
                          <span className="font-medium text-green-600">
                            {channel.engagement_rate}%
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        {channel.last_post_date ? (
                          <span className="text-sm text-slate-600">
                            {formatDistanceToNow(
                              new Date(channel.last_post_date),
                              {
                                addSuffix: true,
                              }
                            )}
                          </span>
                        ) : (
                          <span className="text-sm text-slate-400">N/A</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {channel.tags?.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border border-gray-300 bg-white text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                          {channel.tags && channel.tags.length > 2 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border border-gray-300 bg-white text-gray-700">
                              +{channel.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                          >
                            <a
                              href={channel.channel_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedChannel(channel)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <DeleteChannelDialog
        channel={selectedChannel}
        open={!!selectedChannel}
        onOpenChange={(open) => !open && setSelectedChannel(null)}
      />
    </>
  );
}
