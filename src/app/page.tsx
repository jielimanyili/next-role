"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_20%_20%,rgba(37,99,235,0.18),transparent),radial-gradient(60%_40%_at_80%_10%,rgba(20,184,166,0.16),transparent),radial-gradient(70%_45%_at_50%_90%,rgba(245,158,11,0.12),transparent)]" />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-8 px-6 py-20">
        <p className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
          NEXTROLE FOUNDATION
        </p>

        <div className="max-w-3xl space-y-5">
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Land your next role with less guesswork.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Week 1 setup is live: shadcn/ui, Supabase client scaffolding, route
            protection middleware, and a dashboard shell ready for CRUD features.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link className={buttonVariants()} href="/dashboard">
            Open dashboard
          </Link>
          <Link className={buttonVariants({ variant: "outline" })} href="/sign-in">
            Go to sign in
          </Link>
        </div>
      </section>
    </main>
  );
}
