# Telegram data platform

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/vasilievs-projects-5c720bbc/v0-tracker)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/jHnbkybEKBC)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/vasilievs-projects-5c720bbc/v0-tracker](https://vercel.com/vasilievs-projects-5c720bbc/v0-tracker)**

## Environment Variables

**⚠️ IMPORTANT: Before using the app, you must configure the following environment variable in Vercel:**

1. Go to your Vercel project settings: https://vercel.com/vasilievs-projects-5c720bbc/v0-tracker2/settings/environment-variables
2. Add the following environment variable:
   - **Name**: `ENCRYPTION_SECRET`
   - **Value**: A random string of at least 32 characters (you can generate one using: `openssl rand -base64 32`)
   - **Environment**: Production, Preview, Development (all)

**Why is this needed?**
The `ENCRYPTION_SECRET` is used to encrypt sensitive data (Telegram API credentials and sessions) stored in the database. Without it, the app cannot decrypt previously encrypted data and will show "Failed to decrypt data" errors.

**Note**: If you already have encrypted data in your database, you must use the **same** `ENCRYPTION_SECRET` that was used to encrypt it. Otherwise, you'll need to re-enter your API credentials and re-authenticate.

## Build your app

Continue building your app on:

**[https://v0.app/chat/jHnbkybEKBC](https://v0.app/chat/jHnbkybEKBC)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository