import { getTemplateValues, getTemplateBrand, getTemplateDefaults } from "@/features/templates/sample-values";

// The document "paper" render shared by the detail-page live preview and the
// card thumbnail, so the cover image is a true mini of the live preview.
// No hooks / no "use client": renders in both server and client contexts.
//
// For the newer categories (reports, business-plans, quotations) each template
// is assigned one of several distinct LETTERHEAD LAYOUTS and heading styles,
// derived deterministically from its slug, so no two covers in a category share
// the same silhouette. The original five categories keep the classic layout.

function humanize(key: string) {
  // camelCase / snake / kebab → Title Case: "companyName" → "Company Name".
  const spaced = key.replace(/([A-Z])/g, " $1").replace(/[_-]+/g, " ").trim();
  return spaced.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Stable 32-bit hash (FNV-1a) so layout choice is deterministic per slug and
// identical on server and client (no Math.random / Date).
function hashStr(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const VARIANT_CATEGORIES = new Set(["reports", "business-plans", "quotations"]);
const LAYOUT_COUNT = 6;
const HEADING_STYLE_COUNT = 3;

interface DocumentPaperProps {
  template: any;
  values?: Record<string, string>;
}

export default function DocumentPaper({ template, values }: DocumentPaperProps) {
  const baseVals = values ?? getTemplateValues(template);
  // Ensure the letterhead company reflects this template's distinct brand.
  const brand = baseVals.companyName || getTemplateBrand(template);
  // Layer every known default UNDER the passed/field values so any variable used
  // in the body but absent from `content.fields` still resolves to a real sample
  // value (non-empty passed values win; unknown vars fall through to humanize).
  const vals: Record<string, string> = { ...getTemplateDefaults(template) };
  for (const [k, v] of Object.entries(baseVals)) {
    if (v) vals[k] = v;
  }
  vals.companyName = brand;
  const primary = template?.content?.styles?.primaryColor || "#2563eb";
  const secondary = template?.content?.styles?.secondaryColor || "#3b82f6";
  const footerText: string | undefined = template?.content?.layout?.footer;
  const docHeader: string | undefined = template?.content?.layout?.header;
  const blocks: any[] = template?.content?.editorState?.content ?? [];

  // Pick a layout + heading style for the variant categories. Prefer an explicit
  // per-template assignment (baked into styles for an even spread); otherwise
  // derive deterministically from the slug hash.
  const useVariants = VARIANT_CATEGORIES.has(template?.categorySlug);
  const explicitLayout = template?.content?.styles?.layoutVariant;
  const explicitHeading = template?.content?.styles?.headingStyle;
  const h = hashStr(String(template?.slug || template?.id || ""));
  const layout = useVariants
    ? (typeof explicitLayout === "number" ? explicitLayout % LAYOUT_COUNT : h % LAYOUT_COUNT)
    : -1;
  const hstyle = useVariants
    ? (typeof explicitHeading === "number" ? explicitHeading % HEADING_STYLE_COUNT : Math.floor(h / LAYOUT_COUNT) % HEADING_STYLE_COUNT)
    : 0;

  const grad = `linear-gradient(135deg, ${primary}, ${secondary})`;

  const renderText = (text: string) => {
    if (!text) return "";
    let result = text;
    Object.entries(vals).forEach(([key, val]) => {
      result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), val || humanize(key));
    });
    result = result.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, (_m, varName) => humanize(varName));
    // Sentence templates append a period after a variable, but many values
    // already end in one ("…web layouts." + "." → "…web layouts.."). Collapse
    // the duplicate. No template copy uses ellipses, so this is safe.
    result = result.replace(/\.{2,}/g, ".");
    return result;
  };

  const companyLine = renderText("{{companyName}}");
  const addressLine = renderText("{{address}}");
  const emailLine = renderText("{{email}}");
  const phoneLine = renderText("{{phone}}");
  const initial = (companyLine.trim()[0] || "A").toUpperCase();

  // ---- Heading renderer (3 styles) ----
  const renderHeading = (idx: number, lvl: number, replaced: string) => {
    if (hstyle === 1) {
      if (lvl === 1)
        return (
          <h2 key={idx} className="text-lg font-black mt-4 mb-1 pl-3 border-l-4" style={{ color: primary, borderColor: primary }}>
            {replaced}
          </h2>
        );
      if (lvl === 2)
        return (
          <h2 key={idx} className="text-sm font-bold mt-3 mb-0.5 uppercase tracking-wider flex items-center gap-2" style={{ color: primary }}>
            <span className="h-2 w-2 rounded-sm shrink-0" style={{ backgroundColor: primary }} />
            {replaced}
          </h2>
        );
      return (
        <h3 key={idx} className="text-xs font-bold mt-2 text-zinc-500 uppercase tracking-wide">{replaced}</h3>
      );
    }
    if (hstyle === 2) {
      if (lvl === 1)
        return (
          <h2 key={idx} className="text-base font-black mt-4 mb-1 inline-block px-3 py-1 rounded-md text-white" style={{ backgroundColor: primary }}>
            {replaced}
          </h2>
        );
      if (lvl === 2)
        return (
          <h2 key={idx} className="text-sm font-bold mt-3 mb-0.5 pb-1 border-b-2" style={{ color: primary, borderColor: `${primary}55` }}>
            {replaced}
          </h2>
        );
      return (
        <h3 key={idx} className="text-xs font-bold mt-2 text-zinc-600 tracking-wide">{replaced}</h3>
      );
    }
    // hstyle 0 — classic
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
      <h3 key={idx} className="text-xs font-bold mt-2 text-zinc-600 uppercase tracking-wide">{replaced}</h3>
    );
  };

  // ---- Shared body block renderer ----
  const body = (
    <div className="space-y-3 text-zinc-700 text-[13px] leading-relaxed">
      {blocks.map((block: any, idx: number) => {
        if (block.type === "heading") {
          const lvl = block.attrs?.level || 1;
          const text = block.content?.map((c: any) => c.text).join("") || "";
          return renderHeading(idx, lvl, renderText(text));
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
          const bodyRows = rows.slice(1);
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
                  {bodyRows.map((row: any, rowIdx: number) => (
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
  );

  // ---- Shared footer ----
  const footer = footerText ? (
    <div className="pt-5 mt-4 border-t border-zinc-200 flex items-center justify-between">
      <div className="text-[10px] text-zinc-400">{renderText(footerText)}</div>
      <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: primary }}>
        {companyLine}
      </div>
    </div>
  ) : null;

  // ================= LAYOUT VARIANTS =================

  // 1 — Sidebar: full-height colored rail on the left.
  if (layout === 1) {
    return (
      <div className="bg-white text-zinc-800 font-sans flex">
        <div className="w-1/3 shrink-0 px-5 py-8 text-white flex flex-col" style={{ background: grad }}>
          <div className="text-lg sm:text-2xl font-black leading-tight tracking-tight">{companyLine}</div>
          <div className="mt-3 h-1 w-10 rounded bg-white/70" />
          <div className="mt-auto pt-8 space-y-1 text-[11px] text-white/85">
            <div>{addressLine}</div>
            <div>{emailLine}</div>
            <div>{phoneLine}</div>
          </div>
        </div>
        <div className="flex-1 px-6 py-8 space-y-5 min-w-0">
          {docHeader && (
            <div className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: primary }}>
              {renderText(docHeader)}
            </div>
          )}
          {body}
          {footer}
        </div>
      </div>
    );
  }

  // 2 — Banner: full-width solid header band.
  if (layout === 2) {
    return (
      <div className="bg-white text-zinc-800 font-sans">
        <div className="px-5 sm:px-10 py-6" style={{ background: grad }}>
          <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">{companyLine}</div>
          <div className="mt-1 text-[11px] text-white/85 flex flex-wrap gap-x-3 gap-y-0.5">
            <span>{addressLine}</span>
            <span>{emailLine}</span>
            <span>{phoneLine}</span>
          </div>
        </div>
        <div className="px-5 sm:px-10 py-7 space-y-5">
          {body}
          {footer}
        </div>
      </div>
    );
  }

  // 3 — Centered: minimalist centered letterhead.
  if (layout === 3) {
    return (
      <div className="bg-white text-zinc-800 font-sans">
        <div className="px-5 sm:px-12 pt-9 pb-6 text-center border-b" style={{ borderColor: `${primary}33` }}>
          <div className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: primary }}>{companyLine}</div>
          <div className="mx-auto mt-2 h-1 w-14 rounded" style={{ backgroundColor: primary }} />
          <div className="mt-3 text-[11px] text-zinc-400">
            {addressLine} · {emailLine} · {phoneLine}
          </div>
        </div>
        <div className="px-5 sm:px-12 py-7 space-y-5">
          {body}
          {footer}
        </div>
      </div>
    );
  }

  // 4 — Accent bar + monogram badge.
  if (layout === 4) {
    return (
      <div className="bg-white text-zinc-800 font-sans flex">
        <div className="w-1.5 shrink-0" style={{ background: `linear-gradient(180deg, ${primary}, ${secondary})` }} />
        <div className="flex-1 px-5 sm:px-9 py-7 space-y-5 min-w-0">
          <div className="flex items-center gap-4 pb-5 border-b" style={{ borderColor: `${primary}22` }}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white text-xl font-black" style={{ background: grad }}>
              {initial}
            </div>
            <div className="min-w-0">
              <div className="text-xl sm:text-2xl font-black tracking-tight truncate" style={{ color: primary }}>{companyLine}</div>
              <div className="text-[11px] text-zinc-400 truncate">{addressLine} · {emailLine}</div>
            </div>
          </div>
          {body}
          {footer}
        </div>
      </div>
    );
  }

  // 5 — Boxed: whole document framed with a colored border.
  if (layout === 5) {
    return (
      <div className="bg-white text-zinc-800 font-sans p-3 sm:p-4">
        <div className="rounded-xl border-2 overflow-hidden" style={{ borderColor: primary }}>
          <div className="px-5 sm:px-8 py-5" style={{ backgroundColor: `${primary}0F` }}>
            <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: primary }}>{companyLine}</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">{addressLine} · {emailLine} · {phoneLine}</div>
          </div>
          <div className="px-5 sm:px-8 py-6 space-y-5">
            {body}
            {footer}
          </div>
        </div>
      </div>
    );
  }

  // 0 / classic (also the original five categories).
  return (
    <div className="bg-white text-zinc-800 font-sans">
      <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${primary}, ${secondary})` }} />
      <div className="px-5 sm:px-10 py-6 sm:py-8 space-y-5">
        <div className="pb-5 border-b-2" style={{ borderColor: primary }}>
          <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: primary }}>{companyLine}</div>
          <div className="text-xs text-zinc-400 mt-0.5">{addressLine}</div>
          <div className="text-xs text-zinc-400">{emailLine} · {phoneLine}</div>
        </div>
        {body}
        {footer}
      </div>
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${primary}, ${secondary})` }} />
    </div>
  );
}
