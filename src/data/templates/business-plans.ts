// Enriched, per-template document content for the "business-plans" category.
// Each business plan has industry-specific market analysis, products, cost and
// revenue tables, and language, so no two documents read the same.
export const businessPlansTemplates = [
  {
    id: "startup-business-plan",
    slug: "startup-business-plan",
    title: "Startup Business Plan Template",
    description: "Investor-ready startup business plan with executive summary, market analysis, go-to-market strategy, and 3-year financials.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Startup Business Plan",
      fields: ["companyName", "address", "email", "phone", "foundedYear", "missionStatement", "fundingAsk", "founderName", "date"],
      layout: {
        header: "STARTUP BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#6366f1", layoutVariant: 0, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Founded {{foundedYear}} | {{address}} | {{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Mission: " }, { type: "text", text: "{{missionStatement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is an early-stage venture building a scalable SaaS platform for underserved small businesses. We are raising {{fundingAsk}} to accelerate product development, expand the go-to-market team, and reach profitability within 24 months. Led by {{founderName}}, our lean team has validated demand with paying pilot customers." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded in {{foundedYear}} and headquartered at {{address}}, {{companyName}} operates a subscription software model. Our core differentiator is a no-code automation engine that reduces manual operations for our customers by up to 40%." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The global SMB software market exceeds $200B and is growing at 12% annually. Incumbent tools are fragmented, expensive, and difficult to adopt, leaving a clear opening for an integrated, affordable platform." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Total Addressable Market: 32M small businesses in North America" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Serviceable market: 4.5M businesses in our launch verticals" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Key competitors rely on legacy on-premise deployments" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Buyers cite integration and price as top switching drivers" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Core platform: workflow automation and dashboards" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tiered subscriptions: Starter, Growth, and Enterprise" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Marketplace of third-party integrations and add-ons" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional onboarding and priority support" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We drive acquisition through content-led SEO, product-led free trials, and a founder-led outbound motion in year one, transitioning to an inside sales team as ARR scales." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Engineering and product remain in-house, while cloud infrastructure runs on a pay-as-you-scale provider. Customer success and support scale with a blended team of full-time staff and contractors." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$480,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,600,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Operating Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,200,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Income" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "-$240,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$300,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$1,400,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "restaurant-business-plan",
    slug: "restaurant-business-plan",
    title: "Restaurant Business Plan Template",
    description: "Full-service restaurant business plan covering concept, menu, location analysis, staffing, and startup cost breakdown.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Restaurant Business Plan",
      fields: ["companyName", "address", "email", "phone", "cuisineType", "seatingCapacity", "ownerName", "conceptStatement", "date"],
      layout: {
        header: "RESTAURANT BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#d97706", layoutVariant: 1, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{cuisineType}} Dining | {{address}} | {{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Concept: " }, { type: "text", text: "{{conceptStatement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a {{cuisineType}} restaurant offering a warm, chef-driven dining experience with {{seatingCapacity}} seats. Owner {{ownerName}} combines seasonal, locally-sourced ingredients with an approachable price point to capture the growing casual-premium dining segment." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Located at {{address}}, the restaurant seats {{seatingCapacity}} guests across a main dining room, bar, and seasonal patio. The venue is designed for dinner service six nights per week with weekend brunch." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The local dining district draws steady foot traffic from nearby offices, residential neighborhoods, and a nightlife corridor. Demand for chef-driven, ingredient-focused concepts continues to outpace fast-casual chains." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trade area population of 85,000 within a 3-mile radius" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Average neighborhood dinner check of $42 per guest" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Limited direct competition in the {{cuisineType}} category" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Strong reservation demand for weekend dining" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Seasonal à la carte dinner menu" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Curated wine list and craft cocktail program" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Weekend brunch and private event catering" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Chef's tasting menu on select evenings" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will build a loyal following through Instagram-forward food photography, local food-writer outreach, a rewards program, and partnerships with neighborhood businesses for private events." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "The kitchen runs a brigade of a head chef, two line cooks, and a prep team, with front-of-house staffed by a manager, servers, and bartenders. Inventory is managed with daily par levels and a just-in-time produce supplier." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Buildout & Kitchen" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Renovation and equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Furniture & Decor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dining room and bar" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Working Capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "First 3 months of operations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$70,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$300,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "coffee-shop-business-plan",
    slug: "coffee-shop-business-plan",
    title: "Coffee Shop Business Plan Template",
    description: "Specialty coffee shop business plan with cafe concept, daily volume model, menu pricing, and startup cost table.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Coffee Shop Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "dailyCustomers", "averageTicket", "roastPartner", "date"],
      layout: {
        header: "COFFEE SHOP BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#78350f",
        secondaryColor: "#a16207", layoutVariant: 2, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Specialty Coffee | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a neighborhood specialty coffee shop serving ethically-sourced espresso, pour-over, and house-baked goods. Owner {{ownerName}} targets {{dailyCustomers}} daily customers at an average ticket of {{averageTicket}}, building a fast-turning morning and midday business." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The cafe at {{address}} pairs a compact bar-forward layout with a small seating area and grab-and-go counter. Beans are supplied by {{roastPartner}}, roasted weekly for freshness." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The surrounding area combines commuter foot traffic, remote workers seeking a third place, and a lack of quality independent cafes, creating consistent morning demand." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Morning rush peaks between 7:00 and 9:30 AM" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Nearest specialty competitor is over half a mile away" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Growing demand for oat-milk and cold-brew options" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Remote workers extend afternoon dwell time and spend" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Espresso drinks: latte, cappuccino, cortado, and americano" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Single-origin pour-over and cold brew" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "House-baked pastries and light breakfast items" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Retail whole-bean bags and subscriptions" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will grow through a loyalty app, local Instagram presence, opening-week promotions, and wholesale coffee accounts with nearby offices to smooth midday revenue." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "The shop runs two baristas during peak and one off-peak, with early-morning bake prep. Ordering, scheduling, and POS analytics are managed through a single cloud platform to control waste." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Espresso Machine & Grinders" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dual-boiler setup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$28,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cafe Buildout" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Counter, seating, and signage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$52,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Opening Inventory & Working Capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Beans, supplies, and reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$30,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$110,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "ecommerce-business-plan",
    slug: "ecommerce-business-plan",
    title: "Ecommerce Business Plan Template",
    description: "Online store business plan covering product niche, DTC channels, fulfillment operations, and 3-year revenue projections.",
    isPremium: true,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Ecommerce Business Plan",
      fields: ["companyName", "address", "email", "phone", "founderName", "productNiche", "targetAOV", "storePlatform", "date"],
      layout: {
        header: "ECOMMERCE BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#0e7490",
        secondaryColor: "#0891b2", layoutVariant: 3, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Direct-to-Consumer {{productNiche}} | {{email}} | {{phone}} | {{address}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a direct-to-consumer ecommerce brand selling {{productNiche}} online. Founder {{founderName}} targets a {{targetAOV}} average order value through a curated catalog, strong brand storytelling, and a data-driven paid acquisition engine on {{storePlatform}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Operating as an asset-light online retailer, {{companyName}} sells through its own {{storePlatform}} storefront and select marketplaces, with a small studio and 3PL warehouse handling photography and fulfillment." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Ecommerce continues to take share from brick-and-mortar in the {{productNiche}} category, with buyers favoring brands that offer fast shipping, easy returns, and a distinct point of view." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Category online penetration growing 15% year over year" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mobile accounts for 68% of category traffic" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Repeat purchase rate is the key profitability lever" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rising ad costs reward strong organic and email channels" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Curated hero product line in the {{productNiche}} niche" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bundles and subscription replenishment options" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Limited seasonal drops to drive urgency" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Free returns and carbon-neutral shipping" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Acquisition blends Meta and TikTok paid social, influencer seeding, and SEO content, while retention runs on email/SMS flows, a loyalty program, and post-purchase upsells." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Inventory is forecasted against sell-through and stored with a third-party logistics partner offering 2-day nationwide delivery. Customer support runs through a shared helpdesk with a 24-hour response SLA." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,100,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,400,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gross Margin" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "58%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "61%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "63%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "-$40,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$260,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$920,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "nonprofit-business-plan",
    slug: "nonprofit-business-plan",
    title: "Nonprofit Business Plan Template",
    description: "Nonprofit organization business plan with mission, programs, funding mix, impact metrics, and operating budget.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Nonprofit Business Plan",
      fields: ["companyName", "address", "email", "phone", "executiveDirector", "missionStatement", "einNumber", "beneficiariesServed", "date"],
      layout: {
        header: "NONPROFIT BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#15803d",
        secondaryColor: "#16a34a", layoutVariant: 4, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | 501(c)(3) EIN {{einNumber}} | {{address}} | {{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Mission: " }, { type: "text", text: "{{missionStatement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a nonprofit organization advancing educational and economic opportunity in underserved communities. Under Executive Director {{executiveDirector}}, we aim to serve {{beneficiariesServed}} annually through direct programs, partnerships, and volunteer-led initiatives." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Headquartered at {{address}}, {{companyName}} operates as a tax-exempt 501(c)(3) governed by a volunteer board of directors, with a lean staff and a network of community volunteers." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Community needs assessments show persistent gaps in access to mentorship, workforce training, and educational resources, with limited coordinated services from existing providers." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Documented service gap for youth mentorship in the region" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Strong local funder interest in measurable outcomes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Opportunity for corporate volunteer partnerships" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Few competing programs with wraparound support" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "After-school mentorship and tutoring programs" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Workforce readiness and job-placement workshops" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Community scholarships and emergency assistance" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Volunteer engagement and community events" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Fundraising blends individual giving campaigns, grant applications, corporate sponsorships, and an annual gala, supported by an impact-driven storytelling and email program." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Programs are delivered from a central community center and partner sites, with outcomes tracked in a case-management system and reported to funders quarterly." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Funding Source" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Grants" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Foundation and government grants" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$320,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Individual Giving" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Donors and gala" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Corporate Sponsorship" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Local business partners" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$100,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Budget" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual operating revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$600,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{executiveDirector}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "real-estate-business-plan",
    slug: "real-estate-business-plan",
    title: "Real Estate Business Plan Template",
    description: "Real estate brokerage business plan with market farm area, agent model, listing strategy, and commission projections.",
    isPremium: true,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Real Estate Business Plan",
      fields: ["companyName", "address", "email", "phone", "brokerName", "licenseNumber", "farmArea", "targetTransactions", "date"],
      layout: {
        header: "REAL ESTATE BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#2563eb", layoutVariant: 5, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Licensed Brokerage #{{licenseNumber}} | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a full-service residential real estate brokerage led by {{brokerName}}, focused on the {{farmArea}} market. We aim to close {{targetTransactions}} transactions per year by combining a strong local brand, agent mentorship, and technology-enabled marketing." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Operating from {{address}}, the brokerage recruits and supports a team of buyer's and listing agents under a competitive commission split, with centralized transaction coordination and marketing." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The {{farmArea}} market features steady turnover, appreciating home values, and a mix of first-time buyers and move-up families, rewarding agents with deep neighborhood expertise." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Median home price appreciating 6% annually in the farm area" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Average of 60 days on market for well-staged listings" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Strong inbound demand from relocating buyers" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fragmented competition with few tech-forward brokerages" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Listing representation with professional staging and media" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Buyer representation and relocation services" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Investor and rental property advisory" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Comparative market analysis and pricing consultation" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Lead generation combines geo-targeted online ads, a hyperlocal content site, database nurturing, open houses, and a referral program with past clients and local partners." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "A transaction coordinator manages contracts to close, a marketing coordinator produces listing media, and a CRM tracks every lead from first contact through post-close follow-up." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Transactions Closed" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "45" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "85" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "140" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gross Commission Income" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,450,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Brokerage Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$120,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$340,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$620,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{brokerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "salon-business-plan",
    slug: "salon-business-plan",
    title: "Salon Business Plan Template",
    description: "Hair and beauty salon business plan with service menu, stylist model, retail revenue, and startup cost breakdown.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Salon Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "numberOfStations", "serviceFocus", "averageServicePrice", "date"],
      layout: {
        header: "SALON BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#be185d",
        secondaryColor: "#db2777", layoutVariant: 0, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{serviceFocus}} Salon | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a premium {{serviceFocus}} salon with {{numberOfStations}} styling stations, offering a luxury client experience at an accessible price point. Owner {{ownerName}} blends expert stylists, a curated retail line, and a membership model to drive recurring revenue." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The salon at {{address}} operates {{numberOfStations}} chairs plus a color bar and wash stations, staffed by commission-based and booth-rental stylists, with an average service ticket of {{averageServicePrice}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Local demand for premium hair and beauty services is strong among professionals and event clientele, with limited high-end competition and growing interest in wellness-oriented experiences." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Affluent trade area with high discretionary spending" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rising demand for balayage and color services" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Membership models increase client retention" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Retail attach rates lift revenue per visit" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cuts, styling, and blowouts" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Color, balayage, and highlights" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bridal and special-event styling" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Retail haircare and styling products" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Growth is driven by Instagram transformation reels, Google Business reviews, a referral rewards program, and a monthly membership offering discounted maintenance services." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Online booking manages the schedule and reduces no-shows with deposits, while inventory of color and retail stock is tracked weekly and reordered against par levels." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stations & Equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Chairs, sinks, and dryers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$48,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Interior Buildout" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design, lighting, and reception" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$62,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Opening Inventory & Reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Color, retail, and working capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$40,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$150,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "consulting-business-plan",
    slug: "consulting-business-plan",
    title: "Consulting Business Plan Template",
    description: "Management consulting firm business plan with service lines, ideal client profile, day-rate model, and revenue projections.",
    isPremium: true,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Consulting Business Plan",
      fields: ["companyName", "address", "email", "phone", "principalName", "practiceArea", "targetDayRate", "billableConsultants", "date"],
      layout: {
        header: "CONSULTING BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#475569", layoutVariant: 1, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{practiceArea}} Consulting | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a boutique {{practiceArea}} consulting firm led by {{principalName}}, delivering strategy and implementation to mid-market clients. Operating a lean model of {{billableConsultants}} billable consultants at a {{targetDayRate}} blended day rate, the firm is designed for high margins and low overhead." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Based at {{address}}, {{companyName}} combines senior full-time consultants with a vetted associate network, allowing the firm to scale delivery capacity project by project without carrying bench cost." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Mid-market companies increasingly seek specialized outside expertise but are priced out of large global firms, creating strong demand for senior, hands-on boutique advisors in {{practiceArea}}." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mid-market firms underserved by large consultancies" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Buyers value senior-led delivery over leveraged teams" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Referrals and reputation drive most engagements" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Retainer relationships smooth revenue seasonality" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy assessments and roadmaps" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Implementation and program management" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fractional executive and advisory retainers" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Workshops and executive training" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Business development runs on thought leadership, speaking engagements, a targeted LinkedIn presence, and a structured referral program with past clients and partner firms." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Engagements are scoped with fixed-fee or retainer contracts, delivered through a standardized methodology, and supported by cloud collaboration tools and a project management office." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Billable Days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "480" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "820" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,250" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,640,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,500,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$260,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$540,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$900,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{principalName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "tech-startup-business-plan",
    slug: "tech-startup-business-plan",
    title: "Tech Startup Business Plan Template",
    description: "Technology startup business plan with product vision, TAM sizing, engineering roadmap, unit economics, and 3-year projections.",
    isPremium: true,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Tech Startup Business Plan",
      fields: ["companyName", "address", "email", "phone", "founderName", "productVision", "fundingRound", "targetArr", "date"],
      layout: {
        header: "TECH STARTUP BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#5b21b6",
        secondaryColor: "#7c3aed", layoutVariant: 2, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | AI Developer Platform | {{address}} | {{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Product Vision: " }, { type: "text", text: "{{productVision}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is building developer infrastructure that helps engineering teams ship AI-powered features faster. We are raising a {{fundingRound}} to scale the platform toward {{targetArr}} in annual recurring revenue. Founder {{founderName}} leads a technical team with prior platform-scale experience." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Headquartered at {{address}}, {{companyName}} sells a usage-based API and SaaS control plane to software teams, with a self-serve funnel and an enterprise sales motion for larger accounts." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "AI tooling is one of the fastest-growing segments of developer infrastructure, with teams shifting spend from internal builds to specialized platforms that reduce time-to-market." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Developer tools market growing over 20% annually" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bottoms-up adoption drives low-cost acquisition" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Usage-based pricing aligns cost with customer value" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise demand for security and compliance features" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Core API with SDKs for major languages" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Web dashboard for observability and controls" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Usage-based pricing with a generous free tier" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise plan with SSO, SLAs, and support" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Growth is product-led: open-source contributions, technical documentation, developer content, and community, converting free users to paid and expanding into enterprise accounts." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "The company runs on cloud-native infrastructure with automated CI/CD, on-call reliability rotations, and SOC 2 controls, while the team stays remote-first to access global engineering talent." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "ARR" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,200,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,800,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paying Customers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "120" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "560" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Burn / Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "-$1,800,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "-$900,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$1,600,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "fitness-gym-business-plan",
    slug: "fitness-gym-business-plan",
    title: "Fitness Gym Business Plan Template",
    description: "Fitness gym business plan with membership model, class programming, facility layout, staffing, and startup cost table.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Fitness Gym Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "facilitySize", "membershipTarget", "monthlyMembershipFee", "date"],
      layout: {
        header: "FITNESS GYM BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#b91c1c",
        secondaryColor: "#dc2626", layoutVariant: 3, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Strength & Conditioning Gym | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a {{facilitySize}} strength and conditioning gym combining open-floor training, group classes, and personal coaching. Owner {{ownerName}} targets {{membershipTarget}} members at a {{monthlyMembershipFee}} monthly fee, supplemented by personal training and retail revenue." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The {{facilitySize}} facility at {{address}} features a free-weight zone, functional training rig, cardio deck, and a dedicated group-class studio, open early morning through late evening." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The surrounding community shows rising interest in strength training and small-group fitness, with existing big-box gyms offering little coaching and boutique studios priced at a premium." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Health-conscious population within a 4-mile radius" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Growing demand for coached strength programs" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Personal training drives high per-member revenue" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Community and accountability improve retention" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Open-gym monthly and annual memberships" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Group strength and conditioning classes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "One-on-one and small-group personal training" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Supplements, apparel, and recovery services" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Acquisition uses a free trial week, transformation challenges, local partnerships, and member referrals, while retention is driven by coaching, progress tracking, and community events." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Staffing includes a general manager, coaches, and front-desk team, with membership billing, class scheduling, and access control managed through an integrated gym-management platform." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Racks, weights, and cardio machines" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Facility Buildout" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Flooring, studio, and locker rooms" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Working Capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "First 4 months of operations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$300,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "bakery-business-plan",
    slug: "bakery-business-plan",
    title: "Bakery Business Plan Template",
    description: "Artisan bakery business plan with product mix, retail and wholesale channels, daily production model, and startup cost table.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Bakery Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "specialtyProduct", "dailyOutput", "wholesaleAccounts", "date"],
      layout: {
        header: "BAKERY BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#92400e",
        secondaryColor: "#f59e0b", layoutVariant: 4, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Artisan Bakery | {{address}} | {{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Signature Product: " }, { type: "text", text: "{{specialtyProduct}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a neighborhood artisan bakery producing hand-crafted breads, pastries, and cakes fresh daily. Owner {{ownerName}} has built the concept around a {{specialtyProduct}} that anchors both a busy retail counter and a growing wholesale program supplying {{wholesaleAccounts}} local cafes and restaurants." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The bakery at {{address}} runs an early-morning production kitchen and a front retail case, baking roughly {{dailyOutput}} items per day. Sourdough is naturally leavened over 24 hours, and all pastries are made from scratch using European-style butter and locally milled flour." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Demand for craft, slow-fermented baked goods continues to grow as shoppers move away from mass-produced supermarket bread toward transparent, locally made products." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Dense residential trade area with weekend foot traffic" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rising demand for sourdough and gluten-conscious options" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wholesale accounts smooth weekday revenue" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom-cake and holiday orders lift average ticket" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Naturally leavened sourdough and rustic loaves" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Laminated pastries: croissants, danishes, and morning buns" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom celebration cakes and seasonal specials" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wholesale bread program for cafes and restaurants" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will grow through appetizing social media, farmers-market pop-ups, a preorder system for holidays, and outreach to local coffee shops for standing wholesale orders." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Production starts at 3:00 AM with a head baker and two assistants; retail staff open the counter mid-morning. Flour, butter, and dairy are ordered against daily par levels, and unsold bread is donated or discounted to minimize waste." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ovens & Bakery Equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Deck oven, mixers, and proofer" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Retail Buildout" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Counter, cases, and signage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$55,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Opening Inventory & Reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ingredients and working capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$35,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$185,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "food-truck-business-plan",
    slug: "food-truck-business-plan",
    title: "Food Truck Business Plan Template",
    description: "Mobile food truck business plan with menu concept, event and route strategy, commissary operations, and startup cost table.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Food Truck Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "cuisineStyle", "serviceRadius", "eventsPerMonth", "date"],
      layout: {
        header: "FOOD TRUCK BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#c2410c",
        secondaryColor: "#fb923c", layoutVariant: 5, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{cuisineStyle}} Food Truck | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a mobile {{cuisineStyle}} food truck serving bold, street-style dishes at offices, breweries, and events across a {{serviceRadius}} service area. Owner {{ownerName}} keeps overhead low with a tight, high-margin menu and books roughly {{eventsPerMonth}} catered events each month to complement daily lunch service." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The truck is based out of a licensed commissary near {{address}}, where prep, storage, and cleaning take place. A rotating weekly route targets high-traffic lunch spots, evening brewery stops, and weekend markets and private bookings." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Mobile food offers a low-capital path into the restaurant market, and diners increasingly seek out chef-driven street food, giving a nimble truck strong appeal at events and office parks." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Underserved lunch demand at suburban office parks" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Breweries without kitchens seek regular food partners" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Private catering delivers the highest per-event margin" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Social media location posts drive same-day traffic" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Core signature entrees and handhelds" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rotating weekly specials to reward repeat guests" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Private event and corporate catering packages" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Branded merchandise and beverages" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We will post daily locations on social media, join food-truck rally and festival lineups, list on catering marketplaces, and build a booking pipeline with local offices and event planners." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "A two-person crew handles prep and service, with the owner managing routing, permits, and bookings. Ingredients are prepped at the commissary each morning, and the truck follows a fixed cleaning and health-compliance checklist." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Truck & Build-Out" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Vehicle and kitchen fit-out" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Permits & Commissary" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Licenses and first-year kitchen rent" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Inventory & Working Capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Opening supplies and reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$22,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$125,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "clothing-boutique-business-plan",
    slug: "clothing-boutique-business-plan",
    title: "Clothing Boutique Business Plan Template",
    description: "Fashion boutique business plan with curated apparel assortment, omnichannel retail, buying strategy, and startup cost table.",
    isPremium: true,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Clothing Boutique Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "apparelStyle", "averageBasket", "date"],
      layout: {
        header: "CLOTHING BOUTIQUE BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#9d174d",
        secondaryColor: "#ec4899", layoutVariant: 0, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{apparelStyle}} Boutique | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a curated {{apparelStyle}} clothing boutique offering a hand-picked assortment of apparel and accessories in a warm, personal shopping environment. Owner {{ownerName}} targets an {{averageBasket}} average basket by pairing an in-store experience with an online storefront and styling appointments." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The boutique at {{address}} carries a tightly edited selection from independent and emerging labels, refreshed with frequent small drops to keep regulars returning. An integrated online store extends reach beyond the local trade area." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Shoppers are increasingly drawn to distinctive, well-curated boutiques over big-box apparel, valuing personal service, unique labels, and a strong point of view they cannot find in chain stores." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Walkable shopping district with strong weekend traffic" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Loyal local base seeking non-mass-market labels" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Online store expands reach beyond the neighborhood" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Personal styling drives repeat, higher-value visits" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Curated women's apparel and seasonal collections" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Accessories, jewelry, and gift items" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Personal styling and private shopping appointments" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Online store with in-store pickup and shipping" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Growth is driven by Instagram lookbooks and try-on reels, an email list with early access to drops, in-store events and trunk shows, and a loyalty program rewarding repeat customers." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Buying is planned each season against open-to-buy budgets, with inventory and online orders managed through a unified retail POS. Part-time sales associates provide styling help during peak hours." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Opening Inventory" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "First-season apparel buy" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$60,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Store Buildout & Fixtures" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Racks, fitting rooms, and decor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$50,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Website & Working Capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ecommerce setup and reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$30,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$140,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "daycare-business-plan",
    slug: "daycare-business-plan",
    title: "Daycare Business Plan Template",
    description: "Childcare and daycare business plan with licensed capacity, age programs, staffing ratios, tuition model, and startup costs.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Daycare Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "licensedCapacity", "ageRange", "weeklyTuition", "date"],
      layout: {
        header: "DAYCARE BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#2dd4bf", layoutVariant: 1, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Licensed Childcare Center | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a licensed early-learning and childcare center serving children ages {{ageRange}} with a play-based, developmental curriculum. Director {{ownerName}} operates a {{licensedCapacity}}-child facility at a {{weeklyTuition}} weekly tuition, focused on safety, nurturing care, and school readiness." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The center at {{address}} is state-licensed for {{licensedCapacity}} children across age-grouped classrooms, with secure entry, an outdoor play area, and staff who meet or exceed required child-to-teacher ratios." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Working parents in the area face long waitlists and limited quality childcare, creating steady demand for a well-run, licensed center with a structured early-learning program." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "High share of dual-income households nearby" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Existing centers report multi-month waitlists" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Parents prioritize safety, curriculum, and communication" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Subsidy programs support enrollment stability" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-time and part-time childcare programs" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Age-appropriate early-learning curriculum" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Nutritious meals and snacks" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Daily parent updates and progress reports" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Enrollment is driven by local search and reviews, tours and open houses, referrals from current families, and partnerships with nearby employers offering childcare benefits." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Certified teachers and assistants staff each classroom to licensing ratios, with background checks, ongoing training, and documented health, safety, and emergency procedures. Enrollment, billing, and daily reports run through a childcare-management app." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Facility & Safety Buildout" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Classrooms, fencing, and secure entry" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$110,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Furniture & Learning Materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cribs, tables, and curriculum supplies" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Licensing & Working Capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Permits, insurance, and reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$40,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$195,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "cleaning-company-business-plan",
    slug: "cleaning-company-business-plan",
    title: "Cleaning Company Business Plan Template",
    description: "Residential and commercial cleaning company business plan with service area, crew model, recurring contracts, and financials.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Cleaning Company Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "serviceArea", "crewCount", "averageJobPrice", "date"],
      layout: {
        header: "CLEANING COMPANY BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#0369a1",
        secondaryColor: "#38bdf8", layoutVariant: 2, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Residential & Commercial Cleaning | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a professional cleaning company serving homes and offices across the {{serviceArea}} area. Owner {{ownerName}} builds recurring revenue through weekly and biweekly contracts, running {{crewCount}} cleaning crews at an {{averageJobPrice}} average job price with an emphasis on reliability and trust." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Operating from {{address}}, the company dispatches insured and background-checked crews using eco-friendly supplies and a standardized cleaning checklist for consistent results across every visit." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Busy households and small offices increasingly outsource cleaning, and recurring service contracts create predictable, high-retention revenue in a fragmented local market." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Large base of dual-income and professional households" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Recurring contracts drive predictable monthly revenue" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Commercial accounts add higher-volume day work" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trust and reliability are the main switching factors" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Recurring residential cleaning plans" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deep cleans and move-in / move-out service" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Commercial and office janitorial contracts" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Add-on services: windows, carpets, and appliances" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Leads come from local SEO and Google reviews, targeted neighborhood ads, referral incentives, and outreach to property managers and small businesses for recurring commercial contracts." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Scheduling, routing, and invoicing run through field-service software, with crews equipped from a central supply stock. Quality is maintained with checklists, spot audits, and a satisfaction guarantee." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Active Recurring Clients" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "60" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "140" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "240" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$220,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$480,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$820,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$35,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$95,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$180,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "photography-business-plan",
    slug: "photography-business-plan",
    title: "Photography Business Plan Template",
    description: "Professional photography business plan with niche focus, session packages, studio operations, and 3-year revenue projections.",
    isPremium: true,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Photography Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "photographyNiche", "sessionRate", "date"],
      layout: {
        header: "PHOTOGRAPHY BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#6b21a8",
        secondaryColor: "#c084fc", layoutVariant: 3, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{photographyNiche}} Photography | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a professional {{photographyNiche}} photography studio delivering high-end imagery and a polished client experience. Photographer {{ownerName}} books sessions at a {{sessionRate}} starting rate, growing revenue through print products, albums, and repeat and referral clients." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Based at {{address}}, the studio offers both on-location and in-studio sessions, with a signature editing style and a guided ordering process that turns each shoot into curated wall art and albums." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Clients increasingly value professional imagery for milestones, brands, and social media, and are willing to pay a premium for a distinct style and a seamless, high-touch experience." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Steady demand for milestone and brand photography" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Clients pay premiums for a recognizable signature style" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Print and album sales lift revenue per session" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Referrals and reviews drive most new bookings" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Portrait and lifestyle session packages" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Event and milestone coverage" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Commercial and brand content shoots" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prints, wall art, and heirloom albums" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "A portfolio website and SEO capture local searches, while Instagram and Pinterest showcase work, and a referral program plus vendor partnerships keep the booking calendar full." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Inquiries, contracts, scheduling, and galleries are handled through studio-management software, with an outsourced editor supporting turnaround during busy season and a professional print lab fulfilling orders." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sessions Booked" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "85" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "150" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "220" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$275,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$40,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$90,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$150,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "landscaping-business-plan",
    slug: "landscaping-business-plan",
    title: "Landscaping Business Plan Template",
    description: "Landscaping and lawn care business plan with service region, crew model, maintenance contracts, and 3-year projections.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Landscaping Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "serviceRegion", "crewCount", "averageContractValue", "date"],
      layout: {
        header: "LANDSCAPING BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#166534",
        secondaryColor: "#4ade80", layoutVariant: 4, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Landscaping & Lawn Care | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a full-service landscaping and lawn care company serving the {{serviceRegion}} region. Owner {{ownerName}} runs {{crewCount}} field crews and builds stable revenue from seasonal maintenance contracts averaging {{averageContractValue}}, supplemented by higher-margin design and installation projects." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Operating from {{address}}, the company offers recurring lawn maintenance alongside hardscape and planting installation, with crews dispatched on efficient routes and equipment stored at a central yard." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Homeowners and commercial properties consistently outsource lawn care, and seasonal maintenance agreements provide recurring revenue while design-build projects deliver strong margins in peak season." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Suburban market with large lots and mature landscaping" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Seasonal contracts create predictable recurring revenue" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Commercial grounds accounts add route density" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Design-build projects carry the highest margins" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Recurring mowing, trimming, and cleanup" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Landscape design and planting installation" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Hardscapes: patios, walkways, and retaining walls" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Seasonal cleanup, mulching, and snow removal" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Growth comes from local SEO and review sites, yard signs and truck branding, door-to-door route densification, and referrals from satisfied maintenance clients into larger installation projects." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Crews follow optimized daily routes managed in scheduling software, with equipment maintenance logged and materials sourced from wholesale nurseries and suppliers. Estimates and invoices are handled digitally in the field." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintenance Accounts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "70" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "130" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$260,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$520,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$860,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$45,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$110,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$200,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "auto-repair-business-plan",
    slug: "auto-repair-business-plan",
    title: "Auto Repair Business Plan Template",
    description: "Auto repair shop business plan with service bays, labor rate model, parts revenue, staffing, and startup cost breakdown.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Auto Repair Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "bayCount", "laborRate", "date"],
      layout: {
        header: "AUTO REPAIR BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#1f2937",
        secondaryColor: "#f97316", layoutVariant: 5, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | Full-Service Auto Repair | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a full-service auto repair shop providing honest, high-quality maintenance and repair for domestic and import vehicles. Owner {{ownerName}} operates a {{bayCount}}-bay facility billing at a {{laborRate}} labor rate, earning trust through transparent estimates and a strong warranty." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The shop at {{address}} runs {{bayCount}} service bays staffed by ASE-certified technicians, handling everything from routine maintenance to diagnostics and major repairs, with digital inspections shared directly with customers." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Vehicles on the road are older and more complex than ever, sustaining strong demand for skilled independent repair shops that undercut dealership pricing while building lasting customer relationships." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rising average vehicle age increases repair demand" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Customers seek trustworthy alternatives to dealerships" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fleet and commercial accounts add steady volume" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Recurring maintenance builds long-term loyalty" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Routine maintenance: oil, brakes, and tires" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Engine and transmission diagnostics and repair" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Electrical, A/C, and suspension service" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "State inspections and fleet maintenance contracts" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "The shop attracts customers through local SEO and Google reviews, service reminders and coupons, community sponsorships, and fleet-maintenance agreements with nearby small businesses." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Shop-management software handles work orders, digital inspections, and parts ordering, while technicians follow standardized procedures and a labor-guide time system, and all repairs carry a written warranty." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lifts & Diagnostic Equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Bay lifts, scanners, and tools" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$130,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Facility & Signage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Buildout, lot, and branding" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$70,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Parts Inventory & Working Capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Opening stock and reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$50,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$250,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "spa-business-plan",
    slug: "spa-business-plan",
    title: "Spa Business Plan Template",
    description: "Day spa business plan with treatment menu, membership model, treatment room capacity, retail revenue, and startup costs.",
    isPremium: true,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Spa Business Plan",
      fields: ["companyName", "address", "email", "phone", "ownerName", "treatmentFocus", "treatmentRooms", "averageTreatmentPrice", "date"],
      layout: {
        header: "SPA BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#a21caf",
        secondaryColor: "#e879f9", layoutVariant: 0, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{treatmentFocus}} Day Spa | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is a tranquil day spa specializing in {{treatmentFocus}} services designed for rest and renewal. Owner {{ownerName}} operates {{treatmentRooms}} treatment rooms at a {{averageTreatmentPrice}} average service price, driving recurring revenue through memberships, packages, and retail." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "The spa at {{address}} features {{treatmentRooms}} serene treatment rooms, a relaxation lounge, and a retail area, staffed by licensed massage therapists and estheticians delivering a consistent, calming guest experience." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Wellness and self-care spending continues to climb, with clients seeking regular, membership-based treatments rather than occasional splurges, rewarding spas that build loyal recurring relationships." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Affluent trade area with strong wellness demand" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Membership models create predictable monthly revenue" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Retail and gift cards lift revenue per guest" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Couples and group bookings raise average ticket" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Massage therapy and body treatments" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Facials and skincare services" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly membership and treatment packages" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Retail skincare products and gift cards" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Guests are acquired through a calming social presence, Google and spa-directory reviews, introductory membership offers, and gift-card promotions, with retention driven by a rewarding membership program." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Online booking with deposits minimizes no-shows, while spa-management software handles memberships, scheduling, and retail inventory. Therapists are booked against room capacity to maximize utilization." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Startup Cost" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Treatment Rooms & Equipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Tables, facial units, and fixtures" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Interior & Ambiance Buildout" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lounge, lighting, and finishes" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$75,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Opening Inventory & Reserve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Product stock and working capital" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$50,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Startup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capital required" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$210,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{ownerName}} on {{date}}." }] }
        ]
      }
    }
  },
  {
    id: "franchise-business-plan",
    slug: "franchise-business-plan",
    title: "Franchise Business Plan Template",
    description: "Franchise business plan with brand concept, franchisee model, franchise fees and royalties, unit rollout, and financials.",
    isPremium: true,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Franchise Business Plan",
      fields: ["companyName", "address", "email", "phone", "founderName", "franchiseBrand", "initialFranchiseFee", "royaltyRate", "targetUnits", "date"],
      layout: {
        header: "FRANCHISE BUSINESS PLAN",
        footer: "Confidential business plan — do not distribute."
      },
      styles: {
        primaryColor: "#4d7c0f",
        secondaryColor: "#a3e635", layoutVariant: 1, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{franchiseBrand}} Franchise System | {{address}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} is franchising the proven {{franchiseBrand}} concept to qualified operators nationwide. Founder {{founderName}} plans to award {{targetUnits}} units, generating revenue from a {{initialFranchiseFee}} initial franchise fee and an ongoing {{royaltyRate}} royalty, supported by strong training and brand systems." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Headquartered at {{address}}, {{companyName}} provides franchisees with a turnkey operating model, brand standards, supply-chain relationships, and continuous support, allowing rapid expansion with limited corporate capital." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prospective owners increasingly favor franchising over independent startups for its proven playbook and brand recognition, creating a healthy pipeline of qualified candidates for a well-documented system." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Strong demand for turnkey franchise opportunities" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Proven unit economics attract qualified franchisees" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Royalty streams scale with the network, not headcount" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Brand consistency drives customer trust across units" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Franchise license and protected territory" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Initial training and site-selection support" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Brand marketing fund and national campaigns" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ongoing operations coaching and supply agreements" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing & Sales Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Franchise development runs through franchise portals and broker networks, discovery-day events, a compelling franchise disclosure package, and validation calls with existing successful operators." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operations Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "A franchise support team handles onboarding, training, and field visits, backed by an operations manual, a learning-management system, and technology that standardizes reporting and royalty collection across all units." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Projections" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 1" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 2" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Year 3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Units Awarded" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "22" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "45" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Franchise & Royalty Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$620,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,750,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,900,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$90,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$520,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$1,350,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} on {{date}}." }] }
        ]
      }
    }
  },
];
