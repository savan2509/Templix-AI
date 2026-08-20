import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, BookOpen, Wrench, Briefcase, ExternalLink } from "lucide-react";
import { RelatedItem } from "@/lib/seo/internal-linking";

interface RelatedContentProps {
  relatedTemplates?: RelatedItem[];
  relatedGuides?: RelatedItem[];
  relatedTools?: RelatedItem[];
  relatedUseCases?: RelatedItem[];
  title?: string;
}

export default function RelatedContent({
  relatedTemplates = [],
  relatedGuides = [],
  relatedTools = [],
  relatedUseCases = [],
  title = "Related Resources & Tools",
}: RelatedContentProps) {
  const hasContent =
    relatedTemplates.length > 0 ||
    relatedGuides.length > 0 ||
    relatedTools.length > 0 ||
    relatedUseCases.length > 0;

  if (!hasContent) return null;

  return (
    <section className="my-14 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-950 p-6 md:p-10 shadow-xs">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full">
            Recommended Next
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mt-2">
            {title}
          </h2>
        </div>
      </div>

      <div className="space-y-8">
        {/* Related Templates Grid */}
        {relatedTemplates.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                Related Templates
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {relatedTemplates.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    {item.badge && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        {item.badge}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-2 line-clamp-1">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-3 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 gap-1">
                    <span>Use Template</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Guides & Tools split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <div className="flex items-center gap-2 mb-3.5">
                <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Related Guides & Tips
                </h3>
              </div>
              <ul className="space-y-2.5">
                {relatedGuides.map((guide, idx) => (
                  <li key={idx}>
                    <Link
                      href={guide.href}
                      className="group flex items-start justify-between gap-3 text-xs text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    >
                      <span className="font-medium line-clamp-1 group-hover:underline">
                        {guide.title}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600 dark:text-blue-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <div className="flex items-center gap-2 mb-3.5">
                <Wrench className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Helpful Utilities & Calculators
                </h3>
              </div>
              <ul className="space-y-2.5">
                {relatedTools.map((tool, idx) => (
                  <li key={idx}>
                    <Link
                      href={tool.href}
                      className="group flex items-start justify-between gap-3 text-xs text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    >
                      <span className="font-medium line-clamp-1 group-hover:underline">
                        {tool.title}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                        Free
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
