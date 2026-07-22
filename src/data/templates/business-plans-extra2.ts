// Additional per-template document content for the "business-plans" category.
// Ten more new, distinct, industry-specific business plans (laundromat, vending
// machine, brewery, dropshipping, car rental, tutoring center, medical practice,
// yoga studio, cloud kitchen, subscription box) — each with its own market
// analysis, offerings, and realistic 3-year financials.
export const businessPlansExtra2Templates: any[] = [
  {
    id: "laundromat-business-plan",
    slug: "laundromat-business-plan",
    title: "Laundromat Business Plan Template",
    description: "Free laundromat business plan template with executive summary, market analysis, machine mix, marketing strategy, and 3-year financial projections for self-service laundry owners.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Laundromat Business Plan Template",
      fields: ["businessName", "founderName", "date", "location", "machineCount", "fundingAsk"],
      layout: { header: "LAUNDROMAT BUSINESS PLAN", footer: "Confidential — prepared for lenders and investors." },
      styles: { primaryColor: "#0891b2", secondaryColor: "#22d3ee" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a modern self-service laundromat in {{location}} operating {{machineCount}} high-efficiency washers and dryers. We are seeking {{fundingAsk}} to secure the lease, install equipment, and build a reliable, recurring cash-flow business serving nearby renters and families." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} runs an attended, card-and-app-enabled laundromat with clean facilities, security cameras, and extended hours. Our differentiator is speed, reliability, and value-added drop-off wash-and-fold service." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The U.S. laundromat industry generates over $5B in annual revenue and remains recession-resistant because clean clothes are a non-discretionary need. Dense rental neighborhoods with few in-unit machines create steady, repeat demand in {{location}}." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Renters and apartment dwellers without in-unit laundry" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Busy families needing large-capacity machines" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wash-and-fold and commercial drop-off customers" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Self-service washers and dryers in multiple capacities" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wash-dry-fold drop-off service billed by the pound" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Vending detergent, snacks, and a loyalty app for repeat visits" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We attract customers with local flyers, Google Business Profile optimization, and grand-opening promotions. A loyalty app and referral credits drive repeat visits, while partnerships with nearby apartments and small businesses build a steady wash-and-fold base." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$248,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$305,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$142,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$168,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$189,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$43,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$80,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$116,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to fund equipment purchase, buildout, and six months of working capital. Funds are allocated 60% to washers and dryers, 25% to leasehold improvements, and 15% to reserves and marketing." }] }
        ]
      }
    }
  },
  {
    id: "vending-machine-business-plan",
    slug: "vending-machine-business-plan",
    title: "Vending Machine Business Plan Template",
    description: "Free vending machine business plan template covering route strategy, market analysis, product mix, marketing, and 3-year financial projections for vending operators.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Vending Machine Business Plan Template",
      fields: ["businessName", "founderName", "date", "serviceArea", "machineCount", "fundingAsk"],
      layout: { header: "VENDING MACHINE BUSINESS PLAN", footer: "Confidential — prepared for lenders and partners." },
      styles: { primaryColor: "#dc2626", secondaryColor: "#f87171" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} operates a route of {{machineCount}} smart vending machines across {{serviceArea}}, delivering snacks and beverages in high-traffic locations. We are seeking {{fundingAsk}} to acquire machines, secure locations, and scale a passive, cash-generating route business." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} places cashless, telemetry-enabled machines that report inventory and sales in real time. Our differentiator is data-driven restocking that maximizes uptime and product velocity while minimizing wasted trips." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The U.S. vending industry exceeds $18B annually, driven by convenience demand in offices, gyms, schools, and apartments. Modern cashless machines lift sales by 20-30% versus coin-only units, creating an opening for a tech-forward operator in {{serviceArea}}." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Office buildings and coworking spaces with steady foot traffic" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Gyms, apartments, and hospitals needing 24/7 access" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Schools and transit hubs with captive audiences" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Snacks, cold drinks, and healthy options in combo machines" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cashless tap-to-pay and mobile wallet checkout" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom product mixes tailored to each location" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We secure prime locations through commission agreements with property and facility managers, then optimize planograms using sales telemetry. Referrals from satisfied hosts and a professional site pitch fuel steady route expansion." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$96,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$290,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$71,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$121,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$25,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$59,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$105,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to purchase machines, fund initial inventory, and cover a service vehicle. Funds are allocated 70% to equipment, 20% to inventory and logistics, and 10% to working capital." }] }
        ]
      }
    }
  },
  {
    id: "brewery-business-plan",
    slug: "brewery-business-plan",
    title: "Brewery Business Plan Template",
    description: "Free brewery business plan template with executive summary, market analysis, beer lineup, taproom strategy, and 3-year financial projections for craft brewery founders.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Brewery Business Plan Template",
      fields: ["businessName", "founderName", "date", "location", "brewCapacity", "fundingAsk"],
      layout: { header: "BREWERY BUSINESS PLAN", footer: "Confidential — prepared for investors and lenders." },
      styles: { primaryColor: "#b45309", secondaryColor: "#f59e0b" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a craft brewery and taproom in {{location}} with an annual capacity of {{brewCapacity}}. We are seeking {{fundingAsk}} to build out the brewhouse, launch our flagship lineup, and grow both on-premise and distribution revenue." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} brews small-batch, locally inspired beer served in a welcoming taproom. Our differentiator is a rotating seasonal menu, community events, and a strong local brand that turns visitors into loyal regulars." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The U.S. craft beer market exceeds $28B annually, with taproom-forward breweries capturing the highest margins by selling directly to consumers. Drinkers in {{location}} increasingly favor local, independent brands over macro lagers, supporting a neighborhood brewery." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Local craft beer enthusiasts aged 25-45" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Taproom visitors seeking events and community" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bars, restaurants, and bottle shops for distribution" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Flagship IPAs, lagers, and stouts on tap year-round" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Seasonal and limited-release small batches" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Crowlers, kegs, and wholesale distribution to accounts" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We build a local following through taproom events, live music, brewery tours, and an active social media presence. Beer festivals, a mug club membership, and selective wholesale placements extend the brand beyond our four walls." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$610,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$920,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,340,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$585,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$790,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,050,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$25,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$130,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$290,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is raising {{fundingAsk}} to purchase brewing equipment, build the taproom, and fund licensing and launch inventory. Funds are allocated 55% to brewhouse equipment, 30% to buildout, and 15% to licensing and working capital." }] }
        ]
      }
    }
  },
  {
    id: "dropshipping-business-plan",
    slug: "dropshipping-business-plan",
    title: "Dropshipping Business Plan Template",
    description: "Free dropshipping business plan template covering niche selection, market analysis, supplier strategy, marketing funnel, and 3-year financial projections for online store owners.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Dropshipping Business Plan Template",
      fields: ["businessName", "founderName", "date", "productNiche", "salesPlatform", "fundingAsk"],
      layout: { header: "DROPSHIPPING BUSINESS PLAN", footer: "Confidential — prepared for partners and investors." },
      styles: { primaryColor: "#4f46e5", secondaryColor: "#818cf8" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a dropshipping store in the {{productNiche}} niche selling on {{salesPlatform}} with no inventory held in-house. We are seeking {{fundingAsk}} to fund advertising, brand building, and a fast path to profitable, scalable order volume." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} sources products from vetted suppliers who ship directly to customers. Our differentiator is a strong brand, curated catalog, and reliable fulfillment partners that keep delivery times and refund rates low." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Global e-commerce exceeds $6T annually, and dropshipping lets founders test products with minimal upfront capital. Buyers in the {{productNiche}} niche respond well to social-first discovery, creating room for a branded store with sharp positioning." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Impulse shoppers discovering products via social feeds" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Value-driven buyers in the {{productNiche}} niche" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Repeat customers responsive to email and retargeting" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Curated {{productNiche}} catalog with tested winning products" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Branded packaging and fast supplier fulfillment" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bundles, upsells, and post-purchase offers to raise order value" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We drive traffic with short-form video ads, influencer seeding, and paid social, then convert with a high-performing landing page. Email and SMS flows recover carts and generate repeat orders that improve overall margins." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$240,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,450,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$214,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$585,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,205,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$26,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$95,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$245,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to fund advertising, store development, and product testing. Funds are allocated 65% to paid marketing, 20% to branding and site, and 15% to working capital." }] }
        ]
      }
    }
  },
  {
    id: "car-rental-business-plan",
    slug: "car-rental-business-plan",
    title: "Car Rental Business Plan Template",
    description: "Free car rental business plan template with executive summary, market analysis, fleet strategy, marketing, and 3-year financial projections for vehicle rental startups.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Car Rental Business Plan Template",
      fields: ["businessName", "founderName", "date", "location", "fleetSize", "fundingAsk"],
      layout: { header: "CAR RENTAL BUSINESS PLAN", footer: "Confidential — prepared for lenders and investors." },
      styles: { primaryColor: "#1d4ed8", secondaryColor: "#60a5fa" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a car rental company in {{location}} launching with a fleet of {{fleetSize}} vehicles. We are seeking {{fundingAsk}} to acquire the fleet, build our booking platform, and serve travelers and locals with flexible, affordable rentals." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} offers online booking, contactless pickup, and well-maintained vehicles across economy to premium classes. Our differentiator is transparent pricing, fast turnaround, and responsive local customer service." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The global car rental market exceeds $100B annually, powered by travel recovery and the shift toward access over ownership. Travelers and residents in {{location}} want convenient, digital-first rentals without the friction of legacy incumbents." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Leisure and business travelers arriving in {{location}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Locals needing temporary or replacement vehicles" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rideshare drivers and small businesses needing fleet access" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Daily, weekly, and monthly rentals across vehicle classes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Airport and hotel delivery with contactless pickup" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Insurance add-ons, GPS, and child seat extras" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We capture demand through search ads, travel aggregator listings, and hotel partnerships, backed by strong reviews. A loyalty program and corporate accounts drive repeat bookings and higher fleet utilization year-round." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$358,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$520,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$690,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$62,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$160,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$270,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to acquire the initial fleet, build the booking platform, and cover insurance and working capital. Funds are allocated 70% to vehicles, 15% to technology, and 15% to insurance and reserves." }] }
        ]
      }
    }
  },
  {
    id: "tutoring-center-business-plan",
    slug: "tutoring-center-business-plan",
    title: "Tutoring Center Business Plan Template",
    description: "Free tutoring center business plan template covering programs, market analysis, staffing, marketing strategy, and 3-year financial projections for education entrepreneurs.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Tutoring Center Business Plan Template",
      fields: ["businessName", "founderName", "date", "location", "subjectFocus", "fundingAsk"],
      layout: { header: "TUTORING CENTER BUSINESS PLAN", footer: "Confidential — prepared for investors and partners." },
      styles: { primaryColor: "#16a34a", secondaryColor: "#4ade80" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a tutoring center in {{location}} specializing in {{subjectFocus}} for K-12 and test-prep students. We are seeking {{fundingAsk}} to open the center, hire qualified tutors, and build a trusted brand that improves student outcomes." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} delivers small-group and one-on-one instruction with progress tracking parents can see. Our differentiator is a proven curriculum, vetted tutors, and measurable results that build referrals and retention." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The U.S. private tutoring market exceeds $12B annually and grows as families invest in academic advantage and test scores. Demand for {{subjectFocus}} support and competitive college admissions makes {{location}} an attractive market for a results-driven center." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "K-12 students needing subject reinforcement in {{subjectFocus}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "High schoolers preparing for SAT, ACT, and AP exams" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Parents seeking structured, measurable academic support" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "One-on-one and small-group tutoring in {{subjectFocus}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Standardized test prep and study-skills workshops" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly membership plans and online tutoring options" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We grow enrollment through school partnerships, local SEO, and free diagnostic assessments that convert to paid plans. Parent referrals, strong reviews, and visible score improvements sustain word-of-mouth growth." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$215,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$345,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$480,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$178,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$262,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$338,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$37,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$83,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$142,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to lease and outfit the center, hire tutors, and fund launch marketing. Funds are allocated 40% to buildout, 35% to staffing, and 25% to marketing and working capital." }] }
        ]
      }
    }
  },
  {
    id: "medical-practice-business-plan",
    slug: "medical-practice-business-plan",
    title: "Medical Practice Business Plan Template",
    description: "Free medical practice business plan template with executive summary, market analysis, services, staffing, and 3-year financial projections for physicians and clinic owners.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Medical Practice Business Plan Template",
      fields: ["businessName", "founderName", "date", "location", "specialty", "fundingAsk"],
      layout: { header: "MEDICAL PRACTICE BUSINESS PLAN", footer: "Confidential — prepared for lenders and partners." },
      styles: { primaryColor: "#0d9488", secondaryColor: "#2dd4bf" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a {{specialty}} medical practice in {{location}} providing patient-centered care. We are seeking {{fundingAsk}} to open the practice, equip exam rooms, and build a sustainable panel of insured and self-pay patients." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} combines evidence-based {{specialty}} care with modern scheduling, telehealth, and a strong patient experience. Our differentiator is short wait times, coordinated care, and a reputation for trusted outcomes." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "U.S. healthcare spending exceeds $4.5T annually, and demand for accessible {{specialty}} care continues to rise with an aging population. Patients in {{location}} face long waits at existing providers, creating an opening for a responsive, well-run practice." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Insured patients seeking {{specialty}} care in {{location}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Referrals from primary care and partner providers" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Self-pay and telehealth patients valuing convenience" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Office visits, consultations, and preventive {{specialty}} care" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "In-office procedures and diagnostic services" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Telehealth visits and coordinated follow-up care" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We build the patient panel through insurance network participation, referral relationships, local SEO, and a professional online presence. Patient reviews, easy online booking, and community outreach sustain steady new-patient growth." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$820,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,120,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$472,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$648,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$820,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$68,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$172,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$300,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to fund buildout, medical equipment, and initial operating costs before insurance reimbursements normalize. Funds are allocated 40% to equipment, 35% to buildout, and 25% to working capital." }] }
        ]
      }
    }
  },
  {
    id: "yoga-studio-business-plan",
    slug: "yoga-studio-business-plan",
    title: "Yoga Studio Business Plan Template",
    description: "Free yoga studio business plan template covering class offerings, market analysis, membership model, marketing, and 3-year financial projections for wellness entrepreneurs.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Yoga Studio Business Plan Template",
      fields: ["businessName", "founderName", "date", "location", "studioStyle", "fundingAsk"],
      layout: { header: "YOGA STUDIO BUSINESS PLAN", footer: "Confidential — prepared for investors and partners." },
      styles: { primaryColor: "#9333ea", secondaryColor: "#c084fc" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a {{studioStyle}} yoga studio in {{location}} offering classes, workshops, and memberships. We are seeking {{fundingAsk}} to open the studio, hire certified instructors, and build a loyal community of practicing members." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} provides a welcoming, all-levels space with a full class schedule and easy online booking. Our differentiator is expert instruction, a strong community feel, and a recurring membership model that stabilizes revenue." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The U.S. yoga and wellness market exceeds $16B annually as consumers invest in physical and mental health. Interest in {{studioStyle}} practice and boutique fitness continues to grow, and {{location}} has strong demand for a dedicated, community-focused studio." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wellness-focused adults seeking regular {{studioStyle}} classes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Beginners looking for an approachable, all-levels studio" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Professionals wanting stress relief and flexible scheduling" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Daily {{studioStyle}} classes for all experience levels" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Unlimited memberships, class packs, and drop-in passes" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Workshops, teacher training, and retail apparel and mats" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We attract new students with intro offers, social media, and local wellness partnerships, then convert them to memberships. Community events, referral rewards, and a strong instructor brand keep retention high and word-of-mouth active." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$168,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$262,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$355,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$142,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$198,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$250,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$26,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$64,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$105,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to lease and outfit the studio, fund launch marketing, and cover early operating costs. Funds are allocated 45% to buildout, 30% to equipment and reserves, and 25% to marketing." }] }
        ]
      }
    }
  },
  {
    id: "cloud-kitchen-business-plan",
    slug: "cloud-kitchen-business-plan",
    title: "Cloud Kitchen Business Plan Template",
    description: "Free cloud kitchen business plan template with executive summary, market analysis, delivery brands, marketing, and 3-year financial projections for ghost kitchen founders.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Cloud Kitchen Business Plan Template",
      fields: ["businessName", "founderName", "date", "location", "cuisineType", "fundingAsk"],
      layout: { header: "CLOUD KITCHEN BUSINESS PLAN", footer: "Confidential — prepared for investors and partners." },
      styles: { primaryColor: "#ea580c", secondaryColor: "#fb923c" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a delivery-only cloud kitchen in {{location}} serving {{cuisineType}} through major delivery apps and direct ordering. We are seeking {{fundingAsk}} to equip the kitchen, launch multiple virtual brands, and scale profitable delivery volume." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} operates a low-overhead kitchen with no dine-in space, running several delivery-optimized menus from one location. Our differentiator is tight operations, data-driven menu design, and fast, consistent fulfillment." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "Online food delivery exceeds $150B globally and keeps growing as consumers prioritize convenience. Cloud kitchens cut rent and labor versus traditional restaurants, letting {{businessName}} serve {{cuisineType}} demand in {{location}} at superior margins." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivery-first customers ordering {{cuisineType}} at home or work" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Busy professionals and families valuing convenience" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Late-night and lunch-rush demand across delivery apps" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Multiple virtual brands run from one {{cuisineType}} kitchen" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivery-optimized menus and family meal bundles" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Direct online ordering with lower commissions and loyalty perks" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We rank on delivery apps through optimized listings, photos, and reviews, then shift repeat orders to our direct channel via promotions. Social ads and menu experimentation identify best-sellers that lift average order value." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$385,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$640,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$910,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$338,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$520,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$700,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$47,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$120,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$210,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to equip the kitchen, fund initial inventory, and launch marketing across delivery platforms. Funds are allocated 50% to equipment and buildout, 30% to marketing and onboarding, and 20% to working capital." }] }
        ]
      }
    }
  },
  {
    id: "subscription-box-business-plan",
    slug: "subscription-box-business-plan",
    title: "Subscription Box Business Plan Template",
    description: "Free subscription box business plan template covering box concept, market analysis, fulfillment, retention marketing, and 3-year financial projections for recurring-revenue founders.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Subscription Box Business Plan Template",
      fields: ["businessName", "founderName", "date", "boxTheme", "targetCustomer", "fundingAsk"],
      layout: { header: "SUBSCRIPTION BOX BUSINESS PLAN", footer: "Confidential — prepared for investors and partners." },
      styles: { primaryColor: "#db2777", secondaryColor: "#f472b6" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{businessName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{founderName}} — {{date}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is a {{boxTheme}} subscription box delivering curated products to {{targetCustomer}} every month. We are seeking {{fundingAsk}} to fund inventory, fulfillment, and customer acquisition for a high-retention, recurring-revenue brand." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Company Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founded by {{founderName}}, {{businessName}} curates themed boxes with a memorable unboxing experience and predictable monthly billing. Our differentiator is tight supplier relationships, strong branding, and retention-focused curation that lowers churn." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Analysis" }] },
          { type: "paragraph", content: [{ type: "text", text: "The global subscription box market exceeds $30B and grows as consumers embrace curated, recurring purchases. Demand among {{targetCustomer}} for {{boxTheme}} products supports a differentiated brand with strong lifetime value per subscriber." }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "{{targetCustomer}} seeking curated {{boxTheme}} products" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Gift buyers purchasing prepaid multi-month subscriptions" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Enthusiasts who value discovery and the unboxing experience" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Products & Services" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly {{boxTheme}} boxes with curated, themed items" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly, quarterly, and prepaid annual subscription tiers" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "One-off gift boxes and a members-only add-on shop" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "We acquire subscribers through influencer unboxings, paid social, and referral incentives, then retain them with consistent value and surprise items. Email and SMS win-back flows and annual prepay offers reduce churn and boost lifetime value." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$310,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,280,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$278,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$610,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,040,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$32,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$110,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "$240,000" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Funding Request" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{businessName}} is requesting {{fundingAsk}} to fund inventory, packaging, fulfillment, and subscriber acquisition. Funds are allocated 45% to inventory and packaging, 40% to marketing, and 15% to fulfillment and working capital." }] }
        ]
      }
    }
  }
];
