"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Sparkles,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

type Tab = "signin" | "signup";

interface Props {
  locale: string;
  /**
   * Google OAuth is only offered when the provider is enabled in Supabase.
   * signInWithOAuth() navigates away before it can report a disabled provider,
   * so the user would land on a raw Supabase JSON error page instead.
   */
  googleEnabled?: boolean;
  /** Where to send the user after a successful sign-in (e.g. back to the editor
   * they were gated from). Must be an internal path; falls back to the dashboard. */
  next?: string;
}

export default function AuthForm({ locale, googleEnabled = false, next }: Props) {
  const router = useRouter();
  // Memoised: an unstable client would retrigger the confirmation poll below.
  const supabase = useMemo(() => createClient(), []);

  // Post-auth destination: return to the gated page (`next`, validated as an
  // internal path to prevent open-redirects) or the dashboard by default.
  const dest = next && next.startsWith("/") && !next.startsWith("//") ? next : `/${locale}/dashboard`;

  const [tab, setTab] = useState<Tab>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [awaitingConfirm, setAwaitingConfirm] = useState(false);

  const reset = () => {
    setError(null);
    setSuccess(null);
  };

  // The confirmation link may be opened on a *different device* (email on the
  // phone, sign-up on the laptop). Without this the original tab sits on the
  // sign-up screen forever. Poll for the account becoming confirmed, then sign
  // this tab in with the credentials the user just entered.
  useEffect(() => {
    if (!awaitingConfirm || !supabase) return;
    let cancelled = false;
    const startedAt = Date.now();

    const timer = setInterval(async () => {
      if (cancelled) return;
      if (Date.now() - startedAt > 15 * 60 * 1000) {
        clearInterval(timer); // give up quietly after 15 minutes
        return;
      }
      // Fails with `email_not_confirmed` until the link is opened.
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (!cancelled && !error && data.session) {
        clearInterval(timer);
        setAwaitingConfirm(false);
        router.push(dest);
        router.refresh();
      }
    }, 5000);

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [awaitingConfirm, supabase, email, password, router, locale]);

  // Google OAuth via Supabase. Redirects out to Google and comes back to
  // /api/auth/supabase/callback?code=…, which exchanges the code for a session.
  const handleGoogle = async () => {
    reset();
    if (!supabase) { setError("Sign-in is temporarily unavailable. Please try again later."); return; }
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/supabase/callback?next=${encodeURIComponent(dest)}`,
      },
    });
    if (error) {
      setLoading(false);
      setError(
        /provider is not enabled/i.test(error.message)
          ? "Google sign-in isn't enabled yet. Please use your email and password."
          : error.message,
      );
    }
    // On success the browser navigates away to Google.
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    if (!supabase) { setError("Sign-in is temporarily unavailable. Please try again later."); return; }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message === "Invalid login credentials"
        ? "Incorrect email or password. Please try again."
        : error.message);
      return;
    }
    router.push(dest);
    router.refresh();
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    if (!fullName.trim()) { setError("Please enter your full name."); return; }
    if (!email) { setError("Please enter your email address."); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (password !== confirmPassword) { setError("Passwords do not match."); return; }
    if (!supabase) { setError("Sign-up is temporarily unavailable. Please try again later."); return; }
    setLoading(true);

    // Preferred path: the server mints a confirmation link and emails it from
    // our own SMTP. The user is NOT signed in yet — opening the link signs them
    // in. Falls back to the direct Supabase signup if that isn't configured.
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, fullName, locale }),
      });
      const payload = await res.json();
      if (res.ok && payload.ok) {
        setLoading(false);
        setSuccess(
          "Almost there! We've emailed you a confirmation link. Open it on any device — this page will sign you in automatically.",
        );
        setAwaitingConfirm(true);
        return;
      }
      if (res.ok && payload.fallback) {
        // Confirmation email not configured — continue to the direct signup below.
      } else {
        setLoading(false);
        setError(payload.error || "Could not create your account. Please try again.");
        return;
      }
    } catch {
      // Network hiccup — fall through to the direct signup so the user isn't stuck.
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        // `signup=1` tells the callback this confirmation is a first-time
        // account creation, so it emails the team the new user's details once.
        emailRedirectTo: `${window.location.origin}/api/auth/supabase/callback?next=${encodeURIComponent(dest)}&signup=1`,
      },
    });
    setLoading(false);
    if (error) { setError(error.message); return; }
    // If email confirmation is disabled, Supabase returns a live session and the
    // user is signed in immediately — notify the team (the callback that
    // normally does this is skipped in this flow) and go to the dashboard.
    if (data.session) {
      try { await fetch("/api/auth/signup-notify", { method: "POST" }); } catch {}
      router.push(dest);
      router.refresh();
      return;
    }
    setSuccess("Account created! Check your inbox and click the confirmation link to activate your account.");
  };

  return (
    <div className="w-full max-w-md">
      {/* Google OAuth — rendered only when the provider is enabled in Supabase,
          otherwise clicking it dead-ends on a Supabase JSON error page. */}
      {googleEnabled && (
      <>
      <button
        type="button"
        onClick={handleGoogle}
        disabled={loading}
        className="mb-6 flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white py-3 text-sm font-bold text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M23.52 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.64v3h3.87c2.27-2.09 3.58-5.17 3.58-8.88z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.87-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-4v3.09A12 12 0 0 0 12 24z" />
          <path fill="#FBBC05" d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62h-4a12 12 0 0 0 0 10.76l4-3.09z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.62l4 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
        </svg>
        <span>Continue with Google</span>
      </button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:bg-zinc-950 dark:text-zinc-500">
            or with email
          </span>
        </div>
      </div>
      </>
      )}

      {/* Tab switcher */}
      <div className="flex rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 p-1 mb-6 gap-1">
        {(["signin", "signup"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); reset(); }}
            className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
              tab === t
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
            }`}
          >
            {t === "signin" ? "Sign In" : "Create Account"}
          </button>
        ))}
      </div>

      {/* Error / Success banners */}
      {error && (
        <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400 text-sm">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/40 text-green-700 dark:text-green-400 text-sm">
          <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {tab === "signin" ? (
        <form onSubmit={handleSignIn} className="space-y-5">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  id="signin-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  Password
                </label>
                <Link
                  href={`/${locale}/auth/forgot-password`}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  id="signin-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          <button
            id="btn-signin"
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  id="signup-name"
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Smith"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  id="signup-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                Password <span className="text-zinc-400 normal-case font-normal">(min. 8 characters)</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={8}
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                Confirm password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  id="signup-confirm-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
            </div>
          </div>

          <button
            id="btn-signup"
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {loading ? "Creating account…" : "Create Free Account"}
          </button>
          <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">
            By signing up you agree to our{" "}
            <Link href={`/${locale}/terms`} className="text-blue-500 hover:underline">Terms</Link>
            {" & "}
            <Link href={`/${locale}/privacy`} className="text-blue-500 hover:underline">Privacy Policy</Link>.
          </p>
        </form>
      )}
    </div>
  );
}
