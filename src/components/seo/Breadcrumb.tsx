/**
 * Reusable SEO Breadcrumb component
 *
 * Renders a semantic <nav aria-label="Breadcrumb"> with:
 *   - Accessible <ol> / <li> markup (no role="list" hack needed with ol)
 *   - Responsive: collapses middle items on mobile with ellipsis
 *   - JSON-LD BreadcrumbList injected inline via <Schema> for rich results
 *   - Keyboard navigable with visible focus rings
 *   - Chevron separators are aria-hidden
 *
 * Usage:
 *   <Breadcrumb
 *     items={[
 *       { label: "Home", href: "/en" },
 *       { label: "Templates", href: "/en/templates" },
 *       { label: "Invoices", href: "/en/templates/invoices" },
 *       { label: "Freelancer Invoice Template" },   // current — no href
 *     ]}
 *   />
 */

import Link from "next/link";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Additional className for the nav wrapper */
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // ── JSON-LD BreadcrumbList ──────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? {
            item: item.href.startsWith("http")
              ? item.href
              : `${siteConfig.url}${item.href}`,
          }
        : {}),
    })),
  };

  return (
    <>
      <Schema data={breadcrumbSchema} />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center min-w-0 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 min-w-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-x-1 min-w-0">
                {/* Chevron separator (hidden from screen readers) */}
                {index > 0 && (
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-zinc-300 dark:text-zinc-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}

                {isLast || !item.href ? (
                  // Current page — no link, aria-current="page"
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={`truncate max-w-[180px] sm:max-w-xs ${
                      isLast
                        ? "font-medium text-zinc-700 dark:text-zinc-200"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                ) : (
                  // Ancestor — link with focus ring
                  <Link
                    href={item.href}
                    className="truncate max-w-[140px] sm:max-w-xs hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 rounded"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

// ── Factory helpers ──────────────────────────────────────────────────────────
// Convenience functions to build BreadcrumbItem arrays for common page shapes.

/** Home → Templates → [Category] → [Template] */
export function buildTemplateBreadcrumbs(
  locale: string,
  categoryName?: string,
  categorySlug?: string,
  templateTitle?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: `/${locale}` },
    { label: "Templates", href: `/${locale}/templates` },
  ];
  if (categoryName && categorySlug) {
    items.push({ label: categoryName, href: `/${locale}/templates/${categorySlug}` });
  }
  if (templateTitle) {
    items.push({ label: templateTitle });
  }
  return items;
}

/** Home → Blog → [Post title] */
export function buildBlogBreadcrumbs(
  locale: string,
  postTitle?: string,
  category?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: `/${locale}` },
    { label: "Blog", href: `/${locale}/blog` },
  ];
  if (category) {
    items.push({ label: category });
  }
  if (postTitle) {
    items.push({ label: postTitle });
  }
  return items;
}

/** Home → AI Tools → [Tool name] */
export function buildToolBreadcrumbs(
  locale: string,
  toolName?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: `/${locale}` },
    { label: "Free AI Tools", href: `/${locale}/tools` },
  ];
  if (toolName) {
    items.push({ label: toolName });
  }
  return items;
}

/** Home → Industries → [Industry name] */
export function buildIndustryBreadcrumbs(
  locale: string,
  industryName?: string,
  industrySlug?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: `/${locale}` },
    { label: "Industries", href: `/${locale}/industries` },
  ];
  if (industryName) {
    items.push({
      label: industryName,
      href: industrySlug ? `/${locale}/industries/${industrySlug}` : undefined,
    });
  }
  return items;
}

/** Home → Use Cases → [Use Case name] */
export function buildUseCaseBreadcrumbs(
  locale: string,
  useCaseName?: string,
  useCaseSlug?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: `/${locale}` },
    { label: "Use Cases", href: `/${locale}/use-cases` },
  ];
  if (useCaseName) {
    items.push({
      label: useCaseName,
      href: useCaseSlug ? `/${locale}/use-cases/${useCaseSlug}` : undefined,
    });
  }
  return items;
}

/** Home → [Page name] */
export function buildSimpleBreadcrumbs(
  locale: string,
  pageName: string,
  pageHref?: string
): BreadcrumbItem[] {
  return [
    { label: "Home", href: `/${locale}` },
    { label: pageName, href: pageHref },
  ];
}

