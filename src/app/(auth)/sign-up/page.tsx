import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";

export default function SignUpPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Create account</h1>
        <p className="text-sm text-muted-foreground">
          Multi-user auth entrypoint for NextRole.
        </p>
      </div>
      <div className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">
          Connect this page to Supabase sign-up action and email verification in
          the next auth task.
        </p>
      </div>
      <Link className={buttonVariants()} href="/sign-in">
        Back to sign in
      </Link>
    </main>
  );
}
