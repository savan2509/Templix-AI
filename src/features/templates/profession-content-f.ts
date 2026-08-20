// Batch F — Role & Industry Programmatic Content for Reports, Business Plans, Quotations, Resumes, and Invoices.
//
// Meticulously structured 150-250+ words copy per variant with bespoke FAQs.

export const professionContentF: Record<string, any> = {
  // ── REPORTS ───────────────────────────────────────────────────────────────
  "seo-monthly-report": {
    profession: "SEO & Growth Agencies",
    category: "reports",
    metaTitle: "Free Monthly SEO Report Template",
    subtitle:
      "A client-ready monthly SEO report template for digital agencies and SEO consultants. Track organic search traffic, keyword ranking changes, backlink acquisition, and organic conversion ROI.",
    sections: [
      {
        heading: "Executive summary and organic search performance KPI scorecard",
        body:
          "Enterprise and SMB clients care most about business growth and conversion results. This report begins with a high-level executive scorecard tracking organic traffic growth (sessions, users, new visitors), search impressions, click-through rate (CTR), and top-line goal completions. It synthesizes complex technical analytics into clear business outcomes that marketing directors and C-suite stakeholders can understand at a glance.",
      },
      {
        heading: "Keyword ranking movements, visibility indexes, and SERP features",
        body:
          "Demonstrate search dominance with structured keyword tracking tables. Categorize target search terms into commercial intent clusters, showing rank improvements, average SERP position changes, and featured snippet wins across desktop and mobile devices. Highlight competitive visibility gains against top rival domains.",
      },
      {
        heading: "Technical SEO audits, backlink acquisition, and next month action roadmap",
        body:
          "Detail technical crawl health (Core Web Vitals scores, 404 error resolutions, schema implementation) and new high-authority backlink acquisitions. Conclude with a prioritized 30-day tactical roadmap outlining upcoming content creation, on-page optimization, and internal linking initiatives.",
      },
    ],
    faqs: [
      {
        question: "What core metrics should be included in a monthly SEO report?",
        answer:
          "Organic traffic sessions, keyword ranking distributions, conversion goal completions, Core Web Vitals health, and high-authority backlinks acquired.",
      },
      {
        question: "Can I export this SEO report to PDF and Word?",
        answer:
          "Yes. Customize metrics, add your agency logo, and download a clean PDF or Word file ready for client presentation.",
      },
      {
        question: "How often should SEO reports be shared with clients?",
        answer:
          "Monthly reporting is industry standard, supported by brief bi-weekly sprint notes for fast-moving technical or link building campaigns.",
      },
    ],
  },

  "sales-quarterly-report": {
    profession: "Sales Directors & Account Executives",
    category: "reports",
    metaTitle: "Free Quarterly Sales Report Template",
    subtitle:
      "A comprehensive quarterly sales performance report template. Track revenue quota attainment, deal pipeline velocity, customer acquisition cost (CAC), and sales forecast models.",
    sections: [
      {
        heading: "Revenue attainment against quarterly targets and year-over-year growth",
        body:
          "Present sales figures with executive precision. This quarterly report structure breaks down closed-won revenue against quarterly quotas, comparing performance against prior quarters and year-over-year (YoY) benchmarks. It separates new business acquisition from expansion revenue, upsells, and recurring subscription renewals.",
      },
      {
        heading: "Sales funnel velocity, conversion conversion rates, and deal cycle duration",
        body:
          "Analyze the health of your sales pipeline. The report itemizes lead-to-opportunity conversion rates, average contract value (ACV), stage-by-stage pipeline velocity, and sales cycle length. It highlights win/loss post-mortem insights to identify common competitor friction points and improve objection handling.",
      },
      {
        heading: "Individual rep performance scorecards and forward quarter pipeline forecasts",
        body:
          "Celebrate high-performing account executives and provide transparent leaderboard visibility across SDR and AE teams. Conclude with a weighted sales forecast model for the upcoming quarter based on active CRM pipeline opportunities.",
      },
    ],
    faqs: [
      {
        question: "What is pipeline velocity in sales reporting?",
        answer:
          "Pipeline velocity measures how fast qualified deals move through your sales stages to become closed-won revenue, calculated using opportunity count, win rate, ACV, and sales cycle length.",
      },
      {
        question: "Can this report be customized for B2B SaaS sales?",
        answer:
          "Yes. Easily input Annual Recurring Revenue (ARR), Monthly Recurring Revenue (MRR), expansion revenue, and net revenue retention (NRR) metrics.",
      },
      {
        question: "Is this report suitable for board meetings and executive reviews?",
        answer:
          "Yes. It features clean executive summaries, clear metric callouts, and structured tables ideal for executive leadership and board decks.",
      },
    ],
  },

  "project-status-it": {
    profession: "IT Project Managers & Scrum Masters",
    category: "reports",
    metaTitle: "Free IT Project Status Report Template",
    subtitle:
      "An executive IT project status update template for Agile and Waterfall technology initiatives. Track sprint velocity, milestone deadlines, project budget burn, and risk logs.",
    sections: [
      {
        heading: "Overall project health status (RAG) and milestone tracking",
        body:
          "Keep stakeholders aligned without drowning in Jira tickets. This IT project report uses universal Red-Amber-Green (RAG) status indicators to communicate project health across scope, schedule, and budget. It clearly lists completed deliverables against the master project charter timeline and highlights upcoming milestone target dates.",
      },
      {
        heading: "Sprint velocity, burn-down progress, and technical deliverables",
        body:
          "Summarize development momentum across engineering squads. Detail completed story points, QA testing pass rates, production deployment stages, and system architecture migrations. It clearly articulates technical dependencies between front-end, back-end, database, and infrastructure teams.",
      },
      {
        heading: "Risk management register, critical blockers, and resource allocation",
        body:
          "Proactively address impediments before they cause project delays. The Risk Log itemizes critical blockers, third-party vendor dependencies, security compliance findings, and corresponding mitigation actions with designated owners and target resolution dates.",
      },
    ],
    faqs: [
      {
        question: "What does RAG status mean in project management?",
        answer:
          "RAG stands for Red (critical blocker/delay), Amber (potential risk requiring monitoring), and Green (on track according to scope, budget, and timeline).",
      },
      {
        question: "How often should IT status reports be issued?",
        answer:
          "Weekly status updates are recommended for active technical sprints, while monthly executive roll-ups are suited for enterprise steering committees.",
      },
      {
        question: "Can I add custom Gantt chart milestones to this report?",
        answer:
          "Yes. You can edit milestone rows, delivery dates, and phase owners directly in the browser before exporting to PDF or DOCX.",
      },
    ],
  },

  // ── BUSINESS PLANS ────────────────────────────────────────────────────────
  "saas-startup": {
    profession: "SaaS Founders & Tech Entrepreneurs",
    category: "business-plans",
    metaTitle: "Free SaaS Startup Business Plan Template",
    subtitle:
      "An investor-ready SaaS business plan template. Model recurring revenue (MRR/ARR), customer acquisition economics (CAC/LTV), product roadmap, and pitch funding requirements.",
    sections: [
      {
        heading: "Executive summary, value proposition, and SaaS problem-solution fit",
        body:
          "Venture capital investors and angel syndicates seek clarity on market opportunity and unique technical advantage. This SaaS business plan articulates the core workflow bottleneck your software solves, your proprietary moat (e.g., proprietary AI models, unique network effects, or patent-pending data processing), and your target Total Addressable Market (TAM, SAM, SOM).",
      },
      {
        heading: "Unit economics: CAC, LTV, churn rates, and pricing tiers",
        body:
          "Showcase financial viability with institutional-grade SaaS unit economics. The template outlines your pricing tiers (Freemium, Pro, Enterprise), average revenue per user (ARPU), customer acquisition cost (CAC), customer lifetime value (LTV), and target payback period (under 12 months). It highlights gross margin projections (typically 75%–85% for pure software) and net revenue retention (NRR) targets.",
      },
      {
        heading: "Go-to-market (GTM) engine, product roadmap, and funding runway",
        body:
          "Detail your customer acquisition strategy across product-led growth (PLG), inbound content marketing, and outbound enterprise sales. Outline engineering milestones across MVP, Alpha, and Beta releases, culminating in a transparent Use of Funds breakdown detailing hiring, infrastructure, and marketing runway.",
      },
    ],
    faqs: [
      {
        question: "What is an ideal LTV to CAC ratio for a SaaS business plan?",
        answer:
          "An LTV:CAC ratio of 3:1 or higher is considered standard for a healthy, venture-backable SaaS business model.",
      },
      {
        question: "Does this template include financial pro-forma balance sheets?",
        answer:
          "Yes. It includes structured 3-year revenue, COGS, operating expense, and cash runway financial forecast tables.",
      },
      {
        question: "Can I use this business plan to apply for startup loans or grants?",
        answer:
          "Yes. It follows SBA and commercial bank standards for tech startup business plan submissions.",
      },
    ],
  },

  "restaurant-cafe": {
    profession: "Restaurant & Cafe Owners",
    category: "business-plans",
    metaTitle: "Free Restaurant Business Plan Template",
    subtitle:
      "A comprehensive business plan template for restaurants, cafes, bakeries, and food trucks. Outline menu concepts, prime cost financial models, kitchen equipment leasing, and licensing.",
    sections: [
      {
        heading: "Concept, culinary vision, and local demographic market analysis",
        body:
          "Hospitality ventures succeed when culinary vision aligns with local foot traffic and customer demographics. This business plan details your dining concept, sample menu pricing, target customer personas, interior aesthetic, and competitive analysis within a 5-mile radius. It explains your unique culinary differentiator—whether farm-to-table sourcing, specialty third-wave coffee, or fast-casual convenience.",
      },
      {
        heading: "Operational workflow, kitchen layout, health permits, and staffing",
        body:
          "Prove operational readiness to landlords and bank lenders. The plan covers kitchen equipment lists, point-of-sale (POS) systems, food safety and liquor licensing timelines, front-of-house vs back-of-house staffing rosters, and supplier vendor agreements for fresh produce, meats, and beverages.",
      },
      {
        heading: "Prime cost financial modeling: food cost percentage and breakeven covers",
        body:
          "Food and beverage businesses live or die by their prime costs (Food + Labor Costs, which should remain below 60% of total revenue). The financial model calculates food cost percentages per menu item, average ticket size, table turn rates during lunch and dinner services, and daily breakeven customer count.",
      },
    ],
    faqs: [
      {
        question: "What is the recommended prime cost percentage for a restaurant?",
        answer:
          "Prime cost (combined cost of goods sold plus total payroll) should ideally stay between 55% and 60% of total gross sales for sustainable profitability.",
      },
      {
        question: "Is this template accepted by commercial landlords for restaurant leases?",
        answer:
          "Yes. Landlords and retail brokers look for detailed concept summaries, financial reserves, and operational staffing plans before issuing restaurant leases.",
      },
      {
        question: "Can I adjust numbers for a food truck or coffee shop?",
        answer:
          "Yes. All menu items, equipment lists, and revenue models are fully editable for cafes, food trucks, and bakeries.",
      },
    ],
  },

  "ecommerce-brand": {
    profession: "E-Commerce Brands & D2C Founders",
    category: "business-plans",
    metaTitle: "Free E-Commerce Business Plan Template",
    subtitle:
      "A complete D2C and e-commerce business plan template. Model inventory turnover, supply chain logistics, ROAS ad spend, fulfillment (3PL), and gross merchandise value (GMV).",
    sections: [
      {
        heading: "Product line, brand positioning, and target consumer persona",
        body:
          "Launch and scale a high-margin online brand. This business plan template details your hero product line, supply chain manufacturing partnerships, packaging design, and unique brand story. It defines target consumer demographics, shopping behaviors, and average order value (AOV) targets.",
      },
      {
        heading: "Digital marketing engine, influencer seeding, and retention lifecycle",
        body:
          "Articulate your multi-channel acquisition strategy across Meta and TikTok ads, Google Shopping, influencer gifting, affiliate networks, and Klaviyo email/SMS retention funnels. Detail your repeat purchase rate expectations and customer review collection strategy to drive organic social proof.",
      },
      {
        heading: "Inventory cash conversion cycle, 3PL fulfillment, and unit margins",
        body:
          "E-commerce cash flow depends on managing inventory lead times and logistics costs. The financial section breaks down product manufacturing cost (COGS), ocean/air freight, 3PL pick-and-pack fulfillment fees, payment gateway transaction cuts, and net contribution margin per unit.",
      },
    ],
    faqs: [
      {
        question: "What is a healthy contribution margin for D2C e-commerce?",
        answer:
          "A healthy Contribution Margin (revenue minus COGS, shipping, payment fees, and direct ad spend) is typically 20% to 30% or higher.",
      },
      {
        question: "Does the template support Amazon FBA and Shopify hybrid models?",
        answer:
          "Yes. You can model both direct-to-consumer (Shopify) and third-party marketplace channels (Amazon FBA, TikTok Shop).",
      },
      {
        question: "Can I export this business plan to PDF and Word for investor pitches?",
        answer:
          "Yes. Download instant, watermark-free PDF and Word files formatted for banking and angel investor reviews.",
      },
    ],
  },

  // ── QUOTATIONS ────────────────────────────────────────────────────────────
  "web-development-quote": {
    profession: "Web Developers & Software Studios",
    category: "quotations",
    metaTitle: "Free Web Development Quote Template",
    subtitle:
      "A professional web development price quotation and estimate template. Itemize front-end development, backend APIs, database schemas, third-party integrations, and testing hours.",
    sections: [
      {
        heading: "Itemizing development sprints, API architecture, and QA testing",
        body:
          "Provide prospective clients with total pricing transparency. This quote template breaks down technical scope into clear line items: UI component development, REST/GraphQL API integration, authentication, database migrations, cross-browser testing, and staging server setup. Showing clear hourly or fixed-sprint rates prevents client sticker shock and positions you as a disciplined engineering partner.",
      },
      {
        heading: "Third-party software licenses, cloud hosting, and domain costs",
        body:
          "Ensure clients understand infrastructure requirements. The estimate explicitly separates software development labor from recurring third-party subscriptions such as Vercel/AWS cloud hosting, Stripe payment gateway fees, SendGrid transactional email, and SSL certificates.",
      },
      {
        heading: "Quote validity period, payment milestones, and change-request rates",
        body:
          "Protect your project timeline and rates. The quotation features an explicit 30-day price validity period, standard milestone deposit terms (50% upfront, 50% on final QA delivery), and clearly lists your hourly change-request rate for features added outside the initial quote.",
      },
    ],
    faqs: [
      {
        question: "How long should a web development quote remain valid?",
        answer:
          "A 30-day validity window is industry standard to account for developer calendar availability and fluctuating third-party software pricing.",
      },
      {
        question: "Can I include optional add-on feature tiers in this quote?",
        answer:
          "Yes. You can add optional line items for post-launch maintenance retainers, CMS training sessions, and advanced SEO setup.",
      },
      {
        question: "Is this quotation template free with instant PDF export?",
        answer:
          "Yes. 100% free with no account or sign-up needed, exporting cleanly to PDF and Word.",
      },
    ],
  },

  "construction-estimate": {
    profession: "General Contractors & Tradesmen",
    category: "quotations",
    metaTitle: "Free Construction Estimate Template",
    subtitle:
      "A comprehensive construction and remodeling estimate template. Calculate materials costs, trade labor hours, equipment rentals, permit fees, and contingency margins.",
    sections: [
      {
        heading: "Material takeoff lists, trade labor splits, and unit pricing",
        body:
          "Build client confidence with clear, itemized construction estimates. This template separates materials (lumber, concrete, drywall, electrical wiring, plumbing fixtures) from trade labor hours. It allows unit pricing per square foot or linear foot, ensuring clients see exactly where their investment is going.",
      },
      {
        heading: "Equipment hire, demolition waste disposal, and municipal permit fees",
        body:
          "Cover all job site overhead expenses. The estimate includes dedicated line items for dumpster rental, hazardous waste disposal, scaffolding hire, heavy machinery leasing, and city building inspection permit fees.",
      },
      {
        heading: "Contingency buffer, payment draw schedule, and signature acceptance",
        body:
          "Protect against unexpected site discoveries by including a standard 10% to 15% material price escalation contingency line. A formal client signature and date block turns the estimate into an approved work authorization.",
      },
    ],
    faqs: [
      {
        question: "What is a standard contingency percentage in construction estimates?",
        answer:
          "A 10% to 15% contingency buffer is standard for residential remodeling to cover unforeseen plumbing, electrical, or structural framing repairs.",
      },
      {
        question: "Can I add sales tax and GST/VAT to materials?",
        answer:
          "Yes. The estimate automatically computes sub-totals, customizable sales tax or VAT percentages, and the grand total.",
      },
      {
        question: "Can this estimate be used as a binding contract upon client signature?",
        answer:
          "Yes. The integrated client acceptance signature block can serve as formal authorization to begin procurement and work.",
      },
    ],
  },

  "commercial-cleaning-estimate": {
    profession: "Commercial Cleaning & Janitorial Companies",
    category: "quotations",
    metaTitle: "Free Commercial Cleaning Quote Template",
    subtitle:
      "A professional janitorial and commercial cleaning quote template. Estimate per-square-foot rates, recurring office visits, floor buffing, and window cleaning add-ons.",
    sections: [
      {
        heading: "Square footage pricing, visit frequency, and scope of service",
        body:
          "Win lucrative office and facility cleaning contracts with transparent rate structures. This template calculates cleaning fees based on facility square footage, restroom counts, kitchen breakrooms, and service frequency (nightly, 3x/week, weekly). It provides clear task checklists for trash disposal, dusting, sanitization, and vacuuming.",
      },
      {
        heading: "Specialty services: carpet shampooing, floor waxing, and window cleaning",
        body:
          "Upsell high-margin periodic specialty services. Include standalone quote rows for quarterly carpet steam extraction, high-traffic floor stripping and waxing, and exterior window cleaning.",
      },
      {
        heading: "Cleaning chemical supplies, insurance verification, and billing terms",
        body:
          "Reassure facility managers by noting that commercial-grade eco-friendly cleaning chemicals and equipment are included. Display commercial liability insurance coverage and establish net-15 or net-30 monthly invoicing terms.",
      },
    ],
    faqs: [
      {
        question: "How do janitorial companies calculate commercial cleaning quotes?",
        answer:
          "Quotes are typically calculated using square footage (e.g., $0.08 to $0.20 per sq. ft.) multiplied by visit frequency, adjusted for restroom and fixture counts.",
      },
      {
        question: "Are cleaning supplies billed separately?",
        answer:
          "Standard cleaning chemicals and microfiber equipment are usually bundled into the service rate, while consumable restock items (paper towels, hand soap) can be itemized separately.",
      },
      {
        question: "Can I set up recurring monthly invoicing on this quote?",
        answer:
          "Yes. The quote clearly displays both the per-visit cost and the estimated monthly billing total.",
      },
    ],
  },

  // ── RESUMES ───────────────────────────────────────────────────────────────
  "career-change": {
    profession: "Career Changers & Transitioning Professionals",
    category: "resumes",
    metaTitle: "Free Career Change Resume Template",
    subtitle:
      "An ATS-friendly hybrid and functional resume template designed for career changers. Pivot into a new industry by highlighting transferable skills, certifications, and portfolio projects.",
    sections: [
      {
        heading: "Framing transferable skills over chronological job titles",
        body:
          "Transitioning into a new industry requires pivoting away from strict chronological job history in favor of high-impact functional skill clusters (e.g., Project Leadership, Cross-Functional Communication, Data Analysis, Client Strategy). This resume template leads with a powerful Summary Statement and Core Competency Matrix that immediately shows hiring managers how your past achievements apply directly to your new target domain.",
      },
      {
        heading: "Highlighting recent bootcamps, certifications, and relevant coursework",
        body:
          "Place your new technical qualifications front and center. Dedicated credential sections let you showcase recent professional certifications (PMP, AWS Cloud Practitioner, Google Analytics, Scrum Master), intensive bootcamps, and relevant continuing education coursework.",
      },
      {
        heading: "Showcasing real-world portfolio projects and capstone initiatives",
        body:
          "When you lack direct industry tenure, tangible portfolio projects prove your capability. The template provides structured project entries to detail problem statements, technical tools used, and measurable results achieved.",
      },
    ],
    faqs: [
      {
        question: "What is the best resume format for changing careers?",
        answer:
          "A hybrid (combination) resume format that places a transferable skills matrix near the top before listing chronological work history.",
      },
      {
        question: "Is this career change resume ATS-friendly?",
        answer:
          "Yes. It uses clean single-column hierarchy that applicant tracking systems parse smoothly without misinterpreting section headings.",
      },
      {
        question: "Can I download this resume in Word and PDF?",
        answer:
          "Yes. Edit directly online and export to both print-ready PDF and editable DOCX formats with no sign-up.",
      },
    ],
  },

  "entry-level": {
    profession: "Students, Graduates & Entry-Level Job Seekers",
    category: "resumes",
    metaTitle: "Free Entry-Level Resume Template",
    subtitle:
      "An ATS-optimized resume template for college students, fresh graduates, and entry-level applicants. Showcase academic honors, internships, technical skills, and campus leadership.",
    sections: [
      {
        heading: "Emphasizing education, honors, relevant coursework, and GPA",
        body:
          "When launching your professional career, academic achievements are your strongest asset. This template places Education prominently near the top, featuring structured fields for major/degree, university name, graduation date, GPA (if 3.5+), Dean's List honors, and relevant upper-level coursework.",
      },
      {
        heading: "Transforming internships, campus leadership, and part-time jobs into impact",
        body:
          "Every experience counts when framed with active action verbs. Learn to articulate student government leadership, fraternity/sorority treasurer roles, volunteer initiatives, and summer internships using quantifiable metrics—such as coordinating campus events for 500+ attendees or managing student budgets.",
      },
      {
        heading: "Technical competencies, tool proficiencies, and language skills",
        body:
          "Highlight hands-on tool proficiencies (Excel, Python, Figma, HubSpot, Adobe Suite) and foreign language proficiencies in a clean, scannable skills grid that captures recruiter attention during 6-second initial screenings.",
      },
    ],
    faqs: [
      {
        question: "Should an entry-level resume strictly be one page?",
        answer:
          "Yes. For students and applicants with under 5 years of experience, a clean one-page resume layout is universally expected by corporate recruiters.",
      },
      {
        question: "Can I include part-time retail or restaurant experience?",
        answer:
          "Yes! Highlight transferable competencies such as customer communication, cash handling, team collaboration, and time management under pressure.",
      },
      {
        question: "Is there any watermark when downloading this free resume?",
        answer:
          "No. All exports are 100% free and completely watermark-free.",
      },
    ],
  },

  "sales": {
    profession: "Sales Executives & Account Managers",
    category: "resumes",
    metaTitle: "Free Sales Representative Resume Template",
    subtitle:
      "A high-impact, metric-driven resume template for sales reps, SDRs, and Account Executives. Highlight quota attainment percentages, revenue growth, CRM mastery, and pipeline metrics.",
    sections: [
      {
        heading: "Leading with quota attainment percentages and revenue metrics",
        body:
          "Sales hiring managers and VP of Sales evaluate resumes strictly on revenue performance. This template is designed around quantifiable metrics: quota attainment percentages (e.g., '142% of annual sales quota achieved'), total revenue closed ($1.2M+ ARR), average deal size, and new client logos signed.",
      },
      {
        heading: "Sales methodologies, CRM proficiency, and outbound prospecting",
        body:
          "Highlight your mastery of modern sales tech stacks and methodologies—including Salesforce, HubSpot, Outreach, Salesloft, ZoomInfo, MEDDIC, Challenger Sale, and SPIN Selling. Detail your pipeline creation volume across cold outreach, inbound qualification, and executive product demonstrations.",
      },
      {
        heading: "Awards, President's Club honors, and territory expansion",
        body:
          "Feature prestigious career milestones with dedicated achievement callouts: President's Club winner, Top Regional Rep of the Year, and fastest ramp-to-productivity in company history.",
      },
    ],
    faqs: [
      {
        question: "What numbers are most important on a sales resume?",
        answer:
          "Quota attainment percentages (e.g. 125% of plan), total ARR/revenue closed, average sales cycle length, and pipeline generated.",
      },
      {
        question: "Should I mention sales methodologies like MEDDIC or Challenger?",
        answer:
          "Yes. Sales leaders specifically look for structured sales methodologies and CRM proficiencies in competitive tech and medical sales hiring.",
      },
      {
        question: "Can I download this sales resume as an editable Word file?",
        answer:
          "Yes. Download both vector PDF and editable Word (.docx) formats instantly.",
      },
    ],
  },
};
