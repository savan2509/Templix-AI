// India-relevant document templates (free): a GST Quotation, a Joining Letter
// and a Vehicle Sale Agreement. Authored with Indian names, addresses, ₹ amounts
// and the tax/compliance fields Indian users expect.

export const indiaExtraTemplates: any[] = [
  {
    id: "gst-quotation",
    slug: "gst-quotation",
    title: "Quotation Format with GST Template",
    description: "Free GST quotation format for India with HSN/SAC codes, CGST, SGST and IGST breakup in ₹, editable and downloadable as PDF or Word.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Quotation Format with GST Template",
      fields: ["sellerName", "sellerAddress", "sellerGstin", "buyerName", "buyerAddress", "buyerGstin", "quoteNumber", "quoteDate", "validUntil", "taxableSubtotal", "cgstAmount", "sgstAmount", "grandTotal", "grandTotalWords"],
      layout: {
        header: "QUOTATION",
        footer: "This quotation is valid only until the date mentioned above and is subject to the terms stated herein."
      },
      styles: {
        primaryColor: "#1d4ed8",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Quote No.: " }, { type: "text", text: "{{quoteNumber}}     Date: {{quoteDate}}     Valid Until: {{validUntil}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "From (Seller)" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Name: " }, { type: "text", text: "{{sellerName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Address: " }, { type: "text", text: "{{sellerAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "GSTIN: " }, { type: "text", text: "{{sellerGstin}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sample: Ganesh Traders, Shop 8, Laxmi Road, Pune, Maharashtra - 411002. GSTIN 27ABCDE1234F1Z5." }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "To (Buyer)" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Name: " }, { type: "text", text: "{{buyerName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Address: " }, { type: "text", text: "{{buyerAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "GSTIN: " }, { type: "text", text: "{{buyerGstin}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sample: Rajesh Kumar, Sunrise Apartments, Baner, Pune, Maharashtra - 411045. GSTIN 27PQRSX6789K1Z2." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Itemised Quotation" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Sr" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "HSN/SAC" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate (₹)" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Taxable Value (₹)" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "GST %" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount (₹)" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Office Chair (Ergonomic)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "9401" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹4,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹45,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹53,100" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Study Table (Wooden)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "9403" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹6,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹30,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹35,400" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Tax Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Taxable Subtotal: " }, { type: "text", text: "₹{{taxableSubtotal}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "CGST (9%): " }, { type: "text", text: "₹{{cgstAmount}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "SGST (9%): " }, { type: "text", text: "₹{{sgstAmount}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Note: For inter-state supply, replace CGST + SGST with a single IGST (18%) line." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Grand Total: " }, { type: "text", text: "₹{{grandTotal}} (Rupees {{grandTotalWords}} only)" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Terms &amp; Conditions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "This quotation is valid until {{validUntil}}." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Transport, packing and forwarding charges are extra unless stated otherwise." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment terms: 50% advance with order, balance before dispatch." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prices are subject to change if the order is placed after the validity date." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "______________________________" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "For {{sellerName}} (Authorised Signatory)" }] }
        ]
      }
    }
  },
  {
    id: "joining-letter",
    slug: "joining-letter",
    title: "Joining Letter Format Template",
    description: "Free joining letter format for India confirming an employee's date of joining, designation, department and CTC, editable and downloadable as PDF or Word.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Joining Letter Format Template",
      fields: ["companyName", "companyAddress", "letterDate", "employeeName", "employeeAddress", "designation", "department", "joiningDate", "reportingManager", "ctc", "workLocation", "hrName", "hrDesignation"],
      layout: {
        header: "JOINING LETTER",
        footer: "This joining letter confirms your commencement of employment and is issued on the company letterhead."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#5b21b6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sample: Infotech Solutions Pvt. Ltd., 5th Floor, Cyber Towers, Hinjawadi, Pune, Maharashtra - 411057." }] },
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "JOINING LETTER" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Date: " }, { type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "To, " }] },
          { type: "paragraph", content: [{ type: "text", text: "{{employeeName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{employeeAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subject: Confirmation of Joining" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{employeeName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "We are delighted to welcome you to {{companyName}}. This letter confirms that you have joined the organisation and formally records the details of your employment as set out below." }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Employment Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Particulars" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Details" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Employee Name" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{employeeName}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Designation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{designation}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Department" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{department}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Date of Joining" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{joiningDate}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Reporting Manager" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{reportingManager}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual CTC" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{ctc}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Work Location" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{workLocation}}" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "You are requested to report to {{reportingManager}} at {{workLocation}} on {{joiningDate}}. We look forward to a long and mutually rewarding association, and wish you great success in your new role." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This joining letter only confirms that you have joined the company. It is different from an offer letter or appointment letter, which contain the full terms and conditions of employment." }] },
          { type: "paragraph", content: [{ type: "text", text: "Warm regards," }] },
          { type: "paragraph", content: [{ type: "text", text: "______________________________" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{hrName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrDesignation}}, {{companyName}}" }] }
        ]
      }
    }
  },
  {
    id: "vehicle-sale-agreement",
    slug: "vehicle-sale-agreement",
    title: "Vehicle Sale Agreement Format Template",
    description: "Free vehicle sale agreement format for India covering registration, engine and chassis numbers, sale amount in ₹ and RC transfer, downloadable as PDF or Word.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Vehicle Sale Agreement Format Template",
      fields: ["agreementDate", "agreementPlace", "sellerName", "sellerAddress", "buyerName", "buyerAddress", "vehicleMakeModel", "registrationNumber", "engineNumber", "chassisNumber", "manufactureYear", "saleAmount", "saleAmountWords", "possessionDate", "witnessOneName", "witnessTwoName"],
      layout: {
        header: "VEHICLE SALE AGREEMENT",
        footer: "Executed in duplicate, both parties retaining one signed copy each."
      },
      styles: {
        primaryColor: "#b91c1c",
        secondaryColor: "#7f1d1d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "VEHICLE SALE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Vehicle Sale Agreement is made at {{agreementPlace}} on {{agreementDate}} between the parties named below." }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Seller: " }, { type: "text", text: "{{sellerName}}, residing at {{sellerAddress}} (hereinafter referred to as the \"Seller\")." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Buyer: " }, { type: "text", text: "{{buyerName}}, residing at {{buyerAddress}} (hereinafter referred to as the \"Buyer\")." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sample: Seller Suresh Patil, Kothrud, Pune - 411038; Buyer Anil Deshmukh, Wakad, Pune - 411057." }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Vehicle Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Particulars" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Details" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Make &amp; Model" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{vehicleMakeModel}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Registration No." }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{registrationNumber}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Engine No." }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{engineNumber}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Chassis No." }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{chassisNumber}}" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Year of Manufacture" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{manufactureYear}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Sale Consideration &amp; Terms" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The Seller has sold the above vehicle to the Buyer for a total sale consideration of ₹{{saleAmount}} (Rupees {{saleAmountWords}} only), the receipt of which the Seller hereby acknowledges." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The vehicle is sold on an as-is-where-is basis, and the Buyer has inspected and is satisfied with its condition." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Possession of the vehicle is handed over to the Buyer on {{possessionDate}}." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The Buyer shall be responsible for the transfer of the Registration Certificate (RC) into the Buyer's name at the concerned RTO." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All liabilities, fines, taxes, accidents and legal responsibilities arising after {{possessionDate}} shall be borne solely by the Buyer, and those before that date by the Seller." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Disclaimer: " }, { type: "text", text: "This document is provided for general information only and is not legal advice. Please have it reviewed by a qualified advocate and notarised before use." }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "______________________________          ______________________________" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Seller: {{sellerName}}          Buyer: {{buyerName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Witnesses" }] },
          { type: "paragraph", content: [{ type: "text", text: "1. {{witnessOneName}}     ______________________________" }] },
          { type: "paragraph", content: [{ type: "text", text: "2. {{witnessTwoName}}     ______________________________" }] }
        ]
      }
    }
  }
];
