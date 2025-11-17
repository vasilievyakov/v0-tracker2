"use strict";
(() => {
var exports = {};
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 2824:
/***/ ((module) => {

module.exports = require("next/server");

/***/ }),

/***/ 8678:
/***/ ((module) => {

module.exports = import("pg");;

/***/ }),

/***/ 1887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST": () => (/* binding */ POST)
/* harmony export */ });
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2824);
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pg__WEBPACK_IMPORTED_MODULE_1__]);
pg__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function POST() {
    try {
        console.log("[v0] Starting database setup...");
        const client = new pg__WEBPACK_IMPORTED_MODULE_1__["default"].Client({
            connectionString: process.env.POSTGRES_URL
        });
        await client.connect();
        console.log("[v0] Connected to database");
        // Create tables SQL
        console.log("[v0] Creating tables...");
        const createTablesSQL = `
      -- Drop existing channels table if it exists (from old structure)
      drop table if exists public.channels cascade;

      -- Create channels table (stores channel metadata)
      create table public.channels (
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
      create table public.posts (
        id uuid primary key default gen_random_uuid(),
        channel_id uuid not null references public.channels(id) on delete cascade,
        post_id text not null,
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
        media_type text,
        created_at timestamp with time zone default now(),
        unique(channel_username, post_id)
      );

      -- Create indexes for performance
      create index idx_posts_channel_id on public.posts(channel_id);
      create index idx_posts_published_at on public.posts(published_at desc);
      create index idx_posts_views_count on public.posts(views_count desc);
      create index idx_posts_engagement_rate on public.posts(engagement_rate desc);
      create index idx_posts_content on public.posts using gin(to_tsvector('english', content));
      create index idx_channels_category on public.channels(category);
      create index idx_channels_language on public.channels(language);

      -- Enable RLS
      alter table public.channels enable row level security;
      alter table public.posts enable row level security;

      -- Public read access policies
      create policy "channels_select_all"
        on public.channels for select
        using (true);

      create policy "posts_select_all"
        on public.posts for select
        using (true);

      -- Authenticated user write policies
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
    `;
        await client.query(createTablesSQL);
        console.log("[v0] Tables created successfully");
        // Seed data SQL
        console.log("[v0] Seeding sample data...");
        const seedDataSQL = `
      -- Insert sample channels
      insert into public.channels (channel_name, channel_url, channel_username, subscribers_count, category, language, description) values
      ('TechCrunch', 'https://t.me/techcrunch', 'techcrunch', 125000, 'Technology', 'English', 'Latest tech news and startup updates'),
      ('Durov''s Channel', 'https://t.me/durov', 'durov', 890000, 'Technology', 'English', 'Pavel Durov''s official channel'),
      ('Crypto News', 'https://t.me/cryptonews', 'cryptonews', 67000, 'Finance', 'English', 'Cryptocurrency and blockchain news');

      -- Insert sample posts
      insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media, media_type)
      select 
        c.id,
        '12345',
        'techcrunch',
        'Breaking: New AI startup raises $100M Series B funding round. The company plans to revolutionize natural language processing.',
        'https://t.me/techcrunch/12345',
        45000,
        1200,
        340,
        890,
        5.40,
        now() - interval '2 hours',
        true,
        'photo'
      from public.channels c where c.channel_username = 'techcrunch';

      insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media, media_type)
      select 
        c.id,
        '98765',
        'durov',
        'Privacy is not a privilege, it''s a fundamental human right. We continue to improve Telegram''s encryption and security features.',
        'https://t.me/durov/98765',
        320000,
        28000,
        5600,
        12000,
        14.25,
        now() - interval '5 hours',
        false,
        null
      from public.channels c where c.channel_username = 'durov';

      insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media, media_type)
      select 
        c.id,
        '55555',
        'cryptonews',
        'Bitcoin reaches new all-time high of $75,000! Market analysis and expert predictions inside.',
        'https://t.me/cryptonews/55555',
        89000,
        4500,
        1200,
        3400,
        10.11,
        now() - interval '1 day',
        true,
        'photo'
      from public.channels c where c.channel_username = 'cryptonews';

      insert into public.posts (channel_id, post_id, channel_username, content, post_url, views_count, reactions_count, comments_count, forwards_count, engagement_rate, published_at, has_media, media_type)
      select 
        c.id,
        '12346',
        'techcrunch',
        'Apple announces new MacBook Pro with M4 chip. Performance benchmarks show 40% improvement over M3.',
        'https://t.me/techcrunch/12346',
        62000,
        2100,
        780,
        1500,
        7.06,
        now() - interval '12 hours',
        true,
        'video'
      from public.channels c where c.channel_username = 'techcrunch';
    `;
        await client.query(seedDataSQL);
        console.log("[v0] Sample data seeded successfully");
        await client.end();
        console.log("[v0] Database setup completed!");
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            success: true,
            message: "Database setup completed successfully. Please refresh the page."
        });
    } catch (error) {
        console.error("[v0] Database setup error:", error);
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1887));
module.exports = __webpack_exports__;

})();