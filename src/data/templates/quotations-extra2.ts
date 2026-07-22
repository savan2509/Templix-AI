// Additional SEO-optimized, industry-specific quotation templates (batch 2).
// Each quote is table-centric with realistic line items, totals, and terms.
export const quotationsExtra2Templates: any[] = [
  {
    id: "fencing-quotation",
    slug: "fencing-quotation",
    title: "Fencing Quotation Template",
    description: "Free fencing quotation template for contractors to quote fence panels, posts, gates, and installation labor per running metre to property owners.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Fencing Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "siteAddress", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "FENCING QUOTATION", footer: "Prices assume clear, level ground and confirmed boundary line." },
      styles: { primaryColor: "#4d7c0f", secondaryColor: "#365314" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FENCING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for the site at {{siteAddress}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Timber Fence Panels" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1.8m closeboard, treated" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "45 m" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$38.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,710.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concrete Posts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Slotted, set in postmix" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "23" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$22.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$506.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gravel Boards" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concrete base boards" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "23" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$14.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$322.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Double Access Gate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2.7m matching timber gate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation Labour" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dig, set, and fit per metre" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "45 m" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$810.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days; installation typically completed within 2-3 days." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 40% deposit on booking, balance due on completion." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Removal of existing fencing and spoil quoted separately if required." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Workmanship guaranteed for 12 months; materials per manufacturer warranty." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "flooring-quotation",
    slug: "flooring-quotation",
    title: "Flooring Quotation Template",
    description: "Free flooring quotation template for installers to quote laminate, vinyl, tile, underlay, and fitting per square metre to homeowners and offices.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Flooring Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "roomArea", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "FLOORING QUOTATION", footer: "Areas confirmed on site measure; wastage allowance included." },
      styles: { primaryColor: "#b45309", secondaryColor: "#7c2d12" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FLOORING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} covering an area of {{roomArea}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Luxury Vinyl Planks" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Waterproof click-lock LVT" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "62 m²" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$29.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,798.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Acoustic Underlay" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3mm foam with vapour barrier" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "62 m²" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4.50" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$279.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Floor Preparation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Self-levelling screed & prime" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "62 m²" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$496.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Scotia Beading" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Colour-matched edge trim" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "34 m" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3.20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$108.80" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fitting Labour" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Supply and install per m²" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "62 m²" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$744.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days from the date shown above." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Furniture removal and old floor lifting quoted separately if required." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 30% deposit on order, balance on completion." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation guaranteed for 24 months against fitting defects." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "medical-equipment-quotation",
    slug: "medical-equipment-quotation",
    title: "Medical Equipment Quotation Template",
    description: "Free medical equipment quotation template for suppliers to quote diagnostic devices, installation, warranty, and training to clinics and hospitals.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Medical Equipment Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "facilityName", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "MEDICAL EQUIPMENT QUOTATION", footer: "Prices include commissioning; regulatory compliance certificates provided." },
      styles: { primaryColor: "#0e7490", secondaryColor: "#155e75" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MEDICAL EQUIPMENT QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for {{facilityName}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ultrasound Scanner" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Color Doppler, 3 probes" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$32,000.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$32,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Patient Monitors" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Multi-parameter, 12-inch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,450.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$13,800.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation & Commissioning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On-site setup and calibration" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,200.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,200.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Staff Training" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Two-day clinical operator training" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Extended Warranty" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3-year parts and labour cover" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,100.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,100.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days; delivery 4-6 weeks from confirmed PO." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All devices supplied with CE/FDA documentation and compliance certificates." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 50% advance, balance Net 30 after commissioning sign-off." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Preventive maintenance visits scheduled twice yearly under warranty." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "website-maintenance-quotation",
    slug: "website-maintenance-quotation",
    title: "Website Maintenance Quotation Template",
    description: "Free website maintenance quotation template for agencies to quote monthly updates, backups, security, and support hours to business clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Website Maintenance Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "websiteUrl", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "WEBSITE MAINTENANCE QUOTATION", footer: "Monthly retainer billed in advance; support during business hours." },
      styles: { primaryColor: "#4338ca", secondaryColor: "#3730a3" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEBSITE MAINTENANCE QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for the website {{websiteUrl}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Core & Plugin Updates" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CMS, theme, plugin patching monthly" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 mo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,440.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Backups & Monitoring" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Daily offsite backup, uptime checks" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 mo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$60.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$720.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Security Hardening" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Malware scans, firewall, SSL" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 mo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$50.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Content Updates" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Included support hours per month" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$55.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,320.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Performance Report" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly speed & analytics summary" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 mo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$30.00" }] }] },
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days; annual plan billed monthly in advance." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Unused support hours do not roll over to the following month." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Major redesigns and new features quoted separately as projects." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Either party may cancel with 30 days written notice." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "ac-repair-quotation",
    slug: "ac-repair-quotation",
    title: "AC Repair Quotation Template",
    description: "Free AC repair quotation template for technicians to quote diagnosis, gas refill, parts, and servicing labor to homeowners and offices.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "AC Repair Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "unitModel", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "AC REPAIR QUOTATION", footer: "Diagnosis fee waived if repair is approved and completed." },
      styles: { primaryColor: "#0369a1", secondaryColor: "#075985" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "AC REPAIR QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for unit model {{unitModel}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Diagnostic Inspection" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fault finding and pressure test" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Refrigerant Refill" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "R-32 gas recharge per unit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Capacitor Replacement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dual-run compressor capacitor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Coil Cleaning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Chemical wash, indoor & outdoor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$80.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$80.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Service Labour" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Technician time on site" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$40.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$80.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 15 days; repairs scheduled within 48 hours of approval." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Diagnostic fee is waived when the recommended repair is approved." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Replacement parts carry a 6-month warranty; labour warranted 90 days." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment due on completion of work." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "car-rental-quotation",
    slug: "car-rental-quotation",
    title: "Car Rental Quotation Template",
    description: "Free car rental quotation template for agencies to quote daily hire, insurance, driver, and extras to corporate and tourist clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Car Rental Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "rentalPeriod", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "CAR RENTAL QUOTATION", footer: "Rates include standard mileage; fuel on a full-to-full basis." },
      styles: { primaryColor: "#b91c1c", secondaryColor: "#7f1d1d" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CAR RENTAL QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for the rental period {{rentalPeriod}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sedan Hire" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mid-size automatic, per day" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "7 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$55.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$385.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Collision Insurance" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CDW with reduced excess" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "7 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$14.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$98.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Chauffeur Service" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional driver, 8 hrs/day" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$60.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "GPS & Child Seat" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Navigation unit and booster seat" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "7 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$56.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Airport Delivery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pickup and return at terminal" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$35.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$35.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 14 days, subject to vehicle availability." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Driver must be 23+ with a valid licence held for over one year." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Refundable security deposit collected at pickup." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Excess mileage charged at $0.20 per km beyond the included allowance." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "advertising-quotation",
    slug: "advertising-quotation",
    title: "Advertising Quotation Template",
    description: "Free advertising quotation template for agencies to quote ad placements, creative, media buying, and campaign management to brand clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Advertising Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "campaignName", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "ADVERTISING QUOTATION", footer: "Media rates are indicative and confirmed on booking." },
      styles: { primaryColor: "#be185d", secondaryColor: "#9d174d" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "ADVERTISING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for the campaign {{campaignName}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Creative Concept & Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Key visual, copy, and artwork" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,400.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Social Media Ads" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed spend across platforms" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 mo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,000.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Billboard Placement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Prime location, 4-week run" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Radio Spots" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30-second peak-time slot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Campaign Management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Reporting, optimisation, account" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 mo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days; media availability confirmed at booking." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Media spend is billed at cost; agency fees as itemised above." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 50% on approval, balance before campaign launch." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two rounds of creative revisions included; extra rounds billed hourly." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "graphic-design-quotation",
    slug: "graphic-design-quotation",
    title: "Graphic Design Quotation Template",
    description: "Free graphic design quotation template for freelancers and studios to quote logos, branding, print, and packaging design to clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Graphic Design Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "projectName", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "GRAPHIC DESIGN QUOTATION", footer: "Deliverables provided as print-ready and web files on final payment." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#5b21b6" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "GRAPHIC DESIGN QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for the project {{projectName}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Logo Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Three concepts, two revisions" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Brand Style Guide" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Colours, type, usage rules" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$480.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$480.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Business Stationery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Card, letterhead, envelope" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 set" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$320.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$320.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Social Media Kit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Profile, banners, post templates" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$35.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$350.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Packaging Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Product box dieline and artwork" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$540.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days from the date shown above." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two revision rounds are included per item; extra rounds billed hourly." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 50% deposit to begin, balance on delivery of final files." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full copyright and source files transfer once payment clears." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "welding-fabrication-quotation",
    slug: "welding-fabrication-quotation",
    title: "Welding & Fabrication Quotation Template",
    description: "Free welding and fabrication quotation template for metal workshops to quote cutting, welding, materials, and finishing to industrial clients.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Welding & Fabrication Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "drawingRef", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "WELDING & FABRICATION QUOTATION", footer: "Prices assume approved drawings and confirmed material grades." },
      styles: { primaryColor: "#57534e", secondaryColor: "#292524" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WELDING & FABRICATION QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} against drawing reference {{drawingRef}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Structural Steel" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mild steel RHS and plate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "820 kg" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1.90" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,558.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Laser Cutting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CNC profile cutting per part" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "64" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6.50" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$416.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "MIG Welding" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fit-up and welding labour" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "48 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$42.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,016.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Powder Coating" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Blast, prime and coat finish" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivery & Rigging" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Transport and unload on site" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days; lead time 3-4 weeks from approved drawings." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Welding to relevant code; weld inspection reports available on request." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 40% deposit on order, balance Net 30 on delivery." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Steel price is subject to change if order is not confirmed within validity." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  },
  {
    id: "security-camera-installation-quotation",
    slug: "security-camera-installation-quotation",
    title: "Security Camera Installation Quotation Template",
    description: "Free CCTV and security camera installation quotation template for installers to quote cameras, NVR, cabling, and setup to homes and businesses.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Security Camera Installation Quotation Template",
      fields: ["companyName", "clientName", "quoteNumber", "quoteDate", "validUntil", "siteAddress", "subtotal", "taxRate", "tax", "grandTotal", "notes"],
      layout: { header: "SECURITY CAMERA INSTALLATION QUOTATION", footer: "Prices include configuration and a walkthrough on handover." },
      styles: { primaryColor: "#1e3a8a", secondaryColor: "#1e40af" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SECURITY CAMERA INSTALLATION QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}}   Date: {{quoteDate}}   Valid until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}} for the site at {{siteAddress}}." }] },
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
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4K IP Dome Cameras" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Night vision, weatherproof" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$110.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$880.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "NVR & Storage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "16-channel PoE NVR with 4TB HDD" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cabling & Conduit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cat6 runs and trunking per metre" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "160 m" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2.80" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$448.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Installation Labour" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mount, terminate and configure" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "16 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$38.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$608.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mobile App Setup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Remote viewing and alerts config" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90.00" }] }] }
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
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Quotation valid for 30 days; installation scheduled within one week of order." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cameras carry a 24-month warranty; installation warranted for 12 months." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 50% deposit on booking, balance on completion." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Client to provide power outlets and internet at the recording location." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Notes: " }, { type: "text", text: "{{notes}}" }] }
        ]
      }
    }
  }
];
