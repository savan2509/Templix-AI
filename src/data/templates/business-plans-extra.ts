// Additional per-template document content for the "business-plans" category.
// Ten new, distinct, industry-specific business plans (mobile app, SaaS, catering,
// event planning, trucking, poultry farm, car wash, dental clinic, pet grooming,
// hotel) — each with its own market analysis, offerings, and 3-year financials.
export const businessPlansExtraTemplates: any[] = [
  {
    id: "mobile-app-business-plan",
    slug: "mobile-app-business-plan",
    title: "Mobile App Business Plan Template",
    description: "Free mobile app business plan template with executive summary, market analysis, monetization strategy, and 3-year financial projections for app founders.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Mobile App Business Plan Template",
      fields: ["businessName", "founderName", "date", "appCategory", "platform", "fundingAsk"],
      layout: { header: "MOBILE APP BUSINESS PLAN", footer: "Confidential — prepared for investors and stakeholders." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#a78bfa" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a {{appCategory}} mobile application for {{platform}} that helps users solve everyday problems in one intuitive experience. We are seeking {{fundingAsk}} to fund product development, user acquisition, and a 24-month path to sustainable in-app revenue." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} operates a freemium mobile app with a small remote engineering and design team. Our differentiator is a fast, personalized onboarding flow that drives day-7 retention well above category benchmarks." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Global consumer app spending exceeds $170B annually and continues to grow as smartphone usage deepens. Most competing apps are cluttered and poorly retained, leaving room for a focused, delightful experience in the {{appCategory}} niche." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mobile-first users aged 18-34 who prefer app-based tools" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Busy professionals seeking time-saving automation" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Students and early adopters active in the {{appCategory}} space" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Free tier with core features and ad-supported access" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Premium subscription unlocking advanced tools and no ads" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "In-app purchases for one-time upgrades and content packs" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We combine App Store Optimization, short-form video and influencer partnerships, and a referral loop that rewards users for inviting friends. Paid acquisition scales only against a proven lifetime-value-to-cost ratio." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$320,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,150,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,400,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$980,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,300,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "-$220,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$170,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$1,100,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is raising {{fundingAsk}} to expand the engineering team, fund performance marketing, and reach cash-flow breakeven by the end of Year 2. Funds are allocated 45% to product, 40% to growth, and 15% to operations." }] }
        ]
      }
    }
  },
  {
    id: "saas-business-plan",
    slug: "saas-business-plan",
    title: "SaaS Business Plan Template",
    description: "Free SaaS business plan template covering recurring revenue model, market analysis, product roadmap, and 3-year ARR financial projections.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "SaaS Business Plan Template",
      fields: ["businessName", "founderName", "date", "targetIndustry", "pricingModel", "fundingAsk"],
      layout: { header: "SAAS BUSINESS PLAN", footer: "Confidential — internal and investor use only." },
      styles: { primaryColor: "#0ea5e9", secondaryColor: "#38bdf8" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a cloud software platform serving the {{targetIndustry}} sector with a {{pricingModel}} subscription model. We are raising {{fundingAsk}} to grow annual recurring revenue, expand our sales team, and reach profitability at scale." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Led by {{founderName}}, {{businessName}} delivers a multi-tenant web application with strong net revenue retention. Our moat is deep workflow integration that makes the product difficult and costly for customers to replace." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The {{targetIndustry}} software market is large and underserved by modern tools, with buyers frustrated by legacy incumbents. Cloud adoption and integration demand create a durable tailwind for a purpose-built platform." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mid-market {{targetIndustry}} companies with 50-500 employees" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Operations and finance leaders seeking automation" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fast-growing teams outgrowing spreadsheets" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Core platform with dashboards, automation, and reporting" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tiered {{pricingModel}} plans: Starter, Business, Enterprise" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "API access, integrations, and premium onboarding" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We use product-led growth with a free trial, content marketing and SEO for inbound demand, and a targeted outbound motion for larger accounts. Customer success drives expansion revenue and reduces churn." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue (ARR)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,100,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,800,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$820,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,900,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,100,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "-$220,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$200,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$1,700,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "We are seeking {{fundingAsk}} to invest in sales and marketing, accelerate the product roadmap, and scale ARR toward a Series A milestone within 18 months." }] }
        ]
      }
    }
  },
  {
    id: "catering-business-plan",
    slug: "catering-business-plan",
    title: "Catering Business Plan Template",
    description: "Free catering business plan template with menu strategy, event market analysis, staffing, pricing, and 3-year financial projections for caterers.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Catering Business Plan Template",
      fields: ["businessName", "founderName", "date", "cuisineStyle", "serviceArea", "startupCost"],
      layout: { header: "CATERING BUSINESS PLAN", footer: "Confidential — prepared for owners and lenders." },
      styles: { primaryColor: "#c2410c", secondaryColor: "#ea580c" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a full-service catering company specializing in {{cuisineStyle}} cuisine for weddings, corporate events, and private parties across {{serviceArea}}. We require {{startupCost}} in startup capital to equip a commercial kitchen and launch operations." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Owned and operated by {{founderName}}, {{businessName}} pairs a seasoned executive chef with dependable event staff. We offer plated dinners, buffets, and drop-off catering with a reputation for punctual, polished service." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Demand for event catering in {{serviceArea}} is fueled by a strong wedding calendar and a growing corporate events scene. Clients increasingly seek customizable, locally-sourced menus over generic caterers." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Engaged couples planning weddings of 80-250 guests" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Corporate offices booking meetings and holiday events" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Families hosting milestone celebrations and reunions" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-service plated and buffet {{cuisineStyle}} catering" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Corporate drop-off lunches and boxed meals" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bar service, rentals, and event coordination add-ons" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We build referral partnerships with venues and planners, showcase events on social media, and rank on wedding directories. Tasting events and a strong online portfolio convert inquiries into signed contracts." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$285,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$460,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$690,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$248,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$372,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$524,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$37,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$88,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$166,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} seeks {{startupCost}} to purchase commercial kitchen equipment, a delivery vehicle, and serving inventory, with the balance reserved for working capital during the first two event seasons." }] }
        ]
      }
    }
  },
  {
    id: "event-planning-business-plan",
    slug: "event-planning-business-plan",
    title: "Event Planning Business Plan Template",
    description: "Free event planning business plan template with services, target market analysis, vendor strategy, and 3-year financial projections for planners.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Event Planning Business Plan Template",
      fields: ["businessName", "founderName", "date", "eventNiche", "serviceArea", "startupCost"],
      layout: { header: "EVENT PLANNING BUSINESS PLAN", footer: "Confidential — for internal and lender review." },
      styles: { primaryColor: "#be185d", secondaryColor: "#ec4899" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a full-service event planning firm focused on {{eventNiche}} across {{serviceArea}}. We deliver seamless, on-budget events and are seeking {{startupCost}} to launch, build a vendor network, and grow our booking pipeline." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} manages events end to end — concept, budgeting, vendor coordination, and day-of execution. Our advantage is a curated network of trusted vendors and meticulous project management." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Clients are time-poor and increasingly outsource event planning to specialists. The {{eventNiche}} segment in {{serviceArea}} shows steady demand and healthy per-event budgets, with word of mouth driving repeat business." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Couples planning weddings and milestone celebrations" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Companies hosting conferences, launches, and galas" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Nonprofits organizing fundraisers and community events" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-service planning and day-of coordination" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Partial planning and month-of management packages" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Design, styling, and vendor sourcing add-ons" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We generate leads through venue partnerships, a polished portfolio on social channels, and listings on event directories. Referral incentives and styled shoots keep our pipeline full during peak seasons." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$165,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$290,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$445,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$132,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$210,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$305,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$33,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$80,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$140,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} requests {{startupCost}} to cover branding, a booking and CRM system, event samples, and working capital while establishing a steady client base." }] }
        ]
      }
    }
  },
  {
    id: "trucking-business-plan",
    slug: "trucking-business-plan",
    title: "Trucking Business Plan Template",
    description: "Free trucking business plan template with fleet operations, freight market analysis, route strategy, and 3-year financial projections for carriers.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Trucking Business Plan Template",
      fields: ["businessName", "founderName", "date", "fleetSize", "freightType", "startupCost"],
      layout: { header: "TRUCKING BUSINESS PLAN", footer: "Confidential — prepared for owners and lenders." },
      styles: { primaryColor: "#1d4ed8", secondaryColor: "#3b82f6" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a licensed trucking carrier operating a fleet of {{fleetSize}} to haul {{freightType}} freight on regional and long-haul lanes. We are seeking {{startupCost}} to acquire equipment, secure authority, and build reliable shipper contracts." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} runs a safety-first operation with experienced drivers and modern telematics. On-time delivery and strong carrier scores make us a preferred partner for brokers and direct shippers." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Freight remains the backbone of the supply chain, and shippers consistently need dependable capacity for {{freightType}} loads. Capacity tightness and a growing e-commerce base support steady rates for reliable carriers." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Manufacturers and distributors shipping {{freightType}} freight" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Freight brokers seeking dependable regional capacity" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Retailers with recurring distribution-center lanes" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-truckload transport for {{freightType}} freight" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Dedicated lanes and contract carriage" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Expedited and drop-and-hook services" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We secure freight through load boards initially, then transition to direct shipper contracts and broker relationships built on a strong safety record. Consistent service and competitive rates drive repeat lanes." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$980,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,560,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$470,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$820,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,270,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$70,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$160,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$290,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{startupCost}} to finance tractors and trailers, secure insurance and operating authority, and fund fuel and maintenance reserves during the ramp-up period." }] }
        ]
      }
    }
  },
  {
    id: "poultry-farm-business-plan",
    slug: "poultry-farm-business-plan",
    title: "Poultry Farm Business Plan Template",
    description: "Free poultry farm business plan template with production model, market analysis, biosecurity plan, and 3-year financial projections for farmers.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Poultry Farm Business Plan Template",
      fields: ["businessName", "founderName", "date", "birdCapacity", "productFocus", "startupCost"],
      layout: { header: "POULTRY FARM BUSINESS PLAN", footer: "Confidential — for owners, partners, and lenders." },
      styles: { primaryColor: "#b45309", secondaryColor: "#f59e0b" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a commercial poultry farm raising up to {{birdCapacity}} birds with a focus on {{productFocus}} production. We are seeking {{startupCost}} to build housing, install equipment, and reach steady, profitable output." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Managed by {{founderName}}, {{businessName}} follows strict biosecurity and welfare standards to deliver consistent, high-quality {{productFocus}}. Efficient feed conversion and low mortality underpin our cost advantage." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Demand for affordable protein keeps poultry consumption growing year over year. Local buyers prefer fresh, traceable {{productFocus}} over imported supply, giving nearby farms a durable edge." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wholesalers and distributors supplying grocery chains" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Restaurants and hotels needing steady fresh supply" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Local markets and direct-to-consumer buyers" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fresh {{productFocus}} sold by weight or tray" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wholesale supply contracts with volume pricing" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Manure and by-products sold to nearby crop farms" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We secure offtake agreements with wholesalers before scaling, build direct relationships with restaurants, and promote freshness and traceability at local markets to command steady prices." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$210,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$340,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$500,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$182,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$268,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$372,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$28,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$72,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$128,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} seeks {{startupCost}} to construct poultry housing, install feeders and climate control, and fund initial stock, feed, and veterinary reserves through the first production cycles." }] }
        ]
      }
    }
  },
  {
    id: "car-wash-business-plan",
    slug: "car-wash-business-plan",
    title: "Car Wash Business Plan Template",
    description: "Free car wash business plan template with site strategy, local market analysis, service menu, and 3-year financial projections for owners.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Car Wash Business Plan Template",
      fields: ["businessName", "founderName", "date", "washType", "location", "startupCost"],
      layout: { header: "CAR WASH BUSINESS PLAN", footer: "Confidential — prepared for owners and lenders." },
      styles: { primaryColor: "#0891b2", secondaryColor: "#06b6d4" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a {{washType}} car wash located at {{location}}, offering fast, high-quality vehicle cleaning with a membership model. We are seeking {{startupCost}} to build the site, install equipment, and launch operations." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Operated by {{founderName}}, {{businessName}} combines efficient throughput with eco-friendly water reclamation. Unlimited monthly memberships create predictable recurring revenue and high customer loyalty." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Car ownership near {{location}} supports steady wash demand, and the shift toward express and membership models has boosted per-site volumes. Convenience and speed are the primary purchase drivers." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Daily commuters passing the {{location}} corridor" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Local residents seeking convenient recurring washes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fleet and rideshare drivers needing frequent cleaning" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Express {{washType}} exterior wash packages" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Unlimited monthly membership plans" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Self-serve vacuums, detailing, and add-on services" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We drive sign-ups with an opening membership promotion, prominent signage, and a simple mobile app. Local digital ads and fleet partnerships build a recurring subscriber base quickly." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$380,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$620,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$840,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$310,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$430,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$70,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$190,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$300,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} requests {{startupCost}} to fund site construction, wash tunnel equipment, water reclamation systems, and marketing to build the initial membership base." }] }
        ]
      }
    }
  },
  {
    id: "dental-clinic-business-plan",
    slug: "dental-clinic-business-plan",
    title: "Dental Clinic Business Plan Template",
    description: "Free dental clinic business plan template with services, patient market analysis, staffing, equipment, and 3-year financial projections for dentists.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Dental Clinic Business Plan Template",
      fields: ["businessName", "founderName", "date", "specialty", "location", "startupCost"],
      layout: { header: "DENTAL CLINIC BUSINESS PLAN", footer: "Confidential — prepared for owners and lenders." },
      styles: { primaryColor: "#0d9488", secondaryColor: "#2dd4bf" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a modern dental clinic in {{location}} focused on {{specialty}} care and family dentistry. We are seeking {{startupCost}} to build out the practice, purchase equipment, and grow an active patient base." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Led by {{founderName}}, {{businessName}} delivers comfortable, technology-driven care with same-week appointments and transparent pricing. Digital imaging and a patient-first experience set the practice apart." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The {{location}} area is underserved relative to its growing population, and patients increasingly value convenience, comfort, and flexible financing. Recurring hygiene visits create predictable, repeat revenue." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Families seeking a long-term dental home" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Working professionals wanting {{specialty}} and cosmetic care" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Insured patients within a 5-mile catchment area" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Preventive cleanings, exams, and hygiene visits" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "{{specialty}} treatments and restorative procedures" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cosmetic dentistry, whitening, and membership plans" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We attract patients through local SEO, Google Business reviews, insurance network listings, and a new-patient offer. Recall reminders and referral rewards keep chairs full and retention high." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$620,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$980,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,350,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$760,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$980,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$80,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$220,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$370,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is seeking {{startupCost}} to complete the clinic build-out, purchase dental chairs and imaging equipment, and cover staffing and marketing during the patient ramp-up." }] }
        ]
      }
    }
  },
  {
    id: "pet-grooming-business-plan",
    slug: "pet-grooming-business-plan",
    title: "Pet Grooming Business Plan Template",
    description: "Free pet grooming business plan template with services, local pet market analysis, pricing, and 3-year financial projections for groomers.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Pet Grooming Business Plan Template",
      fields: ["businessName", "founderName", "date", "serviceModel", "location", "startupCost"],
      layout: { header: "PET GROOMING BUSINESS PLAN", footer: "Confidential — prepared for owners and lenders." },
      styles: { primaryColor: "#9333ea", secondaryColor: "#c084fc" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a {{serviceModel}} pet grooming business serving dog and cat owners in {{location}}. We are seeking {{startupCost}} to equip the salon, hire skilled groomers, and build a loyal, recurring clientele." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} offers gentle, low-stress grooming with certified staff and a clean, welcoming space. Online booking and reminder texts make repeat visits effortless for busy pet owners." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Pet ownership and spending continue to rise, and owners treat grooming as an essential recurring service. The {{location}} market has strong pet density and limited premium grooming options." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Dog owners needing regular full-service grooming" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cat owners seeking specialized, calm handling" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Busy professionals valuing convenient booking" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-service baths, haircuts, and breed styling" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Nail trims, teeth brushing, and de-shedding add-ons" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Grooming packages and prepaid loyalty memberships" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We build visibility with local SEO, Google reviews, and before-and-after photos on social media. Partnerships with vets and pet stores, plus a first-visit discount, convert new clients into regulars." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$145,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$235,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$330,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$118,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$172,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$228,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$27,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$63,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$102,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} requests {{startupCost}} to fund salon build-out, grooming tables and tubs, dryers and tools, and initial marketing to build a steady booking calendar." }] }
        ]
      }
    }
  },
  {
    id: "hotel-business-plan",
    slug: "hotel-business-plan",
    title: "Hotel Business Plan Template",
    description: "Free hotel business plan template with room strategy, hospitality market analysis, amenities, and 3-year financial projections for hoteliers.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Hotel Business Plan Template",
      fields: ["businessName", "founderName", "date", "roomCount", "location", "fundingAsk"],
      layout: { header: "HOTEL BUSINESS PLAN", footer: "Confidential — prepared for investors and lenders." },
      styles: { primaryColor: "#92400e", secondaryColor: "#d97706" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a {{roomCount}}-room boutique hotel in {{location}} offering comfortable stays for leisure and business travelers. We are seeking {{fundingAsk}} to acquire and renovate the property and reach strong, stabilized occupancy." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Led by {{founderName}}, {{businessName}} blends modern amenities with attentive local hospitality. A memorable guest experience and a strong direct-booking channel drive our revenue-per-room advantage." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Tourism and business travel to {{location}} generate consistent room-night demand, with visitors seeking distinctive boutique properties over generic chains. Events and seasonal peaks support premium rates." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Leisure travelers and couples booking weekend getaways" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Business travelers attending nearby meetings and events" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Groups booking weddings and destination celebrations" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Standard, deluxe, and suite room categories" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "On-site dining, bar, and event space rentals" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Concierge, spa, and curated local experiences" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We balance online travel agency exposure with a direct-booking website, loyalty perks, and strong review management. Partnerships with local venues and a distinctive brand story build repeat and referral demand." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,150,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,720,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,240,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$980,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,340,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,620,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$170,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$380,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$620,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is seeking {{fundingAsk}} to fund property acquisition, renovation, furnishings, and pre-opening operating capital ahead of stabilized occupancy." }] }
        ]
      }
    }
  }
];
