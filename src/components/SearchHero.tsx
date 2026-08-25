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
        <div className="relative flex items-center transition-all duration-300">
          <label htmlFor="template-search-hero-input" className="sr-only">
            {t.placeholder}
          </label>
          <Search className="absolute left-4 h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors duration-200" />
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
            className="w-full h-14 pl-12 pr-32 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-zinc-50 shadow-lg shadow-zinc-100/80 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-blue-500/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-base focus:shadow-xl focus:shadow-blue-500/10 backdrop-blur-sm"
          />
          <button
            type="submit"
            aria-label={t.search}
            data-webmcp-submit="search"
            className="btn-shimmer absolute right-2 top-2 h-10 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-sm transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/20 active:scale-95"
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
