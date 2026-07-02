import { getTemplateValues, getTemplateBrand } from "@/features/templates/sample-values";

// The document "paper" render shared by the detail-page live preview and the
// card thumbnail, so the cover image is a true mini of the live preview.
// No hooks / no "use client": renders in both server and client contexts.

function humanize(key: string) {
  return key.replace(/([A-Z])/g, " $1").trim();
}

interface DocumentPaperProps {
  template: any;
  values?: Record<string, string>;
}

export default function DocumentPaper({ template, values }: DocumentPaperProps) {
  const baseVals = values ?? getTemplateValues(template);
  // Ensure the letterhead company reflects this template's distinct brand (so
  // every cover/preview is its own document), and keep body {{companyName}}
  // consistent with the header.
  const brand = baseVals.companyName || getTemplateBrand(template);
  const vals = { ...baseVals, companyName: brand };
  const primary = template?.content?.styles?.primaryColor || "#2563eb";
  const secondary = template?.content?.styles?.secondaryColor || "#3b82f6";
  const footerText: string | undefined = template?.content?.layout?.footer;
  const blocks: any[] = template?.content?.editorState?.content ?? [];

  // Mirrors TemplateDetailView's renderTextWithVariables exactly.
  const renderText = (text: string) => {
    if (!text) return "";
    let result = text;
    Object.entries(vals).forEach(([key, val]) => {
      result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), val || humanize(key));
    });
    result = result.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, (_m, varName) => humanize(varName));
    return result;
  };

  return (
    <div className="bg-white text-zinc-800 font-sans">
      {/* Top accent stripe */}
      <div
        className="h-2 w-full"
        style={{ background: `linear-gradient(90deg, ${primary}, ${secondary})` }}
      />

      <div className="px-5 sm:px-10 py-6 sm:py-8 space-y-5">
        {/* Header row: Company / letterhead (doc-type header lives in the body) */}
        <div className="pb-5 border-b-2" style={{ borderColor: primary }}>
          <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: primary }}>
            {renderText("{{companyName}}")}
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">{renderText("{{address}}")}</div>
          <div className="text-xs text-zinc-400">
            {renderText("{{email}}")} · {renderText("{{phone}}")}
          </div>
        </div>

        {/* Document blocks */}
        <div className="space-y-3 text-zinc-700 text-[13px] leading-relaxed">
          {blocks.map((block: any, idx: number) => {
            if (block.type === "heading") {
              const lvl = block.attrs?.level || 1;
              const text = block.content?.map((c: any) => c.text).join("") || "";
              const replaced = renderText(text);
              if (lvl === 1)
                return (
                  <h2 key={idx} className="text-lg font-black mt-4 mb-1 pb-1 border-b" style={{ color: primary, borderColor: primary }}>
                    {replaced}
                  </h2>
                );
              if (lvl === 2)
                return (
                  <h2 key={idx} className="text-sm font-bold mt-3 mb-0.5 uppercase tracking-wider" style={{ color: primary }}>
                    {replaced}
                  </h2>
                );
              return (
                <h3 key={idx} className="text-xs font-bold mt-2 text-zinc-600 uppercase tracking-wide">
                  {replaced}
                </h3>
              );
            }

            if (block.type === "paragraph") {
              const hasContent = block.content && block.content.length > 0;
              if (!hasContent) return <div key={idx} className="h-2" />;
              return (
                <p key={idx} className="text-[12px] text-zinc-600 leading-relaxed">
                  {block.content?.map((c: any, cidx: number) => {
                    const isBold = c.marks?.some((m: any) => m.type === "bold");
                    const isItalic = c.marks?.some((m: any) => m.type === "italic");
                    const textVal = renderText(c.text || "");
                    if (isBold && isItalic) return <strong key={cidx}><em>{textVal}</em></strong>;
                    if (isBold) return <strong key={cidx} className="font-semibold text-zinc-800">{textVal}</strong>;
                    if (isItalic) return <em key={cidx} className="text-zinc-500">{textVal}</em>;
                    return <span key={cidx}>{textVal}</span>;
                  })}
                </p>
              );
            }

            if (block.type === "table") {
              const rows = block.content || [];
              const header = rows[0];
              const body = rows.slice(1);
              return (
                <div key={idx} className="overflow-x-auto rounded-lg border border-zinc-200 my-3">
                  <table className="w-full text-left text-[11px] border-collapse">
                    {header && (
                      <thead>
                        <tr style={{ backgroundColor: primary }}>
                          {header.content?.map((cell: any, cellIdx: number) => (
                            <th key={cellIdx} className="px-3 py-2 font-semibold text-white whitespace-nowrap">
                              {renderText(cell.content?.[0]?.content?.[0]?.text || "")}
                            </th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {body.map((row: any, rowIdx: number) => (
                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                          {row.content?.map((cell: any, cellIdx: number) => (
                            <td key={cellIdx} className="px-3 py-2 border-t border-zinc-100 text-zinc-600">
                              {renderText(cell.content?.[0]?.content?.[0]?.text || "")}
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
                <ul key={idx} className="space-y-1 my-2 pl-1">
                  {block.content?.map((li: any, liIdx: number) => (
                    <li key={liIdx} className="flex items-start gap-2 text-[12px] text-zinc-600">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: primary }} />
                      {renderText(li.content?.[0]?.content?.[0]?.text || "")}
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "orderedList") {
              return (
                <ol key={idx} className="space-y-1 my-2 pl-4 list-decimal">
                  {block.content?.map((li: any, liIdx: number) => (
                    <li key={liIdx} className="text-[12px] text-zinc-600">
                      {renderText(li.content?.[0]?.content?.[0]?.text || "")}
                    </li>
                  ))}
                </ol>
              );
            }

            if (block.type === "horizontalRule") {
              return <hr key={idx} className="border-zinc-200 my-3" />;
            }

            return null;
          })}
        </div>

        {/* Footer */}
        {footerText && (
          <div className="pt-5 mt-4 border-t border-zinc-200 flex items-center justify-between">
            <div className="text-[10px] text-zinc-400">{renderText(footerText)}</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: primary }}>
              {renderText("{{companyName}}")}
            </div>
          </div>
        )}
      </div>

      {/* Bottom accent stripe */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${primary}, ${secondary})` }}
      />
    </div>
  );
}
