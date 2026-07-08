import { createBrowserClient } from "@supabase/ssr";

// Browser-side Supabase client — safe to use in "use client" components.
// Uses the public anon key; all RLS policies apply.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
