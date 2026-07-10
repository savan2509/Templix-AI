import { siteConfig } from "@/config/site";

// Where new-user sign-up notifications (and, by extension, contact/support
// mail) are delivered. Overridable via env, defaults to the team inbox.
export const ADMIN_NOTIFICATION_EMAIL =
  process.env.ADMIN_NOTIFICATION_EMAIL || "whitesparktechnologies@gmail.com";

// SMTP transport built from the same EMAIL_SERVER_* env used by the magic-link
// provider, so a single mail configuration powers every outbound email.
function buildTransport() {
  const host = process.env.EMAIL_SERVER_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.EMAIL_SERVER_PORT || "587", 10);
  const user = process.env.EMAIL_SERVER_USER;
  const pass = process.env.EMAIL_SERVER_PASSWORD;
  return {
    host,
    port,
    secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
    auth: user ? { user, pass } : undefined,
  };
}

interface NewUserInfo {
  name?: string | null;
  email: string;
  provider?: string; // "email", "google", "github", "magic-link", …
}

/**
 * Notifies the team inbox whenever a brand-new user signs up. Best-effort:
 * always logs the sign-up to the server console (so it is captured even when
 * SMTP is unavailable) and never throws, so a mail failure can never block the
 * user's sign-up / redirect.
 */
export async function sendNewUserAdminEmail(user: NewUserInfo): Promise<void> {
  const to = ADMIN_NOTIFICATION_EMAIL;
  const from =
    process.env.EMAIL_FROM ||
    process.env.EMAIL_SERVER_USER ||
    "no-reply@templix-ai.whitesparksoft.com";

  const name = (user.name && user.name.trim()) || user.email.split("@")[0];
  const provider = user.provider || "email";
  const when = new Date().toUTCString();

  console.log(
    `[signup] 🆕 New user: ${name} <${user.email}> via ${provider} @ ${when}`,
  );

  try {
    const nodemailer = await import("nodemailer");
    const transport = nodemailer.createTransport(buildTransport() as any);
    await transport.sendMail({
      to,
      from,
      subject: `New Templix AI sign-up: ${name}`,
      text:
        `A new user just signed up on Templix AI.\n\n` +
        `Name:            ${name}\n` +
        `Email:           ${user.email}\n` +
        `Sign-up method:  ${provider}\n` +
        `Time:            ${when}\n` +
        `Site:            ${siteConfig.url}\n`,
      html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e4e4e7;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        <tr>
          <td bgcolor="#1d4ed8" style="background-color:#1d4ed8;padding:36px 40px;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">⚡ Templix<span style="font-weight:400;">AI</span></p>
            <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);">New account sign-up</p>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 40px 8px;">
            <h1 style="margin:0 0 20px;font-size:20px;font-weight:700;color:#18181b;">A new user just joined 🎉</h1>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#3f3f46;">
              <tr><td style="padding:8px 0;color:#71717a;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#71717a;">Email</td><td style="padding:8px 0;font-weight:600;color:#2563eb;">${user.email}</td></tr>
              <tr><td style="padding:8px 0;color:#71717a;">Sign-up method</td><td style="padding:8px 0;font-weight:600;">${provider}</td></tr>
              <tr><td style="padding:8px 0;color:#71717a;">Time</td><td style="padding:8px 0;">${when}</td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:20px 40px;">
            <p style="margin:0;font-size:12px;color:#a1a1aa;">Automated notification from ${siteConfig.url}</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });
    console.log(`[signup] ✉️  Admin notified at ${to}`);
  } catch (err) {
    console.warn(
      "[signup] ⚠️  Failed to send admin notification email:",
      (err as Error).message,
    );
  }
}

/**
 * Welcomes the new user. When Supabase email confirmation is disabled (or its
 * SMTP relay is unavailable) the user otherwise receives no email at all, so we
 * send this from our own SMTP. Best-effort: never throws.
 */
export async function sendWelcomeEmail(user: NewUserInfo): Promise<void> {
  const from =
    process.env.EMAIL_FROM ||
    process.env.EMAIL_SERVER_USER ||
    "no-reply@templix-ai.whitesparksoft.com";
  const name = (user.name && user.name.trim()) || user.email.split("@")[0];
  const dashboard = `${siteConfig.url}/en/dashboard`;
  const templates = `${siteConfig.url}/en/templates`;

  try {
    const nodemailer = await import("nodemailer");
    const transport = nodemailer.createTransport(buildTransport() as any);
    await transport.sendMail({
      to: user.email,
      from,
      subject: "Welcome to Templix AI 🎉",
      text:
        `Hi ${name},\n\n` +
        `Welcome to Templix AI! Your account is ready.\n\n` +
        `Browse 180+ free templates: ${templates}\n` +
        `Go to your dashboard: ${dashboard}\n\n` +
        `Invoices, resumes, contracts, proposals and letters — free, no watermark.\n`,
      html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px;overflow:hidden;border:1px solid #e4e4e7;box-shadow:0 4px 24px rgba(0,0,0,.06);">
      <tr><td bgcolor="#1d4ed8" style="background-color:#1d4ed8;padding:40px 40px 36px;">
        <p style="margin:0;font-size:22px;font-weight:700;color:#fff;">⚡ Templix<span style="font-weight:400;">AI</span></p>
        <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,.8);">Professional Document Templates</p>
      </td></tr>
      <tr><td style="padding:40px 40px 8px;">
        <h1 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#18181b;">Welcome, ${name}! 🎉</h1>
        <p style="margin:0 0 24px;font-size:15px;color:#52525b;line-height:1.6;">Your Templix AI account is ready. Create professional invoices, resumes, contracts, proposals and letters in minutes — completely free, with no watermark.</p>
        <table width="100%"><tr><td align="center" style="padding:4px 0 28px;">
          <a href="${templates}" style="display:inline-block;padding:14px 40px;background-color:#2563eb;color:#fff;font-size:15px;font-weight:600;text-decoration:none;border-radius:12px;box-shadow:0 4px 12px rgba(37,99,235,.35);">Browse free templates →</a>
        </td></tr></table>
        <table width="100%"><tr><td style="border-top:1px solid #f0f0f0;padding-top:22px;">
          <p style="margin:0 0 6px;font-size:13px;color:#71717a;">Jump straight back in any time:</p>
          <p style="margin:0;font-size:13px;"><a href="${dashboard}" style="color:#2563eb;text-decoration:none;font-weight:600;">Open your dashboard</a></p>
        </td></tr></table>
      </td></tr>
      <tr><td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:22px 40px;">
        <p style="margin:0;font-size:12px;color:#a1a1aa;">You received this because an account was created for ${user.email} at ${siteConfig.url}.</p>
      </td></tr>
    </table>
  </td></tr></table>
</body>
</html>`,
    });
    console.log(`[signup] ✉️  Welcome email sent to ${user.email}`);
  } catch (err) {
    console.warn(
      "[signup] ⚠️  Failed to send welcome email:",
      (err as Error).message,
    );
  }
}

/**
 * Emails the sign-up confirmation link. Unlike the other two, this one THROWS
 * on failure: if we cannot deliver the link the account is unusable, so the
 * sign-up must report an error rather than silently stranding the user.
 */
export async function sendSignupVerificationEmail(input: {
  name?: string | null;
  email: string;
  confirmUrl: string;
}): Promise<void> {
  const from =
    process.env.EMAIL_FROM ||
    process.env.EMAIL_SERVER_USER ||
    "no-reply@templix-ai.whitesparksoft.com";
  const name = (input.name && input.name.trim()) || input.email.split("@")[0];
  const { confirmUrl } = input;

  const nodemailer = await import("nodemailer");
  const transport = nodemailer.createTransport(buildTransport() as any);
  await transport.sendMail({
    to: input.email,
    from,
    subject: "Confirm your Templix AI account",
    text:
      `Hi ${name},\n\n` +
      `Confirm your email to activate your Templix AI account:\n\n${confirmUrl}\n\n` +
      `Opening the link signs you in automatically. It expires in 24 hours and can be used once.\n\n` +
      `If you didn't create an account, you can ignore this email.\n`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px;overflow:hidden;border:1px solid #e4e4e7;box-shadow:0 4px 24px rgba(0,0,0,.06);">
      <tr><td bgcolor="#1d4ed8" style="background-color:#1d4ed8;padding:40px 40px 36px;">
        <p style="margin:0;font-size:22px;font-weight:700;color:#fff;">⚡ Templix<span style="font-weight:400;">AI</span></p>
        <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,.8);">Professional Document Templates</p>
      </td></tr>
      <tr><td style="padding:40px 40px 8px;">
        <h1 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#18181b;">Confirm your email</h1>
        <p style="margin:0 0 24px;font-size:15px;color:#52525b;line-height:1.6;">Hi ${name}, welcome to Templix AI! Click below to activate your account — you'll be signed in automatically.</p>
        <table width="100%"><tr><td align="center" style="padding:4px 0 28px;">
          <a href="${confirmUrl}" style="display:inline-block;padding:14px 40px;background-color:#2563eb;color:#fff;font-size:15px;font-weight:600;text-decoration:none;border-radius:12px;box-shadow:0 4px 12px rgba(37,99,235,.35);">Confirm &amp; sign in →</a>
        </td></tr></table>
        <table width="100%"><tr><td style="border-top:1px solid #f0f0f0;padding-top:22px;">
          <p style="margin:0 0 8px;font-size:13px;color:#71717a;">Or paste this link into your browser:</p>
          <p style="margin:0;font-size:12px;color:#a1a1aa;word-break:break-all;background:#f9f9f9;padding:10px 14px;border-radius:8px;border:1px solid #e4e4e7;">${confirmUrl}</p>
        </td></tr></table>
      </td></tr>
      <tr><td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:22px 40px;">
        <p style="margin:0 0 4px;font-size:12px;color:#a1a1aa;">This link expires in <strong>24 hours</strong> and can only be used once.</p>
        <p style="margin:0;font-size:12px;color:#a1a1aa;">If you didn't create a Templix AI account, you can safely ignore this email.</p>
      </td></tr>
    </table>
  </td></tr></table>
</body>
</html>`,
  });
  console.log(`[signup] ✉️  Confirmation link sent to ${input.email}`);
}

// Shared shell so every transactional email looks like the same product.
function wrap(title: string, bodyHtml: string, footerHtml: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px;overflow:hidden;border:1px solid #e4e4e7;box-shadow:0 4px 24px rgba(0,0,0,.06);">
      <tr><td bgcolor="#1d4ed8" style="background-color:#1d4ed8;padding:36px 40px;">
        <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">⚡ Templix<span style="font-weight:400;">AI</span></p>
        <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,.8);">${title}</p>
      </td></tr>
      <tr><td style="padding:36px 40px 8px;">${bodyHtml}</td></tr>
      <tr><td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:20px 40px;">
        <p style="margin:0;font-size:12px;color:#a1a1aa;">${footerHtml}</p>
      </td></tr>
    </table>
  </td></tr></table>
</body>
</html>`;
}

/**
 * Forwards a contact-form message to the team inbox. Throws on failure so the
 * form can tell the visitor their message did not go through.
 */
export async function sendContactMessageEmail(input: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
}): Promise<void> {
  const from =
    process.env.EMAIL_FROM ||
    process.env.EMAIL_SERVER_USER ||
    "no-reply@templix-ai.whitesparksoft.com";
  const subject = (input.subject || "").trim() || "New contact form message";
  const phone = (input.phone || "").trim();
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const nodemailer = await import("nodemailer");
  const transport = nodemailer.createTransport(buildTransport() as any);
  await transport.sendMail({
    to: ADMIN_NOTIFICATION_EMAIL,
    from,
    replyTo: `${input.name} <${input.email}>`, // hit Reply → answer the visitor
    subject: `[Contact] ${subject}`,
    text:
      `New message from the Templix AI contact form.\n\n` +
      `Name:    ${input.name}\nEmail:   ${input.email}\n` +
      (phone ? `Phone:   ${phone}\n` : "") +
      `Subject: ${subject}\n\n` +
      `${input.message}\n`,
    html: wrap(
      "New contact form message",
      `<h1 style="margin:0 0 20px;font-size:20px;font-weight:700;color:#18181b;">${esc(subject)}</h1>
       <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#3f3f46;">
         <tr><td style="padding:6px 0;color:#71717a;width:90px;">Name</td><td style="padding:6px 0;font-weight:600;">${esc(input.name)}</td></tr>
         <tr><td style="padding:6px 0;color:#71717a;">Email</td><td style="padding:6px 0;font-weight:600;color:#2563eb;">${esc(input.email)}</td></tr>
         ${phone ? `<tr><td style="padding:6px 0;color:#71717a;">Phone</td><td style="padding:6px 0;font-weight:600;">${esc(phone)}</td></tr>` : ""}
       </table>
       <div style="margin-top:18px;padding:16px 18px;background:#f9f9f9;border:1px solid #e4e4e7;border-radius:10px;font-size:14px;color:#3f3f46;line-height:1.6;white-space:pre-wrap;">${esc(input.message)}</div>`,
      `Reply directly to this email to answer ${esc(input.email)}.`,
    ),
  });
  console.log(`[contact] ✉️  Message from ${input.email} forwarded to ${ADMIN_NOTIFICATION_EMAIL}`);
}

/**
 * Tells the team someone subscribed to the newsletter. Throws on failure so the
 * form does not falsely claim success.
 */
export async function sendNewsletterSignupEmail(subscriber: string): Promise<void> {
  const from =
    process.env.EMAIL_FROM ||
    process.env.EMAIL_SERVER_USER ||
    "no-reply@templix-ai.whitesparksoft.com";
  const when = new Date().toUTCString();
  const esc = (s: string) => s.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const nodemailer = await import("nodemailer");
  const transport = nodemailer.createTransport(buildTransport() as any);
  await transport.sendMail({
    to: ADMIN_NOTIFICATION_EMAIL,
    from,
    replyTo: subscriber,
    subject: `New newsletter subscriber: ${subscriber}`,
    text: `New newsletter subscriber on Templix AI.\n\nEmail: ${subscriber}\nTime:  ${when}\n`,
    html: wrap(
      "New newsletter subscriber",
      `<h1 style="margin:0 0 20px;font-size:20px;font-weight:700;color:#18181b;">Someone subscribed 🎉</h1>
       <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#3f3f46;">
         <tr><td style="padding:6px 0;color:#71717a;width:90px;">Email</td><td style="padding:6px 0;font-weight:600;color:#2563eb;">${esc(subscriber)}</td></tr>
         <tr><td style="padding:6px 0;color:#71717a;">Time</td><td style="padding:6px 0;">${when}</td></tr>
       </table>`,
      `Automated notification from ${siteConfig.url}`,
    ),
  });
  console.log(`[newsletter] ✉️  Subscriber ${subscriber} forwarded to ${ADMIN_NOTIFICATION_EMAIL}`);
}

/**
 * Emails a password-reset link. Throws on failure so the caller can report it —
 * Supabase's own mailer cannot send for this project, so this is the only way
 * a user ever receives a reset link.
 */
export async function sendPasswordResetEmail(input: {
  email: string;
  resetUrl: string;
}): Promise<void> {
  const from =
    process.env.EMAIL_FROM ||
    process.env.EMAIL_SERVER_USER ||
    "no-reply@templix-ai.whitesparksoft.com";
  const name = input.email.split("@")[0];
  const { resetUrl } = input;

  const nodemailer = await import("nodemailer");
  const transport = nodemailer.createTransport(buildTransport() as any);
  await transport.sendMail({
    to: input.email,
    from,
    subject: "Reset your Templix AI password",
    text:
      `Hi ${name},\n\n` +
      `We received a request to reset your Templix AI password.\n\n${resetUrl}\n\n` +
      `The link expires in 1 hour and can be used once. ` +
      `If you didn't request this, you can safely ignore this email — your password stays unchanged.\n`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px;overflow:hidden;border:1px solid #e4e4e7;box-shadow:0 4px 24px rgba(0,0,0,.06);">
      <tr><td bgcolor="#1d4ed8" style="background-color:#1d4ed8;padding:40px 40px 36px;">
        <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">⚡ Templix<span style="font-weight:400;">AI</span></p>
        <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,.8);">Professional Document Templates</p>
      </td></tr>
      <tr><td style="padding:40px 40px 8px;">
        <h1 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#18181b;">Reset your password</h1>
        <p style="margin:0 0 24px;font-size:15px;color:#52525b;line-height:1.6;">We received a request to reset the password for <strong>${input.email}</strong>. Click below to choose a new one.</p>
        <table width="100%"><tr><td align="center" style="padding:4px 0 28px;">
          <a href="${resetUrl}" style="display:inline-block;padding:14px 40px;background-color:#2563eb;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;border-radius:12px;">Choose a new password →</a>
        </td></tr></table>
        <table width="100%"><tr><td style="border-top:1px solid #f0f0f0;padding-top:22px;">
          <p style="margin:0 0 8px;font-size:13px;color:#71717a;">Or paste this link into your browser:</p>
          <p style="margin:0;font-size:12px;color:#a1a1aa;word-break:break-all;background:#f9f9f9;padding:10px 14px;border-radius:8px;border:1px solid #e4e4e7;">${resetUrl}</p>
        </td></tr></table>
      </td></tr>
      <tr><td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:22px 40px;">
        <p style="margin:0 0 4px;font-size:12px;color:#a1a1aa;">This link expires in <strong>1 hour</strong> and can only be used once.</p>
        <p style="margin:0;font-size:12px;color:#a1a1aa;">Didn't request this? Ignore this email — your password stays unchanged.</p>
      </td></tr>
    </table>
  </td></tr></table>
</body>
</html>`,
  });
  console.log(`[reset] ✉️  Password reset link sent to ${input.email}`);
}

/**
 * Single entry point for a brand-new sign-up: welcomes the user AND notifies
 * the team. Both are best-effort and independent, so one failing never blocks
 * the other or the sign-up itself.
 */
export async function notifyNewUser(user: NewUserInfo): Promise<void> {
  await Promise.allSettled([
    sendWelcomeEmail(user),
    sendNewUserAdminEmail(user),
  ]);
}
