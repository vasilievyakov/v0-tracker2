-- Drop existing restrictive policies
drop policy if exists "channels_insert_authenticated" on public.channels;
drop policy if exists "channels_update_authenticated" on public.channels;
drop policy if exists "channels_delete_authenticated" on public.channels;
drop policy if exists "posts_insert_authenticated" on public.posts;
drop policy if exists "posts_update_authenticated" on public.posts;
drop policy if exists "posts_delete_authenticated" on public.posts;

-- Create permissive policies for anonymous access (for demo purposes)
-- In production, you would want to use proper authentication

-- Allow all operations on channels
create policy "channels_insert_all"
  on public.channels for insert
  with check (true);

create policy "channels_update_all"
  on public.channels for update
  using (true);

create policy "channels_delete_all"
  on public.channels for delete
  using (true);

-- Allow all operations on posts
create policy "posts_insert_all"
  on public.posts for insert
  with check (true);

create policy "posts_update_all"
  on public.posts for update
  using (true);

create policy "posts_delete_all"
  on public.posts for delete
  using (true);
