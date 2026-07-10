"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { X, ArrowRight } from "lucide-react";

// Show once the reader has spent this long actively on the article. "Active"
// means the tab is visible — time spent on a backgrounded tab does not count,
// so a parked tab never triggers it. The timer re-arms on every article view
// (initial load or client-side navigation), so each article that is read for
// the full duration surfaces the popup — it is not suppressed for the session.
const THRESHOLD_MS = 30_000;

/**
 * Timed "WAIT!" engagement popup for blog article pages. Desktop only — the
 * timer never arms on viewports below `md`, and the panel itself is `hidden`
 * below `md` as a second line of defence. Its CTA opens the existing Get in
 * Touch form (via a window event) rather than duplicating the contact form.
 */
export default function BlogReadPopup() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const t = getDictionary(locale).blog.readPopup;

  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  // Where focus was before the popup grabbed it, so we can hand it back.
  const restoreFocusRef = useRef<Element | null>(null);

  // ── Arm the reading timer — re-arms on every article (keyed on pathname) ────
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Desktop only. matchMedia keeps this in sync with the CSS `md` breakpoint.
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    // Dev/QA-only seam: `?readPopupMs=1500` shortens the delay so the popup can
    // be exercised without a 30s wait. Ignored entirely in production builds.
    let threshold = THRESHOLD_MS;
    if (process.env.NODE_ENV !== "production") {
      const override = Number(new URLSearchParams(window.location.search).get("readPopupMs"));
      if (Number.isFinite(override) && override > 0) threshold = override;
    }

    // Count active reading time for this article.
    let elapsed = 0;
    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      elapsed += 1000;
      if (elapsed >= threshold) {
        window.clearInterval(id);
        restoreFocusRef.current = document.activeElement;
        setOpen(true);
      }
    }, 1000);

    return () => window.clearInterval(id);
  }, [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    (restoreFocusRef.current as HTMLElement | null)?.focus?.();
  }, []);

  // Hand off to the Get in Touch form, then dismiss.
  const shareIdea = useCallback(() => {
    setOpen(false);
    window.dispatchEvent(new Event("templix:blog-open-contact"));
  }, []);

  // While open: lock background scroll, focus the dialog, allow Escape to close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    // `hidden md:flex` guarantees it never paints on mobile even if state opens.
    // z-[70] clears the Get in Touch modal (z-[60]) and the navbar (z-50).
    <div className="fixed inset-0 z-[70] hidden md:flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-read-popup-title"
        tabIndex={-1}
        className="relative w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white px-8 py-12 text-center shadow-2xl outline-none dark:border-zinc-800 dark:bg-zinc-900 sm:px-12"
      >
        <button
          type="button"
          onClick={close}
          aria-label={t.close}
          className="absolute right-4 top-4 rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-5xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          {t.wait}
        </p>

        <h2
          id="blog-read-popup-title"
          className="mt-5 text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-2xl"
        >
          {t.title}
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base">
          {t.text}
        </p>

        <button
          type="button"
          onClick={shareIdea}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          {t.cta}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
