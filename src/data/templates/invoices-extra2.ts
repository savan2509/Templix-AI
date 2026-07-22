export const invoicesExtra2Templates: any[] = [
  {
    id: "invoice-veterinary",
    slug: "invoice-veterinary",
    title: "Veterinary Invoice Template",
    description: "Free veterinary invoice template for animal clinics and vets to bill pet owners for exams, vaccines, medications, and procedures.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Veterinary Invoice Template",
      fields: ["companyName", "companyAddress", "companyPhone", "clientName", "petName", "petSpecies", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "VETERINARY INVOICE", footer: "Thank you for trusting us with your pet's health." },
      styles: { primaryColor: "#0d9488", secondaryColor: "#134e4a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "VETERINARY INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Clinic: " }, { type: "text", text: "{{companyName}}, {{companyAddress}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Patient & Owner" }] },
          { type: "paragraph", content: [{ type: "text", text: "Owner: {{clientName}} — Pet: {{petName}} ({{petSpecies}})" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wellness exam & consultation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Rabies & DHPP vaccination" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$28" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$56" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dental cleaning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Take-home medication" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$34" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$34" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-accounting-services",
    slug: "invoice-accounting-services",
    title: "Accounting Services Invoice Template",
    description: "Free accounting services invoice template for accountants and bookkeepers to bill clients for tax prep, payroll, and financial reporting.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Accounting Services Invoice Template",
      fields: ["companyName", "companyAddress", "companyPhone", "clientName", "clientBusiness", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "ACCOUNTING INVOICE", footer: "Payment due within 15 days of invoice date." },
      styles: { primaryColor: "#1d4ed8", secondaryColor: "#1e3a8a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "ACCOUNTING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Firm: " }, { type: "text", text: "{{companyName}}, {{companyAddress}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Bill To" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{clientName}} — {{clientBusiness}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly bookkeeping" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Payroll processing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$240" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly tax filing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$375" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$375" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Financial statement review" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$285" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-copywriter",
    slug: "invoice-copywriter",
    title: "Copywriter Invoice Template",
    description: "Free copywriter invoice template for freelance writers to bill clients for blog posts, website copy, email campaigns, and editing.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Copywriter Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "projectName", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "COPYWRITING INVOICE", footer: "Words that convert — thank you for your business." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#4c1d95" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COPYWRITING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}} — {{companyEmail}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Project" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — {{projectName}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "SEO blog articles (1,200 words)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Homepage & landing page copy" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$275" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$550" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Email campaign sequence" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$80" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$400" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-moving-services",
    slug: "invoice-moving-services",
    title: "Moving Services Invoice Template",
    description: "Free moving services invoice template for movers and relocation companies to bill customers for labor, trucks, packing, and mileage.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Moving Services Invoice Template",
      fields: ["companyName", "companyAddress", "companyPhone", "clientName", "originAddress", "destinationAddress", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "MOVING SERVICES INVOICE", footer: "Fully licensed and insured movers." },
      styles: { primaryColor: "#ea580c", secondaryColor: "#9a3412" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MOVING SERVICES INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Company: " }, { type: "text", text: "{{companyName}}, {{companyAddress}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Move Details" }] },
          { type: "paragraph", content: [{ type: "text", text: "Customer: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "From: {{originAddress}}  →  To: {{destinationAddress}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Movers (crew of 3)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$135" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$810" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "26 ft truck & fuel" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$220" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$220" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Packing materials & boxes" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Long carry & mileage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "48 mi" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2.50" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-pest-control",
    slug: "invoice-pest-control",
    title: "Pest Control Invoice Template",
    description: "Free pest control invoice template for exterminators to bill customers for inspections, treatments, and recurring service plans.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Pest Control Invoice Template",
      fields: ["companyName", "companyPhone", "clientName", "serviceAddress", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "PEST CONTROL INVOICE", footer: "Guaranteed protection — call us if pests return." },
      styles: { primaryColor: "#65a30d", secondaryColor: "#365314" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PEST CONTROL INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Service Location" }] },
          { type: "paragraph", content: [{ type: "text", text: "Customer: {{clientName}} — {{serviceAddress}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Initial inspection" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$60" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$60" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Interior & exterior treatment" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$145" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$145" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Termite bait stations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$108" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-solar-installation",
    slug: "invoice-solar-installation",
    title: "Solar Installation Invoice Template",
    description: "Free solar installation invoice template for solar companies to bill homeowners for panels, inverters, mounting, and system commissioning.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Solar Installation Invoice Template",
      fields: ["companyName", "companyAddress", "companyPhone", "clientName", "systemSize", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "SOLAR INSTALLATION INVOICE", footer: "Powering your home with clean energy." },
      styles: { primaryColor: "#f59e0b", secondaryColor: "#b45309" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOLAR INSTALLATION INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Installer: " }, { type: "text", text: "{{companyName}}, {{companyAddress}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "System" }] },
          { type: "paragraph", content: [{ type: "text", text: "Customer: {{clientName}} — System size: {{systemSize}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "400W monocrystalline panels" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$210" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,040" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hybrid inverter" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,850" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,850" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Roof mounting & racking" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Labor & commissioning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "32 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$85" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,720" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-roofing",
    slug: "invoice-roofing",
    title: "Roofing Invoice Template",
    description: "Free roofing invoice template for roofers and contractors to bill clients for tear-off, shingles, flashing, and labor on roof jobs.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Roofing Invoice Template",
      fields: ["companyName", "companyPhone", "companyLicense", "clientName", "propertyAddress", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "ROOFING INVOICE", footer: "Workmanship warranty included on all roofing." },
      styles: { primaryColor: "#b91c1c", secondaryColor: "#7f1d1d" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "ROOFING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{companyName}} — {{companyPhone}} (Lic. {{companyLicense}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Property" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — {{propertyAddress}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Tear-off & disposal" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "22 sq" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$95" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,090" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Architectural shingles" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "22 sq" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$135" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,970" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Underlayment & flashing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$680" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Labor & cleanup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 job" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,450" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,450" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-painting",
    slug: "invoice-painting",
    title: "Painting Invoice Template",
    description: "Free painting invoice template for house painters and decorators to bill clients for prep, primer, paint, and interior or exterior labor.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Painting Invoice Template",
      fields: ["companyName", "companyPhone", "clientName", "jobAddress", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "PAINTING INVOICE", footer: "Two-year finish warranty on all work." },
      styles: { primaryColor: "#0891b2", secondaryColor: "#155e75" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PAINTING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Painter: " }, { type: "text", text: "{{companyName}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Job Site" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — {{jobAddress}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Surface prep & patching" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Interior walls & ceilings" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,400 sqft" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1.75" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,450" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Trim & doors" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$520" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$520" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paint & materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$380" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$380" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-carpentry",
    slug: "invoice-carpentry",
    title: "Carpentry Invoice Template",
    description: "Free carpentry invoice template for carpenters and woodworkers to bill clients for custom builds, framing, trim, and finish work.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Carpentry Invoice Template",
      fields: ["companyName", "companyPhone", "clientName", "projectName", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "CARPENTRY INVOICE", footer: "Handcrafted quality — thank you for your business." },
      styles: { primaryColor: "#92400e", secondaryColor: "#451a03" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CARPENTRY INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Carpenter: " }, { type: "text", text: "{{companyName}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Project" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — {{projectName}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom built-in shelving" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,250" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,250" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Crown molding install" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "64 ft" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$9" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$576" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hardwood & materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$430" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$430" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-security-services",
    slug: "invoice-security-services",
    title: "Security Services Invoice Template",
    description: "Free security services invoice template for guard companies to bill clients for patrols, event coverage, monitoring, and staffing hours.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Security Services Invoice Template",
      fields: ["companyName", "companyPhone", "companyLicense", "clientName", "siteName", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "SECURITY SERVICES INVOICE", footer: "Licensed and bonded security professionals." },
      styles: { primaryColor: "#334155", secondaryColor: "#0f172a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SECURITY SERVICES INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}} — {{companyPhone}} (Lic. {{companyLicense}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Site" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — {{siteName}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Uniformed guard patrol" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "160" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$32" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$5,120" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Overnight event coverage" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CCTV monitoring" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 mo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  }
];
