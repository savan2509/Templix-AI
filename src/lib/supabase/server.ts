import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Server-side Supabase client — reads/writes session cookies via Next.js
// cookies() API. Use in Server Components, Route Handlers, and Server Actions.
//
// Returns null when the public Supabase env vars are missing, so callers can
// degrade gracefully instead of throwing (which would 500 the page). Callers
// must handle null.
export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const cookieStore = await cookies();

  return createServerClient(
    url,
    key,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // setAll called from a Server Component — cookies cannot be set
            // here, but this is fine; the middleware will handle session refresh.
          }
        },
      },
    }
  );
}
