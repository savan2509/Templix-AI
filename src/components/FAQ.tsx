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

  return (
    <section className="w-full py-16 bg-zinc-50 dark:bg-zinc-950/20 border-y border-zinc-200 dark:border-zinc-800 transition-colors">
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
                className="border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 ml-3 text-zinc-400 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Answer always in the DOM (collapsed via CSS) so users and
                    crawlers both see it and it matches the FAQPage schema. */}
                <div className={`${isOpen ? "block" : "hidden"} px-5 pb-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-3`}>
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
