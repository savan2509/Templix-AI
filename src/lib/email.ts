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
          <td style="background:linear-gradient(135deg,#1d4ed8 0%,#2563eb 50%,#3b82f6 100%);padding:36px 40px;">
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
