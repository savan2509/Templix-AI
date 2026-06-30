"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  // Extract locale from first path segment, default to "en"
  const locale = pathname.split("/")[1] || "en";

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-12 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Brand */}
          <div className="col-span-2 space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
              <Sparkles className="h-6 w-6 text-blue-500" />
              <span>Templix<span className="text-zinc-900 dark:text-white font-semibold">AI</span></span>
            </Link>
            <p className="text-sm max-w-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Create professional business documents, invoices, resumes, contracts, and proposals in minutes with our AI-powered document workspace.
            </p>
          </div>

          {/* Column Templates */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Templates
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${locale}/templates/invoices`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Invoice Templates
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/resumes`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Resume Templates
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/contracts`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contract Agreements
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/templates/proposals`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Proposals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${locale}/blog`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8 gap-4 text-xs text-zinc-400 dark:text-zinc-500">
          <p>© {currentYear} Templix AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">Twitter</a>
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">GitHub</a>
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
