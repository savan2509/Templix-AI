/**
 * Image alt text generator
 *
 * Auto-generates descriptive, SEO-optimized alt text from template/tool metadata.
 * Alt text is required for every non-decorative image to satisfy:
 *   • WCAG 2.1 SC 1.1.1 (Non-text Content)
 *   • Google's image indexing guidelines (descriptive, unique alt text)
 *   • Core Web Vitals: avoids empty-string alt that screen readers skip
 *
 * Rules:
 *   • Never use generic text ("image", "photo", "template image")
 *   • Include the document type and category in template alt text
 *   • Include "free" and "download" as natural keywords
 *   • Keep under 125 characters
 *
 * Usage:
 *   import { generateImageAlt } from "@/lib/image-alt";
 *   <Image alt={generateImageAlt({ slug, title, category })} ... />
 */

export interface ImageAltInput {
  /** Template or tool slug, e.g. "invoice-freelancer" */
  slug: string;
  /** Human-readable title, e.g. "Freelancer Invoice Template" */
  title: string;
  /** Category name, e.g. "Invoices", "Resumes", "Contracts" */
  category?: string;
  /** Optional: more specific context */
  context?: string;
}

/**
 * Generates a descriptive alt text string for a template preview image.
 * Keeps it under 125 characters and naturally includes primary keywords.
 */
export function generateImageAlt(input: ImageAltInput): string {
  const { title, category, context } = input;

  // Strip trailing "Template" from title if present (will re-add below)
  const baseName = title.replace(/\s+Template$/i, "").trim();

  const parts: string[] = [];

  if (context) {
    parts.push(context);
  } else if (category) {
    parts.push(
      `Free ${baseName} template preview — professional ${category.toLowerCase()} document ready to download`
    );
  } else {
    parts.push(`Free ${baseName} template — editable PDF and Word download`);
  }

  const alt = parts.join(", ");
  // Enforce 125-char WCAG guideline (truncate at word boundary)
  if (alt.length <= 125) return alt;
  return alt.slice(0, 122).replace(/\s\S*$/, "") + "...";
}

/**
 * Generates alt text for category cover images shown on listing pages.
 */
export function generateCategoryAlt(categoryName: string): string {
  return `Free ${categoryName.toLowerCase()} templates — professional document layouts for download`;
}

/**
 * Generates alt text for blog post cover images.
 */
export function generateBlogAlt(title: string): string {
  const base = title.length > 100 ? title.slice(0, 97) + "..." : title;
  return `${base} — Templix AI guide`;
}

/**
 * Generates alt text for tool screenshots/illustrations.
 */
export function generateToolAlt(toolName: string): string {
  return `${toolName} — free online tool from Templix AI`;
}

/**
 * Generates alt for the site logo in navbar / footer.
 */
export function logoAlt(mode: "light" | "dark" = "light"): string {
  return mode === "dark"
    ? "Templix AI — Free Professional Document Editor Logo (Dark Mode)"
    : "Templix AI — Free Professional Document Editor Logo";
}
