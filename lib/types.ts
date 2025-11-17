export interface Channel {
  id: string;
  channel_name: string;
  channel_url: string;
  channel_username: string;
  subscribers_count: number;
  category: string | null;
  language: string | null;
  description: string | null;
  last_post_date: string | null;
  engagement_rate: number | null;
  tags: string[] | null;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  channel_id: string;
  post_id: string;
  channel_username: string;
  content: string | null;
  post_url: string;
  views_count: number;
  reactions_count: number;
  comments_count: number;
  forwards_count: number;
  engagement_rate: number | null;
  published_at: string;
  has_media: boolean;
  media_type: string | null;
  created_at: string;
  // Joined channel data
  channel?: Channel;
}

export interface PostFilters {
  search?: string;
  category?: string;
  language?: string;
  channelUsername?: string;
  minViews?: number;
  maxViews?: number;
  minEngagement?: number;
  hasMedia?: boolean;
  mediaType?: string;
  dateFrom?: string;
  dateTo?: string;
}
