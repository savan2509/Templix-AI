"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, ArrowRight, CheckCircle2, ChevronRight, PenTool, Download } from "lucide-react";
import DocumentPaper from "./DocumentPaper";
import { getTemplateValues } from "@/features/templates/sample-values";

interface TemplateContent {
  title: string;
  fields: string[];
  layout: {
    header?: string;
    footer?: string;
  };
  styles: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  editorState: {
    type: string;
    content: any[];
  };
}

interface TemplateDetailViewProps {
  locale: string;
  template: {
    id: string;
    slug: string;
    title: string;
    description: string;
    isPremium: boolean;
    categorySlug: string;
    categoryName: string;
    content: TemplateContent;
  };
}

export default function TemplateDetailView({ locale, template }: TemplateDetailViewProps) {
  const router = useRouter();

  // Initialize form state for the template's declared fields (shared sample values).
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() =>
    getTemplateValues(template)
  );

  const handleInputChange = (field: string, val: string) => {
    setFieldValues((prev) => ({ ...prev, [field]: val }));
  };

  const handleCustomizeClick = () => {
    // Redirect to the editor page with template slug and pre-filled variables as search queries
    const params = new URLSearchParams();
    params.set("template", template.slug);
    Object.entries(fieldValues).forEach(([k, v]) => {
      params.set(`field_${k}`, v);
    });

    router.push(`/${locale}/editor/new?${params.toString()}`);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Left side: parameters controller form */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {template.categoryName}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
              Customize variables
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
              Fill in the parameters below. The preview paper will update dynamically in real time.
            </p>
          </div>

          <div className="space-y-4 max-h-[360px] overflow-y-auto overflow-x-hidden pr-3">
            {template.content.fields.map((field) => (
              <div key={field} className="space-y-1">
                <label htmlFor={`field-${field}`} className="block text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  id={`field-${field}`}
                  type="text"
                  value={fieldValues[field] || ""}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
            <button
              onClick={handleCustomizeClick}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/10 flex items-center justify-center gap-1.5 transition-colors"
            >
              <PenTool className="h-4 w-4" />
              <span>Customize in Editor</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-[10px] text-center text-zinc-400">
              Tapping opens our full tiptap canvas where you can add signature, upload logo, export PDF.
            </p>
          </div>
        </div>

        {/* Dynamic Trust Badges */}
        <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3.5">
          <h4 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
            Template Quality Guarantee
          </h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Tested & optimized for major Applicant Tracking Systems (ATS).</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Formatted to standard invoice audit configurations.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Supports instant offline PDF & DOCX compilations.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: dynamic live preview paper */}
      <div className="lg:col-span-7 space-y-4">
        <h3 className="font-bold text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="h-4 w-4 text-zinc-400" />
          <span>Live Document Preview</span>
          <span className="ml-auto text-[10px] text-green-500 font-semibold uppercase tracking-widest animate-pulse">● Live</span>
        </h3>

        {/* A4 Paper simulation — same DocumentPaper as the card thumbnail */}
        <div className="w-full border border-zinc-300 rounded-xl shadow-2xl overflow-hidden relative" style={{ minHeight: "700px" }}>
          <DocumentPaper template={template} values={fieldValues} />
        </div>
      </div>
    </div>
  );
}
