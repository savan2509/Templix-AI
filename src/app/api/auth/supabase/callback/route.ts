import { NextResponse } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { notifyNewUser } from "@/lib/email";

// Supabase Auth Callback Route
// Establishes a session from a Supabase email/OAuth confirmation. Supports two
// flows so it works reliably regardless of how the link was generated:
//   1. token_hash + type  → verifyOtp  (recommended; works across devices, no
//      PKCE verifier cookie required — the robust path for email confirmation)
//   2. code               → exchangeCodeForSession (PKCE; same-browser only)
// then redirects the user to their destination.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/en/dashboard";
  // Treat first-time email confirmations as a sign-up for the admin notice.
  const isSignup =
    searchParams.get("signup") === "1" || type === "signup" || type === "email";

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.redirect(`${origin}/en/auth/error?error=auth_not_configured`);
  }

  let authUser: {
    email?: string | null;
    created_at?: string;
    user_metadata?: Record<string, unknown>;
    app_metadata?: Record<string, unknown>;
  } | null = null;
  let ok = false;

  if (tokenHash && type) {
    const { data, error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash });
    if (!error) {
      ok = true;
      authUser = data.user;
    } else {
      console.warn("[auth] verifyOtp failed:", error.message);
    }
  } else if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      ok = true;
      authUser = data.user;
    } else {
      console.warn("[auth] exchangeCodeForSession failed:", error.message);
    }
  }

  if (ok) {
    // Detect a genuinely new account by its age. OAuth sign-ins (Google) come
    // through the `code` exchange with no `signup` flag or OTP `type`, so the
    // flag-based `isSignup` alone misses first-time Google users — treat any
    // account created in the last 10 minutes as a sign-up too. Returning users
    // have an old `created_at`, so they never re-trigger the notification.
    const createdMs = authUser?.created_at ? new Date(authUser.created_at).getTime() : 0;
    const isNewAccount = createdMs > 0 && Date.now() - createdMs < 10 * 60 * 1000;

    // First-time sign-up → notify the team with the new user's details.
    // Best-effort and awaited so it runs before the redirect, but notifyNewUser
    // never throws, so it cannot break the sign-up.
    if ((isSignup || isNewAccount) && authUser?.email) {
      await notifyNewUser({
        name:
          (authUser.user_metadata?.full_name as string | undefined) ??
          (authUser.user_metadata?.name as string | undefined),
        email: authUser.email,
        // Reflect how they actually signed up (e.g. "google") when Supabase
        // records it, falling back to email for the confirmation-link flow.
        provider: (authUser.app_metadata?.provider as string | undefined) || "email",
      });
    }
    return NextResponse.redirect(`${origin}${next}`);
  }

  // Something went wrong (expired, already-used, or scanner-consumed link).
  return NextResponse.redirect(`${origin}/en/auth/error?error=auth_callback_failed`);
}
