"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from 'lucide-react';
import { addChannelByUrl } from "../lib/actions";
import { useRouter } from 'next/router';
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AddChannelDialog() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeRange, setTimeRange] = useState<"all" | "year" | "month" | "update">("month");
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const channelUrl = formData.get("channel_url") as string;

    try {
      console.log("[v0] [CLIENT] Adding channel:", channelUrl, "with time range:", timeRange);
      
      const result = await addChannelByUrl(channelUrl, timeRange);

      console.log("[v0] [CLIENT] Result received:", result);

      if (result.success) {
        toast({
          title: "Channel added",
          description: "message" in result ? result.message : "The channel and its posts have been successfully added.",
        });
        setOpen(false);
        e.currentTarget.reset();
        router.reload();
      } else {
        console.error("[v0] [CLIENT] Error from server:", result.error);
        toast({
          title: "Error",
          description: result.error || "Failed to add channel.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("[v0] [CLIENT] Exception adding channel:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred: " + (error instanceof Error ? error.message : "Unknown error"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <Plus className="h-5 w-5" />
          Add Channel
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Channel</DialogTitle>
            <DialogDescription>
              Enter a Telegram channel URL to automatically fetch posts and track data.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="channel_url">Channel URL</Label>
              <Input
                id="channel_url"
                name="channel_url"
                placeholder="https://t.me/techcrunch"
                required
              />
              <p className="text-sm text-muted-foreground">
                Supported formats: https://t.me/channel, t.me/channel, or @channel
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="time_range">Time Range</Label>
              <Select value={timeRange} onValueChange={(value) => setTimeRange(value as typeof timeRange)}>
                <SelectTrigger id="time_range">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All posts (entire history)</SelectItem>
                  <SelectItem value="year">Last year</SelectItem>
                  <SelectItem value="month">Last month</SelectItem>
                  <SelectItem value="update">Update with new posts only</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                {timeRange === "all" && "Fetch all available posts from the channel"}
                {timeRange === "year" && "Fetch posts from the last 12 months"}
                {timeRange === "month" && "Fetch posts from the last 30 days"}
                {timeRange === "update" && "Only add new posts since last update"}
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Fetching..." : "Add Channel"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
