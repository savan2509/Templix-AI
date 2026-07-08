import { createBrowserClient } from "@supabase/ssr";

// Browser-side Supabase client — safe to use in "use client" components.
// Uses the public anon key; all RLS policies apply.
//
// Returns null when the public Supabase env vars are missing, instead of
// throwing. That way a missing/incomplete config disables auth-related
// features gracefully rather than crashing every page that renders the
// Navbar (which would surface as a site-wide 500). Callers must handle null.
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    if (typeof window !== "undefined") {
      console.warn(
        "[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY not set — auth features are disabled.",
      );
    }
    return null;
  }
  return createBrowserClient(url, key);
}
