// Batch E — Role & Industry Programmatic Content for Contracts, Proposals, and Letters.
//
// Each entry features 150-250+ words of meticulously structured, legally-sound and
// industry-specific copywriting (zero keyword-swapped boilerplate) with bespoke FAQs.

export const professionContentE: Record<string, any> = {
  // ── CONTRACTS ─────────────────────────────────────────────────────────────
  "freelance-developer": {
    profession: "Freelance Software Developers",
    category: "contracts",
    metaTitle: "Free Freelance Developer Contract",
    subtitle:
      "A free, legally enforceable contract template for freelance software engineers, web developers, and technical contractors. Protect intellectual property, define milestone acceptance criteria, and outline source code warranties.",
    sections: [
      {
        heading: "Milestone schedules, code acceptance, and sprint delivery",
        body:
          "Software engineering projects carry distinct delivery risks compared to standard service agreements. This contract template formalizes technical project phases into explicit milestones—such as UI prototyping, API architecture, database integration, staging QA, and production deployment. It establishes a mandatory 10-day client testing window upon milestone delivery: if the client fails to submit documented bug reports within this timeframe, the milestone is deemed automatically accepted. This safeguards developers from endless scope creep, unpaid staging delays, and delayed sprint sign-offs.",
      },
      {
        heading: "Intellectual property transfer and source code escrow",
        body:
          "The most vital clause in any software development agreement is the timing of intellectual property (IP) assignment. Under this contract, all copyright, proprietary algorithms, and repository ownership remain with the developer until 100% of final invoices and milestone payments are settled in full. It explicitly distinguishes between bespoke client codebase and pre-existing developer toolkits, starter kits, or third-party open-source libraries (MIT, Apache 2.0), ensuring you never inadvertently assign ownership of your core development tooling.",
      },
      {
        heading: "Bug warranties, maintenance retainers, and liability limits",
        body:
          "Client expectations around software maintenance often lead to unpaid post-launch support. This template includes a precise 30-day bug warranty limited strictly to documented deviations from initial functional specifications. Any new feature requests, third-party API breaking changes, or operating system updates post-launch require a separate hourly rate or monthly maintenance retainer. A robust limitation-of-liability clause caps developer damages to the total fees received under the project.",
      },
    ],
    faqs: [
      {
        question: "When does the client officially own the code?",
        answer:
          "Intellectual property and repository rights transfer strictly upon full receipt of final payment. Until all milestone invoices are settled, the developer retains full ownership and licensing rights.",
      },
      {
        question: "How are bug fixes handled after project delivery?",
        answer:
          "The contract provides a 30-day warranty for critical bugs that deviate from agreed specifications. Any third-party API breakages or new feature enhancements are billed under an hourly support rate.",
      },
      {
        question: "Can I retain rights to my open-source starter kit?",
        answer:
          "Yes. The agreement clearly distinguishes between bespoke custom code created for the client and pre-existing developer libraries or open-source dependencies.",
      },
      {
        question: "What happens if the client delays code review?",
        answer:
          "A 10-day acceptance window ensures that if a client does not provide written feedback or bug reports within 10 days of staging delivery, the milestone is deemed approved and payable.",
      },
    ],
  },

  "consulting-agreement": {
    profession: "Management & Tech Consultants",
    category: "contracts",
    metaTitle: "Free Consulting Agreement Template",
    subtitle:
      "A free, professional consulting contract template for independent advisors, strategists, and management consultants. Define retainer hours, advisory deliverables, non-disclosure terms, and expense reimbursements.",
    sections: [
      {
        heading: "Defining advisory scope and retainer availability",
        body:
          "Consulting engagements frequently suffer from boundary erosion where clients treat an advisory retainer as unlimited on-demand execution. This consulting agreement explicitly separates strategic guidance, executive workshops, and audit deliverables from hands-on tactical implementation. It defines monthly retainer hours, rollover allowances, and guaranteed response times during business hours, while setting a premium billing rate for advisory requests that exceed allocated monthly allocations.",
      },
      {
        heading: "Confidentiality, non-solicitation, and non-disclosure",
        body:
          "Advisors routinely handle high-stakes financial metrics, product roadmaps, and proprietary trade secrets. This agreement incorporates institutional-grade mutual confidentiality clauses that satisfy corporate legal departments without requiring redundant standalone NDAs. It also includes reasonable 12-month mutual non-solicitation covenants preventing clients from poaching your sub-contractors and preventing consultants from soliciting client internal staff.",
      },
      {
        heading: "Expense reimbursement, travel stipulations, and termination notice",
        body:
          "On-site workshops and stakeholder roadshows incur significant travel, accommodation, and per-diem costs. The agreement mandates pre-approval for travel expenses and requires reimbursement within 14 days of receipt submission. A 30-day written termination clause allows either party to conclude the agreement respectfully while ensuring the consultant is compensated for all work performed up to the final termination date.",
      },
    ],
    faqs: [
      {
        question: "Can unused monthly consulting hours roll over?",
        answer:
          "By default, retainer hours do not roll over to subsequent months to protect consultant capacity, but this clause can be customized to allow limited 30-day rollovers.",
      },
      {
        question: "Is this agreement legally sufficient without a separate NDA?",
        answer:
          "Yes. The contract contains comprehensive mutual non-disclosure and trade secret protections that meet corporate legal compliance standards.",
      },
      {
        question: "How are travel and lodging expenses invoiced?",
        answer:
          "All pre-approved travel, lodging, and meals are itemized and billed separately from advisory fees, payable within 14 days of receipt submission.",
      },
    ],
  },

  "photography-contract": {
    profession: "Commercial & Wedding Photographers",
    category: "contracts",
    metaTitle: "Free Photography Contract Template",
    subtitle:
      "A free commercial and portrait photography contract template. Protect booking dates with non-refundable retainers, establish copyright licensing, and specify weather and cancellation terms.",
    sections: [
      {
        heading: "Non-refundable booking retainers and cancellation terms",
        body:
          "Because photographers commit specific calendar dates and turn away prospective clients, this agreement incorporates an ironclad non-refundable retainer (typically 25% to 50% of the total booking fee). If a client cancels, the retainer covers lost opportunity cost and pre-shoot preparation time. The agreement also provides a structured rescheduling fee structure if notice is provided with at least 14 days notice, balancing client flexibility with commercial protection.",
      },
      {
        heading: "Commercial copyright ownership vs client usage licenses",
        body:
          "A frequent point of legal dispute in visual media is copyright ownership. Under statutory law, the photographer retains 100% of the copyright in raw and edited RAW files. This contract grants the client a defined, non-exclusive license tailored to their project (e.g., unlimited personal prints for weddings, or 2-year digital and social rights for commercial brand clients). It explicitly prohibits uncredited third-party reselling or unapproved alteration with AI image filters.",
      },
      {
        heading: "Model releases, weather emergencies, and equipment failure",
        body:
          "Outdoor and event shoots carry environmental and logistical unpredictability. The contract includes a built-in model release for portfolio and social marketing, a force majeure and severe weather clause allowing shoot rescheduling without penalty, and a strict limitation-of-liability clause that limits recovery to the total amount paid in the rare event of mechanical equipment failure.",
      },
    ],
    faqs: [
      {
        question: "Who owns the copyright to the delivered photographs?",
        answer:
          "The photographer retains the master copyright, while the client receives a defined, high-resolution usage license suited for their personal or commercial requirements.",
      },
      {
        question: "What happens if a wedding or event is postponed due to bad weather?",
        answer:
          "The force majeure and weather clauses permit one fee-free rescheduling within an agreed 12-month calendar window subject to photographer availability.",
      },
      {
        question: "Are RAW files included in standard deliverables?",
        answer:
          "No. The contract specifies that only curated, professionally color-graded JPEG or TIFF files are delivered. RAW files remain proprietary to the photographer unless licensed separately.",
      },
    ],
  },

  // ── PROPOSALS ─────────────────────────────────────────────────────────────
  "web-design": {
    profession: "Web Designers & UX Agencies",
    category: "proposals",
    metaTitle: "Free Web Design Proposal Template",
    subtitle:
      "A high-converting web design and UX proposal template. Present discovery findings, wireframing roadmaps, CMS architecture, tiered pricing packages, and digital sign-off acceptance.",
    sections: [
      {
        heading: "Structuring discovery, information architecture, and UI mockups",
        body:
          "Winning high-ticket web design pitches requires demonstrating a structured design philosophy. This proposal template walks the prospect through strategic discovery, user persona mapping, wireframing, responsive Figma mockups, and front-end development. It breaks down the exact number of included revision rounds per phase (e.g., 2 revision cycles during wireframing, 2 during UI design), establishing clear expectations and eliminating open-ended design iterations.",
      },
      {
        heading: "CMS selection, responsive performance, and SEO handoff",
        body:
          "Clients want assurance that their new website will be fast, maintainable, and search-optimized. The technical specifications section outlines mobile responsiveness, Core Web Vitals optimization, semantic schema markup, and CMS integration (WordPress, Webflow, Shopify, or custom Next.js). It clarifies what training is included to empower client staff to publish blog posts and update landing page content independently post-launch.",
      },
      {
        heading: "Milestone pricing tiers and digital sign-off terms",
        body:
          "To accelerate client decision-making, the proposal presents three clear investment options: Essential Launch, Growth Redesign, and Full Enterprise Architecture. Each package includes milestone payment breakdowns (40% kickoff deposit, 30% design approval, 30% pre-launch). A digital acceptance block enables prospects to approve the proposal instantly.",
      },
    ],
    faqs: [
      {
        question: "How many design revisions are standard in this proposal?",
        answer:
          "The template includes two dedicated revision cycles during the wireframe phase and two cycles during high-fidelity UI design before moving into front-end coding.",
      },
      {
        question: "Does the proposal cover post-launch website hosting and maintenance?",
        answer:
          "Hosting, monthly security patching, and ongoing CMS updates are presented as an optional recurring monthly retainer package alongside the main project fee.",
      },
      {
        question: "Can I customize the proposal with my agency branding?",
        answer:
          "Yes. Upload your studio logo, modify typography and brand accent colors, and export print-ready PDFs with zero watermark.",
      },
    ],
  },

  "digital-marketing": {
    profession: "Digital Marketing Agencies",
    category: "proposals",
    metaTitle: "Free Digital Marketing Proposal Template",
    subtitle:
      "A strategic digital marketing and growth agency proposal template. Detail PPC ad spend management, social media campaigns, ROAS targets, and monthly reporting deliverables.",
    sections: [
      {
        heading: "Campaign strategy, audience segmentation, and channel mix",
        body:
          "Effective marketing proposals win clients by demonstrating a deep understanding of their customer acquisition funnel. This template articulates target buyer personas, competitor benchmark audits, and channel allocation across Google Search Ads, Meta Ads, LinkedIn B2B campaigns, and email retention marketing. It clearly aligns marketing activities with measurable business objectives such as lowering customer acquisition cost (CAC) and scaling qualified lead volume.",
      },
      {
        heading: "Monthly deliverable schedules and creative asset production",
        body:
          "Eliminate ambiguity regarding monthly agency responsibilities. The deliverables matrix itemizes ad copy variations, graphic and video asset production, landing page A/B split testing, conversion tracking pixel audits, and bi-weekly performance reviews. It clearly defines client asset delivery timelines so campaign launches are never held up by missing brand guidelines.",
      },
      {
        heading: "Performance retainers, ad spend management, and ROAS KPIs",
        body:
          "Present your commercial model with confidence. The template supports flat monthly management retainers, percentage-of-ad-spend models, or hybrid performance incentives based on verified Return on Ad Spend (ROAS). It establishes a 90-day initial growth runway to allow adequate time for algorithmic learning and multi-variant testing.",
      },
    ],
    faqs: [
      {
        question: "How is client ad spend handled in this proposal?",
        answer:
          "Client ad spend is billed directly to the client's credit card by the ad platforms (Google/Meta), keeping agency management fees separate and transparent.",
      },
      {
        question: "What is the recommended contract duration for marketing retainers?",
        answer:
          "A 3-month or 6-month initial agreement is standard to provide sufficient runway for ad pixel calibration, negative keyword optimization, and creative testing.",
      },
      {
        question: "Are weekly or monthly performance reports included?",
        answer:
          "Yes. The proposal specifies bi-weekly sprint updates and a comprehensive end-of-month executive dashboard covering ROAS, CPA, and pipeline conversions.",
      },
    ],
  },

  "construction-bid": {
    profession: "General Contractors & Builders",
    category: "proposals",
    metaTitle: "Free Construction Bid Proposal Template",
    subtitle:
      "A comprehensive construction and remodeling bid proposal template. Itemize materials takeoff, labor rates, subcontractor allowances, permit timelines, and payment draw schedules.",
    sections: [
      {
        heading: "Detailed scope of work and architectural specification breakdown",
        body:
          "Construction bids require meticulous clarity to prevent costly change-order disputes. This proposal organizes project scope into trade-specific phases: site demolition, foundation work, framing, plumbing rough-in, electrical, drywall, flooring, and finishing fixtures. Each phase itemizes material specifications, brand allowances, and labor hours, demonstrating professional trade competence to commercial property managers and homeowners alike.",
      },
      {
        heading: "Subcontractor management, site safety, and municipal permits",
        body:
          "Address the operational and regulatory requirements of building projects upfront. The proposal outlines the contractor's responsibility for securing city building permits, passing structural inspections, maintaining OSHA-compliant job site safety, and carrying full commercial general liability and workers' compensation insurance.",
      },
      {
        heading: "Construction draw schedules and change-order procedures",
        body:
          "Protect cash flow with structured milestone draw schedules: mobilization deposit, framing completion, drywall finish, and final punch-list sign-off. It incorporates a formal Change Order Protocol stipulating that any structural modifications or upgraded finishes requested during construction must be priced and approved in writing prior to execution.",
      },
    ],
    faqs: [
      {
        question: "How do construction draw payments protect cash flow?",
        answer:
          "Draw schedules ensure the contractor receives payments upon verifiable completion of key building phases (framing, rough-in, drywall) rather than financing the entire project out of pocket.",
      },
      {
        question: "How are unexpected site complications or structural discoveries handled?",
        answer:
          "The proposal includes a formal Change Order clause where unforeseen conditions are documented, costed, and signed off before additional work commences.",
      },
      {
        question: "Does the proposal verify contractor insurance and licensing?",
        answer:
          "Yes. Dedicated sections allow you to display state contractor license numbers, bond details, and proof of general liability insurance.",
      },
    ],
  },

  // ── LETTERS ───────────────────────────────────────────────────────────────
  "resignation-nurse": {
    profession: "Registered Nurses & Healthcare Workers",
    category: "letters",
    metaTitle: "Free Nurse Resignation Letter Template",
    subtitle:
      "A formal, professional resignation letter template tailored for registered nurses, nurse practitioners, and clinical staff. Ensure smooth patient care transition and positive supervisor references.",
    sections: [
      {
        heading: "Maintaining clinical professionalism and patient handoff continuity",
        body:
          "Resigning from a hospital or clinical department requires utmost professionalism to safeguard patient care standards and retain pristine references from unit nurse managers and medical directors. This template provides a dignified opening that states your official position (e.g., Staff RN, ICU Nurse), unit department, and exact last day of employment based on required healthcare notice periods (typically 3 to 4 weeks for clinical shifts).",
      },
      {
        heading: "Offering comprehensive shift coverage and onboarding support",
        body:
          "Highlight your willingness to assist in training replacement nursing staff, completing electronic health record (EHR) chart audits, and organizing unit handoff protocols. Expressing genuine appreciation for clinical learning opportunities, team camaraderie, and mentorship reinforces professional goodwill across medical networks.",
      },
      {
        heading: "HR credentialing, benefits transition, and license retention",
        body:
          "A properly documented resignation letter serves as essential documentation for your hospital human resources file, ensuring unhindered processing of accrued PTO payouts, health insurance COBRA transitions, and prompt verification of clinical hours for continuing education or out-of-state nursing board licensing endorsements.",
      },
    ],
    faqs: [
      {
        question: "How much notice should a nurse provide when resigning?",
        answer:
          "While two weeks is standard in corporate settings, healthcare units frequently require 3 to 4 weeks to adjust shift scheduling rosters and onboard clinical replacements.",
      },
      {
        question: "Should I mention my new hospital or employer in the letter?",
        answer:
          "It is not required. Keep the letter focused on expressing gratitude, stating your final shift date, and ensuring an orderly clinical handover.",
      },
      {
        question: "Can I download and edit this letter in Word and PDF?",
        answer:
          "Yes. You can edit the text in your browser, format margins according to official corporate letterhead standards, and download as PDF or Word.",
      },
    ],
  },

  "cover-letter-software-engineer": {
    profession: "Software Engineers & Tech Leads",
    category: "letters",
    metaTitle: "Free Software Engineer Cover Letter",
    subtitle:
      "An impact-focused cover letter template for full-stack, frontend, backend, and DevOps engineers. Showcase architecture wins, technical stacks, and GitHub/system achievements.",
    sections: [
      {
        heading: "Leading with engineering impact rather than generic job duties",
        body:
          "Engineering hiring managers and CTOs evaluate candidates on technical problem-solving and tangible business results. This cover letter template avoids passive introductory fluff and opens immediately with your core tech stack expertise (e.g., TypeScript, Go, Python, AWS, Kubernetes) and a major engineering milestone—such as reducing API latency by 45% or architecting high-throughput microservices handling millions of daily requests.",
      },
      {
        heading: "Aligning technical stack proficiency with company engineering challenges",
        body:
          "The middle narrative bridges your past architectural victories with the target company's current scaling hurdles. It provides dedicated paragraphs to explain how you led test-driven development (TDD), streamlined CI/CD deployment pipelines, improved database indexing efficiency, and mentored junior developers across cross-functional product squads.",
      },
      {
        heading: "Showcasing open-source contributions, repositories, and technical enthusiasm",
        body:
          "Stand out from hundreds of applicants by referencing open-source repository contributions, technical blog posts, or live SaaS projects. The closing paragraph includes a confident call to action inviting the hiring manager to review your GitHub portfolio and discuss technical system architecture in an initial interview.",
      },
    ],
    faqs: [
      {
        question: "Do software engineers still need cover letters in 2026?",
        answer:
          "Yes. For competitive tech roles, a tailored cover letter explaining why you are excited about their specific technical architecture significantly boosts interview callback rates.",
      },
      {
        question: "How long should a software engineering cover letter be?",
        answer:
          "Keep it strictly to 250–350 words (under one page). Focus on 2–3 quantified engineering wins and your relevant technology stack.",
      },
      {
        question: "Is this cover letter template ATS-compliant?",
        answer:
          "Yes. It uses clean, single-column margins and standard typography that passes Applicant Tracking System parsers without text corruption.",
      },
    ],
  },

  "offer-letter-startup": {
    profession: "Startups & Tech Founders",
    category: "letters",
    metaTitle: "Free Startup Job Offer Letter Template",
    subtitle:
      "A formal job offer letter template for tech startups, scale-ups, and early-stage companies. Detail equity stock option grants, vesting cliffs, remote work perks, and IP agreements.",
    sections: [
      {
        heading: "Presenting compensation, equity stock grants, and vesting schedules",
        body:
          "Hiring top talent at a fast-growing startup requires articulating the full compensation package clearly. This offer letter outlines base salary, performance bonus targets, and equity incentives (Stock Options or RSUs). It clearly spells out standard vesting structures (such as a 4-year vesting schedule with a 1-year cliff), ensuring both the employee and founding team have aligned long-term growth incentives.",
      },
      {
        heading: "Defining remote work stipends, flexible benefits, and reporting lines",
        body:
          "Modern tech hires prioritize culture, workplace flexibility, and modern tools. The letter details health insurance coverage, 401(k) / pension matching, home office hardware stipends, learning allowances, and reporting hierarchy (direct report to VP of Engineering or Head of Product).",
      },
      {
        heading: "Confidentiality, intellectual property assignment, and acceptance deadlines",
        body:
          "Protect proprietary startup technology with explicit conditional clauses: employment is contingent upon signing standard Proprietary Information and Inventions Agreements (PIIA) and background checks. An acceptance signature block with an expiration date creates urgency for the candidate to confirm their acceptance.",
      },
    ],
    faqs: [
      {
        question: "How does a 1-year vesting cliff work in an offer letter?",
        answer:
          "A 1-year cliff means the employee must complete 12 months of service before any equity stock options begin to vest (typically 25% after year one, then monthly thereafter).",
      },
      {
        question: "Can I customize the letterhead with our company logo?",
        answer:
          "Yes. Upload your startup logo, modify terms and benefits, and generate a professional vector PDF ready for candidate electronic signature.",
      },
      {
        question: "What legal agreements should accompany this offer letter?",
        answer:
          "It is standard to attach a Proprietary Information and Inventions Agreement (PIIA) and Employee Handbook alongside the formal offer letter.",
      },
    ],
  },
};
