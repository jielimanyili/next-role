# NextRole

Land your next role with less guesswork.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase Auth + Postgres + Storage
- Vercel deployment target

## Quick Start

```bash
npm install
cp .env.example .env.local
# set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
npm run dev
```

Open http://localhost:3000.

## Week 1 Foundation (Completed)

- shadcn/ui initialized
- Supabase browser/server client scaffolding
- Middleware-based protected route guard
- Auth entry pages (/sign-in, /sign-up)
- Dashboard shell (/dashboard)
- Structured logging helper

Detailed execution checklist:

- docs/week1-foundation-checklist.md

## Next Steps

1. Add SQL migrations for tables/enums/indexes.
2. Add RLS and Supabase storage policies.
3. Implement real sign-in/sign-up/sign-out actions.
4. Add auth + protected-route integration tests.
5. Deploy to Vercel with environment variables.

