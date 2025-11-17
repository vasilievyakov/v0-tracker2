"use client";

import { useState } from "react";
import { useRouter } from 'next/router';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from 'lucide-react';
import { Channel } from "@/lib/types";

interface PostFiltersProps {
  channels: Channel[];
}

export function PostFilters({ channels }: PostFiltersProps) {
  const router = useRouter();
  const query = router.query;

  const [search, setSearch] = useState(typeof query.search === 'string' ? query.search : "");
  const [channelUsername, setChannelUsername] = useState(
    typeof query.channelUsername === 'string' ? query.channelUsername : "all"
  );
  const [minViews, setMinViews] = useState(
    typeof query.minViews === 'string' ? query.minViews : ""
  );
  const [minEngagement, setMinEngagement] = useState(
    typeof query.minEngagement === 'string' ? query.minEngagement : ""
  );
  const [hasMedia, setHasMedia] = useState(
    typeof query.hasMedia === 'string' ? query.hasMedia : "all"
  );

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (typeof search === 'string' && search) params.set("search", search);
    if (typeof channelUsername === 'string' && channelUsername && channelUsername !== "all") params.set("channelUsername", channelUsername);
    if (typeof minViews === 'string' && minViews) params.set("minViews", minViews);
    if (typeof minEngagement === 'string' && minEngagement) params.set("minEngagement", minEngagement);
    if (typeof hasMedia === 'string' && hasMedia && hasMedia !== "all") params.set("hasMedia", hasMedia);

    router.push(`/?${params.toString()}`);
  };

  const clearFilters = () => {
    setSearch("");
    setChannelUsername("all");
    setMinViews("");
    setMinEngagement("");
    setHasMedia("all");
    router.push("/");
  };

  return (
    <Card className="mb-6 border-none shadow-sm">
      <CardContent className="pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search in content..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyFilters()}
                className="pl-9"
              />
            </div>
          </div>

          <Select value={channelUsername} onValueChange={setChannelUsername}>
            <SelectTrigger>
              <SelectValue placeholder="All channels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All channels</SelectItem>
              {channels.map((channel) => (
                <SelectItem key={channel.id} value={channel.channel_username}>
                  {channel.channel_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="number"
            placeholder="Min views"
            value={minViews}
            onChange={(e) => setMinViews(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && applyFilters()}
          />

          <Input
            type="number"
            placeholder="Min engagement %"
            value={minEngagement}
            onChange={(e) => setMinEngagement(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && applyFilters()}
          />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Select value={hasMedia} onValueChange={setHasMedia}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Media type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All posts</SelectItem>
              <SelectItem value="true">With media</SelectItem>
              <SelectItem value="false">Text only</SelectItem>
            </SelectContent>
          </Select>

          <div className="ml-auto flex gap-2">
            <Button onClick={clearFilters} variant="outline" size="sm">
              <X className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button onClick={applyFilters} size="sm">
              <Search className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
