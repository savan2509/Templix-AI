"use client";

import React from "react";
import Link from "next/link";
import { Lock, Sparkles, CheckCircle2, ArrowRight, X, ShieldCheck, Zap, Layers } from "lucide-react";
import { FREE_TEMPLATE_LIMIT } from "@/hooks/useTemplateLimit";

interface FreeLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
  nextUrl?: string;
  templateTitle?: string;
}

export default function FreeLimitModal({
  isOpen,
  onClose,
  locale,
  nextUrl,
  templateTitle,
}: FreeLimitModalProps) {
  if (!isOpen) return null;

  const loginTarget = nextUrl
    ? `/${locale}/login?next=${encodeURIComponent(nextUrl)}`
    : `/${locale}/login`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="free-limit-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Top Header Badge */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 text-amber-700 dark:text-amber-300 font-bold text-xs">
            <Lock className="h-3.5 w-3.5 shrink-0" />
            <span>Free Guest Limit Reached ({FREE_TEMPLATE_LIMIT}/{FREE_TEMPLATE_LIMIT} Used)</span>
          </div>

          <h2 id="free-limit-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Sign In to Unlock Unlimited Templates
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
            You&apos;ve used all <strong className="text-zinc-900 dark:text-white">{FREE_TEMPLATE_LIMIT} free guest template creations</strong>.
            {templateTitle ? ` Sign in to customize "${templateTitle}" and unlock unlimited document building.` : " Sign in to create unlimited invoices, resumes, contracts, and proposals."}
          </p>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
          <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <span>Guest Document Usage</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">100% Used</span>
          </div>
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-red-500 h-full w-full rounded-full" />
          </div>
        </div>

        {/* Member Benefits */}
        <div className="space-y-2.5 pt-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Free Account Benefits:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Unlimited</strong> document creations</span>
            </div>
            <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Save to Dashboard</strong> &amp; edit anytime</span>
            </div>
            <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>AI Writing Assistant</strong> &amp; auto-fill</span>
            </div>
            <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>100% Free Forever</strong> — no credit card</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <Link
            href={loginTarget}
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01]"
          >
            <span>Sign In to Continue</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={onClose}
            className="w-full h-10 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium text-xs transition-colors"
          >
            Keep Browsing Templates
          </button>
        </div>
      </div>
    </div>
  );
}
