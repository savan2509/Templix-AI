"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, ArrowRight, CheckCircle2, ChevronRight, PenTool, Download, Lock } from "lucide-react";
import DocumentPaper from "./DocumentPaper";
import { getTemplateValues } from "@/features/templates/sample-values";
import { getDictionary } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";

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

  const dict = getDictionary(locale);
  const t = dict.templates;
  const common = dict.common;
  const categoryLabel =
    common.categoryNames[template.categorySlug as keyof typeof common.categoryNames] ??
    template.categoryName;

  // The primary quality badge must match the document type — ATS only means
  // something for resumes; invoices/quotations get the audit-format badge;
  // everything else gets a neutral professional-standards badge.
  const qualityPrimary =
    template.categorySlug === "resumes"
      ? t.qualityAts
      : template.categorySlug === "invoices" || template.categorySlug === "quotations"
        ? t.qualityAudit
        : t.qualityStandard;

  // Initialize form state for the template's declared fields (shared sample values).
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() =>
    getTemplateValues(template)
  );

  // Editing a template requires an account. `canEdit` gates the form + button:
  //   null  → auth not resolved yet (optimistic; the proxy is the real backstop)
  //   true  → signed in, or Supabase unconfigured (no gate, matches the proxy)
  //   false → signed out → the form is locked and the button routes to /login
  const [canEdit, setCanEdit] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createClient();
    if (!supabase) {
      setCanEdit(true); // Supabase not configured → no gating (mirrors the proxy)
      return;
    }
    let active = true;
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (active) setCanEdit(!!user);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setCanEdit(!!session?.user);
    });
    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const locked = canEdit === false;

  const handleInputChange = (field: string, val: string) => {
    setFieldValues((prev) => ({ ...prev, [field]: val }));
  };

  const handleCustomizeClick = () => {
    // Build the editor URL with the template slug + pre-filled variables.
    const params = new URLSearchParams();
    params.set("template", template.slug);
    Object.entries(fieldValues).forEach(([k, v]) => {
      params.set(`field_${k}`, v);
    });
    const editorUrl = `/${locale}/editor/new?${params.toString()}`;

    // Signed out → send them to login first, carrying the editor URL (with their
    // values) in `next` so they land straight back in the editor after signing in.
    if (locked) {
      router.push(`/${locale}/login?next=${encodeURIComponent(editorUrl)}`);
      return;
    }
    router.push(editorUrl);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Left side: parameters controller form */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {categoryLabel}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
              {t.customizeVariables}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
              {t.fillParams}
            </p>
          </div>

          <div className="space-y-4 max-h-[360px] overflow-y-auto overflow-x-hidden pr-3">
            {template.content.fields.map((field) => (
              <div key={field} className="space-y-1">
                <label htmlFor={`field-${field}`} className="block text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {field.replace(/([A-Z])/g, " $1").replace(/[_-]+/g, " ").trim().replace(/\b\w/g, (c) => c.toUpperCase())}
                </label>
                <input
                  id={`field-${field}`}
                  type="text"
                  value={fieldValues[field] || ""}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  disabled={locked}
                  readOnly={locked}
                  aria-disabled={locked}
                  className="w-full h-10 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
            <button
              onClick={handleCustomizeClick}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/10 flex items-center justify-center gap-1.5 transition-colors"
            >
              {locked ? <Lock className="h-4 w-4" /> : <PenTool className="h-4 w-4" />}
              <span>{locked ? t.signInToCustomize : t.customizeInEditor}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-[10px] text-center text-zinc-400">
              {locked ? t.signInToEditHint : t.customizeHint}
            </p>
          </div>
        </div>

        {/* Dynamic Trust Badges */}
        <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3.5">
          <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
            {t.qualityGuarantee}
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>{qualityPrimary}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>{t.qualityOffline}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: dynamic live preview paper */}
      <div className="lg:col-span-7 space-y-4">
        <h3 className="font-bold text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="h-4 w-4 text-zinc-400" />
          <span>{t.livePreview}</span>
          <span className="ml-auto text-[10px] text-green-500 font-semibold uppercase tracking-widest animate-pulse">● {t.liveLabel}</span>
        </h3>

        {/* A4 Paper simulation — same DocumentPaper as the card thumbnail */}
        <div className="w-full border border-zinc-300 rounded-xl shadow-2xl overflow-hidden relative" style={{ minHeight: "700px" }}>
          <DocumentPaper template={template} values={fieldValues} />
        </div>
      </div>
    </div>
  );
}
