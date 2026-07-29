// Additional, per-template document content for the "proposals" category.
// Each proposal below is a distinct, domain-specific template with its own
// unique section structure, bullet lists, pricing tables, and visual styling,
// so no two proposal templates read or look alike.

export const proposalsExtraTemplates: any[] = [
  {
    id: "it-services-proposal",
    slug: "it-services-proposal",
    title: "IT Services Proposal Template",
    description: "Free IT services proposal template for managed support, network security, and cloud migration with a clear timeline and transparent pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Managed IT Services Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "MANAGED IT SERVICES PROPOSAL", footer: "99.9% Uptime SLA Guarantee. 24/7 Monitoring Included." },
      styles: { primaryColor: "#1e3a8a", secondaryColor: "#0284c7", layoutVariant: 5, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Managed IT Support & Security Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Date: {{proposalDate}} | Valid Until: {{validUntil}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Service Level Commitments (99.9% Uptime SLA)" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines a fully managed IT engagement designed to eliminate server downtime, secure end-user workstations, and streamline cloud migration for {{clientName}} with rapid 15-minute emergency response." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Technical Scope & Infrastructure Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "24/7 SIEM Network Monitoring: " }, { type: "text", text: "Automated intrusion detection, threat prevention, and patch management." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Helpdesk & On-Site Support: " }, { type: "text", text: "Unlimited remote helpdesk and emergency on-site technician dispatch." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Disaster Recovery & Backup: " }, { type: "text", text: "Encrypted daily cloud snapshots with 1-hour recovery time objective (RTO)." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Monthly Retainer & Support Tiers" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Tier" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Included Workstations & Servers" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly Fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Standard Managed IT" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Up to 25 Workstations / 2 Cloud Servers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,200 / mo" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise Security Tier" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Up to 60 Workstations / 5 Cloud Servers + Zero Trust MFA" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,500 / mo" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Acceptance & Sign-off" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved for {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "landscaping-proposal",
    slug: "landscaping-proposal",
    title: "Landscaping Proposal Template",
    description: "Free landscaping proposal template for garden design, hardscaping, and lawn maintenance with a project timeline and itemized pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Landscape Design Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "LANDSCAPE DESIGN & MAINTENANCE PROPOSAL", footer: "All plantings carry a 1-year nursery warranty." },
      styles: { primaryColor: "#166534", secondaryColor: "#15803d", layoutVariant: 0, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Landscape Architecture & Site Transformation Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Site: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Site Concept & Environmental Vision" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal presents a complete outdoor renovation for {{clientName}}, combining native drought-tolerant flora, decorative paver patios, automated drip irrigation, and architectural outdoor lighting." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Planting & Hardscape Work Packages" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Work Package" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Materials & Plants Included" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Site Grading & Hardscaping" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Natural stone pavers, retaining wall, sand sub-base" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,800.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Softscaping & Irrigation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mature shade trees, shrub beds, smart drip timer system" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,200.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Total Budget & Deposit Terms" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Project Cost: $12,000.00 " }, { type: "text", text: "(40% deposit upon schedule confirmation)." }] },
          { type: "paragraph", content: [{ type: "text", text: "Client Sign-off: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "photography-proposal",
    slug: "photography-proposal",
    title: "Photography Proposal Template",
    description: "Free photography proposal template for events, commercial shoots, and portraits with a shoot timeline and clear package pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Commercial Photography Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "COMMERCIAL PHOTOGRAPHY PROPOSAL", footer: "Includes high-res digital gallery & commercial usage license." },
      styles: { primaryColor: "#d97706", secondaryColor: "#b45309", layoutVariant: 1, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Commercial Photography & Brand Shoot Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Shoot: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Creative Direction & Production Concept" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will capture high-end lifestyle, product, and architectural imagery for {{clientName}}'s upcoming marketing campaigns and digital storefront." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Shoot Deliverables & Coverage Tiers" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Package Tier" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Shoot Duration & Deliverables" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Half-Day Brand Shoot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4 hours on-site, 50 retouched high-res images" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-Day Commercial Campaign" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8 hours, 2 photographers, 120 retouched images + RAWs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,600.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Image Licensing & Approval" }] },
          { type: "paragraph", content: [{ type: "text", text: "Includes full commercial print and digital marketing rights. Approved by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "sales-proposal",
    slug: "sales-proposal",
    title: "Sales Proposal Template",
    description: "B2B sales proposal template pitching products, ROI projections, pricing packages, and implementation terms.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "B2B Sales Expansion Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "B2B SALES EXPANSION PROPOSAL", footer: "Pricing valid through {{validUntil}}." },
      styles: { primaryColor: "#2563eb", secondaryColor: "#1d4ed8", layoutVariant: 2, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "B2B Enterprise Growth & Sales Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Proposal Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Market Opportunity & ROI Thesis" }] },
          { type: "paragraph", content: [{ type: "text", text: "By deploying our enterprise software solution, {{clientName}} can streamline team operations, cut administrative overhead by 28%, and accelerate deal close rates." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Commercial Pricing Options" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Licensing Tier" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Included Users & Support" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual Investment" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional Tier" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Up to 50 Seats, Standard API Access" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$14,000 / yr" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise Growth Tier" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Unlimited Seats, Dedicated Account Mgr, SLA" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$28,000 / yr" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Agreement Execution" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sign below to accept terms. Authorized by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "product-launch-proposal",
    slug: "product-launch-proposal",
    title: "Product Launch Proposal Template",
    description: "Strategic campaign proposal for launching new products across PR, digital media, influencers, and retail channels.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Product Launch Strategy Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "GO-TO-MARKET PRODUCT LAUNCH PROPOSAL", footer: "Campaign KPIs tracked via real-time dashboard." },
      styles: { primaryColor: "#ea580c", secondaryColor: "#c2410c", layoutVariant: 3, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Go-to-Market Product Launch Campaign Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Product: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Launch Architecture" }] },
          { type: "paragraph", content: [{ type: "text", text: "A 90-day multi-channel campaign designed to create launch hype, secure press features, and drive early adopter pre-orders for {{projectName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Channel Rollout Strategy" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Teaser Phase (Days 1–30): VIP waitlist buildup & influencer seed gifting" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launch Day Blitz (Day 31): Press release wire, live launch event, paid ads spike" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Sustain Phase (Days 32–90): Retargeting catalog ads & customer review amplification" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Campaign Budget & Fee" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Agency Execution Fee: $18,500.00 " }, { type: "text", text: "(Excludes direct paid media spend)." }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "hr-consulting-proposal",
    slug: "hr-consulting-proposal",
    title: "HR Consulting Proposal Template",
    description: "HR consulting proposal for recruitment, performance reviews, employee handbooks, and HR compliance audits.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "HR Advisory Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "HR CONSULTING & COMPLIANCE PROPOSAL", footer: "Complies with state and federal labor compliance codes." },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 4, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Human Capital & HR Audit Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Engagement Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will conduct a comprehensive audit of {{clientName}}'s HR policies, rewrite employee handbooks for full legal compliance, and implement an automated 360-degree performance evaluation system." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Key HR Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "2026 Compliant Employee Handbook & Remote Work Policy" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Salary Banding & Compensation Benchmarking Matrix" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Manager Interview & De-escalation Training Workshops" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Retainer Investment" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Engagement Fee: $8,500.00" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client Sign-off: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "financial-advisory-proposal",
    slug: "financial-advisory-proposal",
    title: "Financial Advisory Proposal Template",
    description: "Financial planning and corporate advisory proposal covering wealth management, capital allocation, and risk modeling.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Financial Advisory Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "FINANCIAL ADVISORY & CAPITAL PROPOSAL", footer: "Fiduciary standards apply to all capital guidance." },
      styles: { primaryColor: "#15803d", secondaryColor: "#14532d", layoutVariant: 5, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Corporate Financial & Capital Strategy Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Advisory Mandate" }] },
          { type: "paragraph", content: [{ type: "text", text: "Our team will evaluate {{clientName}}'s capital structure, optimize debt-to-equity ratios, and build 5-year cash flow forecasting models to maximize enterprise valuation." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Financial Services Table" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service Module" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital Modeling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3-statement DCF valuation model" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Tax Strategy & Restructuring" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Corporate entity tax optimization" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Authorization" }] },
          { type: "paragraph", content: [{ type: "text", text: "Accepted for {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "architecture-proposal",
    slug: "architecture-proposal",
    title: "Architecture Proposal Template",
    description: "Architectural design proposal covering site feasibility, RIBA stages 1-6, planning applications, and construction drawings.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Architectural Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "ARCHITECTURAL DESIGN PROPOSAL", footer: "Governed under standard architectural practice codes." },
      styles: { primaryColor: "#b45309", secondaryColor: "#78350f", layoutVariant: 0, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Master Architecture & Site Planning Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Site: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. RIBA Stage Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "RIBA Stage" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Key Deliverables" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage Fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage 1–2: Concept Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Site survey, 3D massing, initial floor plans" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage 3–4: Planning & Specs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Planning submission pack & structural drawings" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,500.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Client Acceptance" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "saas-proposal",
    slug: "saas-proposal",
    title: "SaaS Proposal Template",
    description: "Enterprise SaaS software proposal covering seat licensing, custom integration, security compliance, and annual SLAs.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "SaaS Software Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "ENTERPRISE SAAS SUBSCRIPTION PROPOSAL", footer: "SOC2 Type II & GDPR compliant platform." },
      styles: { primaryColor: "#4f46e5", secondaryColor: "#3730a3", layoutVariant: 1, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Enterprise SaaS Integration & Licensing Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Proposal Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Platform Capabilities" }] },
          { type: "paragraph", content: [{ type: "text", text: "Our cloud SaaS platform will enable {{clientName}} to automate customer workflows, unify analytics dashboards, and connect existing ERP tools via REST APIs." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Subscription Tiers" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Tier" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Included Features" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual Fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Business Tier" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Up to 50 user seats, standard SLA, email support" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,000 / yr" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise Custom" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Unlimited seats, dedicated SAM, custom SSO & webhooks" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$24,000 / yr" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Agreement" }] },
          { type: "paragraph", content: [{ type: "text", text: "Signed for {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "security-services-proposal",
    slug: "security-services-proposal",
    title: "Security Services Proposal Template",
    description: "Physical and electronic security proposal covering guard patrols, CCTV surveillance, access control, and emergency response.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Security Services Proposal",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: { header: "COMMERCIAL SECURITY PROPOSAL", footer: "Licensed & bonded security personnel." },
      styles: { primaryColor: "#1e293b", secondaryColor: "#0f172a", layoutVariant: 2, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Facility Security & Guard Services Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Facility: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Risk Assessment & Patrol Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will provide 24/7 licensed security guard patrols, access control monitoring, and CCTV surveillance for {{clientName}}'s facility." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Monthly Security Budget" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Guarding & Monitoring Fee: $6,400.00" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client Sign-off: ___________________________ Date: ____________" }] }
        ]
      }
    }
  }
];
