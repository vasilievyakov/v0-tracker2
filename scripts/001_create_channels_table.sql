-- Create channels table for storing Telegram channel information
create table if not exists public.channels (
  id uuid primary key default gen_random_uuid(),
  channel_name text not null,
  channel_url text not null unique,
  subscribers_count integer default 0,
  description text,
  category text,
  language text,
  last_post_date timestamp with time zone,
  engagement_rate numeric(5,2),
  tags text[],
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create index for faster searches
create index if not exists idx_channels_category on public.channels(category);
create index if not exists idx_channels_language on public.channels(language);
create index if not exists idx_channels_tags on public.channels using gin(tags);
create index if not exists idx_channels_created_at on public.channels(created_at desc);

-- Enable RLS
alter table public.channels enable row level security;

-- Public read access (anyone can view channels)
create policy "channels_select_all"
  on public.channels for select
  using (true);

-- Insert, update, delete policies (for now, allow all authenticated users)
-- In production, you might want to restrict this to admins only
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
