// Additional SEO-optimized, industry-specific quotation templates.
// Each quote is table-centric with realistic line items, totals, and terms.
export const quotationsExtraTemplates: any[] = [
  {
    id: "manufacturing-quotation",
    slug: "manufacturing-quotation",
    title: "Manufacturing Quotation Template",
    description: "Free manufacturing quotation template for factories to quote tooling, production runs, materials, and unit pricing to procurement clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Manufacturing Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "partNumber", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "MANUFACTURING QUOTATION", footer: "Quoted prices assume approved engineering drawings and confirmed volumes." },
      styles: { primaryColor: "#0f766e", secondaryColor: "#134e4a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MANUFACTURING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for production of part {{partNumber}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Injection Mold Tooling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Single-cavity hardened steel mold" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$14,500.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$14,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Raw Material (ABS)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Industrial-grade resin per kg" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,200 kg" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3.20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,840.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Production Run" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Molding cycle & labor per unit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$0.85" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Quality Inspection" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CMM dimensional QC & reporting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,150.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,150.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Packaging & Palletizing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cartons, shrink wrap, pallets" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days; tooling lead time is 6-8 weeks after PO." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 50% tooling deposit, balance Net 30 on shipment." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Parts warranted against manufacturing defects for 12 months." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "furniture-quotation",
    slug: "furniture-quotation",
    title: "Furniture Quotation Template",
    description: "Free furniture quotation template for makers and dealers to quote custom pieces, materials, finishes, and delivery to home or office clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Furniture Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "deliveryAddress", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "FURNITURE QUOTATION", footer: "Handcrafted to order — lead times confirmed at deposit." },
      styles: { primaryColor: "#92400e", secondaryColor: "#78350f" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FURNITURE QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Delivery to {{deliveryAddress}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Solid Oak Dining Table" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2.4m, matte oil finish" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,850.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,850.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Upholstered Chairs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Linen seat, oak legs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$240.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,440.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sideboard Cabinet" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3-door, soft-close hinges" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,120.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,120.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom Finish Upgrade" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stain match & lacquer seal" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$380.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$380.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "White-Glove Delivery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Assembly & placement in-home" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$260.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$260.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 21 days from the issue date." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 40% deposit to begin, balance due before delivery." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All handmade pieces carry a 5-year structural warranty." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "logistics-quotation",
    slug: "logistics-quotation",
    title: "Logistics Quotation Template",
    description: "Free logistics quotation template for freight and 3PL firms to quote warehousing, shipping lanes, and handling to supply-chain clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Logistics Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "originPort", "destinationPort", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "LOGISTICS QUOTATION", footer: "Rates subject to fuel and currency surcharges at booking." },
      styles: { primaryColor: "#1d4ed8", secondaryColor: "#1e3a8a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "LOGISTICS QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Lane: {{originPort}} to {{destinationPort}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ocean Freight (FCL)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40ft container, port-to-port" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,150.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,450.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Customs Clearance" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Documentation & brokerage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 shipment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$480.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$480.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Warehousing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Bonded storage per pallet/week" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "60" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Last-Mile Delivery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Regional truck distribution" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "15 stops" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,425.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cargo Insurance" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "All-risk coverage on value" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 policy" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$390.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$390.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rates valid for 14 days and subject to space availability." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: Net 15 from invoice; demurrage billed separately." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Liability limited per carrier terms unless insurance is purchased." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "signage-quotation",
    slug: "signage-quotation",
    title: "Signage Quotation Template",
    description: "Free signage quotation template for sign shops to quote design, fabrication, and installation of storefront and channel-letter signs.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Signage Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "installSite", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "SIGNAGE QUOTATION", footer: "Includes permits where noted; power supply by others." },
      styles: { primaryColor: "#be123c", secondaryColor: "#881337" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SIGNAGE QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Installation site: {{installSite}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design & Proofing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concept, mockups, revisions" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Channel Letters" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "LED-lit aluminum, 18in tall" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,220.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Backer Panel" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Painted ACM raceway mount" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Permit & Engineering" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "City sign permit filing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Bucket-truck mount & wiring" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days; production begins on approved proof." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 50% deposit, balance on installation completion." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "LED components warranted for 3 years; labor for 1 year." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "solar-installation-quotation",
    slug: "solar-installation-quotation",
    title: "Solar Installation Quotation Template",
    description: "Free solar installation quotation template for installers to quote panels, inverters, mounting, and labor for rooftop PV systems.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Solar Installation Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "systemSize", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "SOLAR INSTALLATION QUOTATION", footer: "Estimated output based on site survey and local irradiance data." },
      styles: { primaryColor: "#ca8a04", secondaryColor: "#854d0e" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOLAR INSTALLATION QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Proposed system size: {{systemSize}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Solar Panels" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "410W monocrystalline modules" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,440.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hybrid Inverter" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10kW string inverter" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,950.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,950.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mounting & Racking" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Rails, clamps, flashings" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 set" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,180.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,180.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Battery Storage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10kWh lithium battery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,600.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation & Wiring" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Labor, conduit, grid tie-in" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days, subject to final structural survey." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 30% deposit, 60% on install, 10% on commissioning." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Panels warranted 25 years; inverter and battery 10 years." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "pest-control-quotation",
    slug: "pest-control-quotation",
    title: "Pest Control Quotation Template",
    description: "Free pest control quotation template for exterminators to quote inspection, treatment, and recurring service plans to homes and businesses.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Pest Control Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "propertyAddress", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "PEST CONTROL QUOTATION", footer: "All treatments use EPA-registered, family-safe products." },
      styles: { primaryColor: "#15803d", secondaryColor: "#14532d" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PEST CONTROL QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Property: {{propertyAddress}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Inspection" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full property survey & report" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Termite Treatment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Liquid barrier application" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Rodent Control" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Bait stations & exclusion" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8 stations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$28.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$224.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "General Pest Spray" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Interior & perimeter barrier" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly Plan" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Follow-up visits per quarter" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$360.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days from the issue date." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: due on completion of each scheduled service." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Treatments guaranteed with free re-service if pests return." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "moving-services-quotation",
    slug: "moving-services-quotation",
    title: "Moving Services Quotation Template",
    description: "Free moving services quotation template for movers to quote packing, loading, transport, and storage for household and office relocations.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Moving Services Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "originAddress", "destinationAddress", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "MOVING SERVICES QUOTATION", footer: "Binding estimate based on declared inventory and access." },
      styles: { primaryColor: "#4338ca", secondaryColor: "#3730a3" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MOVING SERVICES QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. From {{originAddress}} to {{destinationAddress}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Packing Service" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-home wrap & boxing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$620.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$620.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Packing Materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Boxes, tape, bubble wrap" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 set" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Loading & Transport" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "26ft truck crew of 3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$140.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,120.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mileage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Long-distance transport rate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "180 mi" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2.10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$378.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Storage (30 days)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Climate-controlled unit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$210.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$210.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 14 days and reserves your requested date." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: deposit at booking, balance due on delivery." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Goods covered by standard valuation; full-value protection optional." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "tour-travel-quotation",
    slug: "tour-travel-quotation",
    title: "Tour & Travel Quotation Template",
    description: "Free tour and travel quotation template for agencies to quote packages, flights, hotels, and excursions to holiday and group clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Tour & Travel Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "destination", "travelDates", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "TOUR & TRAVEL QUOTATION", footer: "Prices per person; subject to airline and hotel availability." },
      styles: { primaryColor: "#0891b2", secondaryColor: "#155e75" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TOUR & TRAVEL QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Destination: {{destination}} on {{travelDates}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Return Airfare" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Economy, taxes included" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,440.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hotel (5 nights)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4-star, breakfast included" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$165.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$825.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Guided Excursions" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "City tour & day trips" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$110.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$330.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Airport Transfers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Private car both ways" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Travel Insurance" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medical & trip cover" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$38.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$76.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 7 days; fares confirmed only at ticketing." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: deposit to hold, balance due 30 days before travel." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cancellation charges apply per supplier policy." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "app-development-quotation",
    slug: "app-development-quotation",
    title: "App Development Quotation Template",
    description: "Free app development quotation template for studios to quote UX, iOS and Android builds, backend, and QA for mobile app projects.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "App Development Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "appName", "platforms", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "APP DEVELOPMENT QUOTATION", footer: "Estimate assumes agreed scope; change requests billed hourly." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#5b21b6" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "APP DEVELOPMENT QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Project: {{appName}} for {{platforms}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quotation Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery & UX" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wireframes & prototype" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "60" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$75.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "iOS Development" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Native Swift build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "160" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$13,600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Android Development" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Native Kotlin build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "160" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$13,600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Backend & API" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud API & database" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "90" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$80.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$7,200.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "QA & Launch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Testing & store submission" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "50" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$70.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,500.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days from the issue date." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: milestone-based, 30% upfront across phases." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Includes 60-day post-launch bug-fix warranty." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "video-production-quotation",
    slug: "video-production-quotation",
    title: "Video Production Quotation Template",
    description: "Free video production quotation template for studios to quote pre-production, filming, editing, and delivery for brand and promo videos.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Video Production Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "projectTitle", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "VIDEO PRODUCTION QUOTATION", footer: "Final deliverables licensed for use on approval of full payment." },
      styles: { primaryColor: "#db2777", secondaryColor: "#9d174d" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "VIDEO PRODUCTION QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Project: {{projectTitle}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pre-Production" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Script, storyboard, casting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,400.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,400.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Filming Day" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Crew, camera, lighting kit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,200.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,400.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Editing & Color" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Edit, grade, sound mix" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,850.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,850.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Motion Graphics" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Titles, lower-thirds, logo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivery & Cutdowns" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Master + social versions" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$160.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$640.00" }] }] }
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
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days from the issue date." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 50% to book the shoot, balance on final delivery." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two rounds of revisions included; extra rounds billed hourly." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  }
];
