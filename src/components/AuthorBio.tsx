import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Calendar, CheckCircle2 } from "lucide-react";
import { logoAlt } from "@/lib/image-alt";

interface AuthorBioProps {
  publishedAt?: string;
  updatedAt?: string;
  category?: string;
  readTime?: number;
}

export default function AuthorBio({ publishedAt, updatedAt, category, readTime }: AuthorBioProps) {
  const displayDate = updatedAt || publishedAt || "2026-08-01";
  
  return (
    <div className="my-8 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
        <div className="flex items-center gap-3.5">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
            <Image
              src="/Templix-ai-light.png"
              alt={logoAlt("light")}
              width={40}
              height={40}
              className="h-8 w-8 object-contain dark:hidden"
            />
            <Image
              src="/Templix-ai-dark.png"
              alt={logoAlt("dark")}
              width={40}
              height={40}
              className="hidden h-8 w-8 object-contain dark:block"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-sm text-zinc-900 dark:text-white">
              <span>Templix AI Editorial Team</span>
              <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Reviewed by Finance &amp; Document Structuring Specialists
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          {displayDate && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-zinc-400" />
              <span>Updated {displayDate}</span>
            </div>
          )}
          {readTime && (
            <>
              <span>•</span>
              <span>{readTime} min read</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
        <span>
          <strong>E-E-A-T Quality Standard:</strong> All guides, templates, and calculators produced by Templix AI are created and audited by business document specialists to ensure accurate tax formulas, standard legal terms, and ATS parser compatibility.
        </span>
      </div>
    </div>
  );
}
