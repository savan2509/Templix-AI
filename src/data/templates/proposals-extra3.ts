// proposals-extra3.ts — 10 distinct, hand-crafted proposal templates
// Each template has its own unique structure, bullet lists, pricing tables,
// and color accents tailored to its specific industry, so no two proposals
// look or read alike.

export const proposalsExtra3Templates: any[] = [
  {
    id: "web-design-proposal",
    slug: "web-design-proposal",
    title: "Web Design Proposal Template",
    description: "Free web design proposal template for agencies and freelancers — covers discovery, design, development, and launch phases with pricing options.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Web Design Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "WEB DESIGN & DEVELOPMENT PROPOSAL", footer: "Includes 30 days post-launch technical support & CMS training." },
      styles: { primaryColor: "#2563eb", secondaryColor: "#1e3a8a", layoutVariant: 1, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Web Design & UI/UX Development Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Executive Summary & Creative Vision" }] },
          { type: "paragraph", content: [{ type: "text", text: "We are pleased to submit this proposal to design and build a high-converting, mobile-responsive website for {{clientName}}. Our goal is to transform your digital presence, elevate your brand identity, and optimize user journeys to increase lead conversion." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Strategic Project Pillars" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Discovery & User Journeys: " }, { type: "text", text: "Audience research, competitor benchmarking, and sitemap architecture." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Figma UI/UX Design: " }, { type: "text", text: "Custom desktop and mobile wireframes with interactive component prototypes." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Modern Frontend Build: " }, { type: "text", text: "Next.js & React implementation with Tailwind CSS and fast page speeds." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "CMS & SEO Foundation: " }, { type: "text", text: "Structured CMS setup, canonical meta tags, schema markup, and analytics." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Scope of Work & Fee Schedule" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase / Module" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverables" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase 1: Wireframing & UI Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Figma design system, homepage + 6 subpage layouts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase 2: Next.js Frontend Build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Responsive code, API forms, animations & fast load" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,800.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase 3: CMS & Testing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Content loading, cross-browser QA, analytics & launch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Investment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Timeline: {{timeline}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{investmentAmount}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Terms & Proposal Acceptance" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment terms: {{paymentTerms}}. To accept this proposal and reserve your build slot, please approve below." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Accepted for {{clientName}}: " }, { type: "text", text: "___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "seo-proposal",
    slug: "seo-proposal",
    title: "SEO Proposal Template",
    description: "Free SEO proposal template covering website audit, keyword strategy, on-page optimization, link building, and monthly reporting with pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "SEO Strategy Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "ORGANIC SEARCH & SEO STRATEGY PROPOSAL", footer: "Monthly transparent performance reports delivered on the 1st." },
      styles: { primaryColor: "#059669", secondaryColor: "#064e3b", layoutVariant: 2, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SEO & Content Growth Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal details a 6-month organic search strategy designed to increase keyword rankings, drive qualified organic traffic, and convert search intent into customer pipeline for {{clientName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core SEO Pillars" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Module" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Scope of Activities" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Frequency" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Technical SEO Audit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Crawl error cleanup, canonical fix, Core Web Vitals, schema" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Month 1 & Quarterly" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On-Page & Keyword Intent" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "H1/title optimization, internal linking, semantic content expansion" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ongoing Monthly" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Link Authority & PR Outreach" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Digital PR pitches, high-DR editorial backlinks, brand mentions" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ongoing Monthly" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Retainer & Pricing Structure" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Retainer: " }, { type: "text", text: "{{investmentAmount}} per month" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Commitment Timeline: " }, { type: "text", text: "{{timeline}} (Cancelable with 30 days notice)" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approval Signature for {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "social-media-proposal",
    slug: "social-media-proposal",
    title: "Social Media Marketing Proposal Template",
    description: "Free social media proposal template for agencies — content calendar, posting frequency, engagement strategy, paid ads, and monthly retainer pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Social Media Strategy Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "SOCIAL MEDIA MARKETING & CONTENT PROPOSAL", footer: "Creative assets delivered 5 business days prior to scheduled posting." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#4c1d95", layoutVariant: 3, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Social Media Growth & Content Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Strategy & Platform Coverage" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will manage and scale {{clientName}}'s social presence across Instagram, LinkedIn, Facebook, and X/Twitter to build community engagement and drive sales conversions." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Monthly Package Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "16 custom graphics, reels, and video clips per month" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Copywriting, hashtag research, and social scheduling" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Community management & active comment responses (Mon–Fri)" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid ad campaign setup and audience retargeting management" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly analytics report tracking reach, impressions, and CTR" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Pricing & Retainer Terms" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Management Fee: " }, { type: "text", text: "{{investmentAmount}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Terms: " }, { type: "text", text: "{{paymentTerms}}. Billed on the 1st of each month." }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "it-project-proposal",
    slug: "it-project-proposal",
    title: "IT Project Proposal Template",
    description: "Free IT project proposal for system implementations, software development, infrastructure upgrades, and cloud migrations.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "IT Infrastructure Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "IT PROJECT IMPLEMENTATION PROPOSAL", footer: "All infrastructure changes governed under ISO 27001 security controls." },
      styles: { primaryColor: "#1e40af", secondaryColor: "#172554", layoutVariant: 4, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "IT Systems Upgrade & Cloud Migration Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Infrastructure Assessment" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines the technical plan to upgrade {{clientName}}'s server infrastructure, implement zero-trust firewall rules, and migrate database nodes to high-availability cloud instances with zero operational downtime." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Technical Scope & Architecture" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Database replication setup and Automated Daily Snapshot Backups" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "NextGen Firewall, Endpoint Security, and Multi-Factor Auth Rollout" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "AWS / Azure VPC setup, load balancer configuration, and SSL certs" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "24/7 SIEM monitoring integration and automated alerting triggers" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Project Cost & Implementation Schedule" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Work Package" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Engineering Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery & Network Audit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,880.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud Migration & Deployment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "60 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,200.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Security Hardening & QA" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Project Budget" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Timeline: {{timeline}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{investmentAmount}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Acceptance & Sign-off" }] },
          { type: "paragraph", content: [{ type: "text", text: "Accepted for {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "training-proposal",
    slug: "training-proposal",
    title: "Corporate Training Proposal Template",
    description: "Free corporate training proposal for L&D consultants and trainers — covers program design, delivery format, participant numbers, and ROI metrics.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Corporate Training Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "CORPORATE TRAINING & L&D PROPOSAL", footer: "Includes post-training participant evaluations & course completion certificates." },
      styles: { primaryColor: "#0891b2", secondaryColor: "#155e75", layoutVariant: 5, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Leadership & Skill Development Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Program Objectives" }] },
          { type: "paragraph", content: [{ type: "text", text: "This workshop series is designed to equip {{clientName}}'s team with practical skills in high-performance communication, agile project leadership, and stakeholder management." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Curriculum Modules" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Module" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Format" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Module 1: Executive Communication" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Interactive Workshop" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full Day (8 hrs)" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Module 2: Agile Leadership & Sprints" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Blended / Breakouts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Half Day (4 hrs)" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Module 3: Conflict Resolution & Coaching" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Roleplay & Simulations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full Day (8 hrs)" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Materials" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Training Fee: " }, { type: "text", text: "{{investmentAmount}} (Includes workbooks & certificates)" }] },
          { type: "paragraph", content: [{ type: "text", text: "Authorized by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "pr-proposal",
    slug: "pr-proposal",
    title: "PR & Communications Proposal Template",
    description: "Free public relations proposal template for PR agencies covering media outreach, press releases, crisis communications, and monthly retainer.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "PR & Media Communications Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "PUBLIC RELATIONS & MEDIA PROPOSAL", footer: "Coverage clips and press impressions compiled monthly." },
      styles: { primaryColor: "#be185d", secondaryColor: "#831843", layoutVariant: 0, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Public Relations & Media Strategy Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "PR Campaign Goals" }] },
          { type: "paragraph", content: [{ type: "text", text: "Our campaign will secure high-impact tier-1 news coverage, pitch leadership for industry podcasts, and build brand credibility for {{clientName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Monthly Campaign Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "2 distribution-ready press releases authored and wire-syndicated" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Targeted media pitches to top-tier tech, finance, and trade journalists" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Executive thought-leadership op-ed ghostwriting (1 per month)" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Crisis communication preparedness manual and active media monitoring" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Commercial Terms" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "PR Retainer Fee: " }, { type: "text", text: "{{investmentAmount}} per month" }] },
          { type: "paragraph", content: [{ type: "text", text: "Signed on behalf of {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "accounting-services-proposal",
    slug: "accounting-services-proposal",
    title: "Accounting Services Proposal Template",
    description: "Free accounting services proposal for accountants and bookkeepers — monthly bookkeeping, tax preparation, payroll, and advisory services.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Accounting & Tax Services Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "ACCOUNTING & BOOKKEEPING PROPOSAL", footer: "All accounting services comply strictly with GAAP and tax regulations." },
      styles: { primaryColor: "#1d4ed8", secondaryColor: "#1e3a8a", layoutVariant: 1, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Accounting & Tax Advisory Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Accounting Engagement" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will manage {{clientName}}'s monthly bookkeeping, bank reconciliations, sales tax filings, corporate tax preparation, and quarterly P&L reporting." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Service Fee Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service Component" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Frequency" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full Monthly Bookkeeping & Recon" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$850.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Payroll Processing (up to 20 staff)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Semi-monthly" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$400.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Corporate Tax Return Filing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Total Retainer" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Combined Package Investment: " }, { type: "text", text: "{{investmentAmount}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client Engagement Signature: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "architecture-proposal",
    slug: "architecture-proposal",
    title: "Architecture Services Proposal Template",
    description: "Free architectural services proposal covering design, planning permission, technical drawings, and project management stages.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Architectural Services Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "ARCHITECTURAL DESIGN PROPOSAL", footer: "Governed under standard professional architectural practice codes." },
      styles: { primaryColor: "#b45309", secondaryColor: "#78350f", layoutVariant: 2, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Architectural Design & Planning Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Project Context" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal sets out our architectural services for {{projectTitle}}, spanning concept design, planning permission applications, structural coordination, and technical construction drawings." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Design Stages & Fee Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverables" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage Fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage 1: Feasibility & Concept" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Measured site survey, 3D concept sketches" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage 2: Planning Submission" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Elevations, floor plans, planning authority submission" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,200.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stage 3: Technical Construction Pack" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Building regulations drawings, structural specs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,800.00" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Total Fee" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Architectural Fee: " }, { type: "text", text: "{{investmentAmount}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by Client: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "hr-consulting-proposal",
    slug: "hr-consulting-proposal",
    title: "HR Consulting Proposal Template",
    description: "Free HR consulting proposal for HR consultants covering recruitment, performance management, compliance, and HR strategy engagements.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "HR Advisory Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "HR CONSULTING & TALENT STRATEGY PROPOSAL", footer: "Complies with national employment standards and workplace compliance codes." },
      styles: { primaryColor: "#0369a1", secondaryColor: "#0c4a6e", layoutVariant: 3, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Human Resources Strategy & Audit Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Engagement Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will conduct a comprehensive HR audit, update your employee handbook, roll out an automated performance review framework, and provide executive talent recruitment support for {{clientName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "HR Policy Manual & Compliant Employee Handbook" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly Performance Review Templates & Manager Scoring Guide" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Compensation benchmarking and salary band structure" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Fee & Engagement Terms" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Engagement Investment: " }, { type: "text", text: "{{investmentAmount}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Authorized by {{clientName}}: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "legal-services-proposal",
    slug: "legal-services-proposal",
    title: "Legal Services Proposal Template",
    description: "Free legal services proposal for law firms and solicitors — covers scope of legal work, hourly rates, disbursements, and estimated total cost.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Legal Advisory Proposal",
      fields: ["companyName", "clientName", "date", "projectTitle", "proposedSolution", "timeline", "investmentAmount", "paymentTerms", "validity"],
      layout: { header: "LEGAL SERVICES PROPOSAL", footer: "Subject to formal client engagement letter & conflictof interest clearance." },
      styles: { primaryColor: "#1e3a8a", secondaryColor: "#172554", layoutVariant: 4, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Commercial Legal Counsel Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} · Date: {{date}} · Valid Until: {{validity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Legal Representation Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal sets out our legal advisory services for {{clientName}} regarding commercial contract drafting, IP licensing, corporate governance, and regulatory compliance." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Fee Structure & Rates" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Counsel Level" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hourly Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Est. Hours" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Partner / Senior Solicitor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450.00 / hr" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 hrs" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Associate Counsel" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$280.00 / hr" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20 hrs" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Estimated Budget" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Estimated Engagement Budget: " }, { type: "text", text: "{{investmentAmount}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client Instructions Signature: ___________________________ Date: ____________" }] }
        ]
      }
    }
  }
];
