"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";

// Dialling codes offered next to the phone field. Kept short on purpose — a
// full ISO list turns a 4-field form into a scroll hunt.
const DIAL_CODES = [
  "+91", "+1", "+44", "+61", "+971", "+49", "+33", "+34",
  "+31", "+65", "+81", "+86", "+55", "+27", "+234",
];

/**
 * Fixed "Get in Touch" tab on the right edge of blog article pages. Opens a
 * modal contact form that posts to the same /api/contact endpoint as the
 * contact page, so submissions land in the team inbox with Reply-To set to the
 * visitor. `articleTitle` rides along in the subject so the inbox shows which
 * article prompted the enquiry.
 */
export default function BlogGetInTouch({ articleTitle }: { articleTitle: string }) {
  const locale = usePathname().split("/")[1] || "en";
  const t = getDictionary(locale).blog.getInTouch;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dialCode, setDialCode] = useState(DIAL_CODES[0]);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openerRef = useRef<HTMLButtonElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Return focus to the tab, otherwise a keyboard user is dumped at <body>.
  const close = useCallback(() => {
    setOpen(false);
    openerRef.current?.focus();
  }, []);

  // Let other blog widgets (e.g. the timed "WAIT!" popup) open this form by
  // dispatching a window event, so there is only one contact form to maintain.
  useEffect(() => {
    const openForm = () => setOpen(true);
    window.addEventListener("templix:blog-open-contact", openForm);
    return () => window.removeEventListener("templix:blog-open-contact", openForm);
  }, []);

  // While the dialog is up: lock background scroll and let Escape dismiss it.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone.trim() ? `${dialCode} ${phone.trim()}` : "",
          // /api/contact caps the subject at 200 chars — long titles must not
          // turn a valid enquiry into a "too long" rejection.
          subject: `Blog enquiry: ${articleTitle}`.slice(0, 180),
          message,
          website,
        }),
      });
      const payload = await res.json();
      if (!res.ok || !payload.ok) {
        setError(payload.error || t.genericError);
        return;
      }
      setSent(true);
      setName(""); setEmail(""); setPhone(""); setMessage("");
    } catch {
      setError(t.networkError);
    } finally {
      setSending(false);
    }
  };

  // Visual style only — width is set per field, because the phone row puts a
  // fixed-width select next to a flexible input and a blanket `w-full` would
  // shove the input out of the dialog.
  const field =
    "rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition";

  return (
    <>
      {/* Side tab. Sits below the sticky navbar's z-50 so it can never cover it. */}
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2 rounded-l-lg bg-blue-600 px-2.5 py-6 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 [writing-mode:vertical-rl]"
      >
        {t.tab}
      </button>

      {open && (
        // z-[60] clears the navbar (z-50) so the overlay covers the whole page.
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-git-title"
            className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-200 bg-blue-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-800/60">
              <h2 id="blog-git-title" className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {t.title}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label={t.close}
                className="rounded-full p-1 text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-zinc-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5">
              {sent ? (
                <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="font-bold text-emerald-800 dark:text-emerald-300">{t.successTitle}</p>
                    <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">{t.successText}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.intro}</p>

                  {error && (
                    <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <input
                    ref={firstFieldRef}
                    type="text" required minLength={2} maxLength={100} autoComplete="name"
                    aria-label={t.name} placeholder={t.name}
                    value={name} onChange={(e) => setName(e.target.value)}
                    className={`${field} w-full`}
                  />

                  <input
                    type="email" required autoComplete="email"
                    aria-label={t.email} placeholder={t.email}
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className={`${field} w-full`}
                  />

                  <div className="flex gap-2">
                    <select
                      aria-label="Country dialling code"
                      value={dialCode} onChange={(e) => setDialCode(e.target.value)}
                      className={`${field} w-24 shrink-0`}
                    >
                      {DIAL_CODES.map((code) => (
                        <option key={code} value={code}>{code}</option>
                      ))}
                    </select>
                    {/* min-w-0 lets the input shrink inside the flex row instead
                        of forcing the dialog to scroll sideways. */}
                    <input
                      type="tel" inputMode="tel" maxLength={20} autoComplete="tel"
                      aria-label={t.phone} placeholder={t.phone}
                      value={phone} onChange={(e) => setPhone(e.target.value)}
                      className={`${field} min-w-0 flex-1`}
                    />
                  </div>

                  <textarea
                    required minLength={10} maxLength={5000} rows={4}
                    aria-label={t.message} placeholder={t.message}
                    value={message} onChange={(e) => setMessage(e.target.value)}
                    className={`${field} w-full resize-y`}
                  />

                  {/* Honeypot — hidden from people, irresistible to bots */}
                  <input
                    type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
                    value={website} onChange={(e) => setWebsite(e.target.value)}
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />

                  <button
                    type="submit" disabled={sending}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending && <Loader2 className="h-4 w-4 animate-spin" />}
                    {sending ? t.sending : t.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
