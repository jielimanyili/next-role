import { updateSession } from "@/lib/supabase/middleware";
import { NextResponse, type NextRequest } from "next/server";

// App-wide proxy model (replacement for middleware in Next.js 16.2+)
export async function proxy(request: NextRequest) {
    console.log("[PROXY] path:", request.nextUrl.pathname);

    // Skip asset and file routes that shouldn't be handled by proxy.
    if (request.nextUrl.pathname.startsWith("/_next") || request.nextUrl.pathname.startsWith("/favicon.ico")) {
        return NextResponse.next();
    }

    // Reuse existing auth session flow.
    return await updateSession(request);
}