"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  Mail, 
  ArrowRight, 
  Heart,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
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
              <div className="flex items-center justify-center h-8.5 w-8.5 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-sm shadow-blue-500/10">
                <Sparkles className="h-4.5 w-4.5 text-white" />
              </div>
              <span>Templix<span className="text-zinc-900 dark:text-white font-extrabold">AI</span></span>
            </Link>
            
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              Empowering builders, creators, and consultants to generate pixel-perfect documents, resumes, proposals, and contracts in seconds. Beautiful typography, live editing, and AI-enabled presets.
            </p>

            {/* Trust badge */}
            <div className="flex items-center gap-2 pt-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 dark:text-emerald-400" />
              <span>Trusted by 10,000+ creators globally</span>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Interactive Newsletter */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Subscribe to our Newsletter
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md">
              Receive premium free templates updates, document design tips, and product releases. No spam. Unsubscribe anytime.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mt-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="flex items-center justify-center gap-1 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-500/10 hover:shadow-lg transition-all duration-200"
              >
                {submitted ? (
                  <span>Subscribed!</span>
                ) : (
                  <>
                    <span>Join</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Segment: Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Column 1: Templates categories */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Document Presets
            </h5>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link href={`/${locale}/templates/invoices`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Invoice Templates
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/resumes`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Resume & CV Layouts
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/contracts`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Contract Agreements
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/proposals`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Business Proposals
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/reports`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Business Reports
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/business-plans`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Business Plans
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/quotations`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Price Quotations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Letters */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Letter Presets
            </h5>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link href={`/${locale}/templates/letters`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Cover Letters
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/letters`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Resignations Letters
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/letters`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Offer Letters
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/letters`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Recommendation Letters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Resources & Insights
            </h5>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link href={`/${locale}/blog`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  API Integration Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Legal Compliance
            </h5>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link href={`/${locale}/privacy`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  GDPR & Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Security Measures
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Segment: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-200 dark:border-zinc-800/50 pt-8 gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Templix AI. Designed with</span>
            <Heart className="h-3 w-3 text-red-500 animate-pulse fill-red-500" />
            <span>for frictionless drafting.</span>
          </div>
          
          {/* Social Icons using inline SVGs */}
          <div className="flex gap-4">
            <a 
              href="#" 
              aria-label="Twitter"
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all text-zinc-600 dark:text-zinc-400"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all text-zinc-600 dark:text-zinc-400"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all text-zinc-600 dark:text-zinc-400"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
