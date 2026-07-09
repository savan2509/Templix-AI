import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Friendly password-reset URL: /{locale}/reset/{token}
//
// Verifies the one-time recovery token, establishes the session (so the
// reset-password form is allowed to call auth.updateUser), then hands the user
// to that form. Keeps the token out of the address bar afterwards.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string; token: string }> },
) {
  const { locale, token } = await params;
  const loc = /^[a-z]{2}$/.test(locale) ? locale : "en";
  const origin = new URL(request.url).origin;

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.redirect(`${origin}/${loc}/auth/error?error=auth_not_configured`);
  }

  const { data, error } = await supabase.auth.verifyOtp({
    type: "recovery",
    token_hash: token,
  });

  if (error || !data?.user) {
    // Expired, already used, or consumed by an email scanner.
    console.warn("[reset] verifyOtp failed:", error?.message);
    return NextResponse.redirect(`${origin}/${loc}/auth/error?error=auth_callback_failed`);
  }

  return NextResponse.redirect(`${origin}/${loc}/auth/reset-password`);
}
