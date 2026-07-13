import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Sparkles, FileText, Star, Zap } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getEnabledOAuthProviders } from "@/lib/supabase/providers";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Sign In | Templix AI",
  description: "Sign in or create a free account to save favorites, manage documents, and unlock all Templix AI template features.",
};

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tab?: string }>;
}

const features = [
  { icon: FileText, text: "Save & manage your documents" },
  { icon: Star, text: "Bookmark favorite templates" },
  { icon: Zap, text: "Instant one-click editing" },
];

export default async function LoginPage({ params }: Props) {
  const { locale } = await params;

  // Redirect to dashboard if already signed in (skip when Supabase isn't configured)
  const supabase = await createClient();
  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) redirect(`/${locale}/dashboard`);
  }

  // Only offer OAuth buttons for providers that are actually enabled — a
  // disabled one redirects the user to a raw Supabase JSON error page.
  const providers = await getEnabledOAuthProviders();

  return (
    // Locked to exactly one viewport (100dvh handles mobile browser chrome) and
    // clipped, so the login is a single static screen with no page scroll. The
    // right panel carries an internal scroll only as a safety net on very short
    // viewports; on any normal screen everything is visible at once.
    <div className="flex h-[100dvh] overflow-hidden">
      {/* ── Left panel: branding + feature list ───────────────────────── */}
      <div className="hidden lg:flex lg:w-[45%] flex-col justify-between p-8 xl:p-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-400/10 blur-2xl" />
        </div>

        {/* Logo */}
        <Link href={`/${locale}`} className="relative inline-flex items-center gap-2.5 text-white font-bold text-2xl tracking-tight">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/15 backdrop-blur border border-white/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          Templix<span className="font-extrabold">AI</span>
        </Link>

        {/* Hero copy */}
        <div className="relative space-y-6">
          <div>
            <h1 className="text-4xl font-black text-white leading-tight tracking-tight">
              Professional templates,<br />
              <span className="text-blue-200">built for your workflow.</span>
            </h1>
            <p className="mt-4 text-blue-100/80 text-lg leading-relaxed">
              Invoices, resumes, contracts and more — all fully customizable, ready in seconds.
            </p>
          </div>

          {/* Feature bullets */}
          <ul className="space-y-3">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 border border-white/15 shrink-0">
                  <Icon className="h-4 w-4 text-blue-200" />
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial / trust */}
        <div className="relative bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-sm">
          <p className="text-white/90 text-sm leading-relaxed italic">
            &ldquo;Templix AI cut my invoicing time in half. The templates look so professional, clients always comment on them.&rdquo;
          </p>
          <p className="mt-3 text-blue-200 text-xs font-semibold">— Sarah J., Freelance Designer</p>
        </div>
      </div>

      {/* ── Right panel: auth form ─────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto px-6 py-8 bg-zinc-50 dark:bg-zinc-950">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link
            href={`/${locale}`}
            className="lg:hidden flex items-center justify-center gap-2 font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400 mb-6"
          >
            <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            Templix<span className="text-zinc-900 dark:text-white font-extrabold">AI</span>
          </Link>

          {/* Card */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Welcome back</h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Sign in to your account or create a new one.
              </p>
            </div>

            <AuthForm locale={locale} googleEnabled={providers.google} />
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-xs text-zinc-400 dark:text-zinc-600">
            &copy; {new Date().getFullYear()} Templix AI &mdash;{" "}
            <Link href={`/${locale}/privacy`} className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Privacy</Link>
            {" · "}
            <Link href={`/${locale}/terms`} className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Terms</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
