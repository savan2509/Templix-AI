"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Sparkles, Mail, Loader2 } from "lucide-react";

export default function LoginPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = pathname.split("/")[1] || "en";

  const redirectUrl = searchParams.get("redirect") || `/${currentLocale}/dashboard`;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading("email");
    setError(null);
    setSuccess(false);

    try {
      const res = await signIn("nodemailer", {
        email,
        callbackUrl: redirectUrl,
        redirect: false,
      });

      if (res?.error) {
        setError("Could not send the sign-in link right now. Please try again in a moment.");
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-200">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/10" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link
          href={`/${currentLocale}`}
          className="inline-flex items-center gap-2 font-bold text-2xl tracking-tight text-blue-600 dark:text-blue-400 mb-6"
        >
          <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
          <span>Templix<span className="text-zinc-900 dark:text-white font-semibold">AI</span></span>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Or create documents instantly on the home page.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-zinc-900 py-8 px-4 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-2xl sm:px-10 space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 text-xs font-semibold text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-900/30">
              {error}
            </div>
          )}

          {success ? (
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200/50 dark:border-green-900/30 text-center space-y-2">
              <Mail className="h-8 w-8 text-green-500 mx-auto animate-bounce" />
              <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">Check your email</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                We have sent a magic sign-in link to <strong className="text-zinc-700 dark:text-zinc-300">{email}</strong>. Click it to log in.
              </p>
            </div>
          ) : (
            <form onSubmit={handleEmailSignIn} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="block w-full h-11 pl-11 pr-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading !== null}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/10 transition-colors flex items-center justify-center gap-1.5"
              >
                {loading === "email" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <span>Send Magic Link</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
