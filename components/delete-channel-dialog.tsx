"use client";

import { Channel } from "@/lib/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteChannel } from "@/app/actions";
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface DeleteChannelDialogProps {
  channel: Channel | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteChannelDialog({
  channel,
  open,
  onOpenChange,
}: DeleteChannelDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleDelete = async () => {
    if (!channel) return;

    setIsLoading(true);
    try {
      const result = await deleteChannel(channel.id);

      if (result.success) {
        toast({
          title: "Channel deleted",
          description: "The channel has been successfully deleted.",
        });
        onOpenChange(false);
        router.refresh();
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to delete channel.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the channel{" "}
            <span className="font-semibold">{channel?.channel_name}</span>. This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
