"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles } from "lucide-react";

export default function SearchHero({ locale }: { locale: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    router.push(`/${locale}/templates?q=${encodeURIComponent(query.trim())}`);
  };

  const quickTags = [
    { label: "Invoice", q: "invoice" },
    { label: "Resume", q: "resume" },
    { label: "Contract", q: "contract" },
    { label: "Proposal", q: "proposal" },
    { label: "Cover Letter", q: "cover letter" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search invoice templates, resumes, agreements..."
            className="w-full h-14 pl-12 pr-32 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 shadow-lg shadow-zinc-100 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 h-10 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-650 text-white font-semibold text-sm transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Search</span>
          </button>
        </div>
      </form>

      {/* Quick suggestions tags */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-450">
        <span>Popular:</span>
        {quickTags.map((tag) => (
          <button
            key={tag.q}
            onClick={() => router.push(`/${locale}/templates?q=${tag.q}`)}
            className="px-3 py-1 rounded-full border border-zinc-250/70 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 bg-zinc-50/50 dark:bg-zinc-900/50 transition-all"
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}
