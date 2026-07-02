// Enriched invoice template documents. Each document is intentionally distinct
// in its sections and line-item table so no two invoices render alike.

export const invoicesTemplates = [
  {
    id: "invoice-freelancer",
    slug: "invoice-freelancer",
    title: "Freelancer Invoice Template",
    description: "Professional invoice layout for freelancers, designers, and developers to bill clients for flat-rate project work.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Freelancer Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "clientEmail", "invoiceNumber", "invoiceDate", "dueDate", "projectName", "milestone", "subtotal", "tax", "total", "amountDue", "paymentMethod", "paymentTerms"],
      layout: {
        header: "FREELANCER INVOICE",
        footer: "Thank you for your business!"
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#1e1b4b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FREELANCER INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Freelancer: " }, { type: "text", text: "{{companyName}} ({{companyEmail}})" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}} ({{clientEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Project: " }, { type: "text", text: "{{projectName}} — {{milestone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Project Deliverables" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "UI/UX design & wireframes" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Frontend build (Next.js)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "API & database integration" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revision rounds (2 included)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$125" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$250" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax ({{tax}}): " }, { type: "text", text: "$250.00" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}. A 50% deposit was applied at kickoff; the balance above is now due." }] }
        ]
      }
    }
  },
  {
    id: "invoice-small-business",
    slug: "invoice-small-business",
    title: "Small Business Invoice Template",
    description: "Classic invoice format for retail stores, boutique shops, and local business products and services.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Small Business Invoice Template",
      fields: ["companyName", "businessAddress", "clientName", "billingAddress", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "shippingCost", "taxAmount", "grandTotal", "amountDue"],
      layout: {
        header: "SMALL BUSINESS INVOICE",
        footer: "Terms: Due within 30 days. Returns accepted with receipt."
      },
      styles: {
        primaryColor: "#e11d48",
        secondaryColor: "#4c0519"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SMALL BUSINESS INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Date: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Store: " }, { type: "text", text: "{{companyName}}, {{businessAddress}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Customer: " }, { type: "text", text: "{{clientName}}, {{billingAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Items Purchased" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item / SKU" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Line Total" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Premium Widget Pack (WDG-PRO-500)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$24.99" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$299.88" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gift Wrapping Service (GFT-01)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3.50" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$42.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Loyalty Member Discount" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-$50.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-$50.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Shipping: " }, { type: "text", text: "{{shippingCost}}    Sales Tax: {{taxAmount}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Grand Total: " }, { type: "text", text: "{{grandTotal}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "Returns accepted within 14 days with this receipt. We appreciate your support of our local shop." }] }
        ]
      }
    }
  },
  {
    id: "invoice-consulting",
    slug: "invoice-consulting",
    title: "Consulting Invoice Template",
    description: "Professional hourly or retainer billing format for consultants and management strategists.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Consulting Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "clientCompany", "invoiceNumber", "invoiceDate", "dueDate", "consultingPackage", "hourlyRate", "subtotal", "tax", "total", "amountDue", "paymentTerms"],
      layout: {
        header: "CONSULTING INVOICE",
        footer: "Please send payment via bank wire transfer. Net 15 terms."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#064e3b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSULTING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Advisory Firm: " }, { type: "text", text: "{{companyName}} ({{companyEmail}})" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompany}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Engagement: " }, { type: "text", text: "{{consultingPackage}} at {{hourlyRate}}/hour" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Advisory Hours Billed" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Activity" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery & stakeholder interviews" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Market & competitive analysis" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$900.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy roadmap & presentation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$900.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal (16 hrs): " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax ({{tax}}): " }, { type: "text", text: "$192.00" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Terms: " }, { type: "text", text: "{{paymentTerms}}. Remit by bank wire transfer; wire details provided under separate cover." }] }
        ]
      }
    }
  },
  {
    id: "invoice-contractor",
    slug: "invoice-contractor",
    title: "Contractor Invoice Template",
    description: "Itemized billing format for contractors, carpenters, and construction projects mapping labor and materials.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Contractor Invoice Template",
      fields: ["companyName", "licenseNumber", "clientName", "propertyAddress", "invoiceNumber", "dueDate", "workDescription", "materialCost", "laborCost", "equipmentCost", "total", "amountDue", "warranty"],
      layout: {
        header: "CONTRACTOR INVOICE",
        footer: "Warranties apply as specified in master services construction contracts."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#431407"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONTRACTOR BILLING" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Payment Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}} (License {{licenseNumber}})" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Job Site: " }, { type: "text", text: "{{propertyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Scope: " }, { type: "text", text: "{{workDescription}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Labor & Materials" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Line Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Detail" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Demolition & site prep" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24 labor hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,680.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Framing & cabinetry labor" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "96 labor hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,720.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Materials (lumber, fixtures, tile)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Itemized" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{materialCost}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Equipment rental (dumpster, lift)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5 days" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{equipmentCost}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Labor Subtotal: " }, { type: "text", text: "{{laborCost}}    Materials: {{materialCost}}    Equipment: {{equipmentCost}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Warranty: " }, { type: "text", text: "{{warranty}}. Final payment due upon walkthrough and lien-waiver signing." }] }
        ]
      }
    }
  },
  {
    id: "invoice-graphic-designer",
    slug: "invoice-graphic-designer",
    title: "Graphic Designer Invoice Template",
    description: "Creative styled invoice template tailored for visual designers, illustrators, and branding agencies.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Graphic Designer Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "invoiceDate", "designProject", "fileFormat", "licenseType", "numberOfRevisions", "designFee", "additionalCharges", "total", "amountDue"],
      layout: {
        header: "DESIGN SERVICES INVOICE",
        footer: "All raw design assets delivered upon receipt of full payment."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#4d0728"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DESIGN INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Date: {{invoiceDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Studio: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Project: " }, { type: "text", text: "{{designProject}} — License: {{licenseType}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Creative Services" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Design Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Logo suite & mark design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3 concepts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,400.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Business card & stationery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Print-ready" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Brand guidelines document" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24-page PDF" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Additional revisions" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2 extra rounds" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{additionalCharges}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Design Fee: " }, { type: "text", text: "{{designFee}}    Revisions Included: {{numberOfRevisions}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Delivery: " }, { type: "text", text: "Editable source files ({{fileFormat}}) released once payment clears. Thank you for creating with us!" }] }
        ]
      }
    }
  },
  {
    id: "invoice-web-developer",
    slug: "invoice-web-developer",
    title: "Web Developer Invoice Template",
    description: "Detailed billing layout for web developers, programmers, and software development agencies.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Web Developer Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "dueDate", "developmentPhase", "featureDelivered", "repositoryLink", "hourlyRate", "subtotal", "total", "amountDue", "maintenancePlan"],
      layout: {
        header: "DEVELOPER BILLING STATEMENT",
        footer: "Code repositories and deployment logs shared post transaction confirmation."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEB DEVELOPMENT BILLING" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Developer: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Phase: " }, { type: "text", text: "{{developmentPhase}} — {{featureDelivered}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Engineering Time" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Task" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Auth system & user roles" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "48" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,560.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dashboard & template engine" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "72" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,840.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CI/CD & production deployment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,800.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal (160 hrs): " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Handover: " }, { type: "text", text: "Repository {{repositoryLink}} and deployment logs are shared on payment confirmation. Includes {{maintenancePlan}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-cleaning-service",
    slug: "invoice-cleaning-service",
    title: "Cleaning Service Invoice Template",
    description: "Clear cleaning and janitorial services invoice layout for commercial and residential cleaning.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Cleaning Service Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "invoiceDate", "cleaningType", "numberOfRooms", "serviceDate", "suppliesUsed", "serviceFee", "extraCharges", "total", "amountDue"],
      layout: {
        header: "CLEANING SERVICE STATEMENT",
        footer: "Thank you for letting us clean your environment!"
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0c4a6e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CLEANING SERVICE STATEMENT" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Service Date: {{serviceDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Service: " }, { type: "text", text: "{{cleaningType}} — {{numberOfRooms}} rooms" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Cleaning Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Area / Task" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rooms" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Office floors & workstations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Restrooms deep sanitation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$260.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Kitchen & break room" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$170.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Carpet steam cleaning (add-on)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{extraCharges}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Service Fee: " }, { type: "text", text: "{{serviceFee}}    Add-ons: {{extraCharges}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Supplies Used: " }, { type: "text", text: "{{suppliesUsed}}. All products are non-toxic and pet-safe." }] }
        ]
      }
    }
  },
  {
    id: "invoice-photography",
    slug: "invoice-photography",
    title: "Photography Invoice Template",
    description: "Elegant billing template for professional photographers, studio shoots, and digital retouching.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Photography Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "invoiceDate", "eventName", "eventDate", "venue", "shootingHours", "numberOfPhotos", "albumIncluded", "packagePrice", "total", "amountDue"],
      layout: {
        header: "PHOTOGRAPHY INVOICE",
        footer: "High-resolution digital gallery links delivered upon payment."
      },
      styles: {
        primaryColor: "#d97706",
        secondaryColor: "#451a03"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PHOTOGRAPHY SERVICES BILLING" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Date: {{invoiceDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Photographer: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Event: " }, { type: "text", text: "{{eventName}} on {{eventDate}} at {{venue}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Coverage & Deliverables" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Detail" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On-site event coverage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{shootingHours}} hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Editing & retouching" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{numberOfPhotos}} photos" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hardcover album" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{albumIncluded}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Online gallery hosting (1 yr)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Included" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$200.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Package Price: " }, { type: "text", text: "{{packagePrice}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Delivery: " }, { type: "text", text: "High-resolution gallery links are released within 3 weeks of full payment. A 30% retainer secured the date." }] }
        ]
      }
    }
  },
  {
    id: "invoice-hvac-service",
    slug: "invoice-hvac-service",
    title: "HVAC Service Invoice Template",
    description: "HVAC repair, maintenance, and technical installations service invoice layout.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "HVAC Service Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "dueDate", "serviceType", "unitBrand", "unitModel", "serialNumber", "refrigerantUsed", "maintenanceNotes", "grandTotal", "amountDue", "warrantyInformation"],
      layout: {
        header: "HVAC SERVICE STATEMENT",
        footer: "Heating and cooling technicians certification guarantees apply."
      },
      styles: {
        primaryColor: "#dc2626",
        secondaryColor: "#450a0a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "HVAC TECHNICAL SERVICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Payment Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Technician Firm: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Unit: " }, { type: "text", text: "{{unitBrand}} {{unitModel}} (S/N {{serialNumber}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Service Type: " }, { type: "text", text: "{{serviceType}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parts & Labor" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Diagnostic & inspection call" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "R-410A refrigerant recharge" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2.5 lbs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$185.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "MERV-13 filter replacement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$60.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Labor (coil clean, capacitor)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$270.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Work Notes: " }, { type: "text", text: "{{maintenanceNotes}}. Refrigerant charged: {{refrigerantUsed}}." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Grand Total: " }, { type: "text", text: "{{grandTotal}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Warranty: " }, { type: "text", text: "{{warrantyInformation}}. Payment due on completion of service." }] }
        ]
      }
    }
  },
  {
    id: "invoice-plumbing",
    slug: "invoice-plumbing",
    title: "Plumbing Invoice Template",
    description: "Professional plumbing repair, pipe installations, and service technician billing format.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Plumbing Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "serviceDate", "dueDate", "problemDescription", "partsUsed", "partsCost", "laborCost", "total", "amountDue", "warrantyPeriod"],
      layout: {
        header: "PLUMBING SERVICE STATEMENT",
        footer: "Thank you for choosing our plumbing services! Net 15 terms."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PLUMBING SERVICE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Service Date: {{serviceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Plumber: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Problem: " }, { type: "text", text: "{{problemDescription}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parts & Labor" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Camera line inspection" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$140.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hydro-jetting main line" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$260.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Parts ({{partsUsed}})" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Set" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{partsCost}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Labor (pipe repair)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$140.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Parts: " }, { type: "text", text: "{{partsCost}}    Labor: {{laborCost}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Warranty: " }, { type: "text", text: "{{warrantyPeriod}}. Net 15 payment terms apply." }] }
        ]
      }
    }
  },
  {
    id: "invoice-timesheet",
    slug: "invoice-timesheet",
    title: "Timesheet Invoice Template",
    description: "Hour-by-hour timesheet billing invoice for contractors, virtual assistants, and staff billing by logged time.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Timesheet Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "billingPeriodStart", "billingPeriodEnd", "hourlyRate", "totalHours", "subtotal", "total", "amountDue"],
      layout: {
        header: "TIMESHEET BILLING INVOICE",
        footer: "Hours logged are verified by project management software."
      },
      styles: {
        primaryColor: "#8b5cf6",
        secondaryColor: "#4c1d95"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TIMESHEET BILLING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Period: {{billingPeriodStart}} to {{billingPeriodEnd}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Rate: " }, { type: "text", text: "{{hourlyRate}}/hr — {{totalHours}} total hours logged" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Daily Hours Log" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Date" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Task" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mon" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Inbox & scheduling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wed" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Research & reporting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fri" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CRM data entry" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "All logged hours are verified against the project management timesheet export. Payment due within 15 days." }] }
        ]
      }
    }
  },
  {
    id: "invoice-milestone",
    slug: "invoice-milestone",
    title: "Milestone Invoice Template",
    description: "Project-based milestone billing for software teams, agencies, and consultants billed per delivery phase.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Milestone Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "contractRef", "milestoneNumber", "milestoneName", "milestoneStatus", "subtotal", "tax", "total", "amountDue"],
      layout: {
        header: "MILESTONE RELEASE BILLING",
        footer: "Billed in accordance with signed Master Service Agreement schedules."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MILESTONE RELEASE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Contract Ref: {{contractRef}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Agency: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Milestone {{milestoneNumber}}: " }, { type: "text", text: "{{milestoneName}} — Status: {{milestoneStatus}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Milestone Schedule" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "% of Contract" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "M1 — Discovery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "M2 — Build (this invoice)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{milestoneStatus}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "M3 — Launch" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pending" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$8,000.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Milestone Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax ({{tax}}): " }, { type: "text", text: "$640.00" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Amount Due This Release: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Terms: " }, { type: "text", text: "Released per the Master Service Agreement schedule. Milestone M3 invoices upon acceptance sign-off." }] }
        ]
      }
    }
  },
  {
    id: "invoice-receipt",
    slug: "invoice-receipt",
    title: "Receipt Template",
    description: "Official payment receipt template confirming a completed transaction with full paid balance and zero amount due.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Receipt Template",
      fields: ["companyName", "payerName", "receiptNumber", "paymentDate", "paymentMethod", "transactionId", "amountPaid"],
      layout: {
        header: "OFFICIAL PAYMENT RECEIPT",
        footer: "Thank you for your payment! Balance due: $0.00."
      },
      styles: {
        primaryColor: "#10b981",
        secondaryColor: "#065f46"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PAYMENT RECEIPT" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Receipt #: " }, { type: "text", text: "{{receiptNumber}}   Payment Date: {{paymentDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Issued By" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Merchant: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Received From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payer: " }, { type: "text", text: "{{payerName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Transaction Summary" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Method" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Invoice INV-2026-001 settlement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{paymentMethod}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{amountPaid}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Transaction ID: " }, { type: "text", text: "{{transactionId}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Amount Paid: " }, { type: "text", text: "{{amountPaid}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Balance Due: " }, { type: "text", text: "$0.00 — PAID IN FULL" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This receipt confirms your payment has been received and processed. Please retain it for your records." }] }
        ]
      }
    }
  },
  {
    id: "invoice-rental",
    slug: "invoice-rental",
    title: "Rental Invoice Template",
    description: "Monthly rental billing statement for landlords and property managers to invoice tenants for rent and fees.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Rental Invoice Template",
      fields: ["landlordName", "tenantName", "propertyAddress", "unitNumber", "invoiceNumber", "rentalPeriod", "baseRent", "additionalFees", "amountDue"],
      layout: {
        header: "RENTAL PAYMENT STATEMENT",
        footer: "Late payments are subject to a 10% penalty after 5 days."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#4c1d95"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RENTAL STATEMENT" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Rental Period: {{rentalPeriod}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord: " }, { type: "text", text: "{{landlordName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tenant: " }, { type: "text", text: "{{tenantName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Property: " }, { type: "text", text: "{{propertyAddress}}, Unit {{unitNumber}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Monthly Charges" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Charge" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Period" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Base rent" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{rentalPeriod}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{baseRent}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Parking space" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Water & trash" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Base Rent: " }, { type: "text", text: "{{baseRent}}    Additional Fees: {{additionalFees}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Amount Due: " }, { type: "text", text: "{{amountDue}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Terms: " }, { type: "text", text: "Rent is due on the 1st. A 10% late penalty applies after a 5-day grace period." }] }
        ]
      }
    }
  },
  {
    id: "invoice-estimate",
    slug: "invoice-estimate",
    title: "Estimate Template",
    description: "Professional cost estimate and quote template for contractors, designers, and service businesses before project start.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Estimate Template",
      fields: ["companyName", "clientName", "estimateNumber", "issueDate", "validUntil", "projectDescription", "estimatedTotal"],
      layout: {
        header: "COST ESTIMATE & QUOTE",
        footer: "Estimate pricing is valid for 30 days from date of issue."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0c4a6e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COST ESTIMATE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Estimate #: " }, { type: "text", text: "{{estimateNumber}}   Issued: {{issueDate}}   Valid Until: {{validUntil}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Prepared By" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Company: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Estimate For" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Scope: " }, { type: "text", text: "{{projectDescription}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Estimated Costs" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Line Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Est. Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Est. Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Materials (allowance)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Labor (estimated)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "180 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,000.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Equipment & permits" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Contingency (10%)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Estimated Total: " }, { type: "text", text: "{{estimatedTotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Please Note: " }, { type: "text", text: "This is an estimate, not a final invoice. Actual costs may vary with scope. Pricing valid until {{validUntil}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-purchase-order",
    slug: "invoice-purchase-order",
    title: "Purchase Order Template",
    description: "Commercial purchase order invoice for B2B goods ordering, supplier billing, and inventory procurement.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Purchase Order Template",
      fields: ["supplierName", "buyerName", "poNumber", "orderDate", "deliveryAddress", "paymentTerms", "goodsDescription", "totalCost"],
      layout: {
        header: "COMMERCIAL PURCHASE ORDER",
        footer: "Subject to standard B2B commercial terms and shipping conditions."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#0f172a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PURCHASE ORDER" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "PO #: " }, { type: "text", text: "{{poNumber}}   Order Date: {{orderDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Supplier" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Vendor: " }, { type: "text", text: "{{supplierName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Ship To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Buyer: " }, { type: "text", text: "{{buyerName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Delivery Address: " }, { type: "text", text: "{{deliveryAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Ordered Goods" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Total" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Server rack unit (42U)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$850.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,400.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Backup power supply (UPS)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$420.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3,360.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cat6 cabling bundle" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$900.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Goods Description: " }, { type: "text", text: "{{goodsDescription}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Commercial Total: " }, { type: "text", text: "{{totalCost}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment Terms: " }, { type: "text", text: "{{paymentTerms}}. Subject to standard B2B commercial and shipping conditions." }] }
        ]
      }
    }
  },
  {
    id: "invoice-hourly-rate",
    slug: "invoice-hourly-rate",
    title: "Hourly Rate Invoice Template",
    description: "Time-based invoice template for consultants, developers, and freelancers billing clients by the hour with logged hours and rates.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Hourly Rate Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "invoiceNumber", "invoiceDate", "dueDate", "hoursWorked", "hourlyRate", "subtotal", "total", "amountDue"],
      layout: {
        header: "HOURLY INVOICE",
        footer: "Payment due within 15 days of invoice date. Thank you for your business!"
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "HOURLY INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Date: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}} ({{companyEmail}})" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Billing Basis: " }, { type: "text", text: "{{hoursWorked}} hours at {{hourlyRate}} per hour" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Hours Worked" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Work Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Consultation & planning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$850.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Implementation work" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,040.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Testing & revisions" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Amount Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Terms: " }, { type: "text", text: "Payment due within 15 days of the invoice date. Detailed time logs available on request." }] }
        ]
      }
    }
  },
  {
    id: "invoice-recurring-subscription",
    slug: "invoice-recurring-subscription",
    title: "Recurring Subscription Invoice Template",
    description: "Monthly recurring invoice template for SaaS, retainers, and subscription services with billing period and auto-renewal details.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Recurring Subscription Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "billingPeriod", "invoiceDate", "dueDate", "subtotal", "tax", "total", "amountDue"],
      layout: {
        header: "SUBSCRIPTION INVOICE",
        footer: "This is a recurring charge. Contact us to update your billing plan."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#4c1d95"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SUBSCRIPTION INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Billing Period: {{billingPeriod}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subscriber: " }, { type: "text", text: "{{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Issued: " }, { type: "text", text: "{{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Subscription Charges" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Plan" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Seats" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pro Plan (monthly)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$29.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$290.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Priority support add-on" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$49.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$49.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Extra storage (100 GB)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$15.00" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$15.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax ({{tax}}): " }, { type: "text", text: "$28.32" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}} ({{amountDue}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Auto-Renewal: " }, { type: "text", text: "This subscription renews automatically each month. Update or cancel your plan anytime from your account dashboard." }] }
        ]
      }
    }
  },
  {
    id: "invoice-medical",
    slug: "invoice-medical",
    title: "Medical Practice Invoice Template",
    description: "Patient billing invoice template for clinics, therapists, and medical practices with service codes and insurance reference fields.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Medical Practice Invoice Template",
      fields: ["companyName", "patientName", "invoiceNumber", "invoiceDate", "serviceDescription", "insuranceRef", "amountDue"],
      layout: {
        header: "MEDICAL INVOICE",
        footer: "Please retain this invoice for insurance and tax records."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#134e4a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MEDICAL INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Date of Service: {{invoiceDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Provider" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Practice: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Patient" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Name: " }, { type: "text", text: "{{patientName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Insurance Ref: " }, { type: "text", text: "{{insuranceRef}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Services Rendered" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "CPT Code" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Charge" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Office visit — established patient" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "99214" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lab panel — comprehensive metabolic" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "80053" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Insurance adjustment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "ADJ" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-$120.00" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Service Summary: " }, { type: "text", text: "{{serviceDescription}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Patient Balance Due: " }, { type: "text", text: "{{amountDue}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "Charges submitted to your insurer under reference {{insuranceRef}}. Please retain this invoice for insurance and tax records." }] }
        ]
      }
    }
  }
];
