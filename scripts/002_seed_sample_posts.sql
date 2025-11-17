-- Insert sample channels
insert into public.channels (channel_name, channel_url, channel_username, subscribers_count, category, language, description)
values
  ('TechCrunch', 'https://t.me/techcrunch', 'techcrunch', 125000, 'Technology', 'English', 'Technology news and analysis'),
  ('BBC News', 'https://t.me/bbcnews', 'bbcnews', 890000, 'News', 'English', 'Breaking news from BBC'),
  ('Crypto Insider', 'https://t.me/cryptoinsider', 'cryptoinsider', 56000, 'Finance', 'English', 'Cryptocurrency news and tips')
on conflict (channel_username) do nothing;

-- Insert sample posts
insert into public.posts (
  channel_id,
  post_id,
  channel_username,
  content,
  post_url,
  views_count,
  reactions_count,
  comments_count,
  forwards_count,
  engagement_rate,
  published_at,
  has_media,
  media_type
)
select
  c.id,
  '12345',
  c.channel_username,
  'Breaking: New AI model surpasses GPT-4 in coding benchmarks. This could change everything for developers.',
  'https://t.me/' || c.channel_username || '/12345',
  45000,
  1200,
  89,
  450,
  3.86,
  now() - interval '2 hours',
  true,
  'photo'
from public.channels c where c.channel_username = 'techcrunch'
on conflict (channel_username, post_id) do nothing;

insert into public.posts (
  channel_id,
  post_id,
  channel_username,
  content,
  post_url,
  views_count,
  reactions_count,
  comments_count,
  forwards_count,
  engagement_rate,
  published_at,
  has_media,
  media_type
)
select
  c.id,
  '12346',
  c.channel_username,
  'Tesla announces new factory in Asia. Production to begin Q2 2025.',
  'https://t.me/' || c.channel_username || '/12346',
  38000,
  890,
  56,
  320,
  3.33,
  now() - interval '5 hours',
  false,
  null
from public.channels c where c.channel_username = 'techcrunch'
on conflict (channel_username, post_id) do nothing;

insert into public.posts (
  channel_id,
  post_id,
  channel_username,
  content,
  post_url,
  views_count,
  reactions_count,
  comments_count,
  forwards_count,
  engagement_rate,
  published_at,
  has_media,
  media_type
)
select
  c.id,
  '98765',
  c.channel_username,
  'Bitcoin reaches new all-time high of $95,000. Market analysis and what to expect next.',
  'https://t.me/' || c.channel_username || '/98765',
  23000,
  780,
  145,
  290,
  5.28,
  now() - interval '1 hour',
  true,
  'video'
from public.channels c where c.channel_username = 'cryptoinsider'
on conflict (channel_username, post_id) do nothing;

insert into public.posts (
  channel_id,
  post_id,
  channel_username,
  content,
  post_url,
  views_count,
  reactions_count,
  comments_count,
  forwards_count,
  engagement_rate,
  published_at,
  has_media,
  media_type
)
select
  c.id,
  '55555',
  c.channel_username,
  'BREAKING: Major diplomatic summit concludes with historic agreement.',
  'https://t.me/' || c.channel_username || '/55555',
  156000,
  4500,
  234,
  890,
  3.63,
  now() - interval '30 minutes',
  true,
  'photo'
from public.channels c where c.channel_username = 'bbcnews'
on conflict (channel_username, post_id) do nothing;
