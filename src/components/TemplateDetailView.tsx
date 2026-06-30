"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, ArrowRight, CheckCircle2, ChevronRight, PenTool, Download } from "lucide-react";

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

  // Initialize form state for all fields defined in the template JSON
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    template.content.fields.forEach((field) => {
      // Set reasonable placeholders
      if (field === "companyName") initial[field] = "Acme Global Inc.";
      else if (field === "clientName") initial[field] = "John Doe Services";
      else if (field === "invoiceNumber") initial[field] = "INV-2026-001";
      else if (field === "invoiceDate") initial[field] = "2026-06-28";
      else if (field === "dueDate") initial[field] = "2026-07-12";
      else if (field === "taxRate") initial[field] = "15";
      else if (field === "currency") initial[field] = "$";
      else if (field === "amountDue") initial[field] = "4,500.00";
      else if (field === "fullName") initial[field] = "Sarah Jenkins";
      else if (field === "jobTitle") initial[field] = "Principal Lead Engineer";
      else if (field === "email") initial[field] = "sarah.j@techsolutions.com";
      else if (field === "phone") initial[field] = "+1 (555) 382-9281";
      else if (field === "github") initial[field] = "sarahj-dev";
      else if (field === "linkedin") initial[field] = "sarah-jenkins-lead";
      else if (field === "summary") initial[field] = "Lead developer with 8+ years experience scaling SaaS architectures, designing Next.js routers, and managing high-volume Postgres schemas.";
      else if (field === "contractDate") initial[field] = "2026-06-28";
      else if (field === "freelancerName") initial[field] = "Sarah Jenkins (Consultant)";
      else if (field === "projectName") initial[field] = "Templix AI Platform Development";
      else if (field === "paymentAmount") initial[field] = "$5,000.00";
      else if (field === "projectScope") initial[field] = "Deliver Next.js App Router integrations, seed database schema, construct Tiptap editor canvas, and build PDF exporter plugins.";
      else initial[field] = `[${field}]`;
    });
    return initial;
  });

  const handleInputChange = (field: string, val: string) => {
    setFieldValues((prev) => ({ ...prev, [field]: val }));
  };

  // Helper to replace double curly braces with values in live preview text
  const renderTextWithVariables = (text: string) => {
    let result = text;
    Object.entries(fieldValues).forEach(([key, val]) => {
      result = result.replace(new RegExp(`{{${key}}}`, "g"), val || `[${key}]`);
    });
    return result;
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
                <label className="block text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
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
        </h3>

        {/* Paper Container simulated */}
        <div className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-2xl shadow-lg aspect-[1/1.4] p-8 sm:p-12 overflow-hidden flex flex-col justify-between font-sans leading-relaxed relative">
          {/* Accent Border representing selected color styles */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{ backgroundColor: template.content.styles.primaryColor || "#2563eb" }}
          />

          <div className="space-y-6 flex-1 overflow-y-auto overflow-x-hidden pr-2">
            {/* Header branding */}
            {template.content.layout.header && (
              <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 border-b border-zinc-100 pb-2">
                {template.content.layout.header}
              </div>
            )}

            {/* Render Tiptap structure block representations */}
            <div className="space-y-4 text-sm text-zinc-700">
              {template.content.editorState.content.map((block, idx) => {
                if (block.type === "heading") {
                  const lvl = block.attrs?.level || 1;
                  const text = block.content?.map((c: any) => c.text).join("") || "";
                  const styleClass =
                    lvl === 1
                      ? "text-2xl font-extrabold text-zinc-900 border-b border-zinc-100 pb-2"
                      : "text-base font-bold text-zinc-800 mt-4 border-b border-zinc-100/50 pb-1";

                  return (
                    <h2 key={idx} className={styleClass}>
                      {renderTextWithVariables(text)}
                    </h2>
                  );
                }

                if (block.type === "paragraph") {
                  return (
                    <p key={idx} className="leading-relaxed text-xs">
                      {block.content?.map((c: any, cidx: number) => {
                        const isBold = c.marks?.some((m: any) => m.type === "bold");
                        const isItalic = c.marks?.some((m: any) => m.type === "italic");
                        const textVal = renderTextWithVariables(c.text);

                        if (isBold) return <strong key={cidx} className="text-zinc-950 font-bold">{textVal}</strong>;
                        if (isItalic) return <em key={cidx} className="italic text-zinc-600">{textVal}</em>;
                        return textVal;
                      })}
                    </p>
                  );
                }

                if (block.type === "table") {
                  return (
                    <div key={idx} className="my-4 border border-zinc-200 rounded-lg overflow-hidden">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-zinc-50 border-b border-zinc-200">
                            {block.content?.[0]?.content?.map((cell: any, cellIdx: number) => (
                              <th key={cellIdx} className="p-2.5 font-semibold text-zinc-700">
                                {renderTextWithVariables(cell.content?.[0]?.content?.[0]?.text || "")}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.content?.slice(1).map((row: any, rowIdx: number) => (
                            <tr key={rowIdx} className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/50">
                              {row.content?.map((cell: any, cellIdx: number) => (
                                <td key={cellIdx} className="p-2.5 text-zinc-600">
                                  {renderTextWithVariables(cell.content?.[0]?.content?.[0]?.text || "")}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                if (block.type === "bulletList") {
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-1.5 text-xs text-zinc-600 my-3">
                      {block.content?.map((li: any, liIdx: number) => (
                        <li key={liIdx}>
                          {renderTextWithVariables(li.content?.[0]?.content?.[0]?.text || "")}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
            </div>
          </div>

          {/* Footer branding */}
          {template.content.layout.footer && (
            <div className="text-[10px] text-zinc-400 text-center border-t border-zinc-100 pt-4 mt-6">
              {template.content.layout.footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
