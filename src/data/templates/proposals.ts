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
  },
  {
    id: "branding-proposal",
    slug: "branding-proposal",
    title: "Branding Proposal Template",
    description: "Brand identity proposal template covering brand strategy, logo design, visual identity system, brand guidelines, timeline, and pricing to win creative clients.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Branding Proposal",
      fields: ["companyName", "clientName", "brandStrategy", "objectives", "timeline", "totalPrice", "proposalSignature"],
      layout: {
        header: "BRANDING PROPOSAL",
        footer: "Final logo files and brand assets are delivered upon receipt of the final payment."
      },
      styles: {
        primaryColor: "#9333ea",
        secondaryColor: "#6b21a8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Branding Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "Your brand deserves a distinctive identity that earns instant recognition and trust. This engagement crafts a cohesive visual language, from strategy through a complete brand system, so every touchpoint feels intentional." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Brand Strategy: " }, { type: "text", text: "{{brandStrategy}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Objectives: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Brand discovery workshop, audience research, and positioning statement" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Moodboards, art direction, and primary logo with variations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Color palette, typography system, and iconography" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Business cards, letterhead, and social media templates" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Comprehensive brand guidelines PDF and asset handoff" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Brand Strategy" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Workshop, research, and positioning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Logo & Identity" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Logo suite, color, and type system" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Brand Guidelines" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Guidelines book and collateral" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Complete brand identity" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{totalPrice}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{timeline}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve this proposal and pay a 50% deposit to reserve your kickoff date. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "app-development-proposal",
    slug: "app-development-proposal",
    title: "App Development Proposal Template",
    description: "Mobile app development proposal template detailing platform scope, feature set, tech stack, sprint timeline, and cost estimate for iOS and Android builds.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "App Development Proposal",
      fields: ["companyName", "clientName", "projectName", "problemStatement", "technologyStack", "startDate", "deliveryDate", "totalPrice", "proposalSignature"],
      layout: {
        header: "APP DEVELOPMENT PROPOSAL",
        footer: "Includes 60 days of post-launch bug fixes and app store submission support."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "App Development Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will design, build, and ship a cross-platform mobile app for iOS and Android with a shared codebase, cloud backend, and analytics baked in from day one." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Problem: " }, { type: "text", text: "{{problemStatement}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tech Stack: " }, { type: "text", text: "{{technologyStack}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Product discovery, user flows, and clickable prototype" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Native iOS and Android builds from one React Native codebase" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Secure authentication, push notifications, and offline mode" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "REST API, cloud database, and admin dashboard" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "QA on real devices, plus App Store and Play Store submission" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Cost Estimate" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Module" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "UX & Prototype" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Flows, wireframes, and design system" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mobile App Build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "iOS and Android with core features" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$28,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Backend & API" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud API, database, and admin panel" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fixed-bid engagement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{totalPrice}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Development runs from {{startDate}} to {{deliveryDate}} across two-week sprints with a demo build at the end of each sprint." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sign to lock the roadmap and provision repository and store accounts. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "social-media-proposal",
    slug: "social-media-proposal",
    title: "Social Media Proposal Template",
    description: "Social media marketing proposal template outlining content strategy, channel plan, posting cadence, community management, and monthly retainer pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Social Media Proposal",
      fields: ["agencyName", "clientName", "objectives", "socialMediaStrategy", "campaignDuration", "monthlyFee", "proposalSignature"],
      layout: {
        header: "SOCIAL MEDIA PROPOSAL",
        footer: "Reported reach and engagement metrics are estimates based on current account benchmarks."
      },
      styles: {
        primaryColor: "#0ea5e9",
        secondaryColor: "#0c4a6e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Social Media Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{agencyName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "We turn your social channels into a consistent, on-brand growth engine with a content calendar, active community management, and paid amplification that drives followers toward action." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Objectives: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Content Strategy: " }, { type: "text", text: "{{socialMediaStrategy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly content calendar across Instagram, TikTok, and LinkedIn" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "20 branded posts and 12 short-form reels per month" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Daily community management and comment moderation" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid social boosting and audience targeting" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly analytics report on reach, engagement, and follower growth" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Monthly Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Content Creation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Posts, reels, and graphics" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,400" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Community Management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Daily engagement and moderation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$900" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid Amplification" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Boosted posts management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$700" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Retainer" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Excludes ad spend" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{monthlyFee}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Engagement runs for {{campaignDuration}}, starting with a one-week onboarding and channel audit before the first content goes live." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sign to begin onboarding and grant access to your social accounts. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "interior-design-proposal",
    slug: "interior-design-proposal",
    title: "Interior Design Proposal Template",
    description: "Interior design proposal template covering space planning, concept boards, furnishing, project phases, and itemized budget for residential and commercial spaces.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Interior Design Proposal",
      fields: ["companyName", "clientName", "propertyAddress", "designStyle", "scopeOfWork", "startDate", "endDate", "totalPrice", "proposalSignature"],
      layout: {
        header: "INTERIOR DESIGN PROPOSAL",
        footer: "Furniture and material costs are estimates and confirmed at the specification stage."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#78350f"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Interior Design Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Property: {{propertyAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will transform your space into a functional, beautiful environment that reflects how you live and work, balancing aesthetics, comfort, and budget at every step." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Design Style: " }, { type: "text", text: "{{designStyle}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Scope: " }, { type: "text", text: "{{scopeOfWork}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Site survey, measurements, and space planning" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Concept boards, material palette, and 3D renderings" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Furniture, lighting, and finishes specification" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Procurement, vendor coordination, and delivery tracking" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation, styling, and final walkthrough" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Cost Estimate" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design Fee" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concept, drawings, and renderings" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Furnishings" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Furniture, lighting, and decor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivery, assembly, and styling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Turnkey design project" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{totalPrice}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "The project runs from {{startDate}} to {{endDate}}, phased across design, procurement, and installation." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve the concept and pay the design retainer to begin sourcing. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "catering-proposal",
    slug: "catering-proposal",
    title: "Catering Proposal Template",
    description: "Catering proposal template detailing menu selection, service style, staffing, guest count, and per-head pricing for weddings, corporate, and private events.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Catering Proposal",
      fields: ["companyName", "clientName", "eventName", "eventDate", "expectedGuests", "venueLocation", "totalPrice", "proposalSignature"],
      layout: {
        header: "CATERING PROPOSAL",
        footer: "Final headcount and menu selections are confirmed 10 days before the event."
      },
      styles: {
        primaryColor: "#c026d3",
        secondaryColor: "#701a75"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Catering Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Event: {{eventName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will deliver a memorable dining experience for {{expectedGuests}} at {{venueLocation}} on {{eventDate}}, with a chef-crafted menu, full service staff, and seamless on-site coordination." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Menu & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Passed canapes and a welcome drink reception" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Three-course plated dinner with vegetarian and vegan options" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Dessert table, coffee, and tea service" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional waitstaff, bartenders, and a captain" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Linens, tableware, glassware, and full cleanup" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Food & Menu" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Three-course dinner at $75 per guest" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,375" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Beverage Service" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Bar package and non-alcoholic drinks" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Staffing & Rentals" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Service team, linens, and tableware" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,900" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-service catering" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{totalPrice}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Tasting two weeks out, final headcount 10 days prior, and setup beginning three hours before service on {{eventDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sign and place a 30% deposit to reserve your date. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "real-estate-proposal",
    slug: "real-estate-proposal",
    title: "Real Estate Proposal Template",
    description: "Real estate listing proposal template covering property marketing plan, pricing strategy, staging, commission structure, and timeline for sellers.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Real Estate Proposal",
      fields: ["companyName", "clientName", "propertyAddress", "objectives", "timeline", "proposalSignature"],
      layout: {
        header: "REAL ESTATE LISTING PROPOSAL",
        footer: "Commission and marketing terms are governed by the signed listing agreement."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#134e4a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Real Estate Listing Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Property: {{propertyAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will position your property to sell quickly and at top market value using a data-driven pricing strategy, premium staging, and a multi-channel marketing launch." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Seller Goals: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Plan" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Comparative market analysis and pricing recommendation" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional staging, photography, and video walkthrough" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "MLS listing, syndication, and featured portal placement" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Targeted social ads, email blasts, and broker outreach" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Open houses, private tours, and offer negotiation" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Commission & Costs" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate / Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Listing Commission" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-service representation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5% of sale price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Staging & Media" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Staging, photos, and video" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Premium Advertising" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid portal and social campaigns" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Marketing Investment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Upfront, credited at closing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$5,300" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{timeline}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sign the listing agreement to begin staging and go live within 7 days. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "sponsorship-proposal",
    slug: "sponsorship-proposal",
    title: "Sponsorship Proposal Template",
    description: "Event sponsorship proposal template presenting audience reach, sponsorship tiers, activation benefits, and package pricing to attract brand partners.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Sponsorship Proposal",
      fields: ["companyName", "clientName", "eventName", "eventDate", "expectedGuests", "objectives", "proposalSignature"],
      layout: {
        header: "SPONSORSHIP PROPOSAL",
        footer: "Sponsorship benefits are secured on a first-come, first-served basis per tier."
      },
      styles: {
        primaryColor: "#d97706",
        secondaryColor: "#92400e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Sponsorship Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Event: {{eventName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "Partner with {{eventName}} on {{eventDate}} to put your brand in front of {{expectedGuests}} of engaged, high-intent attendees through prominent on-site and digital exposure." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Partnership Goals: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sponsor Benefits" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Logo placement on stage, signage, and event website" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Exhibition booth in the main networking hall" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Speaking slot or product demo opportunity" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Social media shout-outs and email newsletter features" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Attendee data insights and post-event impact report" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sponsorship Tiers" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Tier" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Benefits" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Bronze" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Logo and website listing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gold" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Booth, signage, and social features" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Platinum" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Headline branding and speaking slot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$15,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Title Sponsor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Exclusive naming rights" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$30,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Confirm your tier by 60 days out to secure premium placement, with assets due 30 days before {{eventDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Select a tier and countersign to reserve your sponsorship. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "training-proposal",
    slug: "training-proposal",
    title: "Corporate Training Proposal Template",
    description: "Corporate training proposal template outlining learning objectives, curriculum modules, delivery format, participant count, and per-cohort pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Corporate Training Proposal",
      fields: ["companyName", "clientName", "objectives", "startDate", "endDate", "totalPrice", "proposalSignature"],
      layout: {
        header: "CORPORATE TRAINING PROPOSAL",
        footer: "Course materials and completion certificates are included for all enrolled participants."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#312e81"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Corporate Training Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This program upskills your teams through a blended learning experience of live workshops, hands-on labs, and coaching, measurably improving on-the-job performance." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Learning Objectives: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Curriculum & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Training needs assessment and skills gap analysis" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom curriculum with role-based learning tracks" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Instructor-led workshops and interactive labs" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Workbooks, recordings, and on-demand resources" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Post-training assessment and certificates of completion" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Curriculum Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Assessment and custom content" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Workshop Delivery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5-day program for one cohort of 20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Materials & Certification" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Workbooks, LMS access, and certs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Per cohort" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{totalPrice}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "The program runs from {{startDate}} to {{endDate}}, with a follow-up coaching session four weeks after delivery." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve to schedule the needs assessment and lock training dates. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "research-proposal",
    slug: "research-proposal",
    title: "Research Proposal Template",
    description: "Academic research proposal template covering problem statement, research questions, methodology, expected outcomes, timeline, and itemized budget.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Research Proposal",
      fields: ["organizationName", "contactPerson", "grantTitle", "problemStatement", "expectedOutcomes", "startDate", "endDate", "totalBudget", "proposalSignature"],
      layout: {
        header: "RESEARCH PROPOSAL",
        footer: "This proposal complies with institutional ethics review and data governance policies."
      },
      styles: {
        primaryColor: "#1d4ed8",
        secondaryColor: "#1e40af"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Research Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{contactPerson}} by {{organizationName}} | Study: {{grantTitle}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This study investigates an under-researched question with a rigorous, reproducible methodology, aiming to produce peer-reviewed findings that advance both theory and practice." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Problem Statement: " }, { type: "text", text: "{{problemStatement}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Expected Outcomes: " }, { type: "text", text: "{{expectedOutcomes}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Methodology & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Literature review and hypothesis formulation" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mixed-methods study design and ethics approval" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Data collection through surveys, interviews, and field work" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Statistical and qualitative analysis of results" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Final report, dataset, and journal manuscript" }] }] }
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Research assistants and analysts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$32,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Data & Equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Software, datasets, and instruments" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dissemination" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Publication fees and conferences" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Requested" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full study budget" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{totalBudget}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "The study runs from {{startDate}} to {{endDate}}, structured across review, fieldwork, analysis, and publication phases." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approve funding and ethics review to begin the literature phase. Principal investigator: {{proposalSignature}}." }] }
        ]
      }
    }
  },
  {
    id: "partnership-proposal",
    slug: "partnership-proposal",
    title: "Partnership Proposal Template",
    description: "Strategic partnership proposal template outlining mutual value, collaboration scope, revenue sharing, roles, and timeline to formalize a business alliance.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Partnership Proposal",
      fields: ["companyName", "clientName", "objectives", "scopeOfWork", "timeline", "proposalSignature"],
      layout: {
        header: "STRATEGIC PARTNERSHIP PROPOSAL",
        footer: "This proposal is a non-binding framework pending a definitive partnership agreement."
      },
      styles: {
        primaryColor: "#be123c",
        secondaryColor: "#881337"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Strategic Partnership Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "We propose a strategic alliance that pairs our complementary strengths to reach new markets, share resources, and create value neither organization could unlock alone." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Shared Objectives: " }, { type: "text", text: "{{objectives}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Collaboration Scope: " }, { type: "text", text: "{{scopeOfWork}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Collaboration" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Joint go-to-market and co-branded campaigns" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Shared technology, data, and distribution channels" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cross-referrals and bundled product offerings" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Defined roles, governance, and a joint steering committee" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly business reviews and shared KPI dashboards" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Revenue Sharing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Stream" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Contribution" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Split" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Referred Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Leads passed between partners" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20% referral fee" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Co-Sold Deals" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Jointly closed accounts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "50 / 50" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Bundled Product" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Combined subscription offering" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "60 / 40" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Marketing Fund" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Shared campaign budget" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Equal contribution" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{timeline}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "paragraph", content: [{ type: "text", text: "Countersign this framework to convene a joint working session and draft the definitive agreement. Authorized by {{proposalSignature}}." }] }
        ]
      }
    }
  }
];
