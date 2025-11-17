-- Insert sample Telegram channels for testing
insert into public.channels (
  channel_name,
  channel_url,
  subscribers_count,
  description,
  category,
  language,
  last_post_date,
  engagement_rate,
  tags
) values
  (
    'TechCrunch',
    'https://t.me/techcrunch',
    125000,
    'Breaking technology news and startup coverage',
    'Technology',
    'English',
    now() - interval '2 hours',
    7.5,
    array['tech', 'startups', 'news']
  ),
  (
    'Design Inspiration',
    'https://t.me/designinspiration',
    89000,
    'Daily design inspiration and UI/UX resources',
    'Design',
    'English',
    now() - interval '5 hours',
    12.3,
    array['design', 'ui', 'ux', 'inspiration']
  ),
  (
    'Crypto News',
    'https://t.me/cryptonewsdaily',
    210000,
    'Latest cryptocurrency news and market updates',
    'Finance',
    'English',
    now() - interval '1 hour',
    9.8,
    array['crypto', 'blockchain', 'finance']
  ),
  (
    'Marketing Pro',
    'https://t.me/marketingpro',
    45000,
    'Marketing strategies and growth hacking tips',
    'Marketing',
    'English',
    now() - interval '8 hours',
    6.2,
    array['marketing', 'growth', 'strategy']
  ),
  (
    'Dev Community',
    'https://t.me/devcommunity',
    178000,
    'Programming tutorials and developer resources',
    'Technology',
    'English',
    now() - interval '3 hours',
    11.5,
    array['programming', 'development', 'coding']
  ),
  (
    'Business Insights',
    'https://t.me/businessinsights',
    92000,
    'Business news and entrepreneurship advice',
    'Business',
    'English',
    now() - interval '6 hours',
    8.1,
    array['business', 'entrepreneurship', 'insights']
  ),
  (
    'AI & Machine Learning',
    'https://t.me/aimlchannel',
    156000,
    'Artificial intelligence and ML research updates',
    'Technology',
    'English',
    now() - interval '4 hours',
    10.2,
    array['ai', 'ml', 'research', 'tech']
  ),
  (
    'Startup Stories',
    'https://t.me/startupstories',
    67000,
    'Success stories and lessons from startups',
    'Business',
    'English',
    now() - interval '12 hours',
    5.9,
    array['startups', 'entrepreneurship', 'business']
  );
