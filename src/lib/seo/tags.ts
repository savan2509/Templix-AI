/**
 * Taxonomy & Tags System for Templix AI
 *
 * Implements Point 13:
 * Provides standardized tags, attribute grouping, and topical relationship maps
 * across 1,000+ templates, tools, use cases, and guides.
 */

export interface ContentTag {
  id: string;
  name: string;
  category?: string;
}

export const POPULAR_TAGS: ContentTag[] = [
  { id: "freelancer", name: "Freelancer" },
  { id: "small-business", name: "Small Business" },
  { id: "contractor", name: "Contractor" },
  { id: "consultant", name: "Consultant" },
  { id: "startup", name: "Startup" },
  { id: "agency", name: "Agency" },
  { id: "pdf", name: "PDF Format" },
  { id: "word", name: "Word DOCX" },
  { id: "printable", name: "Printable" },
  { id: "ats-friendly", name: "ATS Friendly" },
  { id: "legal", name: "Legal Compliance" },
  { id: "tax-invoice", name: "Tax Invoice" },
  { id: "commercial", name: "Commercial" },
  { id: "real-estate", name: "Real Estate" },
  { id: "construction", name: "Construction" },
  { id: "tech-it", name: "Technology & IT" },
  { id: "creative", name: "Design & Creative" },
];

/**
 * Derives dynamic tags based on template or page metadata.
 */
export function extractContentTags(item: {
  title: string;
  category?: string;
  slug?: string;
  tags?: string[];
}): string[] {
  const extracted = new Set<string>();

  if (item.tags && item.tags.length > 0) {
    item.tags.forEach((t) => extracted.add(t.toLowerCase()));
  }

  const text = `${item.title} ${item.category || ""} ${item.slug || ""}`.toLowerCase();

  POPULAR_TAGS.forEach((tag) => {
    if (text.includes(tag.id) || text.includes(tag.name.toLowerCase())) {
      extracted.add(tag.id);
    }
  });

  // Default fallbacks
  if (extracted.size === 0) {
    extracted.add("business");
    extracted.add("professional");
    extracted.add("printable");
  }

  return Array.from(extracted);
}
