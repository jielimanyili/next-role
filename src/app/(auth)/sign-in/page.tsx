import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";

export default function SignInPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
        <p className="text-sm text-muted-foreground">
          Supabase auth wiring is ready. Add provider actions next.
        </p>
      </div>
      <div className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">
          Phase 1 scaffold complete. Next step is to connect real credentials and
          server actions for email/password auth.
        </p>
      </div>
      <Link className={buttonVariants()} href="/dashboard">
        Continue to dashboard shell
      </Link>
      <p className="text-sm text-muted-foreground">
        Need an account? <Link className="underline" href="/sign-up">Create one</Link>
      </p>
    </main>
  );
}
