"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// Contact form → /api/contact → the team inbox (Reply-To is set to the sender,
// so replying from the inbox answers the visitor directly).
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, website }),
      });
      const payload = await res.json();
      if (!res.ok || !payload.ok) {
        setError(payload.error || "Something went wrong. Please try again.");
        return;
      }
      setSent(true);
      setName(""); setEmail(""); setSubject(""); setMessage("");
    } catch {
      setError("Network error. Please try again, or email us directly.");
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition";
  const label =
    "block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5";

  if (sent) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/30">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <div>
          <p className="font-bold text-emerald-800 dark:text-emerald-300">Message sent!</p>
          <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
            Thanks for reaching out — we&apos;ll reply to your email address shortly.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-3 text-sm font-semibold text-emerald-700 underline dark:text-emerald-400"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={label}>Your name</label>
          <input
            id="contact-name" type="text" required minLength={2} autoComplete="name"
            value={name} onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith" className={field}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={label}>Email address</label>
          <input
            id="contact-email" type="email" required autoComplete="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com" className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={label}>
          Subject <span className="font-normal normal-case text-zinc-400">(optional)</span>
        </label>
        <input
          id="contact-subject" type="text" maxLength={200}
          value={subject} onChange={(e) => setSubject(e.target.value)}
          placeholder="How can we help?" className={field}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={label}>Message</label>
        <textarea
          id="contact-message" required minLength={10} maxLength={5000} rows={6}
          value={message} onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you need — questions, feedback, partnerships…"
          className={`${field} resize-y`}
        />
      </div>

      {/* Honeypot — hidden from people, irresistible to bots */}
      <input
        type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={website} onChange={(e) => setWebsite(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit" disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
