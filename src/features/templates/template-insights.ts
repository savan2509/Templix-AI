// Per-template expert insight sections, merged from the per-batch files. Rendered
// on the template detail page so each page carries genuinely-unique, useful copy
// (US + India specifics where relevant) instead of only the category-shared
// framing — directly addressing the "pages look near-duplicate, so most don't get
// indexed" problem from the keyword-map plan.
import type { TemplateInsight } from "./template-insights-types";
import { insights1 } from "./insights-1";
import { insights2 } from "./insights-2";
import { insights3 } from "./insights-3";
import { insights4 } from "./insights-4";

export type { TemplateInsight };

const TEMPLATE_INSIGHTS: Record<string, TemplateInsight> = {
  ...insights1,
  ...insights2,
  ...insights3,
  ...insights4,
};

/** Unique expert section for a template slug (undefined when none is written). */
export function getTemplateInsight(slug: string | null | undefined): TemplateInsight | undefined {
  return slug ? TEMPLATE_INSIGHTS[slug] : undefined;
}
