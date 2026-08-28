"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData, type FAQItem } from "@/data/faq";
import { getDictionary } from "@/lib/i18n";

interface Props {
  locale: string;
  /** Page-specific questions. Defaults to the site-wide set (homepage). */
  items?: FAQItem[];
  /** Overrides the generic "Frequently Asked Questions" heading. */
  heading?: string;
}

export default function FAQ({ locale, items, heading }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = getDictionary(locale).faqSection;
  const faqs = items && items.length > 0 ? items : faqData;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="w-full py-16 bg-zinc-50 dark:bg-zinc-950/20 border-y border-zinc-200 dark:border-zinc-800 transition-colors">
      {/* FAQPage JSON-LD Schema for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-zinc-900 dark:text-white mb-10">
          {heading ?? t.heading}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl bg-white dark:bg-zinc-900 overflow-hidden shadow-xs transition-all duration-300 ${
                  isOpen
                    ? "border-blue-300 dark:border-blue-800/80 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/20"
                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50/80 dark:hover:bg-zinc-800/60 transition-all duration-200 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-100 pr-2 transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rotate-180" : "text-zinc-400"}`}>
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300" />
                  </div>
                </button>
                {/* Smooth accordion content transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 pt-3.5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
