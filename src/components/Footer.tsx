"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import {
  Mail,
  ArrowRight,
  Heart,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const t = getDictionary(locale).footer;

  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — bots fill it, humans don't
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Previously this only flipped a flag — it never sent the address anywhere.
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || sending) return;
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const payload = await res.json();
      if (!res.ok || !payload.ok) {
        setError(payload.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Segment: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-zinc-200 dark:border-zinc-800/50">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-5">
            <Link 
              href={`/${locale}`} 
              className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400"
            >
              <Image src="/Templix-ai-light.png" alt="Templix AI" width={34} height={34} className="h-8 w-8 rounded-lg object-contain dark:hidden" />
              <Image src="/Templix-ai-dark.png" alt="Templix AI" width={34} height={34} className="hidden h-8 w-8 rounded-lg object-contain dark:block" />
              <span>Templix<span className="text-zinc-900 dark:text-white font-extrabold">AI</span></span>
            </Link>
            
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            {/* Trust badge */}
            <div className="flex items-center gap-2 pt-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 dark:text-emerald-400" />
              <span>{t.trustBadge}</span>
            </div>

            {/* Smol Launch featured badge (third-party image → plain img). */}
            <a href="https://smollaunch.com" target="_blank" rel="noopener noreferrer" className="inline-block pt-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://smollaunch.com/badges/featured.svg"
                alt="templix-ai — Featured on Smol Launch"
                loading="lazy"
                width={250}
                height={60}
              />
            </a>

            {/* Direct contact — highlighted so a visitor with a question can't
                miss how to reach us. */}
            <a
              href="mailto:whitesparktechnologies@gmail.com"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-blue-200 bg-blue-50/70 px-3.5 py-2.5 text-blue-700 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-100 hover:shadow-md dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/70"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <Mail className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-500/80 dark:text-blue-400/80">
                  Questions? Email us
                </span>
                <span className="block truncate text-xs font-bold group-hover:underline">
                  whitesparktechnologies@gmail.com
                </span>
              </span>
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Interactive Newsletter */}
          <div className="lg:col-span-6 space-y-4">
            {/* h2 (first footer heading) so the outline never skips a level even
                on content-light pages (h1 → h2). Nav columns below are h3. */}
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              {t.newsletterTitle}
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md">
              {t.newsletterDesc}
            </p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mt-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  required
                />
                {/* Honeypot — hidden from people, irresistible to bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />
              </div>
              <button
                type="submit"
                disabled={submitted || sending}
                className="flex items-center justify-center gap-1 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-70 text-sm font-bold text-white shadow-md shadow-blue-500/10 hover:shadow-lg transition-all duration-200"
              >
                {sending ? (
                  <span>Sending…</span>
                ) : submitted ? (
                  <span>{t.subscribed}</span>
                ) : (
                  <>
                    <span>{t.join}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
            {error && (
              <p className="text-xs font-semibold text-red-500 dark:text-red-400">{error}</p>
            )}
            {submitted && !error && (
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Thanks! You&apos;re on the list — we&apos;ll be in touch.
              </p>
            )}
          </div>
        </div>

        {/* Middle Segment: Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Column 1: Templates categories */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              {t.colDocuments}
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link href={`/${locale}/templates/invoices`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.invoiceTemplates}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/resumes`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.resumeLayouts}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/contracts`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.contractAgreements}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/proposals`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.businessProposals}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/reports`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.businessReports}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/business-plans`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.businessPlans}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/quotations`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.priceQuotations}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Letters */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              {t.colLetters}
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link href={`/${locale}/templates/letters/cover-letter`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.coverLetters}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/letters/resignation-letter`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.resignationLetters}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/letters/offer-letter`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.offerLetters}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/letters/recommendation-letter`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.recommendationLetters}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              {t.colResources}
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link href={`/${locale}/blog`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.blogArticles}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/tools`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.freeTools}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.helpCenter}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.aboutTeam}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              {t.colLegal}
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link href={`/${locale}/privacy`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.termsOfService}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.contactSupport}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Segment: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-200 dark:border-zinc-800/50 pt-8 gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div 
            className="flex items-center gap-1.5"
            aria-label={`© ${currentYear} ${t.designedWithPre} love ${t.designedWithPost}`}
          >
            {/* Non-breaking spaces keep a real space around the heart, so the
                copied/extracted text reads "Designed with ❤ for …" rather than
                the run-together "Designed withfor …". */}
            <span aria-hidden="true">© {currentYear} {t.designedWithPre}&nbsp;</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 shrink-0" aria-hidden="true" />
            <span aria-hidden="true">&nbsp;{t.designedWithPost}</span>
          </div>
          <div className="text-zinc-400 dark:text-zinc-500">
            {t.freeForever}
          </div>
        </div>

      </div>
    </footer>
  );
}
