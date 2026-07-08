"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Sparkles, Lock, Eye, EyeOff, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionReady, setSessionReady] = useState(false);

  // Supabase sends the access token in the URL hash (#access_token=...).
  // Calling getSession() after page load exchanges it for a live session.
  useEffect(() => {
    if (!supabase) return; // Supabase not configured
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSessionReady(!!session);
    });
    // Also listen for the auth event that fires when the hash token is processed
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setSessionReady(true);
    });
    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (password !== confirmPassword) { setError("Passwords do not match."); return; }
    if (!supabase) { setError("Password reset is temporarily unavailable. Please try again later."); return; }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    setDone(true);
    setTimeout(() => router.push(`/${locale}/dashboard`), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-16">
      <div className="absolute top-1/3 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10" />

      {/* Logo */}
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-2 font-bold text-2xl tracking-tight text-blue-600 dark:text-blue-400 mb-10"
      >
        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        Templix<span className="text-zinc-900 dark:text-white font-extrabold">AI</span>
      </Link>

      <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-8">
        {done ? (
          <div className="text-center space-y-5">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900/40 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Password updated!</h2>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Your password has been changed successfully. Redirecting you to your dashboard…
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-7">
              <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Set new password</h1>
              <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                Choose a strong password of at least 8 characters.
              </p>
            </div>

            {!sessionReady && (
              <div className="mb-5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-700 dark:text-amber-400 text-sm">
                Verifying reset link… If this takes too long, please request a new reset link.
              </div>
            )}

            {error && (
              <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400 text-sm">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                  New password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    id="reset-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={8}
                    disabled={!sessionReady}
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 disabled:opacity-50 transition"
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
                  Confirm new password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    id="reset-confirm-password"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    disabled={!sessionReady}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 disabled:opacity-50 transition"
                  />
                </div>
              </div>

              <button
                id="btn-reset-password"
                type="submit"
                disabled={loading || !sessionReady}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
                {loading ? "Updating…" : "Update Password"}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 text-center">
              <Link
                href={`/${locale}/auth/forgot-password`}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Request a new reset link
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
