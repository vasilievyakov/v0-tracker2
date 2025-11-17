-- Insert sample channels
insert into public.channels (channel_name, channel_url, channel_username, subscribers_count, category, language, description)
values
  ('TechCrunch', 'https://t.me/techcrunch', 'techcrunch', 125000, 'Technology', 'English', 'Latest tech news and startup stories'),
  ('BBC News', 'https://t.me/bbcnews', 'bbcnews', 450000, 'News', 'English', 'Breaking news from around the world'),
  ('Startup Grind', 'https://t.me/startupgrind', 'startupgrind', 75000, 'Business', 'English', 'Entrepreneurship and startup insights')
on conflict (channel_username) do nothing;

-- Insert sample posts for TechCrunch
insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media, media_type)
select 
  c.id,
  '12345',
  'techcrunch',
  'OpenAI announces GPT-5 with groundbreaking multimodal capabilities. The new model can process video, audio, and text simultaneously, marking a significant leap in AI technology.',
  'https://t.me/techcrunch/12345',
  45000,
  1200,
  156,
  340,
  3.71,
  now() - interval '2 hours',
  true,
  'photo'
from public.channels c where c.channel_username = 'techcrunch'
on conflict (channel_username, post_id) do nothing;

insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media)
select 
  c.id,
  '12346',
  'techcrunch',
  'Tesla''s new AI chip could revolutionize autonomous driving. Elon Musk claims 10x performance improvement over previous generation.',
  'https://t.me/techcrunch/12346',
  38000,
  980,
  123,
  280,
  3.64,
  now() - interval '5 hours',
  false
from public.channels c where c.channel_username = 'techcrunch'
on conflict (channel_username, post_id) do nothing;

-- Insert sample posts for BBC News
insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media, media_type)
select 
  c.id,
  '98765',
  'bbcnews',
  'BREAKING: Major climate agreement reached at UN summit. 195 countries commit to ambitious carbon reduction targets.',
  'https://t.me/bbcnews/98765',
  156000,
  4200,
  678,
  1200,
  4.02,
  now() - interval '1 hour',
  true,
  'photo'
from public.channels c where c.channel_username = 'bbcnews'
on conflict (channel_username, post_id) do nothing;

insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media, media_type)
select 
  c.id,
  '98766',
  'bbcnews',
  'Stock markets surge as inflation data shows unexpected decline. Dow Jones up 2.3% in early trading.',
  'https://t.me/bbcnews/98766',
  89000,
  2100,
  234,
  567,
  3.26,
  now() - interval '4 hours',
  false
from public.channels c where c.channel_username = 'bbcnews'
on conflict (channel_username, post_id) do nothing;

-- Insert sample posts for Startup Grind
insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media)
select 
  c.id,
  '55555',
  'startupgrind',
  '5 lessons from founders who raised $100M+ Series A rounds. Thread 🧵',
  'https://t.me/startupgrind/55555',
  12000,
  450,
  89,
  120,
  5.49,
  now() - interval '3 hours',
  false
from public.channels c where c.channel_username = 'startupgrind'
on conflict (channel_username, post_id) do nothing;

insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media, media_type)
select 
  c.id,
  '55556',
  'startupgrind',
  'How to build a pitch deck that actually gets funded. Free template inside 📊',
  'https://t.me/startupgrind/55556',
  18000,
  680,
  134,
  210,
  5.69,
  now() - interval '8 hours',
  true,
  'document'
from public.channels c where c.channel_username = 'startupgrind'
on conflict (channel_username, post_id) do nothing;
