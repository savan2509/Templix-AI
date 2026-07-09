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
