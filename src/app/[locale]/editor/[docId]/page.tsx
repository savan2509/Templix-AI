import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import EditorCanvas from "@/features/editor/components/EditorCanvas";

// Static fallback templates to load variables from if DB is absent
const fallbackTemplates = [
  {
    slug: "professional-invoice",
    title: "Professional Invoice",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "INVOICE" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "From: " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ({{companyEmail}})" }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "To: " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ({{clientEmail}})" }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Invoice #: " },
              { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Date: " },
              { type: "text", text: "{{invoiceDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Due: " },
              { type: "text", text: "{{dueDate}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "table",
            content: [
              {
                type: "tableRow",
                content: [
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Item Description" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Qty" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Price" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Product Design & Consultancy" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4,500.00" }] }] }
                ]
              }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Total Amount Due: " },
              { type: "text", text: "{{currency}}{{amountDue}}", marks: [{ type: "bold" }] },
              { type: "text", text: " (Includes {{taxRate}}% tax)" }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "invoice-freelancer",
    title: "Freelancer Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FREELANCER INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "From: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " ({{companyEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "To: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }, { type: "text", text: " ({{clientEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Due: " }, { type: "text", text: "{{dueDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Project Amount Due: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-small-business",
    title: "Small Business Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SMALL BUSINESS INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Business: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Billed To: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Date: " }, { type: "text", text: "{{invoiceDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Amount Due: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-consulting",
    title: "Consulting Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSULTING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consultant: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Client: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Due: " }, { type: "text", text: "{{dueDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Consulting Services Total: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-contractor",
    title: "Contractor Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONTRACTOR BILLING" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contractor: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Client: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Due: " }, { type: "text", text: "{{dueDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Labor & Materials Total: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-graphic-designer",
    title: "Graphic Designer Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DESIGN SERVICES INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Designer: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Client: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Date: " }, { type: "text", text: "{{invoiceDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Branding & Asset Design Services: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-web-developer",
    title: "Web Developer Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEB DEVELOPMENT BILLING" }] },
          { type: "paragraph", content: [{ type: "text", text: "Developer: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Client: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Due: " }, { type: "text", text: "{{dueDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Development Hours & Deployments: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-cleaning-service",
    title: "Cleaning Service Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CLEANING SERVICE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Provider: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Billed To: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Date: " }, { type: "text", text: "{{invoiceDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Sanitization & Janitorial Services: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-photography",
    title: "Photography Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PHOTOGRAPHY SERVICES BILLING" }] },
          { type: "paragraph", content: [{ type: "text", text: "Photographer: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Client: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Date: " }, { type: "text", text: "{{invoiceDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Session Fee & Retouching: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-hvac-service",
    title: "HVAC Service Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "HVAC TECHNICAL SERVICE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Technician Firm: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Client: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Due: " }, { type: "text", text: "{{dueDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "HVAC Parts & Installation Cost: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-plumbing",
    title: "Plumbing Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PLUMBING SERVICE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Plumber: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Billed To: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Service Date: " }, { type: "text", text: "{{serviceDate}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Due: " }, { type: "text", text: "{{dueDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Service Location: " }, { type: "text", text: "{{pipeLocation}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Labor & Material Cost: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-timesheet",
    title: "Timesheet Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TIMESHEET BILLING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Provider: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Billed To: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Billing Period: " }, { type: "text", text: "{{billingPeriodStart}}", marks: [{ type: "bold" }] }, { type: "text", text: " — " }, { type: "text", text: "{{billingPeriodEnd}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Hours Logged: " }, { type: "text", text: "{{totalHours}}", marks: [{ type: "bold" }] }, { type: "text", text: " hrs @ " }, { type: "text", text: "{{hourlyRate}}", marks: [{ type: "bold" }] }, { type: "text", text: "/hr" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Amount Due: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-milestone",
    title: "Milestone Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MILESTONE RELEASE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agency: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Project Client: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Contract Ref: " }, { type: "text", text: "{{contractRef}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Milestone " }, { type: "text", text: "{{milestoneNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: ": " }, { type: "text", text: "{{milestoneName}}", marks: [{ type: "bold" }] }, { type: "text", text: " — Status: " }, { type: "text", text: "{{milestoneStatus}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Milestone Release Amount: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-receipt",
    title: "Receipt Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PAYMENT RECEIPT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Issued By: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Received From: " }, { type: "text", text: "{{payerName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Receipt #: " }, { type: "text", text: "{{receiptNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Payment Date: " }, { type: "text", text: "{{paymentDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Method: " }, { type: "text", text: "{{paymentMethod}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Transaction ID: " }, { type: "text", text: "{{transactionId}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Amount Paid: " }, { type: "text", text: "{{amountPaid}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Balance Due: $0.00" }] }
        ]
      }
    }
  },
  {
    slug: "invoice-rental",
    title: "Rental Invoice Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RENTAL PAYMENT STATEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Landlord: " }, { type: "text", text: "{{landlordName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Tenant: " }, { type: "text", text: "{{tenantName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Property: " }, { type: "text", text: "{{propertyAddress}}", marks: [{ type: "bold" }] }, { type: "text", text: ", Unit " }, { type: "text", text: "{{unitNumber}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: " }, { type: "text", text: "{{invoiceNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Period: " }, { type: "text", text: "{{rentalPeriod}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Base Rent: " }, { type: "text", text: "{{baseRent}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Additional Fees: " }, { type: "text", text: "{{additionalFees}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Amount Due: " }, { type: "text", text: "{{amountDue}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-estimate",
    title: "Estimate Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COST ESTIMATE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared By: " }, { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Estimate For: " }, { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Estimate #: " }, { type: "text", text: "{{estimateNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Issue Date: " }, { type: "text", text: "{{issueDate}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Valid Until: " }, { type: "text", text: "{{validUntil}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Description: " }, { type: "text", text: "{{projectDescription}}", marks: [{ type: "italic" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Estimated Total Cost: " }, { type: "text", text: "{{estimatedTotal}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "invoice-purchase-order",
    title: "Purchase Order Template",
    content: {
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PURCHASE ORDER" }] },
          { type: "paragraph", content: [{ type: "text", text: "Supplier: " }, { type: "text", text: "{{supplierName}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Buyer/Ship-to: " }, { type: "text", text: "{{buyerName}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "PO #: " }, { type: "text", text: "{{poNumber}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Order Date: " }, { type: "text", text: "{{orderDate}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Delivery Address: " }, { type: "text", text: "{{deliveryAddress}}", marks: [{ type: "bold" }] }, { type: "text", text: " | Payment Terms: " }, { type: "text", text: "{{paymentTerms}}", marks: [{ type: "bold" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Goods: " }, { type: "text", text: "{{goodsDescription}}", marks: [{ type: "italic" }] }] },
          { type: "paragraph", content: [{ type: "text", text: "Commercial Total: " }, { type: "text", text: "{{totalCost}}", marks: [{ type: "bold" }] }] }
        ]
      }
    }
  },
  {
    slug: "developer-resume",
    title: "Software Engineer Resume",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "{{fullName}}" }]
          },
          {
            type: "paragraph",
            content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | github.com/{{github}}" }]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Professional Summary" }]
          },
          {
            type: "paragraph",
            content: [{ type: "text", text: "{{summary}}" }]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Work Experience" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Senior Software Engineer - Tech Solutions Inc. (2024 - Present)", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "bulletList",
            content: [
              {
                type: "listItem",
                content: [{ type: "paragraph", content: [{ type: "text", text: "Led development of a React/Next.js document management dashboard, scaling processing speeds by 40%." }] }]
              },
              {
                type: "listItem",
                content: [{ type: "paragraph", content: [{ type: "text", text: "Implemented PostgreSQL full text search and indexing queries to reduce document retrieval latency by 1.2 seconds." }] }]
              }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "freelance-agreement",
    title: "Freelance Service Agreement",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "FREELANCE SERVICE AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Agreement is entered into on " },
              { type: "text", text: "{{contractDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " (hereinafter referred to as 'Client') and " },
              { type: "text", text: "{{freelancerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " (hereinafter referred to as 'Freelancer')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Scope of Work" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Freelancer agrees to perform services for the project: " },
              { type: "text", text: "{{projectName}}", marks: [{ type: "italic" }] },
              { type: "text", text: ". The specific deliverables include: {{projectScope}}." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Payment Terms" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "In exchange for services rendered, Client agrees to pay Freelancer a flat project fee of " },
              { type: "text", text: "{{paymentAmount}}", marks: [{ type: "bold" }] },
              { type: "text", text: " upon completion of final project review." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "employment-contract",
    title: "Employment Contract",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "EMPLOYMENT CONTRACT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Employment Contract (the 'Agreement') is made effective as of " },
              { type: "text", text: "{{startDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{employerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Employer') and " },
              { type: "text", text: "{{employeeName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Employee')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Position and Duties" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Employee shall serve in the position of " },
              { type: "text", text: "{{jobTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: " and shall report directly to " },
              { type: "text", text: "{{reportingManager}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". Employee agrees to perform all duties associated with this role to the best of their ability." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Compensation" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "In consideration for the services rendered, Employee shall receive an annual base salary of " },
              { type: "text", text: "{{salary}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", payable in accordance with the Employer's standard payroll schedule." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "freelance-contract",
    title: "Freelance Contract",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "FREELANCE CONTRACT AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Freelance Contract is entered into on " },
              { type: "text", text: "{{contractDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Client') and " },
              { type: "text", text: "{{freelancerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Freelancer')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Project Services" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Freelancer agrees to perform services for the project named " },
              { type: "text", text: "{{projectName}}", marks: [{ type: "italic" }] },
              { type: "text", text: ". The scope of services includes: " },
              { type: "text", text: "{{projectScope}}" },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Compensation" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The Client agrees to pay Freelancer a project fee of " },
              { type: "text", text: "{{paymentAmount}}", marks: [{ type: "bold" }] },
              { type: "text", text: " upon completion and delivery of the project." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "independent-contractor-agreement",
    title: "Independent Contractor Agreement",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "INDEPENDENT CONTRACTOR AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Agreement is made effective as of " },
              { type: "text", text: "{{effectiveDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Company') and " },
              { type: "text", text: "{{contractorName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Contractor')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Services" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Contractor shall perform the following services for Company: " },
              { type: "text", text: "{{servicesDescription}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Rate of Pay" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Company shall pay Contractor at the rate of " },
              { type: "text", text: "{{hourlyRate}}", marks: [{ type: "bold" }] },
              { type: "text", text: " for services performed under this Agreement." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "3. Relationship" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The relationship of Contractor to Company is that of an independent contractor, and nothing in this Agreement shall be construed to create an employer-employee relationship." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "service-agreement",
    title: "Service Agreement",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "MASTER SERVICE AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Service Agreement is made effective on " },
              { type: "text", text: "{{effectiveDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", between " },
              { type: "text", text: "{{providerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Provider') and " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Client')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Scope of Services" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Provider agrees to perform the services detailed in the scope of work: " },
              { type: "text", text: "{{servicesScope}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Fees and Payments" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Client shall pay Provider the service fee of " },
              { type: "text", text: "{{fee}}", marks: [{ type: "bold" }] },
              { type: "text", text: " for the duration of this Agreement." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "nda-template",
    title: "Non-Disclosure Agreement (NDA)",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "MUTUAL NON-DISCLOSURE AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This NDA is entered into on " },
              { type: "text", text: "{{effectiveDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", between " },
              { type: "text", text: "{{disclosingParty}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Disclosing Party') and " },
              { type: "text", text: "{{receivingParty}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Receiving Party')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Confidential Information" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The parties wish to exchange certain confidential information for the sole purpose of evaluating: " },
              { type: "text", text: "{{purposeDescription}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Obligation of Confidentiality" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Receiving Party shall keep all disclosed information strictly confidential and shall not disclose it to any third party without prior written consent." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "consulting-agreement",
    title: "Consulting Agreement",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "CONSULTING SERVICES AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Consulting Agreement is effective as of " },
              { type: "text", text: "{{effectiveDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Client') and " },
              { type: "text", text: "{{consultantName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Consultant')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Consulting Services" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Consultant agrees to provide consulting and advisory services related to: " },
              { type: "text", text: "{{scopeOfServices}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Compensation" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Client shall pay Consultant a consulting fee of " },
              { type: "text", text: "{{consultingFee}}", marks: [{ type: "bold" }] },
              { type: "text", text: " for services rendered under this agreement." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "rental-agreement",
    title: "Rental Agreement",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "RESIDENTIAL RENTAL AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Rental Agreement is entered into on " },
              { type: "text", text: "{{leaseStart}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{landlordName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Landlord') and " },
              { type: "text", text: "{{tenantName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Tenant')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Property" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Landlord leases to Tenant the residential property located at: " },
              { type: "text", text: "{{propertyAddress}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Rent and Deposit" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Tenant shall pay Landlord a monthly rent of " },
              { type: "text", text: "{{monthlyRent}}", marks: [{ type: "bold" }] },
              { type: "text", text: " and a security deposit of " },
              { type: "text", text: "{{depositAmount}}", marks: [{ type: "bold" }] },
              { type: "text", text: " prior to move-in." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "sales-contract",
    title: "Sales Contract",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "CONTRACT FOR SALE OF GOODS" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Sales Contract is entered into on " },
              { type: "text", text: "{{deliveryDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{sellerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Seller') and " },
              { type: "text", text: "{{buyerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Buyer')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Goods Sold" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Seller agrees to sell and Buyer agrees to purchase the following goods: " },
              { type: "text", text: "{{goodsDescription}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Purchase Price" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The total purchase price for the goods is " },
              { type: "text", text: "{{purchasePrice}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", payable upon delivery." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "partnership-agreement",
    title: "Partnership Agreement",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "PARTNERSHIP AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Partnership Agreement is made to form a partnership under the business name " },
              { type: "text", text: "{{businessName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " between the following partners: " },
              { type: "text", text: "{{partnerOne}}", marks: [{ type: "bold" }] },
              { type: "text", text: " and " },
              { type: "text", text: "{{partnerTwo}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Capital Contribution" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The partners agree to contribute an initial capital of " },
              { type: "text", text: "{{capitalContribution}}", marks: [{ type: "bold" }] },
              { type: "text", text: " to start business operations." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Ownership Share" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The ownership share of the partnership profits and losses shall be distributed as follows: " },
              { type: "text", text: "{{ownershipShare}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "vendor-agreement",
    title: "Vendor Agreement",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "VENDOR AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Vendor Agreement is made between " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Company') and " },
              { type: "text", text: "{{vendorName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Vendor')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Products Supplied" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Vendor agrees to supply Company with the following products: " },
              { type: "text", text: "{{productDescription}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Payment and Delivery" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Company shall pay Vendor according to the payment terms: " },
              { type: "text", text: "{{paymentTerms}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", and Vendor shall deliver according to schedule: " },
              { type: "text", text: "{{deliverySchedule}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "business-proposal",
    title: "Business Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "BUSINESS PROJECT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Prepared for: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Date: " },
              { type: "text", text: "{{proposalDate}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Executive Summary" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We are pleased to submit this proposal for our solution: " },
              { type: "text", text: "{{solutionTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". Our approach is designed to meet your specific timelines of {{estimatedTimeline}} and optimize performance." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Total Estimated Investment: " },
              { type: "text", text: "{{totalInvestment}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "project-proposal",
    title: "Project Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "PROJECT PROPOSAL: {{projectName}}" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Prepared by: " },
              { type: "text", text: "{{managerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Project Objective" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The primary objective of this project is: " },
              { type: "text", text: "{{projectObjective}}" }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Estimated Timeline & Budget" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The project is scheduled to run over a period of " },
              { type: "text", text: "{{timeline}}", marks: [{ type: "bold" }] },
              { type: "text", text: " with an allocated total budget of " },
              { type: "text", text: "{{budget}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "marketing-proposal",
    title: "Marketing Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "MARKETING CAMPAIGN PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Created by: " },
              { type: "text", text: "{{agencyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Prepared for: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Campaign Objective" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Our campaign will focus on increasing brand awareness and driving conversions through: " },
              { type: "text", text: "{{campaignObjective}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Target Channels" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The primary channels of execution will include: " },
              { type: "text", text: "{{channels}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "3. Retainer & Investment" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The proposed services will be executed under a monthly retainer of " },
              { type: "text", text: "{{monthlyRetainer}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "web-design-proposal",
    title: "Web Design Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "WEB DESIGN & DEVELOPMENT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Presented by: " },
              { type: "text", text: "{{designerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Project Scope & Website" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We propose a fully responsive redesign of " },
              { type: "text", text: "{{websiteName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", covering approximately " },
              { type: "text", text: "{{numberPages}}", marks: [{ type: "bold" }] },
              { type: "text", text: " unique pages." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Cost & Timeline" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The total project cost is estimated at " },
              { type: "text", text: "{{projectCost}}", marks: [{ type: "bold" }] },
              { type: "text", text: " with an expected completion timeline of " },
              { type: "text", text: "{{completionTime}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "software-development-proposal",
    title: "Software Development Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "SOFTWARE DEVELOPMENT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Presented by: " },
              { type: "text", text: "{{developerCompany}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Software Architecture & Deliverables" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We propose to build the software application named " },
              { type: "text", text: "{{softwareTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". The project will utilize the following tech stack: " },
              { type: "text", text: "{{techStack}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Pricing & Delivery" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The development fee is " },
              { type: "text", text: "{{developmentFee}}", marks: [{ type: "bold" }] },
              { type: "text", text: " and will be delivered according to the schedule: " },
              { type: "text", text: "{{deliverySchedule}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "consulting-proposal",
    title: "Consulting Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "CONSULTING SERVICES AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Consultant: " },
              { type: "text", text: "{{consultantName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Prepared for: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Diagnostic Objective & Scope" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The primary objective of this engagement is to: " },
              { type: "text", text: "{{consultingObjective}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Methodology" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Our approach will consist of the following framework: " },
              { type: "text", text: "{{methodology}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "3. Advisor Fees" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The consulting fee for the entire engagement is " },
              { type: "text", text: "{{consultingFee}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "digital-marketing-proposal",
    title: "Digital Marketing Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "DIGITAL MARKETING SERVICES PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Prepared by: " },
              { type: "text", text: "{{proName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Prepared for: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Channels & Target KPIs" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We will target marketing on the following channels: " },
              { type: "text", text: "{{marketingChannels}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", focusing on achieving critical KPIs: " },
              { type: "text", text: "{{targetKPIs}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Ad Spend & Agency Fee" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The suggested monthly ad spend budget is " },
              { type: "text", text: "{{adSpend}}", marks: [{ type: "bold" }] },
              { type: "text", text: " with an agency management fee of " },
              { type: "text", text: "{{fee}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "construction-proposal",
    title: "Construction Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "CONSTRUCTION PROJECT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Contractor: " },
              { type: "text", text: "{{contractorName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Site Address & Scope of Work" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This construction proposal is for the site located at: " },
              { type: "text", text: "{{siteAddress}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". The scope of remodeling/construction work covers: " },
              { type: "text", text: "{{scopeOfWork}}" },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Cost Estimates" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The estimated cost breakdown includes: Materials Cost: " },
              { type: "text", text: "{{materialsCost}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", and Labor Estimate: " },
              { type: "text", text: "{{laborCost}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". The total bid price is " },
              { type: "text", text: "{{totalPrice}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "event-proposal",
    title: "Event Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "EVENT PLANNING PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Planner: " },
              { type: "text", text: "{{plannerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Event Summary & Venue" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We propose to manage the event " },
              { type: "text", text: "{{eventName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", scheduled for " },
              { type: "text", text: "{{eventDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". Suggested venue choices include: " },
              { type: "text", text: "{{venueOptions}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Budget & Coordination" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The coordinated event budget is set at " },
              { type: "text", text: "{{budget}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "grant-proposal",
    title: "Grant Proposal",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "GRANT APPLICATION & PROJECT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Requesting Organization: " },
              { type: "text", text: "{{organizationName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Submitted to: " },
              { type: "text", text: "{{fundingAgency}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Project Title & Mission" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This proposal requests funding for the project: " },
              { type: "text", text: "{{projectTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". The primary social impact is: " },
              { type: "text", text: "{{communityImpact}}" },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Funding Requested" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The total funding amount requested is " },
              { type: "text", text: "{{fundingRequested}}", marks: [{ type: "bold" }] },
              { type: "text", text: " to cover project execution." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "cover-letter",
    title: "Cover Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "APPLICATION COVER LETTER" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "I am writing to express my strong interest in the " },
              { type: "text", text: "{{targetRole}}", marks: [{ type: "bold" }] },
              { type: "text", text: " position. I bring over " },
              { type: "text", text: "{{experienceYears}}", marks: [{ type: "bold" }] },
              { type: "text", text: " years of dedicated experience and skills." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "resignation-letter",
    title: "Resignation Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "RESIGNATION LETTER" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{managerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Please accept this letter as formal notification that I am resigning from my position as " },
              { type: "text", text: "{{roleTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: " at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". My last working day will be " },
              { type: "text", text: "{{lastDay}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Thank you for the support and opportunities provided during my tenure. I am committed to assisting with the transition of my duties." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Sincerely," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{employeeName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "recommendation-letter",
    title: "Recommendation Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "LETTER OF RECOMMENDATION" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "It is my absolute pleasure to recommend " },
              { type: "text", text: "{{candidateName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " for your organization. I have known them in my capacity as a " },
              { type: "text", text: "{{writerRole}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", and our relationship was " },
              { type: "text", text: "{{relationship}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "During our time together, they demonstrated exceptional skills and strengths, particularly in " },
              { type: "text", text: "{{keyStrengths}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". I highly recommend them without reservation." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Sincerely," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{writerName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "offer-letter",
    title: "Offer Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "JOB OFFER LETTER" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{candidateName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "On behalf of " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", we are thrilled to offer you the position of " },
              { type: "text", text: "{{jobTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". In this role, you will report directly to " },
              { type: "text", text: "{{reportingManager}}", marks: [{ type: "bold" }] },
              { type: "text", text: " starting on " },
              { type: "text", text: "{{startDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We are offering an annual starting salary of " },
              { type: "text", text: "{{salaryAmount}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", paid on a regular payroll cycle. We are excited about the prospect of you joining our team." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "business-letter",
    title: "Business Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "From: " },
              { type: "text", text: "{{senderName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | " },
              { type: "text", text: "{{senderCompany}}" }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "To: " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | " },
              { type: "text", text: "{{recipientCompany}}" }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Subject: {{subjectLine}}" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{letterBody}}" }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "complaint-letter",
    title: "Complaint Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "FORMAL COMPLAINT LETTER" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "To Customer Relations at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "I am writing to report an issue regarding the product/service " },
              { type: "text", text: "{{productName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " purchased on " },
              { type: "text", text: "{{purchaseDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The primary issue encountered is: {{issueDescription}}." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "To resolve this problem, I would appreciate: " },
              { type: "text", text: "{{desiredResolution}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Sincerely," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{consumerName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "thank-you-letter",
    title: "Thank You Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "LETTER OF APPRECIATION" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Thank you so much for taking the time to meet with me on " },
              { type: "text", text: "{{interactionDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". I thoroughly enjoyed our conversation about " },
              { type: "text", text: "{{topicDiscussed}}", marks: [{ type: "bold" }] },
              { type: "text", text: " at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "I appreciate your insights and look forward to our next interaction." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Best regards," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{senderName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "request-letter",
    title: "Request Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "REQUEST LETTER: {{requestSubject}}" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "I am writing to formally request your assistance or permission regarding: " },
              { type: "text", text: "{{detailExplanation}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "If possible, I would appreciate it if this request could be reviewed by " },
              { type: "text", text: "{{deadlineDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Sincerely," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{requesterName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "appointment-letter",
    title: "Appointment Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "LETTER OF APPOINTMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{employeeName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We are pleased to appoint you as " },
              { type: "text", text: "{{jobTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: " at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". Your appointment is effective from " },
              { type: "text", text: "{{appointmentDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: " under the supervision of " },
              { type: "text", text: "{{reportingManager}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Your monthly compensation is set at " },
              { type: "text", text: "{{salary}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", subject to applicable taxes and standard company policies." }
            ]
          }
        ]
      }
    }
  },
  {
    slug: "experience-letter",
    title: "Experience Letter",
    content: {
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "WORK EXPERIENCE CERTIFICATE" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This is to certify that " },
              { type: "text", text: "{{employeeName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " was employed with " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " in the capacity of " },
              { type: "text", text: "{{jobTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: " from " },
              { type: "text", text: "{{startDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: " to " },
              { type: "text", text: "{{endDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "During their tenure, they demonstrated key abilities and were described as: " },
              { type: "text", text: "{{performanceSummary}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  }
];

interface PageProps {
  params: Promise<{
    locale: string;
    docId: string;
  }>;
  searchParams: Promise<{
    template?: string;
    [key: string]: string | undefined;
  }>;
}

export default async function EditorRoutePage({ params, searchParams }: PageProps) {
  const { locale, docId } = await params;
  const resolvedSearchParams = await searchParams;
  const session = await auth();

  const isNew = docId === "new";
  const isLoggedIn = !!session?.user;

  // Protect loading existing documents, but allow guests to customize new templates!
  if (!isLoggedIn && !isNew) {
    redirect(`/${locale}/login`);
  }

  let initialTitle = "Untitled Document";
  let initialContent: any = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [{ type: "text", text: "Start writing your document here..." }]
      }
    ]
  };

  const prefills: Record<string, string> = {};

  // Extract variables prefills from searchParams query
  Object.entries(resolvedSearchParams).forEach(([key, val]) => {
    if (key.startsWith("field_") && val) {
      prefills[key.replace("field_", "")] = val;
    }
  });

  if (isNew) {
    const templateSlug = resolvedSearchParams.template || "";
    let selectedTemplate = fallbackTemplates.find((t) => t.slug === templateSlug) || null;

    if (process.env.DATABASE_URL) {
      try {
        const dbTemplate = await db.template.findUnique({
          where: { slug: templateSlug }
        });
        if (dbTemplate) {
          selectedTemplate = {
            slug: dbTemplate.slug,
            title: dbTemplate.title,
            content: dbTemplate.content as any
          };
        }
      } catch (err) {
        console.warn("DB template load bypass in editor.");
      }
    }

    if (selectedTemplate) {
      initialTitle = selectedTemplate.title;
      initialContent = selectedTemplate.content.editorState;
    }
  } else {
    // Load existing document from DB
    if (process.env.DATABASE_URL) {
      try {
        const doc = await db.document.findUnique({
          where: {
            id: docId,
            userId: session?.user?.id || ""
          }
        });

        if (doc) {
          initialTitle = doc.title;
          initialContent = doc.content;
        } else {
          // Document not found or doesn't belong to user
          redirect(`/${locale}/dashboard`);
        }
      } catch (err) {
        console.warn("DB load bypass in editor page.");
      }
    }
  }

  return (
    <EditorCanvas
      docId={docId}
      initialTitle={initialTitle}
      initialContent={initialContent}
      prefills={prefills}
      isLoggedIn={isLoggedIn}
    />
  );
}
