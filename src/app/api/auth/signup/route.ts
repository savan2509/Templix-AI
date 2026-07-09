import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendSignupVerificationEmail } from "@/lib/email";
import { siteConfig } from "@/config/site";

// Sign-up with email confirmation, delivered by OUR SMTP.
//
// Supabase's own mailer cannot send for this project (its Gmail relay returns
// "Error sending confirmation email"), so instead of calling supabase.auth
// .signUp() from the browser — which would auto-login or fail — we:
//   1. mint the confirmation token server-side via admin.generateLink()
//      (generateLink never sends an email itself), then
//   2. email the link from our own working SMTP.
// Clicking it hits /{locale}/confirm/{token}, which verifies the OTP,
// establishes the session, and lands the user on the dashboard — i.e. the link
// signs them in automatically.
//
// If SUPABASE_SECRET_KEY is absent we return `fallback: true` so the client can
// keep using the previous instant-signup path rather than breaking.
export async function POST(request: Request) {
  let body: { email?: string; password?: string; fullName?: string; locale?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  const password = body.password || "";
  const fullName = (body.fullName || "").trim();
  const locale = (body.locale || "en").replace(/[^a-z]/g, "") || "en";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  const admin = createAdminClient();
  if (!admin) {
    // Not configured — let the client fall back to the old instant signup.
    return NextResponse.json({ fallback: true });
  }

  const redirectTo = `${siteConfig.url}/${locale}/dashboard`;

  const { data, error } = await admin.auth.admin.generateLink({
    type: "signup",
    email,
    password,
    options: { data: { full_name: fullName }, redirectTo },
  });

  if (error || !data?.properties?.hashed_token) {
    const msg = error?.message || "Could not create the account.";
    const already = /already|exists|registered/i.test(msg);
    return NextResponse.json(
      { error: already ? "An account with this email already exists. Try signing in." : msg },
      { status: already ? 409 : 400 },
    );
  }

  // Short, readable link — /{locale}/confirm/{token} verifies the token,
  // signs the user in, and lands them on the dashboard.
  const confirmUrl =
    `${siteConfig.url}/${locale}/confirm/` +
    `${encodeURIComponent(data.properties.hashed_token)}`;

  try {
    await sendSignupVerificationEmail({ name: fullName, email, confirmUrl });
  } catch (err) {
    // The account exists but is unconfirmed and the user has no link — surface it.
    console.warn("[signup] ⚠️  Could not send confirmation link:", (err as Error).message);
    return NextResponse.json(
      { error: "We couldn't send the confirmation email. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
