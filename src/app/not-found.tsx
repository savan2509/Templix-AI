import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchHero from "@/components/SearchHero";
import {
  FileQuestion,
  Home,
  LayoutGrid,
  FileText,
  Wrench,
  BookOpen,
  HelpCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Templix AI",
  description: "The page you are looking for does not exist or has been moved. Use our template search or browse categories to find what you need.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickCategories = [
    { title: "Invoice Templates", href: "/en/templates/invoices", desc: "Professional billing layouts" },
    { title: "Resume Layouts", href: "/en/templates/resumes", desc: "ATS-compliant developer & executive CVs" },
    { title: "Service Contracts", href: "/en/templates/contracts", desc: "Freelance & commercial agreements" },
    { title: "Business Proposals", href: "/en/templates/proposals", desc: "Project & quotation proposals" },
    { title: "Free AI & PDF Tools", href: "/en/tools", desc: "Calculators, converters & generators" },
    { title: "Document Guides", href: "/en/blog", desc: "Writing tips & formatting tutorials" },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-blue-50/30 via-white to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12 text-center">
          
          {/* Header & Badging */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shadow-md ring-1 ring-blue-500/20">
              <FileQuestion className="h-10 w-10" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-xs font-bold text-amber-700 dark:text-amber-300">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Error 404 — Destination Unavailable</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Page Not Found
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              We couldn&rsquo;t find the exact page you were looking for. The link may be outdated or the page may have been moved. Search below or pick a popular document category to continue.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 text-left">
              Search Document Templates & Tools
            </p>
            <SearchHero locale="en" />
          </div>

          {/* Popular Categories Grid */}
          <div className="space-y-6 pt-4">
            <div className="text-center">
              <h2 className="text-xl font-extrabold text-zinc-900 dark:text-white flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                <span>Popular Destinations</span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Explore our most requested free template libraries and productivity tools
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {quickCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cat.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                    {cat.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/en"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/10 transition-colors"
            >
              <Home className="h-4.5 w-4.5" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              href="/en/templates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <LayoutGrid className="h-4.5 w-4.5" />
              <span>Browse All Templates</span>
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
