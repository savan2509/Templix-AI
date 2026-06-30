import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.warn("DATABASE_URL is not set. Seed script will exit without modifying the database.");
  process.exit(0);
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding started using Prisma 7 Pg Adapter...");

  // 1. Create default categories
  const categoriesData = [
    { slug: "invoices", name: "Invoices", description: "Professional billings, receipts, and finance templates." },
    { slug: "resumes", name: "Resumes & CVs", description: "ATS-friendly modern layouts for jobs application." },
    { slug: "contracts", name: "Contracts", description: "Legally compliant service and business agreements." },
    { slug: "proposals", name: "Proposals", description: "Winning project proposals and pitch templates." },
    { slug: "letters", name: "Letters & Emails", description: "Personal cover letters and business emails." },
  ];

  const categoriesMap: Record<string, string> = {};

  for (const cat of categoriesData) {
    const category = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, description: cat.description },
      create: { slug: cat.slug, name: cat.name, description: cat.description },
    });
    categoriesMap[cat.slug] = category.id;
    console.log(`Created/Updated category: ${category.name}`);
  }

  // 2. Create default templates
  const templatesData = [
    {
      slug: "professional-invoice",
      title: "Professional Invoice",
      description: "Clean invoice template for freelancers and consultants, containing dynamic rows, tax details, and company logo blocks.",
      categoryId: categoriesMap["invoices"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Professional Invoice",
        fields: ["companyName", "companyEmail", "clientName", "clientEmail", "invoiceNumber", "invoiceDate", "dueDate", "taxRate", "currency", "amountDue"],
        layout: {
          header: "INVOICE",
          footer: "Payment is due within 14 days of invoice date. Thank you!"
        },
        styles: {
          primaryColor: "#2563eb",
          secondaryColor: "#0f172a"
        },
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
      slug: "developer-resume",
      title: "Software Engineer Resume",
      description: "ATS-friendly developer resume layout highlighting Technical Skills, Professional Experience, Education, and Projects.",
      categoryId: categoriesMap["resumes"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Software Engineer Resume",
        fields: ["fullName", "email", "phone", "github", "linkedin", "jobTitle", "summary"],
        layout: {
          header: "CURRICULUM VITAE",
          footer: "References available upon request."
        },
        styles: {
          primaryColor: "#0284c7",
          secondaryColor: "#1e293b"
        },
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
      description: "Standard service contract detailing scope of work, timeline, payment terms, and intellectual property ownership definitions.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Freelance Service Agreement",
        fields: ["contractDate", "clientName", "freelancerName", "projectName", "paymentAmount", "projectScope"],
        layout: {
          header: "MUTUAL AGREEMENT",
          footer: "Executed as an agreement by both signing parties."
        },
        styles: {
          primaryColor: "#0f172a",
          secondaryColor: "#475569"
        },
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
      description: "Standard employment contract template for HR and employers outlining salary, job role, and employment terms.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Employment Contract",
        fields: ["employerName", "employeeName", "jobTitle", "startDate", "salary", "reportingManager"],
        layout: {
          header: "EMPLOYMENT AGREEMENT",
          footer: "This agreement is subject to the employment standards act."
        },
        styles: {
          primaryColor: "#1e3a8a",
          secondaryColor: "#3b82f6"
        },
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
      description: "Professional freelance contract template for freelancers and clients to define project scope and payment.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Freelance Contract",
        fields: ["clientName", "freelancerName", "projectName", "paymentAmount", "projectScope", "contractDate"],
        layout: {
          header: "FREELANCE CONTRACT",
          footer: "Both parties agree to the terms outline in this document."
        },
        styles: {
          primaryColor: "#0d9488",
          secondaryColor: "#115e59"
        },
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
      description: "Legally-sound independent contractor agreement for contract services, projects, and tax compliance.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Independent Contractor Agreement",
        fields: ["clientName", "contractorName", "servicesDescription", "hourlyRate", "effectiveDate"],
        layout: {
          header: "INDEPENDENT CONTRACTOR AGREEMENT",
          footer: "Contractor is solely responsible for all tax liabilities."
        },
        styles: {
          primaryColor: "#0f172a",
          secondaryColor: "#334155"
        },
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
      description: "Comprehensive service agreement template for agencies and businesses outlining service deliverables and SLA.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Service Agreement",
        fields: ["providerName", "clientName", "servicesScope", "fee", "effectiveDate"],
        layout: {
          header: "SERVICE AGREEMENT",
          footer: "Governed by the state regulations."
        },
        styles: {
          primaryColor: "#4f46e5",
          secondaryColor: "#312e81"
        },
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
      description: "Confidentiality and non-disclosure agreement template for startups and companies to protect proprietary information.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Non-Disclosure Agreement",
        fields: ["disclosingParty", "receivingParty", "effectiveDate", "purposeDescription"],
        layout: {
          header: "CONFIDENTIALITY AGREEMENT",
          footer: "All terms remain in effect for 3 years post termination."
        },
        styles: {
          primaryColor: "#dc2626",
          secondaryColor: "#991b1b"
        },
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
      description: "Consulting services contract template for professional consultants and advisors detailing payment and scope.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Consulting Agreement",
        fields: ["consultantName", "clientName", "consultingFee", "scopeOfServices", "effectiveDate"],
        layout: {
          header: "CONSULTING SERVICES AGREEMENT",
          footer: "Consultant represents that they have the requisite expertise to perform."
        },
        styles: {
          primaryColor: "#2563eb",
          secondaryColor: "#1d4ed8"
        },
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
      description: "Standard residential rental agreement template for landlords and tenants specifying rent, deposit, and terms.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Rental Agreement",
        fields: ["landlordName", "tenantName", "propertyAddress", "monthlyRent", "depositAmount", "leaseStart"],
        layout: {
          header: "RESIDENTIAL RENTAL AGREEMENT",
          footer: "This document is subject to local landlord-tenant law."
        },
        styles: {
          primaryColor: "#059669",
          secondaryColor: "#047857"
        },
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
      description: "Sales and purchase contract template for businesses and sales teams detailing goods description and delivery.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Sales Contract",
        fields: ["sellerName", "buyerName", "goodsDescription", "purchasePrice", "deliveryDate"],
        layout: {
          header: "CONTRACT FOR SALE OF GOODS",
          footer: "Risk of loss passes to Buyer upon delivery."
        },
        styles: {
          primaryColor: "#ea580c",
          secondaryColor: "#c2410c"
        },
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
      description: "General partnership agreement template for business partners establishing ownership share and capital.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Partnership Agreement",
        fields: ["partnerOne", "partnerTwo", "businessName", "ownershipShare", "capitalContribution"],
        layout: {
          header: "PARTNERSHIP AGREEMENT",
          footer: "Executed as a legal partnership under state laws."
        },
        styles: {
          primaryColor: "#7c3aed",
          secondaryColor: "#6d28d9"
        },
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
      description: "Standard vendor and supplier agreement template for companies detailing terms of supply and product list.",
      categoryId: categoriesMap["contracts"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Vendor Agreement",
        fields: ["companyName", "vendorName", "productDescription", "paymentTerms", "deliverySchedule"],
        layout: {
          header: "VENDOR AGREEMENT",
          footer: "This agreement may be terminated by either party with 30 days notice."
        },
        styles: {
          primaryColor: "#475569",
          secondaryColor: "#334155"
        },
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
      description: "Business proposal template for businesses and startups to pitch ventures, products, or services to potential investors or partners.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Business Project Proposal",
        fields: ["clientCompany", "proposalDate", "solutionTitle", "estimatedTimeline", "totalInvestment"],
        layout: {
          header: "PROJECT PROPOSAL",
          footer: "We look forward to working with you."
        },
        styles: {
          primaryColor: "#2563eb",
          secondaryColor: "#1e293b"
        },
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
      description: "Project proposal template for project managers outlining project scope, timeline, budget, and key milestones.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Project Proposal",
        fields: ["projectName", "managerName", "clientName", "projectObjective", "timeline", "budget"],
        layout: {
          header: "PROJECT CHARTER & PROPOSAL",
          footer: "Confidential document for internal and select client review."
        },
        styles: {
          primaryColor: "#0284c7",
          secondaryColor: "#0369a1"
        },
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
      description: "Strategic marketing proposal template for marketing agencies to pitch campaigns, branding, and growth strategies.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Marketing Strategy Proposal",
        fields: ["agencyName", "clientCompany", "campaignObjective", "channels", "monthlyRetainer"],
        layout: {
          header: "MARKETING CAMPAIGN PITCH",
          footer: "Proposal valid for 30 days from presentation."
        },
        styles: {
          primaryColor: "#db2777",
          secondaryColor: "#9d174d"
        },
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
      description: "Creative web design proposal template for web designers outlining UI/UX design deliverables, pages, and website relaunch timeline.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Website UI/UX Design Proposal",
        fields: ["designerName", "clientCompany", "websiteName", "numberPages", "projectCost", "completionTime"],
        layout: {
          header: "WEBSITE RELAUNCH PROPOSAL",
          footer: "All designs undergo two feedback iterations."
        },
        styles: {
          primaryColor: "#7c3aed",
          secondaryColor: "#4c1d95"
        },
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
      description: "Technical software development proposal template for developers and IT companies outlining technology stack, deliverables, and software architecture.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Software System Development Proposal",
        fields: ["developerCompany", "clientCompany", "softwareTitle", "techStack", "developmentFee", "deliverySchedule"],
        layout: {
          header: "TECHNICAL PROJECT PITCH",
          footer: "Includes 3 months of post-launch SLA support."
        },
        styles: {
          primaryColor: "#0f172a",
          secondaryColor: "#0284c7"
        },
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
      description: "Professional consulting proposal template for consultants outlining consulting scope, diagnostic approach, and advisor fees.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Consulting & Advisory Proposal",
        fields: ["consultantName", "clientCompany", "consultingObjective", "methodology", "consultingFee"],
        layout: {
          header: "BUSINESS STRATEGY CONSULTING PITCH",
          footer: "Ensuring maximum operational output and transformation."
        },
        styles: {
          primaryColor: "#2563eb",
          secondaryColor: "#1e3a8a"
        },
        editorState: {
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: { level: 1 },
              content: [{ type: "text", text: "PROFESSIONAL CONSULTING PROPOSAL" }]
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
      description: "SEO and performance digital marketing proposal template for marketing professionals to pitch digital growth and campaign execution.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Digital Performance Marketing Proposal",
        fields: ["proName", "clientCompany", "marketingChannels", "targetKPIs", "adSpend", "fee"],
        layout: {
          header: "DIGITAL MARKETING SERVICES PITCH",
          footer: "KPI target metrics evaluated monthly."
        },
        styles: {
          primaryColor: "#059669",
          secondaryColor: "#065f46"
        },
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
      description: "Detailed construction and remodeling proposal template for contractors and builders detailing materials, labor estimates, and permits.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Construction Project Bid Proposal",
        fields: ["contractorName", "clientName", "siteAddress", "scopeOfWork", "materialsCost", "laborCost", "totalPrice"],
        layout: {
          header: "CONSTRUCTION BID PROPOSAL",
          footer: "Bid is subject to standard construction permits."
        },
        styles: {
          primaryColor: "#d97706",
          secondaryColor: "#92400e"
        },
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
      description: "Beautiful event planning and management proposal template for event planners detailing catering, venue options, and theme designs.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Event Organization & Coordination Proposal",
        fields: ["plannerName", "clientName", "eventName", "eventDate", "venueOptions", "budget"],
        layout: {
          header: "EVENT COORDINATION PITCH",
          footer: "We turn your dream events into reality."
        },
        styles: {
          primaryColor: "#db2777",
          secondaryColor: "#701a75"
        },
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
      description: "Standard grant proposal template for nonprofits and organizations to request funding, outlining project description and social impact.",
      categoryId: categoriesMap["proposals"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Funding & Grant Request Proposal",
        fields: ["organizationName", "fundingAgency", "projectTitle", "fundingRequested", "communityImpact"],
        layout: {
          header: "GRANT APPLICATION PROPOSAL",
          footer: "Ensuring transparency and social value creation."
        },
        styles: {
          primaryColor: "#059669",
          secondaryColor: "#064e3b"
        },
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
      description: "Professional job application cover letter detailing experience, motivation, and hook.",
      categoryId: categoriesMap["letters"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Job Application Cover Letter",
        fields: ["fullName", "recipientName", "companyName", "targetRole", "experienceYears"],
        layout: {
          header: "APPLICATION LETTER",
          footer: "Sincerely, [Full Name]"
        },
        styles: {
          primaryColor: "#0f172a",
          secondaryColor: "#475569"
        },
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
      description: "Formal resignation letter template for employees providing notice, last working day, and transition support details.",
      categoryId: categoriesMap["letters"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Formal Resignation Letter",
        fields: ["employeeName", "managerName", "companyName", "lastDay", "roleTitle"],
        layout: {
          header: "RESIGNATION NOTICE",
          footer: "Wishing the company continued success."
        },
        styles: {
          primaryColor: "#1e293b",
          secondaryColor: "#475569"
        },
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
      description: "Letter of recommendation template for students and professionals highlighting character, work ethic, and achievements.",
      categoryId: categoriesMap["letters"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Letter of Recommendation",
        fields: ["writerName", "writerRole", "candidateName", "recipientName", "relationship", "keyStrengths"],
        layout: {
          header: "LETTER OF RECOMMENDATION",
          footer: "Available for further questions if necessary."
        },
        styles: {
          primaryColor: "#0284c7",
          secondaryColor: "#0f172a"
        },
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
      description: "Formal job offer letter template for HR and recruiters detailing position, salary, start date, and benefits.",
      categoryId: categoriesMap["letters"]!,
      isPremium: true,
      status: "PUBLISHED",
      content: {
        title: "Job Offer Letter",
        fields: ["companyName", "candidateName", "jobTitle", "salaryAmount", "startDate", "reportingManager"],
        layout: {
          header: "OFFER OF EMPLOYMENT",
          footer: "Please sign and return a copy to confirm acceptance."
        },
        styles: {
          primaryColor: "#1e3a8a",
          secondaryColor: "#3b82f6"
        },
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
      description: "Standard professional business letter template for corporate correspondence, inquiries, or formal notifications.",
      categoryId: categoriesMap["letters"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Formal Business Letter",
        fields: ["senderName", "senderCompany", "recipientName", "recipientCompany", "subjectLine", "letterBody"],
        layout: {
          header: "BUSINESS CORRESPONDENCE",
          footer: "Confidentiality Notice applies."
        },
        styles: {
          primaryColor: "#0f172a",
          secondaryColor: "#334155"
        },
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
      description: "Formal complaint letter template for consumers to report product issues, poor service, or request refunds.",
      categoryId: categoriesMap["letters"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Consumer Complaint Letter",
        fields: ["consumerName", "companyName", "purchaseDate", "productName", "issueDescription", "desiredResolution"],
        layout: {
          header: "CUSTOMER COMPLAINT DEPT",
          footer: "Supporting documents and receipts attached."
        },
        styles: {
          primaryColor: "#dc2626",
          secondaryColor: "#991b1b"
        },
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
      description: "Professional thank you letter template for interview follow-ups, business partnerships, or mentorship appreciation.",
      categoryId: categoriesMap["letters"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Professional Thank You Letter",
        fields: ["senderName", "recipientName", "interactionDate", "topicDiscussed", "companyName"],
        layout: {
          header: "LETTER OF APPRECIATION",
          footer: "Looking forward to staying in touch."
        },
        styles: {
          primaryColor: "#059669",
          secondaryColor: "#047857"
        },
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
      description: "Formal request letter template for general users to request information, permissions, records, or meetings.",
      categoryId: categoriesMap["letters"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Official Request Letter",
        fields: ["requesterName", "recipientName", "requestSubject", "detailExplanation", "deadlineDate"],
        layout: {
          header: "LETTER OF REQUEST",
          footer: "Thank you for your prompt consideration."
        },
        styles: {
          primaryColor: "#4f46e5",
          secondaryColor: "#312e81"
        },
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
      description: "Official appointment letter template for HR departments to confirm employment terms and schedule.",
      categoryId: categoriesMap["letters"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Employment Appointment Letter",
        fields: ["companyName", "employeeName", "jobTitle", "salary", "appointmentDate", "reportingManager"],
        layout: {
          header: "EMPLOYMENT APPOINTMENT",
          footer: "Welcome to the organization!"
        },
        styles: {
          primaryColor: "#475569",
          secondaryColor: "#1e293b"
        },
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
      description: "Formal experience letter and certificate template for employees confirming dates of employment and performance summary.",
      categoryId: categoriesMap["letters"]!,
      isPremium: false,
      status: "PUBLISHED",
      content: {
        title: "Work Experience Certificate",
        fields: ["companyName", "employeeName", "jobTitle", "startDate", "endDate", "performanceSummary"],
        layout: {
          header: "TO WHOM IT MAY CONCERN",
          footer: "We wish them all the best in future endeavors."
        },
        styles: {
          primaryColor: "#475569",
          secondaryColor: "#334155"
        },
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

  for (const temp of templatesData) {
    const template = await prisma.template.upsert({
      where: { slug: temp.slug },
      update: {
        title: temp.title,
        description: temp.description,
        content: temp.content,
        categoryId: temp.categoryId,
        isPremium: temp.isPremium,
        status: temp.status as any,
      },
      create: {
        slug: temp.slug,
        title: temp.title,
        description: temp.description,
        content: temp.content,
        categoryId: temp.categoryId,
        isPremium: temp.isPremium,
        status: temp.status as any,
      },
    });
    console.log(`Created/Updated template: ${template.title}`);
  }

  // 3. Create default blog posts
  const blogsData = [
    {
      slug: "how-to-write-freelance-invoice",
      title: "How to Write a Professional Invoice for Freelance Work",
      description: "A comprehensive guide showing how to write invoices that clients pay immediately. Includes layout tips, tax guidelines, and free templates.",
      content: `### Getting Paid is About Communication

Writing an invoice looks simple on the surface, but a poorly formatted invoice is one of the leading causes of delayed payments for freelancers. To ensure your billings get cleared rapidly, your documents must be clear, detailed, and professional.

#### 1. Essential Invoice Elements
Every freelance invoice should clearly declare:
- **Contact Details**: Name, email, and billing address for both you and the client.
- **Invoice Identifiers**: A unique invoice number and payment date.
- **Line Items**: Exact descriptions of tasks completed, hours worked, or flat project fees.
- **Totals and Taxes**: Clear calculations showing subtotals, applied taxes, and net due.

#### 2. Layout Tips
Keep your design professional. Use consistent corporate typography, appropriate tables, and include your company branding or personal signature if applicable. Using Templix AI, you can generate this format with a single click.

#### 3. Standard Payment Term
Typically, Net 14 or Net 30 days are accepted standards. Adding a polite 'Thank you for your business!' note in the footer also helps build client relationships.`,
      published: true
    },
    {
      slug: "ats-resume-tips-for-developers",
      title: "Top ATS Resume Tips for Software Engineers in 2026",
      description: "Learn how to optimize your technology CV to pass automated Applicant Tracking Systems and capture hiring managers' attention.",
      content: `### Passing the ATS Filter

Applicant Tracking Systems (ATS) analyze millions of resumes globally before human eyes ever see them. For software developers, creating an ATS-friendly resume requires matching precise tech keywords with clear structural readability.

#### 1. Avoid Complex Formats
Do not use multi-column sidebars, custom canvas graphics, or progress bars to represent skills. Keep the document structure layout linear, standard, and plain. Clean markdown/Tiptap text exports work best.

#### 2. Map Keywords to Job Specs
Ensure that the exact keywords mentioned in the job post (e.g. *Next.js 15*, *TypeScript*, *Prisma ORM*, *PostgreSQL*) are listed explicitly under your Technical Skills section.

#### 3. Experience Quantification
When listing your accomplishments, use bullet points quantifying results:
- **Good**: "Optimized search queries."
- **Great**: "Optimized search queries via database indexing, reducing response latency by 40%."`,
      published: true
    }
  ];

  for (const b of blogsData) {
    const blog = await prisma.blog.upsert({
      where: { slug: b.slug },
      update: {
        title: b.title,
        description: b.description,
        content: b.content,
        published: b.published,
      },
      create: {
        slug: b.slug,
        title: b.title,
        description: b.description,
        content: b.content,
        published: b.published,
      },
    });
    console.log(`Created/Updated blog: ${blog.title}`);
  }

  console.log("Seeding complete successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
