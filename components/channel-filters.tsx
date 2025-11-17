"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from 'lucide-react';
import { useRouter } from 'next/router';
import { useCallback } from "react";

export function ChannelFilters() {
  const router = useRouter();
  const query = router.query;

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams();
      Object.entries(query).forEach(([k, v]) => {
        if (v) params.set(k, v as string);
      });
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/?${params.toString()}`);
    },
    [router, query]
  );

  return (
    <Card className="mb-6 border-none shadow-sm">
      <CardContent className="pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search channels..."
              className="pl-9"
              defaultValue={typeof query.search === 'string' ? query.search : ""}
              onChange={(e) => updateFilter("search", e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <Select
            defaultValue={typeof query.category === 'string' ? query.category : "all"}
            onValueChange={(value) => updateFilter("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
            </SelectContent>
          </Select>

          {/* Language Filter */}
          <Select
            defaultValue={typeof query.language === 'string' ? query.language : "all"}
            onValueChange={(value) => updateFilter("language", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Russian">Russian</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
            </SelectContent>
          </Select>

          {/* Subscribers Range */}
          <Select
            defaultValue={typeof query.minSubscribers === 'string' ? query.minSubscribers : "all"}
            onValueChange={(value) => updateFilter("minSubscribers", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Subscribers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="10000">10K+ subscribers</SelectItem>
              <SelectItem value="50000">50K+ subscribers</SelectItem>
              <SelectItem value="100000">100K+ subscribers</SelectItem>
              <SelectItem value="200000">200K+ subscribers</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
