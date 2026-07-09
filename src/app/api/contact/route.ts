import { NextResponse } from "next/server";
import { sendContactMessageEmail } from "@/lib/email";

// Contact form → team inbox. Sets Reply-To to the visitor, so hitting Reply in
// the inbox answers them directly.
export async function POST(request: Request) {
  let body: {
    name?: string; email?: string; subject?: string; message?: string; website?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a real person never fills a hidden field. Pretend it worked.
  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name || "").trim();
  const email = (body.email || "").trim().toLowerCase();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ error: "Please write at least a few words." }, { status: 400 });
  }
  if (message.length > 5000 || subject.length > 200) {
    return NextResponse.json({ error: "Your message is too long." }, { status: 400 });
  }

  try {
    await sendContactMessageEmail({ name, email, subject, message });
  } catch (err) {
    console.warn("[contact] ⚠️  Failed to forward message:", (err as Error).message);
    return NextResponse.json(
      { error: "We couldn't send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
