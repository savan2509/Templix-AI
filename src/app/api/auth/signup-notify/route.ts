import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sendNewUserAdminEmail } from "@/lib/email";

// Sends the "new sign-up" notification for the instant-signup path — i.e. when
// Supabase email confirmation is DISABLED, so signUp returns a live session and
// the /api/auth/supabase/callback route (which normally sends it) is never hit.
//
// Safe against abuse: it only ever emails the details of the *currently
// authenticated* user (read from the session cookie), and only when that
// account was created moments ago — so it can't be replayed for an old session
// or used to email arbitrary addresses.
export async function POST() {
  const supabase = await createClient();
  if (!supabase) return NextResponse.json({ ok: false, reason: "not-configured" });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) return NextResponse.json({ ok: false, reason: "no-session" });

  // Only notify for genuinely new accounts (created in the last 10 minutes).
  const createdMs = user.created_at ? new Date(user.created_at).getTime() : 0;
  if (createdMs && Date.now() - createdMs > 10 * 60 * 1000) {
    return NextResponse.json({ ok: true, skipped: "not-new" });
  }

  await sendNewUserAdminEmail({
    name:
      (user.user_metadata?.full_name as string | undefined) ??
      (user.user_metadata?.name as string | undefined),
    email: user.email,
    provider: "email",
  });

  return NextResponse.json({ ok: true });
}
