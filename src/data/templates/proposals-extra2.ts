// Additional, per-template document content for the "proposals" category.
// A second batch of distinct, SEO-optimized proposal templates. Each document
// carries its own executive summary, objectives, scope, a timeline table, and
// an investment table, so no two proposals read the same.

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
      title: "Budget Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "ANNUAL BUDGET PROPOSAL",
        footer: "All figures are estimates and subject to final board approval and available funding."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#2dd4bf"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Budget Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This budget proposal presents a disciplined spending plan for {{clientName}} that aligns resources with strategic priorities. It sets out clear allocations, identifies cost savings, and builds in a contingency reserve so that {{projectName}} stays fully funded and on track throughout the fiscal year." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Allocate funds to the highest-impact initiatives with measurable returns" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reduce discretionary spending by 12% without cutting core services" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintain a contingency reserve of at least 8% of the total budget" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Provide transparent quarterly reporting against every line item" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Baseline review of prior-year actuals and variance analysis" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Line-item forecasting for personnel, operations, and capital" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scenario modeling for best-case, expected, and constrained funding" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly reconciliation and rolling reforecast dashboards" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Baseline & Review" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Prior-year variance report" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Forecasting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 3-4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Draft line-item budget" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Review & Approval" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 5-6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Approved final budget" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Personnel and benefits" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Operations and overhead" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Contingency reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$52,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total proposed budget: $657,000 for the full fiscal year." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This budget proposal is valid until {{validUntil}}. Approved allocations are released quarterly and reconciled against actuals. Reallocations above 10% of any line item require written sign-off from {{clientName}}." }] }
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
      title: "Staffing & Recruitment Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "STAFFING & RECRUITMENT PROPOSAL",
        footer: "Placement fees apply only upon a successful hire and include a 90-day replacement guarantee."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#c4b5fd"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Staffing & Recruitment Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines a targeted staffing and recruitment engagement to help {{clientName}} attract, screen, and hire top talent quickly. Our recruiters combine sourcing technology with a rigorous vetting process to fill roles for {{projectName}} while reducing time-to-hire and cost-per-hire." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fill priority roles within an average of 30 days" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Present a shortlist of qualified, pre-screened candidates" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Improve candidate quality and 12-month retention rates" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Build a talent pipeline for future hiring needs" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Role intake, job description writing, and market benchmarking" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Multi-channel sourcing across job boards and passive networks" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Screening interviews, skills testing, and reference checks" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Offer management, negotiation support, and onboarding handoff" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Intake & Sourcing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Approved job spec and sourcing plan" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Screening" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 2-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Vetted candidate shortlist" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Interviews & Offer" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 4-5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Accepted offer and start date" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Contingency placement fee (per hire)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18% of first-year salary" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Retained executive search (per role)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Contract staffing (per hour, per worker)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$52 / hour" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total estimated engagement: $46,000 for four permanent placements." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Placement fees are invoiced upon the candidate's start date with net-30 terms. Every permanent hire carries a 90-day replacement guarantee at no additional cost to {{clientName}}." }] }
        ]
      }
    }
  },
  {
    id: "logistics-proposal",
    slug: "logistics-proposal",
    title: "Logistics Proposal Template",
    description: "Free logistics proposal template for freight, warehousing, and supply chain management with a phased rollout timeline and itemized pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Logistics Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "LOGISTICS & SUPPLY CHAIN PROPOSAL",
        footer: "Rates assume standard load profiles and exclude fuel surcharges and customs duties."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#fbbf24"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Logistics Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal presents an end-to-end logistics solution for {{clientName}} covering freight, warehousing, and last-mile delivery. Our network and route-optimization technology cut transit times and shipping costs while giving {{projectName}} full visibility across the supply chain." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reduce total freight spend by 15% through route optimization" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Achieve 98% on-time delivery across all lanes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Provide real-time shipment tracking and proactive alerts" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Lower inventory carrying costs with smarter warehousing" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Freight brokerage across road, rail, ocean, and air" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Warehousing, pick-and-pack, and inventory management" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Route optimization and carrier performance monitoring" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Customs documentation and last-mile delivery coordination" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Network Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Optimized lane and warehouse plan" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Onboarding" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 4-6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Carrier contracts and TMS integration" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Go-Live & Optimize" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 7-10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Live operations and KPI dashboard" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Warehousing (per pallet, monthly)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$24 / pallet" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Freight management fee (monthly)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,500 / month" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Technology & tracking platform (setup)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,900" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total first-year investment: $95,900 including platform setup and 12 months of management." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. A 12-month service agreement applies with monthly net-30 invoicing. Rates are reviewed quarterly and any lane changes are agreed in writing with {{clientName}}." }] }
        ]
      }
    }
  },
  {
    id: "ecommerce-proposal",
    slug: "ecommerce-proposal",
    title: "Ecommerce Proposal Template",
    description: "Free ecommerce proposal template for online store development, conversion optimization, and growth with a build timeline and transparent pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Ecommerce Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "ECOMMERCE STORE & GROWTH PROPOSAL",
        footer: "Estimates cover the platforms named in the scope and exclude third-party app subscriptions."
      },
      styles: {
        primaryColor: "#be123c",
        secondaryColor: "#fb7185"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Ecommerce Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines the design, build, and launch of a high-converting online store for {{clientName}}, followed by data-driven growth. We combine a fast, mobile-first storefront with conversion optimization so that {{projectName}} increases revenue, average order value, and customer lifetime value." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launch a fast, mobile-first store with a frictionless checkout" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Lift conversion rate by at least 25% within 90 days" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Integrate payments, shipping, and inventory systems" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Grow repeat purchases through email and loyalty automation" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Storefront UX design and responsive theme development" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Product catalog setup, payment, and shipping integration" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Conversion rate optimization and A/B testing" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Email flows, abandoned-cart recovery, and analytics setup" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Approved storefront designs" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Build & Integrate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 3-6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Functional store with payments live" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Launch & Optimize" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 7-9" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Go-live and first optimization round" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Store design and development" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$14,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Integrations and data migration" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Growth retainer (monthly)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,800 / month" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total to launch: $18,700, plus an optional growth retainer of $2,800 per month." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. A 50% deposit is due to begin work and the balance on launch. The growth retainer runs month-to-month and either party may cancel with 30 days notice to {{clientName}}." }] }
        ]
      }
    }
  },
  {
    id: "content-marketing-proposal",
    slug: "content-marketing-proposal",
    title: "Content Marketing Proposal Template",
    description: "Free content marketing proposal template for blogging, SEO content, and lead generation with an editorial timeline and clear monthly pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Content Marketing Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "CONTENT MARKETING PROPOSAL",
        footer: "Deliverable counts are monthly and roll over for one month if unused."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#818cf8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Content Marketing Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal presents a content marketing program that positions {{clientName}} as an authority and drives qualified organic traffic. Through research-led articles, SEO optimization, and lead magnets, {{projectName}} will build a compounding pipeline of inbound leads month after month." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Grow organic search traffic by 60% over six months" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rank on page one for a targeted set of buyer keywords" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Generate a steady flow of gated content leads" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Establish a repeatable editorial and distribution engine" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Keyword research and a rolling editorial calendar" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Eight SEO-optimized articles per month, edited and published" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "One premium lead magnet or pillar page per quarter" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Distribution across email, social, and monthly reporting" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Keyword map and editorial calendar" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Months 1-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Published articles and lead magnet" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Scale & Report" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Months 4-6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Traffic growth and performance report" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Content strategy and setup (one-time)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly content retainer" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000 / month" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly pillar page or lead magnet" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800 each" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total six-month investment: $33,700 including strategy, retainer, and two pillar pieces." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. The retainer is billed monthly in advance with net-15 terms. A minimum three-month commitment applies, after which {{clientName}} may cancel with 30 days notice." }] }
        ]
      }
    }
  },
  {
    id: "film-production-proposal",
    slug: "film-production-proposal",
    title: "Film Production Proposal Template",
    description: "Free film production proposal template for short films, documentaries, and commercials with a pre- to post-production timeline and itemized budget.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Film Production Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "FILM PRODUCTION PROPOSAL",
        footer: "Budget assumes a single principal shoot location and standard-day crew rates."
      },
      styles: {
        primaryColor: "#1f2937",
        secondaryColor: "#f59e0b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Film Production Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines the full production of a cinematic film for {{clientName}}, from concept and script through principal photography and post. Our crew delivers a polished, story-driven piece for {{projectName}} that captures your message and holds an audience from the first frame." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Translate the brief into a compelling script and shot list" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Capture high-quality footage on schedule and on budget" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliver a broadcast-ready film with color grade and sound mix" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Provide cutdowns formatted for every distribution channel" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Concept development, scripting, and storyboarding" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Casting, location scouting, and production scheduling" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Principal photography with a full camera and lighting crew" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Editing, color grading, sound design, and final delivery" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pre-Production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Approved script and shooting schedule" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 4-5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Principal photography complete" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Post-Production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 6-9" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Final graded film and cutdowns" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pre-production and creative development" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Production crew and equipment (2 days)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$22,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Post-production and delivery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$13,500" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total production budget: $44,500 for the completed film and channel cutdowns." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. A 50% deposit secures the shoot dates and the balance is due on final delivery. Two rounds of revisions are included; additional edits are billed at our standard day rate to {{clientName}}." }] }
        ]
      }
    }
  },
  {
    id: "engineering-services-proposal",
    slug: "engineering-services-proposal",
    title: "Engineering Services Proposal Template",
    description: "Free engineering services proposal template for civil, mechanical, and structural design with a project timeline and transparent fee schedule.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Engineering Services Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "ENGINEERING SERVICES PROPOSAL",
        footer: "Fees assume the scope defined herein; site changes may require a revised estimate."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#0ea5e9"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Engineering Services Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal sets out a comprehensive engineering services engagement for {{clientName}}, spanning feasibility, detailed design, and construction support. Our licensed engineers deliver compliant, buildable, and cost-effective solutions that keep {{projectName}} safe, on schedule, and within budget." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Confirm feasibility and identify design constraints early" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Produce stamped drawings that meet all applicable codes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Optimize designs for constructability and material efficiency" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Support permitting and construction with timely responses" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Site assessment, feasibility study, and concept design" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Detailed structural, civil, and mechanical calculations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Construction drawings, specifications, and permit packages" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Construction-phase RFIs, submittals, and site inspections" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Feasibility & Concept" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Feasibility report and concept design" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Detailed Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 4-8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stamped construction drawings" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Construction Support" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 9-16" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "RFI responses and inspection reports" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Feasibility and concept design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Detailed design and drawings" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$27,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Construction-phase services" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$11,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total engineering fee: $46,500 for the complete design and construction-support scope." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Fees are invoiced monthly against percentage of completion with net-30 terms. Professional liability insurance is carried and permit fees are reimbursable at cost by {{clientName}}." }] }
        ]
      }
    }
  },
  {
    id: "nonprofit-fundraising-proposal",
    slug: "nonprofit-fundraising-proposal",
    title: "Nonprofit Fundraising Proposal Template",
    description: "Free nonprofit fundraising proposal template for donor campaigns, major gifts, and events with a campaign timeline and a clear budget breakdown.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Nonprofit Fundraising Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "NONPROFIT FUNDRAISING PROPOSAL",
        footer: "Projected totals are goals, not guarantees, and depend on donor participation."
      },
      styles: {
        primaryColor: "#0369a1",
        secondaryColor: "#7dd3fc"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Nonprofit Fundraising Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal presents a fundraising campaign to advance the mission of {{clientName}} through diversified donor giving. Combining major gifts, digital appeals, and a signature event, {{projectName}} aims to grow revenue, deepen donor relationships, and secure sustainable support for the year ahead." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Raise a campaign goal of $250,000 across all channels" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Secure ten new major-gift donors above $5,000" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Improve donor retention and average gift size" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Build a repeatable calendar of appeals and stewardship" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Case-for-support development and campaign strategy" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Major-gift prospect research and cultivation plan" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Multi-channel digital appeals and email fundraising" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Signature fundraising event planning and donor stewardship" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Planning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Month 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Campaign plan and case for support" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cultivation & Appeals" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Months 2-4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Major-gift asks and digital campaign" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Event & Stewardship" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Months 5-6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Signature event and donor thank-you plan" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Campaign strategy and management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Digital appeals and creative" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Signature event production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total campaign budget: $37,500 against a $250,000 fundraising goal." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Fees are billed monthly over the six-month campaign with net-30 terms. All donations are received and receipted directly by {{clientName}} in accordance with charity regulations." }] }
        ]
      }
    }
  },
  {
    id: "investment-proposal",
    slug: "investment-proposal",
    title: "Investment Proposal Template",
    description: "Free investment proposal template for startups and funds seeking capital, with a funding roadmap, use-of-funds table, and clear projected returns.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Investment Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "INVESTMENT PROPOSAL",
        footer: "Projections are forward-looking estimates and do not constitute a guarantee of returns."
      },
      styles: {
        primaryColor: "#065f46",
        secondaryColor: "#34d399"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Investment Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal invites {{clientName}} to invest in the growth of {{companyName}}. It presents the market opportunity, the traction behind {{projectName}}, and a disciplined use of funds designed to accelerate revenue and deliver an attractive return on invested capital." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Raise growth capital to scale sales and operations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reach profitability within 24 months of funding" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Expand into two new markets with proven demand" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliver a target 3x return over the investment horizon" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deploy capital into sales, product, and market expansion" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Hire key roles across go-to-market and engineering" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Provide quarterly board reporting and financial updates" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Execute a clear path to the next funding milestone" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Close & Deploy" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Months 1-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Funding closed and key hires made" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Scale" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Months 4-12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue growth and market entry" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Milestone" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Months 13-24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Profitability and next-round readiness" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sales and marketing expansion" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Product and engineering" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Working capital and reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total raise sought: $1,500,000 in exchange for equity, targeting a 3x return." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}} and is subject to definitive agreements and due diligence. It does not constitute a binding offer of securities. Full financials and a cap table will be shared with {{clientName}} under NDA." }] }
        ]
      }
    }
  },
  {
    id: "cybersecurity-proposal",
    slug: "cybersecurity-proposal",
    title: "Cybersecurity Proposal Template",
    description: "Free cybersecurity proposal template for penetration testing, threat monitoring, and compliance with a phased timeline and transparent pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Cybersecurity Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "CYBERSECURITY SERVICES PROPOSAL",
        footer: "Testing is performed only against systems authorized in writing by the client."
      },
      styles: {
        primaryColor: "#111827",
        secondaryColor: "#22d3ee"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Cybersecurity Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines a cybersecurity engagement to protect {{clientName}} from evolving threats. Through penetration testing, continuous monitoring, and compliance readiness, {{projectName}} will harden defenses, shorten detection times, and demonstrate due diligence to customers and regulators." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Identify and remediate exploitable vulnerabilities" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Detect and respond to threats around the clock" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Achieve compliance with SOC 2 and ISO 27001 controls" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Raise staff security awareness and phishing resilience" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "External and internal penetration testing" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "24/7 managed detection and response (MDR)" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Vulnerability management and patch verification" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Compliance gap assessment and security awareness training" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Assessment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Penetration test and risk report" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Remediation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 4-6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hardened systems and patched findings" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monitoring & Compliance" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 7-12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "MDR live and compliance roadmap" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Penetration testing (one-time)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed detection & response (monthly)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,800 / month" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Compliance readiness (project)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total first-year investment: $79,100 including testing, compliance, and 12 months of MDR." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. All testing is conducted under a signed rules-of-engagement authorization. The MDR service runs on a 12-month term with monthly net-30 invoicing to {{clientName}}." }] }
        ]
      }
    }
  }
];
