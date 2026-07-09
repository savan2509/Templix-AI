import { NextResponse } from "next/server";
import { sendNewsletterSignupEmail } from "@/lib/email";

// Newsletter sign-up. The footer form used to fake success without sending
// anything anywhere; it now forwards the subscriber to the team inbox.
export async function POST(request: Request) {
  let body: { email?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a real person never fills a hidden field. Pretend it worked.
  if (body.website) return NextResponse.json({ ok: true });

  const email = (body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await sendNewsletterSignupEmail(email);
  } catch (err) {
    console.warn("[newsletter] ⚠️  Failed to forward subscriber:", (err as Error).message);
    return NextResponse.json(
      { error: "We couldn't sign you up right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
