import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Supabase Auth Callback Route
// Handles the OAuth/magic-link code exchange that Supabase sends after
// a successful sign-in or email confirmation. Exchanges the `code` query
// parameter for a session, then redirects the user to their destination.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/en/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Something went wrong — redirect to the error page
  return NextResponse.redirect(`${origin}/en/auth/error?error=auth_callback_failed`);
}
