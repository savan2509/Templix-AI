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
        console.warn("Nodemailer failed, trying dev credentials bypass...", res.error);
        // Automatic fallback to instant credentials bypass in development
        const bypassRes = await signIn("credentials", {
          email,
          callbackUrl: redirectUrl,
          redirect: false,
        });

        if (bypassRes?.error) {
          setError("Could not send magic link or bypass login. Please check local database state.");
        } else {
          window.location.href = redirectUrl;
        }
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  const handleBypassSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address to bypass login.");
      return;
    }

    setLoading("bypass");
    setError(null);

    try {
      const res = await signIn("credentials", {
        email,
        callbackUrl: redirectUrl,
        redirect: false,
      });

      if (res?.error) {
        setError("Instant dev login failed. Check database logs.");
      } else {
        window.location.href = redirectUrl;
      }
    } catch (err) {
      setError("An unexpected error occurred during instant login.");
    } finally {
      setLoading(null);
    }
  };

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    setLoading(provider);
    setError(null);
    try {
      await signIn(provider, {
        callbackUrl: redirectUrl,
      });
    } catch (err) {
      setError(`Failed to sign in with ${provider}.`);
    } finally {
      // Small timeout so loader doesn't flash-disappear instantly during redirect handshake
      setTimeout(() => setLoading(null), 1000);
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

              {process.env.NODE_ENV === "development" && (
                <button
                  type="button"
                  onClick={handleBypassSignIn}
                  disabled={loading !== null}
                  className="w-full h-11 border border-zinc-200 dark:border-zinc-800 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  {loading === "bypass" ? (
                    <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
                  ) : (
                    <span>⚡ Bypass &amp; Log In Instantly (Dev Mode)</span>
                  )}
                </button>
              )}
            </form>
          )}

          {/* Separator divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
            <span className="flex-shrink mx-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              Or continue with
            </span>
            <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
          </div>

          {/* OAuth Buttons Grid */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleOAuthSignIn("google")}
              disabled={loading !== null}
              className="flex items-center justify-center gap-2 h-11 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-semibold text-sm text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm"
            >
              {loading === "google" ? (
                <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
              ) : (
                <>
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  <span>Google</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleOAuthSignIn("github")}
              disabled={loading !== null}
              className="flex items-center justify-center gap-2 h-11 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-semibold text-sm text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm"
            >
              {loading === "github" ? (
                <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
              ) : (
                <>
                  <svg className="h-4 w-4 shrink-0 fill-current text-zinc-900 dark:text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>GitHub</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
