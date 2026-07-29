// Additional, per-template document content for the "proposals" category.
// A second batch of distinct, SEO-optimized proposal templates. Each document
// carries its own unique section structure, bullet lists, pricing tables, and
// visual accents, so no two proposals look or read alike.

export const proposalsExtra2Templates: any[] = [
  {
    id: "budget-proposal",
    slug: "budget-proposal",
    title: "Budget Proposal Template",
    description: "Free budget proposal template for departmental and project spending plans with a phased timeline and a fully itemized cost breakdown.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Annual Operating Budget Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "ANNUAL OPERATING BUDGET PROPOSAL", footer: "Subject to final board approval & quarterly audit." },
      styles: { primaryColor: "#0f766e", secondaryColor: "#115e59", layoutVariant: 3, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Departmental Operating Budget & Capital Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Department: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Budget Allocation Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "This budget proposal details the planned resource allocations across headcount, operational tools, infrastructure, and contingency reserves for {{clientName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Itemized Expenditure Schedule" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Budget Line Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Allocation Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual Budget" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Personnel & Salaries" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Core team compensation & benefits" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Software & SaaS Licenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud tooling, security, CRM" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Contingency Reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Emergency operational cushion" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45,000.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Approval Sign-off" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by Department Head: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "staffing-recruitment-proposal",
    slug: "staffing-recruitment-proposal",
    title: "Staffing & Recruitment Proposal Template",
    description: "Free staffing and recruitment proposal template for talent sourcing, executive search, and contract hiring with a clear timeline and transparent fees.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Recruitment & Staffing Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "EXECUTIVE RECRUITMENT & STAFFING PROPOSAL", footer: "90-Day Placement Replacement Guarantee Included." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#6d28d9", layoutVariant: 4, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Executive Search & Talent Acquisition Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Mandate: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Sourcing Methodology" }] },
          { type: "paragraph", content: [{ type: "text", text: "We combine targeted headhunting, talent pool benchmarking, and rigorous 3-stage interviews to present pre-screened shortlists within 14 business days." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Fee Structure Table" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Recruitment Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Pricing Model" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Fee Terms" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Direct Contingency Placement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Percentage of Annual Base" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18% upon start date" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Executive Retained Search" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fixed Retainer Fee" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,500.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Agreement Execution" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client Mandate Approval: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "logistics-proposal",
    slug: "logistics-proposal",
    title: "Logistics Proposal Template",
    description: "Supply chain and freight logistics proposal layout covering route optimization, warehousing rates, and delivery SLAs.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Logistics Services Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "FREIGHT & LOGISTICS PROPOSAL", footer: "Cargo insured up to $500,000 per shipment." },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 5, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Supply Chain & Freight Logistics Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Account: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Logistics Scope & Capacity" }] },
          { type: "paragraph", content: [{ type: "text", text: "We provide end-to-end warehousing, regional LTL freight transport, and automated GPS inventory tracking for {{clientName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Freight Rate Schedule" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Regional Transport Rate: " }, { type: "text", text: "$2.85 / mile" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Pallet Storage Fee: " }, { type: "text", text: "$18.00 / pallet / month" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Agreement" }] },
          { type: "paragraph", content: [{ type: "text", text: "Authorized Signature: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "ecommerce-proposal",
    slug: "ecommerce-proposal",
    title: "Ecommerce Proposal Template",
    description: "Shopify and Magento ecommerce proposal detailing storefront UX, payment gateway integrations, and conversion optimization.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Ecommerce Development Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "E-COMMERCE STOREFRONT PROPOSAL", footer: "PCI-DSS compliant storefront build." },
      styles: { primaryColor: "#16a34a", secondaryColor: "#15803d", layoutVariant: 0, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Shopify E-Commerce Storefront Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Store: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Storefront Features & Integrations" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom Shopify Liquid / Headless Next.js storefront design" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Stripe & PayPal 1-click checkout optimization" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Klaviyo email marketing & abandoned cart workflows" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Build Cost & Timeline" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total E-Commerce Build Fee: $9,500.00" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "content-marketing-proposal",
    slug: "content-marketing-proposal",
    title: "Content Marketing Proposal Template",
    description: "Content strategy proposal for blogging, whitepapers, video scripts, and organic SEO lead generation.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Content Strategy Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "CONTENT MARKETING PROPOSAL", footer: "SEO content calendar delivered monthly." },
      styles: { primaryColor: "#9333ea", secondaryColor: "#7e22ce", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Content Strategy & Editorial Growth Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Campaign: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Monthly Content Output" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "8 long-form SEO blog articles (1,500+ words each)" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "1 gated downloadable whitepaper / lead magnet per quarter" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom graphics and social distribution snippets for each post" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Retainer Fee" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Content Retainer: $3,200.00 / month" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "film-production-proposal",
    slug: "film-production-proposal",
    title: "Film Production Proposal Template",
    description: "Commercial video and film production proposal covering scripting, filming, crew fees, editing, and licensing.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Film & Video Production Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "COMMERCIAL FILM PRODUCTION PROPOSAL", footer: "Broadcast & web distribution rights included." },
      styles: { primaryColor: "#be185d", secondaryColor: "#9d174d", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Commercial Video & Film Production Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Film: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Production Stages" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Scope & Crew" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pre-Production & Script" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Storyboarding, location scouting, casting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Principal Photography" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2 days shoot, RED/ARRI camera package, 4 crew" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Post-Production & Color" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Editing, color grade, sound mix, licensed music" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,000.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Total Budget" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Production Budget: $21,000.00" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "engineering-services-proposal",
    slug: "engineering-services-proposal",
    title: "Engineering Services Proposal Template",
    description: "Civil and structural engineering proposal covering site inspections, structural calculations, and permit drawings.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Engineering Services Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "STRUCTURAL & CIVIL ENGINEERING PROPOSAL", footer: "PE Stamped & certified calculations." },
      styles: { primaryColor: "#0f766e", secondaryColor: "#115e59", layoutVariant: 3, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Civil & Structural Engineering Services Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Site: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Engineering Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "Structural load calculations, foundation design, and PE-stamped drawing sets for municipal building permit approval." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Engineering Fee" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Fixed Engineering Fee: $7,800.00" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by Client: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "nonprofit-fundraising-proposal",
    slug: "nonprofit-fundraising-proposal",
    title: "Nonprofit Fundraising Proposal Template",
    description: "Nonprofit grant and donor proposal detailing community mission, program impact, and transparent fund allocation.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Nonprofit Grant & Donor Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "NONPROFIT COMMUNITY FUNDRAISING PROPOSAL", footer: "501(c)(3) Tax-exempt organization." },
      styles: { primaryColor: "#15803d", secondaryColor: "#166534", layoutVariant: 4, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Community Program & Grant Support Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Presented to {{clientName}} by {{companyName}} | Project: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Community Need & Mission Impact" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal requests grant funding of $50,000 to support our youth STEM education initiative, serving over 1,200 students annually." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Allocation of Funds" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Program Area" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Use of Funds" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Budget" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "STEM Equipment & Kits" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Robotics kits, laptops, lab supplies" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$28,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Instructor Honorariums" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Certified workshop educators" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$16,000.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Board Endorsement" }] },
          { type: "paragraph", content: [{ type: "text", text: "Signed on behalf of {{companyName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "investment-proposal",
    slug: "investment-proposal",
    title: "Investment Proposal Template",
    description: "Venture capital and angel investment pitch proposal presenting unit economics, 5-year forecasts, and equity terms.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Venture Investment Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "VENTURE CAPITAL INVESTMENT PROPOSAL", footer: "Strictly confidential document for accredited investors." },
      styles: { primaryColor: "#1e3a8a", secondaryColor: "#172554", layoutVariant: 5, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Series-A Investment & Growth Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Presented by {{companyName}} to {{clientName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Market Opportunity & Traction" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} has achieved $1.2M ARR growing 22% MoM in a $14B TAM search market." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Investment Term Sheet Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Capital Ask: $2,500,000.00 for 15% Preferred Equity" }] },
          { type: "paragraph", content: [{ type: "text", text: "Investor Acknowledgment: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "cybersecurity-proposal",
    slug: "cybersecurity-proposal",
    title: "Cybersecurity Proposal Template",
    description: "Cybersecurity assessment and penetration testing proposal detailing threat vectors, audit scope, and remediation SLAs.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Cybersecurity Audit Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "CYBERSECURITY & PENETRATION TESTING PROPOSAL", footer: "Protected under Mutual Non-Disclosure Agreement." },
      styles: { primaryColor: "#991b1b", secondaryColor: "#7f1d1d", layoutVariant: 0, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Penetration Testing & Security Audit Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Scope: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Audit Objectives & Threat Vectors" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will perform black-box penetration testing, web app vulnerability scanning (OWASP Top 10), and SOC2 readiness auditing for {{clientName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Audit Fee & Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Audit Fee: $12,500.00 " }, { type: "text", text: "(Includes executive remediation report)." }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by Client: ___________________________ Date: ____________" }] }
        ]
      }
    }
  }
];
