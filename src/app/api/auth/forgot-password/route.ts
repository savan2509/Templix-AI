import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendPasswordResetEmail } from "@/lib/email";
import { siteConfig } from "@/config/site";

// Password reset, delivered by OUR SMTP.
//
// supabase.auth.resetPasswordForEmail() asks Supabase to send the mail, which
// fails for this project ("Error sending recovery email" — Gmail rejects
// relaying from Supabase's servers). Instead we mint the recovery token
// server-side with admin.generateLink() (which sends nothing) and email the
// link ourselves. Opening it hits /{locale}/reset/{token}, which verifies the
// token, establishes a session, and drops the user on the reset-password form.
//
// Always responds { ok: true } for a well-formed email — never reveal whether
// an account exists (that would be an enumeration oracle).
export async function POST(request: Request) {
  let body: { email?: string; locale?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  const locale = (body.locale || "en").replace(/[^a-z]/g, "") || "en";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const admin = createAdminClient();
  if (!admin) {
    // Not configured — let the client fall back to Supabase's own mailer.
    return NextResponse.json({ fallback: true });
  }

  const { data, error } = await admin.auth.admin.generateLink({
    type: "recovery",
    email,
    options: { redirectTo: `${siteConfig.url}/${locale}/auth/reset-password` },
  });

  // No such user (or any other lookup failure): respond exactly as if it worked.
  if (error || !data?.properties?.hashed_token) {
    console.warn("[reset] generateLink skipped:", error?.message ?? "no token");
    return NextResponse.json({ ok: true });
  }

  const resetUrl =
    `${siteConfig.url}/${locale}/reset/` +
    `${encodeURIComponent(data.properties.hashed_token)}`;

  try {
    await sendPasswordResetEmail({ email, resetUrl });
  } catch (err) {
    console.warn("[reset] ⚠️  Could not send reset link:", (err as Error).message);
    return NextResponse.json(
      { error: "We couldn't send the reset email. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
