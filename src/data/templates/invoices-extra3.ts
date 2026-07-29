// invoices-extra3.ts — 10 additional invoice templates (Week 2)
export const invoicesExtra3Templates: any[] = [
  {
    id: "invoice-payment-reminder",
    slug: "invoice-payment-reminder",
    title: "Payment Reminder Invoice Template",
    description: "Free payment reminder invoice template. Re-sends the original invoice details with an overdue notice, late fee calculation, and payment instructions.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Payment Reminder Invoice Template",
      fields: ["companyName","companyAddress","clientName","invoiceNumber","invoiceDate","dueDate","originalAmount","lateFee","totalDue","paymentMethod"],
      layout: { header: "PAYMENT REMINDER NOTICE", footer: "Please settle your balance immediately to avoid further fees." },
      styles: { primaryColor: "#dc2626", secondaryColor: "#7f1d1d", layoutVariant: 0, headingStyle: 0 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PAYMENT REMINDER NOTICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{companyAddress}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "To: " }, { type: "text", text: "{{clientName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Re: Invoice #{{invoiceNumber}} — Overdue Since {{dueDate}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "This is a reminder that Invoice #{{invoiceNumber}}, issued on {{invoiceDate}}, is now past its due date of {{dueDate}}." }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Original invoice amount" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{originalAmount}}" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Late payment fee (1.5%/month)" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{lateFee}}" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Amount Due" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{totalDue}}" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment Instructions: " }, { type: "text", text: "{{paymentMethod}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "Please remit payment immediately. Further delays may result in additional fees or referral to a debt collection agency." }] }
      ] }
    }
  },
  {
    id: "invoice-milestone",
    slug: "invoice-milestone",
    title: "Milestone Invoice Template",
    description: "Free milestone invoice template for freelancers and agencies billing at project checkpoints — deposit, mid-project, and final payment.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Milestone Invoice Template",
      fields: ["companyName","companyAddress","clientName","projectName","invoiceNumber","invoiceDate","dueDate","milestoneName","milestonePercent","milestoneAmount","totalProjectFee","paymentTerms"],
      layout: { header: "MILESTONE INVOICE", footer: "Thank you for your business." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#4c1d95", layoutVariant: 1, headingStyle: 0 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MILESTONE INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{companyAddress}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "To: " }, { type: "text", text: "{{clientName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Project: " }, { type: "text", text: "{{projectName}}   Invoice #: {{invoiceNumber}}   Date: {{invoiceDate}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Milestone" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "% of Total" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount Due" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{milestoneName}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{milestonePercent}}%" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{milestoneAmount}}" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Project Fee: " }, { type: "text", text: "{{totalProjectFee}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "This Invoice ({{milestonePercent}}%): " }, { type: "text", text: "{{milestoneAmount}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment Terms: " }, { type: "text", text: "{{paymentTerms}}" }] }
      ] }
    }
  },
  {
    id: "invoice-deposit",
    slug: "invoice-deposit",
    title: "Deposit Invoice Template",
    description: "Free deposit invoice template. Request an upfront deposit before project work begins — 25%, 50%, or any custom percentage of the total fee.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Deposit Invoice Template",
      fields: ["companyName","companyAddress","clientName","projectName","invoiceNumber","invoiceDate","dueDate","totalFee","depositPercent","depositAmount","remainingBalance","paymentMethod"],
      layout: { header: "DEPOSIT INVOICE", footer: "Work will commence upon receipt of deposit payment." },
      styles: { primaryColor: "#059669", secondaryColor: "#064e3b", layoutVariant: 2, headingStyle: 0 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DEPOSIT INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{companyAddress}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "To: " }, { type: "text", text: "{{clientName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Project: " }, { type: "text", text: "{{projectName}}   Invoice #: {{invoiceNumber}}   Date: {{invoiceDate}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Total project fee for {{projectName}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{totalFee}}" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Deposit Due Now ({{depositPercent}}%)" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{depositAmount}}" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Remaining balance (due on project completion)" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{remainingBalance}}" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Pay via: " }, { type: "text", text: "{{paymentMethod}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "Work will commence upon receipt of the deposit. A final invoice for the remaining balance will be issued on completion." }] }
      ] }
    }
  },
  {
    id: "invoice-subscription",
    slug: "invoice-subscription",
    title: "Subscription Invoice Template",
    description: "Free recurring subscription invoice template for SaaS, membership, and service businesses billing monthly or annually.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Subscription Invoice Template",
      fields: ["companyName","companyAddress","clientName","subscriptionPlan","billingPeriod","invoiceNumber","invoiceDate","dueDate","planFee","tax","total","paymentMethod"],
      layout: { header: "SUBSCRIPTION INVOICE", footer: "Manage your subscription at {{companyName}}." },
      styles: { primaryColor: "#2563eb", secondaryColor: "#1e3a8a", layoutVariant: 3, headingStyle: 0 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SUBSCRIPTION INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}}, {{companyAddress}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subscriber: " }, { type: "text", text: "{{clientName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Issued: {{invoiceDate}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Plan" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Billing Period" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{subscriptionPlan}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{billingPeriod}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{planFee}}" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}}" }] }
      ] }
    }
  },
  {
    id: "invoice-retainer",
    slug: "invoice-retainer",
    title: "Retainer Invoice Template",
    description: "Free monthly retainer invoice template for consultants, lawyers, and agencies billing clients on a recurring monthly retainer basis.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Retainer Invoice Template",
      fields: ["companyName","companyAddress","clientName","retainerScope","billingMonth","invoiceNumber","invoiceDate","dueDate","retainerFee","hoursIncluded","additionalHours","additionalHoursRate","additionalAmount","tax","total","paymentMethod"],
      layout: { header: "MONTHLY RETAINER INVOICE", footer: "Thank you for our ongoing partnership." },
      styles: { primaryColor: "#0891b2", secondaryColor: "#164e63", layoutVariant: 4, headingStyle: 0 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MONTHLY RETAINER INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{companyName}}, {{companyAddress}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Billing Month: {{billingMonth}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly retainer — {{retainerScope}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{hoursIncluded}} hrs" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fixed" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{retainerFee}}" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Additional hours ({{additionalHours}} hrs × {{additionalHoursRate}})" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{additionalHours}} hrs" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{additionalHoursRate}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{additionalAmount}}" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Pay via: " }, { type: "text", text: "{{paymentMethod}}" }] }
      ] }
    }
  },
  {
    id: "invoice-medical-services",
    slug: "invoice-medical-services",
    title: "Medical Services Invoice Template",
    description: "Free medical services invoice template for private clinics, therapists, and independent practitioners billing patients for consultations and procedures.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Medical Services Invoice Template",
      fields: ["providerName","providerAddress","providerNPI","patientName","patientDOB","invoiceNumber","invoiceDate","dueDate","serviceCodes","subtotal","insurance","patientDue","paymentMethod"],
      layout: { header: "MEDICAL SERVICES INVOICE", footer: "Please retain this document for your medical and insurance records." },
      styles: { primaryColor: "#0369a1", secondaryColor: "#0c4a6e", layoutVariant: 5, headingStyle: 0 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MEDICAL SERVICES INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{providerName}}, {{providerAddress}}   NPI: {{providerNPI}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Patient: " }, { type: "text", text: "{{patientName}}   DOB: {{patientDOB}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Date: {{invoiceDate}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service / CPT Code" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Charge" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "99213" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Office visit — established patient, moderate complexity" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$150.00" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "85025" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Complete blood count (CBC)" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45.00" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Insurance Adjustment: " }, { type: "text", text: "{{insurance}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Patient Balance Due: " }, { type: "text", text: "{{patientDue}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment accepted via: " }, { type: "text", text: "{{paymentMethod}}" }] }
      ] }
    }
  },
  {
    id: "invoice-cleaning-services",
    slug: "invoice-cleaning-services",
    title: "Cleaning Services Invoice Template",
    description: "Free cleaning services invoice template for residential and commercial cleaners to bill for regular cleaning, deep cleaning, and end-of-tenancy services.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Cleaning Services Invoice Template",
      fields: ["companyName","companyAddress","companyPhone","clientName","propertyAddress","invoiceNumber","invoiceDate","dueDate","subtotal","tax","total","paymentMethod","paymentTerms"],
      layout: { header: "CLEANING SERVICES INVOICE", footer: "Thank you for choosing {{companyName}}. We look forward to keeping your space spotless." },
      styles: { primaryColor: "#0d9488", secondaryColor: "#134e4a", layoutVariant: 0, headingStyle: 1 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CLEANING SERVICES INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "From: " }, { type: "text", text: "{{companyName}}, {{companyAddress}} — {{companyPhone}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "To: " }, { type: "text", text: "{{clientName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Property: " }, { type: "text", text: "{{propertyAddress}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Date: {{invoiceDate}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Frequency" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Regular domestic clean (3-bed)" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Weekly × 4" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$75/visit" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$300.00" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Oven and appliance deep clean" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Once" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65/clean" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$65.00" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Window cleaning (interior)" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Once" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$40/clean" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$40.00" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment: " }, { type: "text", text: "{{paymentMethod}} — {{paymentTerms}}" }] }
      ] }
    }
  },
  {
    id: "invoice-photography",
    slug: "invoice-photography",
    title: "Photography Invoice Template",
    description: "Free photography invoice template for photographers billing for weddings, portraits, events, and commercial shoots — with usage rights clause.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Photography Invoice Template",
      fields: ["photographerName","photographerAddress","photographerPhone","clientName","eventType","eventDate","invoiceNumber","invoiceDate","dueDate","shootFee","editingFee","printFee","usageRights","subtotal","tax","total","depositPaid","balanceDue","paymentMethod"],
      layout: { header: "PHOTOGRAPHY INVOICE", footer: "Images remain the copyright of {{photographerName}} until paid in full." },
      styles: { primaryColor: "#1d4ed8", secondaryColor: "#1e3a8a", layoutVariant: 1, headingStyle: 1 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PHOTOGRAPHY INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Photographer: " }, { type: "text", text: "{{photographerName}}, {{photographerAddress}} — {{photographerPhone}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Event: " }, { type: "text", text: "{{eventType}} — {{eventDate}}   Invoice #: {{invoiceNumber}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Photography session (8 hrs)" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{shootFee}}" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Post-processing & editing (200 images)" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{editingFee}}" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Print package ({{usageRights}})" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{printFee}}" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Deposit Paid: " }, { type: "text", text: "{{depositPaid}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Balance Due: " }, { type: "text", text: "{{balanceDue}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Pay via: " }, { type: "text", text: "{{paymentMethod}}" }] }
      ] }
    }
  },
  {
    id: "invoice-legal-services",
    slug: "invoice-legal-services",
    title: "Legal Services Invoice Template",
    description: "Free legal services invoice template for solicitors, barristers, and paralegals to bill clients for time, disbursements, and court fees.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Legal Services Invoice Template",
      fields: ["firmName","firmAddress","firmSolicitorRef","clientName","clientRef","matterDescription","invoiceNumber","invoiceDate","dueDate","fees","disbursements","vat","total","paymentDetails"],
      layout: { header: "SOLICITOR'S INVOICE", footer: "This firm is regulated by the Solicitors Regulation Authority." },
      styles: { primaryColor: "#1e40af", secondaryColor: "#1e3a8a", layoutVariant: 2, headingStyle: 1 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOLICITOR'S INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Firm: " }, { type: "text", text: "{{firmName}}, {{firmAddress}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}   Ref: {{clientRef}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Matter: " }, { type: "text", text: "{{matterDescription}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Date: {{invoiceDate}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Review of contract documentation" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3.0" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "£250" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "£750.00" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Client call and correspondence" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1.5" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "£250" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "£375.00" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Professional Fees: " }, { type: "text", text: "{{fees}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Disbursements: " }, { type: "text", text: "{{disbursements}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "VAT (20%): " }, { type: "text", text: "{{vat}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Payment details: " }, { type: "text", text: "{{paymentDetails}}" }] }
      ] }
    }
  },
  {
    id: "invoice-tutoring",
    slug: "invoice-tutoring",
    title: "Tutoring Invoice Template",
    description: "Free tutoring invoice template for private tutors and tutoring agencies to bill parents or students for lesson hours and educational services.",
    isPremium: false, categorySlug: "invoices", categoryName: "Invoices",
    content: {
      title: "Tutoring Invoice Template",
      fields: ["tutorName","tutorEmail","studentName","parentName","subject","billingPeriod","invoiceNumber","invoiceDate","dueDate","hours","hourlyRate","subtotal","tax","total","paymentMethod"],
      layout: { header: "TUTORING INVOICE", footer: "Thank you for investing in your child's education." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#4c1d95", layoutVariant: 3, headingStyle: 1 },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TUTORING INVOICE" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tutor: " }, { type: "text", text: "{{tutorName}} — {{tutorEmail}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Student: " }, { type: "text", text: "{{studentName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Parent/Guardian: " }, { type: "text", text: "{{parentName}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}   Billing Period: {{billingPeriod}}   Due: {{dueDate}}" }] },
        { type: "table", content: [
          { type: "tableRow", content: [{ type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Subject" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hours" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Hourly Rate" }] }] }, { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }] },
          { type: "tableRow", content: [{ type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{subject}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{hours}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{hourlyRate}}" }] }] }, { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{subtotal}}" }] }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tax: " }, { type: "text", text: "{{tax}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Due: " }, { type: "text", text: "{{total}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Pay via: " }, { type: "text", text: "{{paymentMethod}}" }] }
      ] }
    }
  },
];
