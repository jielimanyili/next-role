# Week 1 Foundation Checklist

## Commands

```bash
npm install
npm run dev
npm run lint
```

## Environment

- [ ] Copy `.env.example` to `.env.local`
- [ ] Set `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Set `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## File-by-File Tasks

- [x] `src/lib/env.ts`: central env validation via Zod
- [x] `src/lib/supabase/client.ts`: browser Supabase client
- [x] `src/lib/supabase/server.ts`: server Supabase client
- [x] `src/lib/supabase/middleware.ts`: session update + route guards
- [x] `middleware.ts`: app-level middleware registration
- [x] `src/app/(auth)/sign-in/page.tsx`: sign-in entry page scaffold
- [x] `src/app/(auth)/sign-up/page.tsx`: sign-up entry page scaffold
- [x] `src/app/(app)/dashboard/page.tsx`: protected dashboard shell
- [x] `src/lib/logger.ts`: baseline structured logging helper

## Pending This Week

- [ ] Add Supabase SQL migrations and RLS policy files
- [ ] Implement sign-in/sign-up server actions
- [ ] Add sign-out action in dashboard layout
- [ ] Add integration tests for auth redirect + one protected route
- [ ] Configure Vercel env vars and first deployment
