import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n";

// Shared shell for static content pages (privacy, terms, about, contact, faq).
// Server component: renders the site chrome plus a branded hero and a readable
// content column, so every info page looks consistent.
export default function InfoPageShell({
  locale,
  eyebrow,
  title,
  subtitle,
  updated,
  breadcrumbs,
  children,
}: {
  locale: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  updated?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children: React.ReactNode;
}) {
  const c = getDictionary(locale).common;
  const crumbs = breadcrumbs || [
    { label: c.homeBreadcrumb, href: `/${locale}` },
    { label: title },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-zinc-950">
        {/* Hero */}
        <header className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
            <nav className="mb-4 text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 flex-wrap">
              {crumbs.map((crumb, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <span>/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-zinc-600 dark:text-zinc-300 font-semibold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                {subtitle}
              </p>
            )}
            {updated && (
              <p className="mt-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                {c.lastUpdated} {updated}
              </p>
            )}
          </div>
        </header>

        {/* Content column */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Small styled helpers so pages stay terse and consistent.
export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{heading}</h2>
      {children}
    </section>
  );
}
