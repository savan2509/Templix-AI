import NextAuth from "next-auth";
import { db, isDbOnline, setDbOnline } from "@/lib/db";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Nodemailer from "next-auth/providers/nodemailer";
import { notifyNewUser } from "@/lib/email";

// ── Persistent global stores ──────────────────────────────────────────────────
// We use globalThis so that tokens and users survive hot-module-reloads in dev.
// Without this, the token stored during sign-in would be lost when Next.js
// reloads the module between the sign-in and the callback requests.
const g = globalThis as any;
if (!g.__templixAuth) {
  g.__templixAuth = {
    tokens: new Map<string, { identifier: string; token: string; expires: Date }>(),
    users: new Map<string, { id: string; email: string; name: string; emailVerified: Date; image: null }>(),
  };
}
const memTokens: Map<string, { identifier: string; token: string; expires: Date }> =
  g.__templixAuth.tokens;
const memUsers: Map<string, { id: string; email: string; name: string; emailVerified: Date; image: null }> =
  g.__templixAuth.users;

// ── Full in-memory stub adapter ───────────────────────────────────────────────
// Used when database is offline. Fully implements all NextAuth adapter methods
// so the magic link flow (createVerificationToken → useVerificationToken →
// getUserByEmail → createUser) works end-to-end without a database.
const stubAdapter = {
  createUser: async (data: any) => {
    const user = {
      id: `mem-user-${Date.now()}`,
      email: data.email as string,
      emailVerified: new Date(),
      name: (data.name as string) || (data.email as string).split("@")[0],
      image: null,
    };
    memUsers.set(data.email, user);
    console.log(`[auth] 👤 Created in-memory user for ${data.email}`);
    return user;
  },
  getUser: async (id: string) => {
    for (const user of memUsers.values()) {
      if (user.id === id) return user;
    }
    return null;
  },
  getUserByEmail: async (email: string) => {
    return memUsers.get(email) || null;
  },
  getUserByAccount: async () => null,
  updateUser: async (data: any) => {
    const existing = memUsers.get(data.email);
    if (existing) {
      const updated = { ...existing, ...data };
      memUsers.set(data.email, updated);
      return updated;
    }
    return { ...data, id: data.id || `mem-user-${Date.now()}` };
  },
  deleteUser: async () => undefined,
  linkAccount: async () => null as any,
  unlinkAccount: async () => undefined,
  createSession: async (data: any) => data,
  getSessionAndUser: async () => null,
  updateSession: async (data: any) => data,
  deleteSession: async () => undefined,
  createVerificationToken: async (data: { identifier: string; token: string; expires: Date }) => {
    memTokens.set(data.token, data);
    console.log(`[auth] 💾 Magic link token saved for ${data.identifier}`);
    return data;
  },
  useVerificationToken: async (params: { identifier: string; token: string }) => {
    const stored = memTokens.get(params.token);
    if (!stored) {
      console.log("[auth] ❌ Token not found in memory store.");
      return null;
    }
    if (stored.identifier !== params.identifier) {
      console.log("[auth] ❌ Token identifier mismatch.");
      return null;
    }
    if (stored.expires < new Date()) {
      memTokens.delete(params.token);
      console.log("[auth] ❌ Token expired.");
      return null;
    }
    memTokens.delete(params.token);
    console.log(`[auth] ✅ Token validated for ${params.identifier}`);
    return stored;
  },
};

// ── Adapter factory ───────────────────────────────────────────────────────────
// Returns stub adapter when DB is offline, or a proxied PrismaAdapter with
// in-memory fallback for token operations when DB is online.
function buildAdapter() {
  if (!isDbOnline) {
    console.log("[auth] DB offline — using in-memory stub adapter.");
    return stubAdapter;
  }

  try {
    const { PrismaAdapter } = require("@auth/prisma-adapter");
    const base = PrismaAdapter(db);

    return new Proxy(base as any, {
      get(target, prop, receiver) {
        // Always use in-memory token store — works without database
        if (prop === "createVerificationToken") return stubAdapter.createVerificationToken;
        if (prop === "useVerificationToken") return stubAdapter.useVerificationToken;

        const value = Reflect.get(target, prop, receiver);
        if (typeof value !== "function") return value;

        return async (...args: any[]) => {
          try {
            return await value.apply(target, args);
          } catch (err) {
            console.warn(`[auth] DB '${String(prop)}' failed:`, (err as Error).message);
            setDbOnline(false);
            const fallback = (stubAdapter as any)[prop];
            return fallback ? fallback(...args) : null;
          }
        };
      },
    });
  } catch (err) {
    console.warn("[auth] PrismaAdapter init failed — using stub.", (err as Error).message);
    setDbOnline(false);
    return stubAdapter;
  }
}

const adapter = buildAdapter();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter,
  // Auth.js v5 refuses requests from an untrusted Host header when not running
  // on Vercel (throws UntrustedHost, which makes every /api/auth/* route return
  // a "server configuration" error and breaks session/providers/OAuth). Trust
  // the host for self-hosted / localhost deployments.
  trustHost: true,
  secret: process.env.AUTH_SECRET || "development-only-fallback-secret-for-templix-ai-v5",
  // Only register a provider when its credentials are actually present, so a
  // missing OAuth or SMTP config simply hides that sign-in option instead of
  // producing a configuration error. The site keeps running regardless.
  providers: [
    ...(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
      ? [Google({
          clientId: process.env.AUTH_GOOGLE_ID,
          clientSecret: process.env.AUTH_GOOGLE_SECRET,
        })]
      : []),
    ...(process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET
      ? [GitHub({
          clientId: process.env.AUTH_GITHUB_ID,
          clientSecret: process.env.AUTH_GITHUB_SECRET,
        })]
      : []),
    ...(process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD
      ? [Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM || "savanpipaliya478@gmail.com",
      async sendVerificationRequest({ identifier, url, provider }) {
        // Always print to terminal — useful if email is delayed
        console.log("\n=======================================================");
        console.log("🔑 MAGIC LINK — copy this if email is slow:");
        console.log(`   Email : ${identifier}`);
        console.log(`   Link  : ${url}`);
        console.log("=======================================================\n");

        try {
          const nodemailer = await import("nodemailer");
          const transport = nodemailer.createTransport(provider.server as any);
          await transport.sendMail({
            to: identifier,
            from: provider.from,
            subject: "Your Templix AI Sign-In Link",
            text: `Sign in to Templix AI:\n\n${url}\n\nThis link expires in 24 hours.`,
            html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e4e4e7;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        <tr>
          <td style="background:linear-gradient(135deg,#1d4ed8 0%,#2563eb 50%,#3b82f6 100%);padding:40px 40px 36px;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">⚡ Templix<span style="font-weight:400;">AI</span></p>
            <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.75);">Professional Document Templates</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px 40px 32px;">
            <h1 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#18181b;">Sign in to your account</h1>
            <p style="margin:0 0 8px;font-size:15px;color:#52525b;line-height:1.6;">Sign-in requested for:</p>
            <p style="margin:0 0 28px;font-size:15px;font-weight:600;color:#2563eb;">${identifier}</p>
            <table width="100%"><tr><td align="center" style="padding:4px 0 32px;">
              <a href="${url}" style="display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;border-radius:12px;box-shadow:0 4px 12px rgba(37,99,235,0.35);">Sign In to Templix AI →</a>
            </td></tr></table>
            <table width="100%"><tr><td style="border-top:1px solid #f0f0f0;padding-top:24px;">
              <p style="margin:0 0 8px;font-size:13px;color:#71717a;">Or copy and paste this link:</p>
              <p style="margin:0;font-size:12px;color:#a1a1aa;word-break:break-all;background:#f9f9f9;padding:10px 14px;border-radius:8px;border:1px solid #e4e4e7;">${url}</p>
            </td></tr></table>
          </td>
        </tr>
        <tr>
          <td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:24px 40px;">
            <p style="margin:0 0 4px;font-size:12px;color:#a1a1aa;">This link expires in <strong>24 hours</strong> and can only be used once.</p>
            <p style="margin:0;font-size:12px;color:#a1a1aa;">If you did not request this, you can safely ignore this email.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
          });
          console.log(`[auth] ✉️  Email delivered to ${identifier}`);
        } catch (error) {
          // Never rethrow — a mail failure must not crash the sign-in flow or
          // the site. The magic link is logged above as a fallback.
          console.warn("[auth] ⚠️  SMTP failed — use the terminal link above!", (error as Error).message);
        }
      },
    })]
      : []),
  ],
  session: { strategy: "jwt" },
  events: {
    // Fires exactly once, when the adapter creates a brand-new user (first
    // Google / GitHub / magic-link sign-in). Email the team their details.
    async createUser({ user }) {
      if (!user?.email) return;
      await notifyNewUser({
        name: user.name,
        email: user.email,
        provider: "google / github / magic-link",
      });
    },
  },
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user) session.user.role = token.role as string;
      return session;
    },
    async jwt({ token }) {
      if (!token.sub || !isDbOnline) return token;
      try {
        const user = await db.user.findUnique({
          where: { id: token.sub },
          select: { role: true },
        });
        if (user) token.role = user.role;
      } catch {
        // silently skip role lookup when DB is offline
      }
      return token;
    },
  },
  pages: {
    signIn: "/en/login",
    error: "/en/auth/error",
    verifyRequest: "/en/auth/verify-request",
  },
});
