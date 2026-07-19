// India-specific document templates (free). Rent Receipt for HRA and a
// GST Delivery Challan, both authored with Indian names, addresses, ₹ amounts
// and the tax/compliance fields Indian users expect.

export const indiaInvoicesTemplates: any[] = [
  {
    id: "rent-receipt",
    slug: "rent-receipt",
    title: "Rent Receipt Format for HRA Template",
    description: "Free rent receipt format for HRA exemption claims in India, with landlord PAN and revenue stamp notes, downloadable as PDF or Word.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Rent Receipt Format for HRA Template",
      fields: ["tenantName", "landlordName", "rentAmount", "rentAmountWords", "rentPeriod", "propertyAddress", "paymentMode", "paymentDate", "landlordPan", "receiptNumber"],
      layout: {
        header: "RENT RECEIPT",
        footer: "Retain this receipt for your HRA exemption and income tax records."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#134e4a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RENT RECEIPT" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Receipt No.: " }, { type: "text", text: "{{receiptNumber}}     Date: {{paymentDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Received with thanks from " }, { type: "text", marks: [{ type: "bold" }], text: "{{tenantName}}" }, { type: "text", text: " the sum of " }, { type: "text", marks: [{ type: "bold" }], text: "₹{{rentAmount}}" }, { type: "text", text: " (Rupees {{rentAmountWords}} only) towards rent for the period {{rentPeriod}}." }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Property Details" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Rented Premises: " }, { type: "text", text: "{{propertyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sample: Flat No. 402, Shivneri Residency, Kothrud, Pune, Maharashtra - 411038." }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Payment Details" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rent Period" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount (₹)" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Payment Mode" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{rentPeriod}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{rentAmount}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{paymentMode}}" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Landlord Details" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Received By (Landlord): " }, { type: "text", text: "{{landlordName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord PAN: " }, { type: "text", text: "{{landlordPan}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "Landlord PAN is required if annual rent exceeds ₹1,00,000, for HRA exemption claims." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Revenue Stamp: " }, { type: "text", text: "Affix a ₹1 revenue stamp and sign across it where rent is paid in cash above ₹5,000." }] },
          { type: "paragraph", content: [{ type: "text", text: "______________________________" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord Signature: " }, { type: "text", text: "{{landlordName}}" }] }
        ]
      }
    }
  },
  {
    id: "delivery-challan",
    slug: "delivery-challan",
    title: "Delivery Challan Format Template",
    description: "Free GST delivery challan format for India to move goods for job work, delivery or approval, editable and downloadable in PDF or Word.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Delivery Challan Format Template",
      fields: ["consignorName", "consignorAddress", "consignorGstin", "consigneeName", "consigneeAddress", "consigneeGstin", "challanNumber", "challanDate", "totalValue", "totalValueWords", "vehicleNumber", "transportName", "purpose"],
      layout: {
        header: "DELIVERY CHALLAN",
        footer: "This is a Delivery Challan and NOT a Tax Invoice."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#78350f"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DELIVERY CHALLAN" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Challan No.: " }, { type: "text", text: "{{challanNumber}}     Date: {{challanDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Consignor (From)" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Name: " }, { type: "text", text: "{{consignorName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Address: " }, { type: "text", text: "{{consignorAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "GSTIN: " }, { type: "text", text: "{{consignorGstin}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sample: Sharma Enterprises, Plot 12, MIDC Bhosari, Pune, Maharashtra - 411026. GSTIN 27ABCDE1234F1Z5." }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Consignee (Ship To)" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Name: " }, { type: "text", text: "{{consigneeName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Address: " }, { type: "text", text: "{{consigneeAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "GSTIN: " }, { type: "text", text: "{{consigneeGstin}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sample: Infotech Solutions Pvt. Ltd., 5th Floor, Cyber Towers, Hinjawadi, Pune, Maharashtra - 411057. GSTIN 27PQRSX6789K1Z2." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Details of Goods" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Sr" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description of Goods" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "HSN Code" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Quantity" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Value (₹)" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cotton Fabric Rolls" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5208" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "50" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Rolls" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹75,000" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stitching Thread Cones" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5401" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pcs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹15,000" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Value: " }, { type: "text", text: "₹{{totalValue}} (Rupees {{totalValueWords}} only)" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Transport &amp; Purpose" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Transporter: " }, { type: "text", text: "{{transportName}}     Vehicle No.: {{vehicleNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Purpose: " }, { type: "text", text: "{{purpose}} (Job Work / Delivery / Approval)" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Important: " }, { type: "text", text: "This is a Delivery Challan and NOT a Tax Invoice." }] },
          { type: "paragraph", content: [{ type: "text", text: "______________________________          ______________________________" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "For {{consignorName}} (Consignor)          Received By (Consignee)" }] }
        ]
      }
    }
  }
];
