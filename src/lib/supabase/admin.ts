import { createClient } from "@supabase/supabase-js";

// Server-only Supabase admin client (service_role / secret key).
//
// Used to mint an email-confirmation link with `auth.admin.generateLink()`
// WITHOUT Supabase sending the email itself — we deliver it through our own
// SMTP, which works, whereas Supabase's relay through Gmail fails.
//
// NEVER import this from a client component: the secret key bypasses RLS.
// Returns null when the key is absent, so callers can fall back gracefully.
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secret =
    process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !secret) return null;

  return createClient(url, secret, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
