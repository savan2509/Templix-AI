/**
 * Dedicated FAQ Topic Pages — data source
 *
 * Each FAQTopic powers a standalone SEO page at /en/faq/[topic].
 * Pages are indexed, have FAQPage + BreadcrumbList JSON-LD, and
 * internally link to the primary template and related blog posts.
 *
 * Data is authored here (static), not fetched from DB, so the page
 * renders at edge with zero latency and works when DB is offline.
 */

export interface FAQTopicLink {
  text: string;
  href: string;
}

export interface FAQTopicItem {
  question: string;
  answer: string;
}

export interface FAQTopic {
  slug: string;
  metaTitle: string;           // ≤60 chars total with " | Templix AI"
  metaDescription: string;     // 140–155 chars
  h1: string;
  intro: string;               // 1–2 sentence intro above the Q&A list
  questions: FAQTopicItem[];
  internalLinks: FAQTopicLink[];
  relatedFaqs?: string[];      // slugs of related FAQ topics for cross-linking
}

// ── Individual topic definitions ─────────────────────────────────────────────

const faqTopics: FAQTopic[] = [
  // ── 1 ────────────────────────────────────────────────────────────────────────
  {
    slug: "invoice-faqs",
    metaTitle: "Invoice FAQ: 15 Most Common Questions Answered",
    metaDescription:
      "Answers to the 15 most asked invoice questions — what to include, how to number invoices, payment terms, and when to send one. Free invoice templates included.",
    h1: "Invoice FAQ: 15 Most Common Questions Answered",
    intro:
      "Whether you're sending your first invoice or troubleshooting a late payment, these answers cover the most common invoice questions — plain and practical.",
    questions: [
      {
        question: "What is an invoice?",
        answer:
          "An invoice is a commercial document sent by a seller to a buyer that requests payment for goods or services. It itemizes what was delivered, the agreed price, applicable taxes, and the payment due date.",
      },
      {
        question: "What must an invoice include to be legally valid?",
        answer:
          "In most countries a valid invoice must include: seller's name and address, buyer's name, a unique invoice number, the invoice date, an itemized list of goods or services with prices, any applicable taxes (VAT/GST), the total amount due, and payment terms or due date.",
      },
      {
        question: "What is an invoice number and how should I format it?",
        answer:
          "An invoice number is a unique identifier that lets you and your client track a specific invoice. Common formats include INV-001, 2026-001, or CLIENT-001. Never reuse a number — sequential numbering is the simplest and most reliable approach.",
      },
      {
        question: "What is the difference between an invoice and a receipt?",
        answer:
          "An invoice is a payment request issued before payment is received. A receipt is proof of payment issued after the payment is made. You issue an invoice; you give a receipt.",
      },
      {
        question: "What payment terms should I use on an invoice?",
        answer:
          "Net 7, Net 14, and Net 30 are the most common — they mean payment is due 7, 14, or 30 days after the invoice date. Freelancers typically use Net 7 or Net 14. Larger businesses often use Net 30 or Net 60. State your terms clearly on every invoice.",
      },
      {
        question: "Can I send an invoice by email?",
        answer:
          "Yes. Email is the standard delivery method for invoices. Attach the invoice as a PDF, briefly summarize it in the email body (invoice number, amount, due date), and keep a sent copy for your records.",
      },
      {
        question: "How do I follow up on an unpaid invoice?",
        answer:
          "Send a polite reminder at 7 days past due, a firmer reminder at 14 days, and a final notice at 30 days. If you included a late payment fee clause in your agreement, reference it. Always keep a record of all communications.",
      },
      {
        question: "Do I need to include my tax number on an invoice?",
        answer:
          "Yes, if you are VAT or GST registered. Include your registration number on all taxable invoices. If you are below the registration threshold, you do not need to charge or show a tax number, but you also cannot charge VAT/GST.",
      },
      {
        question: "What is a proforma invoice?",
        answer:
          "A proforma invoice is a preliminary invoice sent before goods are delivered or services performed. It is used to get buyer approval, arrange import/export documentation, or request a deposit. It is not a payment demand.",
      },
      {
        question: "What is a credit note (credit memo)?",
        answer:
          "A credit note is a document issued to correct or cancel a previous invoice, or to issue a partial or full refund. It reduces the amount the buyer owes and should reference the original invoice number.",
      },
      {
        question: "How do I make an invoice for free?",
        answer:
          "Use Templix AI: select an invoice template, fill in your company details and line items, and download as PDF or Word. No account required and no watermark.",
      },
      {
        question: "Can I invoice a client without registering a company?",
        answer:
          "Yes. Sole traders and freelancers can invoice under their own name. Include your full name, address, and bank details. Check local regulations for any income reporting thresholds.",
      },
      {
        question: "Is a digital or electronic invoice legally valid?",
        answer:
          "Yes, in most countries. Digital invoices carry the same legal weight as paper invoices. Many countries (including the EU) are moving toward mandatory e-invoicing for B2B transactions.",
      },
      {
        question: "How long should I keep copies of invoices?",
        answer:
          "Most tax authorities require businesses to keep invoices for 5–7 years. In India it is 6 years, in the UK it is 6 years, in the US it is 3–7 years depending on the type of tax. Always check your local requirements.",
      },
      {
        question: "What is the difference between an invoice and a purchase order?",
        answer:
          "A purchase order (PO) is issued by the buyer before a purchase to authorize the transaction. An invoice is issued by the seller after delivery to request payment. The PO precedes the invoice; the invoice references the PO number.",
      },
    ],
    internalLinks: [
      { text: "Free Invoice Template", href: "/en/templates/invoices/invoice-freelancer" },
      { text: "GST Invoice FAQ", href: "/en/faq/gst-invoice-faqs" },
      { text: "Invoice vs Receipt", href: "/en/blog/invoice-vs-receipt" },
      { text: "Net 30 Payment Terms Explained", href: "/en/blog/net-30-payment-terms-explained" },
      { text: "Invoice Number Generator", href: "/en/tools/invoice-number-generator" },
    ],
    relatedFaqs: ["freelance-invoice-faqs", "gst-invoice-faqs", "invoice-payment-terms-faqs", "invoice-vs-receipt-faqs"],
  },

  // ── 2 ────────────────────────────────────────────────────────────────────────
  {
    slug: "resume-faqs",
    metaTitle: "Resume FAQ: 15 Questions Every Job Seeker Asks",
    metaDescription:
      "Answers to the 15 most common resume questions — format, length, ATS, skills section, gaps, and more. Free ATS-ready resume templates included.",
    h1: "Resume FAQ: 15 Questions Every Job Seeker Asks",
    intro:
      "From resume length to ATS keywords, here are direct answers to the questions candidates ask most — so you can submit with confidence.",
    questions: [
      {
        question: "How long should a resume be?",
        answer:
          "One page for 0–5 years of experience. Two pages for 6–10 years. Senior executives may use three pages, but only if every line adds value. Recruiters spend an average of 7 seconds on an initial scan — trim ruthlessly.",
      },
      {
        question: "What is an ATS and does my resume need to pass it?",
        answer:
          "An Applicant Tracking System (ATS) is software that filters resumes before a human reads them. Most medium and large companies use one. To pass: use standard headings (Work Experience, Education, Skills), include keywords from the job description, and avoid tables, columns, or text boxes that ATS parsers cannot read.",
      },
      {
        question: "Should I include a photo on my resume?",
        answer:
          "In the US, Canada, UK, and Australia: no — photos can introduce unconscious bias and are not expected. In Germany, Austria, Switzerland, France, and many Asian countries: yes, a professional headshot is standard.",
      },
      {
        question: "What is the best resume format?",
        answer:
          "Chronological (reverse-chronological) is best for most candidates — it lists experience newest-first and is preferred by recruiters and ATS. Functional format (skills-based) suits career changers. Combination suits senior professionals with both strong skills and history.",
      },
      {
        question: "What should I put in a resume summary?",
        answer:
          "A 2–3 sentence statement at the top that highlights: your title/role, years of experience, 2–3 top skills, and a key achievement or value you bring. Tailor it to each job. Never use 'I' or generic phrases like 'hard-working team player'.",
      },
      {
        question: "Should I include references on my resume?",
        answer:
          "No. 'References available upon request' wastes space. Employers know you have references. Prepare a separate reference sheet and provide it only when asked.",
      },
      {
        question: "How do I explain employment gaps on a resume?",
        answer:
          "Include a brief note if the gap is longer than 6 months: 'Career Break — freelance consulting (2024)' or 'Career Break — family care (2023–2024)'. Use a functional or combination format to lead with skills. Never lie or leave unexplained gaps.",
      },
      {
        question: "What skills should I put on my resume?",
        answer:
          "List skills that match the job description. Split into hard skills (specific tools, programming languages, certifications) and soft skills (leadership, communication). Only include skills you can demonstrate in an interview. Aim for 8–12 skills maximum.",
      },
      {
        question: "Should I use a template for my resume?",
        answer:
          "Yes — a well-structured template ensures consistent formatting and correct section hierarchy. Choose an ATS-friendly template (single-column, standard fonts, no images) from Templix AI.",
      },
      {
        question: "What font should I use on a resume?",
        answer:
          "Calibri, Arial, Helvetica, or Georgia at 10–12pt body size. Avoid decorative or serif-heavy fonts. Use bold for section headings and your name. Ensure at least 0.5 inch margins.",
      },
      {
        question: "Should I include a cover letter?",
        answer:
          "Yes, whenever possible. A cover letter lets you address the job's specific requirements and explain why you're a fit — information that doesn't belong on a resume. Always customize it.",
      },
      {
        question: "How do I list achievements instead of duties on a resume?",
        answer:
          "Use the CAR formula: Context → Action → Result. Instead of 'Managed social media', write 'Grew Instagram following by 40% in 6 months by launching a weekly video series'. Quantify wherever possible.",
      },
      {
        question: "What's the difference between a CV and a resume?",
        answer:
          "A CV (Curriculum Vitae) is a comprehensive document listing all academic work, publications, presentations, and career history — typically 2–10 pages. Used in academia and Europe. A resume is a concise 1–2 page document tailored to a specific job. Used primarily in the US, Canada, and Australia.",
      },
      {
        question: "Can I use the same resume for every job application?",
        answer:
          "No. Tailor your resume for each role by adjusting your summary and skills section to match the job description. You don't need to rewrite everything — 10–15 minutes of tailoring per application significantly improves your response rate.",
      },
      {
        question: "How do I list education on my resume?",
        answer:
          "Recent graduates: put Education before Work Experience. Professionals with 2+ years: put it after. Include: degree, institution, graduation year (or expected). GPA is optional — only include it if above 3.5. List relevant coursework only if you have limited work experience.",
      },
    ],
    internalLinks: [
      { text: "ATS Resume Checker Tool", href: "/en/tools/resume-ats-checker" },
      { text: "Free Resume Templates", href: "/en/templates/resumes" },
      { text: "ATS Resume Format Guide", href: "/en/blog/ats-resume-format-guide" },
      { text: "Resume Summary Examples", href: "/en/blog/resume-summary-examples" },
    ],
    relatedFaqs: ["ats-resume-faqs", "resume-format-faqs", "cover-letter-faqs"],
  },

  // ── 3 ────────────────────────────────────────────────────────────────────────
  {
    slug: "contract-faqs",
    metaTitle: "Contract FAQ: 15 Key Questions for Freelancers & Businesses",
    metaDescription:
      "Everything you need to know about contracts — verbal vs written, essential clauses, e-signatures, and what to do when a client breaches. Free templates included.",
    h1: "Contract FAQ: 15 Key Questions for Freelancers & Businesses",
    intro:
      "A well-drafted contract prevents disputes, sets expectations, and protects both parties. Here are answers to the questions freelancers and small business owners ask most.",
    questions: [
      {
        question: "Do I need a written contract for freelance work?",
        answer:
          "Yes. Verbal agreements are difficult to enforce and lead to disputes about scope, payment, and deadlines. A written contract — even a simple one-page agreement — protects both you and your client by documenting exactly what was agreed.",
      },
      {
        question: "What is the difference between a contract and an agreement?",
        answer:
          "Legally, both terms refer to a binding commitment between parties. 'Agreement' is broader and informal; 'contract' implies a written, legally enforceable document. In practice, use a formal written contract for any business engagement.",
      },
      {
        question: "Is an email exchange a legally binding contract?",
        answer:
          "In many jurisdictions, yes — an email exchange that demonstrates offer, acceptance, and consideration (payment) can be legally binding. However, a formal contract is far clearer, more defensible, and should always be preferred for business work.",
      },
      {
        question: "What are the essential clauses in a freelance contract?",
        answer:
          "Scope of work, payment terms and late fees, kill fee, revision policy, IP ownership, confidentiality, warranties and indemnification, governing law, dispute resolution, and a termination clause.",
      },
      {
        question: "What is an NDA and when do I need one?",
        answer:
          "A Non-Disclosure Agreement (NDA) is a contract that prohibits one or both parties from sharing confidential information. You need one whenever you are sharing business secrets, unreleased product information, client data, or proprietary methods.",
      },
      {
        question: "What is a kill fee?",
        answer:
          "A kill fee is a payment the client makes if they cancel a project after work has begun. Typically 25–50% of the project fee. Including it protects you from losing income when clients change their minds.",
      },
      {
        question: "Who owns the work I create for a client?",
        answer:
          "By default, in most countries, the creator (you) owns the intellectual property. Ownership only transfers to the client if your contract explicitly states it — via a 'work-for-hire' clause or an IP assignment clause. Always clarify this in writing.",
      },
      {
        question: "Can I use a free contract template for real work?",
        answer:
          "Yes — a professionally drafted template is a solid starting point. Customize the scope, payment, and governing law sections for your specific situation. For high-value projects, have a lawyer review it.",
      },
      {
        question: "What is the difference between an independent contractor and an employee contract?",
        answer:
          "An employee contract creates an employer-employee relationship: the employer controls how, when, and where work is done and pays payroll taxes. An independent contractor agreement establishes a business-to-business relationship: the contractor controls their methods and is responsible for their own taxes.",
      },
      {
        question: "What does 'governing law' mean in a contract?",
        answer:
          "The governing law clause specifies which country or state's law applies if a dispute arises. Use your own state/country as a freelancer — it's far more practical for you to resolve disputes in your own jurisdiction.",
      },
      {
        question: "Can I cancel a contract once it's signed?",
        answer:
          "Yes, if your contract includes a termination clause. Most contracts allow either party to terminate with written notice (typically 14–30 days). Check your contract for specific terms and any penalties for early termination.",
      },
      {
        question: "What is an indemnification clause?",
        answer:
          "An indemnification clause protects one party from liability for losses caused by the other party. Example: 'The client will indemnify the contractor against any claims arising from the client's use of the deliverables.'",
      },
      {
        question: "Do I need a contract if I'm working with a friend?",
        answer:
          "Yes — especially with friends. Money and unclear expectations are a common source of damaged relationships. A short, friendly written agreement clarifies expectations and gives you both something to refer back to.",
      },
      {
        question: "What happens if a client breaches the contract?",
        answer:
          "Document the breach in writing immediately. Give the client a reasonable opportunity to remedy it. If they do not, you may be entitled to terminate the contract, keep any work completed, and pursue unpaid amounts through small claims court or arbitration.",
      },
      {
        question: "Is an e-signature legally valid?",
        answer:
          "Yes. In the US (ESIGN Act), UK, EU (eIDAS), Australia, India, and most other countries, electronic signatures are legally equivalent to handwritten signatures. Tools like DocuSign, HelloSign, or even a PDF signature are sufficient.",
      },
    ],
    internalLinks: [
      { text: "Freelance Contract Template", href: "/en/templates/contracts/freelance-contract" },
      { text: "NDA Template", href: "/en/templates/contracts/nda-template" },
      { text: "Service Agreement Template", href: "/en/templates/contracts/service-agreement" },
      { text: "Freelance Contract Checklist", href: "/en/blog/freelance-contract-checklist" },
      { text: "NDA Guide", href: "/en/blog/nda-guide-protect-your-business" },
    ],
    relatedFaqs: ["nda-faqs", "freelance-contract-faqs", "employment-contract-faqs", "independent-contractor-faqs"],
  },

  // ── 4 ────────────────────────────────────────────────────────────────────────
  {
    slug: "freelance-invoice-faqs",
    metaTitle: "Freelance Invoice FAQ: 12 Questions Answered",
    metaDescription:
      "How to invoice clients as a freelancer — what to include, when to send, how to handle late payments, and whether you need a tax number. Free invoice templates.",
    h1: "Freelance Invoice FAQ: 12 Questions Answered",
    intro:
      "Invoicing is one of the most important skills for freelancers. Here are straight answers to the most common questions about freelance billing.",
    questions: [
      {
        question: "When should I send an invoice to a client?",
        answer:
          "Send the invoice immediately on completing the work or on the agreed billing date. For milestone projects, send a milestone invoice at each agreed checkpoint. For retainers, invoice on a fixed day each month.",
      },
      {
        question: "How do I invoice a client for the first time?",
        answer:
          "Create an invoice with your name/company, client details, a unique invoice number, the date, an itemized list of services, your rate, tax (if applicable), the total, and payment instructions. Use a template to ensure you don't miss anything.",
      },
      {
        question: "Do I need a company to issue an invoice?",
        answer:
          "No. You can invoice as a sole trader under your personal name. Include your full name, address, and bank details. Some countries require freelancers to register after exceeding an income threshold.",
      },
      {
        question: "How do I invoice international clients?",
        answer:
          "Use the client's currency or agree on USD/EUR. Include your SWIFT/BIC code and IBAN for bank transfers. Use a service like Wise or PayPal for smaller amounts. Note: if you are VAT-registered and your client is in the EU, a reverse-charge mechanism may apply.",
      },
      {
        question: "Should I charge hourly or by project?",
        answer:
          "Project-based pricing is generally better: it rewards efficiency and is easier for clients to budget. Hourly is appropriate for ongoing work with undefined scope. Consider value-based pricing (based on results, not time) for high-impact projects.",
      },
      {
        question: "How do I add late payment fees to my invoices?",
        answer:
          "State your late payment policy in your contract and repeat it on the invoice: 'Invoices unpaid after [X] days accrue a [1.5%] monthly fee'. Check legal limits in your jurisdiction — some countries cap late fees.",
      },
      {
        question: "What is a freelance invoice template?",
        answer:
          "A pre-formatted document with all the required invoice fields ready to fill in — your name, client name, services, rate, and total. A good template ensures professional presentation and includes all legally required information.",
      },
      {
        question: "How should I number my invoices?",
        answer:
          "Use a simple sequential system: INV-001, INV-002, or 2026-001. Alternatively use client initials: ABC-001. Never reuse numbers. Never skip numbers. Sequential invoicing prevents confusion and satisfies most tax authority requirements.",
      },
      {
        question: "What is a deposit invoice?",
        answer:
          "A deposit invoice requests an upfront payment (typically 25–50%) before work begins. It is not a final invoice — a final invoice is issued on project completion for the remaining balance.",
      },
      {
        question: "Do freelancers need to charge VAT or GST?",
        answer:
          "Only if you are registered for VAT/GST. Registration is required once your annual turnover exceeds the threshold in your country (£90,000 in the UK, ₹20 lakh in India, AU$75,000 in Australia). Below the threshold, you cannot charge VAT/GST.",
      },
      {
        question: "What format should I send the invoice in?",
        answer:
          "PDF is the universal standard — it cannot be accidentally edited and looks professional on any device. Some clients require specific formats (CSV, XML for e-invoicing) — confirm before sending.",
      },
      {
        question: "What should I do if a client refuses to pay?",
        answer:
          "Send a final written demand letter. If that fails: report to your country's small claims court (suitable for amounts under £10,000/US$10,000), or hire a debt collection agency. If you had a contract, you have legal standing — always document your communications.",
      },
    ],
    internalLinks: [
      { text: "Freelancer Invoice Template", href: "/en/templates/invoices/invoice-freelancer" },
      { text: "Invoice FAQ", href: "/en/faq/invoice-faqs" },
      { text: "Late Payment Reminder Emails", href: "/en/blog/late-payment-reminder-emails" },
      { text: "Free Invoice Generator", href: "/en/tools/invoice-number-generator" },
      { text: "Hourly Rate Calculator", href: "/en/tools/hourly-rate-calculator" },
    ],
    relatedFaqs: ["invoice-faqs", "gst-invoice-faqs", "invoice-payment-terms-faqs"],
  },

  // ── 5 ────────────────────────────────────────────────────────────────────────
  {
    slug: "nda-faqs",
    metaTitle: "NDA FAQ: 12 Questions About Non-Disclosure Agreements",
    metaDescription:
      "What is an NDA, when do you need one, is it enforceable, and what happens if it's breached? Plain-English answers plus a free NDA template.",
    h1: "NDA FAQ: 12 Non-Disclosure Agreement Questions Answered",
    intro:
      "NDAs protect confidential business information, but they're often misunderstood. Here are answers to the most common NDA questions — no legal jargon.",
    questions: [
      {
        question: "What is an NDA?",
        answer:
          "A Non-Disclosure Agreement (NDA) — also called a confidentiality agreement — is a legal contract in which one or both parties promise not to share specified confidential information with outside parties.",
      },
      {
        question: "When do I need an NDA?",
        answer:
          "Use an NDA whenever you are sharing sensitive information that could harm your business if disclosed — including: business plans, pricing, client lists, unreleased product details, proprietary methods, trade secrets, or financial data.",
      },
      {
        question: "What is the difference between a one-way and mutual NDA?",
        answer:
          "A one-way (unilateral) NDA protects information shared by one party only. A mutual (bilateral) NDA protects information shared by both parties. Use mutual NDAs for partnership discussions; use one-way NDAs when sharing information with a contractor or employee.",
      },
      {
        question: "Is an NDA legally binding?",
        answer:
          "Yes, when it meets the basic requirements of a contract: offer, acceptance, and consideration (something of value, even a promise to keep information confidential). However, NDAs can be challenged if the obligations are too broad, too long, or if the 'confidential information' is not clearly defined.",
      },
      {
        question: "How long does an NDA last?",
        answer:
          "Typically 1–5 years. Some NDAs, particularly for trade secrets, run indefinitely. Make sure the duration is reasonable — courts may reject NDAs with excessively long terms as unenforceable.",
      },
      {
        question: "Can a freelancer or contractor ask me to sign an NDA?",
        answer:
          "Yes. NDAs protect both parties. A contractor may ask you to sign an NDA to protect their methods or client relationships. Review it carefully — ensure it's mutual and that the definition of 'confidential information' is specific.",
      },
      {
        question: "What information can an NDA cover?",
        answer:
          "Business plans, financial records, customer data, software code, designs, manufacturing processes, marketing strategies, trade secrets, and any proprietary information you specifically designate as confidential.",
      },
      {
        question: "What information cannot be covered by an NDA?",
        answer:
          "Information that is already public knowledge, information the receiving party already knew before signing, information learned independently, and information required to be disclosed by law or court order.",
      },
      {
        question: "What happens if someone violates an NDA?",
        answer:
          "The party in breach can be sued for damages (financial losses caused by the breach) and potentially injunctive relief (a court order to stop the disclosure). The damages must be provable — unclear NDAs are difficult to enforce.",
      },
      {
        question: "Does an NDA need to be notarized?",
        answer:
          "No, in most countries. A signed written agreement (including electronic signatures) is sufficient. Notarization is not required for NDAs to be legally binding.",
      },
      {
        question: "Can an NDA stop me from working for a competitor?",
        answer:
          "An NDA alone cannot prevent you from working for a competitor — that's the purpose of a non-compete clause. NDAs only restrict you from sharing confidential information, not from using general knowledge and skills.",
      },
      {
        question: "Where can I get a free NDA template?",
        answer:
          "Templix AI provides a free, professionally drafted NDA template that you can customize and download as PDF or Word — no sign-up required.",
      },
    ],
    internalLinks: [
      { text: "Free NDA Template", href: "/en/templates/contracts/nda-template" },
      { text: "Mutual vs One-Way NDA", href: "/en/blog/mutual-vs-one-way-nda" },
      { text: "NDA Guide — Protect Your Business", href: "/en/blog/nda-guide-protect-your-business" },
      { text: "Contract FAQ", href: "/en/faq/contract-faqs" },
    ],
    relatedFaqs: ["contract-faqs", "freelance-contract-faqs", "independent-contractor-faqs"],
  },

  // ── 6 ────────────────────────────────────────────────────────────────────────
  {
    slug: "ats-resume-faqs",
    metaTitle: "ATS Resume FAQ: Will Your Resume Pass the Bot?",
    metaDescription:
      "Everything job seekers need to know about ATS — how it works, how to format your resume to pass it, which keywords to include, and what ATS cannot read.",
    h1: "ATS Resume FAQ: Will Your Resume Pass the Bot?",
    intro:
      "Most mid-to-large companies use Applicant Tracking Systems to filter resumes before a human sees them. Here's exactly how to make yours pass.",
    questions: [
      {
        question: "What is an ATS (Applicant Tracking System)?",
        answer:
          "An ATS is software that automatically collects, sorts, and ranks job applications based on how well they match the job description. Resumes that don't match are filtered out before a recruiter ever reads them. Estimated 75% of large companies use one.",
      },
      {
        question: "How does ATS rank resumes?",
        answer:
          "Most ATS systems score resumes by matching keywords from the job description to your resume. They also parse your resume into structured data (name, contact, experience, education, skills). Formatting errors can cause parsing failures that make you invisible.",
      },
      {
        question: "What resume format is best for ATS?",
        answer:
          "Single-column, plain formatting. Use standard section headings: Work Experience (not 'Career History'), Education, Skills. Use standard bullet points. Avoid tables, columns, text boxes, headers/footers, and images — ATS often cannot parse these.",
      },
      {
        question: "What fonts are ATS-safe?",
        answer:
          "Calibri, Arial, Helvetica, Times New Roman, or Georgia. Standard fonts parse cleanly. Avoid custom or decorative fonts.",
      },
      {
        question: "Should I submit a PDF or Word document for ATS?",
        answer:
          "When given a choice, Word (.docx) parses more consistently across ATS systems. However, most modern ATS can read PDF. Check the job posting — if it requests one format, follow that.",
      },
      {
        question: "How do I find the right keywords for my resume?",
        answer:
          "Read the job description carefully. Note repeated words and required skills. Mirror the exact language the employer uses (e.g. if they say 'project management', use 'project management', not 'managing projects'). Paste the job description into a keyword tool or use Templix AI's ATS Checker.",
      },
      {
        question: "Can ATS read my resume if I use a table or columns?",
        answer:
          "Often not. Tables and multi-column layouts confuse most ATS parsers, causing your skills and experience to be read in the wrong order or skipped entirely. Always test with a single-column format.",
      },
      {
        question: "How do I check if my resume is ATS-friendly?",
        answer:
          "Use Templix AI's free ATS Resume Checker — paste your resume and the job description, and get a compatibility score with specific suggestions for improvement.",
      },
      {
        question: "Do ATS systems read cover letters?",
        answer:
          "Some do, some don't. Most ATS focus on the resume. However, include a cover letter if the posting requests one — a human will read it after you pass the ATS filter.",
      },
      {
        question: "How long does ATS store my resume?",
        answer:
          "Most ATS retain applications for 1–2 years. Some companies re-surface candidates from their ATS database when new roles open — another reason to optimize your resume.",
      },
    ],
    internalLinks: [
      { text: "ATS Resume Checker", href: "/en/tools/resume-ats-checker" },
      { text: "ATS Resume Format Guide", href: "/en/blog/ats-resume-format-guide" },
      { text: "Free Resume Templates", href: "/en/templates/resumes" },
      { text: "Resume FAQ", href: "/en/faq/resume-faqs" },
    ],
    relatedFaqs: ["resume-faqs", "resume-format-faqs", "cover-letter-faqs"],
  },

  // ── 7 ────────────────────────────────────────────────────────────────────────
  {
    slug: "cover-letter-faqs",
    metaTitle: "Cover Letter FAQ: 12 Common Questions Answered",
    metaDescription:
      "Does a cover letter matter in 2026? How long should it be? What to include? Answers to the 12 most common cover letter questions, plus free templates.",
    h1: "Cover Letter FAQ: 12 Common Questions Answered",
    intro:
      "Cover letters are still read — and still make a difference. Here are honest answers to every question candidates ask about writing one.",
    questions: [
      {
        question: "Do I still need a cover letter in 2026?",
        answer:
          "Yes, when it's requested or when you have relevant things to say that don't fit your resume (career change, relocation, passion for the company). If the posting says 'optional', include one — it's a low-effort way to stand out when others skip it.",
      },
      {
        question: "How long should a cover letter be?",
        answer:
          "3–4 short paragraphs, under 400 words, fitting one page. Recruiters are busy — a long cover letter signals poor communication skills.",
      },
      {
        question: "How should I start a cover letter?",
        answer:
          "With a strong opening line that references the specific role and company, and immediately states why you are a strong fit. Avoid: 'I am writing to express my interest in the [role] position at [company].' Everyone writes that.",
      },
      {
        question: "Should I address my cover letter to a specific person?",
        answer:
          "Yes. Research the hiring manager's name on LinkedIn or the company website. 'Dear [Name]' is more professional than 'Dear Hiring Manager'. If you genuinely cannot find a name, 'Dear Hiring Team' is acceptable.",
      },
      {
        question: "What should a cover letter include?",
        answer:
          "Opening: your name, role you're applying for, 1–2 sentence hook. Body paragraph 1: your most relevant experience and what you bring. Body paragraph 2: why this company specifically. Closing: call to action — request an interview, thank them.",
      },
      {
        question: "Should I repeat what's on my resume?",
        answer:
          "No. Your cover letter should complement your resume, not copy it. Use it to give context, tell a short story about a key achievement, or explain something that your resume can't (a gap, a career change, a passion for the company).",
      },
      {
        question: "Can I use AI to write my cover letter?",
        answer:
          "Yes, as a first draft. Then customize it to sound like you, add specific details about the company, and remove any generic phrases. Recruiters can recognize purely AI-generated letters — your voice and specifics are what make it work.",
      },
      {
        question: "What if the job posting doesn't ask for a cover letter?",
        answer:
          "Include one anyway if you have something genuinely useful to add. Submit it as a combined document with your resume, or paste it into the application form's text field if provided.",
      },
      {
        question: "Should I explain employment gaps in a cover letter?",
        answer:
          "Only if the gap is recent and longer than 6 months. Be brief and positive: 'I took a planned career break in 2024 to [reason] and am now ready to bring fresh perspective to a new role.' Never apologize.",
      },
      {
        question: "What mistakes should I avoid in a cover letter?",
        answer:
          "1) Spelling the company name wrong. 2) Not customizing (obvious generic template). 3) Repeating your resume word for word. 4) Starting every sentence with 'I'. 5) Writing more than one page. 6) Forgetting to attach your resume.",
      },
      {
        question: "Should I include my salary expectations in a cover letter?",
        answer:
          "Only if the job posting specifically requests it. If you must include it, give a range based on market research and note it's negotiable.",
      },
      {
        question: "Where can I get a free cover letter template?",
        answer:
          "Templix AI has free, ATS-friendly cover letter templates you can customize and download as PDF or Word — no account needed.",
      },
    ],
    internalLinks: [
      { text: "Free Cover Letter Template", href: "/en/templates/letters/cover-letter" },
      { text: "AI Cover Letter Generator", href: "/en/blog/ai-cover-letter-generator-guide" },
      { text: "Best Cover Letter Examples", href: "/en/blog/best-cover-letter-examples" },
      { text: "Cover Letter for Freshers", href: "/en/blog/cover-letter-for-freshers" },
      { text: "Resume FAQ", href: "/en/faq/resume-faqs" },
    ],
    relatedFaqs: ["resume-faqs", "ats-resume-faqs", "recommendation-letter-faqs"],
  },

  // ── 8 ────────────────────────────────────────────────────────────────────────
  {
    slug: "invoice-payment-terms-faqs",
    metaTitle: "Invoice Payment Terms FAQ: Net 30, Net 15 & More",
    metaDescription:
      "What do Net 30, 2/10 Net 30, COD, and PIA mean? How do you choose the right payment terms? Plain-English answers to the most common payment terms questions.",
    h1: "Invoice Payment Terms FAQ: What They Mean & Which to Use",
    intro:
      "Payment terms define when and how clients pay you. Choosing the right terms can dramatically reduce late payments. Here's everything you need to know.",
    questions: [
      {
        question: "What does Net 30 mean on an invoice?",
        answer:
          "Net 30 means the invoice is due 30 days from the invoice date. If you invoice on July 1, payment is due by July 31. It is the most common payment term for B2B transactions.",
      },
      {
        question: "What does Net 15 and Net 60 mean?",
        answer:
          "Net 15: payment due 15 days from invoice date (faster — preferred by freelancers). Net 60: payment due 60 days from invoice date (common with large corporations and government).",
      },
      {
        question: "What does '2/10 Net 30' mean?",
        answer:
          "2/10 Net 30 means: the buyer gets a 2% discount if they pay within 10 days; otherwise the full amount is due in 30 days. It incentivizes early payment.",
      },
      {
        question: "What is the best payment term for freelancers?",
        answer:
          "Net 7 or Net 14. The shorter your terms, the faster you get paid. Most clients will accept short terms if stated clearly upfront. Pair shorter terms with a deposit requirement for new clients.",
      },
      {
        question: "What does 'Due on Receipt' mean?",
        answer:
          "Due on Receipt (also DOR or 'Payable Immediately') means payment is expected as soon as the invoice is received — within 24–48 hours. Used for smaller transactions or clients with a history of slow payment.",
      },
      {
        question: "What is a COD payment term?",
        answer:
          "COD (Cash on Delivery / Cash on Demand) means payment is made at the point of delivery. Common in product-based businesses and logistics. Rare in service-based freelance work.",
      },
      {
        question: "What is PIA (Payment in Advance)?",
        answer:
          "PIA means the client pays before work begins. Used for new clients, high-risk projects, or rush orders. Reduces risk of non-payment but may lose clients who aren't comfortable paying upfront.",
      },
      {
        question: "Can I charge interest on late invoices?",
        answer:
          "Yes, if your contract or invoice states it. Common rates are 1.5–2% per month on the overdue balance. In the UK, the Late Payment of Commercial Debts Act allows 8% above the Bank of England base rate. Always state the terms before work begins.",
      },
      {
        question: "What is a retainer payment?",
        answer:
          "A retainer is a recurring advance payment made by a client to secure your availability and services each month. Typically invoiced at the start of each month for a fixed fee.",
      },
      {
        question: "How do I enforce my payment terms?",
        answer:
          "State them clearly on your invoice and in your contract. Send payment reminders at 7, 14, and 30 days past due. Charge late fees as stated. For persistent non-payers, send a formal demand letter, then consider small claims court.",
      },
    ],
    internalLinks: [
      { text: "Net 30 Payment Terms Explained", href: "/en/blog/net-30-payment-terms-explained" },
      { text: "Late Payment Reminder Emails", href: "/en/blog/late-payment-reminder-emails" },
      { text: "Invoice FAQ", href: "/en/faq/invoice-faqs" },
      { text: "Freelance Invoice Template", href: "/en/templates/invoices/invoice-freelancer" },
    ],
    relatedFaqs: ["invoice-faqs", "freelance-invoice-faqs"],
  },

  // ── 9 ────────────────────────────────────────────────────────────────────────
  {
    slug: "business-proposal-faqs",
    metaTitle: "Business Proposal FAQ: 12 Key Questions Answered",
    metaDescription:
      "What is a business proposal, how long should it be, what's the difference from a business plan? 12 straight answers plus free proposal templates.",
    h1: "Business Proposal FAQ: 12 Questions About Writing Proposals",
    intro:
      "A well-written proposal is one of the most powerful tools for winning clients and funding. Here are the most common questions — answered directly.",
    questions: [
      {
        question: "What is a business proposal?",
        answer:
          "A business proposal is a document sent to a potential client or partner that outlines how your product or service solves their problem, what it costs, and why you are the right choice. Unlike a business plan, it is client-facing and persuasive.",
      },
      {
        question: "What is the difference between a business proposal and a business plan?",
        answer:
          "A business plan is an internal document outlining your company's strategy, operations, and financial projections — used for investors or internal planning. A business proposal is external, addressed to a specific client, and focused on winning a specific contract.",
      },
      {
        question: "What is the difference between a solicited and unsolicited proposal?",
        answer:
          "A solicited proposal responds to an RFP (Request for Proposal) — the client has asked for proposals. An unsolicited proposal is sent proactively to a prospect who has not formally requested one.",
      },
      {
        question: "How long should a business proposal be?",
        answer:
          "Typically 4–12 pages, depending on project complexity. Simple service proposals: 4–6 pages. Complex projects (construction, IT, consulting): 10–20 pages. Grant proposals can be 20–50 pages with appendices.",
      },
      {
        question: "What must a business proposal include?",
        answer:
          "Executive summary, statement of the client's problem, your proposed solution, deliverables and timeline, pricing, proof (case studies, credentials), terms and conditions, and a clear call to action.",
      },
      {
        question: "What is an executive summary in a proposal?",
        answer:
          "A 1-page summary at the beginning of the proposal that states: the client's problem, your solution, the key benefits, and the investment required. It is the most-read section — many decision-makers read only this.",
      },
      {
        question: "How do I price my services in a proposal?",
        answer:
          "Option 1: Fixed price (clear scope). Option 2: Hourly rate with estimated hours. Option 3: Tiered pricing (basic/standard/premium packages). Always include what is and is not included in the price. Never quote without understanding the full scope.",
      },
      {
        question: "How do I write a proposal for someone who hasn't asked for one?",
        answer:
          "Research their business, identify a clear problem you can solve, and open with a statement of that problem — not a pitch about yourself. Show you understand their situation before presenting your solution.",
      },
      {
        question: "What is a statement of work and is it the same as a proposal?",
        answer:
          "A proposal is persuasive — it sells your solution. A statement of work (SOW) is operational — it defines exactly what will be delivered, when, and how. A proposal often leads to a SOW; they serve different purposes.",
      },
      {
        question: "How do I follow up after sending a proposal?",
        answer:
          "Wait 3–5 business days, then send a brief, polite follow-up email confirming receipt and asking if they have questions. Don't be pushy — one follow-up is professional; multiple unsolicited follow-ups are not.",
      },
      {
        question: "Can I use a template for a business proposal?",
        answer:
          "Yes — templates give you a proven structure so you don't miss critical sections. Always customize the content completely for each client. A template is a scaffold, not the proposal itself.",
      },
      {
        question: "What is the best proposal format — PDF or Word?",
        answer:
          "PDF for sending — it looks polished on any device and cannot be accidentally edited. Word/DOCX for editing and version control internally. Templix AI lets you export your proposal as both.",
      },
    ],
    internalLinks: [
      { text: "Business Proposal Template", href: "/en/templates/proposals/business-proposal" },
      { text: "How to Write a Business Proposal", href: "/en/blog/how-to-write-a-business-proposal" },
      { text: "Consulting Proposal Template", href: "/en/templates/proposals/consulting-proposal" },
      { text: "Proposal FAQ", href: "/en/faq/proposal-faqs" },
    ],
    relatedFaqs: ["proposal-faqs", "statement-of-work-faqs", "scope-creep-faqs"],
  },

  // ── 10 ───────────────────────────────────────────────────────────────────────
  {
    slug: "pdf-tools-faqs",
    metaTitle: "PDF Tools FAQ: Merge, Split, Convert — Free & Online",
    metaDescription:
      "How to merge, split, convert, and compress PDFs for free — plus answers to the most common PDF tool questions. All tools run in your browser, no upload needed.",
    h1: "PDF Tools FAQ: Merge, Split, Convert — Free & Online",
    intro:
      "Templix AI's PDF tools run entirely in your browser — nothing is uploaded to a server. Here are answers to the most common questions.",
    questions: [
      {
        question: "How do I merge PDF files for free?",
        answer:
          "Use the free Merge PDF tool on Templix AI. Select your PDF files, arrange them in order, and click Merge. The combined PDF downloads instantly. No account needed, no file size limit (processed locally).",
      },
      {
        question: "How do I split a PDF into separate pages?",
        answer:
          "Use the Split PDF tool. Upload your PDF, select the page ranges you want to split, and download individual files. Works entirely in your browser.",
      },
      {
        question: "How do I convert a JPG image to PDF?",
        answer:
          "Use the JPG to PDF tool. Upload your image (JPG, PNG, WebP), and it converts instantly to a PDF. You can select page size and orientation.",
      },
      {
        question: "How do I convert a PDF to Word?",
        answer:
          "Use the PDF to Word converter. Upload your PDF and download an editable Word (.docx) file. Best results with text-based PDFs — scanned documents may need OCR.",
      },
      {
        question: "Is it safe to convert my PDF online?",
        answer:
          "Yes — Templix AI's PDF tools run entirely in your browser using JavaScript. Your files are never uploaded to a server and are not stored anywhere. Your documents stay on your device.",
      },
      {
        question: "Can I compress a PDF to reduce the file size?",
        answer:
          "Yes. The PDF Compress tool reduces file size by compressing embedded images while maintaining document quality. Ideal for emailing large files.",
      },
      {
        question: "Can I convert a PDF to JPG?",
        answer:
          "Yes. The PDF to JPG tool converts each page of your PDF into a high-resolution JPG image. Download individual pages or all pages as a ZIP.",
      },
      {
        question: "Do I need to create an account to use the PDF tools?",
        answer:
          "No. All PDF tools are completely free with no sign-up required.",
      },
      {
        question: "What is the maximum file size I can process?",
        answer:
          "Because everything runs in your browser, the limit depends on your device's RAM. Most modern devices handle PDFs up to 100–200MB without issues.",
      },
      {
        question: "Can I use these tools on my phone?",
        answer:
          "Yes. All PDF tools work on mobile browsers (Chrome, Safari, Firefox). The interface is fully responsive.",
      },
    ],
    internalLinks: [
      { text: "Merge PDF Tool", href: "/en/tools/merge-pdf" },
      { text: "Split PDF Tool", href: "/en/tools/split-pdf" },
      { text: "JPG to PDF Converter", href: "/en/tools/jpg-to-pdf" },
      { text: "PDF to Word Converter", href: "/en/blog/how-to-convert-pdf-to-word" },
      { text: "Word vs PDF Guide", href: "/en/faq/word-vs-pdf-faqs" },
    ],
    relatedFaqs: ["word-vs-pdf-faqs", "invoice-vs-receipt-faqs"],
  },

  // ── 11 ───────────────────────────────────────────────────────────────────────
  {
    slug: "word-vs-pdf-faqs",
    metaTitle: "Word vs PDF: Which Format Should You Use?",
    metaDescription:
      "Should you send a Word document or a PDF? When to use each format for invoices, resumes, contracts, and proposals — answered clearly.",
    h1: "Word vs PDF: Which Format Should You Use?",
    intro:
      "The format you send your document in matters more than most people think. Here's a clear guide for every common document type.",
    questions: [
      {
        question: "What is the main difference between Word and PDF?",
        answer:
          "Word (.docx) is an editable format — anyone can open and modify the content. PDF (Portable Document Format) is a fixed layout — the formatting stays identical on any device and cannot be easily edited.",
      },
      {
        question: "Which format should I use for an invoice?",
        answer:
          "PDF. It looks professional, cannot be accidentally edited by the recipient, and is universally readable. Most accounting software also accepts PDF invoices for record-keeping.",
      },
      {
        question: "Should I send my resume as PDF or Word?",
        answer:
          "When given a choice: Word (.docx) for online applications (better ATS compatibility). PDF for emailed applications and networking (preserves your formatting perfectly). If the job posting specifies a format, use that.",
      },
      {
        question: "Which format is best for contracts?",
        answer:
          "PDF after final agreement. Send a Word version for negotiation/review, then convert to PDF before signing. Once signed, store as PDF — it's tamper-evident and universally accepted.",
      },
      {
        question: "Can I convert between Word and PDF?",
        answer:
          "Yes. Use Templix AI's free converter tools — PDF to Word and Word to PDF — all running in your browser.",
      },
      {
        question: "Is PDF or Word better for ATS?",
        answer:
          "Word (.docx) parses more consistently in most ATS systems. Some older ATS software struggles with PDF formatting. Unless the employer specifies PDF, Word is safer for online job applications.",
      },
      {
        question: "Why does my PDF look different on different devices?",
        answer:
          "If you converted from Word with embedded fonts missing on the recipient's device, the layout may shift. Export with embedded fonts (the default in most PDF converters) to prevent this.",
      },
      {
        question: "Which format is better for proposals?",
        answer:
          "PDF for sending to clients — it looks polished and preserves your design. Internally, use Word for collaborative editing until the proposal is finalized.",
      },
    ],
    internalLinks: [
      { text: "PDF vs Word Guide", href: "/en/blog/pdf-vs-word-which-format" },
      { text: "PDF to Word Converter", href: "/en/blog/how-to-convert-pdf-to-word" },
      { text: "PDF Tools FAQ", href: "/en/faq/pdf-tools-faqs" },
      { text: "Free Invoice Template (PDF + Word)", href: "/en/templates/invoices/invoice-freelancer" },
    ],
    relatedFaqs: ["pdf-tools-faqs", "invoice-faqs", "resume-faqs"],
  },

  // ── 12 ───────────────────────────────────────────────────────────────────────
  {
    slug: "freelance-contract-faqs",
    metaTitle: "Freelance Contract FAQ: 12 Things Every Freelancer Asks",
    metaDescription:
      "Everything freelancers need to know about contracts — what to include, when to use one, how to handle changes, and where to get a free template.",
    h1: "Freelance Contract FAQ: 12 Things Every Freelancer Asks",
    intro:
      "A freelance contract protects your income and sets clear expectations. Here are the 12 questions freelancers ask most — with direct answers.",
    questions: [
      {
        question: "Do I need a contract for every freelance project?",
        answer:
          "Yes — even for small projects. A brief one-page agreement is better than no agreement. For ongoing clients you trust, a master service agreement covering all future work is efficient.",
      },
      {
        question: "What's the minimum a freelance contract must include?",
        answer:
          "At minimum: scope of work, total fee, payment schedule, deadline, and what happens if either party wants to cancel. Even these basics prevent most disputes.",
      },
      {
        question: "Who should write the contract — me or the client?",
        answer:
          "Whenever possible, you should write the contract. The party who drafts the contract controls the language. If a client sends their contract, read it carefully — especially clauses on IP ownership, payment, and termination.",
      },
      {
        question: "How do I handle changes to the scope after signing?",
        answer:
          "Use a change order or amendment — a brief written document that both parties sign, describing the new work and the additional fee. Never do out-of-scope work without written agreement.",
      },
      {
        question: "What is a kill fee and should I include one?",
        answer:
          "A kill fee is a payment the client owes if they cancel a project after work has begun. Yes — always include it. A common formula: 25% of remaining project fee for projects less than 50% complete; 50% for projects more than 50% complete.",
      },
      {
        question: "Who owns the work I create?",
        answer:
          "You do, by default — in most countries, the creator retains intellectual property rights. Rights only transfer to the client if your contract explicitly states it. If you want to keep a portfolio right, specify that in the contract.",
      },
      {
        question: "Can I use a template contract without a lawyer?",
        answer:
          "Yes for most standard freelance work. Customize the scope, payment terms, and governing law. For contracts above $10,000–$20,000 or for highly specialized work (pharmaceutical, legal, government), legal review is advisable.",
      },
      {
        question: "What is a limitation of liability clause?",
        answer:
          "A clause that caps your financial exposure if something goes wrong. Example: 'The contractor's liability shall not exceed the total fees paid for the project.' Without it, you could theoretically be sued for far more than you were paid.",
      },
      {
        question: "What happens if a client won't sign my contract?",
        answer:
          "Do not start work without a signed agreement. Offer a simplified version if they object to complexity. If a client refuses any contract, consider it a warning sign.",
      },
      {
        question: "Can I use an e-signature on a freelance contract?",
        answer:
          "Yes. Electronic signatures (DocuSign, HelloSign, PDF signature, or even a typed name in an email) are legally valid in the US, UK, EU, Australia, India, and most other countries.",
      },
      {
        question: "What is a non-solicitation clause?",
        answer:
          "A clause that prevents the client from hiring your employees or subcontractors directly, bypassing you, for a specified period (typically 12–24 months). Include it if you use subcontractors.",
      },
      {
        question: "Where can I get a free freelance contract?",
        answer:
          "Templix AI offers a professionally drafted, customizable freelance contract template — download as PDF or Word, no sign-up required.",
      },
    ],
    internalLinks: [
      { text: "Freelance Contract Template", href: "/en/templates/contracts/freelance-contract" },
      { text: "Freelance Contract Checklist", href: "/en/blog/freelance-contract-checklist" },
      { text: "Service Agreement Template", href: "/en/templates/contracts/service-agreement" },
      { text: "Contract FAQ", href: "/en/faq/contract-faqs" },
    ],
    relatedFaqs: ["contract-faqs", "independent-contractor-faqs", "statement-of-work-faqs"],
  },

  // ── 13–35: Stub entries (short Q&A sets, full expansion in Sprint 2) ─────────
  {
    slug: "gst-invoice-faqs",
    metaTitle: "GST Invoice FAQ: 12 Common Questions (India)",
    metaDescription:
      "What to include on a GST invoice, when to charge IGST vs CGST/SGST, who needs to issue a GST invoice, and how to download a free GST invoice template.",
    h1: "GST Invoice FAQ: 12 Common Questions Answered",
    intro: "GST invoicing rules in India can be confusing. Here are clear answers to the questions businesses and freelancers ask most.",
    questions: [
      { question: "Who is required to issue a GST invoice?", answer: "Any GST-registered business supplying taxable goods or services must issue a GST-compliant tax invoice. Unregistered suppliers (below ₹20 lakh threshold) issue regular invoices without GST." },
      { question: "What must a GST invoice include?", answer: "Supplier GSTIN, invoice number (unique per financial year), invoice date, recipient's name and GSTIN (for B2B), description of goods/services, HSN/SAC code, taxable value, GST rate, CGST/SGST or IGST amount, and total invoice value." },
      { question: "What is the difference between CGST, SGST, and IGST?", answer: "Intra-state supply (same state): CGST + SGST split equally (e.g., 18% GST = 9% CGST + 9% SGST). Inter-state supply (different states or export): IGST at the full rate (e.g., 18% IGST)." },
      { question: "What is an HSN code on a GST invoice?", answer: "HSN (Harmonized System of Nomenclature) is a 6–8 digit code that classifies goods for GST. SAC codes classify services. Businesses with turnover above ₹5 crore must include 6-digit HSN codes." },
      { question: "When must a GST invoice be issued?", answer: "For goods: within 30 days of supply. For continuous supply of goods: within 30 days of agreed billing date. For services: within 30 days of supply (45 days for banking and insurance)." },
      { question: "What is a bill of supply?", answer: "A bill of supply is issued instead of a tax invoice when GST is not applicable — e.g., for exempt goods/services or by a composition scheme dealer." },
      { question: "What is a delivery challan?", answer: "A document accompanying goods in transit that do not yet have an invoice — e.g., goods sent for job work, consignment, or exhibition." },
      { question: "Can I issue a GST invoice without a computer?", answer: "Yes. You can issue a handwritten GST invoice as long as it includes all required fields. However, digital/typed invoices are standard and required for e-invoicing above ₹5 crore threshold." },
      { question: "What is e-invoicing under GST?", answer: "E-invoicing is mandatory for businesses with AATO above ₹5 crore. Invoices must be reported to the Invoice Registration Portal (IRP) before sharing with the buyer. The IRP generates an IRN (Invoice Reference Number) and QR code." },
      { question: "How do I create a GST invoice for free?", answer: "Use Templix AI's free GST Invoice Template — includes all required fields (GSTIN, HSN/SAC, CGST/SGST/IGST), exportable to PDF and Word, no sign-up." },
      { question: "What is the GST invoice number format?", answer: "Must be unique for each financial year, alphanumeric, up to 16 characters, and sequential. Example: INV/2026-27/001. You cannot use the same number in two consecutive years." },
      { question: "What happens if I issue an incorrect GST invoice?", answer: "Issue a credit note (to reduce the amount) or debit note (to increase the amount), referencing the original invoice. Do not cancel and reissue with the same number." },
    ],
    internalLinks: [
      { text: "Free GST Invoice Template", href: "/en/templates/invoices/gst-invoice-format" },
      { text: "GST Invoice Guide for Freelancers", href: "/en/blog/gst-invoice-format-for-freelancers" },
      { text: "GST Calculator", href: "/en/tools/gst-calculator" },
      { text: "GST Rates in India Explained", href: "/en/blog/gst-rates-in-india-explained" },
    ],
    relatedFaqs: ["invoice-faqs", "freelance-invoice-faqs", "invoice-payment-terms-faqs"],
  },

  {
    slug: "employment-contract-faqs",
    metaTitle: "Employment Contract FAQ: 12 Questions for Employers & Employees",
    metaDescription: "What is an employment contract, what must it include, can it be verbal, and when can it be changed? 12 clear answers plus a free template.",
    h1: "Employment Contract FAQ: What Employers and Employees Need to Know",
    intro: "Employment contracts define the terms of a working relationship. These are the 12 most common questions from both sides of the table.",
    questions: [
      { question: "What is an employment contract?", answer: "A legally binding agreement between an employer and employee that sets out the terms of the employment — including job title, salary, hours, benefits, notice period, and any restrictive covenants." },
      { question: "Is a verbal employment contract valid?", answer: "Verbal contracts are technically binding in many countries, but almost impossible to enforce because there is no written record. Always use a written contract." },
      { question: "What must an employment contract include?", answer: "Minimum requirements vary by country. In most: employer and employee names, job title and description, start date, salary and payment schedule, working hours, holiday entitlement, notice period, and place of work." },
      { question: "Can an employer change an employment contract?", answer: "Only with the employee's consent. Unilateral changes are usually unlawful. Major changes (salary, role, location) require a new agreement or formal consultation." },
      { question: "What is a probation period?", answer: "A trial period (typically 1–6 months) during which either party can terminate the contract with shorter notice. Performance is reviewed at the end of the probation period." },
      { question: "What is a fixed-term contract?", answer: "A contract with a defined end date. On expiry, it ends automatically without notice (unless renewed). Employees on fixed-term contracts often have the same rights as permanent employees." },
      { question: "What is a zero-hours contract?", answer: "A contract with no guaranteed hours. The employer can offer work when needed; the employee can accept or decline. Common in hospitality, retail, and gig economy. Legal in most countries but controversial." },
      { question: "What is a non-compete clause in an employment contract?", answer: "A clause that restricts the employee from working for a competitor for a defined period after leaving. Enforceability varies by country and must be reasonable in scope, geography, and duration." },
      { question: "What is the difference between an employee and a contractor?", answer: "An employee works under the employer's direction and receives benefits (sick pay, holiday, pension contributions). A contractor is self-employed, controls their own methods, and is responsible for their own taxes." },
      { question: "What happens when an employment contract expires?", answer: "If not renewed, the employment ends on the contract end date. If both parties continue working, a new or rolling contract is typically implied. Address renewals in writing before expiry." },
      { question: "Can I negotiate an employment contract?", answer: "Yes. Salary, start date, notice period, and remote work provisions are commonly negotiated. Review carefully before signing — especially IP assignment and restrictive covenants." },
      { question: "Where can I download a free employment contract template?", answer: "Templix AI offers a free, professionally drafted employment contract template customizable for your jurisdiction — download as PDF or Word." },
    ],
    internalLinks: [
      { text: "Employment Contract Template", href: "/en/templates/contracts/employment-contract" },
      { text: "Employment Contract Guide", href: "/en/blog/employment-contract-guide" },
      { text: "Offer Letter Template", href: "/en/templates/letters/offer-letter" },
      { text: "Independent Contractor FAQ", href: "/en/faq/independent-contractor-faqs" },
    ],
    relatedFaqs: ["contract-faqs", "independent-contractor-faqs", "offer-letter-faqs"],
  },

  {
    slug: "independent-contractor-faqs",
    metaTitle: "Independent Contractor FAQ: 10 Key Questions Answered",
    metaDescription: "What makes someone an independent contractor, how do taxes work, and what's the difference from an employee? 10 clear answers for contractors and clients.",
    h1: "Independent Contractor FAQ: 10 Key Questions",
    intro: "Understanding contractor vs employee status is critical for both parties. Misclassification can result in significant legal and tax penalties.",
    questions: [
      { question: "What is an independent contractor?", answer: "An independent contractor is a self-employed person who provides services to clients under a contract, without being on their payroll. They control how and when they work, use their own tools, and pay their own taxes." },
      { question: "What is the difference between an employee and an independent contractor?", answer: "Key differences: employees work under employer direction and receive benefits; contractors control their methods and are responsible for their own taxes, insurance, and equipment." },
      { question: "What taxes does an independent contractor pay?", answer: "Self-employment tax (Social Security + Medicare in the US), income tax on net profit, and any applicable state taxes. Contractors typically pay quarterly estimated taxes." },
      { question: "What is a W-9 form?", answer: "A US tax form that independent contractors complete to provide their taxpayer information to clients. Clients use this to issue a 1099-NEC at year end if they paid the contractor $600 or more." },
      { question: "What is a 1099 form?", answer: "A US information return (1099-NEC) that clients issue to contractors who were paid $600 or more in a year. Contractors use this to report income on their tax return." },
      { question: "Can an independent contractor work for multiple clients?", answer: "Yes — this is one of the defining characteristics of contractor status. If a client restricts you from working for others, this may indicate an employment relationship." },
      { question: "What is contractor misclassification?", answer: "When a company treats an employee as an independent contractor to avoid paying benefits, payroll taxes, and other employer obligations. This is illegal in most countries and subject to significant penalties." },
      { question: "Do independent contractors get benefits?", answer: "No — not from clients. Contractors are responsible for their own health insurance, retirement savings, paid leave, and other benefits typically provided by employers." },
      { question: "Do I need a contract as an independent contractor?", answer: "Yes — always. An independent contractor agreement protects your IP rights, payment terms, and scope of work. It also helps establish your contractor status in case of an audit." },
      { question: "Where can I get a free independent contractor agreement?", answer: "Templix AI offers a free independent contractor agreement template — download as PDF or Word, customizable for your jurisdiction, no sign-up." },
    ],
    internalLinks: [
      { text: "Independent Contractor Agreement Template", href: "/en/templates/contracts/independent-contractor-agreement" },
      { text: "Employee vs Independent Contractor", href: "/en/blog/employee-vs-independent-contractor" },
      { text: "Freelancer Tax Forms W-9 & W-8BEN", href: "/en/blog/freelancer-tax-forms-w9-w8ben" },
      { text: "Contract FAQ", href: "/en/faq/contract-faqs" },
    ],
    relatedFaqs: ["contract-faqs", "freelance-contract-faqs", "employment-contract-faqs"],
  },

  {
    slug: "offer-letter-faqs",
    metaTitle: "Offer Letter FAQ: Writing, Accepting & Negotiating",
    metaDescription: "What is a job offer letter, what should it include, is it legally binding, and how do you negotiate one? 10 clear answers plus a free template.",
    h1: "Offer Letter FAQ: 10 Questions About Job Offer Letters",
    intro: "An offer letter is the first formal document in an employment relationship. Here are the questions candidates and employers ask most.",
    questions: [
      { question: "What is a job offer letter?", answer: "A formal written offer from an employer to a candidate, confirming the position, salary, start date, and key terms of employment. It is typically sent after verbal acceptance and before the formal employment contract." },
      { question: "Is an offer letter legally binding?", answer: "In most countries, a signed offer letter can be legally binding if it contains the essential terms of employment. However, it is usually less detailed than a full employment contract, which is issued separately." },
      { question: "What should an offer letter include?", answer: "Job title, department, start date, full-time/part-time status, salary and pay schedule, probation period, benefits summary, at-will employment statement (if applicable), and offer expiry date." },
      { question: "What is the difference between an offer letter and an appointment letter?", answer: "An offer letter is conditional — the candidate must accept it. An appointment letter confirms the appointment after the candidate has accepted and may include additional details about the role." },
      { question: "How long do I have to respond to a job offer?", answer: "Typically 24–72 hours, unless the employer states otherwise. If you need more time, ask politely — most employers will give you a few extra days." },
      { question: "Can I negotiate a job offer after receiving the offer letter?", answer: "Yes. Salary, start date, remote work, and signing bonus are common negotiation points. Negotiate before signing — once signed, it is harder to revisit." },
      { question: "What happens if I accept and then change my mind?", answer: "You may withdraw acceptance before starting, but this could damage your professional reputation and, in some jurisdictions, expose you to liability if the employer has rescinded other offers based on your acceptance." },
      { question: "What is a conditional job offer?", answer: "An offer that is contingent on passing certain conditions — a background check, drug test, reference checks, or proof of eligibility to work. The offer becomes unconditional once these are cleared." },
      { question: "Can an employer rescind a job offer?", answer: "Yes, typically — before a formal contract is signed. An employer may rescind if the candidate fails background checks, if the role is eliminated, or if the candidate behaved unprofessionally. In some jurisdictions, rescinding a confirmed offer may entitle the candidate to damages." },
      { question: "Where can I get a free offer letter template?", answer: "Templix AI has a professionally drafted offer letter template — download as PDF or Word, customizable, no sign-up required." },
    ],
    internalLinks: [
      { text: "Offer Letter Template", href: "/en/templates/letters/offer-letter" },
      { text: "Offer Letter vs Appointment Letter", href: "/en/blog/offer-letter-vs-appointment-letter" },
      { text: "How to Write a Job Offer Letter", href: "/en/blog/how-to-write-a-job-offer-letter" },
      { text: "Employment Contract FAQ", href: "/en/faq/employment-contract-faqs" },
    ],
    relatedFaqs: ["employment-contract-faqs", "experience-letter-faqs", "resignation-letter-faqs"],
  },

  {
    slug: "experience-letter-faqs",
    metaTitle: "Experience Letter FAQ: 10 Common Questions Answered",
    metaDescription: "What is an experience letter, who issues it, what must it include, and can you ask for one after leaving? 10 straight answers plus a free template.",
    h1: "Experience Letter FAQ: 10 Questions About Experience Certificates",
    intro: "An experience letter confirms your employment history and is often required for background checks, visa applications, and new employers. Here are the key questions answered.",
    questions: [
      { question: "What is an experience letter?", answer: "An experience letter (or experience certificate) is an official document issued by an employer that confirms an employee's period of employment, designation, and performance. It serves as formal proof of work history." },
      { question: "What is the difference between an experience letter and a relieving letter?", answer: "An experience letter confirms the duration and nature of employment. A relieving letter confirms that the employee has been formally relieved of duties and has completed handover obligations. They are often issued together." },
      { question: "What must an experience letter include?", answer: "Employee name, designation, department, date of joining, date of leaving, key responsibilities (brief), performance statement (optional), company letterhead, authorized signatory name and designation, and company seal." },
      { question: "Is an employer obligated to provide an experience letter?", answer: "In India and many other countries, employers are legally or customarily obligated to provide an experience letter upon request. Refusing without cause is considered a breach of professional ethics." },
      { question: "Can I ask for an experience letter after leaving a company?", answer: "Yes. Contact HR in writing, state your employment dates and designation, and request the letter. Most companies will process it within 7–14 business days." },
      { question: "What if my employer refuses to give me an experience letter?", answer: "Escalate to senior HR or legal. In India, you can file a complaint with the Labour Commissioner if the employer unjustifiably refuses." },
      { question: "Can I use an experience letter for a visa application?", answer: "Yes. Many countries require proof of employment for work visas, skilled migration, and educational applications. An experience letter on company letterhead is commonly accepted." },
      { question: "What is the difference between an experience letter and a reference letter?", answer: "An experience letter confirms factual employment details. A reference letter is a personal endorsement by a manager or colleague speaking to your skills, character, and achievements — it goes further than confirming facts." },
      { question: "How long does it take to get an experience letter?", answer: "Typically 5–14 business days. If you need it urgently, request it in writing immediately on your last day and confirm with HR that the timeline is noted." },
      { question: "Where can I download a free experience letter template?", answer: "Templix AI provides a free, professionally designed experience letter template — customizable, exportable as PDF or Word, no sign-up." },
    ],
    internalLinks: [
      { text: "Experience Letter Template", href: "/en/templates/letters/experience-letter" },
      { text: "Experience Letter Format Guide", href: "/en/blog/experience-letter-format" },
      { text: "Experience Letter vs Relieving Letter", href: "/en/blog/experience-letter-vs-relieving-letter" },
      { text: "Offer Letter FAQ", href: "/en/faq/offer-letter-faqs" },
    ],
    relatedFaqs: ["offer-letter-faqs", "resignation-letter-faqs", "employment-contract-faqs"],
  },

  {
    slug: "resignation-letter-faqs",
    metaTitle: "Resignation Letter FAQ: Notice Period, Format & More",
    metaDescription: "How to resign professionally — notice period rules, what to include in a resignation letter, whether you must give notice, and how to handle common situations.",
    h1: "Resignation Letter FAQ: 12 Questions About Resigning Professionally",
    intro: "Resigning gracefully protects your professional reputation and future references. Here are direct answers to the most common resignation questions.",
    questions: [
      { question: "Do I need to submit a resignation letter?", answer: "Yes — always. A written resignation creates a clear, dated record of your intent to leave. Even if you resign verbally, follow up with a written letter or email the same day." },
      { question: "How much notice do I need to give?", answer: "Check your employment contract first — it will specify your notice period (typically 2 weeks, 1 month, or 3 months). If your contract is silent, the legal or customary minimum in your country applies." },
      { question: "What should a resignation letter include?", answer: "The date, your manager's name, a clear statement of resignation, your last working day, a brief thank you, and an offer to assist with the transition. Keep it professional — not the place for complaints." },
      { question: "Should I explain why I'm resigning in my resignation letter?", answer: "You are not obligated to. 'I have decided to pursue a new opportunity' is sufficient. Save detailed feedback for the exit interview if you choose to participate." },
      { question: "Can I resign without notice?", answer: "Only if your contract allows it or you have a legally recognized reason (such as a hostile work environment or employer breach of contract). Resigning without notice typically forfeits any unpaid salary and may expose you to legal action." },
      { question: "What is 'gardening leave'?", answer: "When an employer accepts your resignation but pays you to stay home (rather than work your notice period) to prevent you from taking clients or knowledge to a competitor. You remain employed and must honor any non-compete or NDA." },
      { question: "Can I resign by email?", answer: "Yes — email is legally valid for resignation in most countries. However, follow up with a printed letter to HR for formal documentation. In person is preferred; email is acceptable." },
      { question: "What if my employer asks me to leave immediately?", answer: "If they ask you to leave before your notice period is up, they must pay you for the full notice period (pay in lieu of notice) unless you have committed gross misconduct." },
      { question: "Can I retract a resignation?", answer: "You can request to retract your resignation, but the employer is not obligated to accept it. Do so in writing as quickly as possible." },
      { question: "Should I resign before or after securing a new job?", answer: "Generally, resign only after receiving and accepting a written offer from your new employer. Do not resign on a verbal offer." },
      { question: "What is a two-weeks notice letter?", answer: "A resignation letter with a 2-week notice period — the most common notice period in the US. It gives your employer time to begin the replacement process and allows you to wrap up your work." },
      { question: "Where can I get a free resignation letter template?", answer: "Templix AI offers a professionally written resignation letter template — customizable for your notice period and situation, downloadable as PDF or Word." },
    ],
    internalLinks: [
      { text: "Resignation Letter Template", href: "/en/templates/letters/resignation-letter" },
      { text: "Two Weeks Notice Letter Guide", href: "/en/blog/two-weeks-notice-letter" },
      { text: "Experience Letter FAQ", href: "/en/faq/experience-letter-faqs" },
      { text: "Offer Letter FAQ", href: "/en/faq/offer-letter-faqs" },
    ],
    relatedFaqs: ["offer-letter-faqs", "experience-letter-faqs", "employment-contract-faqs"],
  },

  // Remaining 14 FAQ stubs (full Q&A expansion in Sprint 2)
  { slug: "proposal-faqs", metaTitle: "Proposal Writing FAQ: 10 Key Questions", metaDescription: "How to write a proposal, what to include, how to price, and how to follow up. 10 direct answers plus free proposal templates.", h1: "Proposal Writing FAQ: 10 Questions Answered", intro: "Proposals win business. Here are direct answers to the most common proposal writing questions.", questions: [{ question: "What is a proposal?", answer: "A document sent to a potential client that outlines your solution to their problem, your approach, timeline, and pricing." }, { question: "How long should a proposal be?", answer: "4–10 pages for most freelance/small business proposals. Grant proposals can be 20+ pages. Match length to the complexity of the project." }], internalLinks: [{ text: "Business Proposal Template", href: "/en/templates/proposals/business-proposal" }], relatedFaqs: ["business-proposal-faqs", "statement-of-work-faqs"] },
  { slug: "resume-format-faqs", metaTitle: "Resume Format FAQ: Chronological, Functional & Combination", metaDescription: "Which resume format is best for you — chronological, functional, or combination? 10 questions answered for every career stage.", h1: "Resume Format FAQ: Which Format Should You Use?", intro: "The right format depends on your career stage and goals. Here are direct answers.", questions: [{ question: "What is a chronological resume?", answer: "The most common format — lists work experience newest-first. Best for candidates with a solid, continuous work history." }], internalLinks: [{ text: "Free Resume Templates", href: "/en/templates/resumes" }, { text: "ATS Resume FAQ", href: "/en/faq/ats-resume-faqs" }], relatedFaqs: ["resume-faqs", "ats-resume-faqs"] },
  { slug: "salary-slip-faqs", metaTitle: "Salary Slip FAQ: India Pay Stub Questions Answered", metaDescription: "What is a salary slip, what must it include, is it mandatory, and how do you use it for a loan application? Answers for Indian employees and HR professionals.", h1: "Salary Slip FAQ: 10 Common Questions (India)", intro: "A salary slip is required for loans, visa applications, and tax filings. Here are the key questions answered.", questions: [{ question: "What is a salary slip?", answer: "An official document from an employer showing an employee's earnings, deductions (PF, TDS, etc.), and net pay for a given month." }], internalLinks: [{ text: "Salary Slip Template", href: "/en/templates/letters/salary-slip" }, { text: "Salary Slip Components Explained", href: "/en/blog/salary-slip-components-explained" }], relatedFaqs: ["employment-contract-faqs", "experience-letter-faqs"] },
  { slug: "quotation-faqs", metaTitle: "Quotation vs Invoice FAQ: 10 Questions Answered", metaDescription: "What is a quotation, how is it different from an invoice or estimate, when does it become binding? Answers to the 10 most common quotation questions.", h1: "Quotation FAQ: 10 Questions About Quotes & Estimates", intro: "A quotation sets price expectations before work begins. Here are the key questions answered.", questions: [{ question: "What is a quotation?", answer: "A formal document from a seller that states the price for specific goods or services. When accepted by the buyer, it becomes binding." }], internalLinks: [{ text: "Quotation Template", href: "/en/templates/quotations/quotation" }, { text: "Quotation vs Estimate Guide", href: "/en/blog/quotation-vs-estimate" }], relatedFaqs: ["invoice-faqs", "invoice-vs-receipt-faqs"] },
  { slug: "purchase-order-faqs", metaTitle: "Purchase Order FAQ: PO Basics for Buyers & Sellers", metaDescription: "What is a PO, when is it required, what does PO number mean, and how does a PO differ from an invoice? 10 clear answers.", h1: "Purchase Order FAQ: 10 Questions About POs", intro: "Purchase orders protect both buyers and sellers by formalizing purchasing intent before goods or services are delivered.", questions: [{ question: "What is a purchase order?", answer: "A commercial document issued by a buyer to a seller, authorizing a purchase at an agreed price and quantity." }], internalLinks: [{ text: "Purchase Order vs Invoice", href: "/en/blog/purchase-order-vs-invoice" }, { text: "Invoice FAQ", href: "/en/faq/invoice-faqs" }], relatedFaqs: ["invoice-faqs", "freelance-invoice-faqs"] },
  { slug: "retainer-agreement-faqs", metaTitle: "Retainer Agreement FAQ: 10 Questions About Retainers", metaDescription: "What is a retainer agreement, how do retainer fees work, and when should you use one? 10 plain-English answers for freelancers and consultants.", h1: "Retainer Agreement FAQ: 10 Questions Answered", intro: "A retainer agreement secures recurring income and availability. Here are the key questions for freelancers and consultants.", questions: [{ question: "What is a retainer agreement?", answer: "A contract where a client pays a fixed monthly fee to retain your services and availability for an agreed scope or number of hours." }], internalLinks: [{ text: "Consulting Agreement Template", href: "/en/templates/contracts/consulting-agreement" }, { text: "How Much to Charge as a Freelancer", href: "/en/blog/how-much-to-charge-as-a-freelancer" }], relatedFaqs: ["contract-faqs", "freelance-contract-faqs"] },
  { slug: "statement-of-work-faqs", metaTitle: "Statement of Work FAQ: SOW vs Contract & More", metaDescription: "What is a statement of work, how is it different from a contract or proposal, and what must it include? 10 straight answers.", h1: "Statement of Work (SOW) FAQ: 10 Key Questions", intro: "A well-written SOW prevents scope creep and protects both parties. Here are the most common questions.", questions: [{ question: "What is a statement of work?", answer: "A project document that defines the specific tasks, deliverables, timeline, and standards for a specific project — often appended to or referenced by a contract." }], internalLinks: [{ text: "How to Write a Statement of Work", href: "/en/blog/how-to-write-statement-of-work" }, { text: "Service Agreement Template", href: "/en/templates/contracts/service-agreement" }], relatedFaqs: ["contract-faqs", "scope-creep-faqs"] },
  { slug: "letter-of-intent-faqs", metaTitle: "Letter of Intent (LOI) FAQ: 10 Questions Answered", metaDescription: "What is a letter of intent, when to use one, is it binding, and how is it different from an MOU or formal contract? Plain-English answers.", h1: "Letter of Intent (LOI) FAQ: 10 Key Questions", intro: "An LOI sets the foundation for a deal before the formal contract. Here are the key questions answered.", questions: [{ question: "What is a letter of intent?", answer: "A document expressing the intention of two parties to enter into a formal agreement. It outlines key terms and signals mutual commitment without being a final contract." }], internalLinks: [{ text: "How to Write a Letter of Intent", href: "/en/blog/how-to-write-a-letter-of-intent" }, { text: "MOU Template", href: "/en/templates/contracts/mou-template" }], relatedFaqs: ["mou-faqs", "contract-faqs"] },
  { slug: "credit-note-faqs", metaTitle: "Credit Note FAQ: What It Is & When to Issue One", metaDescription: "What is a credit note, when to issue one, how it differs from a refund, and how it affects GST filings. 10 plain-English answers.", h1: "Credit Note FAQ: 10 Common Questions Answered", intro: "A credit note corrects invoice errors and issues refunds without canceling the original transaction. Here's everything you need to know.", questions: [{ question: "What is a credit note?", answer: "A document issued by a seller to a buyer that reduces the amount the buyer owes, typically due to returned goods, overpayment, or a pricing error on the original invoice." }], internalLinks: [{ text: "Invoice FAQ", href: "/en/faq/invoice-faqs" }, { text: "Invoice vs Receipt", href: "/en/blog/invoice-vs-receipt" }], relatedFaqs: ["invoice-faqs", "gst-invoice-faqs"] },
  { slug: "mou-faqs", metaTitle: "MOU FAQ: 10 Memorandum of Understanding Questions", metaDescription: "What is an MOU, is it legally binding, how is it different from a contract, and when should you use one? 10 clear answers.", h1: "Memorandum of Understanding (MOU) FAQ: 10 Key Questions", intro: "MOUs set expectations before formal contracts are signed. Here are the most common questions about when and how to use them.", questions: [{ question: "What is an MOU?", answer: "A Memorandum of Understanding is a document that outlines the broad outlines of an agreement between two or more parties, before a formal binding contract is drafted." }], internalLinks: [{ text: "MOU Template", href: "/en/templates/contracts/mou-template" }, { text: "Partnership Agreement Template", href: "/en/templates/contracts/partnership-agreement" }], relatedFaqs: ["letter-of-intent-faqs", "contract-faqs"] },
  { slug: "partnership-agreement-faqs", metaTitle: "Partnership Agreement FAQ: 10 Key Questions", metaDescription: "What is a business partnership agreement, what must it include, and what happens without one? 10 plain-English answers.", h1: "Partnership Agreement FAQ: 10 Questions for Business Partners", intro: "A partnership agreement prevents disputes by documenting how your business will be run, shared, and dissolved.", questions: [{ question: "What is a partnership agreement?", answer: "A legal contract between two or more business partners that defines ownership percentages, profit sharing, decision-making, and dissolution procedures." }], internalLinks: [{ text: "Partnership Agreement Template", href: "/en/templates/contracts/partnership-agreement" }, { text: "Partnership Agreement Guide", href: "/en/blog/partnership-agreement-guide" }], relatedFaqs: ["contract-faqs", "mou-faqs"] },
  { slug: "rent-agreement-faqs", metaTitle: "Rent Agreement FAQ: India Lease & Rental Questions", metaDescription: "What is a rent agreement, is 11 months the legal maximum, who pays stamp duty, and can you renew it? 10 clear answers for landlords and tenants in India.", h1: "Rent Agreement FAQ: 10 Questions for Landlords & Tenants (India)", intro: "A rent agreement protects both parties and is required for HRA claims, police verification, and utility transfers in India.", questions: [{ question: "Why are most rent agreements in India for 11 months?", answer: "Agreements under 12 months do not require mandatory registration under the Registration Act, avoiding stamp duty and registration fees. This is a common practice, not a legal maximum." }], internalLinks: [{ text: "11-Month Rent Agreement Guide", href: "/en/blog/11-month-rent-agreement" }, { text: "Rent Agreement vs Lease Agreement", href: "/en/blog/rent-agreement-vs-lease-agreement" }], relatedFaqs: ["contract-faqs", "mou-faqs"] },
  { slug: "scope-creep-faqs", metaTitle: "Scope Creep FAQ: How to Prevent & Handle It", metaDescription: "What is scope creep, how does it happen, and how do you stop it without losing the client? 10 direct answers for freelancers and project managers.", h1: "Scope Creep FAQ: 10 Questions About Preventing It", intro: "Scope creep is one of the leading causes of project overruns and unpaid work. Here are direct answers on how to prevent and handle it.", questions: [{ question: "What is scope creep?", answer: "The gradual expansion of a project beyond its original agreed boundaries — extra features, changes, and add-ons that weren't included in the original scope, often without additional payment." }], internalLinks: [{ text: "Statement of Work FAQ", href: "/en/faq/statement-of-work-faqs" }, { text: "Freelance Contract FAQ", href: "/en/faq/freelance-contract-faqs" }], relatedFaqs: ["statement-of-work-faqs", "freelance-contract-faqs"] },
  { slug: "invoice-vs-receipt-faqs", metaTitle: "Invoice vs Receipt FAQ: Key Differences Explained", metaDescription: "What is the difference between an invoice and a receipt, when do you use each, and can a document be both? 10 clear answers.", h1: "Invoice vs Receipt FAQ: 10 Questions Answered", intro: "Invoice and receipt are often confused — but they serve completely different purposes. Here's a clear breakdown.", questions: [{ question: "What is the difference between an invoice and a receipt?", answer: "An invoice requests payment — it's sent before payment. A receipt confirms payment — it's issued after payment is received." }], internalLinks: [{ text: "Invoice vs Receipt Blog", href: "/en/blog/invoice-vs-receipt" }, { text: "Invoice FAQ", href: "/en/faq/invoice-faqs" }], relatedFaqs: ["invoice-faqs", "freelance-invoice-faqs"] },
  { slug: "recommendation-letter-faqs", metaTitle: "Recommendation Letter FAQ: 10 Questions Answered", metaDescription: "What is a letter of recommendation, who should write it, what should it include, and how long should it be? 10 clear answers plus a free template.", h1: "Letter of Recommendation FAQ: 10 Key Questions", intro: "A strong recommendation letter can be the difference between two equally qualified candidates. Here's everything you need to know.", questions: [{ question: "What is a letter of recommendation?", answer: "A document written by someone who can vouch for your skills, character, and achievements — typically a professor, manager, or mentor. It is submitted with job or academic applications." }], internalLinks: [{ text: "Recommendation Letter Template", href: "/en/templates/letters/recommendation-letter" }, { text: "How to Write a Letter of Recommendation", href: "/en/blog/how-to-write-a-letter-of-recommendation" }], relatedFaqs: ["cover-letter-faqs", "resume-faqs"] },
];

// ── Lookup ────────────────────────────────────────────────────────────────────

/** All FAQ topic slugs — used to build sitemap and route allowlist */
export const FAQ_TOPIC_SLUGS: string[] = faqTopics.map((t) => t.slug);

/** Get a single FAQ topic by slug */
export function getFaqTopic(slug: string): FAQTopic | undefined {
  return faqTopics.find((t) => t.slug === slug);
}

/** Get all FAQ topics (for listing page) */
export function getAllFaqTopics(): FAQTopic[] {
  return faqTopics;
}

/** Generate a FAQPage JSON-LD schema for a given topic */
export function getFaqTopicSchema(topic: FAQTopic): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
