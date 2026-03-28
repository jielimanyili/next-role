# Copilot instructions for NextRole

This repository is a Next.js 16 (App Router) + React 19 project with Supabase auth.

## Architecture and conventions

1. Use App Router conventions:
   - `src/app/layout.tsx` as root layout.
   - `src/app/page.tsx` for `/`.
   - Nested routes via folders and `page.tsx` files.
   - Route groups with `(auth)` for auth pages (URL remains `/sign-in`, `/sign-up`).
2. Use `use client` only in components requiring client-side state, hooks, or browser APIs.
3. Auth and session state are managed via `src/lib/supabase` and `src/lib/supabase/middleware.ts`.
4. Use `next/navigation` `useRouter` for client redirects in components.
5. Keep UI components small and stateless when possible; use `shadcn/ui` variants and Tailwind utility classes.
6. Prefer typed state and event params (e.g., `SyntheticEvent<HTMLFormElement>`) in TypeScript.

## Supabase flow

1. `sign-up` and `sign-in` are in `src/app/(auth)` with `createClient()` calls.
2. Protected routes are defined in middleware `PROTECTED_PATHS = ["/dashboard"]`.
3. Auth-only paths are `AUTH_PATHS = ["/sign-in", "/sign-up"]`.
4. For protected pages, check user and redirect with `NextResponse.redirect`.

## Code style

- TypeScript strict null checks and explicit types.
- No direct env secrets in client code; use server env config loader.
- Keep code DRY with utility functions in `src/lib`.
- Avoid React class components; use function components and hooks.

## Do not

- Do not introduce legacy `pages/` folder usage.
- Do not bypass existing middleware auth checks for protected routes.
- Do not commit secrets or API keys.
