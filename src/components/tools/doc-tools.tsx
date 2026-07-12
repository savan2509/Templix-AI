"use client";

// Client-side document generators. Each tool is a form whose values are
// assembled into a formatted document, previewed live, and downloadable as
// PDF (pdf-lib) or Word .docx (docx) — plus copy-to-clipboard. Everything runs
// in the browser: no upload, no API keys, no backend.
import { useMemo, useState } from "react";
import { Copy, Check, Loader2, Plus, Trash2, FileDown, FileType2, Info } from "lucide-react";

// ── shared styles ────────────────────────────────────────────────────────────
const card = "rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-6 shadow-sm";
const inputCls = "w-full h-11 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";
const areaCls = "w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 p-4 text-zinc-900 dark:text-zinc-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y";
const labelCls = "block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5";
const btnPrimary = "inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 disabled:opacity-50 transition-colors";
const btnGhost = "inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50 transition-colors";

// ── output helpers ───────────────────────────────────────────────────────────
function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

// Standard-14 PDF fonts only encode WinAnsi — normalize smart punctuation and
// drop anything outside Latin-1 so drawText never throws on pasted text.
function toWinAnsi(s: string): string {
  return s
    .replace(/[‘’‚]/g, "'").replace(/[“”„]/g, '"')
    .replace(/[–—]/g, "-").replace(/…/g, "...").replace(/ /g, " ")
    .replace(/[^\x20-\x7E\xA0-\xFF\n]/g, "");
}

async function textToPdf(title: string, body: string): Promise<Uint8Array> {
  const { PDFDocument, StandardFonts } = await import("pdf-lib");
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const [W, H] = [595.28, 841.89]; // A4
  const margin = 56, maxW = W - margin * 2, lh = 16;
  let page = doc.addPage([W, H]);
  let y = H - margin;
  const newPage = () => { page = doc.addPage([W, H]); y = H - margin; };
  const write = (text: string, f = font, size = 11) => {
    if (text.trim() === "") { y -= lh; if (y < margin) newPage(); return; }
    let line = "";
    const flush = () => {
      if (y < margin) newPage();
      page.drawText(line, { x: margin, y, size, font: f });
      y -= f === bold && size > 12 ? lh + 4 : lh;
      line = "";
    };
    for (const word of toWinAnsi(text).split(/\s+/)) {
      const test = line ? `${line} ${word}` : word;
      if (f.widthOfTextAtSize(test, size) > maxW) { if (line) flush(); line = word; }
      else line = test;
    }
    if (line) flush();
  };
  write(title, bold, 17);
  y -= 6;
  for (const para of body.split("\n")) write(para);
  return doc.save();
}

async function textToDocx(title: string, body: string): Promise<Blob> {
  const { Document, Packer, Paragraph, TextRun, HeadingLevel } = await import("docx");
  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({ text: title, heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "" }),
        ...body.split("\n").map((line) => new Paragraph({ children: [new TextRun(line)] })),
      ],
    }],
  });
  return Packer.toBlob(doc);
}

// ── build helpers ────────────────────────────────────────────────────────────
const g = (s: string | undefined, ph: string) => (s && s.trim() ? s.trim() : `[${ph}]`);
const bullets = (s: string | undefined, empty: string) => {
  const items = (s || "").split("\n").map((x) => x.trim()).filter(Boolean);
  return items.length ? items.map((i) => `• ${i}`).join("\n") : `[${empty}]`;
};

// ── config-driven generator UI ───────────────────────────────────────────────
type Field = { name: string; label: string; type?: "text" | "textarea" | "date"; placeholder?: string; full?: boolean; rows?: number };
type GenConfig = {
  fields: Field[];
  build: (v: Record<string, string>) => { title: string; body: string; filename: string };
  disclaimer?: string;
};

function DocGenerator({ config }: { config: GenConfig }) {
  const [v, setV] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState<"" | "pdf" | "word">("");
  const doc = useMemo(() => config.build(v), [v, config]);
  const set = (name: string, val: string) => setV((p) => ({ ...p, [name]: val }));

  const copy = async () => {
    try { await navigator.clipboard.writeText(`${doc.title}\n\n${doc.body}`); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* clipboard unavailable */ }
  };
  const pdf = async () => { setBusy("pdf"); try { downloadBlob(new Blob([new Uint8Array(await textToPdf(doc.title, doc.body))], { type: "application/pdf" }), `${doc.filename}.pdf`); } finally { setBusy(""); } };
  const word = async () => { setBusy("word"); try { downloadBlob(await textToDocx(doc.title, doc.body), `${doc.filename}.docx`); } finally { setBusy(""); } };

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className={card}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {config.fields.map((f) => (
            <div key={f.name} className={f.full || f.type === "textarea" ? "sm:col-span-2" : ""}>
              <label className={labelCls} htmlFor={`f-${f.name}`}>{f.label}</label>
              {f.type === "textarea" ? (
                <textarea id={`f-${f.name}`} rows={f.rows || 3} className={areaCls} placeholder={f.placeholder} value={v[f.name] || ""} onChange={(e) => set(f.name, e.target.value)} />
              ) : (
                <input id={`f-${f.name}`} type={f.type === "date" ? "date" : "text"} className={inputCls} placeholder={f.placeholder} value={v[f.name] || ""} onChange={(e) => set(f.name, e.target.value)} />
              )}
            </div>
          ))}
        </div>
        {config.disclaimer && (
          <p className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-400">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {config.disclaimer}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <div className={`${card} min-h-[300px]`}>
          <h2 className="mb-3 text-base font-bold text-zinc-900 dark:text-zinc-50">{doc.title}</h2>
          <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{doc.body}</pre>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={copy} className={btnGhost}>{copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}{copied ? "Copied" : "Copy text"}</button>
          <button onClick={pdf} disabled={!!busy} className={btnPrimary}>{busy === "pdf" ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}Download PDF</button>
          <button onClick={word} disabled={!!busy} className={btnGhost}>{busy === "word" ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileType2 className="h-4 w-4" />}Download Word</button>
        </div>
      </div>
    </div>
  );
}

const LEGAL_NOTE = "This is a general template, not legal advice. Review it with a qualified attorney before signing or publishing.";

// ── Proposal Builder ─────────────────────────────────────────────────────────
const PROPOSAL: GenConfig = {
  fields: [
    { name: "company", label: "Your name / company", placeholder: "Acme Studio" },
    { name: "client", label: "Client name", placeholder: "Globex Inc." },
    { name: "title", label: "Project title", full: true, placeholder: "Website redesign" },
    { name: "date", label: "Date", type: "date" },
    { name: "validUntil", label: "Valid until", type: "date" },
    { name: "overview", label: "Overview", type: "textarea", rows: 3, placeholder: "Briefly describe the project and goals…" },
    { name: "deliverables", label: "Deliverables (one per line)", type: "textarea", rows: 4, placeholder: "Homepage design\nCMS integration\nTwo rounds of revisions" },
    { name: "timeline", label: "Timeline", full: true, placeholder: "4 weeks from kickoff" },
    { name: "investment", label: "Investment / price", full: true, placeholder: "$4,500 (50% deposit, 50% on delivery)" },
  ],
  build: (v) => ({
    title: "Business Proposal",
    filename: "proposal",
    body:
`Prepared for: ${g(v.client, "Client name")}
Prepared by: ${g(v.company, "Your name / company")}
Date: ${g(v.date, "Date")}

PROJECT
${g(v.title, "Project title")}

OVERVIEW
${g(v.overview, "Describe the project and its goals")}

SCOPE & DELIVERABLES
${bullets(v.deliverables, "List your deliverables, one per line")}

TIMELINE
${g(v.timeline, "Estimated timeline")}

INVESTMENT
${g(v.investment, "Total price and payment terms")}

This proposal is valid until ${g(v.validUntil, "date")}. We look forward to working together.

${g(v.company, "Your name / company")}`,
  }),
};

// ── Scope of Work Generator ──────────────────────────────────────────────────
const SCOPE: GenConfig = {
  fields: [
    { name: "project", label: "Project name", placeholder: "Mobile app v2" },
    { name: "client", label: "Client", placeholder: "Globex Inc." },
    { name: "objectives", label: "Objectives", type: "textarea", rows: 3, placeholder: "What this project should achieve…" },
    { name: "inScope", label: "In scope (one per line)", type: "textarea", rows: 4, placeholder: "iOS & Android build\nPush notifications" },
    { name: "outScope", label: "Out of scope (one per line)", type: "textarea", rows: 3, placeholder: "Backend rewrite\nMarketing site" },
    { name: "deliverables", label: "Deliverables (one per line)", type: "textarea", rows: 3, placeholder: "Signed-off designs\nProduction release" },
    { name: "timeline", label: "Timeline", full: true, placeholder: "8 weeks" },
    { name: "acceptance", label: "Acceptance criteria", type: "textarea", rows: 2, placeholder: "How completion is measured and approved" },
  ],
  build: (v) => ({
    title: "Scope of Work",
    filename: "scope-of-work",
    body:
`Project: ${g(v.project, "Project name")}
Client: ${g(v.client, "Client")}

1. OBJECTIVES
${g(v.objectives, "Describe the objectives")}

2. IN SCOPE
${bullets(v.inScope, "List what is included, one per line")}

3. OUT OF SCOPE
${bullets(v.outScope, "List what is excluded, one per line")}

4. DELIVERABLES
${bullets(v.deliverables, "List the deliverables, one per line")}

5. TIMELINE
${g(v.timeline, "Estimated timeline")}

6. ACCEPTANCE CRITERIA
${g(v.acceptance, "Describe how completion is approved")}`,
  }),
};

// ── Pricing Calculator (line items) ──────────────────────────────────────────
function num(s: string) { const n = parseFloat(String(s).replace(/[^0-9.\-]/g, "")); return isNaN(n) ? 0 : n; }
type LineItem = { desc: string; qty: string; rate: string };
export function PricingCalculator() {
  const [items, setItems] = useState<LineItem[]>([{ desc: "", qty: "1", rate: "" }]);
  const [cur, setCur] = useState("$");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const subtotal = items.reduce((a, i) => a + num(i.qty) * num(i.rate), 0);
  const discountAmt = (subtotal * num(discount)) / 100;
  const afterDiscount = subtotal - discountAmt;
  const taxAmt = (afterDiscount * num(tax)) / 100;
  const total = afterDiscount + taxAmt;
  const money = (n: number) => `${cur}${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const upd = (i: number, k: keyof LineItem, val: string) => setItems((p) => p.map((it, idx) => (idx === i ? { ...it, [k]: val } : it)));

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className={card}>
        <div className="mb-3 flex items-center justify-between">
          <label className={labelCls + " mb-0"}>Line items</label>
          <select className="h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 px-2 text-sm" value={cur} onChange={(e) => setCur(e.target.value)}>
            {["$", "₹", "€", "£", "¥"].map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          {items.map((it, i) => (
            <div key={i} className="grid grid-cols-[1fr_54px_78px_auto] gap-2">
              <input className={inputCls} placeholder="Description" value={it.desc} onChange={(e) => upd(i, "desc", e.target.value)} />
              <input className={inputCls + " px-2 text-center"} inputMode="decimal" placeholder="Qty" value={it.qty} onChange={(e) => upd(i, "qty", e.target.value)} />
              <input className={inputCls + " px-2"} inputMode="decimal" placeholder="Rate" value={it.rate} onChange={(e) => upd(i, "rate", e.target.value)} />
              <button onClick={() => setItems((p) => p.filter((_, k) => k !== i))} disabled={items.length === 1} className="grid place-items-center w-9 rounded-xl text-zinc-400 hover:text-red-500 disabled:opacity-30" aria-label="Remove line"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
        <button onClick={() => setItems((p) => [...p, { desc: "", qty: "1", rate: "" }])} className={btnGhost + " mt-3"}><Plus className="h-4 w-4" /> Add line</button>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div><label className={labelCls}>Discount %</label><input className={inputCls} inputMode="decimal" placeholder="0" value={discount} onChange={(e) => setDiscount(e.target.value)} /></div>
          <div><label className={labelCls}>Tax %</label><input className={inputCls} inputMode="decimal" placeholder="0" value={tax} onChange={(e) => setTax(e.target.value)} /></div>
        </div>
      </div>
      <div className={card}>
        <h2 className="mb-4 text-base font-bold text-zinc-900 dark:text-zinc-50">Quote summary</h2>
        <dl className="space-y-2.5 text-sm">
          <div className="flex justify-between"><dt className="text-zinc-500 dark:text-zinc-400">Subtotal</dt><dd className="font-semibold tabular-nums">{money(subtotal)}</dd></div>
          {num(discount) > 0 && <div className="flex justify-between"><dt className="text-zinc-500 dark:text-zinc-400">Discount ({num(discount)}%)</dt><dd className="font-semibold tabular-nums text-emerald-600 dark:text-emerald-400">−{money(discountAmt)}</dd></div>}
          {num(tax) > 0 && <div className="flex justify-between"><dt className="text-zinc-500 dark:text-zinc-400">Tax ({num(tax)}%)</dt><dd className="font-semibold tabular-nums">{money(taxAmt)}</dd></div>}
          <div className="flex justify-between border-t border-zinc-200 dark:border-zinc-800 pt-3 text-lg"><dt className="font-bold">Total</dt><dd className="font-black tabular-nums text-blue-600 dark:text-blue-400">{money(total)}</dd></div>
        </dl>
      </div>
    </div>
  );
}

// ── Contract (service agreement) ─────────────────────────────────────────────
const CONTRACT: GenConfig = {
  disclaimer: LEGAL_NOTE,
  fields: [
    { name: "provider", label: "Service provider", placeholder: "Acme Studio" },
    { name: "client", label: "Client", placeholder: "Globex Inc." },
    { name: "service", label: "Services provided", type: "textarea", rows: 3, placeholder: "Describe the work to be performed…" },
    { name: "start", label: "Start date", type: "date" },
    { name: "term", label: "Term / end", placeholder: "6 months, renewable" },
    { name: "payment", label: "Payment terms", full: true, placeholder: "$3,000/month, net 15" },
    { name: "law", label: "Governing law", full: true, placeholder: "State of California, USA" },
  ],
  build: (v) => ({
    title: "Service Agreement",
    filename: "service-agreement",
    body:
`This Service Agreement ("Agreement") is entered into as of ${g(v.start, "start date")} between ${g(v.provider, "Service provider")} ("Provider") and ${g(v.client, "Client")} ("Client").

1. SERVICES
The Provider agrees to perform the following services:
${g(v.service, "Describe the services")}

2. TERM
This Agreement begins on ${g(v.start, "start date")} and continues for ${g(v.term, "term")} unless terminated earlier as provided herein.

3. PAYMENT
The Client agrees to pay the Provider as follows: ${g(v.payment, "payment terms")}.

4. CONFIDENTIALITY
Each party shall keep confidential all non-public information received from the other party and use it only to perform this Agreement.

5. TERMINATION
Either party may terminate this Agreement with 30 days' written notice. The Client shall pay for all services rendered up to the termination date.

6. GOVERNING LAW
This Agreement shall be governed by the laws of ${g(v.law, "governing law")}.

7. SIGNATURES
Provider: _______________________  Date: ____________
Client:   _______________________  Date: ____________`,
  }),
};

// ── NDA Generator ────────────────────────────────────────────────────────────
const NDA: GenConfig = {
  disclaimer: LEGAL_NOTE,
  fields: [
    { name: "disclosing", label: "Disclosing party", placeholder: "Acme Studio" },
    { name: "receiving", label: "Receiving party", placeholder: "Jane Contractor" },
    { name: "date", label: "Effective date", type: "date" },
    { name: "term", label: "Term (years)", placeholder: "3" },
    { name: "purpose", label: "Purpose of disclosure", type: "textarea", rows: 2, placeholder: "Evaluating a potential business relationship" },
    { name: "law", label: "Governing law", full: true, placeholder: "State of California, USA" },
  ],
  build: (v) => ({
    title: "Non-Disclosure Agreement",
    filename: "nda",
    body:
`This Non-Disclosure Agreement ("Agreement") is made effective ${g(v.date, "effective date")} between ${g(v.disclosing, "Disclosing party")} ("Disclosing Party") and ${g(v.receiving, "Receiving party")} ("Receiving Party").

1. PURPOSE
The parties wish to explore ${g(v.purpose, "the purpose of disclosure")}, for which the Disclosing Party may share confidential information.

2. CONFIDENTIAL INFORMATION
"Confidential Information" means any non-public information disclosed by the Disclosing Party, whether written, oral, or electronic, that is marked or would reasonably be understood to be confidential.

3. OBLIGATIONS
The Receiving Party shall: (a) hold the Confidential Information in strict confidence; (b) not disclose it to any third party; and (c) use it solely for the Purpose above.

4. EXCLUSIONS
This Agreement does not apply to information that is publicly available, already known to the Receiving Party, or independently developed without use of the Confidential Information.

5. TERM
The obligations herein remain in effect for ${g(v.term, "number")} year(s) from the effective date.

6. GOVERNING LAW
This Agreement shall be governed by the laws of ${g(v.law, "governing law")}.

Disclosing Party: _______________________  Date: ____________
Receiving Party:  _______________________  Date: ____________`,
  }),
};

// ── Terms & Conditions Generator ─────────────────────────────────────────────
const TERMS: GenConfig = {
  disclaimer: LEGAL_NOTE,
  fields: [
    { name: "company", label: "Company name", placeholder: "Acme Studio LLC" },
    { name: "website", label: "Website URL", placeholder: "https://acme.example" },
    { name: "date", label: "Effective date", type: "date" },
    { name: "law", label: "Governing jurisdiction", placeholder: "California, USA" },
    { name: "email", label: "Contact email", full: true, placeholder: "support@acme.example" },
  ],
  build: (v) => ({
    title: "Terms & Conditions",
    filename: "terms-and-conditions",
    body:
`Effective date: ${g(v.date, "effective date")}

Welcome to ${g(v.website, "your website")}, operated by ${g(v.company, "Company name")} ("we", "us"). By accessing or using our website and services, you agree to these Terms & Conditions.

1. USE OF THE SERVICE
You agree to use the service lawfully and not to misuse, disrupt, or attempt to gain unauthorized access to it or its related systems.

2. INTELLECTUAL PROPERTY
All content, trademarks, and materials on the service are owned by ${g(v.company, "Company name")} or its licensors and may not be reused without permission.

3. USER RESPONSIBILITIES
You are responsible for any information you submit and for maintaining the confidentiality of your account credentials.

4. DISCLAIMER OF WARRANTIES
The service is provided "as is" without warranties of any kind, to the fullest extent permitted by law.

5. LIMITATION OF LIABILITY
${g(v.company, "Company name")} shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.

6. CHANGES
We may update these Terms at any time. Continued use of the service after changes constitutes acceptance of the revised Terms.

7. GOVERNING LAW
These Terms are governed by the laws of ${g(v.law, "jurisdiction")}.

8. CONTACT
Questions about these Terms? Contact us at ${g(v.email, "contact email")}.`,
  }),
};

// ── Letter Generator (general business letter) ───────────────────────────────
const LETTER: GenConfig = {
  fields: [
    { name: "sender", label: "Your name", placeholder: "Jane Smith" },
    { name: "senderInfo", label: "Your address / contact", placeholder: "123 Main St · jane@example.com" },
    { name: "date", label: "Date", type: "date" },
    { name: "recipient", label: "Recipient name", placeholder: "Mr. John Doe" },
    { name: "recipientInfo", label: "Recipient address", placeholder: "Globex Inc., 500 Market St" },
    { name: "subject", label: "Subject", full: true, placeholder: "Re: Partnership opportunity" },
    { name: "body", label: "Letter body", type: "textarea", rows: 6, placeholder: "Write your message here…" },
    { name: "closing", label: "Closing", placeholder: "Sincerely" },
  ],
  build: (v) => ({
    title: "Letter",
    filename: "letter",
    body:
`${g(v.sender, "Your name")}
${g(v.senderInfo, "Your address / contact")}

${g(v.date, "Date")}

${g(v.recipient, "Recipient name")}
${g(v.recipientInfo, "Recipient address")}

Subject: ${g(v.subject, "Subject")}

Dear ${g(v.recipient, "Recipient name")},

${g(v.body, "Write your message here")}

${(v.closing && v.closing.trim()) || "Sincerely"},

${g(v.sender, "Your name")}`,
  }),
};

// ── Resignation Letter Generator ─────────────────────────────────────────────
const RESIGNATION: GenConfig = {
  fields: [
    { name: "name", label: "Your name", placeholder: "Jane Smith" },
    { name: "position", label: "Your position", placeholder: "Marketing Manager" },
    { name: "company", label: "Company", placeholder: "Globex Inc." },
    { name: "manager", label: "Manager's name", placeholder: "Mr. John Doe" },
    { name: "lastDay", label: "Last working day", type: "date" },
    { name: "date", label: "Date", type: "date" },
    { name: "note", label: "Personal note (optional)", type: "textarea", rows: 3, placeholder: "Thank the team, offer to help with the transition…" },
  ],
  build: (v) => ({
    title: "Letter of Resignation",
    filename: "resignation-letter",
    body:
`${g(v.date, "Date")}

Dear ${g(v.manager, "Manager's name")},

I am writing to formally notify you of my resignation from my position as ${g(v.position, "Your position")} at ${g(v.company, "Company")}. My last working day will be ${g(v.lastDay, "last working day")}.

${(v.note && v.note.trim()) || "Thank you for the opportunity to be part of the team. I am grateful for the experience and support during my time here, and I will do everything I can to ensure a smooth handover of my responsibilities."}

I wish the company continued success.

Sincerely,
${g(v.name, "Your name")}`,
  }),
};

// ── Recommendation Letter Generator ──────────────────────────────────────────
const RECOMMENDATION: GenConfig = {
  fields: [
    { name: "recommender", label: "Your name", placeholder: "Dr. Alice Brown" },
    { name: "title", label: "Your title", placeholder: "Professor of Computer Science" },
    { name: "date", label: "Date", type: "date" },
    { name: "candidate", label: "Candidate's name", placeholder: "John Doe" },
    { name: "relationship", label: "Your relationship", placeholder: "his academic advisor" },
    { name: "duration", label: "How long you've known them", placeholder: "3 years" },
    { name: "role", label: "Role / program they're applying for", full: true, placeholder: "the Master's program in Data Science" },
    { name: "qualities", label: "Key strengths & examples", type: "textarea", rows: 4, placeholder: "Describe their strengths with specific examples…" },
  ],
  build: (v) => ({
    title: "Letter of Recommendation",
    filename: "recommendation-letter",
    body:
`${g(v.date, "Date")}

To Whom It May Concern,

It is my pleasure to recommend ${g(v.candidate, "Candidate's name")} for ${g(v.role, "the role or program")}. As ${g(v.relationship, "your relationship")}, I have known ${g(v.candidate, "the candidate")} for ${g(v.duration, "duration")} and can speak confidently to their abilities and character.

${g(v.qualities, "Describe their key strengths with specific examples")}

Based on these qualities, I recommend ${g(v.candidate, "the candidate")} without reservation. Please feel free to contact me should you require any further information.

Sincerely,
${g(v.recommender, "Your name")}
${g(v.title, "Your title")}`,
  }),
};

// ── exported widgets ─────────────────────────────────────────────────────────
export const ProposalBuilder = () => <DocGenerator config={PROPOSAL} />;
export const ScopeGenerator = () => <DocGenerator config={SCOPE} />;
export const ContractGenerator = () => <DocGenerator config={CONTRACT} />;
export const NdaGenerator = () => <DocGenerator config={NDA} />;
export const TermsGenerator = () => <DocGenerator config={TERMS} />;
export const LetterGenerator = () => <DocGenerator config={LETTER} />;
export const ResignationLetterGenerator = () => <DocGenerator config={RESIGNATION} />;
export const RecommendationLetterGenerator = () => <DocGenerator config={RECOMMENDATION} />;
