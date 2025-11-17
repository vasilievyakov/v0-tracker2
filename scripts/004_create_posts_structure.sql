-- Create channels table (simplified, stores channel metadata)
create table if not exists public.channels (
  id uuid primary key default gen_random_uuid(),
  channel_name text not null,
  channel_url text not null unique,
  channel_username text not null unique,
  subscribers_count integer default 0,
  category text,
  language text,
  description text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create posts table (stores individual posts from channels)
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  channel_id uuid not null references public.channels(id) on delete cascade,
  post_id text not null, -- Telegram post ID
  channel_username text not null,
  content text,
  post_url text not null,
  views_count integer default 0,
  reactions_count integer default 0,
  comments_count integer default 0,
  forwards_count integer default 0,
  engagement_rate numeric(5,2),
  published_at timestamp with time zone not null,
  has_media boolean default false,
  media_type text, -- photo, video, document, etc.
  created_at timestamp with time zone default now(),
  unique(channel_username, post_id)
);

-- Create indexes for faster searches
create index if not exists idx_posts_channel_id on public.posts(channel_id);
create index if not exists idx_posts_published_at on public.posts(published_at desc);
create index if not exists idx_posts_views_count on public.posts(views_count desc);
create index if not exists idx_posts_engagement_rate on public.posts(engagement_rate desc);
create index if not exists idx_posts_content on public.posts using gin(to_tsvector('english', content));

create index if not exists idx_channels_category on public.channels(category);
create index if not exists idx_channels_language on public.channels(language);

-- Enable RLS
alter table public.channels enable row level security;
alter table public.posts enable row level security;

-- Public read access
create policy "channels_select_all"
  on public.channels for select
  using (true);

create policy "posts_select_all"
  on public.posts for select
  using (true);

-- Insert, update, delete policies (authenticated users)
create policy "channels_insert_authenticated"
  on public.channels for insert
  to authenticated
  with check (true);

create policy "channels_update_authenticated"
  on public.channels for update
  to authenticated
  using (true);

create policy "channels_delete_authenticated"
  on public.channels for delete
  to authenticated
  using (true);

create policy "posts_insert_authenticated"
  on public.posts for insert
  to authenticated
  with check (true);

create policy "posts_update_authenticated"
  on public.posts for update
  to authenticated
  using (true);

create policy "posts_delete_authenticated"
  on public.posts for delete
  to authenticated
  using (true);
