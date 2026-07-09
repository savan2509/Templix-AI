import type { FAQItem } from "./faq";

// Page-specific FAQs.
//
// Every category page used to render the same four homepage questions, which is
// duplicate content across 9 URLs and answers nothing a visitor on the invoices
// page actually asked. These are written per category, in the searcher's words.
export const CATEGORY_FAQS: Record<string, FAQItem[]> = {
  invoices: [
    {
      question: "What should a professional invoice include?",
      answer:
        "At minimum: your name and address, the client's name and address, a unique sequential invoice number, the issue date and an explicit due date, an itemised list of what you delivered with quantities and rates, the subtotal, any tax, the total due, and how to pay you. Missing the invoice number or due date is the most common reason payment is delayed.",
    },
    {
      question: "Are these invoice templates GST compliant for India?",
      answer:
        "The layout carries every field a GST tax invoice requires — supplier and recipient GSTIN, place of supply, SAC code, taxable value, and a separate CGST/SGST or IGST split. Fill in your own GSTIN and SAC code before issuing. If you are not GST registered, remove the tax rows and issue it as a bill of supply instead.",
    },
    {
      question: "Can I download the invoice as PDF and Word?",
      answer:
        "Yes. Every invoice template exports to both PDF and Word (DOCX), with no watermark and no account required. Send PDF to clients so the layout cannot shift, and keep the Word file if a client's finance system asks for an editable copy.",
    },
    {
      question: "How do I number my invoices?",
      answer:
        "Use a sequential, never-reused series such as INV-2026-001, INV-2026-002. Most tax regimes require consecutive numbering with no gaps. If you cancel an invoice, keep its number and issue a credit note rather than reusing the number.",
    },
  ],
  resumes: [
    {
      question: "Are these resume templates ATS-friendly?",
      answer:
        "Yes. They use a single-column layout, standard section headings, real text rather than images, and no content inside text boxes or tables — the four things applicant tracking systems most often fail to parse. Export to PDF unless the job portal explicitly asks for Word.",
    },
    {
      question: "How long should my resume be?",
      answer:
        "One page if you have under about ten years of experience, and never more than two. Recruiters spend seconds on the first pass, and a longer resume signals that you cannot prioritise. Cut anything older than fifteen years and anything before your degree.",
    },
    {
      question: "Should I include a photo on my resume?",
      answer:
        "Not for applications in the US, UK, Canada, Australia or India unless the employer explicitly asks. Photos invite unconscious bias and most ATS parsers discard the image region entirely, wasting prime space at the top of the page.",
    },
    {
      question: "What do I write if I have no work experience?",
      answer:
        "Lead with projects, coursework, internships and volunteering, and quantify each one. \"Built a churn model on a 12,000-row dataset, reaching 87% accuracy\" is evidence. \"Learned Python\" is not. Every activity has a number in it — dataset size, team size, duration, audience.",
    },
  ],
  contracts: [
    {
      question: "Is a template contract legally binding?",
      answer:
        "A contract is generally binding once both parties sign and there is a clear offer, acceptance and consideration. These templates give you a sound structure, but contract law is jurisdiction-specific — have your standard agreement reviewed once by a lawyer where you operate, then reuse it.",
    },
    {
      question: "When does the client own the work I deliver?",
      answer:
        "Whenever your contract says so — and it should say on receipt of final payment, not on delivery. Until then you grant a licence, you do not assign ownership. This single clause is what lets you stop work if an invoice goes unpaid.",
    },
    {
      question: "What is the difference between a contract and an agreement?",
      answer:
        "Every contract is an agreement, but an agreement only becomes a contract when it is enforceable — offer, acceptance, consideration, and an intention to be legally bound. In practice \"service agreement\" and \"service contract\" are used interchangeably; what matters is the clauses inside.",
    },
    {
      question: "Do I need a separate NDA?",
      answer:
        "Not if your contract already contains a mutual confidentiality clause with the standard carve-outs. A standalone NDA is worth signing before a contract exists — during pitching, due diligence, or when you are discussing an idea with someone you have not yet engaged.",
    },
  ],
  proposals: [
    {
      question: "What is the difference between a proposal and a quotation?",
      answer:
        "A quotation prices defined work. A proposal argues for the work first and prices it second. Send a quotation when the client already knows what they want; send a proposal when you still have to win the idea, the approach and the budget.",
    },
    {
      question: "How long should a business proposal be?",
      answer:
        "Long enough to answer the buyer's questions and no longer. Most win at five to ten pages: an executive summary, the problem, your approach, deliverables, timeline, pricing options, and proof you have done it before. The summary must stand alone — it is the only page a decision-maker is guaranteed to read.",
    },
    {
      question: "Should I show one price or several options?",
      answer:
        "Three options usually beats one. A single number invites the question \"can you do it cheaper?\", while tiered options move the conversation to \"which scope fits our budget?\" Put your target option in the middle.",
    },
    {
      question: "How soon should I follow up on a proposal?",
      answer:
        "Once, three working days after sending, and add something rather than asking for a decision — a clarified assumption, a relevant case study, or a note that the validity date approaches. Then stop and let the deadline do the work.",
    },
  ],
  letters: [
    {
      question: "What is the correct business letter format?",
      answer:
        "Sender address, date, recipient address, a salutation naming a person where possible, a subject line, the body in short paragraphs, a complimentary close, and your signature block. Block format — everything left-aligned with a blank line between paragraphs — is the safe default.",
    },
    {
      question: "Should I send a letter as PDF or Word?",
      answer:
        "PDF, unless the recipient asked for an editable file. A PDF renders identically on every device, cannot be altered accidentally, and is what HR and legal teams expect to file. Send Word only when someone must fill something in.",
    },
    {
      question: "How formal should the tone be?",
      answer:
        "Match the reader, not the occasion. Resignation, offer, and legal letters stay formal and factual. Thank-you and cover letters can be warm, but never casual — no contractions in the opening line and no exclamation marks in the body.",
    },
    {
      question: "Do I need to sign a letter I send by email?",
      answer:
        "Include a typed signature block at minimum. For letters that carry weight — offers, resignations, experience certificates — attach a signed PDF. A scanned signature pasted into a Word file is easy to forge and increasingly rejected by verifiers.",
    },
  ],
  quotations: [
    {
      question: "How long should a quotation stay valid?",
      answer:
        "State an explicit validity period — thirty days is standard. Without it, a client can accept your Q1 price in Q4 after your costs have risen. The expiry also creates gentle urgency without you having to discount.",
    },
    {
      question: "What is the difference between a quotation and an estimate?",
      answer:
        "A quotation is a fixed price for defined work, binding once accepted within its validity period. An estimate is an approximation that may change as scope firms up. Sending an estimate when the client expected a quotation reads as evasive.",
    },
    {
      question: "Should I show tax separately on a quotation?",
      answer:
        "Always. A tax-inclusive total hides your actual rate and confuses the client's finance team. Show the taxable value, the rate, the tax amount, and the grand total on separate lines.",
    },
    {
      question: "Can I turn an accepted quotation into an invoice?",
      answer:
        "Yes, and you should — with the same line descriptions and the same numbers. Rewriting them introduces discrepancies that delay payment. Our quotation and invoice templates share a layout for exactly this reason.",
    },
  ],
  reports: [
    {
      question: "How do I structure a business report?",
      answer:
        "Executive summary first, then the context, the method or data, the findings, and finally the recommendations. Readers skim the summary and jump to recommendations, so those two sections must stand alone without the middle.",
    },
    {
      question: "How long should an executive summary be?",
      answer:
        "One page for a business plan, and roughly five to ten percent of the length for a long report. It replaces the introduction rather than preceding it — someone who reads only the summary should know the problem, the findings, and what you are asking for.",
    },
    {
      question: "Should a report include charts?",
      answer:
        "Only where a chart carries the argument better than a sentence. One well-labelled chart beats five decorative ones. Give every chart a title that states the finding, not the variable — \"Retention fell after onboarding changed\", not \"Retention by month\".",
    },
    {
      question: "Can I export a report to PDF and Word?",
      answer:
        "Yes. Circulate PDF so pagination and charts hold their position, and keep the Word file for colleagues who must add a section before it goes out.",
    },
  ],
  "business-plans": [
    {
      question: "What must a business plan contain?",
      answer:
        "An executive summary, the problem and your solution, market size, traction, the business model, the team, financial projections, and a specific funding ask with a use of funds. An ask without a use of funds and a milestone is a number, not a plan.",
    },
    {
      question: "How long should a business plan be?",
      answer:
        "Fifteen to twenty-five pages for a full plan, plus appendices. Investors read the summary and skim the rest, so front-load everything that matters. A hundred-page plan signals you cannot separate the important from the interesting.",
    },
    {
      question: "What matters more, traction or projections?",
      answer:
        "Traction, by a distance. One line of revenue from paying customers outweighs a page of forecast. In descending order of persuasiveness: revenue, signed letters of intent, active users with a retention curve, a waitlist, a survey.",
    },
    {
      question: "Do I need a business plan to raise money?",
      answer:
        "Increasingly a deck plus a financial model does the work. But writing the plan is how you find the holes in your own reasoning — which is worth doing whether or not anyone reads it.",
    },
  ],
  "cover-letters": [
    {
      question: "Is a cover letter still worth writing in 2026?",
      answer:
        "Not always requested, frequently read. When two resumes are equal, the letter decides. A generic one is worse than none, because it proves you will do the minimum.",
    },
    {
      question: "How long should a cover letter be?",
      answer:
        "Under 300 words on one page — roughly four short paragraphs: a concrete hook, the proof behind it, why you fit this specific role, and a confident close. Never open with \"I am writing to apply for…\"; the reader already knows.",
    },
    {
      question: "What if I cannot find a name to address?",
      answer:
        "Check the company's team page and the posting's contact details first. Failing that, \"Dear Hiring Manager\" is fine. \"To Whom It May Concern\" reads as a form letter.",
    },
    {
      question: "Should I mention that I lack experience?",
      answer:
        "Never apologise. Do not write \"although I am a fresher\". Replace every adjective about yourself with a verb about your work — what you built, for whom, and what changed as a result.",
    },
  ],
};

/** FAQs for a category page, falling back to null when we have none written. */
export function getCategoryFaqs(categorySlug?: string | null): FAQItem[] | null {
  if (!categorySlug) return null;
  return CATEGORY_FAQS[categorySlug] ?? null;
}

/** schema.org FAQPage for any list of Q&A pairs. */
export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}
