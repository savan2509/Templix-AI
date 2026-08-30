"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles } from "lucide-react";
import { getDictionary } from "@/lib/i18n";

export default function SearchHero({ locale }: { locale: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const t = getDictionary(locale).search;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    router.push(`/${locale}/templates?q=${encodeURIComponent(query.trim())}`);
  };

  const quickTags = [
    { label: t.tagInvoice, q: "invoice" },
    { label: t.tagResume, q: "resume" },
    { label: t.tagContract, q: "contract" },
    { label: t.tagProposal, q: "proposal" },
    { label: t.tagCoverLetter, q: "cover letter" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 animate-fade-up stagger-3">
      <form
        onSubmit={handleSearch}
        name="search-templates"
        action={`/${locale}/templates`}
        method="GET"
        role="search"
        aria-label="Search document templates and tools"
        data-webmcp-tool="searchTemplates"
        data-webmcp-description="Search free document templates, resumes, invoices, contracts and AI tools by keyword"
        itemScope
        itemType="https://schema.org/SearchAction"
        className="relative group"
      >
        <div className="relative flex items-center p-1.5 sm:p-2 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-zinc-50 shadow-lg shadow-zinc-200/50 dark:shadow-2xl dark:shadow-black/50 hover:border-zinc-300 dark:hover:border-zinc-700 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/40 dark:focus-within:ring-blue-400/30 transition-all duration-200 backdrop-blur-md">
          <label htmlFor="template-search-hero-input" className="sr-only">
            {t.placeholder}
          </label>
          <Search className="ml-3 sm:ml-4 h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 shrink-0 transition-colors duration-200" />
          <input
            id="template-search-hero-input"
            type="text"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            aria-label={t.placeholder}
            data-webmcp-input="query"
            itemProp="query-input"
            autoComplete="off"
            className="flex-1 bg-transparent border-0 px-3 sm:px-4 py-2 sm:py-2.5 text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-0 text-sm sm:text-base min-w-0"
          />
          {query.trim().length > 0 && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search query"
              className="p-1.5 mr-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="sr-only">Clear</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <button
            type="submit"
            aria-label={t.search}
            data-webmcp-submit="search"
            className="shrink-0 h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-blue-500/25 active:scale-95 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 animate-bounce-subtle" />
            <span>{t.search}</span>
          </button>
        </div>
      </form>

      {/* Quick suggestions tags */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span className="text-xs font-medium">{t.popular}</span>
        {quickTags.map((tag) => (
          <button
            key={tag.q}
            onClick={() => router.push(`/${locale}/templates?q=${tag.q}`)}
            className="hover-lift hover-scale px-3 py-1 rounded-full border border-zinc-200/80 hover:border-blue-400 dark:border-zinc-800 dark:hover:border-blue-500/50 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white/80 dark:bg-zinc-900/80 hover:bg-blue-50/60 dark:hover:bg-blue-950/40 shadow-xs transition-all"
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}
