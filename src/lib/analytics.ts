// GA4 custom events. Thin wrappers over @next/third-parties' sendGAEvent so the
// call sites stay readable and the event names live in one place. All are no-ops
// in the browser when GA isn't loaded (no NEXT_PUBLIC_GA_ID), so they're always
// safe to call. Import and use from client components only.
import { sendGAEvent } from "@next/third-parties/google";

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
