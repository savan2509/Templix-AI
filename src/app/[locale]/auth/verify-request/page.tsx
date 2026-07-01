import Link from "next/link";
import { Sparkles, Mail, CheckCircle, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function VerifyRequestPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-16">
      <div className="absolute top-1/3 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10" />
      <Link href={`/${locale}`} className="inline-flex items-center gap-2 font-bold text-2xl tracking-tight text-blue-600 dark:text-blue-400 mb-10">
        <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
        <span>Templix<span className="text-zinc-900 dark:text-white font-semibold">AI</span></span>
      </Link>
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl px-8 py-10 text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900/40 flex items-center justify-center">
            <Mail className="h-8 w-8 text-green-500 animate-bounce" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Check your email</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            A sign-in link has been sent to your email address. Click it to sign in instantly.
          </p>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-xl text-left space-y-2">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle className="h-4 w-4" /> What to do next
          </div>
          <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 ml-6 list-disc">
            <li>Open your email inbox</li>
            <li>Look for an email from <strong>Templix AI</strong></li>
            <li>Click the <strong>Sign In to Templix AI →</strong> button</li>
            <li>If not found, check your <strong>Spam or Junk</strong> folder</li>
          </ul>
        </div>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          The link expires in <strong>24 hours</strong> and can only be used once.
        </p>
        <Link href={`/${locale}/login`} className="flex items-center justify-center gap-2 h-10 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold text-sm transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
