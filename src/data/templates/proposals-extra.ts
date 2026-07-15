// Additional, per-template document content for the "proposals" category.
// Each proposal below is a distinct, SEO-optimized template with its own
// executive summary, objectives, scope, a timeline table, and a pricing table,
// so no two documents read the same.

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
      title: "IT Services Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "MANAGED IT SERVICES PROPOSAL",
        footer: "Pricing is valid for 30 days from the proposal date and excludes applicable taxes."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#38bdf8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "IT Services Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines a fully managed IT services engagement designed to reduce downtime, harden your security posture, and modernize infrastructure for {{clientName}}. Our team provides proactive monitoring, rapid helpdesk response, and a phased cloud migration that keeps operations running without disruption." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Achieve 99.9% uptime across servers, networks, and endpoints" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reduce mean time to resolution for support tickets to under two hours" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Migrate core workloads to a secure, scalable cloud environment" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Implement multi-factor authentication and endpoint protection company-wide" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "24/7 network and server monitoring with automated alerting" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Unlimited remote helpdesk and on-site support visits" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed backup, disaster recovery, and quarterly restore testing" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud migration planning, execution, and post-migration optimization" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Assessment & Audit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Infrastructure and security gap report" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Onboarding & Hardening" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 3-5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monitoring, MFA, and backup deployment" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud Migration" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 6-10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Workloads live in the cloud with rollback plan" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed support (monthly retainer)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,200 / month" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Security hardening (one-time)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud migration (project)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,800" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total first-year investment: $52,700 (including 12 months of managed support)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. A 12-month service agreement applies with net-15 monthly invoicing. Either party may terminate with 60 days written notice. All work is covered by our uptime service-level agreement." }] }
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
      title: "Landscaping Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "LANDSCAPE DESIGN & MAINTENANCE PROPOSAL",
        footer: "Estimates assume standard site access and may adjust for unforeseen ground conditions."
      },
      styles: {
        primaryColor: "#166534",
        secondaryColor: "#84cc16"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Landscaping Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal presents a complete landscape transformation for {{clientName}}, blending sustainable planting, functional hardscaping, and low-maintenance irrigation. Our crew delivers a polished outdoor space on schedule, with ongoing care options to keep it thriving year-round." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Create an inviting, drought-tolerant garden that suits the climate" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Install durable pathways and a patio for outdoor living" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Improve drainage and soil health across the property" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Establish an efficient irrigation and maintenance routine" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Site survey, soil testing, and 3D landscape design concept" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Planting of trees, shrubs, and seasonal flower beds" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Hardscaping including paver patio, retaining wall, and walkways" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Smart drip irrigation and a seasonal maintenance schedule" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design & Approval" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Approved plan and plant palette" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Site Prep & Hardscape" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 2-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Grading, patio, and walkways installed" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Planting & Irrigation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full planting and irrigation commissioned" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design & site preparation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hardscaping and materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Planting and irrigation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,600" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total project investment: $13,800." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. A 40% deposit secures the schedule, with the balance due on completion. All plantings carry a one-year replacement warranty when maintenance guidelines are followed." }] }
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
      title: "Photography Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "PHOTOGRAPHY SERVICES PROPOSAL",
        footer: "All rates include editing; travel beyond 30 miles is billed separately."
      },
      styles: {
        primaryColor: "#7c2d12",
        secondaryColor: "#f59e0b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Photography Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal details a professional photography engagement for {{clientName}}, covering pre-shoot planning, a full production day, and expertly retouched deliverables. Our approach captures authentic moments and brand-ready imagery you can use across print and digital channels." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliver a cohesive visual story aligned with your brand" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Capture high-resolution images suitable for web and print" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Provide a fast turnaround on a curated final gallery" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Grant clear usage rights for the intended channels" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Pre-shoot consultation, shot list, and location scouting" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-day shoot with professional lighting and equipment" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional retouching of the selected images" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Online gallery delivery with print-ready and web-optimized files" }] }] }
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Approved shot list and schedule" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Shoot Day" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 day" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full capture session on location" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Editing & Delivery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 2-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Final retouched online gallery" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-day shoot with equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Editing and retouching" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Extended usage license" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$400" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total package investment: $2,850." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. A 25% non-refundable booking fee reserves the date, with the balance due before final gallery delivery. Copyright remains with the photographer; usage rights are granted per the agreed license." }] }
        ]
      }
    }
  },
  {
    id: "sales-proposal",
    slug: "sales-proposal",
    title: "Sales Proposal Template",
    description: "Free sales proposal template to pitch products and solutions with a clear rollout timeline, value summary, and transparent pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Sales Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "SALES PROPOSAL",
        footer: "Quoted pricing reflects volume tiers agreed during discovery."
      },
      styles: {
        primaryColor: "#9d174d",
        secondaryColor: "#ec4899"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Sales Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal presents a tailored solution for {{clientName}} that addresses the priorities uncovered during discovery. It maps our product to your goals, quantifies the expected return, and lays out a low-risk rollout so your team sees value quickly." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Solve the core pain points identified by your team" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliver measurable ROI within the first quarter" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ensure fast, low-friction adoption across departments" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Establish a scalable foundation for future growth" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Solution configuration tailored to your workflows" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Data onboarding and integration with existing systems" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Team training and a dedicated success manager" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ongoing support with quarterly performance reviews" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Kickoff & Setup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Configured account and project plan" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Onboarding & Training" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 2-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Integrated data and trained users" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Go-Live & Review" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Live rollout and first ROI report" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual product license" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18,000 / year" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Onboarding and integration" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Priority support add-on" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,500 / year" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total first-year investment: $24,500." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Pricing is locked for 12 months from signature with annual renewal. Invoicing is net-30, and a 30-day satisfaction guarantee applies to the onboarding fee." }] }
        ]
      }
    }
  },
  {
    id: "product-launch-proposal",
    slug: "product-launch-proposal",
    title: "Product Launch Proposal Template",
    description: "Free product launch proposal template covering go-to-market strategy, campaign timeline, and budget to drive a successful release.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Product Launch Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "PRODUCT LAUNCH PROPOSAL",
        footer: "Media spend is estimated and adjustable based on channel performance."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#818cf8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Product Launch Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines a full go-to-market plan to launch {{clientName}}'s new product with maximum impact. From positioning and messaging to a multi-channel campaign and launch-day activation, we build momentum that converts early interest into sustained demand." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Build awareness and a qualified waitlist before launch" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Position the product clearly against competitors" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Hit first-month sales and signup targets" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Generate press coverage and social buzz" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Positioning, messaging framework, and launch narrative" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Landing page, email sequences, and creative assets" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid, organic, and influencer campaign management" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launch-day coordination and post-launch performance report" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy & Assets" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Messaging, creative, and landing page" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pre-Launch Buzz" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 4-6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Waitlist campaign and PR outreach" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Launch & Amplify" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 7-8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Launch event and paid amplification" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy and creative production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Campaign management (8 weeks)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Estimated media spend" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$10,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total launch investment: $24,500." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Fees are billed 50% upfront and 50% at launch, with media spend invoiced monthly at cost. Campaign timelines assume timely asset approvals from your team." }] }
        ]
      }
    }
  },
  {
    id: "hr-consulting-proposal",
    slug: "hr-consulting-proposal",
    title: "HR Consulting Proposal Template",
    description: "Free HR consulting proposal template for policy design, talent strategy, and compliance with a phased timeline and clear pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "HR Consulting Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "HR CONSULTING PROPOSAL",
        footer: "Engagement is governed by a mutual confidentiality agreement."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#2dd4bf"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "HR Consulting Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal sets out an HR consulting engagement to strengthen {{clientName}}'s people operations. We assess current practices, modernize policies, and build a talent strategy that improves retention while keeping the organization fully compliant." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Audit and update employee policies and handbook" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Improve hiring, onboarding, and retention outcomes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ensure compliance with current employment regulations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Build a performance and compensation framework" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "HR audit report with prioritized recommendations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Updated employee handbook and policy templates" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Recruitment and onboarding process redesign" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Manager training on performance reviews and compliance" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "HR Audit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Findings and recommendations report" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Policy & Process" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 3-6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Handbook and redesigned workflows" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Training & Handover" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 7-8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Manager training and rollout kit" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "HR audit and assessment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Policy and process redesign" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Manager training program" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,300" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total engagement investment: $11,000." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Fees are billed in three milestone payments tied to phase completion. All employee data shared during the engagement is handled under strict confidentiality." }] }
        ]
      }
    }
  },
  {
    id: "financial-advisory-proposal",
    slug: "financial-advisory-proposal",
    title: "Financial Advisory Proposal Template",
    description: "Free financial advisory proposal template for wealth planning, portfolio review, and strategy with a clear timeline and fee schedule.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Financial Advisory Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "FINANCIAL ADVISORY PROPOSAL",
        footer: "Advisory services are provided under fiduciary standards and applicable regulations."
      },
      styles: {
        primaryColor: "#134e4a",
        secondaryColor: "#f59e0b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Financial Advisory Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal describes a comprehensive financial advisory engagement for {{clientName}}, combining a full portfolio review with a personalized wealth plan. Our goal is to align your investments with your risk tolerance and long-term objectives while optimizing for tax efficiency." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Clarify short-term and long-term financial goals" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Assess current portfolio risk and diversification" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Build a tax-efficient investment and savings plan" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Establish an ongoing review and rebalancing cadence" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery meeting and financial goal mapping" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Detailed portfolio and risk assessment report" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Personalized wealth and retirement plan" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly reviews and portfolio rebalancing" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Goals summary and data collection" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Analysis" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 2-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Portfolio review and risk report" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Plan Delivery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wealth plan and implementation roadmap" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Financial plan and portfolio review" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Implementation support" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ongoing advisory (annual)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "0.85% of assets under management" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total upfront planning investment: $4,300 plus ongoing advisory fees." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Planning fees are due on delivery, and advisory fees are billed quarterly in arrears. Services are provided under a fiduciary duty to act in your best interest." }] }
        ]
      }
    }
  },
  {
    id: "architecture-proposal",
    slug: "architecture-proposal",
    title: "Architecture Proposal Template",
    description: "Free architecture proposal template for building design, planning permits, and construction documents with a project timeline and fees.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Architecture Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "ARCHITECTURAL DESIGN PROPOSAL",
        footer: "Fees exclude permit application charges and third-party engineering."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#0ea5e9"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Architecture Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines architectural design services for {{clientName}}, taking the project from concept sketches through permit-ready construction documents. We balance aesthetics, functionality, and budget while guiding you through approvals and contractor selection." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Translate your vision into a buildable, functional design" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Optimize space, natural light, and energy efficiency" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Secure planning approval and building permits" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliver documents ready for contractor bidding" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Site analysis and conceptual design options" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Schematic design with 3D visualizations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Permit drawings and planning application support" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Detailed construction documents and specifications" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concept Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 1-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concept options and mood boards" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design Development" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 4-7" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Schematic drawings and 3D renders" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Documentation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 8-12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Permit set and construction documents" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concept and schematic design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Permit drawings and application" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Construction documentation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total design investment: $19,500." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Fees are invoiced per phase upon completion. Revisions beyond two rounds per phase and changes to agreed scope are billed at our standard hourly rate." }] }
        ]
      }
    }
  },
  {
    id: "saas-proposal",
    slug: "saas-proposal",
    title: "SaaS Proposal Template",
    description: "Free SaaS proposal template for software subscriptions covering onboarding, integrations, and pricing tiers with a clear rollout timeline.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "SaaS Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "SAAS SUBSCRIPTION PROPOSAL",
        footer: "Subscription pricing is per the selected plan and billed annually."
      },
      styles: {
        primaryColor: "#5b21b6",
        secondaryColor: "#a78bfa"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SaaS Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal presents a SaaS subscription and implementation plan for {{clientName}}. Our platform streamlines your workflows with secure, cloud-based tools, guided onboarding, and integrations that connect to the systems your team already uses." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Replace manual processes with automated workflows" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Centralize data with real-time dashboards and reporting" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Integrate seamlessly with existing tools and APIs" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Achieve high user adoption within the first month" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Provisioned workspace with role-based access controls" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Data migration and third-party integrations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Admin and end-user training sessions" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Dedicated support and quarterly success reviews" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Provisioning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Configured workspace and user accounts" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Integration" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weeks 2-3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Migrated data and connected tools" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Adoption" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Trained team and go-live" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Business plan (per user / month)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$29 / user" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Implementation and onboarding" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500 one-time" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Premium support (annual)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total first-year investment: $23,300 for 50 users." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. Subscriptions are billed annually in advance with a 30-day free trial. Data remains yours and is exportable at any time, with 99.9% uptime backed by our service-level agreement." }] }
        ]
      }
    }
  },
  {
    id: "security-services-proposal",
    slug: "security-services-proposal",
    title: "Security Services Proposal Template",
    description: "Free security services proposal template for guarding, surveillance, and risk assessment with a deployment timeline and clear pricing.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Security Services Proposal Template",
      fields: ["companyName", "clientName", "projectName", "proposalDate", "validUntil"],
      layout: {
        header: "SECURITY SERVICES PROPOSAL",
        footer: "All personnel are licensed, insured, and background-checked."
      },
      styles: {
        primaryColor: "#1f2937",
        secondaryColor: "#ef4444"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Security Services Proposal Template" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} | Project: {{projectName}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal outlines a complete security services program for {{clientName}}, combining trained on-site guards, modern surveillance, and a proactive risk-management plan. Our approach protects people and assets while providing clear reporting and rapid incident response." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deter and prevent unauthorized access to the premises" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Provide 24/7 monitored coverage of all key areas" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ensure rapid, documented response to incidents" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintain compliance with safety and licensing standards" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Deliverables" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Site risk assessment and security plan" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Licensed uniformed guards on rotating shifts" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CCTV installation and 24/7 monitoring center" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Incident reporting and monthly security review" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Risk Assessment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Site survey and security plan" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Deployment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Guards on shift and CCTV installed" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ongoing Operations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monitoring and incident reports" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Pricing" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On-site guarding (monthly)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,200 / month" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CCTV installation (one-time)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24/7 monitoring (monthly)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500 / month" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total first-month investment: $14,500, then $8,700 monthly." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "This proposal is valid until {{validUntil}}. A minimum 12-month service agreement applies with monthly net-15 invoicing. All guards are licensed and insured, and coverage can scale up for special events on request." }] }
        ]
      }
    }
  }
];
