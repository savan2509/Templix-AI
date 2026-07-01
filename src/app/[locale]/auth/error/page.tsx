import Link from "next/link";
import { Sparkles, AlertTriangle, ArrowLeft, Mail } from "lucide-react";

interface Props {
  searchParams: Promise<{ error?: string }>;
  params: Promise<{ locale: string }>;
}

const errorMessages: Record<string, { title: string; description: string }> = {
  Verification: {
    title: "Sign-in link expired",
    description: "This magic link has already been used or has expired. Magic links are single-use and valid for 24 hours. Please request a new one.",
  },
  Configuration: {
    title: "Server configuration error",
    description: "There is a problem with the authentication server configuration. Please try again later.",
  },
  AccessDenied: {
    title: "Access denied",
    description: "You do not have permission to sign in. Please contact support if you believe this is a mistake.",
  },
  Default: {
    title: "Authentication error",
    description: "An unexpected error occurred during sign-in. Please try again or contact support.",
  },
};

export default async function AuthErrorPage({ searchParams, params }: Props) {
  const { error = "Default" } = await searchParams;
  const { locale } = await params;
  const { title, description } = errorMessages[error] ?? errorMessages["Default"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-16">
      <div className="absolute top-1/3 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/5 blur-[100px] dark:bg-red-500/10" />
      <Link href={`/${locale}`} className="inline-flex items-center gap-2 font-bold text-2xl tracking-tight text-blue-600 dark:text-blue-400 mb-10">
        <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
        <span>Templix<span className="text-zinc-900 dark:text-white font-semibold">AI</span></span>
      </Link>
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl px-8 py-10 text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <Link href={`/${locale}/login`} className="flex items-center justify-center gap-2 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-md shadow-blue-500/10">
            <Mail className="h-4 w-4" />
            Request a new sign-in link
          </Link>
          <Link href={`/${locale}`} className="flex items-center justify-center gap-2 h-11 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold text-sm transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
      {error && (
        <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-600">
          Error code: <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{error}</span>
        </p>
      )}
    </div>
  );
}
