"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Sparkles, Mail, ArrowLeft, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const { locale } = useParams<{ locale: string }>();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email) { setError("Please enter your email address."); return; }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/api/auth/supabase/callback?next=/${locale}/auth/reset-password`,
    });
    setLoading(false);
    if (error) { setError(error.message); return; }
    setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-16">
      {/* Glow */}
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
        {!sent ? (
          <>
            <div className="mb-7">
              <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Forgot password?</h1>
              <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                No worries! Enter the email linked to your account and we&apos;ll send a reset link.
              </p>
            </div>

            {error && (
              <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400 text-sm">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    id="forgot-email"
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

              <button
                id="btn-send-reset"
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                {loading ? "Sending…" : "Send Reset Link"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-5">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900/40 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Check your inbox</h2>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                We sent a password reset link to <strong className="text-zinc-700 dark:text-zinc-200">{email}</strong>.
                Click the link in the email to set a new password.
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-xl text-left text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
              <p>• Check your spam / junk folder if you don&apos;t see it.</p>
              <p>• The link expires in <strong>1 hour</strong>.</p>
              <p>• You can only use the link once.</p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800">
          <Link
            href={`/${locale}/login`}
            className="flex items-center justify-center gap-2 h-10 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
