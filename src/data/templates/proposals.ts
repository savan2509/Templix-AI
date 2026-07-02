// Enriched, per-template document content for every template in the
// "proposals" category. Each proposal has a distinct executive summary, a
// tailored scope-of-work bullet list, and a pricing table with line items
// specific to that proposal type, so no two documents read the same.

export const proposalsTemplates = [
  {
    id: "business-proposal",
    slug: "business-proposal",
    title: "Business Proposal Template",
    description: "Startups and business project proposal layout pitching products, pricing tiers, and milestones.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Business Proposal",
      fields: ["companyName", "clientName", "proposalNumber", "validUntil", "executiveSummary", "businessOverview", "proposalObjective", "milestones", "paymentTerms", "companySignature", "signatureDate"],
      layout: {
        header: "BUSINESS PROJECT PROPOSAL",
        footer: "This proposal is subject to pricing validation within the validity period."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#3b82f6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Business Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Proposal No. {{proposalNumber}} | Valid until {{validUntil}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Business Overview: " }, { type: "text", text: "{{businessOverview}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Primary Objective: " }, { type: "text", text: "{{proposalObjective}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Market opportunity and competitor positioning analysis" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "12-month go-to-market strategy and revenue roadmap" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tiered pricing and subscription model design" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Financial projection model with break-even analysis" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly business review and KPI reporting cadence" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment Summary" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Market Research" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Competitor and audience deep-dive" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy & Roadmap" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12-month go-to-market plan" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Implementation Support" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hands-on rollout over two quarters" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full engagement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$13,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{milestones}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "To proceed, sign and return this proposal before {{validUntil}}. Payment terms: {{paymentTerms}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "Authorized by {{companySignature}} on {{signatureDate}}." }] }
        ]
      }
    }
  },
  {
    id: "project-proposal",
    slug: "project-proposal",
    title: "Project Proposal Template",
    description: "Detailed proposal structure detailing project goals, risk analysis, mitigation, resources, and budgets.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Project Proposal",
      fields: ["companyName", "clientName", "projectTitle", "goals", "objectives", "resourcesRequired", "riskAssessment", "mitigationPlan", "milestones", "proposalSignature", "signatureDate"],
      layout: {
        header: "PROJECT IMPLEMENTATION PROPOSAL",
        footer: "Confidential document for review by client sponsors only."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#0f766e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Project Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectTitle}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Goals: " }, { type: "text", text: "{{goals}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Objectives: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Requirements gathering and stakeholder alignment workshop" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Solution architecture and detailed work breakdown structure" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Phased build with bi-weekly demo checkpoints" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quality assurance, UAT sign-off, and go-live support" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Post-launch handover documentation and training" }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Resources Required: " }, { type: "text", text: "{{resourcesRequired}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Budget Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase 1 — Discovery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Requirements and architecture" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase 2 — Build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Iterative development sprints" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase 3 — Launch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "QA, UAT, and go-live" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "End-to-end project" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$16,500" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Risk Management" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Identified Risks: " }, { type: "text", text: "{{riskAssessment}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Mitigation Plan: " }, { type: "text", text: "{{mitigationPlan}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{milestones}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve this proposal to lock the schedule. Signed {{proposalSignature}} on {{signatureDate}}." }] }
        ]
      }
    }
  },
  {
    id: "marketing-proposal",
    slug: "marketing-proposal",
    title: "Marketing Proposal Template",
    description: "Strategic marketing campaign layout covering SEO, PPC, social channels, and agency fees.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Marketing Proposal",
      fields: ["agencyName", "clientName", "campaignName", "objectives", "targetAudience", "seoStrategy", "ppcStrategy", "socialMediaStrategy", "campaignStart", "campaignEnd", "kpiTraffic", "kpiLeads", "kpiSales", "proposalSignature"],
      layout: {
        header: "MARKETING CAMPAIGN PROPOSAL",
        footer: "Proposed KPIs are estimates based on initial market research metrics."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#6d28d9"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Marketing Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{agencyName}} | Campaign: {{campaignName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This integrated campaign is built to move {{targetAudience}} through the funnel across search, paid media, and social." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Objectives: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Channel Strategy" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "SEO: {{seoStrategy}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid Search (PPC): {{ppcStrategy}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Social & Retargeting: {{socialMediaStrategy}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly performance dashboard with attribution reporting" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Landing page and creative A/B testing program" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "SEO Retainer" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On-page, content, and link building" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid Media Management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Google & Meta ads management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ad Spend" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Direct media budget (pass-through)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Per month" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$6,800" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "KPI Projections" }] },
          { type: "paragraph", content: [{ type: "text", text: "Traffic: {{kpiTraffic}} | Leads: {{kpiLeads}} | Sales: {{kpiSales}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Campaign runs {{campaignStart}} through {{campaignEnd}}, with the first optimization report at week four." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve to kick off onboarding within 5 business days. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "web-design-proposal",
    slug: "web-design-proposal",
    title: "Web Design Proposal Template",
    description: "Creative design proposal for developers showing design styles, CMS setups, timelines, and budgets.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Web Design Proposal",
      fields: ["companyName", "clientName", "designerName", "websiteType", "numberOfPages", "designStyle", "cmsPlatform", "designPhaseTimeline", "developmentPhaseTimeline", "launchDate", "proposalSignature"],
      layout: {
        header: "WEBSITE DEVELOPMENT PROPOSAL",
        footer: "Standard design includes 30 days of post-launch technical support."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#be185d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Web Design Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Lead Designer: {{designerName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will design and build a {{websiteType}} of {{numberOfPages}} in a {{designStyle}} aesthetic, powered by {{cmsPlatform}} so your team can edit content without code." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery workshop, moodboard, and design direction" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "High-fidelity Figma mockups for all key page templates" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Responsive front-end build for desktop, tablet, and mobile" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CMS integration with editable content models" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "On-page SEO setup, analytics, and contact forms" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "UI/UX Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wireframes and hi-fi mockups" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Development" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Responsive build and CMS wiring" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hosting & Care" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed hosting and monthly maintenance" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185 / mo" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Project Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "One-time build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$9,500" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Design phase: {{designPhaseTimeline}} | Development: {{developmentPhaseTimeline}} | Target launch: {{launchDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "A 50% deposit reserves your project start date. Signed {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "software-development-proposal",
    slug: "software-development-proposal",
    title: "Software Development Proposal Template",
    description: "Detailed tech stack proposal template showing software workflows, databases, discovery, and testing phases.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Software Development Proposal",
      fields: ["companyName", "clientName", "projectName", "problemStatement", "proposedSolution", "technologyStack", "database", "apisIntegration", "securityMeasures", "startDate", "deliveryDate", "proposalSignature"],
      layout: {
        header: "TECHNICAL SOFTWARE PROPOSAL",
        footer: "Software architectures adhere to OWASP and standard cloud deployment security regulations."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0369a1"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Software Development Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Problem: " }, { type: "text", text: "{{problemStatement}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Proposed Solution: " }, { type: "text", text: "{{proposedSolution}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope & Technical Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery, technical specification, and API contract design" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Front-end application built on {{technologyStack}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Backend services and {{database}} schema with migrations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Third-party integrations: {{apisIntegration}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Security hardening ({{securityMeasures}}), automated tests, and CI/CD" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Cost Estimate" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Module" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery & Architecture" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Specs, schema, and API design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Application Build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Front-end, backend, and integrations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$24,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "QA & Deployment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Testing, CI/CD, and production launch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fixed-bid engagement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$35,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Development runs from {{startDate}} to {{deliveryDate}}, delivered in two-week sprints with demos." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sign to schedule the kickoff and provision repository access. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "consulting-proposal",
    slug: "consulting-proposal",
    title: "Consulting Proposal Template",
    description: "Professional consulting strategy layout specifying business challenges, scope of work, and fee structures.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Consulting Proposal",
      fields: ["consultantName", "consultantCompany", "clientName", "businessChallenge", "objectives", "scopeOfWork", "startDate", "completionDate", "proposalSignature"],
      layout: {
        header: "STRATEGY CONSULTING PROPOSAL",
        footer: "Independent consulting services. Out-of-pocket expenses billed at cost."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Consulting Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{consultantCompany}} | Lead Consultant: {{consultantName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Business Challenge: " }, { type: "text", text: "{{businessChallenge}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Objectives: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{scopeOfWork}}" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Current-state assessment and stakeholder interviews" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Benchmarking against industry best practices" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prioritized recommendations and implementation roadmap" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Executive readout and change-management playbook" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Fee Structure" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Engagement" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Assessment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Diagnostic and benchmarking" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy Roadmap" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Recommendations and rollout plan" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Fixed Fee" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full advisory engagement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$10,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Engagement runs from {{startDate}} to {{completionDate}}, with weekly progress calls." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Countersign to confirm scope and schedule the first working session. Signed {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "digital-marketing-proposal",
    slug: "digital-marketing-proposal",
    title: "Digital Marketing Proposal Template",
    description: "Detailed digital marketing campaign setup showing SEO channels, social ads spend, and lead targets.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Digital Marketing Proposal",
      fields: ["agencyName", "clientName", "clientWebsite", "seoMarketing", "socialMediaManagement", "goalBrandAwareness", "goalLeadGeneration", "goalWebsiteTraffic", "campaignDuration", "proposalSignature"],
      layout: {
        header: "DIGITAL MARKETING INITIATIVE",
        footer: "Performance target metrics estimates based on initial keyword indices search volume."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#c2410c"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Digital Marketing Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{agencyName}} | Website: {{clientWebsite}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "A full-funnel digital program combining organic search, paid social, and lifecycle marketing to grow qualified demand over {{campaignDuration}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Services & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "SEO program: {{seoMarketing}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Social media management: {{socialMediaManagement}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Google and Meta paid advertising campaigns" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Email automation and monthly newsletter" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Conversion tracking and monthly analytics report" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Monthly Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "SEO & Content" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Technical SEO and 4 articles / month" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid Ads Management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Google Search and Meta social" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Social & Email" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Scheduling, community, and lifecycle" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Per month, excl. ad spend" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$4,700" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Goals & Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Awareness: {{goalBrandAwareness}} | Leads: {{goalLeadGeneration}} | Traffic: {{goalWebsiteTraffic}} | Engagement: {{campaignDuration}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sign to begin onboarding and tracking setup. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "construction-proposal",
    slug: "construction-proposal",
    title: "Construction Proposal Template",
    description: "Detailed construction and remodeling proposal mapping contractor license, materials, labor, and warranties.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Construction Services Proposal",
      fields: ["companyName", "licenseNumber", "clientName", "propertyAddress", "projectName", "scopeOfWork", "materialsList", "startDate", "endDate", "warrantyDetails", "proposalSignature"],
      layout: {
        header: "BUILD & CONSTRUCTION PROPOSAL",
        footer: "Subject to structural permits, building codes, and inspections."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#047857"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Construction Services Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} (License #{{licenseNumber}}) | Project: {{projectName}} at {{propertyAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{scopeOfWork}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Site preparation, demolition, and debris removal" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Framing, foundation, and structural work" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Plumbing, electrical, and HVAC rough-in" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Drywall, finishing, cabinetry, and fixtures" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Materials supplied: {{materialsList}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Final inspection and cleanup" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Cost Estimate" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lumber, concrete, and fixtures" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Labor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Crew of four, approx. 180 hours" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Equipment & Permits" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Excavator, tools, and city permits" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Turnkey estimate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$12,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline & Warranty" }] },
          { type: "paragraph", content: [{ type: "text", text: "Construction runs {{startDate}} to {{endDate}}. Warranty: {{warrantyDetails}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve to schedule permits and mobilize the crew. Signed {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "event-proposal",
    slug: "event-proposal",
    title: "Event Proposal Template",
    description: "Structured event planning proposal showing guest counts, catering details, entertainment, and decor.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Event Planning Proposal",
      fields: ["companyName", "eventPlanner", "clientName", "eventName", "eventType", "eventDate", "venueLocation", "expectedGuests", "preparationSchedule", "proposalSignature"],
      layout: {
        header: "EVENT MANAGEMENT PROPOSAL",
        footer: "Catering and venue costs subject to headcount confirmation 14 days prior."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#9d174d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Event Planning Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Planner: {{eventPlanner}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "A full-service plan for {{eventName}} ({{eventType}}) on {{eventDate}} at {{venueLocation}} for {{expectedGuests}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Services Included" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Venue sourcing, booking, and layout planning" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Catering: continental breakfast, buffet lunch, and tea service" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Decor, stage design, and lighting production" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Entertainment, keynote coordination, and AV setup" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "On-site coordination team and full-day photo/video" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Cost Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Venue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ballroom booking and setup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Catering" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Food and beverage for all guests" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Decor & Entertainment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Staging, lighting, and performers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-service package" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$10,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{preparationSchedule}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "A signed proposal and deposit reserve your event date. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "grant-proposal",
    slug: "grant-proposal",
    title: "Grant Proposal Template",
    description: "NGO and non-profit grant request template detailing funding details, objectives, and operational costs.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Grant Funding Proposal",
      fields: ["organizationName", "registrationNumber", "contactPerson", "grantTitle", "fundingRequested", "projectOverview", "problemStatement", "targetBeneficiaries", "expectedOutcomes", "startDate", "endDate", "evaluationMetrics", "proposalSignature"],
      layout: {
        header: "GRANT APPLICATION PROPOSAL",
        footer: "Financial audits and registration certificates attached for validation."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#3730a3"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Grant Funding Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Submitted by {{organizationName}} (Reg #{{registrationNumber}}), contact {{contactPerson}} | Grant: {{grantTitle}} | Requested: {{fundingRequested}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{projectOverview}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Problem Statement: " }, { type: "text", text: "{{problemStatement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives & Outcomes" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Serve target beneficiaries: {{targetBeneficiaries}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliver structured weekly workshops and mentorship" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Provide equipment, lab access, and learning materials" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Expected outcomes: {{expectedOutcomes}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Budget Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Category" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Personnel" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Instructors and coordination staff" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$25,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Laptops and lab setup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$15,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Operations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Venue, materials, and evaluation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$10,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Requested" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full program budget" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$50,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline & Evaluation" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project cycle {{startDate}} to {{endDate}}. Success measured by: {{evaluationMetrics}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "We welcome a review meeting and site visit. Authorized applicant: {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "seo-services-proposal",
    slug: "seo-services-proposal",
    title: "SEO Services Proposal Template",
    description: "Professional SEO proposal template outlining audit findings, keyword strategy, deliverables, timeline, and pricing to win search clients.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "SEO Services Proposal Template",
      fields: ["agencyName", "clientName", "objectives", "strategy", "timeline", "monthlyFee"],
      layout: {
        header: "SEO SERVICES PROPOSAL",
        footer: "This proposal is valid for 14 days from the date of issue."
      },
      styles: {
        primaryColor: "#16a34a",
        secondaryColor: "#14532d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SEO Services Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{agencyName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "Our audit found technical debt and thin content limiting rankings. This program targets sustainable organic growth for high-intent search terms." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Objectives: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Strategy: " }, { type: "text", text: "{{strategy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full technical SEO audit and Core Web Vitals fixes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Keyword research and search-intent content mapping" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "On-page optimization for priority landing pages" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Authority link-building and digital PR outreach" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly rank tracking and analytics reporting" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Package" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "One-Time Audit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Technical and content audit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On-Page & Content" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Optimization and 4 articles / month" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500 / mo" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Link Building" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Outreach and digital PR" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,000 / mo" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Retainer" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ongoing SEO program" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{monthlyFee}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{timeline}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve within 14 days to lock this pricing and begin the audit." }] }
        ]
      }
    }
  },
  {
    id: "video-production-proposal",
    slug: "video-production-proposal",
    title: "Video Production Proposal Template",
    description: "Video production proposal template for agencies and creators covering concept, scope, shoot schedule, deliverables, and budget breakdown.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Video Production Proposal Template",
      fields: ["studioName", "clientName", "projectConcept", "scope", "timeline", "totalBudget"],
      layout: {
        header: "VIDEO PRODUCTION PROPOSAL",
        footer: "Includes one round of revisions. Additional edits billed separately."
      },
      styles: {
        primaryColor: "#e11d48",
        secondaryColor: "#881337"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Video Production Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{studioName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Concept: " }, { type: "text", text: "{{projectConcept}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Scope: " }, { type: "text", text: "{{scope}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Creative treatment, script, and storyboard" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "One-day shoot with crew, lighting, and audio" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "One master hero film (60-90 seconds)" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Three vertical social cut-downs for reels and shorts" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Color grade, sound mix, and licensed music" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Budget Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pre-Production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concept, script, and storyboard" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Shoot day, crew, and equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Post-Production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Edit, grade, sound, and delivery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{totalBudget}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{timeline}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve the concept and confirm shoot dates to reserve the crew." }] }
        ]
      }
    }
  }
];
