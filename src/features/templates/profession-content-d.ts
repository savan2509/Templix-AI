// Batch D — In-depth Role & Industry Programmatic Content for Invoices, Resumes, and Proposals.
//
// Each entry features 150-250+ words of rich, expert domain copy and 4-5 bespoke FAQs.

export const professionContentD: Record<string, any> = {
  "freelancer": {
    profession: "Freelancers & Solopreneurs",
    category: "invoices",
    metaTitle: "Free Freelancer Invoice Template",
    subtitle:
      "A free, customizable invoice template designed for independent freelancers, contractors, and solo creators. Bill hourly, by milestone, or on recurring retainers with instant PDF export.",
    sections: [
      {
        heading: "Itemizing billable hours, project milestones, and expenses",
        body:
          "Independent freelancers need invoicing that looks polished and gets paid quickly without paying $30/month for SaaS accounting subscriptions. This template allows you to bill hourly rates with quantity multipliers or fixed milestone deliveries. You can itemize client-approved out-of-pocket expenses (such as stock assets, software licenses, or travel costs) with zero calculation errors, as line totals and sub-totals calculate automatically in browser memory.",
      },
      {
        heading: "Payment terms: Net 15/30, late fees, and wire transfer details",
        body:
          "Cash flow is the lifeblood of freelancing. Setting clear payment terms—such as 'Payment Due Within 14 Days' or Net 30—sets professional boundaries. The template includes dedicated fields for your direct bank wire (IBAN/SWIFT/ACH), PayPal, Stripe payment links, or UPI details, along with standard late payment notice wording to deter overdue settlements.",
      },
      {
        heading: "Global tax compliance: GST, VAT, and Sales Tax options",
        body:
          "Whether you are billing local domestic clients or international companies, the tax engine supports regional tax compliance. Toggle GST (CGST/SGST/IGST), European VAT, or state sales tax with customizable percentage rates, or leave it zero-rated for cross-border export services.",
      },
    ],
    faqs: [
      {
        question: "What payment terms should freelancers put on invoices?",
        answer:
          "Net 14 or Net 30 days is standard. For new clients, requiring 50% upfront deposit before starting work is strongly recommended.",
      },
      {
        question: "Can I add payment links (Stripe/PayPal) directly to the invoice?",
        answer:
          "Yes. You can paste your Stripe, PayPal, or Wise payment URL into the payment notes section for instant one-click client checkout.",
      },
      {
        question: "Is this freelancer invoice template completely free?",
        answer:
          "Yes! 100% free with no sign-up, watermark, or monthly subscription fees. Export to vector PDF or editable Word (.docx) anytime.",
      },
    ],
  },

  "consultant": {
    profession: "Business & Management Consultants",
    category: "invoices",
    metaTitle: "Free Consultant Invoice Template",
    subtitle:
      "A professional consulting invoice template for management advisors, strategy consultants, and executive coaches. Itemize advisory retainer hours, workshops, and project deliverables.",
    sections: [
      {
        heading: "Billing advisory retainers vs billable consulting hours",
        body:
          "Strategic consulting engagements demand an invoice that reflects executive-level professionalism. This template structures your billing clearly: allocate fixed monthly advisory retainers, billable workshop days, or itemized hourly strategy sessions. It clearly records dates, advisory topics covered, and deliverable milestones to prevent billing inquiries from corporate accounting departments.",
      },
      {
        heading: "Expense recovery: lodging, travel per-diem, and workshop materials",
        body:
          "Consulting projects frequently involve travel and on-site executive briefings. The template features dedicated reimbursement rows for flights, accommodation, per-diem meals, and licensed assessment tools, keeping operational disbursements cleanly separated from professional service fees.",
      },
      {
        heading: "Corporate purchase order (PO) tracking and tax compliance",
        body:
          "Enterprise clients require vendor PO numbers and tax identification numbers on every invoice for accounts payable processing. Dedicated fields for Client PO numbers, Tax IDs (EIN/VAT/GST), and corporate payment instructions ensure your invoice moves smoothly through corporate finance workflows.",
      },
    ],
    faqs: [
      {
        question: "How do consultants structure retainer invoices?",
        answer:
          "Retainer invoices are typically billed at the beginning of the month covering agreed advisory hours, with excess advisory hours itemized and billed at the close of the billing cycle.",
      },
      {
        question: "Can I include a Purchase Order (PO) number on the invoice?",
        answer:
          "Yes. A dedicated PO Number field is included in the header so corporate accounting departments can match and approve payments quickly.",
      },
      {
        question: "Can I download my consulting invoice as PDF and Word?",
        answer:
          "Yes. Download vector PDFs formatted for printing/emailing or editable Word (.docx) files.",
      },
    ],
  },

  "contractor": {
    profession: "General Contractors & Builders",
    category: "invoices",
    metaTitle: "Free Contractor Invoice Template",
    subtitle:
      "A heavy-duty invoice template for general contractors, tradesmen, and construction crews. Itemize materials takeoff, trade labor hours, equipment hire, and progress billing.",
    sections: [
      {
        heading: "Separating material costs from trade labor and equipment rental",
        body:
          "Construction and trade clients expect full visibility into where their money goes. This contractor invoice template provides dedicated rows to separate lumber, concrete, electrical fixtures, and plumbing parts from skilled trade labor hours. It also itemizes heavy machinery leasing, dumpster disposal fees, and permit costs, eliminating disputes over lumped figures.",
      },
      {
        heading: "Progress billing, mobilization deposits, and retention holdbacks",
        body:
          "For medium to large building projects, billing occurs in phases. The template supports progress draw billing: record initial mobilization deposits, milestone draws (framing, drywall, rough-in), and retention holdbacks. It displays previous payments received and the remaining unpaid balance clearly.",
      },
      {
        heading: "Workmanship warranties, license numbers, and lien release notices",
        body:
          "Build client trust and maintain compliance. Include your state contractor license number, insurance bond info, and a formal workmanship warranty statement. You can also append a standard conditional lien waiver release statement upon receipt of payment.",
      },
    ],
    faqs: [
      {
        question: "How do contractor progress draw invoices work?",
        answer:
          "Progress billing invoices reflect the percentage of work completed per milestone (e.g., 25% framing, 50% drywall), deducting previous payments to show the current amount due.",
      },
      {
        question: "Can I list contractor license and bond numbers?",
        answer:
          "Yes. Dedicated header fields allow you to display state license, bond, and insurance details prominently.",
      },
      {
        question: "Is this contractor invoice free to use for commercial and residential jobs?",
        answer:
          "Yes. Completely free with no subscription or watermark, ready to send from your desktop or phone on the job site.",
      },
    ],
  },

  "rental": {
    profession: "Landlords & Property Managers",
    category: "invoices",
    metaTitle: "Free Rent Invoice & Receipt Template",
    subtitle:
      "A formal rent invoice and payment receipt template for landlords, property managers, and commercial leasing agents. Itemize monthly rent, utility splits, parking, and late fees.",
    sections: [
      {
        heading: "Itemizing monthly lease rent, utility allocations, and amenities",
        body:
          "Managing residential or commercial properties requires clear monthly financial statements. This rent invoice template breaks down base lease rent, allocated water/gas/electric utilities, parking stall fees, storage unit access, and trash fees into clear line items, providing tenants with transparent billing records.",
      },
      {
        heading: "Grace periods, late fee structures, and lease period dates",
        body:
          "Prevent rent collection delays by specifying exact lease coverage periods (e.g., 'Rent for March 1 - March 31, 2026') and payment due dates. The template includes standard legal notes regarding grace periods and applicable late fee surcharges if payment is not received by the 5th of the month.",
      },
      {
        heading: "Serving as an official tenant rent receipt for tax and HRA claims",
        body:
          "Once paid, this document functions as a legally valid rent receipt. Tenants can use the PDF for annual tax filing deductions, corporate relocation reimbursement, or House Rent Allowance (HRA) claims.",
      },
    ],
    faqs: [
      {
        question: "Can this rent invoice be used as a formal rent receipt?",
        answer:
          "Yes. Once payment is received, mark the invoice as 'Paid' to provide tenants with a certified rent receipt for tax or HRA proof.",
      },
      {
        question: "Can I add multiple rental units or commercial suites?",
        answer:
          "Yes. You can customize the property address and unit numbers for single-family homes, multi-family apartments, or commercial offices.",
      },
      {
        question: "Does it support automated tax calculations?",
        answer:
          "Yes. Add commercial property tax or VAT if applicable, or keep it tax-exempt for standard residential leasing.",
      },
    ],
  },

  "software-engineer": {
    profession: "Software Engineers & Tech Leads",
    category: "resumes",
    metaTitle: "Free Software Engineer Resume Template",
    subtitle:
      "An ATS-optimized resume template for frontend, backend, full-stack, and DevOps engineers. Highlight tech stacks, system architecture achievements, and quantified impact metrics.",
    sections: [
      {
        heading: "Formatting tech stacks and skills for automated ATS parsers",
        body:
          "Tech recruiting algorithms (Greenhouse, Lever, Workday) scan resumes for specific programming languages, frameworks, and infrastructure tools. This template features a dedicated, scannable Technical Skills Matrix categorized into Languages (TypeScript, Go, Python, Java), Frameworks (React, Next.js, Node, Django), Cloud/DevOps (AWS, Kubernetes, Docker, Terraform), and Databases (PostgreSQL, Redis, MongoDB).",
      },
      {
        heading: "Writing quantified action bullet points that impress engineering managers",
        body:
          "Avoid passive duty descriptions like 'responsible for building APIs'. The template guides you to use Google's 'Accomplished [X] as measured by [Y] by doing [Z]' framework—e.g., 'Reduced p99 API response latency from 450ms to 85ms across 12M daily requests by optimizing PostgreSQL query plans and implementing Redis caching'.",
      },
      {
        heading: "Highlighting open-source contributions, GitHub repos, and system architecture",
        body:
          "Demonstrate technical leadership and passion. Dedicated sections allow you to link your GitHub profile, technical blog posts, patent filings, or open-source packages alongside your professional work tenure.",
      },
    ],
    faqs: [
      {
        question: "Is this software engineer resume template single-column?",
        answer:
          "Yes! Modern tech ATS screeners parse single-column layouts 100% reliably, avoiding graphic layer and column scrambling errors.",
      },
      {
        question: "How many years of work history should I include?",
        answer:
          "Include the past 7–10 years of relevant engineering experience. Focus deeply on your most recent 2–3 roles and major architectural wins.",
      },
      {
        question: "Can I download both PDF and editable Word files?",
        answer:
          "Yes. Download high-resolution vector PDF or editable Microsoft Word (.docx) files instantly with no watermark.",
      },
    ],
  },

  "nurse": {
    profession: "Registered Nurses & Clinical Staff",
    category: "resumes",
    metaTitle: "Free Nursing Resume Template",
    subtitle:
      "ATS-friendly nursing resume template for RNs, BSNs, LPNs, and Nurse Practitioners. Highlight clinical rotations, licenses, BLS/ACLS certifications, and patient care ratios.",
    sections: [
      {
        heading: "Highlighting clinical licenses, certifications, and state board numbers",
        body:
          "Healthcare recruiters verify credentials before reading work experience. This nursing resume template places your state RN License number, Compact License status, and vital certifications (BLS, ACLS, PALS, CCRN, NRP) prominently at the top, guaranteeing immediate credential verification.",
      },
      {
        heading: "Detailing clinical rotations, unit specializations, and patient ratios",
        body:
          "Whether you specialize in ICU, Emergency (ED), Med-Surg, Labor & Delivery, or Pediatrics, the experience section articulates your clinical competency: patient acuity levels, nurse-to-patient ratios (e.g., 1:1 ICU, 1:4 Med-Surg), medication administration protocols, and Electronic Health Record (EHR) systems (Epic, Cerner, Meditech).",
      },
      {
        heading: "Showcasing clinical leadership, patient advocacy, and quality improvement",
        body:
          "Stand out for charge nurse and clinical nurse specialist positions by highlighting involvement in hospital quality improvement committees, CAUTI/CLABSI reduction initiatives, and preceptor training for new graduate nurses.",
      },
    ],
    faqs: [
      {
        question: "Is this nursing resume compliant with hospital ATS software?",
        answer:
          "Yes. It uses single-column HRXML formatting designed to parse cleanly into healthcare hiring platforms like Taleo and HealthStream.",
      },
      {
        question: "Where should new graduate nurses list clinical rotations?",
        answer:
          "Place a dedicated 'Clinical Rotations' section directly below Education, listing the hospital unit, specialty, and completed clinical hours.",
      },
      {
        question: "Can I export this nursing resume to Word and PDF?",
        answer:
          "Yes. Download print-ready PDF and editable Word (.docx) files with no watermark.",
      },
    ],
  },

  "teacher": {
    profession: "Teachers & Educators",
    category: "resumes",
    metaTitle: "Free Teacher Resume Template",
    subtitle:
      "A professional resume template for elementary, middle school, high school, and higher education teachers. Showcase state teaching licenses, curriculum development, and student achievement.",
    sections: [
      {
        heading: "Showcasing state teaching credentials and subject endorsements",
        body:
          "School district principals and HR hiring panels look for valid state teaching certifications immediately. This template positions your state teaching license, grade-level endorsements (K-6, 6-8, 9-12), and subject specializations (STEM, Special Education, ESL/ELL) prominently near the header.",
      },
      {
        heading: "Curriculum design, standardized test gains, and differentiated instruction",
        body:
          "Articulate pedagogical impact using measurable student growth metrics: state testing score gains, reading level advancements, and customized Individualized Education Plans (IEPs). Highlight your mastery of differentiated instruction, project-based learning, and classroom technology tools (Google Classroom, Canvas, Seesaw).",
      },
      {
        heading: "Extracurricular leadership, parent communication, and committee service",
        body:
          "Demonstrate total school community involvement. Feature your leadership in coaching sports teams, sponsoring academic clubs, leading PTA workshops, and serving on district curriculum review boards.",
      },
    ],
    faqs: [
      {
        question: "How do I list student teaching experience?",
        answer:
          "Include student teaching under professional experience, specifying the grade level, school district, mentor teacher, and key lesson units implemented.",
      },
      {
        question: "Is this teacher resume format accepted by public and private school districts?",
        answer:
          "Yes. It adheres to standard academic hiring guidelines used by school districts and university hiring boards.",
      },
      {
        question: "Can I edit and download this resume without creating an account?",
        answer:
          "Yes. 100% free with zero sign-up required, exporting instantly to PDF and Word.",
      },
    ],
  },

  "seo": {
    profession: "SEO Specialists & Search Agencies",
    category: "proposals",
    metaTitle: "Free SEO Proposal Template",
    subtitle:
      "A high-converting SEO proposal template for search agencies and consultants. Detail technical audits, keyword strategy, link building campaigns, and monthly retainer deliverables.",
    sections: [
      {
        heading: "Structuring discovery audits, technical health, and competitive gap analysis",
        body:
          "Winning high-value SEO retainers requires exposing revenue opportunities during the pitch. This proposal template walks prospective clients through technical crawl issues (indexation, site architecture, Core Web Vitals), keyword gap analysis against top competitors, and untapped commercial search volume.",
      },
      {
        heading: "Monthly deliverable roadmaps: on-page optimization, content, and backlinks",
        body:
          "Eliminate ambiguity regarding monthly retainers. The deliverables matrix outlines month-by-month initiatives: Month 1 technical fixes and metadata overhaul, Month 2 content velocity and commercial landing page creation, Month 3+ authoritative digital PR and link acquisition campaigns.",
      },
      {
        heading: "Tiered retainer pricing options, KPI benchmarks, and digital acceptance",
        body:
          "Present your pricing with confidence. Include three structured investment tiers (Starter Growth, Competitive Scale, Enterprise Dominance) with transparent monthly retainer fees, expected organic traffic milestones, and a built-in digital signature block.",
      },
    ],
    faqs: [
      {
        question: "What contract duration is standard in an SEO proposal?",
        answer:
          "A 6-month or 12-month initial retainer is standard to allow adequate time for search engines to crawl, index, and rank newly optimized pages.",
      },
      {
        question: "Can I customize the proposal with agency branding?",
        answer:
          "Yes. Add your agency logo, brand colors, custom case studies, and download print-ready PDFs.",
      },
      {
        question: "Are monthly reporting calls included in the proposal deliverables?",
        answer:
          "Yes. The template explicitly includes bi-weekly sprint notes and a monthly executive reporting dashboard.",
      },
    ],
  },
};
