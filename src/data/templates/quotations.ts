// Enriched, per-template document content for the "quotations" category.
// Every quotation is table-centric with a detailed, industry-specific line-item
// table, terms & conditions, and a validity / next-steps section so no two render alike.
export const quotationsTemplates = [
  {
    id: "price-quotation",
    slug: "price-quotation",
    title: "Price Quotation Template",
    description: "Clean general price quotation for suppliers to quote products, quantities, and totals to business clients fast.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Price Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "clientCompany", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "PRICE QUOTATION",
        footer: "This quotation is valid for 30 days from the issue date."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a", layoutVariant: 0, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PRICE QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for " }, { type: "text", marks: [{ type: "bold" }], text: "{{clientName}}" }, { type: "text", text: " of {{clientCompany}}. This price quotation ({{quoteNumber}}) is issued {{quoteDate}} and remains valid through {{validUntil}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Copy Paper A4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "80gsm, 500-sheet reams" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5.50" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$220.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Toner Cartridges" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Black, high-yield OEM" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$89.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$534.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ergonomic Chairs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mesh back, adjustable arms" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$149.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,192.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Whiteboard Set" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "48\" magnetic + markers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$78.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$234.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Grand Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prices are quoted in USD and exclude any applicable freight surcharges." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms are Net 30 from the date of invoice." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bulk pricing above assumes a single consolidated delivery." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Stock availability is confirmed at time of purchase order." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}} To proceed, reply to {{email}} or call {{phone}} to convert this quote into a purchase order before {{validUntil}}." }] }
        ]
      }
    }
  },
  {
    id: "construction-quotation",
    slug: "construction-quotation",
    title: "Construction Quotation Template",
    description: "Detailed construction quotation for builders to price labor, materials, and equipment across a project scope.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Construction Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "projectAddress", "projectScope", "estimatedDuration", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: {
        header: "CONSTRUCTION QUOTATION",
        footer: "This quotation is valid for 30 days and subject to a site survey."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#7c2d12", layoutVariant: 1, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSTRUCTION QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}}, {{address}} — {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " prepared for {{clientName}} on {{quoteDate}} for work at {{projectAddress}}. Scope: {{projectScope}}. Estimated duration: {{estimatedDuration}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Work Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Site Preparation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Excavation & grading" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Foundation & Concrete" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Rebar, formwork, 30 cu yd pour" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30 cu yd" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,600" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Framing & Structure" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lumber, trusses, labor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$21,750" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$21,750" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Equipment Rental" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Excavator & crane, 14 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "14 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,100" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{grandTotal}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Grand Total: {{grandTotal}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "A 30% mobilization deposit is required before work commences." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Progress payments are billed at foundation, framing, and completion milestones." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Permits and inspection fees are billed at cost unless otherwise stated." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Changes to scope require a signed change order and may affect pricing." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Sign and return this quotation by {{validUntil}} to lock in current material pricing. Contact us at {{email}} to schedule your site survey." }] }
        ]
      }
    }
  },
  {
    id: "it-services-quotation",
    slug: "it-services-quotation",
    title: "IT Services Quotation Template",
    description: "Managed IT services quotation covering support tiers, SLAs, and recurring monthly costs for business clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "IT Services Quotation",
      fields: ["companyName", "email", "phone", "clientName", "clientCompany", "contractTerm", "slaLevel", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "monthlyTotal", "notes"],
      layout: {
        header: "IT SERVICES QUOTATION",
        footer: "Quotation valid for 30 days. Recurring fees billed monthly in advance."
      },
      styles: {
        primaryColor: "#0ea5e9",
        secondaryColor: "#075985", layoutVariant: 2, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "IT SERVICES QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}} at {{clientCompany}}, issued {{quoteDate}}. Contract term: {{contractTerm}} at {{slaLevel}} service level." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Seats" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit/mo" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed Helpdesk" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8x5 support, 4hr SLA" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "45" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$35" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,575" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Endpoint Security" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "EDR, patching, monitoring" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "45" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud Backup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2TB, daily offsite" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$320" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$320" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Network Management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Firewall, switches, Wi-Fi" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$465" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$465" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{monthlyTotal}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Recurring Subtotal: " }, { type: "text", text: "{{subtotal}}/mo    Tax ({{taxRate}}): {{tax}}    Total per month: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "One-time onboarding of $1,500 is waived on a 12-month agreement." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "SLA response targets are defined in the {{slaLevel}} service schedule." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "After-hours emergency support is billed at $145/hour." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Either party may cancel with 30 days written notice after the initial term." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation before {{validUntil}} to begin onboarding within five business days." }] }
        ]
      }
    }
  },
  {
    id: "catering-quotation",
    slug: "catering-quotation",
    title: "Catering Quotation Template",
    description: "Event catering quotation with per-guest menu pricing, service staff, and rentals for weddings and functions.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Catering Quotation",
      fields: ["companyName", "email", "phone", "clientName", "eventDate", "guestCount", "menuStyle", "perPersonRate", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "CATERING QUOTATION",
        footer: "Quotation valid for 21 days. Final headcount due 7 days prior to event."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#831843", layoutVariant: 3, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CATERING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Caterer: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, covering a {{menuStyle}} service for {{guestCount}} guests on {{eventDate}} at {{perPersonRate}} per person." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Plated Dinner" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3-course, choice of entree" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "120" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$58" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,960" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Passed Appetizers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6 varieties, cocktail hour" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "120" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$14" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,680" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Service Staff" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Servers & bartenders, 6 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$210" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,100" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Rentals" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Linens, china, glassware" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,240" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,240" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Service Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "A 50% non-refundable deposit reserves your event date." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Final guaranteed headcount is due seven days before the event." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Dietary accommodations are available; please advise at booking." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "A 20% gratuity is included in the service staff line above." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Confirm your tasting and secure the date by {{validUntil}}. We look forward to serving your celebration." }] }
        ]
      }
    }
  },
  {
    id: "printing-quotation",
    slug: "printing-quotation",
    title: "Printing Quotation Template",
    description: "Commercial printing quotation for brochures, banners, and packaging with paper stock, finishing, and turnaround.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Printing Quotation",
      fields: ["companyName", "email", "phone", "clientName", "clientCompany", "paperStock", "turnaround", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "PRINTING QUOTATION",
        footer: "Quotation valid for 14 days. Prices assume print-ready artwork."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#4c1d95", layoutVariant: 4, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PRINTING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Printer: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}} at {{clientCompany}}, issued {{quoteDate}}. Stock: {{paperStock}}. Standard turnaround: {{turnaround}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Product" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Specification" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Tri-fold Brochures" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "A4, 4/4 color, gloss 170gsm" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$0.42" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$840.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Business Cards" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "350gsm matte, spot UV" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$0.16" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$160.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Roll-up Banner" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "850x2000mm + stand" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$68.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$272.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Setup & Proofing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Prepress + digital proof" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Artwork must be supplied as press-ready PDF with 3mm bleed." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "A signed proof is required before the job goes to press." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Color may vary up to 5% from on-screen previews." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rush turnaround is available at a 25% surcharge." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} and send print-ready files to {{email}} to begin production." }] }
        ]
      }
    }
  },
  {
    id: "transport-quotation",
    slug: "transport-quotation",
    title: "Transport Quotation Template",
    description: "Freight and logistics transport quotation detailing routes, cargo, distance, and fuel surcharges for shippers.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Transport Quotation",
      fields: ["companyName", "email", "phone", "clientName", "clientCompany", "originCity", "destinationCity", "cargoWeight", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "TRANSPORT QUOTATION",
        footer: "Quotation valid for 15 days and subject to fuel index adjustment."
      },
      styles: {
        primaryColor: "#16a34a",
        secondaryColor: "#14532d", layoutVariant: 5, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TRANSPORT QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Carrier: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}} at {{clientCompany}}, issued {{quoteDate}}. Route: {{originCity}} to {{destinationCity}}, cargo weight {{cargoWeight}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Units" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Line Haul" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "FTL 53ft dry van, 620 mi" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "620 mi" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2.85" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,767.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fuel Surcharge" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Indexed at 18% of line haul" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$318.06" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$318.06" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Loading & Handling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dock-to-dock, 4 pallets/hr" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$130.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cargo Insurance" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Declared value coverage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rates assume standard dock hours; detention is billed at $75/hour." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fuel surcharge floats with the weekly national diesel index." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Transit time is estimated at 1-2 business days, not guaranteed." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Liability is limited to declared value; excess coverage available." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Book this lane by {{validUntil}} to secure the quoted rate. Reply to {{email}} with your pickup window." }] }
        ]
      }
    }
  },
  {
    id: "event-quotation",
    slug: "event-quotation",
    title: "Event Quotation Template",
    description: "Full-service event quotation covering venue, staging, AV, and coordination for corporate and private functions.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Event Quotation",
      fields: ["companyName", "email", "phone", "clientName", "eventName", "eventDate", "venue", "guestCount", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "EVENT QUOTATION",
        footer: "Quotation valid for 20 days. Dates held only on receipt of deposit."
      },
      styles: {
        primaryColor: "#9333ea",
        secondaryColor: "#581c87", layoutVariant: 0, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EVENT QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Organizer: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, for {{eventName}} on {{eventDate}} at {{venue}} for {{guestCount}} attendees." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Venue & Setup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hall hire, staging, seating" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "AV & Lighting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "PA, LED wall, stage wash" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Decor & Florals" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Centerpieces, backdrop, signage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,750" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,750" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Coordination" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Planner + 4 on-site crew" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,100" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,100" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "A 40% deposit confirms the booking; balance due 5 days before the event." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cancellations within 14 days forfeit the deposit." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Overtime beyond the contracted hours is billed at $350/hour." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Third-party vendor changes may adjust the final quotation." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve and pay the deposit by {{validUntil}} to lock in {{eventDate}}. Contact {{email}} to begin planning." }] }
        ]
      }
    }
  },
  {
    id: "software-development-quotation",
    slug: "software-development-quotation",
    title: "Software Development Quotation Template",
    description: "Software project quotation breaking down discovery, build, and QA phases with timeline and tech stack.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Software Development Quotation",
      fields: ["companyName", "email", "phone", "clientName", "clientCompany", "projectName", "techStack", "timeline", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "SOFTWARE DEVELOPMENT QUOTATION",
        footer: "Quotation valid for 30 days. Fixed-price scope per statement of work."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#312e81", layoutVariant: 1, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOFTWARE DEVELOPMENT QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Studio: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}} at {{clientCompany}}, issued {{quoteDate}}, to build {{projectName}} on {{techStack}} over {{timeline}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery & UX" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Specs, wireframes, prototype" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "80" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$110" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Backend & API" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Services, DB, integrations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "220" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$26,400" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Frontend Build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Responsive web app UI" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "180" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$115" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$20,700" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "QA & Deployment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Testing, CI/CD, launch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "90" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$100" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Billing is milestone-based: 30% kickoff, 40% mid-build, 30% on launch." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scope is fixed per the statement of work; change requests are quoted separately." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Includes 30 days of post-launch bug fixes at no charge." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Source code and IP transfer on final payment." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Countersign this quotation by {{validUntil}} to reserve engineering capacity. Reach us at {{email}} to kick off discovery." }] }
        ]
      }
    }
  },
  {
    id: "cleaning-services-quotation",
    slug: "cleaning-services-quotation",
    title: "Cleaning Services Quotation Template",
    description: "Recurring commercial cleaning quotation with area breakdown, frequency, and supplies for offices and facilities.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Cleaning Services Quotation",
      fields: ["companyName", "email", "phone", "clientName", "propertyType", "squareFootage", "frequency", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "CLEANING SERVICES QUOTATION",
        footer: "Quotation valid for 30 days. Pricing based on stated square footage."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#134e4a", layoutVariant: 2, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CLEANING SERVICES QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, covering a {{propertyType}} of {{squareFootage}} serviced {{frequency}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Area" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Scope" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Visits/mo" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Offices & Floors" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Vacuum, mop, dust, trash" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,900" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Restrooms" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sanitize & restock, 6 units" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$48" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Kitchen / Break" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Counters, sinks, appliances" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$32" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$640" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Supplies & Consumables" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Eco products, liners, paper" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}/mo    Tax ({{taxRate}}): {{tax}}    Total per month: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Service is performed after hours unless otherwise arranged." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All staff are insured, bonded, and background-checked." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly deep cleans and window washing are quoted separately." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Month-to-month agreement with 30 days notice to cancel." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to schedule a walkthrough and start date. Email {{email}} to confirm." }] }
        ]
      }
    }
  },
  {
    id: "interior-design-quotation",
    slug: "interior-design-quotation",
    title: "Interior Design Quotation Template",
    description: "Interior design quotation itemizing concept, furnishings, and installation for residential and commercial spaces.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Interior Design Quotation",
      fields: ["companyName", "email", "phone", "clientName", "roomType", "designStyle", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "INTERIOR DESIGN QUOTATION",
        footer: "Quotation valid for 30 days. Furnishings priced at time of order."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#78350f", layoutVariant: 3, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "INTERIOR DESIGN QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Studio: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, for a {{designStyle}} redesign of the {{roomType}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design Concept" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mood board, 3D renders, plan" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Furnishings" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sofa, tables, lighting, rug" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 set" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,850" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9,850" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Window & Wall" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Drapery, paint, wallcovering" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,300" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,300" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation & Styling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivery, assembly, final styling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,650" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,650" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Design fee is due upfront; furnishings require a 60% order deposit." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Lead times for custom pieces range from 8 to 12 weeks." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Furnishing prices are confirmed at the time each order is placed." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two revision rounds of the concept are included." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to begin sourcing. Reach out to {{email}} to schedule your concept presentation." }] }
        ]
      }
    }
  },
  {
    id: "plumbing-quotation",
    slug: "plumbing-quotation",
    title: "Plumbing Quotation Template",
    description: "Plumbing quotation itemizing pipework, fixtures, and labor for repairs, re-piping, and bathroom installations.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Plumbing Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "propertyAddress", "jobScope", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "PLUMBING QUOTATION",
        footer: "This quotation is valid for 30 days from the issue date."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0c4a6e", layoutVariant: 4, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PLUMBING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " prepared for {{clientName}} on {{quoteDate}} for work at {{propertyAddress}}. Scope: {{jobScope}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Copper Re-pipe" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Type L copper, 3/4in supply lines" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "60 ft" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,080" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fixture Install" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Toilet, vanity faucet, shower valve" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$240" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Water Heater" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "50-gal supply & swap-out" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,350" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,350" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Labor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Licensed plumber, 2 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "16 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,520" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All work is performed to local plumbing code and permit requirements." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Parts and workmanship are warrantied for 12 months." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Concealed leaks or damage found during work are quoted separately." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Emergency after-hours call-outs are billed at $140/hour." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to schedule your service window. Call {{phone}} or email {{email}} to book." }] }
        ]
      }
    }
  },
  {
    id: "electrical-quotation",
    slug: "electrical-quotation",
    title: "Electrical Quotation Template",
    description: "Electrical quotation covering panel upgrades, wiring, and fixtures with certified labor for homes and businesses.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Electrical Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "siteAddress", "panelRating", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "ELECTRICAL QUOTATION",
        footer: "Quotation valid for 30 days and subject to on-site inspection."
      },
      styles: {
        primaryColor: "#eab308",
        secondaryColor: "#854d0e", layoutVariant: 5, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "ELECTRICAL QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, for work at {{siteAddress}} with a {{panelRating}} service panel." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Panel Upgrade" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "200A main panel & breakers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,150" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,150" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Circuit Wiring" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12-gauge Romex, new dedicated runs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,480" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fixtures & Devices" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Recessed LEDs, outlets, GFCIs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,080" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Inspection & Permit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Permit filing & final sign-off" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$390" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$390" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All work complies with the current National Electrical Code." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Power interruptions are scheduled in advance with the client." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Concealed knob-and-tube or aluminum wiring is quoted separately." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Workmanship is warrantied for 24 months from completion." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to book a certified electrician. Contact {{email}} to arrange the inspection." }] }
        ]
      }
    }
  },
  {
    id: "landscaping-quotation",
    slug: "landscaping-quotation",
    title: "Landscaping Quotation Template",
    description: "Landscaping quotation detailing softscape, hardscape, and irrigation for garden design and yard transformations.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Landscaping Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "propertySize", "projectType", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "LANDSCAPING QUOTATION",
        footer: "Quotation valid for 30 days. Plant availability confirmed at order."
      },
      styles: {
        primaryColor: "#65a30d",
        secondaryColor: "#365314", layoutVariant: 0, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "LANDSCAPING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, for a {{projectType}} across a {{propertySize}} property." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sod & Turf" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Grade, lay, and roll fescue sod" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2,500 sq ft" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1.20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paver Patio" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Base prep & interlocking pavers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "320 sq ft" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$16" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,120" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Planting Beds" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Shrubs, perennials, mulch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,850" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,850" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Irrigation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6-zone drip & sprinkler system" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,430" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,430" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "A 40% deposit is required to schedule materials and crews." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Plants carry a 90-day establishment warranty with proper watering." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Weather delays may shift the schedule without penalty." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Underground utility locates are arranged before any digging." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to reserve your install window. Email {{email}} to confirm the start date." }] }
        ]
      }
    }
  },
  {
    id: "painting-quotation",
    slug: "painting-quotation",
    title: "Painting Quotation Template",
    description: "Painting quotation covering prep, interior and exterior coats, and trim work with premium finishes for any property.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Painting Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "surfaceArea", "paintFinish", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "PAINTING QUOTATION",
        footer: "Quotation valid for 21 days. Priced on the stated surface area."
      },
      styles: {
        primaryColor: "#e11d48",
        secondaryColor: "#881337", layoutVariant: 1, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PAINTING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, covering {{surfaceArea}} in a {{paintFinish}} finish." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Surface Prep" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sand, patch, caulk, prime" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,800 sq ft" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$0.85" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,530" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wall Coats" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Two coats premium latex" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,800 sq ft" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1.40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,520" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Trim & Doors" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Enamel on baseboards, casings, doors" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$780" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paint, primer, sundries" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$640" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$640" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Furniture is moved to the room center and covered; heavy items stay in place." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Color selections are confirmed in writing before work begins." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Extensive wood rot or drywall repair is quoted as an add-on." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Workmanship is guaranteed against peeling for two years." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to lock your dates. Reply to {{email}} to finalize colors." }] }
        ]
      }
    }
  },
  {
    id: "hvac-quotation",
    slug: "hvac-quotation",
    title: "HVAC Quotation Template",
    description: "HVAC quotation for system supply, installation, and ductwork with efficiency ratings for heating and cooling upgrades.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "HVAC Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "systemType", "tonnage", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "HVAC QUOTATION",
        footer: "Quotation valid for 30 days and subject to a load calculation."
      },
      styles: {
        primaryColor: "#0891b2",
        secondaryColor: "#164e63", layoutVariant: 2, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "HVAC QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, for a {{tonnage}} {{systemType}} installation." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Condenser & Coil" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "16 SEER unit & evaporator coil" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,300" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,300" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Air Handler & Furnace" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "96% AFUE gas furnace" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,650" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,650" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ductwork & Vents" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Modify plenum, seal, 6 registers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,480" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,480" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Install Labor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Removal, install, startup, 2 techs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$105" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,100" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Final equipment sizing follows a Manual J load calculation." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The system carries a 10-year parts and 2-year labor warranty." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Manufacturer rebates, where available, are passed to the client." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Permit and inspection fees are included in the quoted price." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to schedule installation. Contact {{email}} to book your load assessment." }] }
        ]
      }
    }
  },
  {
    id: "roofing-quotation",
    slug: "roofing-quotation",
    title: "Roofing Quotation Template",
    description: "Roofing quotation itemizing tear-off, underlayment, shingles, and flashing for re-roofs and storm repairs.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Roofing Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "roofType", "roofArea", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "ROOFING QUOTATION",
        footer: "Quotation valid for 30 days and subject to a roof inspection."
      },
      styles: {
        primaryColor: "#b91c1c",
        secondaryColor: "#7f1d1d", layoutVariant: 3, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "ROOFING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, for a {{roofType}} roof covering {{roofArea}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Tear-off & Disposal" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strip old layers, dumpster haul" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24 sq" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,280" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Underlayment & Deck" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ice-and-water shield, synthetic felt" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24 sq" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$55" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,320" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Architectural Shingles" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30-year laminated shingles" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24 sq" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$285" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,840" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Flashing & Vents" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Step flashing, ridge vent, boots" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rotted decking replacement is billed at $70 per sheet as needed." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Work carries a 10-year workmanship warranty plus the manufacturer warranty." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The site is protected with tarps and cleaned with magnetic nail sweep daily." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Insurance-claim documentation can be provided on request." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to reserve a crew before peak season. Email {{email}} to book your inspection." }] }
        ]
      }
    }
  },
  {
    id: "marketing-quotation",
    slug: "marketing-quotation",
    title: "Marketing Quotation Template",
    description: "Digital marketing quotation bundling strategy, paid media, SEO, and content for a monthly growth retainer.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Marketing Quotation",
      fields: ["companyName", "email", "phone", "clientName", "clientCompany", "campaignName", "channelFocus", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "MARKETING QUOTATION",
        footer: "Quotation valid for 30 days. Retainer billed monthly in advance."
      },
      styles: {
        primaryColor: "#c026d3",
        secondaryColor: "#701a75", layoutVariant: 4, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MARKETING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Agency: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}} at {{clientCompany}}, issued {{quoteDate}}, for the {{campaignName}} program focused on {{channelFocus}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate/mo" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy & Reporting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Roadmap, analytics, monthly review" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid Media Mgmt" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Google & Meta ads (ex. ad spend)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "SEO" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On-page, technical, link outreach" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,400" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,400" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Content" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4 blog posts + 12 social assets" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,100" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,100" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Retainer Subtotal: " }, { type: "text", text: "{{subtotal}}/mo    Tax ({{taxRate}}): {{tax}}    Total per month: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Advertising spend is billed separately at cost, direct to the platforms." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The retainer runs on a 3-month minimum, then month-to-month." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reporting dashboards are refreshed weekly with a monthly review call." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Either party may cancel with 30 days written notice." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to begin onboarding within one week. Reply to {{email}} to kick off." }] }
        ]
      }
    }
  },
  {
    id: "photography-quotation",
    slug: "photography-quotation",
    title: "Photography Quotation Template",
    description: "Photography quotation covering coverage hours, editing, prints, and albums for weddings, events, and brand shoots.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Photography Quotation",
      fields: ["companyName", "email", "phone", "clientName", "shootType", "shootDate", "deliverables", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "PHOTOGRAPHY QUOTATION",
        footer: "Quotation valid for 21 days. Date reserved on receipt of retainer."
      },
      styles: {
        primaryColor: "#6366f1",
        secondaryColor: "#3730a3", layoutVariant: 5, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PHOTOGRAPHY QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Studio: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}}, issued {{quoteDate}}, for a {{shootType}} on {{shootDate}} delivering {{deliverables}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Photographer Coverage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lead shooter, on location" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$225" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Second Shooter" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Assistant photographer" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Editing & Retouching" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cull, color grade, 400 finals" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Album & Prints" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30-page linen album + USB" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "A 30% non-refundable retainer reserves the shoot date." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Edited galleries are delivered within four weeks of the shoot." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The client receives a personal-use license; commercial use is quoted separately." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Overtime coverage is billed at $225 per hour." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} and pay the retainer to hold {{shootDate}}. Email {{email}} to confirm." }] }
        ]
      }
    }
  },
  {
    id: "web-design-quotation",
    slug: "web-design-quotation",
    title: "Web Design Quotation Template",
    description: "Web design quotation breaking down UX, design, build, and CMS setup for a responsive marketing website.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Web Design Quotation",
      fields: ["companyName", "email", "phone", "clientName", "clientCompany", "projectName", "pageCount", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "WEB DESIGN QUOTATION",
        footer: "Quotation valid for 30 days. Fixed scope per the project brief."
      },
      styles: {
        primaryColor: "#14b8a6",
        secondaryColor: "#115e59", layoutVariant: 0, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEB DESIGN QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Studio: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}} at {{clientCompany}}, issued {{quoteDate}}, to design {{projectName}} across {{pageCount}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "UX & Wireframes" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sitemap, wireframes, content plan" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,550" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Visual Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High-fidelity mockups, style guide" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "44" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,960" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Build & Responsive" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Front-end build, mobile-first" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "56" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,320" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CMS & Launch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CMS setup, SEO basics, go-live" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,160" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Billing is 50% on kickoff and 50% on launch approval." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two rounds of revisions are included per design phase." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Client supplies final copy and imagery unless separately quoted." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Includes 30 days of post-launch support; hosting billed separately." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to secure our next build slot. Reply to {{email}} to schedule kickoff." }] }
        ]
      }
    }
  },
  {
    id: "consulting-quotation",
    slug: "consulting-quotation",
    title: "Consulting Quotation Template",
    description: "Management consulting quotation outlining assessment, strategy, and implementation phases with senior advisory rates.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Consulting Quotation",
      fields: ["companyName", "email", "phone", "clientName", "clientCompany", "engagementName", "engagementTerm", "quoteNumber", "quoteDate", "validUntil", "subtotal", "taxRate", "tax", "total", "notes"],
      layout: {
        header: "CONSULTING QUOTATION",
        footer: "Quotation valid for 30 days. Scope per the engagement letter."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#1e293b", layoutVariant: 1, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSULTING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Firm: " }, { type: "text", text: "{{companyName}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quotation " }, { type: "text", marks: [{ type: "bold" }], text: "{{quoteNumber}}" }, { type: "text", text: " for {{clientName}} at {{clientCompany}}, issued {{quoteDate}}, for the {{engagementName}} engagement over {{engagementTerm}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Days" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Day Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery & Assessment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Interviews, data review, findings" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,600" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy & Roadmap" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Target operating model, roadmap" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,600" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$16,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Implementation Support" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "PMO, change enablement, KPIs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,450" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$17,400" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Executive Readout" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Board deck & final presentation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,600" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{total}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}    Tax ({{taxRate}}): {{tax}}    Total: {{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Terms & Conditions" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fees are invoiced monthly against days delivered." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reasonable travel and expenses are billed at cost with prior approval." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All deliverables and findings remain strictly confidential." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Either party may pause the engagement with two weeks written notice." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Next Steps: " }, { type: "text", text: "{{notes}} Approve this quotation by {{validUntil}} to schedule the kickoff workshop. Contact {{email}} to countersign the engagement letter." }] }
        ]
      }
    }
  },
  {
    id: "quotation-security-services",
    slug: "quotation-security-services",
    title: "Security Services Quotation Template",
    description: "Manpower security quotation priced by guards, shifts, and monthly rate — with supervisor, equipment, and PSARA licence details.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Security Services Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "clientCompany", "quoteNumber", "quoteDate", "validUntil", "siteType", "psaraLicenseNo", "notes"],
      layout: { header: "SECURITY SERVICES QUOTATION", footer: "Rates are per calendar month. Uniform, training and statutory compliance included." },
      styles: { primaryColor: "#1f2937", secondaryColor: "#111827", layoutVariant: 0, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SECURITY SERVICES QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for " }, { type: "text", marks: [{ type: "bold" }], text: "{{clientName}}" }, { type: "text", text: " of {{clientCompany}} for a {{siteType}}. Quotation {{quoteNumber}} issued {{quoteDate}}, valid until {{validUntil}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Manpower Deployment (Monthly)" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Role" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Guards" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Shift" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate / Guard" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Unarmed Guard" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 hr" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,200.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Shift Supervisor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 hr" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,300.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,300.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "$9,500.00    Tax (8%): $760.00" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Contract Value: " }, { type: "text", text: "$10,260.00" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "PSARA Licence: " }, { type: "text", text: "{{psaraLicenseNo}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "quotation-amc",
    slug: "quotation-amc",
    title: "AMC (Annual Maintenance Contract) Quotation Template",
    description: "Annual Maintenance Contract quotation for IT or HVAC equipment — visits per year, response SLA, parts coverage and annual value.",
    isPremium: true,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "AMC Quotation",
      fields: ["companyName", "address", "email", "phone", "clientName", "clientCompany", "quoteNumber", "quoteDate", "validUntil", "amcType", "visitsPerYear", "responseTimeSla", "contractStartDate", "contractEndDate", "notes"],
      layout: { header: "ANNUAL MAINTENANCE CONTRACT QUOTATION", footer: "Comprehensive AMC — labour and listed spares included. Consumables billed at actuals." },
      styles: { primaryColor: "#0e7490", secondaryColor: "#164e63", layoutVariant: 0, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "AMC QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{address}} — {{email}}, {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for " }, { type: "text", marks: [{ type: "bold" }], text: "{{clientName}}" }, { type: "text", text: " of {{clientCompany}}. Quotation {{quoteNumber}} issued {{quoteDate}}, valid until {{validUntil}}." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contract: " }, { type: "text", text: "{{amcType}}   |   {{visitsPerYear}}   |   Response SLA: {{responseTimeSla}}   |   Term: {{contractStartDate}} to {{contractEndDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Equipment Covered" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Equipment" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Desktop workstations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$60.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Network servers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,350.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Network printers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$125.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$750.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "$4,500.00    Tax (8%): $360.00" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Annual Contract Value: " }, { type: "text", text: "$4,860.00" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  }
];
