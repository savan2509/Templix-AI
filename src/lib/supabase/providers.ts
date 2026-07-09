// Which OAuth providers are actually turned on for this Supabase project.
//
// supabase.auth.signInWithOAuth() navigates the browser to Supabase *before*
// validating anything, so a disabled provider dumps the user on a raw JSON
// error page ("Unsupported provider: provider is not enabled") that no
// client-side error handler can intercept. Supabase publishes the enabled set
// at /auth/v1/settings, so ask first and only offer buttons that work.

export interface EnabledProviders {
  google: boolean;
  github: boolean;
}

const NONE: EnabledProviders = { google: false, github: false };

export async function getEnabledOAuthProviders(): Promise<EnabledProviders> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return NONE;

  try {
    const res = await fetch(`${url}/auth/v1/settings`, {
      headers: { apikey: key },
      // Providers change rarely; re-check hourly rather than on every render.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return NONE;

    const data = (await res.json()) as { external?: Record<string, boolean> };
    return {
      google: data.external?.google === true,
      github: data.external?.github === true,
    };
  } catch {
    // Network hiccup — hide the buttons rather than risk a dead-end redirect.
    return NONE;
  }
}
