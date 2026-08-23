// Expansion Templates: Role-specific, industry-specific, and format-specific variants
// covering Photographers, VAs, Bookkeepers, General Contractors, Word/Excel/Sheets invoices,
// ATS-specific Resumes, SEO/Web Design Contracts & Proposals, and Sponsorship/Bid Proposals.

export const expansionTemplates = [
  // ── INVOICES ───────────────────────────────────────────────────────────────
  {
    id: "invoice-photographers",
    slug: "invoice-photographers",
    title: "Photography & Commercial Shoot Invoice",
    description: "Itemize session fees, image licensing and usage rights, equipment kits, and print packages.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Commercial Photography Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "paymentDueDate", "currency",
        "freelancerName", "businessName", "freelancerAddress", "freelancerEmail", "freelancerPhone",
        "clientName", "clientCompanyName", "clientAddress", "clientEmail",
        "shootDate", "shootLocation", "sessionFee", "licensingFee", "postProductionFee", "equipmentFee",
        "subtotal", "taxPercent", "taxAmount", "total", "paymentMethod", "licensingTerms", "paymentTerms"
      ],
      layout: {
        header: "PHOTOGRAPHY INVOICE & USAGE LICENSE",
        footer: "Usage rights transfer only upon receipt of full payment. Thank you for your business!"
      },
      styles: { primaryColor: "#1e293b", secondaryColor: "#475569", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PHOTOGRAPHY INVOICE" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Photographer / Studio: " },
            { type: "text", text: "{{freelancerName}}, {{businessName}} — {{freelancerAddress}} ({{freelancerEmail}} / {{freelancerPhone}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Billed To: " },
            { type: "text", text: "{{clientName}}, {{clientCompanyName}} — {{clientAddress}} ({{clientEmail}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due Date: {{paymentDueDate}} | Shoot Date: {{shootDate}} | Location: {{shootLocation}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Fee Breakdown & Line Items" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Principal Day Session & Shoot Direction Fee" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{sessionFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Commercial Media Licensing & Worldwide Digital Usage Rights" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{licensingFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Color Grading, Retouching & Asset Master Export" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{postProductionFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Studio Lighting & Camera Gear Kit Allocation" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{equipmentFee}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{currency}}{{subtotal}} | " },
            { type: "text", marks: [{ type: "bold" }], text: "Tax ({{taxPercent}}): " }, { type: "text", text: "{{currency}}{{taxAmount}} | " },
            { type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{currency}}{{total}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Licensing & Payment Instructions" }] },
          { type: "paragraph", content: [{ type: "text", text: "Licensing Terms: {{licensingTerms}} Payment Terms: {{paymentTerms}} via {{paymentMethod}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-virtual-assistant",
    slug: "invoice-virtual-assistant",
    title: "Virtual Assistant & Admin Support Invoice",
    description: "Bill clients for hourly executive assistance, calendar management, email triage, and monthly retainers.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Virtual Assistant Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "paymentDueDate", "currency",
        "freelancerName", "businessName", "freelancerAddress", "freelancerEmail", "freelancerPhone",
        "clientName", "clientCompanyName", "clientAddress", "billingPeriod",
        "hourlyRate", "hoursLogged", "retainerAmount", "additionalTasksAmount",
        "subtotal", "taxPercent", "taxAmount", "total", "paymentMethod", "paymentTerms"
      ],
      layout: {
        header: "EXECUTIVE VIRTUAL ASSISTANT INVOICE",
        footer: "Thank you for trusting our virtual assistance services."
      },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "VIRTUAL ASSISTANT INVOICE" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Provider: " },
            { type: "text", text: "{{freelancerName}}, {{businessName}} — {{freelancerAddress}} ({{freelancerEmail}} / {{freelancerPhone}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client: " },
            { type: "text", text: "{{clientName}}, {{clientCompanyName}} — {{clientAddress}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due Date: {{paymentDueDate}} | Billing Cycle: {{billingPeriod}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Hours & Services Provided" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Service Description" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours / Rate" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dedicated Monthly VA Retainer (Calendar, Inbox & Operations)" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly Base" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{retainerAmount}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Additional Ad-Hoc Task Hours (Travel Booking & CRM Data Entry)" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{hoursLogged}} hrs @ {{hourlyRate}}/hr" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{additionalTasksAmount}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{currency}}{{subtotal}} | " },
            { type: "text", marks: [{ type: "bold" }], text: "Tax ({{taxPercent}}): " }, { type: "text", text: "{{currency}}{{taxAmount}} | " },
            { type: "text", marks: [{ type: "bold" }], text: "Total: " }, { type: "text", text: "{{currency}}{{total}}" }
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Payment Terms: {{paymentTerms}} via {{paymentMethod}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-bookkeeper",
    slug: "invoice-bookkeeper",
    title: "Bookkeeper & Accounting Services Invoice",
    description: "Clean invoice template designed for bookkeepers and CPAs with dedicated billing-period fields and reconciliation line items.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Bookkeeping Services Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "paymentDueDate", "currency",
        "bookkeeperName", "firmName", "firmAddress", "firmEmail", "firmPhone",
        "clientName", "clientCompanyName", "clientAddress", "reconciliationPeriod",
        "monthlyBookkeepingFee", "payrollProcessingFee", "taxPreparationFee",
        "subtotal", "taxPercent", "taxAmount", "total", "paymentMethod", "paymentTerms"
      ],
      layout: {
        header: "ACCOUNTING & BOOKKEEPING STATEMENT",
        footer: "Certified professional bookkeeping services."
      },
      styles: { primaryColor: "#059669", secondaryColor: "#047857", layoutVariant: 3, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "BOOKKEEPING SERVICES INVOICE" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Firm: " },
            { type: "text", text: "{{bookkeeperName}}, {{firmName}} — {{firmAddress}} ({{firmEmail}} / {{firmPhone}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client: " },
            { type: "text", text: "{{clientName}}, {{clientCompanyName}} — {{clientAddress}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due: {{paymentDueDate}} | Period: {{reconciliationPeriod}}" }
          ]},
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Accounting Service" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly Bank, Credit Card & General Ledger Reconciliation" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{monthlyBookkeepingFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Payroll Filing & Employee Direct Deposit Processing" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{payrollProcessingFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Quarterly Sales Tax & Compliance Statement Prep" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{taxPreparationFee}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{currency}}{{subtotal}} | " },
            { type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{currency}}{{taxAmount}} | " },
            { type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{currency}}{{total}}" }
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Remit payment to {{firmName}} via {{paymentMethod}} within {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-commercial-shipping",
    slug: "invoice-commercial-shipping",
    title: "Commercial Shipping & Customs Export Invoice",
    description: "International customs-compliant commercial invoice featuring country of origin, HS codes, port of loading, and incoterms.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Commercial Customs Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "currency", "exporterName", "exporterAddress", "exporterTaxId",
        "importerName", "importerAddress", "importerTaxId", "countryOfOrigin", "countryOfDestination",
        "portOfLoading", "portOfDischarge", "incoterms", "billOfLading", "hsCode",
        "itemDescription", "quantityUnits", "unitPrice", "totalDeclaredValue", "freightCharges", "insuranceFee",
        "subtotal", "total", "authorizedSignature"
      ],
      layout: {
        header: "INTERNATIONAL COMMERCIAL CUSTOMS INVOICE",
        footer: "Declared for customs clearance and export border regulation compliance."
      },
      styles: { primaryColor: "#334155", secondaryColor: "#1e293b", layoutVariant: 4, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COMMERCIAL INVOICE (EXPORT / IMPORT)" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Shipper / Exporter: " },
            { type: "text", text: "{{exporterName}}, {{exporterAddress}} (Tax ID: {{exporterTaxId}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Consignee / Importer: " },
            { type: "text", text: "{{importerName}}, {{importerAddress}} (Tax ID: {{importerTaxId}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | B/L or AWB: {{billOfLading}} | Incoterms: {{incoterms}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", text: "Origin: {{countryOfOrigin}} | Destination: {{countryOfDestination}} | Loading: {{portOfLoading}} | Discharge: {{portOfDischarge}}" }
          ]},
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "HS Code" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Item Description" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Price" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Declared Total" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{hsCode}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{itemDescription}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{quantityUnits}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{currency}}{{unitPrice}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{currency}}{{totalDeclaredValue}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [
            { type: "text", text: "Merchandise Subtotal: {{currency}}{{subtotal}} | Freight: {{currency}}{{freightCharges}} | Insurance: {{currency}}{{insuranceFee}} | " },
            { type: "text", marks: [{ type: "bold" }], text: "Total Commercial Invoice Value: {{currency}}{{total}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", text: "I hereby certify that this invoice is true and correct in all particulars. Authorized Signature: {{authorizedSignature}}" }
          ]}
        ]
      }
    }
  },
  {
    id: "invoice-template-word",
    slug: "invoice-template-word",
    title: "Invoice Template Word (DOCX Format)",
    description: "Clean invoice template formatted for Microsoft Word and DOCX export with editable tables and company branding.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Microsoft Word Compatible Invoice",
      fields: ["invoiceNumber", "invoiceDate", "paymentDueDate", "companyName", "companyAddress", "companyEmail", "companyPhone", "clientName", "clientAddress", "subtotal", "tax", "taxAmount", "total", "paymentTerms"],
      layout: { header: "PROFESSIONAL WORD INVOICE TEMPLATE", footer: "Fully editable in Microsoft Word & Templix AI." },
      styles: { primaryColor: "#2563eb", secondaryColor: "#1d4ed8", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "INVOICE (WORD / DOCX COMPATIBLE)" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{companyAddress}} ({{companyEmail}} / {{companyPhone}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "To: " }, { type: "text", text: "{{clientName}}, {{clientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due: {{paymentDueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}} | Tax ({{tax}}): {{taxAmount}} | " }, { type: "text", marks: [{ type: "bold" }], text: "Total: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Terms: {{paymentTerms}}. Download as Word (.docx) or PDF." }] }
        ]
      }
    }
  },
  {
    id: "invoice-template-excel",
    slug: "invoice-template-excel",
    title: "Invoice Template Excel (Spreadsheet Grid)",
    description: "Grid-structured invoice layout styled after Microsoft Excel sheets with automated line calculations and tax subtotals.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Spreadsheet & Excel Invoice Template",
      fields: ["invoiceNumber", "invoiceDate", "paymentDueDate", "companyName", "companyAddress", "clientName", "clientAddress", "subtotal", "tax", "taxAmount", "total", "paymentTerms"],
      layout: { header: "EXCEL STYLE INVOICE TEMPLATE", footer: "Export ready for Microsoft Excel, Sheets & PDF." },
      styles: { primaryColor: "#16a34a", secondaryColor: "#15803d", layoutVariant: 5, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EXCEL GRID INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{companyAddress}} | Bill To: {{clientName}}, {{clientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due: {{paymentDueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Calculated Subtotal: " }, { type: "text", text: "{{subtotal}} | Tax ({{tax}}): {{taxAmount}} | " }, { type: "text", marks: [{ type: "bold" }], text: "Grand Total: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Terms: {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-template-google-sheets",
    slug: "invoice-template-google-sheets",
    title: "Invoice Template Google Sheets",
    description: "Google Sheets styled cloud invoice template with cell borders, auto-calculated line items, and cloud-ready layout.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Google Sheets Invoice Template",
      fields: ["invoiceNumber", "invoiceDate", "paymentDueDate", "companyName", "clientName", "subtotal", "tax", "taxAmount", "total", "paymentTerms"],
      layout: { header: "GOOGLE SHEETS CLOUD INVOICE", footer: "Compatible with Google Sheets & PDF Export." },
      styles: { primaryColor: "#0f9d58", secondaryColor: "#0b8043", layoutVariant: 3, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "GOOGLE SHEETS STYLE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Seller: {{companyName}} | Buyer: {{clientName}} | Inv #: {{invoiceNumber}} | Date: {{invoiceDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Tax ({{tax}}): {{taxAmount}} | Total Amount Due: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Terms: {{paymentTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "invoice-template-google-docs",
    slug: "invoice-template-google-docs",
    title: "Invoice Template Google Docs",
    description: "Minimalist document invoice template designed for seamless editing in Google Docs and instant PDF generation.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Google Docs Invoice Template",
      fields: ["invoiceNumber", "invoiceDate", "paymentDueDate", "companyName", "clientName", "subtotal", "tax", "taxAmount", "total", "paymentTerms"],
      layout: { header: "GOOGLE DOCS INVOICE FORMAT", footer: "Print and email ready invoice format." },
      styles: { primaryColor: "#4285f4", secondaryColor: "#1a73e8", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "GOOGLE DOCS FORMAT INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} | Client: {{clientName}} | Inv #: {{invoiceNumber}} | Due: {{paymentDueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Tax ({{tax}}): {{taxAmount}} | Balance Due: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Terms: {{paymentTerms}}." }] }
        ]
      }
    }
  },

  // ── RESUMES ────────────────────────────────────────────────────────────────
  {
    id: "resume-career-change",
    slug: "resume-career-change",
    title: "Career Change & Transition Resume Template",
    description: "Skills-first hybrid resume layout highlighting transferable capabilities, project portfolios, and relevant certifications.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Career Change Hybrid Resume",
      fields: [
        "fullName", "jobTitle", "email", "phone", "location", "linkedin", "portfolio",
        "professionalSummary", "transferableSkill1", "transferableSkill2", "transferableSkill3",
        "recentRole", "recentCompany", "recentDates", "recentBullet1", "recentBullet2",
        "previousRole", "previousCompany", "previousDates", "previousBullet1",
        "educationDegree", "educationSchool", "certifications"
      ],
      layout: { header: "CAREER TRANSITION RESUME", footer: "ATS-compliant skills-first resume blueprint." },
      styles: { primaryColor: "#4338ca", secondaryColor: "#3730a3", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{location}} | {{email}} | {{phone}} | {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{professionalSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Transferable Competencies" }] },
          { type: "paragraph", content: [
            { type: "text", text: "• {{transferableSkill1}}\n• {{transferableSkill2}}\n• {{transferableSkill3}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Relevant Experience & Projects" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "{{recentRole}} — {{recentCompany}} ({{recentDates}})" },
            { type: "text", text: "\n• {{recentBullet1}}\n• {{recentBullet2}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "{{previousRole}} — {{previousCompany}} ({{previousDates}})" },
            { type: "text", text: "\n• {{previousBullet1}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{educationDegree}}, {{educationSchool}} | Certifications: {{certifications}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-federal",
    slug: "resume-federal",
    title: "Federal Government (USAJOBS) Resume Template",
    description: "Compliant federal resume format including GS grade, citizenship, security clearance, supervisor contacts, and hours worked.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "USAJOBS Federal Resume",
      fields: [
        "fullName", "email", "phone", "address", "citizenship", "clearanceLevel", "veteranPreference",
        "targetGsGrade", "announcementNumber", "federalSummary",
        "fedJobTitle", "fedAgency", "fedDates", "hoursPerWeek", "fedSeriesGrade", "supervisorName", "supervisorContact",
        "fedDutiesAndAccomplishments", "educationDetails", "specializedTraining"
      ],
      layout: { header: "FEDERAL CIVIL SERVICE RESUME", footer: "USAJOBS and OPM compliant federal application layout." },
      styles: { primaryColor: "#0f172a", secondaryColor: "#334155", layoutVariant: 4, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}} — FEDERAL RESUME" }] },
          { type: "paragraph", content: [
            { type: "text", text: "Contact: {{address}} | {{phone}} | {{email}}\nCitizenship: {{citizenship}} | Clearance: {{clearanceLevel}} | Veterans Preference: {{veteranPreference}}\nTarget Announcement: {{announcementNumber}} (Target Grade: {{targetGsGrade}})" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive & Federal Qualifications Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{federalSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Federal & Professional Experience" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "{{fedJobTitle}} — {{fedAgency}}" },
            { type: "text", text: "\nDates: {{fedDates}} | Hours/Week: {{hoursPerWeek}} | Series & Grade: {{fedSeriesGrade}}\nSupervisor: {{supervisorName}} ({{supervisorContact}})\nKey Duties & Quantified Accomplishments:\n{{fedDutiesAndAccomplishments}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education, Certifications & Specialized Training" }] },
          { type: "paragraph", content: [{ type: "text", text: "Education: {{educationDetails}}\nSpecialized Training: {{specializedTraining}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-entry-level",
    slug: "resume-entry-level",
    title: "Entry-Level & First Job Resume Template",
    description: "Designed for high school grads, retail workers, and first-time applicants highlighting coursework, extracurriculars, and reliability.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "First Job Entry-Level Resume",
      fields: ["fullName", "email", "phone", "location", "objectiveStatement", "keyStrengths", "academicSchool", "gpaOrHonors", "relevantProjects", "extracurriculars", "volunteerWork"],
      layout: { header: "ENTRY-LEVEL APPLICATION RESUME", footer: "Clean single-column ATS entry-level layout." },
      styles: { primaryColor: "#0d9488", secondaryColor: "#0f766e", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{location}} | {{phone}} | {{email}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objective Statement" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{objectiveStatement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Strengths & Soft Skills" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyStrengths}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Academic Honors" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{academicSchool}} — Honors: {{gpaOrHonors}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Extracurriculars & Volunteer Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Projects: {{relevantProjects}}\nActivities: {{extracurriculars}}\nVolunteer Service: {{volunteerWork}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-healthcare-ats",
    slug: "resume-healthcare-ats",
    title: "Healthcare & Clinical Staff ATS Resume Template",
    description: "EHR/HIPAA scanner-friendly medical resume detailing clinical rotations, BLS/ACLS certifications, and patient ratios.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Clinical Healthcare ATS Resume",
      fields: ["fullName", "clinicalTitle", "licenseNumber", "email", "phone", "location", "clinicalSummary", "ehrSoftwareSkills", "hospitalExperience", "patientCareMetrics", "nursingDegree", "certificationsList"],
      layout: { header: "HEALTHCARE & CLINICAL ATS RESUME", footer: "HIPAA and HRXML compliant medical credentials format." },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}, {{clinicalTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "State License #: {{licenseNumber}} | {{location}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Profile" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{clinicalSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "EHR & Medical Technical Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{ehrSoftwareSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hospitalExperience}}\nPatient Care Metrics: {{patientCareMetrics}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Licensing" }] },
          { type: "paragraph", content: [{ type: "text", text: "Degree: {{nursingDegree}} | Certifications: {{certificationsList}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-finance-ats",
    slug: "resume-finance-ats",
    title: "Finance & Accounting ATS Resume Template",
    description: "Tailored for FP&A, GAAP accounting, corporate valuation, DCF modeling, and financial analyst roles.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Finance & FP&A ATS Resume",
      fields: ["fullName", "financeTitle", "email", "phone", "location", "linkedin", "summaryText", "financialModelingSkills", "roleTitle1", "company1", "dates1", "bullet1a", "bullet1b", "educationDegree", "cpaOrCfaDetails"],
      layout: { header: "FINANCE & FP&A ATS RESUME", footer: "Strict single-column quantitative finance format." },
      styles: { primaryColor: "#0f766e", secondaryColor: "#115e59", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}} — {{financeTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{location}} | {{email}} | {{phone}} | {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summaryText}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Modeling & Technical Skills" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{financialModelingSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience & Valuation Track Record" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{roleTitle1}} — {{company1}} ({{dates1}})\n• {{bullet1a}}\n• {{bullet1b}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Professional Credentials" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{educationDegree}} | Certifications: {{cpaOrCfaDetails}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-marketing-ats",
    slug: "resume-marketing-ats",
    title: "Digital Marketing & Growth ATS Resume",
    description: "Built for SEO specialists, performance marketers, and growth leads highlighting CAC, ROAS, and HubSpot/Google tools.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Growth Marketing ATS Resume",
      fields: ["fullName", "marketingTitle", "email", "phone", "location", "linkedin", "portfolio", "summaryText", "marketingTechStack", "experienceCompany", "experienceRole", "experienceDates", "growthMetricsBullet1", "growthMetricsBullet2", "educationDegree"],
      layout: { header: "PERFORMANCE MARKETING ATS RESUME", footer: "Data-driven growth marketing layout." },
      styles: { primaryColor: "#d97706", secondaryColor: "#b45309", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}} — {{marketingTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{location}} | {{email}} | {{phone}} | {{linkedin}} | {{portfolio}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Growth Marketing Profile" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summaryText}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Ad Tech & Marketing Stack" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{marketingTechStack}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Growth Experience & Campaign Metrics" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{experienceRole}} — {{experienceCompany}} ({{experienceDates}})\n• {{growthMetricsBullet1}}\n• {{growthMetricsBullet2}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{educationDegree}}" }] }
        ]
      }
    }
  },

  // ── CONTRACTS ──────────────────────────────────────────────────────────────
  {
    id: "simple-nda-agreement",
    slug: "simple-nda-agreement",
    title: "Simple Mutual Non-Disclosure Agreement (NDA)",
    description: "Standard bilateral NDA protecting proprietary business information, intellectual property, and trade secrets.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Mutual Non-Disclosure Agreement",
      fields: ["partyAName", "partyACompany", "partyBName", "partyBCompany", "purposeOfDisclosure", "termYears", "governingState", "effectiveDate", "partyASignature", "partyBSignature"],
      layout: { header: "MUTUAL NON-DISCLOSURE AGREEMENT", footer: "Legally binding confidentiality agreement." },
      styles: { primaryColor: "#1e293b", secondaryColor: "#475569", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MUTUAL NON-DISCLOSURE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyAName}} ({{partyACompany}}) and {{partyBName}} ({{partyBCompany}})." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Purpose of Disclosure" }] },
          { type: "paragraph", content: [{ type: "text", text: "The parties desire to disclose confidential information solely for the evaluation of: {{purposeOfDisclosure}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Confidentiality Obligations & Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "Each party agrees to hold all proprietary data in strict confidence for a period of {{termYears}} years. Governed by the laws of {{governingState}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Party A Signature: {{partyASignature}}\nParty B Signature: {{partyBSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "seo-service-contract",
    slug: "seo-service-contract",
    title: "SEO Retainer & Services Contract",
    description: "Agency SEO agreement specifying monthly scope, technical audits, reporting cadences, KPI benchmarks, and retainer fees.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "SEO Services Agreement",
      fields: ["agencyName", "agencyAddress", "clientName", "clientCompanyName", "monthlyRetainer", "scopeDeliverables", "reportingCadence", "minimumTermMonths", "startDate", "agencySignature", "clientSignature"],
      layout: { header: "SEARCH ENGINE OPTIMIZATION SERVICE CONTRACT", footer: "Standard commercial SEO retainer agreement." },
      styles: { primaryColor: "#2563eb", secondaryColor: "#1d4ed8", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SEO SERVICES RETAINER AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agency: {{agencyName}} ({{agencyAddress}}) | Client: {{clientName}}, {{clientCompanyName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Work & Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Agency will perform: {{scopeDeliverables}}. Monthly performance reports provided on a {{reportingCadence}} schedule." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Fees & Agreement Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "Monthly Retainer Fee: {{monthlyRetainer}}. Initial commitment term: {{minimumTermMonths}} months beginning {{startDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agency Authorized: {{agencySignature}}\nClient Authorized: {{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "web-design-contract",
    slug: "web-design-contract",
    title: "Web Design & Development Contract",
    description: "Detailed web development agreement covering milestone deliverables, Figma approvals, revision limits, and copyright ownership.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Web Design Contract",
      fields: ["designerName", "designerBusiness", "clientName", "clientCompany", "totalProjectFee", "depositAmount", "milestoneSchedule", "revisionRounds", "ipTransferTerms", "designerSignature", "clientSignature"],
      layout: { header: "WEB DESIGN & DEVELOPMENT AGREEMENT", footer: "Complete digital intellectual property agreement." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#6d28d9", layoutVariant: 3, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEB DESIGN & DEVELOPMENT CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Designer: {{designerName}} ({{designerBusiness}}) | Client: {{clientName}} ({{clientCompany}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Project Phases & Milestones" }] },
          { type: "paragraph", content: [{ type: "text", text: "Milestones and Deliverables: {{milestoneSchedule}}. Includes up to {{revisionRounds}} revision rounds per phase." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Payment & Intellectual Property" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Fee: {{totalProjectFee}} (Deposit: {{depositAmount}}). Intellectual Property: {{ipTransferTerms}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Designer: {{designerSignature}}\nClient: {{clientSignature}}" }] }
        ]
      }
    }
  },

  // ── PROPOSALS ──────────────────────────────────────────────────────────────
  {
    id: "seo-proposal",
    slug: "seo-proposal",
    title: "SEO Audit & Search Strategy Proposal",
    description: "Agency pitch proposal outlining organic traffic audits, keyword roadmaps, competitor benchmarks, and expected ROI.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Business Proposals",
    content: {
      title: "SEO Strategy Proposal",
      fields: ["agencyName", "clientName", "clientWebsite", "executiveSummary", "technicalAuditFindings", "targetKeywords", "monthlyFee", "projectedGrowth", "agencyRepresentative"],
      layout: { header: "SEARCH ENGINE MARKETING PROPOSAL", footer: "Prepared exclusively for client consideration." },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SEO AUDIT & ORGANIC GROWTH PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by: {{agencyName}} | Target: {{clientName}} ({{clientWebsite}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Audit Findings & Strategic Keyword Roadmap" }] },
          { type: "paragraph", content: [{ type: "text", text: "Technical Findings: {{technicalAuditFindings}}\nTarget Keywords: {{targetKeywords}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investment & Projected ROI" }] },
          { type: "paragraph", content: [{ type: "text", text: "Monthly Engagement Investment: {{monthlyFee}}\nProjected Organic Growth: {{projectedGrowth}}\nPrepared by: {{agencyRepresentative}}" }] }
        ]
      }
    }
  },
  {
    id: "web-design-proposal",
    slug: "web-design-proposal",
    title: "Web Design & UI/UX Agency Proposal",
    description: "Pitch web redesigns, mobile-first UX prototypes, tech stack implementations, and project sprint budgets.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Business Proposals",
    content: {
      title: "Web Design Proposal",
      fields: ["studioName", "clientName", "projectObjective", "uiUxApproach", "technicalStack", "sprintTimeline", "totalInvestment", "studioLead"],
      layout: { header: "WEBSITE REDESIGN PROPOSAL", footer: "Creative & Technical Design Blueprint." },
      styles: { primaryColor: "#0f766e", secondaryColor: "#115e59", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEBSITE DESIGN & UI/UX PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Studio: {{studioName}} | Client: {{clientName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Project Goals & Design Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Objective: {{projectObjective}}\nDesign Approach: {{uiUxApproach}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Tech Stack & Implementation Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Tech Stack: {{technicalStack}}\nSprint Schedule: {{sprintTimeline}}\nTotal Project Investment: {{totalInvestment}}\nPresented by: {{studioLead}}" }] }
        ]
      }
    }
  },
  {
    id: "sponsorship-proposal",
    slug: "sponsorship-proposal",
    title: "Corporate Sponsorship & Event Proposal",
    description: "Attract corporate sponsors with tiered packaging (Gold, Silver, Bronze), attendee demographics, and brand exposure ROI.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Business Proposals",
    content: {
      title: "Corporate Event Sponsorship Proposal",
      fields: ["eventName", "eventDate", "eventLocation", "organizerName", "audienceDemographics", "tierGoldFee", "tierGoldBenefits", "tierSilverFee", "tierSilverBenefits", "sponsorContact"],
      layout: { header: "CORPORATE SPONSORSHIP OPPORTUNITY", footer: "Sponsorship prospectus and partnership terms." },
      styles: { primaryColor: "#ea580c", secondaryColor: "#c2410c", layoutVariant: 3, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{eventName}} — SPONSORSHIP PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{eventDate}} | Location: {{eventLocation}} | Organizer: {{organizerName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Audience Reach & Demographics" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{audienceDemographics}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sponsorship Packages & Brand Benefits" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Gold Tier ({{tierGoldFee}}): " }, { type: "text", text: "{{tierGoldBenefits}}\n" },
            { type: "text", marks: [{ type: "bold" }], text: "Silver Tier ({{tierSilverFee}}): " }, { type: "text", text: "{{tierSilverBenefits}}" }
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Secure your sponsorship: {{sponsorContact}}" }] }
        ]
      }
    }
  },
  {
    id: "construction-bid-proposal",
    slug: "construction-bid-proposal",
    title: "Construction Bid & Contractor Proposal",
    description: "Detailed construction estimate proposal breaking down labor, materials, equipment, insurance, and building timelines.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Business Proposals",
    content: {
      title: "Construction Contractor Bid Proposal",
      fields: ["contractorName", "licenseNumber", "clientName", "projectSiteAddress", "scopeOfWork", "materialsCost", "laborCost", "permitsCost", "totalBidAmount", "estimatedDuration", "warrantyTerms"],
      layout: { header: "CONSTRUCTION PROJECT BID & ESTIMATE", footer: "Licensed and bonded contractor proposal." },
      styles: { primaryColor: "#d97706", secondaryColor: "#b45309", layoutVariant: 4, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSTRUCTION PROJECT BID PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contractor: {{contractorName}} (License: {{licenseNumber}}) | Client: {{clientName}} | Site: {{projectSiteAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope of Work & Specification" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{scopeOfWork}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Cost Breakdown & Total Bid Estimate" }] },
          { type: "paragraph", content: [
            { type: "text", text: "Materials: {{materialsCost}} | Labor: {{laborCost}} | Permits & Fees: {{permitsCost}}\n" },
            { type: "text", marks: [{ type: "bold" }], text: "Total Guaranteed Bid: {{totalBidAmount}}" }
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Estimated Schedule: {{estimatedDuration}} | Warranty: {{warrantyTerms}}" }] }
        ]
      }
    }
  },
  {
    id: "quote-vs-invoice-estimate",
    slug: "quote-vs-invoice-estimate",
    title: "Formal Price Quotation & Project Cost Estimate",
    description: "Clear formal quotation explicitly distinguishing fixed quoted prices from preliminary estimates and post-delivery invoices.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Price Quotations",
    content: {
      title: "Commercial Price Quotation",
      fields: ["quotationNumber", "quotationDate", "validUntilDate", "vendorName", "vendorAddress", "clientName", "clientAddress", "scopeSummary", "itemizedQuote", "estimatedTotal", "validityTerms", "acceptanceSignature"],
      layout: { header: "OFFICIAL COMMERCIAL PRICE QUOTATION", footer: "Quotation is a fixed-price commitment valid through the stated expiration date." },
      styles: { primaryColor: "#059669", secondaryColor: "#047857", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COMMERCIAL PRICE QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quotationNumber}} | Date: {{quotationDate}} | Valid Through: {{validUntilDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Vendor: {{vendorName}} ({{vendorAddress}}) | Client: {{clientName}} ({{clientAddress}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope Summary (Fixed-Price Quote vs. Variable Estimate)" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{scopeSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Itemized Deliverables & Fixed Costs" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{itemizedQuote}}\nTotal Guaranteed Quoted Amount: {{estimatedTotal}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Terms of Acceptance" }] },
          { type: "paragraph", content: [{ type: "text", text: "Validity & Conversion Terms: {{validityTerms}}. Upon signature, an official invoice will be generated.\nAuthorized Acceptance Signature: {{acceptanceSignature}}" }] }
        ]
      }
    }
  }
];
