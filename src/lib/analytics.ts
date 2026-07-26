// GA4 custom events. Thin wrappers over @next/third-parties' sendGAEvent so the
// call sites stay readable and the event names live in one place. All are no-ops
// in the browser when GA isn't loaded (no NEXT_PUBLIC_GA_ID), so they're always
// safe to call. Import and use from client components only.
import { sendGAEvent } from "@next/third-parties/google";

// ── Existing events (template editor flow) ────────────────────────────────────

/** A template was opened in the editor. */
export function trackTemplateOpened(templateSlug: string) {
  sendGAEvent("event", "template_opened", { template: templateSlug });
}

/** The user edited the document for the first time (real engagement signal). */
export function trackTemplateCustomized(templateSlug: string) {
  sendGAEvent("event", "template_customized", { template: templateSlug });
}

/** A PDF export completed — the primary conversion. */
export function trackPdfExported(templateSlug: string) {
  sendGAEvent("event", "pdf_exported", { template: templateSlug });
}

/** A Word (DOCX) export completed — the primary conversion. */
export function trackDocxExported(templateSlug: string) {
  sendGAEvent("event", "docx_exported", { template: templateSlug });
}

// ── New events (SEO / engagement tracking) ────────────────────────────────────

/** Helper to also push to GTM data layer if present */
function pushDataLayer(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push({ event: eventName, ...params });
  }
}

/**
 * Track when a user downloads/exports a template (wrapper for PDF/DOCX exports).
 */
export function trackTemplateDownload(slug: string, format: "pdf" | "docx" | "word") {
  sendGAEvent("event", "template_download", {
    template_slug: slug,
    export_format: format,
    event_category: "template",
  });
  pushDataLayer("template_download", { template_slug: slug, export_format: format });
}

/** Track when a user views a template detail page. */
export function trackTemplateView(slug: string, categorySlug: string) {
  sendGAEvent("event", "template_view", {
    template_slug: slug,
    template_category: categorySlug,
    event_category: "template",
  });
}

/** Track when a user actively uses a free tool (submits/runs). */
export function trackToolUsage(slug: string, action: string = "run") {
  sendGAEvent("event", "tool_usage", {
    tool_slug: slug,
    tool_action: action,
    event_category: "tools",
  });
  pushDataLayer("tool_usage", { tool_slug: slug, tool_action: action });
}

/** Track outbound link clicks. */
export function trackOutboundClick(url: string, label?: string) {
  sendGAEvent("event", "outbound_click", {
    link_url: url,
    link_label: label ?? url,
    event_category: "navigation",
  });
}

/** Track template hub search queries. */
export function trackSearch(query: string, resultsCount?: number) {
  sendGAEvent("event", "search", {
    search_term: query,
    results_count: resultsCount,
    event_category: "search",
  });
}

/** Track blog article scroll depth milestones (25/50/75/100%). */
export function trackScrollDepth(slug: string, depth: 25 | 50 | 75 | 100) {
  sendGAEvent("event", "blog_scroll_depth", {
    blog_slug: slug,
    scroll_depth: depth,
    event_category: "engagement",
  });
}

/** Track social share actions. */
export function trackShare(slug: string, method: "copy" | "twitter" | "linkedin" | "email") {
  sendGAEvent("event", "share", {
    content_type: "template",
    item_id: slug,
    method,
  });
}

/** Track CTA clicks ("Get Started", "Sign Up", etc.). */
export function trackCTAClick(ctaId: string, page: string) {
  sendGAEvent("event", "cta_click", {
    cta_id: ctaId,
    page_path: page,
    event_category: "conversion",
  });
  pushDataLayer("cta_click", { cta_id: ctaId, page_path: page });
}

