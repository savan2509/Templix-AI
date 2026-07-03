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
              <span>100% free — no sign-up, no watermark</span>
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
                  Resignation Letters
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
                <Link href={`/${locale}/tools`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Free Tools & Calculators
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
                <Link href={`/${locale}/contact`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
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
                <Link href={`/${locale}/privacy`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Segment: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-200 dark:border-zinc-800/50 pt-8 gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Templix AI. Designed with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500" aria-label="love" />
            <span>for frictionless drafting.</span>
          </div>
          <div className="text-zinc-400 dark:text-zinc-500">
            Free forever · No account required
          </div>
        </div>

      </div>
    </footer>
  );
}
