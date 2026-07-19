// A unique, template-specific expert content block rendered on a template detail
// page — the "information gain" that keeps each of the ~180 detail pages from
// reading as a near-duplicate of its siblings (the reason Google was indexing
// only a fraction of them). Briefs come from the keyword-map content plan.
export interface TemplateInsight {
  heading: string;      // specific H2, e.g. "What legally must appear on a freelancer invoice"
  paragraphs: string[]; // 2-4 paragraphs, ~150-300 words total
}
