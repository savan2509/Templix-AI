import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sendWelcomeEmail } from "@/lib/email";

// Friendly sign-up confirmation URL: /{locale}/confirm/{token}
//
// The emailed link used to expose the plumbing
// (/api/auth/supabase/callback?token_hash=…&type=signup&next=…). This route
// carries the token as a path segment instead, so the address stays short and
// readable. It verifies the one-time token, establishes the session (the user
// is signed in by opening the link) and lands them on the dashboard.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; token: string }> },
) {
  const { locale, token } = await params;
  const loc = /^[a-z]{2}$/.test(locale) ? locale : "en";
  const origin = new URL(_request.url).origin;

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.redirect(`${origin}/${loc}/auth/error?error=auth_not_configured`);
  }

  const { data, error } = await supabase.auth.verifyOtp({
    type: "signup",
    token_hash: token,
  });

  if (error || !data?.user) {
    // Expired, already used, or consumed by an email scanner.
    console.warn("[confirm] verifyOtp failed:", error?.message);
    return NextResponse.redirect(`${origin}/${loc}/auth/error?error=auth_callback_failed`);
  }

  // Welcome the user. The team was already notified at sign-up time (see
  // /api/auth/signup), so don't send a second admin notice here.
  if (data.user.email) {
    await sendWelcomeEmail({
      name:
        (data.user.user_metadata?.full_name as string | undefined) ??
        (data.user.user_metadata?.name as string | undefined),
      email: data.user.email,
      provider: "email",
    });
  }

  return NextResponse.redirect(`${origin}/${loc}/dashboard`);
}
