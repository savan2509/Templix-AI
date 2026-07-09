import type { FAQItem } from "@/data/faq";

// Unique on-page copy for each template detail page.
//
// The detail pages were the preview plus one sentence of description, so Google
// saw ~180 near-identical URLs. This builds real, differentiated copy per page:
// the framing changes per category, and the specifics — the document's own name,
// the fields it actually carries, and its stated purpose — change per template.

export interface TemplateCopy {
  /** 2-3 sentence lead paragraph. */
  intro: string;
  whoForHeading: string;
  whoFor: string[];
  includedHeading: string;
  /** Derived from the template's real `content.fields`. */
  included: string[];
  howToHeading: string;
  howTo: string[];
  tipsHeading: string;
  tips: string[];
}

/** "companyName" → "Company name" */
function humanizeField(key: string): string {
  const spaced = key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]+/g, " ")
    .trim()
    .toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/** Strip a trailing "Template" so we never write "Invoice Template template". */
function baseName(title: string): string {
  return title.replace(/\s+Template$/i, "").trim();
}

/**
 * Mid-sentence noun. Keep the document's own capitalisation — lowercasing only
 * the first letter produced "freelancer Invoice", and lowercasing everything
 * would wreck acronyms like NDA and HVAC.
 */
function noun(title: string): string {
  return baseName(title);
}

interface CategoryFrame {
  purpose: string;
  audience: string[];
  steps: string[];
  tips: string[];
  faq: (n: string) => FAQItem[];
}

const FRAMES: Record<string, CategoryFrame> = {
  invoices: {
    purpose:
      "bill a client clearly enough that finance can pay it without asking you a single question",
    audience: [
      "Freelancers and consultants billing clients directly",
      "Small businesses that invoice a handful of customers each month",
      "Anyone who needs a compliant record for their accountant",
    ],
    steps: [
      "Replace the sender block with your own name, address and tax number.",
      "Add the client's legal name and billing address exactly as they gave it.",
      "Set a sequential invoice number and an explicit due date, not just \"Net 30\".",
      "Enter each line item with a description, quantity and rate — the totals compute themselves.",
      "Export to PDF and attach it to a short email naming the invoice number.",
    ],
    tips: [
      "Never reuse an invoice number. Cancel and issue a credit note instead.",
      "Write the due date as a real date. \"Net 30\" invites an argument about day one.",
      "Include the purchase order number if your client uses one — some finance systems will not pay without it.",
      "Send PDF, not Word, so the layout cannot shift on the client's machine.",
    ],
    faq: (n) => [
      {
        question: `Is this ${n} template really free?`,
        answer: `Yes. You can fill it in, export it to PDF or Word, and send it to a client without creating an account, and the exported file carries no watermark or branding of ours.`,
      },
      {
        question: `What must a ${n} include to be valid?`,
        answer:
          "A unique sequential number, the issue date, an explicit due date, both parties' names and addresses, an itemised breakdown of what you delivered, the subtotal, any tax shown separately, the total due, and how to pay you. Most tax authorities also require your registration number where you have one.",
      },
      {
        question: "Can I edit the line items and tax rate?",
        answer:
          "Yes. Add or remove rows, change descriptions and rates, and set your own tax percentage. The subtotal, tax and total recalculate from the rows, so the arithmetic on the page always adds up.",
      },
      {
        question: "PDF or Word — which should I send?",
        answer:
          "Send the PDF. It renders identically everywhere and cannot be altered by accident. Keep the Word file for the occasional client whose finance system asks for an editable copy.",
      },
    ],
  },
  resumes: {
    purpose:
      "get past an applicant tracking system and then hold a recruiter's attention for the ten seconds they give the first pass",
    audience: [
      "Job seekers applying through online portals that screen with an ATS",
      "Graduates and freshers with projects rather than job history",
      "Experienced professionals who need a clean, single-column rewrite",
    ],
    steps: [
      "Replace the header with your name, city, phone, email and one professional link.",
      "Write the summary last — three lines: who you are, one quantified achievement, what you want next.",
      "Under each role, lead every bullet with a verb and end it with a number.",
      "Mirror the exact skill keywords used in the job posting you are answering.",
      "Export to PDF unless the portal explicitly demands Word.",
    ],
    tips: [
      "Keep it to one page under ten years of experience, two at the absolute most.",
      "No photo, no declaration line, no signature — they waste the most valuable space on the page.",
      "Replace adjectives about yourself with verbs about your work. \"Detail-oriented\" proves nothing.",
      "Use a single column. Text boxes, tables and sidebars are what ATS parsers silently drop.",
    ],
    faq: (n) => [
      {
        question: `Is this ${n} template ATS-friendly?`,
        answer:
          "Yes. It uses a single-column layout, standard section headings, and real text rather than images — the three things applicant tracking systems most often fail to parse. Nothing important sits inside a text box or table.",
      },
      {
        question: "How long should this resume be?",
        answer:
          "One page if you have under about ten years of experience, and never more than two. Recruiters spend seconds on the first pass; a longer resume signals that you cannot prioritise.",
      },
      {
        question: "Can I use it if I have no work experience?",
        answer:
          "Yes. Lead with projects, coursework, internships and volunteering, and quantify each one — dataset size, team size, marks, duration, audience. Every activity has a number in it once you look.",
      },
      {
        question: "Do I need to pay or sign up to download it?",
        answer:
          "No. Fill it in and export to PDF or Word for free, with no account and no watermark on the exported file.",
      },
    ],
  },
  contracts: {
    purpose:
      "agree scope, money and ownership in writing before the work starts, so a disagreement in month six has an answer",
    audience: [
      "Freelancers and agencies engaging clients",
      "Small businesses onboarding vendors or contractors",
      "Anyone who has been burned by scope creep or a late payment",
    ],
    steps: [
      "Name both parties by their full legal entity, not a trading name.",
      "List deliverables as nouns, then list what is explicitly out of scope.",
      "Set the fee, the payment schedule, and what happens when a payment is late.",
      "Say when intellectual property transfers — on final payment, not on delivery.",
      "Both parties sign and date, and each keeps a signed PDF.",
    ],
    tips: [
      "The out-of-scope paragraph is the most valuable one in the document.",
      "Tie your deadlines to the client's inputs: \"within 10 business days of receiving brand assets\".",
      "Ask for portfolio rights explicitly. Clients rarely object, and asking later is harder.",
      "Name a governing jurisdiction. \"We'll sort it out\" is not a dispute-resolution clause.",
    ],
    faq: (n) => [
      {
        question: `Is this ${n} legally binding?`,
        answer:
          "Once both parties sign and there is a clear offer, acceptance and consideration, an agreement of this kind is generally binding. Contract law is jurisdiction-specific, so have your standard version reviewed once by a lawyer where you operate — then reuse it.",
      },
      {
        question: "Can I edit the clauses?",
        answer:
          "Yes, and you should. Delete what does not apply rather than trying to remember to add it. Deleting is safer than remembering.",
      },
      {
        question: "When does the client own the work?",
        answer:
          "Whenever this document says so — and it should say on receipt of final payment, not on delivery. Until then you grant a licence, you do not assign ownership. That single clause is what lets you stop work if an invoice goes unpaid.",
      },
      {
        question: "Do I also need a separate NDA?",
        answer:
          "Not if this agreement already contains a mutual confidentiality clause. A standalone NDA is worth signing earlier — during pitching or due diligence, before any contract exists.",
      },
    ],
  },
  proposals: {
    purpose:
      "win the idea before you price it, so the conversation is about scope rather than discount",
    audience: [
      "Agencies and consultants pitching defined engagements",
      "Freelancers responding to a brief or an RFP",
      "Teams seeking internal sign-off and budget",
    ],
    steps: [
      "Open with a summary that stands alone — problem, approach, price, ask.",
      "Restate the client's problem in their own words before you propose anything.",
      "Set out deliverables, timeline and acceptance criteria in plain nouns.",
      "Offer three priced options and put the one you want in the middle.",
      "Add a validity date and a signature block that turns the proposal into an order.",
    ],
    tips: [
      "Decision-makers read the summary and skim the rest. Front-load everything that matters.",
      "One line of real proof beats a page of promise — name a comparable client and the outcome.",
      "Never send a single number. It invites \"can you do it cheaper?\" instead of \"what can we remove?\"",
      "Follow up once, three working days later, and add something rather than asking for a decision.",
    ],
    faq: (n) => [
      {
        question: `What is the difference between a ${n} and a quotation?`,
        answer:
          "A quotation prices work that is already defined. A proposal argues for the work first and prices it second. Send a quotation when the client knows what they want; send a proposal when you still have to win the approach and the budget.",
      },
      {
        question: "How long should it be?",
        answer:
          "Long enough to answer the buyer's questions and no longer. Most win at five to ten pages: summary, problem, approach, deliverables, timeline, pricing options, and proof you have done it before.",
      },
      {
        question: "Should I show one price or several?",
        answer:
          "Three options usually beats one. A single number moves the conversation to discount; tiered options move it to scope. Put your target option in the middle.",
      },
      {
        question: "Can I export it to PDF and Word?",
        answer:
          "Yes, both, free and without an account. Send the PDF so your layout and pricing table hold their position on the client's screen.",
      },
    ],
  },
  letters: {
    purpose:
      "say one thing clearly, to one person, in a form they can file and act on",
    audience: [
      "Employees and HR teams issuing formal correspondence",
      "Job seekers writing to a named hiring manager",
      "Anyone who needs a record of what was said and when",
    ],
    steps: [
      "Address a person by name wherever you can find one.",
      "State your purpose in the first two sentences — never bury it.",
      "Keep paragraphs to three or four lines, in block format.",
      "Close with the specific action you want and by when.",
      "Sign it, export to PDF, and keep a copy with a reference number.",
    ],
    tips: [
      "\"Dear Hiring Manager\" beats \"To Whom It May Concern\", which reads as a form letter.",
      "Match the tone to the reader, not to the occasion.",
      "Never send an editable Word file for anything that carries weight.",
      "Read it aloud once. Anything you stumble over, the reader will too.",
    ],
    faq: (n) => [
      {
        question: `What is the correct format for a ${n}?`,
        answer:
          "Sender address, date, recipient address, a salutation naming a person where possible, a subject line, the body in short paragraphs, a complimentary close, and a signature block. Block format — everything left-aligned, a blank line between paragraphs — is the safe default.",
      },
      {
        question: "Should I send it as PDF or Word?",
        answer:
          "PDF, unless the recipient asked for an editable file. It renders identically everywhere, cannot be altered by accident, and is what HR and legal teams expect to file.",
      },
      {
        question: "How formal should the tone be?",
        answer:
          "Match the reader. Resignation, offer and legal letters stay formal and factual. Thank-you and cover letters can be warm, but never casual — no contractions in the opening line.",
      },
      {
        question: "Is this template free to download?",
        answer:
          "Yes. Edit it, export to PDF or Word, and send it — no account, no watermark, no limit on how many you create.",
      },
    ],
  },
  quotations: {
    purpose:
      "put a fixed, itemised price in front of a buyer with an expiry date attached",
    audience: [
      "Trades and service businesses pricing defined jobs",
      "Agencies and freelancers quoting a scoped engagement",
      "Suppliers responding to a request for pricing",
    ],
    steps: [
      "Restate in one line what the client asked for — it proves you listened.",
      "Itemise: description, quantity, unit price, line total.",
      "Write what is included, then write what is explicitly excluded.",
      "State a validity period. Thirty days is standard.",
      "Add an acceptance signature line, which turns the quote into an order.",
    ],
    tips: [
      "Write the exclusions before the inclusions. It shows you where the project leaks.",
      "Always show tax on its own line. A tax-inclusive total hides your rate.",
      "A lone total invites \"cheaper?\". An itemised one invites \"what can we remove?\".",
      "Carry the accepted line items straight into the invoice, word for word.",
    ],
    faq: (n) => [
      {
        question: `How long should a ${n} stay valid?`,
        answer:
          "State an explicit validity period — thirty days is standard. Without it a client can accept your price months later, after your costs have risen. The expiry also creates gentle urgency without you discounting.",
      },
      {
        question: "What is the difference between a quotation and an estimate?",
        answer:
          "A quotation is a fixed price for defined work and is generally binding once accepted within its validity period. An estimate is an approximation that may change as the scope firms up.",
      },
      {
        question: "Should tax be shown separately?",
        answer:
          "Always. A tax-inclusive total hides your actual rate and confuses the client's finance team. Show taxable value, rate, tax amount and grand total on separate lines.",
      },
      {
        question: "Can I turn it into an invoice once accepted?",
        answer:
          "Yes, and you should reuse the same descriptions and numbers. Rewriting them introduces discrepancies that delay payment.",
      },
    ],
  },
  reports: {
    purpose:
      "give a busy reader the finding and the recommendation before they reach the evidence",
    audience: [
      "Managers reporting to a leadership team",
      "Consultants delivering findings to a client",
      "Anyone who must document what happened and what should change",
    ],
    steps: [
      "Write the executive summary last, extracting one sentence from each section.",
      "State the period, the author and the scope on the first page.",
      "Present findings before analysis, and analysis before recommendations.",
      "Give every chart a title that states the finding, not the variable.",
      "Close with owners and dates against each recommendation.",
    ],
    tips: [
      "The summary replaces the introduction — it does not precede it.",
      "Recommendations without an owner and a date are opinions.",
      "One well-labelled chart beats five decorative ones.",
      "Circulate PDF so pagination and charts hold their position.",
    ],
    faq: (n) => [
      {
        question: `How should a ${n} be structured?`,
        answer:
          "Executive summary first, then context, method or data, findings, and finally recommendations. Readers skim the summary and jump to recommendations, so those two sections must stand alone without the middle.",
      },
      {
        question: "How long should the executive summary be?",
        answer:
          "Roughly five to ten percent of the report. Someone who reads only the summary should know the problem, the findings, and what you are asking for.",
      },
      {
        question: "Should I include charts?",
        answer:
          "Only where a chart carries the argument better than a sentence. Title each one with the finding it shows, not the variable it plots.",
      },
      {
        question: "Can I export it to PDF and Word?",
        answer:
          "Yes, both, free and without an account. Circulate the PDF and keep the Word file for colleagues who must add a section.",
      },
    ],
  },
  "business-plans": {
    purpose:
      "show an investor or a bank that the opportunity, the evidence and the ask all line up",
    audience: [
      "Founders raising a first or seed round",
      "Small business owners applying for finance",
      "Anyone who wants to find the holes in their own reasoning",
    ],
    steps: [
      "Write the summary last. It is the only page guaranteed to be read.",
      "State the problem in the customer's language, then your solution in one sentence.",
      "Show traction before projections — revenue, letters of intent, retention.",
      "Model three years of finances, and state the assumptions on the same page.",
      "Make the ask concrete: how much, for what, and which milestone it buys.",
    ],
    tips: [
      "One line of real traction outweighs a page of forecast.",
      "An ask without a use of funds and a milestone is a number, not a plan.",
      "Name the competition. \"We have no competitors\" reads as \"we did not look\".",
      "Fifteen to twenty-five pages plus appendices. Longer signals you cannot prioritise.",
    ],
    faq: (n) => [
      {
        question: `What must a ${n} contain?`,
        answer:
          "An executive summary, the problem and your solution, market size, traction, the business model, the team, financial projections, and a specific funding ask with a use of funds and a milestone attached.",
      },
      {
        question: "How long should it be?",
        answer:
          "Fifteen to twenty-five pages plus appendices. Investors read the summary and skim the rest, so front-load everything that matters.",
      },
      {
        question: "What matters more, traction or projections?",
        answer:
          "Traction, by a distance. Revenue from paying customers outweighs any forecast, followed by signed letters of intent, then active users with a retention curve.",
      },
      {
        question: "Is the template free to download?",
        answer:
          "Yes — edit it, export to PDF or Word, no account required and no watermark on the file.",
      },
    ],
  },
};

const FALLBACK: CategoryFrame = {
  purpose: "produce a clean, professional document in minutes rather than hours",
  audience: [
    "Freelancers and small businesses",
    "Teams who need a consistent, professional format",
    "Anyone starting from a blank page",
  ],
  steps: [
    "Replace the placeholder details with your own.",
    "Fill in each field — the layout adjusts as you type.",
    "Review the document in the live preview.",
    "Export to PDF or Word and send it.",
  ],
  tips: [
    "Send PDF so the layout cannot shift on someone else's machine.",
    "Keep one saved copy per client or purpose to avoid retyping.",
    "Proofread once out loud before you send.",
  ],
  faq: (n) => [
    {
      question: `Is this ${n} template free?`,
      answer:
        "Yes. Fill it in, export to PDF or Word, and use it commercially — no account, no watermark, no limit.",
    },
    {
      question: "Can I edit every field?",
      answer:
        "Yes. Every placeholder is editable, and you can add or remove sections in the editor before exporting.",
    },
    {
      question: "Which format should I send?",
      answer:
        "PDF for anything final, so your layout holds. Word only when the recipient must edit it.",
    },
  ],
};

const frameFor = (categorySlug?: string) =>
  (categorySlug && FRAMES[categorySlug]) || FALLBACK;

// A few templates answer a very specific search and deserve their own FAQs
// rather than the category's generic ones.
const SLUG_FAQS: Record<string, FAQItem[]> = {
  "invoice-gst": [
    {
      question: "What is the correct GST invoice format?",
      answer:
        "A GST tax invoice must carry the supplier's name, address and GSTIN; a consecutive invoice number of at most sixteen characters; the date of issue; the recipient's name, address and GSTIN where they are registered; the place of supply; the SAC or HSN code; a description of the supply with taxable value; the tax rate and amount split into CGST and SGST or IGST; the total; and a signature. This template carries every one of those fields.",
    },
    {
      question: "When do I charge CGST and SGST instead of IGST?",
      answer:
        "Look at the place of supply, not where you sit. If the recipient is in your state, charge CGST and SGST split equally. If the recipient is in another state, charge IGST at the full rate. The client pays the same amount either way — only the split changes — but getting it wrong forces you to issue a revised invoice.",
    },
    {
      question: "Can I issue a GST invoice without a GSTIN?",
      answer:
        "No. If you are not registered you must not collect GST and must not print a GSTIN. Issue a bill of supply instead, with no tax rows. Your client cannot claim input tax credit against it.",
    },
    {
      question: "How should I number GST invoices?",
      answer:
        "Consecutively for each financial year, with no gaps and no reuse — GST-2026-001, GST-2026-002, and so on. Deleting a cancelled invoice and reusing its number is the single most common error found during scrutiny. Keep the number, and issue a credit note.",
    },
    {
      question: "Can I download this GST invoice format in Word and PDF?",
      answer:
        "Yes, both, free and with no sign-up. The exported file carries no watermark, so you can send it to a client or your accountant exactly as it appears in the preview.",
    },
  ],
  "invoice-proforma": [
    {
      question: "What is a proforma invoice?",
      answer:
        "A proforma invoice is a quotation shaped like an invoice, issued before a supply takes place. It states the agreed price, tax treatment and terms so the buyer can raise a purchase order, arrange finance or clear customs. It is not a demand for payment.",
    },
    {
      question: "What is the difference between a proforma invoice and a tax invoice?",
      answer:
        "A proforma invoice precedes the supply and creates no tax liability — no input tax credit can be claimed against it. A tax invoice is issued on or after the supply, must carry a consecutive invoice number, and is the document your client's accountant files.",
    },
    {
      question: "Is a proforma invoice legally binding?",
      answer:
        "It commits neither side to the transaction, but the price and terms it states are what the buyer will hold you to. Give it an explicit validity date for exactly that reason.",
    },
    {
      question: "Do I number proforma invoices in the same series as tax invoices?",
      answer:
        "No. Keep a separate series — PI-2026-001 — so your tax invoice numbering stays consecutive and unbroken.",
    },
  ],
};

/** Unique, per-template on-page copy. */
export function getTemplateCopy(template: {
  title: string;
  description?: string;
  categorySlug?: string;
  categoryName?: string;
  content?: { fields?: string[] };
}): TemplateCopy {
  const frame = frameFor(template.categorySlug);
  const name = baseName(template.title);
  const lower = noun(template.title);

  // The field list is genuinely different for every template, which is what
  // keeps these pages from reading as 180 copies of one another.
  const fields = (template.content?.fields ?? []).slice(0, 12).map(humanizeField);

  const intro =
    `This free ${lower} template is a ready-to-use document you can fill in, ` +
    `export and send today. ${template.description ?? ""} ` +
    `Use it to ${frame.purpose}. Every field is editable, the preview updates as you type, ` +
    `and the finished file downloads as PDF or Word with no watermark and no sign-up.`;

  return {
    intro: intro.replace(/\s+/g, " ").trim(),
    whoForHeading: `Who this ${lower} template is for`,
    whoFor: frame.audience,
    includedHeading: `What's included in this ${lower} template`,
    included:
      fields.length > 0
        ? fields
        : ["Every section pre-formatted and ready to edit"],
    howToHeading: `How to use this ${lower} template`,
    howTo: frame.steps,
    tipsHeading: `${name}: mistakes to avoid`,
    tips: frame.tips,
  };
}

/** Page-specific FAQs, so each detail page can carry FAQPage schema. */
export function getTemplateFaqs(template: {
  slug?: string;
  title: string;
  categorySlug?: string;
}): FAQItem[] {
  if (template.slug && SLUG_FAQS[template.slug]) return SLUG_FAQS[template.slug];
  return frameFor(template.categorySlug).faq(noun(template.title));
}
