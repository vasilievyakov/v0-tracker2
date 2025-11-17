# Архитектура проекта и интеграция с Vercel

## Обзор

Проект использует **Next.js 14** с **App Router** и развернут на **Vercel**. Ниже описано, как компоненты взаимодействуют с платформой Vercel.

## Runtime окружения

### Edge Runtime (Middleware)

**Файл:** `app/middleware.ts`

- **Runtime:** Edge Runtime (по умолчанию для middleware)
- **Ограничения:**
  - ❌ Не поддерживает Node.js модули (`pino-http`, `fs`, `crypto` и т.д.)
  - ❌ Только ES Modules
  - ❌ Нет доступа к файловой системе
  - ✅ Поддерживает Web APIs (`Request`, `Response`, `fetch`)
- **Использование:** Простой passthrough для маршрутизации
- **Логирование:** Не выполняется в middleware (Edge Runtime не поддерживает Pino)

### Node.js Runtime (API Routes)

**Файлы:** `app/api/**/route.ts`

- **Runtime:** Node.js (явно указан через `export const runtime = 'nodejs'`)
- **Возможности:**
  - ✅ Полный доступ к Node.js API
  - ✅ Поддержка всех npm пакетов (`telegram`, `pg`, `pino`, и т.д.)
  - ✅ Файловая система, crypto, и другие нативные модули
- **Логирование:** Используется Pino logger (`lib/logger.ts`)

## Структура логирования

### Централизованный Logger

**Файл:** `lib/logger.ts`

```typescript
import pino from "pino";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: isProd ? undefined : { target: "pino-pretty" }
});
```

**Особенности:**
- **Development:** Красивое форматирование через `pino-pretty`
- **Production (Vercel):** JSON логи в stdout (автоматически собираются Vercel)
- **Уровни:** `fatal`, `error`, `warn`, `info`, `debug`, `trace`

### Где используется

✅ **API Routes** (`app/api/**/route.ts`) - Node.js runtime
```typescript
logger.info({ userId }, "User action");
logger.error({ err }, "Operation failed");
```

❌ **Middleware** (`app/middleware.ts`) - Edge Runtime
- Логирование не выполняется (Edge Runtime не поддерживает Pino)
- Middleware только пропускает запросы

✅ **Server Actions** (`lib/actions.ts`, `app/actions.ts`) - Node.js runtime
```typescript
logger.info({ channelUrl }, "Processing channel");
logger.error({ err }, "Error occurred");
```

## Vercel Deployment

### Build Process

1. **Install:** `npm install --legacy-peer-deps` (указано в `vercel.json`)
2. **Build:** `npm run build` → Next.js собирает App Router
3. **Deploy:** Vercel автоматически развертывает:
   - **Edge Functions** (middleware) → Edge Runtime
   - **Serverless Functions** (API routes) → Node.js Runtime

### Конфигурация

**`vercel.json`:**
```json
{
  "installCommand": "npm install --legacy-peer-deps",
  "buildCommand": "npm run build"
}
```

**`next.config.js`:**
```javascript
{
  reactStrictMode: true,
  // App Router стабилен в Next.js 14+, флаг experimental не нужен
}
```

## Важные моменты

### ✅ Правильно

1. **API Routes используют Node.js runtime:**
   ```typescript
   export const runtime = 'nodejs'  // Явное указание
   ```

2. **Логирование только в Node.js runtime:**
   - API Routes ✅
   - Server Actions ✅
   - Server Components ✅

3. **Middleware минималистичен:**
   - Только `NextResponse.next()` для passthrough
   - Без Node.js зависимостей

### ❌ Неправильно

1. **Использование Node.js модулей в Edge Runtime:**
   ```typescript
   // ❌ НЕ РАБОТАЕТ в middleware
   import pinoHttp from 'pino-http'
   import fs from 'fs'
   ```

2. **Логирование в middleware:**
   ```typescript
   // ❌ НЕ РАБОТАЕТ
   import { logger } from '@/lib/logger'
   export function middleware() {
     logger.info('...')  // Edge Runtime не поддерживает Pino
   }
   ```

## Мониторинг и логи

### Vercel Dashboard

1. **Build Logs:** Видны во время сборки
2. **Function Logs:** JSON логи от Pino в разделе Functions → Logs
3. **Real-time:** Логи доступны сразу после деплоя

### Локальная разработка

```bash
npm run dev
# Логи красиво форматируются через pino-pretty
```

### Production

```bash
# Логи в JSON формате, автоматически собираются Vercel
# Доступны в Dashboard → Functions → Logs
```

## Переменные окружения

**Обязательные:**
- `ENCRYPTION_SECRET` - для шифрования Telegram сессий
- `POSTGRES_URL` - строка подключения к Supabase
- `SUPABASE_URL` - URL Supabase проекта
- `SUPABASE_ANON_KEY` - анонимный ключ Supabase

**Опциональные:**
- `LOG_LEVEL` - уровень логирования (по умолчанию `info`)
- `LOGFLARE_API_KEY` - для интеграции с Logflare (если нужно)
- `LOGFLARE_SOURCE_TOKEN` - токен источника Logflare

## Резюме

- **Middleware** = Edge Runtime (минималистичный, без Node.js)
- **API Routes** = Node.js Runtime (полный функционал, логирование)
- **Логирование** = Pino (только в Node.js runtime)
- **Vercel** = Автоматически определяет runtime и развертывает соответственно

