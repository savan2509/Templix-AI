"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/i18n";
import { logoAlt } from "@/lib/image-alt";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  CheckCircle2
} from "lucide-react";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

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
              {/* The logo carries the brand name (image-SEO + a real accessible
                  name), and the wordmark beside it is aria-hidden — so the link
                  announces "Templix AI" exactly once, not twice. Only one of the
                  two marks is ever in the a11y tree (the other is display:none). */}
              <Image src="/Templix-ai-light.png" alt={logoAlt("light")} title="Templix AI — Free Professional Document Editor Logo" width={32} height={32} className="h-8 w-8 rounded-lg object-contain dark:hidden" />
              <Image src="/Templix-ai-dark.png" alt={logoAlt("dark")} title="Templix AI — Free Professional Document Editor Logo" width={32} height={32} aria-hidden="true" className="hidden h-8 w-8 rounded-lg object-contain dark:block" />
              {/* Keep the space: the brand is "Templix AI" everywhere else, and
                  splitting it across spans without one renders "TemplixAI". */}
              <span aria-hidden="true">Templix <span className="text-zinc-900 dark:text-white font-extrabold">AI</span></span>
            </Link>
            
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            {/* Trust badge */}
            <div className="flex items-center gap-2 pt-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.trustBadge}</span>
            </div>

            {/* Direct contact & Phone links */}
            <div className="flex flex-col gap-2.5">
              <ObfuscatedEmail
                user="support"
                domain="templix-ai.whitesparksoft.com"
                className="hover-lift group inline-flex items-center gap-2.5 rounded-xl border border-blue-200 bg-blue-50/70 px-3.5 py-2 text-blue-700 shadow-xs transition-all hover:border-blue-400 hover:bg-blue-100 hover:shadow-md dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/70"
                ariaLabel="Send email to customer support team"
              >
                {(emailText) => (
                  <>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs transition-transform duration-200 group-hover:scale-110">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 text-left">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-500/80 dark:text-blue-400/80">
                        Email Support
                      </span>
                      <span className="block truncate text-xs font-bold group-hover:underline">
                        {emailText}
                      </span>
                    </span>
                  </>
                )}
              </ObfuscatedEmail>

              <a
                href="tel:+14158903882"
                className="hover-lift group inline-flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2 text-emerald-700 shadow-xs transition-all hover:border-emerald-400 hover:bg-emerald-100 hover:shadow-md dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/70"
                aria-label="Call customer support at +1 (415) 890-3882"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs transition-transform duration-200 group-hover:scale-110">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-600/80 dark:text-emerald-400/80">
                    Phone Support
                  </span>
                  <span className="block truncate text-xs font-bold group-hover:underline">
                    +1 (415) 890-3882
                  </span>
                </span>
              </a>

              <div className="space-y-2">
                <a
                  href={siteConfig.links.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift group inline-flex w-full items-center gap-2.5 rounded-xl border border-zinc-200 bg-zinc-50/70 px-3.5 py-2 text-zinc-700 shadow-xs transition-all hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300 dark:hover:border-blue-600 dark:hover:bg-zinc-900/70"
                  aria-label="View Templix AI Google Business Profile & Maps Location"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white shadow-xs transition-transform duration-200 group-hover:scale-110">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Google Business Profile &amp; HQ
                    </span>
                    <span className="block truncate text-xs font-semibold text-zinc-800 dark:text-zinc-200 group-hover:underline">
                      535 Mission St, 14th Fl, San Francisco, CA
                    </span>
                  </span>
                </a>

                {/* Google Maps Location Embed for Local SEO & Verification */}
                <div className="w-full h-36 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xs mt-2">
                  <iframe
                    title="Templix AI Headquarters Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0182582845625!2d-122.3995!3d37.7897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d799d555%3A0x1082391203912!2s535%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Interactive Newsletter */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              {t.newsletterTitle}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md">
              {t.newsletterDesc}
            </p>
            
            <form
              onSubmit={handleSubscribe}
              name="newsletter-subscribe"
              action="/api/newsletter"
              method="POST"
              aria-label="Subscribe to Templix AI newsletter"
              data-webmcp-tool="newsletterSubscribe"
              data-webmcp-description="Subscribe to Templix AI newsletter for free document templates, productivity tools, and AI editor updates"
              itemScope
              itemType="https://schema.org/SubscribeAction"
              className="flex gap-2 max-w-md mt-2"
            >
              <div className="relative flex-1">
                <label htmlFor="newsletter-email-input" className="sr-only">
                  {t.emailPlaceholder}
                </label>
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                <input
                  id="newsletter-email-input"
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  aria-label={t.emailPlaceholder}
                  aria-describedby={error ? "newsletter-error-msg" : undefined}
                  data-webmcp-input="email"
                  itemProp="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
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
                data-webmcp-submit="subscribe"
                disabled={submitted || sending}
                className="btn-shimmer flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-70 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                {sending ? (
                  <span>Sending…</span>
                ) : submitted ? (
                  <span>{t.subscribed}</span>
                ) : (
                  <>
                    <span>{t.join}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
            {error && (
              <p id="newsletter-error-msg" role="alert" className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                {error}
              </p>
            )}
            {submitted && (
              <p role="status" aria-live="polite" className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {t.subscribed} Thank you for joining!
              </p>
            )}
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              We respect your privacy. By subscribing you agree to our{" "}
              <Link href={`/${locale}/privacy`} className="underline hover:text-blue-600 dark:hover:text-blue-400">
                Privacy Policy
              </Link>
              . No spam, unsubscribe anytime.
            </p>
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
            <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              {t.colDocuments}
            </p>
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
            <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              {t.colLetters}
            </p>
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
            <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              {t.colResources}
            </p>
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
                <Link href={`/${locale}/services`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  AI &amp; Document Services
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Product Suite (30)
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/industries`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Industry Templates (6)
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/use-cases`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Use Cases (90+)
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/category`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Category Hubs (9)
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
            <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              {t.colLegal}
            </p>
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
                <Link href={`/${locale}/sitemap`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  HTML Sitemap &amp; Directory
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

        {/* Bottom Segment: Copyright & Social Profiles */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-200 dark:border-zinc-800/50 pt-8 gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div 
            className="flex items-center gap-1 flex-wrap justify-center md:justify-start"
          >
            <span>© {currentYear} Templix AI. Designed with </span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 inline-block shrink-0 mx-1" role="img" aria-label="love" />
            <span className="sr-only"> love </span>
            <span> for frictionless drafting.</span>
          </div>

          {/* Social & Community Profiles */}
          <div className="flex flex-wrap items-center gap-3.5 text-xs">
            <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer nofollow" aria-label="Facebook Page" className="hover:text-blue-600 transition-colors">
              Facebook
            </a>
            <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer nofollow" aria-label="Instagram Profile" className="hover:text-pink-600 transition-colors">
              Instagram
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn Profile" className="hover:text-blue-700 transition-colors">
              LinkedIn
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer nofollow" aria-label="X / Twitter Profile" className="hover:text-sky-500 transition-colors">
              X (Twitter)
            </a>
            <a href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer nofollow" aria-label="YouTube Channel" className="hover:text-red-600 transition-colors">
              YouTube
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer nofollow" aria-label="GitHub Repository" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href={siteConfig.links.googleMaps} target="_blank" rel="noopener noreferrer nofollow" aria-label="Google Business Profile & Maps Location" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Google Business Profile
            </a>
          </div>

          <div className="text-zinc-500 dark:text-zinc-400">
            {t.freeForever}
          </div>
        </div>

      </div>
    </footer>
  );
}
