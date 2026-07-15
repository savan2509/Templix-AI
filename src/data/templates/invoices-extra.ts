export const invoicesExtraTemplates: any[] = [
  {
    id: "invoice-construction",
    slug: "invoice-construction",
    title: "Construction Invoice Template",
    description: "Free construction invoice template for builders and general contractors to bill clients for labor, materials, and equipment on jobs.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Construction Invoice Template",
      fields: ["companyName", "companyAddress", "companyPhone", "clientName", "projectName", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "CONSTRUCTION INVOICE", footer: "Licensed & insured — thank you for building with us." },
      styles: { primaryColor: "#c2410c", secondaryColor: "#7c2d12" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSTRUCTION INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{companyAddress}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Project Details" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — Project: {{projectName}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Work Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Units" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Site preparation & excavation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,600" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Concrete foundation pour" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 yd" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,160" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Framing lumber & materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 lot" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,300" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,300" }] }] }
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
    id: "invoice-it-services",
    slug: "invoice-it-services",
    title: "IT Services Invoice Template",
    description: "Free IT services invoice template for managed service providers and technicians to bill for support, hardware, and monthly retainers.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "IT Services Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "clientCompany", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "IT SERVICES INVOICE", footer: "Your technology, running smoothly." },
      styles: { primaryColor: "#0369a1", secondaryColor: "#0c4a6e" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "IT SERVICES INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}} ({{companyEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Billed To" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{clientName}} — {{clientCompany}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed support retainer" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 mo" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Server migration & setup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$110" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$880" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Endpoint security licenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "25" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$300" }] }] }
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
    id: "invoice-restaurant",
    slug: "invoice-restaurant",
    title: "Restaurant Invoice Template",
    description: "Free restaurant invoice template for eateries and food vendors to bill corporate clients for catered orders, private dining, and events.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Restaurant Invoice Template",
      fields: ["companyName", "companyPhone", "clientName", "eventDate", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "gratuity", "tax", "total", "paymentTerms"],
      layout: { header: "RESTAURANT INVOICE", footer: "Bon appetit — we hope to serve you again soon." },
      styles: { primaryColor: "#b91c1c", secondaryColor: "#450a0a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RESTAURANT INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Venue: " }, { type: "text", text: "{{companyName}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Booking" }] },
          { type: "paragraph", content: [{ type: "text", text: "Guest: {{clientName}} — Event date: {{eventDate}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Menu Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Guests" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Three-course plated dinner" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$55" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Open bar package" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$28" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,120" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Private room rental" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$400" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$400" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Gratuity: " }, { type: "text", text: "{{gratuity}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Terms: " }, { type: "text", text: "{{paymentTerms}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-transport-logistics",
    slug: "invoice-transport-logistics",
    title: "Transport And Logistics Invoice Template",
    description: "Free transport and logistics invoice template for freight carriers and couriers to bill for shipments, mileage, and delivery fees.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Transport And Logistics Invoice Template",
      fields: ["companyName", "companyPhone", "clientName", "origin", "destination", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "fuelSurcharge", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "TRANSPORT & LOGISTICS INVOICE", footer: "Delivered on time, every time." },
      styles: { primaryColor: "#15803d", secondaryColor: "#14532d" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TRANSPORT & LOGISTICS INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Carrier: " }, { type: "text", text: "{{companyName}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Shipment" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — Route: {{origin}} to {{destination}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Distance" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate/mi" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full truckload freight" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "620 mi" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2.75" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,705" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Loading & pallet handling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18 plt" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$15" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$270" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Detention & wait time" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$60" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Fuel Surcharge: " }, { type: "text", text: "{{fuelSurcharge}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-event-planning",
    slug: "invoice-event-planning",
    title: "Event Planning Invoice Template",
    description: "Free event planning invoice template for wedding and corporate event coordinators to bill clients for coordination, vendors, and decor.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Event Planning Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "eventName", "eventDate", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "deposit", "balanceDue", "paymentTerms"],
      layout: { header: "EVENT PLANNING INVOICE", footer: "Turning your vision into an unforgettable event." },
      styles: { primaryColor: "#be185d", secondaryColor: "#831843" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EVENT PLANNING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Planner: " }, { type: "text", text: "{{companyName}} ({{companyEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Event Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — {{eventName}} on {{eventDate}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Full event coordination" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Floral & decor styling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Vendor management fee" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$750" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Deposit Paid: " }, { type: "text", text: "{{deposit}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Balance Due: " }, { type: "text", text: "{{balanceDue}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Terms: " }, { type: "text", text: "{{paymentTerms}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-real-estate-commission",
    slug: "invoice-real-estate-commission",
    title: "Real Estate Commission Invoice Template",
    description: "Free real estate commission invoice template for agents and brokers to bill for closed sales, listing fees, and referral splits.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Real Estate Commission Invoice Template",
      fields: ["companyName", "agentName", "clientName", "propertyAddress", "salePrice", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "REAL ESTATE COMMISSION INVOICE", footer: "Congratulations on your closing!" },
      styles: { primaryColor: "#1d4ed8", secondaryColor: "#1e3a8a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "REAL ESTATE COMMISSION INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Brokerage: " }, { type: "text", text: "{{companyName}} — Agent: {{agentName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Transaction" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — Property: {{propertyAddress}} — Sale price: {{salePrice}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Basis" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sales commission" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$450,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$13,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional marketing fee" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$650" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Transaction coordination" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$395" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$395" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due at Closing: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-fitness-trainer",
    slug: "invoice-fitness-trainer",
    title: "Fitness Trainer Invoice Template",
    description: "Free fitness trainer invoice template for personal trainers and coaches to bill clients for sessions, packages, and online programs.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Fitness Trainer Invoice Template",
      fields: ["companyName", "trainerName", "clientName", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "discount", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "PERSONAL TRAINING INVOICE", footer: "Stronger every session — keep it up!" },
      styles: { primaryColor: "#ea580c", secondaryColor: "#9a3412" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PERSONAL TRAINING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Trainer: " }, { type: "text", text: "{{trainerName}} at {{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Client" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{clientName}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Program" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Sessions" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1-on-1 personal training" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$70" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$840" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Custom nutrition plan" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Online coaching check-ins" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$40" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$160" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Discount: " }, { type: "text", text: "{{discount}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-social-media-manager",
    slug: "invoice-social-media-manager",
    title: "Social Media Manager Invoice Template",
    description: "Free social media manager invoice template for freelancers and agencies to bill clients for content, scheduling, and ad management.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Social Media Manager Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "billingPeriod", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "SOCIAL MEDIA MANAGEMENT INVOICE", footer: "Growing your audience, one post at a time." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#4c1d95" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOCIAL MEDIA MANAGEMENT INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Manager: " }, { type: "text", text: "{{companyName}} ({{companyEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Retainer" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — Billing period: {{billingPeriod}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Content creation & posts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$900" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid ad campaign management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$600" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly analytics report" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$250" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$250" }] }] }
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
    id: "invoice-dental",
    slug: "invoice-dental",
    title: "Dental Invoice Template",
    description: "Free dental invoice template for dentists and orthodontic clinics to bill patients for procedures, cleanings, and treatment plans.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Dental Invoice Template",
      fields: ["companyName", "companyPhone", "patientName", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "insuranceCovered", "patientBalance", "paymentTerms"],
      layout: { header: "DENTAL INVOICE", footer: "Keep smiling — see you at your next visit." },
      styles: { primaryColor: "#0d9488", secondaryColor: "#134e4a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DENTAL INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Clinic: " }, { type: "text", text: "{{companyName}} — {{companyPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Patient" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{patientName}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Procedure" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Code" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Fee" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Comprehensive exam & X-rays" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "D0150" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Adult cleaning" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "D1110" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$120" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Composite filling" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "D2392" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$245" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$245" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Insurance Covered: " }, { type: "text", text: "{{insuranceCovered}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Patient Balance: " }, { type: "text", text: "{{patientBalance}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Terms: " }, { type: "text", text: "{{paymentTerms}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-architect",
    slug: "invoice-architect",
    title: "Architect Invoice Template",
    description: "Free architect invoice template for architecture firms and designers to bill clients for design phases, drawings, and site visits.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Architect Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "projectName", "invoiceNumber", "invoiceDate", "dueDate", "subtotal", "tax", "total", "paymentMethod", "paymentTerms"],
      layout: { header: "ARCHITECTURAL SERVICES INVOICE", footer: "Designing spaces that inspire." },
      styles: { primaryColor: "#334155", secondaryColor: "#0f172a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "ARCHITECTURAL SERVICES INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Firm: " }, { type: "text", text: "{{companyName}} ({{companyEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Project" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} — Project: {{projectName}}" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Schematic design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$145" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,350" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Construction documents" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "45" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$145" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6,525" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Site visits & inspections" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$160" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$960" }] }] }
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
