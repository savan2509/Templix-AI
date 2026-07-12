// Structural SEO derived from a post's HTML, so it can never drift from the
// content the way a hand-maintained `readTime` field did.

export interface TocEntry {
  id: string;
  text: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

const stripTags = (html: string) =>
  html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

/** Words of visible prose in the article body. */
export function wordCount(html: string): number {
  const text = stripTags(html);
  return text ? text.split(" ").length : 0;
}

/**
 * Honest reading time. ~225 words per minute is the widely used adult average
 * for non-fiction. Never claim less than a minute.
 */
export function readingTime(html: string): number {
  return Math.max(1, Math.round(wordCount(html) / 225));
}

/** URL-safe anchor from heading text, deduplicated by the caller. */
function slugifyHeading(text: string): string {
  return (
    stripTags(text)
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 60) || "section"
  );
}

/**
 * Adds a stable `id` to every <h2> and returns the table of contents.
 * Existing ids are preserved. Call this AFTER any link injection so the
 * anchors match what actually renders.
 */
export function withHeadingIds(html: string): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  const seen = new Map<string, number>();

  const out = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (full, attrs: string, inner: string) => {
      // Respect an id the author already wrote.
      const existing = /\bid="([^"]+)"/i.exec(attrs);
      let id = existing?.[1] ?? slugifyHeading(inner);

      const n = seen.get(id) ?? 0;
      seen.set(id, n + 1);
      if (n > 0) id = `${id}-${n + 1}`;

      toc.push({ id, text: stripTags(inner) });
      return existing
        ? full
        : `<h2${attrs} id="${id}">${inner}</h2>`;
    },
  );

  return { html: out, toc };
}

/**
 * Pulls Q/A pairs out of the "Frequently Asked Questions" section: each <h3> is
 * a question, and the prose until the next heading is its answer. Returns []
 * when the post has no FAQ section, so callers can skip the schema entirely.
 */
export function extractFaqs(html: string): FaqEntry[] {
  const start = html.search(/<h2[^>]*>\s*Frequently Asked Questions\s*<\/h2>/i);
  if (start === -1) return [];

  // The FAQ block runs to the next <h2> (or the end of the article).
  const rest = html.slice(start);
  const afterHeading = rest.slice(rest.indexOf("</h2>") + 5);
  const nextH2 = afterHeading.search(/<h2[ >]/i);
  const block = nextH2 === -1 ? afterHeading : afterHeading.slice(0, nextH2);

  const faqs: FaqEntry[] = [];
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[ >]|$)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(block)) !== null) {
    const question = stripTags(m[1]);
    const answer = stripTags(m[2]);
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
}

/** schema.org FAQPage — earns the expandable Q&A rich result in Google. */
export function buildFaqSchema(faqs: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// Category-appropriate FAQs for any blog post that doesn't already carry its own
// "Frequently Asked Questions" section — so every article gets a visible FAQ
// block and FAQPage rich-result eligibility. Mirrors the per-template FAQ
// generator: the framing changes by category and references the post's topic.
export function getBlogFaqs(post: { title: string; category?: string }): FaqEntry[] {
  const free: FaqEntry = {
    question: "Are the templates on Templix AI really free?",
    answer:
      "Yes. Every template referenced in this guide is free to customize and download as PDF or Word, with no account and no watermark.",
  };
  const exportQ: FaqEntry = {
    question: "Can I export the finished document to PDF and Word?",
    answer:
      "Yes. Fill any template in the browser and export it to clean PDF or Word in a couple of clicks — the layout stays identical either way.",
  };

  const byCategory: Record<string, FaqEntry[]> = {
    Invoices: [
      { question: "What should a professional invoice include?", answer: "A unique invoice number, your and the client's details, an itemized list of the work, the subtotal, any tax, the total due, and clear payment terms." },
      { question: "How do I get an invoice paid on time?", answer: "Number it sequentially, set an explicit due date rather than just \"Net 30\", list clear line items, and send it as a PDF the moment the work is done." },
      free, exportQ,
    ],
    Resumes: [
      { question: "What makes a resume ATS-friendly?", answer: "A single clean column, standard section headings, real text (not images), and the exact keywords from the job posting — so applicant-tracking systems parse it correctly." },
      { question: "Should I send my resume as PDF or Word?", answer: "PDF unless the application portal specifically asks for Word — PDF keeps your formatting identical on every device." },
      free, exportQ,
    ],
    Contracts: [
      { question: "What should every contract cover?", answer: "Both parties' legal names, the scope of work and what's out of scope, the fee and payment schedule, timelines, and clauses for termination, confidentiality and governing law." },
      { question: "Do I need a lawyer to use a contract template?", answer: "For routine freelance and small-business agreements a clear template is usually enough; for high-value or unusual terms, have a professional review it before signing." },
      free, exportQ,
    ],
    Proposals: [
      { question: "What makes a business proposal win the work?", answer: "A stand-alone summary, the client's problem restated in their words, clear deliverables and timeline, transparent pricing, and a signature block that turns interest into a yes." },
      { question: "How long should a proposal be?", answer: "As short as it can be while still answering the client's questions — often one to three pages. A focused one-pager frequently outperforms a long document." },
      free, exportQ,
    ],
    Letters: [
      { question: "How should a formal letter be structured?", answer: "State its purpose up front, give the necessary detail in the middle, and close with a clear next step — kept courteous and on the record throughout." },
      { question: "Should I send it as an email or a formal letter?", answer: "Email is fine for most professional situations; use a formal signed letter (PDF) when it needs to be on the record, such as a resignation or a notice." },
      free, exportQ,
    ],
    "AI Tools": [
      { question: "Does the AI editor cost anything?", answer: "No. The AI-assisted editor and every template are free to use — customize online and export without a subscription." },
      { question: "Can AI write the whole document for me?", answer: "It can draft and rewrite sections quickly, but you should always review the output for accuracy and tone before you send anything important." },
      free, exportQ,
    ],
    Guides: [
      { question: "Do I need any special software to follow this guide?", answer: "No — you can do everything in your browser with Templix AI's free editor and templates, then export to PDF or Word." },
      { question: "Are the templates mentioned here free?", answer: "Yes. Every template linked in this guide is free to customize and download, with no sign-up and no watermark." },
      exportQ, free,
    ],
  };

  return byCategory[post.category ?? "Guides"] ?? byCategory.Guides;
}
