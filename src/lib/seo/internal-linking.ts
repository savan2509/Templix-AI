/**
 * Automated Internal Linking Engine for Templix AI
 *
 * Implements Points 11, 12, 22:
 * Connects templates, blog guides, tools, use cases, and industry landing pages
 * dynamically using semantic tagging, category clusters, and deterministic hashing.
 */

import { allFallbackTemplates } from "@/data/templates-fallback";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { ALL_TOOLS } from "@/data/tools";
import { extractContentTags } from "./tags";

export interface RelatedItem {
  id?: string;
  title: string;
  href: string;
  description?: string;
  badge?: string;
  category?: string;
}

// Stable deterministic offset per slug so different templates surface distinct slices of content
function hashSlug(slug: string, modulo: number): number {
  if (modulo <= 0) return 0;
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash % modulo;
}

/**
 * Automatically fetch related templates based on category, tags, and semantic similarity.
 */
export function getRelatedTemplates(
  currentSlug: string,
  categorySlug?: string,
  limit: number = 6
): RelatedItem[] {
  const normSlug = currentSlug.toLowerCase();
  const tags = extractContentTags({ title: currentSlug, category: categorySlug, slug: currentSlug });

  // 1. Same category first
  const sameCategory = allFallbackTemplates.filter(
    (t) =>
      t.slug !== normSlug &&
      (!categorySlug || t.categorySlug.toLowerCase() === categorySlug.toLowerCase())
  );

  // 2. Score candidates by matching tags
  const scored = sameCategory.map((tmpl) => {
    const tmplTags = extractContentTags({
      title: tmpl.title,
      category: tmpl.categorySlug,
      slug: tmpl.slug,
    });
    const matches = tags.filter((tag) => tmplTags.includes(tag)).length;
    return { tmpl, score: matches };
  });

  scored.sort((a, b) => b.score - a.score);

  const matched = scored.map((s) => ({
    title: s.tmpl.title,
    href: `/en/templates/${s.tmpl.categorySlug}/${s.tmpl.slug}`,
    description: s.tmpl.description,
    badge: s.tmpl.categorySlug.toUpperCase(),
    category: s.tmpl.categorySlug,
  }));

  if (matched.length >= limit) {
    return matched.slice(0, limit);
  }

  // 3. Fallback: pad with diverse popular templates from other categories
  const otherTemplates = allFallbackTemplates
    .filter((t) => t.slug !== normSlug && !matched.some((m) => m.href.includes(t.slug)))
    .map((t) => ({
      title: t.title,
      href: `/en/templates/${t.categorySlug}/${t.slug}`,
      description: t.description,
      badge: t.categorySlug.toUpperCase(),
      category: t.categorySlug,
    }));

  const offset = hashSlug(currentSlug, Math.max(1, otherTemplates.length));
  const rotated = [...otherTemplates.slice(offset), ...otherTemplates.slice(0, offset)];

  return [...matched, ...rotated].slice(0, limit);
}

/**
 * Automatically fetch related blog guides for templates and tools.
 */
export function getRelatedGuides(
  categoryOrSlug: string,
  limit: number = 4
): RelatedItem[] {
  const norm = categoryOrSlug.toLowerCase();

  // Match blog posts that mention the category or topic
  const matching = STATIC_BLOG_POSTS.filter(
    (post) =>
      post.category?.toLowerCase().includes(norm) ||
      post.slug.toLowerCase().includes(norm) ||
      post.title.toLowerCase().includes(norm)
  );

  const pool = matching.length >= limit ? matching : STATIC_BLOG_POSTS;
  const offset = hashSlug(categoryOrSlug, Math.max(1, pool.length));
  const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];

  return rotated.slice(0, limit).map((p) => ({
    title: p.title,
    href: `/en/blog/${p.slug}`,
    description: p.description,
    badge: p.category || "Guide",
  }));
}

/**
 * Automatically fetch related tools for templates or articles.
 */
export function getRelatedTools(
  categoryOrSlug: string,
  limit: number = 3
): RelatedItem[] {
  const norm = categoryOrSlug.toLowerCase();

  const matching = ALL_TOOLS.filter(
    (tool) =>
      tool.category.toLowerCase().includes(norm) ||
      tool.slug.toLowerCase().includes(norm) ||
      tool.title.toLowerCase().includes(norm)
  );

  const pool = matching.length >= limit ? matching : ALL_TOOLS;
  const offset = hashSlug(categoryOrSlug, Math.max(1, pool.length));
  const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];

  return rotated.slice(0, limit).map((t) => ({
    title: t.title,
    href: `/en/tools/${t.slug}`,
    description: t.description,
    badge: "Free Tool",
  }));
}

/**
 * Automatically fetch related use cases.
 */
export function getRelatedUseCases(
  categoryOrSlug: string,
  limit: number = 3
): RelatedItem[] {
  const sampleUseCases = [
    { title: "Templates for Freelancers", slug: "freelancers", desc: "Invoices, contracts, and proposals for independent professionals." },
    { title: "Templates for Small Businesses", slug: "small-business", desc: "Streamlined billing, estimates, and administrative forms." },
    { title: "Templates for Agencies & Consultants", slug: "agencies", desc: "Client proposals, retainer agreements, and reports." },
    { title: "Templates for Contractors & Trades", slug: "contractors", desc: "Work orders, bids, and milestone payment invoices." },
  ];

  const offset = hashSlug(categoryOrSlug, sampleUseCases.length);
  const rotated = [...sampleUseCases.slice(offset), ...sampleUseCases.slice(0, offset)];

  return rotated.slice(0, limit).map((u) => ({
    title: u.title,
    href: `/en/use-cases/${u.slug}`,
    description: u.desc,
    badge: "Use Case",
  }));
}
