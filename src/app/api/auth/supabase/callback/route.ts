import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sendNewUserAdminEmail } from "@/lib/email";

// Supabase Auth Callback Route
// Handles the OAuth/magic-link code exchange that Supabase sends after
// a successful sign-in or email confirmation. Exchanges the `code` query
// parameter for a session, then redirects the user to their destination.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/en/dashboard";
  const isSignup = searchParams.get("signup") === "1";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // First-time account confirmation → notify the team with the new user's
      // details. Best-effort and awaited so it runs before the redirect, but
      // sendNewUserAdminEmail never throws, so it can't break the sign-up.
      if (isSignup && data?.user?.email) {
        await sendNewUserAdminEmail({
          name:
            (data.user.user_metadata?.full_name as string | undefined) ??
            (data.user.user_metadata?.name as string | undefined),
          email: data.user.email,
          provider: "email",
        });
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Something went wrong — redirect to the error page
  return NextResponse.redirect(`${origin}/en/auth/error?error=auth_callback_failed`);
}
