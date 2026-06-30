"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Templix AI and how does it work?",
    answer: "Templix AI is a production-grade document productivity platform that provides professionally designed business templates (invoices, resumes, contracts, proposals). You can search for a template, customize it in our interactive rich-text editor, use AI to rewrite it for different tones, and export it instantly to PDF or DOCX formats."
  },
  {
    question: "Can I customize template variables automatically?",
    answer: "Yes! Our templates are JSON-structured and support variables (e.g. {{companyName}}, {{clientName}}). You can fill in these fields globally or edit them directly within the Tiptap editor canvas."
  },
  {
    question: "Are document downloads in PDF and DOCX formats free?",
    answer: "Yes, standard template customization and document exports (PDF, DOCX, TXT) are fully free. Premium templates and advanced features like the AI writing assistant require an active subscription tier or credits."
  },
  {
    question: "How does the AI Document Workspace help write better documents?",
    answer: "Our built-in AI assistant uses advanced models (like Gemini) to rewrite paragraphs, adjust tone (professional, friendly, brief, long), translate text across languages, and check grammar, keeping editing efficient and error-free."
  }
];

// FAQ JSON-LD schema — exported so server components can inject it
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQ({ locale }: { locale: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-zinc-50 dark:bg-zinc-950/20 border-y border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center tracking-tight text-zinc-900 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
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
                    className={`h-5 w-5 text-zinc-400 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
