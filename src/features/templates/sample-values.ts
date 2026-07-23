// Shared realistic sample values used to render live document previews and the
// matching template thumbnails, so both show identical content across modules.
import { collectTemplateTokens, deriveFallbackValue, CONTEXT_SENSITIVE_FIELDS } from "./field-fallbacks";

export const FIELD_DEFAULTS: Record<string, string> = {
  // — Universal / Shared —
  date: "July 3, 2026",
  organizationName: "Cedar Grove Foundation",
  employeeName: "Jordan Mitchell",
  quoteNumber: "QT-2026-0148",
  quoteDate: "July 3, 2026",
  companyName: "Acme Global Inc.",
  companyEmail: "info@acmeglobal.com",
  // No emoji stand-in: an "🏢" leaked into document bodies and the editor's
  // logo input. Templates render a text letterhead, not a logo glyph.
  companyLogo: "",
  logo: "",
  clientName: "John Doe Services",
  email: "sarah.j@techsolutions.com",
  phone: "+1 (555) 382-9281",
  website: "www.acmeglobal.com",
  address: "1200 Business Way, Suite 100, San Francisco, CA 94105",
  // Fallbacks so newer templates that use these field names never render the
  // literal placeholder (branded templates override via deriveContactValues).
  companyAddress: "1200 Business Way, Suite 100, San Francisco, CA 94105",
  companyPhone: "+1 (555) 382-9281",
  gratuity: "18%",
  invoiceNumber: "INV-2026-001",
  invoiceDate: "2026-06-28",
  dueDate: "2026-07-12",
  currency: "$",
  tax: "8%",
  discount: "$50.00",
  total: "$4,500.00",
  subtotal: "$4,250.00",
  notes: "Payment is due within 30 days of invoice date.",
  signature: "Sarah Jenkins",
  // Common report / business-plan / proposal fields — without these, previews
  // rendered the humanized field name ("Owner Name", "Report Period") because
  // the field had no sample value.
  preparedBy: "Alex Morgan",
  reportPeriod: "Q2 2026 (Apr–Jun)",
  ownerName: "Jordan Ellis",
  founderName: "Jordan Ellis",
  contactPerson: "Alex Morgan",
  instructorName: "Dr. Susan Wright",
  projectName: "Templix AI Platform Development",

  // — Freelancer Invoice —
  freelancerName: "Sarah Jenkins",
  businessName: "Jenkins Digital Studio",
  clientCompanyName: "TechVentures Corp.",
  clientAddress: "1600 Amphitheatre Parkway, Mountain View, CA",
  clientEmail: "billing@techventures.com",
  clientPhone: "+1 (555) 900-1234",
  projectDescription: "Full-stack web application development with Next.js & Prisma",
  milestone: "Phase 2 — Backend API & Database",
  hoursWorked: "42",
  hourlyRate: "$85",
  serviceDescription: "Custom React UI components & API integration",
  quantity: "3",
  unitPrice: "$1,200",
  paymentMethod: "Bank Transfer (ACH)",
  paymentTerms: "Net 30",
  thankYouMessage: "Thank you for your continued partnership!",

  // — Small Business Invoice —
  businessAddress: "456 Commerce Blvd, Suite 200, Austin, TX 78701",
  taxId: "EIN 12-3456789",
  customerName: "Jane Smith",
  customerCompanyName: "Smith & Associates LLC",
  billingAddress: "789 Billing Ave, Floor 3, Dallas, TX 75201",
  shippingAddress: "1234 Warehouse Dr, Houston, TX 77002",
  poNumber: "PO-2026-0547",
  productName: "Premium Widget Pack",
  sku: "WDG-PRO-500",
  description: "High-quality industrial-grade widgets, box of 500",
  lineTotal: "$749.70",
  shippingCost: "$45.00",
  taxAmount: "$63.57",
  grandTotal: "$858.27",
  authorizedSignature: "Michael Chen, Operations Manager",

  // — Consulting Invoice —
  consultantName: "Dr. Amanda Rivera",
  company: "Rivera Strategy Group",
  clientCompany: "GlobalTech Industries",
  consultationDate: "2026-06-15",
  consultingPackage: "Executive Advisory — Gold Tier",
  sessionHours: "16",

  // — Contractor Invoice —
  contractorName: "Mark Thompson Construction",
  licenseNumber: "CTR-2024-98765",
  contactDetails: "+1 (555) 674-2200 | mark@thompsonbuilds.com",
  propertyAddress: "2200 Oakwood Drive, Denver, CO 80220",
  workDescription: "Kitchen renovation — demolition, plumbing, electrical, cabinetry, and finishing",
  laborHours: "120",
  materialCost: "$8,500.00",
  equipmentCost: "$1,200.00",
  completionDate: "2026-08-15",
  warranty: "2-year structural warranty on all work performed",

  // — Graphic Designer Invoice —
  designerName: "Alex Morgan",
  studioName: "Morgan Creative Studio",

  designProject: "Brand Identity & Marketing Collateral",
  designType: "Logo, Business Cards, Brand Guidelines",
  fileFormat: "AI, SVG, PDF, PNG",
  licenseType: "Full Commercial — Unlimited Use",
  numberOfRevisions: "3 included",
  designFee: "$3,200.00",
  additionalCharges: "$400.00 (2 extra revisions)",

  // — Web Developer Invoice —
  developerName: "James Wilson",
  websiteUrl: "https://app.templix.ai",
  repositoryLink: "github.com/templix/platform",
  developmentPhase: "Phase 3 — Production Deployment",
  featureDelivered: "Auth System, Dashboard, Template Engine",
  maintenancePlan: "12-month premium support & updates",
  hours: "160",

  // — Cleaning Service Invoice —
  cleaningType: "Deep Commercial Cleaning",
  numberOfRooms: "12",
  serviceDate: "2026-06-25",
  startTime: "8:00 AM",
  endTime: "2:00 PM",
  suppliesUsed: "Eco-friendly detergent, microfiber cloths, HEPA vacuum",
  serviceFee: "$850.00",
  extraCharges: "$120.00 (carpet steam cleaning)",

  // — Photography Invoice —
  photographerName: "Emma Nguyen",
  eventName: "Annual Corporate Gala 2026",
  eventDate: "2026-07-20",
  venue: "The Grand Ballroom, Hilton Downtown",
  photographyPackage: "Premium Event Coverage",
  shootingHours: "8",
  numberOfPhotos: "500+",
  editingService: "Full color correction & retouching",
  albumIncluded: "Yes — 40-page hardcover album",
  packagePrice: "$3,800.00",

  // — Plumbing Invoice —
  plumbingCompany: "FastFlow Plumbing Co.",
  problemDescription: "Main sewer line blockage — camera inspection, hydro-jetting, and pipe repair",
  partsUsed: "PVC coupling (x3), cleanout cap, Fernco adapter",

  emergencyService: "Yes — Weekend surcharge applied",
  warrantyPeriod: "1-year parts & labor warranty",
  partsCost: "$285.00",
  laborCost: "$540.00",

  // — HVAC Service Invoice —
  serviceType: "Annual Maintenance & Refrigerant Recharge",
  unitBrand: "Carrier",
  unitModel: "Infinity 24ANB1",
  serialNumber: "SN-4482-XR-2021",
  refrigerantUsed: "R-410A — 2.5 lbs",
  filterReplacement: "Yes — MERV-13 pleated filter installed",
  maintenanceNotes: "Cleaned condenser coils, checked capacitor, lubricated fan motor",

  warrantyInformation: "90-day service warranty on all repairs",
  technicianSignature: "Robert Garcia, HVAC Technician",
  customerSignature: "Jane Smith",

  // — Resume fields —
  fullName: "Sarah Jenkins",
  jobTitle: "Principal Lead Engineer",
  github: "sarahj-dev",
  linkedin: "sarah-jenkins-lead",
  portfolio: "sarahjenkins.dev",
  amountDue: "$4,500.00",
  taxRate: "15",
  profilePhoto: "👤",
  location: "San Francisco, CA",
  careerSummary: "Results-driven Software Engineer with 5+ years of experience building high-performance web applications and distributed systems. Expert in React and cloud architecture.",
  programmingLanguages: "JavaScript, TypeScript, Python, Java, Go, Rust",
  frameworks: "React, Next.js, Vue, Node.js, Express, Spring Boot",
  databases: "PostgreSQL, MongoDB, MySQL, Redis, DynamoDB",
  cloudPlatforms: "AWS, Google Cloud (GCP), Microsoft Azure",
  devOpsTools: "Docker, Kubernetes, GitHub Actions, Terraform",
  versionControl: "Git, GitHub, GitLab",
  softSkills: "Problem Solving, Team Leadership, Agile Communication",
  careerObjective: "Highly motivated professional seeking to leverage skills to contribute to organizational growth.",
  employmentType: "Full-Time",
  responsibilities: "Designed Next.js layouts, scaled postgres migrations, led a team of 4 engineers.",
  achievements: "Improved page speeds by 40% and reduced DB search latency by 200ms.",
  technologiesUsed: "Next.js, TypeScript, TailwindCSS, PostgreSQL",
  githubLink: "github.com/username/project",
  liveDemo: "project.demo.com",
  degree: "Bachelor of Science in Computer Science",
  university: "Stanford University",
  graduationYear: "2024",
  gpa: "3.8/4.0",
  certificationName: "AWS Certified Solutions Architect",
  organization: "Amazon Web Services",
  year: "2025",
  languagesKnown: "English (Native), Spanish (Conversational)",
  awardsAchievements: "First Place Hackathon Winner 2025",
  hobbiesInterests: "Open-source contributing, hiking, digital photography",

  // — Data Analyst Resume —
  sqlSkills: "Advanced joins, CTEs, window functions, query optimization",
  excelSkills: "VLOOKUP, Pivot Tables, Power Query, VBA scripting",
  powerBi: "DAX formulas, interactive dashboard design, data modeling",
  tableau: "Storyboards, geographical mapping, complex calculations",
  dataVisualization: "Heatmaps, scatter plots, trend lines, cohorts",
  analyticsProjects: "E-commerce customer churn cohort analysis & sales forecast dashboard",
  referenceName: "Dr. Robert Vance",
  referencePosition: "Director of Analytics",
  referenceCompany: "DataCorp Systems",
  referenceContact: "robert.vance@datacorp.com",

  // — Project Manager Resume —
  leadershipSkills: "Cross-functional coordination, budget management, stakeholder management",
  pmMethodologies: "Agile, Scrum, Waterfall, Hybrid PM",
  pmTools: "Jira, Confluence, Trello, Asana, MS Project",
  projectPortfolio: "Successfully delivered $2M digital transformation project 3 weeks ahead of schedule.",
  pmpCertified: "PMP License #987654321",
  scrumCertified: "Certified ScrumMaster (CSM)",

  // — Graphic Designer Resume —
  behanceProfile: "behance.net/design-wizard",
  dribbbleProfile: "dribbble.com/design-wizard",
  adobeCreativeSuite: "Photoshop, Illustrator, InDesign, After Effects",
  figma: "Advanced component layout, auto-layout 5.0, design systems",
  brandingExperience: "Logo design, color theory, brand style guides, marketing assets",
  behanceLink: "behance.net/projects/branding-2026",

  // — Registered Nurse Resume —
  nursingLicenseNumber: "RN-998877-CA",
  medicalCertifications: "BLS, ACLS, PALS, Critical Care Registered Nurse (CCRN)",
  clinicalSkills: "IV therapy, patient assessment, wound care, triage, ICU support",
  hospitalExperience: "Stanford Health Care — Emergency Department",
  patientCareExperience: "6+ years of direct patient care in high-acuity environments",

  // — Teacher Resume —
  teachingSubjects: "Mathematics, AP Calculus, AP Statistics",
  gradeLevels: "9th - 12th Grade",
  classroomManagementSkills: "Positive reinforcement, parent engagement, restorative discipline",
  teachingExperience: "Lincoln High School — Mathematics Department",
  workshopsAttended: "Interactive STEM Pedagogy Workshop 2025",

  // — Marketing Manager Resume —
  marketingSkills: "Growth marketing, brand strategy, content marketing, budget optimization",
  seoSkills: "Keyword research, technical SEO, Semrush, Ahrefs, backlink strategy",
  semSkills: "PPC campaign management, quality score optimization",
  googleAds: "Search, Display, YouTube Ads, Shopping campaigns",
  metaAds: "Facebook & Instagram catalog ads, custom audiences, Pixel tracking",
  emailMarketing: "Mailchimp, Klaviyo, automated customer journeys, A/B testing",
  campaignExperience: "Q4 Product Launch Campaign yielding 320% ROI increase",

  // — Customer Service Resume —
  customerSupportSkills: "De-escalation, live chat, phone support, email ticketing",
  crmSoftware: "Zendesk, Salesforce Service Cloud, Intercom",
  communicationSkills: "Active listening, clear articulation, documentation writing",
  problemSolving: "Root cause analysis, dispute resolution, returns handling",

  // — Accountant Resume —
  accountingSoftware: "QuickBooks Online, Xero, Sage 50, NetSuite",
  bookkeeping: "Accounts payable, accounts receivable, bank reconciliations",
  taxPreparation: "Corporate tax returns, quarterly filings, sales tax compliance",
  financialReporting: "Balance sheets, P&L statements, cash flow statements",
  payroll: "ADP Workforce, Gusto payroll processing, W-2 management",
  cpaCertified: "CPA License #554433-NY",
  otherCertifications: "Certified Fraud Examiner (CFE)",

  // — Sales Representative Resume —
  salesSkills: "B2B consultative sales, lead prospecting, cold outreach",
  crmTools: "Salesforce, HubSpot, Pipedrive",
  leadGen: "LinkedIn Sales Navigator, ZoomInfo, outreach campaigns",
  negotiationSkills: "Contract closing, value proposition, handling objections",
  salesAchievements: "Exceeded annual sales quota by 142% in FY25",

  // — Contract fields —
  contractDate: "2026-06-28",
  paymentAmount: "$5,000.00",
  projectScope: "Deliver the full website build, set up the content management system, integrate the payment gateway, and provide launch support and documentation.",
  // Role-neutral fallback only. Every resume template supplies its own
  // role-specific summary; this is the safety net so a future resume that
  // forgets one never shows an engineer summary on a nurse/teacher/etc. page.
  summary: "Results-focused professional with a track record of delivering measurable outcomes, collaborating across teams, and raising the standard of the work.",

  // — Employment Contract —
  hrRepresentative: "Marcus Vance, HR Director",
  hrEmail: "marcus.v@acmeglobal.com",
  hrPhone: "+1 (555) 902-1122",
  employeeFullName: "David Miller",
  employeeAddress: "456 Oak Avenue, Apt 2B, Brooklyn, NY 11201",
  employeeEmail: "david.miller@gmail.com",
  employeePhone: "+1 (555) 443-8899",
  department: "Engineering & Technology",
  // Reads naturally in the employment clause "…continues until {{endDate}}".
  // Fixed-term contracts (freelance, service) override this with a real date.
  startDate: "August 1, 2026",
  endDate: "terminated by either party under the notice terms below",
  workLocation: "New York Corporate Office / Hybrid",
  bonus: "10% annual performance-based bonus target",
  benefits: "Medical, dental, vision, 401(k) matching, and 20 days PTO",
  payFrequency: "Semi-monthly (15th and last day of the month)",
  workingHours: "40 hours per week, flexible core hours",
  probationPeriod: "90 days from the start date",
  leavePolicy: "20 days paid vacation, 5 sick days, and 10 company holidays",
  noticePeriod: "30 days written notice required by either party",
  confidentialityClause: "Both parties agree to protect all proprietary and confidential business data.",
  nonCompeteClause: "12-month post-employment restriction within a 50-mile radius for competing services.",
  employerSignature: "Marcus Vance, HR Representative",
  employeeSignature: "David Miller",
  signatureDate: "2026-07-01",

  // — Freelance Contract —
  freelancerAddress: "789 Pine Lane, Portland, OR 97201",
  freelancerEmail: "alex@cartercreative.co",
  freelancerPhone: "+1 (555) 233-4455",
  projectTitle: "Brand Identity & Web Redesign",
  deliverables: "Logo pack, color palette, custom Figma layout, and Tailwind CSS code files",
  timeline: "6-week sprint from kickoff",
  totalProjectFee: "$8,500.00",
  depositAmount: "$2,500.00 upfront payment",
  paymentSchedule: "50% deposit, 50% upon final delivery",
  lateFee: "1.5% monthly compound interest on overdue invoices",
  ownershipRights: "Full ownership transfers to Client upon receipt of final payment.",
  revisionsIncluded: "Up to 3 rounds of minor modifications included.",
  cancellationPolicy: "Either party may cancel with 14 days notice. Work performed will be billed pro-rata.",
  freelancerSignature: "Alex Carter",
  clientSignature: "Jessica Wong",

  // — Independent Contractor Agreement —
  contractorCompany: "RC Consulting Services",
  contractorAddress: "500 Hilltop Dr, Austin, TX 78741",
  contractorContact: "+1 (555) 988-1122 | robert@rcconsult.com",
  servicesProvided: "Cloud database migrations, replication setups, and performance optimizations.",
  projectDuration: "3 Months",
  taxResponsibility: "Contractor accepts full responsibility for filing and paying all self-employment taxes.",
  insuranceRequirement: "Contractor must maintain active professional liability insurance of at least $1M.",
  independentContractorStatus: "The relationship is that of an independent contractor, not an employer-employee.",
  terminationClause: "Either party may terminate the agreement for convenience with 15 days written notice.",
  disputeResolution: "Disputes will be resolved via binding arbitration in Travis County, Texas.",
  contractorSignature: "Robert Chen",

  // — Service Agreement —
  providerCompanyName: "CleanSpace Facilities Services",
  providerAddress: "1200 Industrial Way, Seattle, WA 98101",
  providerContactPerson: "Thomas Briggs, Operations Director",
  serviceScope: "Mopping floors, dusting workstations, trash removal, and window cleaning.",
  serviceFrequency: "Weekly (Every Friday evening)",
  paymentDueDate: "Within 10 days of invoice date",
  slaTerms: "Provider guarantees response within 4 hours to emergency callouts.",
  liabilityLimit: "Total liability is capped at the sum of fees paid in the preceding 6 months.",
  providerSignature: "Thomas Briggs",

  // — NDA —
  partyAName: "Acme Global Systems Inc.",
  partyACompany: "Acme Global Systems Inc.",
  partyAAddress: "123 Innovation Parkway, San Jose, CA 95112",
  partyBName: "Innovatech Solutions LLC",
  partyBCompany: "Innovatech Solutions LLC",
  partyBAddress: "789 Future Way, San Jose, CA 95113",
  effectiveDate: "2026-07-01",
  purposeOfAgreement: "Discussions regarding a potential merger and joint database technology integration.",
  confidentialInformation: "All technical databases, schemas, API keys, source codes, and financial audits shared.",
  exclusions: "Information publicly known or independently developed by either party.",
  agreementDuration: "5 years from the effective date of disclosure",
  obligations: "Parties agree to treat all materials with standard commercial care and not disclose to third parties.",
  permittedDisclosures: "Disclosures to legal advisors, key officers, and auditors on a need-to-know basis.",
  partyASignature: "John Doe, Chief Executive Officer",
  partyBSignature: "Jane Smith, Chief Technology Officer",

  // — Consulting Agreement —
  consultantCompany: "AI Cryptography Consultants",
  consultantContact: "+1 (555) 700-1122 | adrian@coleconsulting.com",
  fixedFee: "$15,000.00 fixed project fee",
  expenses: "Travel and lodging expenses pre-approved up to $2,000.00",
  intellectualProperty: "All work product created by Consultant vests exclusively in the Client upon payment.",
  consultantSignature: "Adrian Cole",

  // — Rental Agreement —
  landlordName: "Daniel Whitfield",
  landlordAddress: "345 Palo Alto Rd, Palo Alto, CA 94301",
  landlordContact: "+1 (555) 888-2233",
  tenantName: "Marcus Lang",
  tenantAddress: "5230 Newell Rd, Palo Alto, CA 94303",
  tenantPhone: "+1 (555) 777-4455",
  propertyType: "Residential Single Family Home (4 Bedrooms)",
  leaseStartDate: "2026-08-01",
  leaseEndDate: "2027-07-31",
  monthlyRent: "$4,500.00 per month",
  securityDeposit: "$9,000.00 refundable deposit",
  rentDueDate: "1st day of each calendar month",
  utilities: "Tenant is responsible for water, power, gas, and high-speed internet",
  maintenance: "Landlord handles major structural repairs; Tenant maintains lawn and minor tasks.",
  petsPolicy: "Allowed with pre-approval and a $500 non-refundable pet fee.",
  smokingPolicy: "Strictly no smoking inside the premises.",
  landlordSignature: "Daniel Whitfield",
  tenantSignature: "Marcus Lang",

  // — Sales Contract —
  sellerName: "Marcus Craig",
  sellerCompany: "Craig Automotive Dealers",
  sellerAddress: "890 Auto Row, Detroit, MI 48201",
  buyerName: "Jonathan Reed",
  buyerCompany: "Reed Logistics Ltd.",
  buyerAddress: "85 Albert Embankment, London, UK",
  totalAmount: "$85,000.00",
  shippingMethod: "Enclosed vehicle container delivery",
  warrantyTerms: "12-month bumper-to-bumper dealer warranty included.",
  returnPolicy: "7-day exchange or full refund policy if vehicle is undamaged.",

  // — Partnership Agreement —
  partner1Name: "Marcus Lang",
  partner1Address: "Palo Alto, CA",
  partner1Ownership: "50% ownership stake",
  partner2Name: "Daniel Whitfield",
  partner2Address: "Palo Alto, CA",
  partner2Ownership: "50% ownership stake",
  industryType: "Software & Technology Incubator",
  capitalContribution: "$100,000.00 total initial capital contribution ($50,000.00 per partner)",
  profitSharing: "Profits and losses split 50/50, paid out quarterly.",
  partnerResponsibilities: "Erlich manages branding and relations; Richard handles tech development.",
  decisionMaking: "All major business expansion decisions require unanimous partner consent.",
  exitStrategy: "A partner may sell their shares back to the partnership or to an approved buyer.",
  partner1Signature: "Marcus Lang",
  partner2Signature: "Daniel Whitfield",

  // — Vendor Agreement —
  vendorName: "Global Hardware Corp",
  vendorCompany: "Global Hardware Corp",
  vendorAddress: "223 Industry Lane, Chicago, IL 60601",
  productsServices: "Supply of server rack components and backup power supplies.",
  qualityStandards: "All components must meet ISO 9001 quality specifications.",
  contractValue: "$250,000.00 annual procurement value",
  invoiceSchedule: "Net 30 upon invoice receipt at the end of each month.",
  vendorSignature: "Global Hardware Corp (Representative)",

  // — Proposal fields —
  proposalTitle: "Strategic Business Growth Proposal",
  proposalNumber: "PROP-2026-089",
  validUntil: "2026-08-30",
  executiveSummary: "A comprehensive plan to scale digital operations and optimize customer acquisition channels.",
  businessOverview: "Leading e-commerce consulting firm specializing in headless Next.js platforms.",
  proposalObjective: "Increase monthly active users (MAUs) by 250% over a 6-month period.",
  serviceName: "Headless Next.js Commerce Optimization",
  serviceCost: "$8,500.00",
  totalPrice: "$9,180.00",
  milestones: "Phase 1: Discovery (Week 2), Phase 2: Implementation (Week 5), Phase 3: Launch (Week 6)",
  termsConditions: "All proposal pricing is valid for 60 days from the issue date.",
  companySignature: "Marcus Vance, Director",
  goals: "Establish a robust design pattern, reduce checkout churn by 15%, and scale SEO rankings.",
  objectives: "Implement automated headless tests, integrate Stripe API, and speed up LCP page metrics.",
  scope: "Scope covers frontend redesign, search ranking optimizations, and API migrations.",
  estimatedCost: "$12,500.00 total estimated project cost",
  resourcesRequired: "1 Senior Frontend Developer, 1 QA Engineer, and 1 Product Designer",
  riskAssessment: "Potential delay in API credential provisioning by the client.",
  mitigationPlan: "Request sandbox API keys on Day 1 of kickoff.",
  proposalSignature: "Marcus Vance, Proposal Director",
  agencyName: "Apex Digital agency",
  campaignName: "Q3 Growth Campaign",
  targetAudience: "B2B SaaS tech founders and directors aged 28-55",
  marketingChannels: "SEO, Google Ads, and Meta Ads retargeting",
  seoStrategy: "Optimize 12 high-intent search keywords and compile backlink targets.",
  ppcStrategy: "Execute targeted search campaigns on Google Ads with localized audiences.",
  socialMediaStrategy: "Retargeting visitors using custom conversion events on Meta.",
  emailMarketingStrategy: "Automate onboarding journeys and monthly newsletters.",
  contentMarketingStrategy: "Publish 3 search-optimized technical blogs per month.",
  monthlyBudget: "$5,000.00 monthly campaign budget",
  adSpend: "$3,500.00 direct ad spend budget",
  agencyFee: "$1,500.00 campaign management fee",
  campaignStart: "2026-08-01",
  campaignEnd: "2026-10-31",
  kpiTraffic: "+120% increase in monthly search traffic",
  kpiLeads: "200+ marketing qualified leads (MQLs) monthly",
  kpiSales: "$45,000.00 in monthly recurring revenue growth",
  websiteType: "Headless E-commerce Store",
  numberOfPages: "12 custom responsive pages",
  designStyle: "Premium sleek dark mode with glassmorphism",
  responsiveDesign: "Fully optimized for desktop, tablet, and mobile browsers",
  cmsPlatform: "Sanity Studio CMS Integration",
  featureContactForm: "Custom inquiry form with validation",
  featureBlog: "Complete blogging engine with markdown support",
  featureEcommerce: "Stripe cart integration and checkouts",
  featureSeo: "Automatic metadata generation and sitemaps",
  featureAnalytics: "Vercel Speed Insights and Google Analytics tracking",
  designPhaseTimeline: "2-week initial design review",
  developmentPhaseTimeline: "4-week development and QA testing sprint",
  launchDate: "2026-09-15",
  designCost: "$3,500.00 UI/UX design fee",
  developmentCost: "$6,000.00 development fee",
  hostingCost: "$35.00 monthly hosting fee",
  maintenanceCost: "$150.00 monthly support retainer",
  problemStatement: "Existing client website experiences high bounce rates due to 6s page loads.",
  proposedSolution: "Rebuild site using Next.js App Router for sub-second page performance.",
  platform: "Vercel Web App Hosting",
  technologyStack: "Next.js, TypeScript, TailwindCSS, React",
  database: "PostgreSQL database hosting",
  apisIntegration: "Stripe checkout API and HubSpot CRM connection",
  securityMeasures: "HTTPS encryption, CORS protection, CSRF validation",
  phaseDiscovery: "Kickoff meeting, tech stack alignment, and specification sheet",
  phaseUiUx: "Figma wireframe design and mockup approval",
  phaseDevelopment: "Component assembly, route setup, database schemas",
  phaseTesting: "Automated unit testing, integration tests, user validation",
  phaseDeployment: "Production build deployment on Vercel",
  supportCost: "$250.00 monthly technical support",
  deliveryDate: "2026-10-15",
  businessChallenge: "Declining customer engagement on legacy portal.",
  scopeOfWork: "Strategic business audit and platform architecture recommendation.",
  fixedPrice: "$10,000.00 fixed strategic consulting fee",
  clientWebsite: "clientportal.com",
  seoMarketing: "Keyword research and backlink building campaigns",
  googleAdsSpend: "$2,000.00 search network campaign budget",
  metaAdsSpend: "$1,500.00 social media retargeting budget",
  socialMediaManagement: "Post schedule management across LinkedIn and Twitter",
  goalBrandAwareness: "Increase social media reach by 35%",
  goalLeadGeneration: "Generate 150+ monthly conversion leads",
  goalSales: "Achieve $25,000.00 in monthly sales growth",
  goalWebsiteTraffic: "Reach 10,000+ unique monthly visitors",
  campaignDuration: "6 Months",
  materialsList: "Premium structural lumber, concrete mix, and steel braces",
  equipmentList: "Standard excavator, cement mixer, and power tools",
  warrantyDetails: "5-year structural warranty on all labor and materials.",
  eventPlanner: "Olivia Adams, Principal Event Planner",
  eventType: "Corporate Annual Tech Conference",
  venueLocation: "Grand Ballroom, Marriott Marquis",
  expectedGuests: "250 corporate guests",
  cateringDetails: "Continental breakfast, buffet lunch, and afternoon tea service",
  decorationDetails: "Corporate backdrop, table centerpieces, and stage lighting",
  entertainmentDetails: "Keynote speaker, jazz trio during networking",
  photographyDetails: "Full-day professional photo and video package",
  venueCost: "$3,500.00 venue booking fee",
  cateringCost: "$4,000.00 food and beverage",
  decorationCost: "$1,500.00 decoration setup",
  preparationSchedule: "Venue booking (Month 1), Catering & Entertainment lock (Month 2), Setup (Day-of)",
  registrationNumber: "REG-NGO-112233",
  contactEmail: "grants@nonprofitfoundation.org",
  grantTitle: "Community Digital Literacy Grant",
  fundingRequested: "$50,000.00 requested funding",
  projectOverview: "Providing basic computer science and coding workshops to local youth.",
  targetBeneficiaries: "120+ underprivileged high school students in local communities",
  expectedOutcomes: "85% students pass digital certification test by project completion.",
  personnelBudget: "$25,000.00 instructional and coordination staff salaries",
  equipmentBudget: "$15,000.00 laptop purchases and lab setups",
  totalBudget: "$50,000.00 total requested budget",
  evaluationMetrics: "Weekly attendance tracking and hands-on coding tests",

  // — Letters fields —
  senderAddress: "123 Maple Street",
  senderCity: "Seattle",
  senderState: "WA",
  senderZip: "98101",
  senderCountry: "USA",
  recipientCity: "Boston",
  recipientState: "MA",
  recipientZip: "02108",
  letterDate: "2026-07-01",
  letterSubject: "Application for Senior Software Engineer Position",
  jobReferenceNumber: "REF-992288",
  openingParagraph: "I am writing to express my strong interest in the Senior Software Engineer position advertised on your careers website.",
  introduction: "I have over 6 years of experience building scalable cloud architectures, designing responsive React portals, and optimizing backend SQL queries.",
  whyInterested: "I admire your company's dedication to open-source software and developer enablement tools.",
  skillsExperience: "My core competencies include React, Next.js, Node.js, and Amazon Web Services (AWS) deployment environments.",
  keyAchievements: "Designed a database sharding strategy that reduced server costs by 30% and improved query speeds by 3x.",
  whyGoodFit: "My combined technical leadership and hands-on full-stack development experience align perfectly with your team needs.",
  closingParagraph: "Thank you for your time and consideration. I look forward to discussing how my experience can contribute to your goals.",
  complimentaryClosing: "Sincerely",
  signatureFullName: "Sarah Jenkins",
  employeeId: "EMP-4482-A",
  managerName: "John Watson, Director of Engineering",
  lastWorkingDay: "2026-07-31",
  reasonForResignation: "Accepting a role at a new startup to build developer tools.",
  appreciationMessage: "Thank you for the support, mentorship, and opportunities provided during my tenure here.",
  transitionSupport: "I will compile complete developer handovers and assist in onboarding my replacement before my departure.",
  closingMessage: "I wish the company and team continued growth and success.",
  recipientOrganization: "Massachusetts General Hospital",
  recipientAddress: "55 Fruit St, Boston, MA 02114",
  candidateName: "Dr. Watson",
  relationship: "Direct professional supervisor",
  durationKnown: "3 years",
  candidateSkills: "Advanced clinical diagnostic assessments, medical data management, and research publication.",
  candidateAchievements: "Co-authored 4 peer-reviewed clinical studies on database analysis.",
  candidateStrengths: "Exceptional attention to detail, proactive clinical judgment, and strong work ethic.",
  candidateWorkEthic: "Always goes above and beyond to support team clinical deliverables.",
  candidateCharacter: "Personable, highly ethical, and deeply dedicated to patient advocacy.",
  recommendationStatement: "I recommend him with the highest possible rating for your clinical program.",
  recommenderContactInfo: "contact@recommender.com | +1 (555) 449-3322",
  benefitsPackage: "Standard health insurances, dental care, and 20 days PTO",
  acceptanceDeadline: "2026-07-07",
  letterOpening: "I am writing this official letter regarding our quarterly strategic business alignment.",
  letterPurpose: "Coordinate vendor schedules, review deliverables, and outline new project parameters.",
  mainContent: "We plan to scale backend nodes, implement caching, and test user dashboards.",
  letterClosing: "We look forward to your positive feedback on these adjustments.",
  designation: "Senior Principal Consultant",
  customerServiceDept: "Customer Support & Returns Department",
  orderNumber: "ORD-882299",
  purchaseDate: "2026-06-15",
  productServiceName: "Templix Enterprise Edition (Annual Retainer)",
  issueDescription: "API access keys were not delivered after purchase confirmation.",
  resolutionRequested: "Immediate activation of API keys or full refund of annual fee.",
  reasonForGratitude: "Providing high-quality mentorship and software design reviews during my project.",
  futureRelationship: "I hope to stay in touch and collaborate on future open-source projects.",
  requestType: "Academic Records Release",
  purposeOfRequest: "Filing visa application documents for international transfer.",
  reasonForRequest: "Proof of academic completion is required by immigration services.",
  supportingInformation: "Student ID: ST-9988, graduation year: 2024.",
  hrManagerName: "Marcus Vance, HR Director",
  joiningDate: "2023-01-15",
  lastWorkingDate: "2026-06-30",
  totalExperience: "3 Years and 5 Months",
  performanceSummary: "Consistently exceeded performance targets and demonstrated technical leadership.",
  companySeal: "OFFICIAL CORPORATE SEAL",
};

// Slug-specific overrides for shared keys to prevent collisions (e.g. unitPrice, total)
export const SLUG_SPECIFIC_DEFAULTS: Record<string, Record<string, string>> = {
  "invoice-freelancer": {
    unitPrice: "$1,200",
    // subtotal $4,250 + 8% tax ($340) = $4,590 due — keep these internally consistent.
    total: "$4,590.00",
    amountDue: "4,590.00",
    subtotal: "$4,250.00",
    tax: "8%",
    discount: "$50.00"
  },
  "invoice-small-business": {
    unitPrice: "$24.99",
    tax: "8%",
    discount: "$50.00",
    subtotal: "$749.70",
    total: "$858.27",
    grandTotal: "$858.27"
  },
  "invoice-consulting": {
    hourlyRate: "$150.00",
    total: "$2,400.00",
    tax: "8%",
    // Body renders {{paymentTerms}}; keep it Net 15 to match the footer's
    // "Net 15 terms" instead of the global Net 30 default.
    paymentTerms: "Net 15"
  },
  "invoice-web-developer": {
    hourlyRate: "$95.00",
    total: "$15,200.00",
    tax: "8%",
    discount: "$50.00"
  },
  "invoice-graphic-designer": {
    total: "$3,600.00",
    tax: "8%"
  },
  "invoice-photography": {
    total: "$3,800.00",
    tax: "8%"
  },
  "invoice-contractor": {
    // Labor Subtotal must equal the two hardcoded labor rows in the preview
    // table (demolition $1,680 + framing $6,720), or the breakdown won't add up.
    laborCost: "$8,400.00",
    tax: "8%"
  },
  "invoice-cleaning-service": {
    total: "$970.00",
    tax: "8%"
  },
  "invoice-plumbing": {
    total: "$825.00",
    tax: "8%"
  },
  "invoice-hvac-service": {
    grandTotal: "$635.00",
    tax: "8%"
  },
  // India — GST tax invoice. 50,000 taxable + 9% CGST + 9% SGST = 59,000.
  // Intra-state supply, so IGST is nil; swap to 18% IGST for inter-state.
  "invoice-gst": {
    currency: "₹",
    gstin: "27AABCU9603R1ZM",
    placeOfSupply: "Maharashtra (27)",
    sacCode: "998314",
    clientName: "TechVentures Pvt. Ltd.",
    clientGstin: "27AAACT2727Q1ZW",
    invoiceNumber: "GST-2026-001",
    subtotal: "₹50,000.00",
    cgst: "₹4,500.00",
    sgst: "₹4,500.00",
    igst: "Nil (intra-state supply)",
    total: "₹59,000.00",
    amountInWords: "Fifty Nine Thousand Rupees Only",
    paymentMethod: "NEFT / UPI — details on request",
    tax: "18%"
  },
  "invoice-proforma": {
    currency: "₹",
    gstin: "27AABCU9603R1ZM",
    proformaNumber: "PI-2026-014",
    proformaDate: "July 3, 2026",
    validUntil: "August 2, 2026",
    clientName: "TechVentures Pvt. Ltd.",
    clientAddress: "Level 4, Prestige Tower, Bengaluru, KA 560001",
    subtotal: "₹25,000.00",
    total: "₹29,500.00",
    tax: "18%",
    paymentTerms: "50% advance on purchase order, balance before delivery",
    deliveryTerms: "Within 14 working days of receipt of the purchase order"
  },
  "freelance-agreement": {
    freelancerName: "Alex Carter",
    businessName: "Carter Creative Studio",
    clientName: "Jessica Wong",
    clientCompanyName: "Apex Marketing Group",
    clientAddress: "100 Broadway, Suite 400, Portland, OR 97205",
    clientEmail: "jessica.w@apexmarketing.com",
    clientPhone: "+1 (555) 877-6622",
    projectDescription: "Complete overhaul of company branding assets, style guides, and headless web layouts",
    // Fixed-term engagement: 6-week sprint. Concrete dates so the clause doesn't
    // read "commence on  and conclude by N/A (Indefinite)".
    startDate: "July 15, 2026",
    endDate: "August 26, 2026"
  },
  "freelance-contract": {
    freelancerName: "Alex Carter",
    businessName: "Carter Creative Studio",
    clientName: "Jessica Wong",
    clientCompanyName: "Apex Marketing Group",
    clientAddress: "100 Broadway, Suite 400, Portland, OR 97205",
    clientEmail: "jessica.w@apexmarketing.com",
    clientPhone: "+1 (555) 877-6622",
    projectDescription: "Complete overhaul of company branding assets, style guides, and headless web layouts",
    startDate: "July 15, 2026",
    endDate: "August 26, 2026"
  },
  "independent-contractor-agreement": {
    contractorName: "Robert Chen"
  },
  "service-agreement": {
    serviceDescription: "Commercial janitorial and office cleaning services.",
    serviceFee: "$1,200.00 per month",
    startDate: "August 1, 2026",
    endDate: "July 31, 2027"
  },
  "consulting-agreement": {
    consultantName: "Professor Adrian Cole"
  },
  // Resumes: graduation must precede the first job in the (hardcoded) experience
  // timeline, otherwise the sample reads as impossible (e.g. "5+ yrs, first job
  // 2019" but "graduated 2024"). Fresher/entry resumes keep the recent default.
  "resume-software-engineer": {
    graduationYear: "2018"
  },
  "resume-teacher": {
    graduationYear: "2015"
  },
  "marketing-proposal": {
    contactDetails: "hello@apexagency.co | +1 (555) 302-8811"
  },
  "web-design-proposal": {
    designerName: "Sarah Jenkins, Lead Web Designer"
  },
  "construction-proposal": {
    licenseNumber: "LIC-CON-998877",
    laborHours: "180 total labor hours",
    materialCost: "$4,500.00",
    laborCost: "$6,000.00",
    equipmentCost: "$1,500.00"
  },
  "event-proposal": {
    eventName: "Innovate Tech Summit 2026",
    eventDate: "2026-11-20"
  },
  "experience-letter": {
    responsibilities: "Full-stack development, database schema management, and code reviews."
  },
  // Reports
  "business-report": {
    reportPeriod: "Q3 2026", preparedBy: "Jane Whitfield", department: "Strategy & Finance",
    executiveSummary: "Northwind Analytics delivered a strong quarter with double-digit revenue growth, improved margins, and record enterprise retention.",
    revenueGrowth: "+13.5%", netMargin: "18.2%",
    keyRisk: "Concentration of revenue among the top five enterprise accounts remains above target thresholds.",
    strategicRecommendation: "Diversify the customer base by accelerating mid-market expansion and launching two new subscription tiers next quarter."
  },
  "project-status-report": {
    reportPeriod: "Week 6 of 12", preparedBy: "Marcus Feldman", overallStatus: "On Track",
    percentComplete: "52%", budgetStatus: "On budget — 48% of allocation spent",
    topBlocker: "Awaiting client sign-off on data migration scope, delaying the integration workstream.",
    nextMilestone: "Core Build completion (Week 6)"
  },
  "annual-report": {
    reportPeriod: "2026", preparedBy: "Eleanor Voss, CFO",
    chairMessage: "On behalf of the board, I am pleased to report a year of disciplined growth, strengthened governance, and meaningful progress against our long-term strategy.",
    fullYearRevenue: "$214.8M", yoyGrowth: "+17.8%", dividendPerShare: "$0.62",
    outlookStatement: "We enter the coming year confident in our balance sheet, our pipeline, and our ability to compound shareholder value through disciplined capital allocation."
  },
  "financial-report": {
    reportPeriod: "Q2 2026", preparedBy: "Daniel Roarke", department: "Finance Department",
    totalRevenue: "$5.0M", operatingExpenses: "$1.3M", netProfit: "$0.9M", cashPosition: "$3.4M",
    analystNote: "Margins expanded on operating leverage and stable input costs; management maintains full-year guidance."
  },
  "sales-report": {
    reportPeriod: "June 2026", preparedBy: "Priya Nandakumar", department: "Revenue Operations",
    totalSales: "$1.32M", quotaAttainment: "104% of target", topRegion: "North America",
    pipelineValue: "$4.7M open pipeline",
    salesAction: "Prioritize EMEA renewals at risk and accelerate two late-stage enterprise deals to close before quarter-end."
  },
  "marketing-report": {
    reportPeriod: "June 2026", preparedBy: "Chloe Bennett", department: "Growth Marketing",
    totalSpend: "$27,000", leadsGenerated: "1,570", costPerLead: "$17.20",
    bestChannel: "Organic / SEO — lowest cost per lead and highest conversion rate",
    nextQuarterFocus: "Double down on content-led SEO, launch a lifecycle email program, and pilot paid social retargeting."
  },
  "incident-report": {
    reportPeriod: "June 2026", preparedBy: "Alex Turner", department: "Site Reliability",
    incidentId: "INC-2026-0417", severity: "SEV-2",
    incidentSummary: "A configuration change to the primary region load balancer caused elevated error rates for a subset of customers for approximately 51 minutes.",
    rootCause: "An unvalidated configuration deployment removed a required health-check rule, routing traffic to an unhealthy node pool.",
    correctiveAction: "Rolled back the configuration, restored healthy routing, and added a mandatory pre-deployment validation gate for load balancer changes."
  },
  "research-report": {
    reportPeriod: "Jan–Jun 2026", preparedBy: "Dr. Hannah Ostrom", department: "Research Division",
    researchTitle: "Adoption Drivers in Enterprise SaaS",
    abstract: "This study examines the factors influencing adoption and retention of enterprise SaaS platforms across three customer cohorts, drawing on survey, interview, and secondary data.",
    methodology: "A mixed-methods design combining a 1,200-respondent survey, structured practitioner interviews, and secondary analysis of published industry datasets, with significance tested at the 0.05 level.",
    keyFinding: "Onboarding quality was the strongest predictor of twelve-month retention, outweighing price sensitivity across all cohorts.",
    conclusion: "Investing in structured onboarding and early value realization materially improves adoption and retention, warranting reallocation of budget toward customer enablement."
  },
  "progress-report": {
    reportPeriod: "June 2026", preparedBy: "Nathan Cole", engagementName: "Operating Model Redesign",
    overallProgress: "62%", hoursThisPeriod: "148 hours",
    clientDependency: "Awaiting finalized headcount data from the client HR team to complete the target operating model.",
    upcomingFocus: "Complete the design workstream, begin rollout readiness planning, and prepare the executive steering committee update."
  },
  "audit-report": {
    reportPeriod: "FY2026", preparedBy: "Rebecca Lindqvist",
    auditScope: "Review of IT general controls, vendor management, and business continuity processes across the primary operating entities.",
    overallOpinion: "Partially Satisfactory — controls are largely effective with several areas requiring remediation.",
    highRiskCount: "1",
    keyFindingSummary: "Access reviews were not consistently performed, vendor contracts lacked standardized SLA clauses, and backup restoration testing was not evidenced.",
    managementResponse: "Management accepts all findings and has committed to remediation within the stated timelines, assigning owners for each action item."
  },
  // Business Plans
  "startup-business-plan": {
    foundedYear: "2025", missionStatement: "Empower small businesses with affordable no-code automation.",
    fundingAsk: "$1,000,000", founderName: "Priya Nair"
  },
  "restaurant-business-plan": {
    cuisineType: "Modern American", seatingCapacity: "84", ownerName: "Marcus Bellini",
    conceptStatement: "Seasonal, locally-sourced plates in a warm neighborhood setting."
  },
  "coffee-shop-business-plan": {
    ownerName: "Elena Novak", dailyCustomers: "300", averageTicket: "$6.50", roastPartner: "Ironbark Roasters"
  },
  "ecommerce-business-plan": {
    founderName: "Jordan Lee", productNiche: "sustainable home goods", targetAOV: "$68", storePlatform: "Shopify"
  },
  "nonprofit-business-plan": {
    executiveDirector: "Angela Ruiz",
    missionStatement: "Expand access to education and economic opportunity in underserved communities.",
    einNumber: "84-3921750", beneficiariesServed: "2,500 youth"
  },
  "real-estate-business-plan": {
    brokerName: "David Whitmore", licenseNumber: "RE-0198442", farmArea: "Lakeview and Highland Park", targetTransactions: "140"
  },
  "salon-business-plan": {
    ownerName: "Sophia Laurent", numberOfStations: "8", serviceFocus: "Hair & Color", averageServicePrice: "$95"
  },
  "consulting-business-plan": {
    principalName: "Rachel Coen", practiceArea: "Operations Strategy", targetDayRate: "$2,000", billableConsultants: "5"
  },
  "tech-startup-business-plan": {
    founderName: "Aiden Park",
    productVision: "Ship AI features in hours, not months, with reliable developer infrastructure.",
    fundingRound: "$3M seed round", targetArr: "$10M ARR"
  },
  "fitness-gym-business-plan": {
    ownerName: "Tyler Brooks", facilitySize: "6,500 sq ft", membershipTarget: "600", monthlyMembershipFee: "$89"
  },
  // Quotations
  "price-quotation": { quoteNumber: "QT-1042", quoteDate: "July 3, 2026", validUntil: "August 2, 2026" },
  "construction-quotation": {
    quoteNumber: "CB-2087", quoteDate: "July 3, 2026", validUntil: "August 2, 2026",
    projectAddress: "418 Ridgeline Drive, Austin, TX", projectScope: "New 2,400 sq ft residential extension", estimatedDuration: "14 weeks"
  },
  "it-services-quotation": {
    quoteNumber: "TB-3310", quoteDate: "July 3, 2026", validUntil: "August 2, 2026",
    contractTerm: "12 months", slaLevel: "Business Standard", monthlyTotal: "$2,900.00"
  },
  "catering-quotation": {
    quoteNumber: "FF-5521", quoteDate: "July 3, 2026", validUntil: "July 24, 2026",
    eventDate: "September 12, 2026", guestCount: "120", menuStyle: "Plated dinner", perPersonRate: "$58"
  },
  "printing-quotation": {
    quoteNumber: "IW-7745", quoteDate: "July 3, 2026", validUntil: "July 17, 2026",
    paperStock: "Gloss art 170gsm", turnaround: "5 business days"
  },
  "transport-quotation": {
    quoteNumber: "SM-6620", quoteDate: "July 3, 2026", validUntil: "July 18, 2026",
    originCity: "Chicago, IL", destinationCity: "Nashville, TN", cargoWeight: "18,500 lbs"
  },
  "event-quotation": {
    quoteNumber: "GS-4408", quoteDate: "July 3, 2026", validUntil: "July 23, 2026",
    eventName: "Annual Leadership Summit", eventDate: "October 5, 2026", venue: "Harborview Convention Center", guestCount: "350"
  },
  "software-development-quotation": {
    quoteNumber: "BF-9012", quoteDate: "July 3, 2026", validUntil: "August 2, 2026",
    projectName: "CustomerHub SaaS Platform", techStack: "Next.js, Node.js, PostgreSQL", timeline: "16 weeks"
  },
  "cleaning-services-quotation": {
    quoteNumber: "PS-2256", quoteDate: "July 3, 2026", validUntil: "August 2, 2026",
    propertyType: "Corporate office suite", squareFootage: "12,000 sq ft", frequency: "5 nights per week"
  },
  "interior-design-quotation": {
    quoteNumber: "AI-3378", quoteDate: "July 3, 2026", validUntil: "August 2, 2026",
    roomType: "Open-plan living room", designStyle: "Modern Scandinavian"
  },
  // Reports (batch 2)
  "weekly-status-report": {
    weekEnding: "July 4, 2026", overallHealth: "On Track (Green)",
    highlightSummary: "The team hit all committed deliverables this week and cleared the carried-over backlog ahead of the client review.",
    topBlocker: "Awaiting sign-off on the revised scope from the client sponsor.",
    upcomingPriority: "Complete the draft recommendations deck for stakeholder review."
  },
  "monthly-performance-report": {
    monthLabel: "June 2026", uptimePercent: "99.95%", slaCompliance: "100%", throughputVolume: "1.84M transactions",
    performanceSummary: "Operations delivered above-target availability and throughput with no critical incidents during the month.",
    improvementAction: "Roll out autoscaling on the payments tier to absorb peak-window latency spikes."
  },
  "expense-report": {
    reportId: "EXP-2026-0642", reimbursableAmount: "$826.50", approverName: "Marcus Feldman, Finance Manager",
    expenseNotes: "Client dinner exceeded the standard per-diem due to a large attendee group; pre-approved by department lead."
  },
  "inventory-report": {
    warehouseLocation: "Distribution Center 3, Columbus OH", totalSkus: "1,472", stockValue: "$2.38M", lowStockCount: "14",
    reorderAction: "Raise purchase orders for finished goods and the two fast-moving SKUs projected to stock out within lead time."
  },
  "employee-performance-report": {
    employeeName: "Priya Nair", jobTitle: "Senior Product Analyst", overallRating: "Exceeds Expectations (4.2 / 5)",
    reviewCycle: "H1 2026", managerName: "David Okonkwo",
    developmentGoal: "Take ownership of the quarterly roadmap planning process and mentor one additional junior analyst."
  },
  "market-analysis-report": {
    marketName: "North American SaaS Analytics", marketSize: "$14.6B", cagr: "12.4%", leadingCompetitor: "Datawave Analytics",
    keyOpportunity: "Underserved mid-market segment growing at 14% with weak incumbent coverage.",
    strategicImplication: "Prioritize a mid-market product tier and channel partnerships to capture share ahead of incumbents."
  },
  "quarterly-report": {
    quarterLabel: "Q2 FY2026", quarterRevenue: "$100.8M", quarterlyGrowth: "+13.2% YoY", ebitdaMargin: "27.5%",
    ceoComment: "We delivered double-digit growth led by subscription momentum while expanding margins through disciplined cost management.",
    nextQuarterGuidance: "We expect Q3 revenue of $104M-$108M with continued margin expansion driven by the subscription mix shift."
  },
  "compliance-report": {
    regulationFramework: "SOC 2 Type II", complianceScore: "92%", openViolations: "3", remediationOwner: "Angela Torres, Chief Compliance Officer",
    attestationStatement: "Based on the evidence reviewed, controls operated effectively except for the noted data-retention and vendor-assessment gaps, which are scheduled for remediation within 30 days."
  },
  "feasibility-report": {
    projectName: "Riverside Fulfillment Automation", estimatedCost: "$4.7M", projectedRoi: "31% over 5 years",
    paybackPeriod: "3.2 years", viabilityScore: "78 / 100 (Favorable)",
    recommendation: "Proceed with a phased pilot before full-scale rollout, releasing capital against milestone gates to contain overrun risk."
  },
  "site-inspection-report": {
    siteName: "Meridian Tower, Phase 2", inspectorName: "Raymond Hollis, Lic. #BC-40912", overallCondition: "Fair — remediation required",
    defectCount: "6", permitStatus: "Valid through Dec 2026",
    followUpAction: "Rectify all high-priority electrical and guardrail defects before the next concrete pour and schedule a verification re-inspection."
  },
  // Business Plans (batch 2)
  "bakery-business-plan": { specialtyProduct: "24-hour naturally leavened sourdough", dailyOutput: "400", wholesaleAccounts: "12" },
  "food-truck-business-plan": { cuisineStyle: "Korean-Mexican Fusion", serviceRadius: "25-mile", eventsPerMonth: "10" },
  "clothing-boutique-business-plan": { apparelStyle: "Modern Women's", averageBasket: "$120" },
  "daycare-business-plan": { licensedCapacity: "64", ageRange: "6 weeks to 5 years", weeklyTuition: "$310" },
  "cleaning-company-business-plan": { serviceArea: "Greater Metro", crewCount: "4", averageJobPrice: "$180" },
  "photography-business-plan": { photographyNiche: "Wedding & Portrait", sessionRate: "$450" },
  "landscaping-business-plan": { serviceRegion: "North County", crewCount: "3", averageContractValue: "$3,200" },
  "auto-repair-business-plan": { bayCount: "6", laborRate: "$130/hour" },
  "spa-business-plan": { treatmentFocus: "Massage & Skincare", treatmentRooms: "6", averageTreatmentPrice: "$135" },
  "franchise-business-plan": { franchiseBrand: "BrightBrand", initialFranchiseFee: "$45,000", royaltyRate: "6%", targetUnits: "45" },
  // Quotations (batch 2)
  "plumbing-quotation": { propertyAddress: "48 Riverside Lane, Portland, OR 97201", jobScope: "Master bath re-pipe, fixture install, and water heater replacement" },
  "electrical-quotation": { siteAddress: "215 Oakmont Ave, Austin, TX 78704", panelRating: "200A" },
  "landscaping-quotation": { propertySize: "0.35-acre", projectType: "full backyard landscape renovation" },
  "painting-quotation": { surfaceArea: "1,800 sq ft of interior walls and trim", paintFinish: "eggshell" },
  "hvac-quotation": { systemType: "central air conditioning and gas furnace system", tonnage: "3-ton" },
  "roofing-quotation": { roofType: "architectural asphalt shingle", roofArea: "2,400 sq ft (24 squares)" },
  "marketing-quotation": { campaignName: "Q3 Growth Accelerator", channelFocus: "paid search, SEO, and content" },
  "photography-quotation": { shootType: "full-day wedding coverage", shootDate: "September 14, 2026", deliverables: "400 edited images, online gallery, and album" },
  "web-design-quotation": { projectName: "the corporate marketing website", pageCount: "8 responsive pages" },
  "consulting-quotation": { engagementName: "Operations Transformation", engagementTerm: "a 10-week engagement" }
};

// Distinct letterhead brand (company / person) per template, so every cover and
// preview reads as its own document instead of all showing "Acme Global Inc.".
export const SLUG_BRAND: Record<string, string> = {
  // Invoices
  "invoice-freelancer": "Jenkins Digital Studio",
  "invoice-small-business": "Bloom & Co. Boutique",
  "invoice-consulting": "Rivera Strategy Group",
  "invoice-contractor": "Thompson Construction",
  "invoice-graphic-designer": "Morgan Creative Studio",
  "invoice-web-developer": "Wilson WebWorks",
  "invoice-cleaning-service": "SparkleClean Services",
  "invoice-photography": "Emma Nguyen Photography",
  "invoice-hvac-service": "Garcia HVAC Solutions",
  "invoice-plumbing": "FastFlow Plumbing Co.",
  "invoice-timesheet": "Apex Contract Staffing",
  "invoice-milestone": "Nova Software Agency",
  "invoice-receipt": "Downtown General Store",
  "invoice-rental": "Hendricks Property Rentals",
  "invoice-estimate": "BuildRight Contractors",
  "invoice-purchase-order": "Global Supply Partners",
  "invoice-hourly-rate": "Sarah Jenkins Consulting",
  "invoice-recurring-subscription": "CloudNine SaaS",
  "invoice-medical": "Riverside Medical Clinic",
  "invoice-gst": "Umang Digital Services LLP",
  "invoice-proforma": "Umang Digital Services LLP",
  // Resumes (person names)
  "resume-software-engineer": "Sarah Jenkins",
  "resume-data-analyst": "Michael Chen",
  "resume-project-manager": "Olivia Adams",
  "resume-graphic-designer": "Alex Morgan",
  "resume-registered-nurse": "Emily Carter, RN",
  "resume-teacher": "David Brooks",
  "resume-marketing-manager": "Jessica Wong",
  "resume-customer-service": "Daniel Reed",
  "resume-accountant": "Priya Sharma, CPA",
  "resume-sales-representative": "Marcus Bell",
  "resume-fresher-graduate": "Ava Martinez",
  "resume-product-manager": "Ryan Cooper",
  "resume-devops-engineer": "Nina Patel",
  // Contracts
  "freelance-agreement": "Carter Creative Studio",
  "employment-contract": "Acme Global Inc.",
  "freelance-contract": "Carter Creative Studio",
  "independent-contractor-agreement": "RC Consulting Services",
  "service-agreement": "CleanSpace Facilities",
  "nda-template": "Innovatech Solutions",
  "consulting-agreement": "Turing Consulting",
  "rental-agreement": "Hendricks Properties",
  "sales-contract": "Craig Automotive",
  "partnership-agreement": "Northgate Partners",
  "vendor-agreement": "Global Hardware Corp",
  "residential-lease-agreement": "Palo Alto Realty",
  "influencer-collaboration-agreement": "Nova Brands",
  "photography-services-contract": "Emma Nguyen Photography",
  // Proposals
  "business-proposal": "Apex Digital Agency",
  "project-proposal": "Nova Software Agency",
  "marketing-proposal": "Apex Digital Agency",
  "web-design-proposal": "Pixel Perfect Studio",
  "software-development-proposal": "CodeCraft Labs",
  "consulting-proposal": "Rivera Strategy Group",
  "digital-marketing-proposal": "GrowthHive Marketing",
  "construction-proposal": "BuildRight Contractors",
  "event-proposal": "Adams Event Co.",
  "grant-proposal": "Community Foundation",
  "seo-services-proposal": "RankUp SEO",
  "video-production-proposal": "Reel Motion Studio",
  // Letters
  "cover-letter": "Sarah Jenkins",
  "resignation-letter": "David Miller",
  "recommendation-letter": "Dr. Robert Vance",
  "offer-letter": "Acme Global Inc.",
  "business-letter": "Rivera Strategy Group",
  "complaint-letter": "Jane Smith",
  "thank-you-letter": "Sarah Jenkins",
  "request-letter": "Michael Chen",
  "appointment-letter": "Acme Global Inc.",
  "experience-letter": "Acme Global Inc.",
  "internship-cover-letter": "Ava Martinez",
  "character-reference-letter": "Robert Vance",
  "promotion-request-letter": "Daniel Reed",
  // New invoice templates
  "invoice-construction": "Summit Build Contractors",
  "invoice-it-services": "Nexus IT Solutions",
  "invoice-restaurant": "The Copper Kitchen",
  "invoice-catering": "Savory Spoon Catering",
  "invoice-landscaping": "GreenScape Grounds Co.",
  "invoice-tutoring": "BrightMinds Tutoring",
  "invoice-legal-services": "Hale & Whitmore Law LLP",
  "invoice-marketing-agency": "Momentum Marketing Agency",
  "invoice-electrician": "VoltPro Electrical",
  "invoice-interior-design": "Haven Interior Design Studio",
  "invoice-auto-repair": "Precision Auto Works",
  "invoice-daycare": "Little Sprouts Childcare",
  "invoice-ecommerce": "UrbanCart Online",
  // New resume templates
  "resume-ux-designer": "Maya Patel",
  "resume-financial-analyst": "Ethan Brooks",
  "resume-hr-manager": "Sophia Reyes",
  "resume-mechanical-engineer": "Liam Foster",
  "resume-content-writer": "Chloe Bennett",
  "resume-business-analyst": "Noah Williams",
  "resume-executive-assistant": "Grace Kim",
  "resume-cybersecurity-analyst": "Aiden Clark",
  "resume-pharmacist": "Isabella Torres, RPh",
  "resume-civil-engineer": "Lucas Martin, PE",
  // New contract templates
  "commercial-lease-agreement": "Summit Ridge Commercial Properties",
  "loan-agreement": "Summit Capital Partners",
  "subcontractor-agreement": "Ironclad Construction Group",
  "licensing-agreement": "BrightWave Media Licensing",
  "non-compete-agreement": "Vantage Point Enterprises",
  "joint-venture-agreement": "Meridian Ventures LLC",
  "equipment-rental-agreement": "HeavyLift Equipment Rentals",
  "catering-contract": "Gourmet Table Catering Co.",
  "web-development-contract": "PixelForge Web Studio",
  "severance-agreement": "Northgate Corporation",
  // New proposal templates
  "branding-proposal": "Vivid Brand Studio",
  "app-development-proposal": "Appforge Labs",
  "social-media-proposal": "Buzzwave Social",
  "interior-design-proposal": "Haven Interiors",
  "catering-proposal": "Savory Table Catering",
  "real-estate-proposal": "Keystone Realty Group",
  "sponsorship-proposal": "Summit Events Co.",
  "training-proposal": "Elevate Learning Partners",
  "research-proposal": "Insight Research Institute",
  "partnership-proposal": "Alliance Ventures",
  // New letter templates
  "reference-letter": "Dr. Alan Grant",
  "apology-letter": "Nova Retail Group",
  "invitation-letter": "Adams Event Co.",
  "warning-letter": "Acme Global Inc.",
  "termination-letter": "Meridian Corp",
  "welcome-letter": "BrightPath Technologies",
  "authorization-letter": "Sarah Jenkins",
  "sponsorship-letter": "Riverside Youth Foundation",
  "farewell-letter": "David Miller",
  "follow-up-letter": "Michael Chen",
  // Reports
  "business-report": "Northwind Analytics",
  "project-status-report": "Apex Project Group",
  "annual-report": "Vertex Holdings Inc.",
  "financial-report": "Sterling Finance Group",
  "sales-report": "Momentum Sales Co.",
  "marketing-report": "BrightReach Marketing",
  "incident-report": "SafeGuard Operations",
  "research-report": "Insight Research Labs",
  "progress-report": "Milestone Consulting",
  "audit-report": "Clarity Audit Partners",
  // Business Plans
  "startup-business-plan": "NexGen Ventures",
  "restaurant-business-plan": "The Copper Fork",
  "coffee-shop-business-plan": "Daybreak Coffee Co.",
  "ecommerce-business-plan": "ShopSphere",
  "nonprofit-business-plan": "Bright Futures Foundation",
  "real-estate-business-plan": "Cornerstone Realty",
  "salon-business-plan": "Luxe Hair & Beauty",
  "consulting-business-plan": "Pinnacle Advisory",
  "tech-startup-business-plan": "CodeNova Labs",
  "fitness-gym-business-plan": "IronCore Fitness",
  // Quotations
  "price-quotation": "Vantage Supplies Co.",
  "construction-quotation": "Cornerstone Builders",
  "it-services-quotation": "TechBridge Solutions",
  "catering-quotation": "Feast & Fork Catering",
  "printing-quotation": "InkWorks Printing",
  "transport-quotation": "SwiftMove Logistics",
  "event-quotation": "Grand Stage Events",
  "software-development-quotation": "ByteForge Studio",
  "cleaning-services-quotation": "PureShine Cleaning",
  "interior-design-quotation": "Aria Interiors Studio",
  // Reports (batch 2)
  "weekly-status-report": "Cadence Consulting",
  "monthly-performance-report": "Bluepeak Operations",
  "expense-report": "LedgerLine Finance",
  "inventory-report": "StockFlow Warehousing",
  "employee-performance-report": "TalentEdge HR",
  "market-analysis-report": "Insight Metrics Group",
  "quarterly-report": "Vantage Corporate",
  "compliance-report": "SafeHarbor Compliance",
  "feasibility-report": "Cornerstone Advisory",
  "site-inspection-report": "BuildCheck Inspections",
  // Business Plans (batch 2)
  "bakery-business-plan": "Golden Crust Bakery",
  "food-truck-business-plan": "Rolling Bites",
  "clothing-boutique-business-plan": "Willow & Thread",
  "daycare-business-plan": "Little Explorers Daycare",
  "cleaning-company-business-plan": "FreshNest Cleaning",
  "photography-business-plan": "Lumen Photography",
  "landscaping-business-plan": "Evergreen Landscapes",
  "auto-repair-business-plan": "TorqueMasters Auto",
  "spa-business-plan": "Serenity Day Spa",
  "franchise-business-plan": "BrightBrand Franchising",
  // Quotations (batch 2)
  "plumbing-quotation": "FlowRight Plumbing",
  "electrical-quotation": "VoltEdge Electrical",
  "landscaping-quotation": "GreenVista Landscaping",
  "painting-quotation": "TrueCoat Painting",
  "hvac-quotation": "ClimatePro HVAC",
  "roofing-quotation": "SummitLine Roofing",
  "marketing-quotation": "Amplify Marketing",
  "photography-quotation": "Lumina Photography",
  "web-design-quotation": "Nova Web Design",
  "consulting-quotation": "Meridian Consulting",
  // New letters
  "letter-salary-increase": "Acme Global Inc.",
  "letter-leave-application": "Acme Global Inc.",
  "letter-noc": "Umang Digital Services LLP",
  "letter-business-introduction": "GrowthHive Marketing",
  "letter-payment-reminder": "Jenkins Digital Studio",
  "letter-reference-request": "Michael Chen",
  // New invoices
  "invoice-commercial-export": "Meridian Exports Pvt. Ltd.",
  "invoice-credit-note": "Bloom & Co. Boutique",
  // New resumes / CV
  "resume-career-change": "Jordan Ellis",
  "resume-internship": "Ava Martinez",
  "cv-academic": "Dr. Elena Rossi",
  // New contracts
  "contract-roommate": "Maple Street Apartment",
  "contract-social-media": "GrowthHive Marketing",
  // New proposals
  "proposal-one-page": "Apex Digital Agency",
  "proposal-cleaning-services": "SparkleClean Services",
  // New reports
  "report-internship": "Priya Sharma",
  "report-book": "Ethan Brooks",
  "report-lab": "Chloe Bennett",
  // New business plans
  "business-plan-one-page": "BrightBox",
  "business-plan-lean-canvas": "FlowState",
  // New quotations
  "quotation-security-services": "GuardWell Security Services",
  "quotation-amc": "TechCare IT Solutions",
};

export const SLUG_EXTRA_DEFAULTS: Record<string, Record<string, string>> = {
  "invoice-timesheet": {
    billingPeriodStart: "June 1, 2026",
    billingPeriodEnd: "June 5, 2026",
    // Must match the daily log in the preview table (Mon/Wed/Fri × 8h = 24h),
    // or the header contradicts the visible rows.
    totalHours: "24"
  },
  "invoice-milestone": {
    contractRef: "MSA-2026-0042",
    milestoneNumber: "2",
    milestoneName: "Core Build & Integration",
    milestoneStatus: "In Progress"
  },
  "invoice-receipt": {
    payerName: "Daniel Cortez",
    receiptNumber: "RCPT-2026-0417",
    paymentDate: "June 28, 2026",
    transactionId: "TXN-88213004",
    amountPaid: "$4,500.00"
  },
  "invoice-rental": {
    unitNumber: "4B",
    rentalPeriod: "July 2026",
    baseRent: "$1,850.00",
    additionalFees: "$185.00"
  },
  "invoice-estimate": {
    estimateNumber: "EST-2026-0231",
    issueDate: "July 3, 2026",
    estimatedTotal: "$13,200.00"
  },
  "invoice-purchase-order": {
    supplierName: "Global Hardware Corp",
    orderDate: "July 1, 2026",
    deliveryAddress: "1400 Logistics Park Dr, Dock 7, Memphis, TN 38118",
    goodsDescription: "Data center hardware — server racks, UPS units, and Cat6 cabling",
    totalCost: "$7,660.00"
  },
  "invoice-recurring-subscription": {
    billingPeriod: "July 1 – July 31, 2026"
  },
  "invoice-medical": {
    patientName: "Laura Bennett",
    insuranceRef: "BCBS-8842-0091"
  },
  "invoice-catering": {
    menuPackage: "Plated Dinner Package",
    gratuity: "$1,627.20"
  },
  "invoice-tutoring": {
    studentName: "Ethan Bennett",
    billingPeriodStart: "June 1, 2026",
    billingPeriodEnd: "June 30, 2026",
    totalHours: "13.5"
  },
  "invoice-legal-services": {
    matterName: "Contract Dispute — Bennett v. Halcyon LLC",
    matterNumber: "LGL-2026-0188",
    retainerApplied: "$2,500.00"
  },
  "invoice-auto-repair": {
    vehicleMakeModel: "2019 Honda Accord EX-L",
    vehicleVin: "1HGCV1F30KA012345",
    odometer: "68,240"
  },
  "invoice-daycare": {
    childName: "Mia Thompson",
    billingPeriodStart: "June 1, 2026",
    billingPeriodEnd: "June 30, 2026"
  },
  "resume-fresher-graduate": {
    objective: "Motivated Computer Science graduate seeking an entry-level software engineering role to apply strong programming fundamentals and a passion for building user-focused products."
  },
  "resume-product-manager": {
    productSkills: "Roadmapping, user research, A/B testing, OKRs, backlog prioritization, go-to-market strategy"
  },
  "resume-devops-engineer": {
    certifications: "AWS Certified DevOps Engineer – Professional, Certified Kubernetes Administrator (CKA), HashiCorp Terraform Associate"
  },
  "resume-ux-designer": {
    uxResearchSkills: "User interviews, usability testing, journey mapping, A/B testing, persona development",
    designTools: "Figma, Sketch, Adobe XD, Framer, Miro",
    prototypingSkills: "Interactive prototyping, micro-interactions, design handoff, motion design",
    designSystems: "Component libraries, design tokens, accessibility (WCAG 2.1), pattern documentation",
    featuredCaseStudy: "Redesigned a 2M-user SaaS onboarding flow, lifting task-completion rate from 62% to 91% across 30+ usability tests."
  },
  "resume-financial-analyst": {
    financialModeling: "3-statement modeling, DCF, LBO, scenario and sensitivity analysis",
    valuationSkills: "DCF valuation, comparable company analysis, precedent transactions, accretion/dilution",
    financialSoftware: "Excel (advanced), Power BI, Bloomberg Terminal, Capital IQ, SAP",
    forecastingSkills: "Budgeting, rolling forecasts, variance analysis, revenue and cash-flow projection",
    keyDeal: "Built the DCF model underpinning a $45M acquisition that delivered a projected 22% IRR."
  },
  "resume-hr-manager": {
    talentAcquisition: "Full-cycle recruiting, employer branding, structured interviewing, ATS management, campus hiring",
    employeeRelations: "Conflict resolution, investigations, engagement programs, DEI initiatives",
    hrSoftware: "Workday, BambooHR, ADP Workforce Now, Greenhouse, SAP SuccessFactors",
    compensationSkills: "Salary benchmarking, benefits administration, pay-equity analysis, open enrollment",
    hrInitiative: "Launched an engagement and retention program that lifted annual retention by 15% company-wide."
  },
  "resume-mechanical-engineer": {
    cadSkills: "SolidWorks, AutoCAD, CATIA, Creo, GD&T",
    simulationSkills: "ANSYS FEA, thermal analysis, CFD, tolerance stack-up analysis",
    manufacturingSkills: "DFM/DFA, CNC machining, injection molding, sheet metal, lean manufacturing",
    engineeringStandards: "ASME Y14.5, ISO 9001, Six Sigma, GD&T",
    keyProject: "Led the design of a hydraulic actuator assembly in SolidWorks that cut part count 30% and unit cost 18%."
  },
  "resume-content-writer": {
    writingSkills: "Long-form articles, copywriting, editing, storytelling, brand voice development",
    seoWritingSkills: "Keyword research, on-page SEO, search intent optimization, Surfer SEO, Clearscope",
    cmsTools: "WordPress, HubSpot, Contentful, Webflow, Google Docs",
    contentTypes: "Blog posts, whitepapers, case studies, email newsletters, landing pages",
    featuredByline: "Authored a long-form SaaS growth guide that ranked #1 for a 12,000-search-volume keyword and drove 40K monthly visits."
  },
  "resume-business-analyst": {
    analysisSkills: "Gap analysis, cost-benefit analysis, data-driven decision support, root-cause analysis",
    requirementsSkills: "Requirements elicitation, user stories, acceptance criteria, use cases, UAT",
    baTools: "Jira, Confluence, SQL, Tableau, Visio, Balsamiq",
    processModeling: "BPMN, current/future-state mapping, workflow optimization, swimlane diagrams",
    keyEngagement: "Elicited 200+ requirements for an ERP rollout that cut post-launch change requests by 40%."
  },
  "resume-executive-assistant": {
    administrativeSkills: "Diary and inbox management, travel coordination, expense reporting, board-meeting support",
    schedulingSkills: "Complex multi-time-zone calendaring, meeting prioritization, conflict resolution",
    officeSoftware: "Microsoft 365, Google Workspace, Outlook, Concur, Slack, Zoom",
    keyContribution: "Streamlined the CEO's meeting and travel workflow, reclaiming 10+ executive hours every week."
  },
  "resume-cybersecurity-analyst": {
    securitySkills: "Threat detection, incident response, vulnerability management, penetration testing, digital forensics",
    securityTools: "Splunk SIEM, CrowdStrike, Wireshark, Nessus, Metasploit, Burp Suite",
    complianceFrameworks: "SOC 2, ISO 27001, NIST CSF, PCI-DSS, GDPR",
    scriptingSkills: "Python, PowerShell, Bash, regex for log analysis",
    keyIncident: "Led containment of a ransomware attempt with zero data exfiltration and full recovery within four hours."
  },
  "resume-pharmacist": {
    clinicalPharmacySkills: "Medication therapy management, dosing and interaction review, immunizations, antimicrobial stewardship",
    pharmacySoftware: "Epic Willow, Cerner, Rx30, PioneerRx, McKesson EnterpriseRx",
    patientCounseling: "Adherence coaching, chronic-disease education, OTC recommendations, motivational interviewing",
    keyContribution: "Launched a medication-adherence program that improved refill compliance by 22% among chronic patients.",
    pharmacyLicenseNumber: "RPh-4820193"
  },
  "resume-civil-engineer": {
    structuralSkills: "Reinforced concrete and steel design, foundation design, load analysis, seismic design",
    civilSoftware: "AutoCAD, Civil 3D, STAAD.Pro, Revit, SAP2000",
    siteManagementSkills: "Site inspection, QA/QC, construction supervision, safety compliance, cost estimation",
    engineeringCodes: "ACI 318, AISC, ASCE 7, IBC, local building codes",
    keyProject: "Led structural design and delivery of a $30M highway-overpass project completed two months ahead of schedule."
  },
  "freelance-agreement": {
    startDate: "August 1, 2026"
  },
  "employment-contract": {
    companyAddress: "500 Enterprise Way, Suite 1200, New York, NY 10018",
    startDate: "August 3, 2026",
    reportingManager: "Sarah Kwon, VP of Engineering",
    salary: "$135,000.00 per year"
  },
  "freelance-contract": {
    startDate: "August 1, 2026"
  },
  "service-agreement": {
    startDate: "August 1, 2026"
  },
  "nda-template": {
    governingLaw: "the laws of the State of California"
  },
  "consulting-agreement": {
    clientContact: "+1 (555) 641-7788 | operations@globaltech.com"
  },
  "sales-contract": {
    deliveryAddress: "1400 Commerce Center Dr, Detroit, MI 48226",
    governingLaw: "the laws of the State of Michigan",
    sellerSignature: "Marcus Craig",
    buyerSignature: "Jonathan Reed"
  },
  "vendor-agreement": {
    deliverySchedule: "Monthly deliveries by the 5th of each month"
  },
  "residential-lease-agreement": {
    leaseTerm: "12 months",
    startDate: "August 1, 2026"
  },
  "influencer-collaboration-agreement": {
    brandName: "Nova Brands",
    brandContact: "partnerships@novabrands.com | +1 (555) 214-6677",
    influencerName: "Mia Rodriguez",
    influencerHandle: "@mia.creates",
    campaignDates: "September 1–30, 2026",
    contentApproval: "The Brand will review and approve all content at least 48 hours before publishing.",
    disclosureRequirements: "All posts must include #ad and tag @novabrands as a paid partnership.",
    exclusivity: "The Creator will not promote competing beauty brands for 30 days after the campaign.",
    usageRights: "The Brand receives a 12-month license to reuse the content across its owned channels.",
    compensation: "$4,500.00 flat fee plus product gifting",
    brandSignature: "Nova Brands (Authorized Representative)",
    influencerSignature: "Mia Rodriguez"
  },
  "photography-services-contract": {
    eventLocation: "The Grand Ballroom, Hilton Downtown, Chicago, IL",
    packageDetails: "Premium Wedding Coverage — two photographers",
    deliveryTimeline: "30 days",
    imageRights: "The Client receives a personal-use license to all delivered images.",
    totalFee: "$3,800.00",
    deposit: "$1,000.00",
    balanceDue: "$2,800.00",
    photographerSignature: "Emma Nguyen"
  },
  "commercial-lease-agreement": {
    landlordCompany: "Summit Ridge Commercial Properties",
    tenantCompany: "BrightPath Technologies Inc.",
    premisesAddress: "2100 Market Street, Suite 400, Philadelphia, PA 19103",
    rentableSquareFeet: "4,500 square feet",
    permittedUse: "general office and administrative use",
    leaseTerm: "5 years",
    startDate: "September 1, 2026",
    baseRent: "$9,375.00 per month",
    rentEscalation: "3% annually",
    camCharges: "$2.50 per rentable square foot annually",
    renewalOption: "One 5-year renewal option at prevailing market rate"
  },
  "loan-agreement": {
    lenderName: "Jonathan Reeves",
    lenderCompany: "Summit Capital Partners",
    lenderAddress: "800 Financial Plaza, Boston, MA 02110",
    borrowerName: "Michael Ellison",
    borrowerAddress: "312 Willow Creek Rd, Austin, TX 78704",
    borrowerContact: "+1 (555) 448-2093 | michael.ellison@gmail.com",
    principalAmount: "$50,000.00",
    interestRate: "6.5%",
    loanTerm: "60 months",
    startDate: "August 1, 2026",
    maturityDate: "July 31, 2031",
    repaymentSchedule: "Equal monthly installments due on the 1st of each month",
    installmentAmount: "$978.31 per month",
    collateralDescription: "A 2023 Ford Transit cargo van, VIN 1FTBR1C89PKA12345",
    prepaymentTerms: "The Borrower may prepay in full or in part at any time without penalty.",
    defaultTerms: "Default occurs if any payment is more than 15 days late or the Borrower becomes insolvent.",
    governingLaw: "the laws of the State of Texas",
    lenderSignature: "Jonathan Reeves",
    borrowerSignature: "Michael Ellison"
  },
  "subcontractor-agreement": {
    subcontractorName: "Carlos Mendez",
    subcontractorCompany: "Mendez Electrical Contractors LLC",
    subcontractorAddress: "740 Industrial Blvd, Phoenix, AZ 85009",
    projectSiteAddress: "1500 Riverside Commons, Phoenix, AZ 85003",
    startDate: "September 8, 2026",
    completionDate: "December 20, 2026",
    contractPrice: "$185,000.00",
    retainagePercent: "10%",
    indemnification: "The Subcontractor shall indemnify and hold the Contractor harmless from claims arising out of the Subcontractor's work.",
    lienWaiver: "The Subcontractor waives all lien rights upon receipt of each progress payment.",
    subcontractorSignature: "Carlos Mendez"
  },
  "licensing-agreement": {
    licensorName: "Rebecca Hartley",
    licensorCompany: "BrightWave Media Licensing",
    licensorAddress: "220 Creative Row, Los Angeles, CA 90028",
    licenseeName: "Daniel Osei",
    licenseeCompany: "Vertex Consumer Goods Inc.",
    licenseeAddress: "1800 Commerce Park, Columbus, OH 43215",
    licensedProperty: "the SolarKids animated character brand and associated artwork",
    grantScope: "manufacture, market, and sell licensed merchandise featuring the property",
    territory: "North America",
    exclusivity: "an exclusive",
    licenseTerm: "3 years",
    startDate: "October 1, 2026",
    minimumRoyalty: "$25,000.00 per year",
    qualityControl: "The Licensee shall maintain quality standards consistent with samples approved by the Licensor.",
    licensorSignature: "Rebecca Hartley",
    licenseeSignature: "Daniel Osei"
  },
  "non-compete-agreement": {
    // Name matches the employeeContact email below (was David Miller vs j.harrison).
    employeeFullName: "James Harrison",
    employeeSignature: "James Harrison",
    companyAddress: "1200 Enterprise Blvd, Chicago, IL 60601",
    employeeContact: "+1 (555) 772-3311 | j.harrison@email.com",
    restrictedActivities: "providing sales or consulting services to any competing software company",
    restrictedPeriod: "12 months",
    geographicScope: "a 50-mile radius of the Company's Chicago offices",
    nonSolicitation: "The Employee shall not solicit the Company's clients or employees during the restricted period.",
    consideration: "a one-time payment of $10,000.00 and continued access to proprietary training",
    remediesClause: "The Employee agrees that any breach causes irreparable harm entitling the Company to injunctive relief.",
    governingLaw: "the laws of the State of Illinois"
  },
  "joint-venture-agreement": {
    ventureName: "Meridian Renewable Energy JV",
    party1Name: "Laura Bennett",
    party1Company: "Meridian Ventures LLC",
    party1Address: "455 Harbor Drive, San Diego, CA 92101",
    party2Name: "Thomas Nakamura",
    party2Company: "Pacific Grid Solutions Inc.",
    party2Address: "2900 Bayfront Ave, San Diego, CA 92113",
    venturePurpose: "jointly developing and operating a community solar energy project",
    party1Contribution: "$500,000.00 in cash capital",
    party2Contribution: "$500,000.00 in equipment and engineering services",
    profitAllocation: "Net profits and losses allocated 50/50 between the parties.",
    managementStructure: "A three-member management committee with equal representation from both parties.",
    votingRights: "Major decisions require unanimous approval; day-to-day matters by majority vote.",
    termDuration: "5 years",
    party1Signature: "Laura Bennett",
    party2Signature: "Thomas Nakamura"
  },
  "equipment-rental-agreement": {
    ownerCompany: "HeavyLift Equipment Rentals",
    ownerAddress: "3400 Industrial Parkway, Houston, TX 77032",
    renterName: "Greg Sullivan",
    renterCompany: "Sullivan Site Works LLC",
    renterAddress: "780 Construction Way, Houston, TX 77045",
    equipmentDescription: "Caterpillar 320 hydraulic excavator",
    rentalRate: "$1,800.00 per week",
    rentalPeriod: "4 weeks",
    startDate: "August 10, 2026",
    returnDate: "September 7, 2026",
    deliveryTerms: "The Owner will deliver and pick up the equipment at the Renter's job site.",
    maintenanceResponsibility: "The Renter is responsible for routine daily maintenance and refueling.",
    damageLiability: "The Renter is liable for all damage beyond normal wear and tear.",
    ownerSignature: "HeavyLift Equipment Rentals (Authorized Agent)",
    renterSignature: "Greg Sullivan"
  },
  "catering-contract": {
    catererName: "Isabella Moreau",
    catererCompany: "Gourmet Table Catering Co.",
    catererContact: "+1 (555) 330-4412 | events@gourmettable.com",
    clientContact: "+1 (555) 668-2019 | rachel.kim@email.com",
    eventLocation: "Harborview Estate, 55 Lakeshore Dr, Seattle, WA 98101",
    menuDetails: "Plated three-course dinner with seasonal vegetarian and gluten-free options",
    serviceStaff: "6 servers, 1 bartender, and an on-site event captain",
    beverageService: "Open bar with wine, beer, and signature cocktails",
    totalCost: "$8,700.00",
    balanceDueDate: "October 1, 2026",
    foodSafetyTerms: "All food is prepared in a licensed commercial kitchen in compliance with local health codes.",
    catererSignature: "Isabella Moreau"
  },
  "web-development-contract": {
    developerCompany: "PixelForge Web Studio",
    developerContact: "+1 (555) 902-7714 | hello@pixelforge.dev",
    clientContact: "+1 (555) 233-8890 | ops@brightpath.io",
    startDate: "August 15, 2026",
    totalFee: "$18,000.00",
    hostingMaintenance: "12 months of managed hosting and priority support included after launch.",
    acceptanceTesting: "The Developer will conduct cross-browser and mobile testing before handover.",
    developerSignature: "James Wilson"
  },
  "severance-agreement": {
    // Name matches the employeeContact email below (was David Miller vs robert.hayes).
    employeeFullName: "Robert Hayes",
    employeeSignature: "Robert Hayes",
    companyAddress: "1000 Corporate Center Dr, Atlanta, GA 30328",
    employeeContact: "+1 (555) 419-6620 | robert.hayes@email.com",
    separationDate: "August 31, 2026",
    severancePay: "$24,000.00",
    severancePaymentTerms: "Paid in 8 equal bi-weekly installments following the effective date",
    benefitsContinuation: "The Company will cover COBRA premiums for 3 months following separation.",
    accruedPto: "$3,200.00 in unused accrued vacation",
    releaseOfClaims: "The Employee releases the Company from all claims relating to the employment.",
    returnOfProperty: "The Employee will return all laptops, badges, and confidential materials by the separation date.",
    revocationPeriod: "7 days",
    governingLaw: "the laws of the State of Georgia"
  },
  "seo-services-proposal": {
    strategy: "A three-phase program fixing technical debt first, then scaling search-intent content and authority links.",
    monthlyFee: "$3,500/month"
  },
  "video-production-proposal": {
    projectConcept: "A cinematic brand film that tells your product story through real customer moments."
  },
  "branding-proposal": {
    brandStrategy: "Position the brand as the premium, sustainable choice for design-conscious young professionals."
  },
  "social-media-proposal": {
    monthlyFee: "$3,000/month"
  },
  "cover-letter": {
    recipientName: "Ms. Laura Bennett",
    companyAddress: "500 Howard Street, San Francisco, CA 94105",
    jobPosition: "Senior Software Engineer"
  },
  "recommendation-letter": {
    recipientName: "Dr. Elaine Foster"
  },
  "offer-letter": {
    companyAddress: "1200 Corporate Drive, Suite 300, Austin, TX 78701",
    candidateFullName: "Michael Chen",
    candidateAddress: "88 Riverside Avenue, Apt 4C, Austin, TX 78702",
    jobPosition: "Senior Marketing Manager",
    startDate: "August 17, 2026",
    salary: "$95,000 per year",
    reportingManager: "Jennifer Walsh, Director of Marketing",
    hrSignature: "Sophia Reyes, HR Director"
  },
  "business-letter": {
    contactPerson: "Daniel Foster",
    recipientName: "Mr. Andrew Coleman",
    recipientCompany: "Meridian Partners LLC",
    referenceNumber: "REF-2026-0451"
  },
  "thank-you-letter": {
    recipientName: "Ms. Rebecca Hayes",
    recipientCompany: "Brightpath Consulting Group"
  },
  "request-letter": {
    recipientName: "Ms. Karen Whitfield"
  },
  "appointment-letter": {
    jobPosition: "Senior Software Engineer",
    startDate: "August 17, 2026",
    salary: "$110,000 per year",
    reportingManager: "Jennifer Walsh, Engineering Director",
    hrSignature: "Sophia Reyes, HR Director"
  },
  "experience-letter": {
    companyAddress: "1200 Corporate Drive, Suite 300, Austin, TX 78701",
    hrName: "Sophia Reyes",
    hrSignature: "Sophia Reyes, HR Director"
  },
  "internship-cover-letter": {
    roleName: "Software Engineering"
  },
  "character-reference-letter": {
    refereeName: "Jonathan Pierce"
  },
  "promotion-request-letter": {
    currentRole: "Project Coordinator",
    targetRole: "Senior Project Manager"
  },
  "reference-letter": {
    recipientName: "Mr. Thomas Reed"
  },
  "invitation-letter": {
    recipientName: "Mr. Jonathan Blake"
  },
  "authorization-letter": {
    recipientName: "Mr. Steven Grant",
    authorizedPersonName: "David Miller"
  },
  "sponsorship-letter": {
    recipientName: "Ms. Patricia Nguyen"
  },
  "follow-up-letter": {
    recipientName: "Ms. Laura Bennett",
    jobPosition: "Product Manager"
  },
  "letter-salary-increase": {
    fullName: "Daniel Reed", jobTitle: "Senior Account Manager", department: "Sales",
    email: "daniel.reed@email.com", phone: "+1 (555) 274-8810", letterDate: "July 3, 2026",
    managerName: "Ms. Laura Bennett", currentSalary: "$82,000", requestedSalary: "$92,000",
    incrementPercent: "12%", yearsInRole: "three years", proposedEffectiveDate: "August 1, 2026",
    signatureFullName: "Daniel Reed"
  },
  "letter-leave-application": {
    fullName: "Priya Sharma", employeeId: "EMP-2043", jobTitle: "Financial Analyst", department: "Finance",
    letterDate: "July 3, 2026", managerName: "Mr. David Kim", leaveType: "Casual Leave",
    leaveFromDate: "July 14, 2026", leaveToDate: "July 18, 2026", totalDays: "5 working days",
    leaveReason: "a family commitment out of town", workHandoverTo: "Rahul Mehta",
    contactDuringLeave: "+91 98200 11234", rejoiningDate: "July 21, 2026", signatureFullName: "Priya Sharma"
  },
  "letter-noc": {
    address: "4th Floor, Cyber Heights, Sector 62, Noida, UP 201301",
    email: "hr@umangdigital.com", phone: "+91 120 456 7890", letterDate: "July 3, 2026",
    referenceNumber: "NOC/HR/2026/0142", applicantName: "Rahul Verma", applicantId: "EMP-1188",
    designation: "Senior Software Engineer", nocPurpose: "applying for a tourist visa to Schengen countries",
    objectDescription: "the applicant travelling abroad from 10–24 August 2026 and returning to duty thereafter",
    validityPeriod: "3 months from the date of issue", issuingAuthorityName: "Anita Desai",
    issuingAuthorityDesignation: "Head of Human Resources"
  },
  "letter-business-introduction": {
    fullName: "Sofia Alvarez", jobTitle: "Growth Lead", email: "sofia@growthhive.com",
    phone: "+1 (555) 640-2210", letterDate: "July 3, 2026", recipientName: "Mark", recipientCompany: "Brightway Retail",
    yourCompanyOneLiner: "a performance marketing studio for DTC brands",
    painPointHook: "Most retail brands quietly lose 20–30% of paid-ad budget to underperforming campaigns.",
    valueProposition: "We rebuild your funnel around what actually converts and typically cut wasted spend within the first month.",
    socialProofLine: "Last quarter we lifted a client's ROAS from 1.8x to 3.4x in nine weeks.",
    callToAction: "Worth a quick 15-minute call to see if there's a fit?",
    meetingLink: "cal.com/growthhive/intro", signatureFullName: "Sofia Alvarez"
  },
  "letter-payment-reminder": {
    letterDate: "July 3, 2026", recipientName: "Ms. Rivera", clientCompany: "TechVentures Corp.",
    invoiceNumber: "INV-2026-014", invoiceAmount: "$2,450.00", dueDate: "June 18, 2026", daysOverdue: "15 days",
    paymentLink: "pay.jenkinsdigitalstudio.com/INV-2026-014",
    lateFeeWarning: "Per our terms a 2% late fee applies past 30 days overdue — I'd love to settle this before then.",
    signatureFullName: "Sarah Jenkins", email: "hello@jenkinsdigitalstudio.com", phone: "+1 (555) 509-3963"
  },
  "letter-reference-request": {
    fullName: "Michael Chen", jobTitle: "Data Analyst", email: "michael.chen@email.com", phone: "+1 (555) 318-7742",
    letterDate: "July 3, 2026", recipientName: "Dr. Vance", targetJobTitle: "Senior Data Analyst",
    targetCompany: "DataCorp Systems", relationshipContext: "You managed me directly on the analytics team",
    workedTogetherPeriod: "2022 to 2025", referenceDeadline: "July 20, 2026", signatureFullName: "Michael Chen"
  },
  "invoice-commercial-export": {
    companyAddress: "Plot 22, MIDC Industrial Area, Andheri East, Mumbai 400093",
    companyEmail: "exports@meridianexports.com",
    clientName: "Nordic Apparel AB", clientAddress: "Sveavägen 44, 111 34 Stockholm, Sweden",
    invoiceNumber: "EXP-2026-0087", invoiceDate: "2026-07-03",
    hsCode: "6109.10", incoterms: "FOB Mumbai", countryOfOrigin: "India", countryOfDestination: "Sweden",
    currencyCode: "USD", grossWeight: "480 kg", netWeight: "450 kg", packageCount: "18 cartons",
    tax: "0%", paymentTerms: "100% advance via T/T against proforma"
  },
  "invoice-credit-note": {
    companyAddress: "456 Commerce Blvd, Suite 200, Austin, TX 78701",
    companyEmail: "hello@bloomcoboutique.com",
    clientName: "John Doe Services", clientAddress: "789 Billing Ave, Floor 3, Dallas, TX 75201",
    creditNoteNumber: "CN-2026-0031", invoiceDate: "2026-07-03",
    originalInvoiceNumber: "INV-2026-001", originalInvoiceDate: "2026-06-28",
    refundReason: "Two items returned damaged and a duplicate line corrected",
    refundMethod: "Credit to original card ending 4421 (3–5 business days)",
    tax: "8%", approvedBy: "Maria Bloom, Store Owner"
  },
  "resume-career-change": {
    jobTitle: "Aspiring Software Developer",
    careerSummary: "Operations professional with 6 years' experience transitioning into software development — bringing proven delivery, data fluency and stakeholder communication, now paired with hands-on full-stack skills from an intensive bootcamp and three shipped projects.",
    targetIndustry: "Software Engineering", degree: "B.A. in Business Administration",
    university: "University of Michigan", graduationYear: "2018"
  },
  "resume-internship": {
    jobTitle: "Computer Science Student",
    careerObjective: "Second-year CS student seeking a summer software internship to apply my coursework on a real product team. Comfortable with JavaScript and Python, and eager to contribute from week one.",
    degree: "B.S. Computer Science", university: "UT Austin", graduationYear: "2027", gpa: "3.7/4.0"
  },
  "cv-academic": {
    jobTitle: "Postdoctoral Researcher, Climate AI", email: "elena.rossi@university.edu", location: "Zürich, Switzerland",
    researchInterests: "Machine learning for climate resilience, transfer learning, and ecological forecasting.",
    dissertationTitle: "Adaptive Neural Models for Climate-Resilient Ecosystems", advisorName: "Prof. M. Bianchi",
    degree: "Ph.D. in Computer Science", university: "ETH Zürich", graduationYear: "2023"
  },
  "contract-roommate": {
    primaryTenantName: "Alex Carter", roommateName: "Jamie Lee",
    propertyAddress: "14 Maple Street, Apt 3B, Portland, OR 97205", effectiveDate: "July 1, 2026",
    leaseTermMonths: "12 months", monthlyRent: "$2,000", rentSplit: "50/50 ($1,000 each)",
    securityDeposit: "$2,000", depositSplit: "50/50 ($1,000 each)", utilitiesSplitMethod: "equally, 50/50",
    choresSchedule: "Kitchen and common areas cleaned weekly on a rotating schedule",
    quietHours: "10:00 PM – 7:00 AM on weekdays", guestPolicy: "Overnight guests up to 3 nights; longer stays by mutual agreement",
    moveOutNoticePeriod: "30 days", governingLaw: "the State of Oregon"
  },
  "contract-social-media": {
    clientName: "Mark Rivera", clientCompany: "Brightway Retail", effectiveDate: "July 1, 2026", endDate: "December 31, 2026",
    platformScope: "Instagram, Facebook, and TikTok", postsPerMonth: "16 feed posts and 20 stories",
    monthlyRetainer: "$2,500", contentApprovalProcess: "drafts shared each Thursday for approval within 48 hours",
    responseTimeSla: "one business day", reportingFrequency: "monthly, with a live dashboard",
    adSpendManagementFee: "15% of ad spend", contentOwnership: "all delivered content transfers to the Client on payment",
    terminationClause: "Either party may terminate with 30 days written notice; fees are prorated to the termination date."
  },
  "proposal-one-page": {
    clientName: "Brightway Retail", proposalNumber: "P-2026-021", validUntil: "July 31, 2026",
    theAsk: "Engage Apex Digital to run a 90-day paid-acquisition sprint across Google and Meta.",
    whyUs: "We've scaled 30+ DTC brands and specialise in profitable, fast-feedback ad testing.",
    keyBenefits: "A rebuilt funnel, weekly optimisation, and a clear dashboard — typically cutting wasted spend 20–30% in month one.",
    socialProof: "Recently lifted a retail client's ROAS from 1.8x to 3.4x in nine weeks.",
    singlePrice: "$6,000 / month", deadlineToAccept: "July 31, 2026", proposalSignature: "Apex Digital Agency"
  },
  "proposal-cleaning-services": {
    clientName: "Daniel Foster", clientCompany: "Foster & Lane Offices", proposalNumber: "CS-2026-045", validUntil: "July 31, 2026",
    facilityType: "12,000 sq ft corporate office", facilityArea: "12,000 sq ft", cleaningFrequency: "five nights per week",
    monthlyContractPrice: "$3,200 / month", oneTimeDeepCleanPrice: "$1,450",
    ecoFriendlyProducts: "Green Seal-certified, low-VOC products",
    insuranceCoverage: "Fully bonded and insured up to $2M liability", proposalSignature: "SparkleClean Services"
  },
  "report-internship": {
    studentName: "Priya Sharma", rollNumber: "CS21-0447", universityName: "Delhi Technological University",
    internshipCompany: "Nova Software Agency", internshipDuration: "8 weeks, May–July 2026", mentorName: "Mr. Arjun Nair",
    departmentAssigned: "Backend Engineering", reportDate: "July 3, 2026",
    objectivesOfInternship: "To gain hands-on experience building production APIs and to understand agile delivery in a real team.",
    skillsLearned: "REST API design, code review, testing, and sprint planning",
    toolsUsed: "Node.js, PostgreSQL, Git, Jira, Postman",
    learningOutcomes: "I can now design and ship a small API feature end to end, write tests, and collaborate through pull requests with confidence."
  },
  "report-book": {
    studentName: "Ethan Brooks", className: "Grade 10 English", reportDate: "July 3, 2026",
    bookTitle: "To Kill a Mockingbird", authorName: "Harper Lee", genre: "Southern Gothic / Bildungsroman",
    publicationYear: "1960", pageCount: "281",
    plotSummary: "Set in 1930s Alabama, the story follows Scout Finch as her father, lawyer Atticus Finch, defends a Black man wrongly accused of a crime, exposing the town's prejudice through a child's eyes.",
    themesAnalysis: "The novel explores racial injustice, moral growth, and the loss of innocence, arguing that real courage is standing for what is right even when you're sure to lose.",
    favoriteQuote: "You never really understand a person until you consider things from his point of view.",
    personalOpinion: "A moving, still-relevant read; Scout's narration makes hard themes accessible without softening them.",
    ratingOutOfFive: "5 / 5"
  },
  "report-lab": {
    studentName: "Chloe Bennett", className: "Chemistry 201", reportDate: "July 3, 2026",
    experimentTitle: "Determining the Concentration of Acetic Acid in Vinegar", experimentNumber: "7",
    objective: "To determine the molar concentration of acetic acid in commercial vinegar by titration with standardized NaOH.",
    hypothesis: "Commercial vinegar contains approximately 0.83 M acetic acid (about 5% by mass).",
    materialsList: "Burette, 25 mL pipette, 0.100 M NaOH, phenolphthalein indicator, conical flask, vinegar sample",
    procedure: "Pipette 25.0 mL of vinegar into a flask, add indicator, and titrate with NaOH until a faint pink endpoint persists for 30 seconds. Repeat for three concordant titres.",
    results: "Mean titre 20.6 mL NaOH → 0.082 mol acetic acid per 25 mL = 0.82 M.",
    discussionOfResults: "The measured 0.82 M is within 1% of the hypothesised value; minor error likely from endpoint judgement. Results support the ~5% labelling."
  },
  "business-plan-one-page": {
    founderName: "Sam Whitfield", date: "July 3, 2026",
    problem: "Small e-commerce sellers waste hours reconciling orders across marketplaces.",
    solution: "BrightBox syncs orders, inventory and payouts across every channel in one dashboard.",
    uniqueValueProp: "One dashboard for every marketplace — set up in 10 minutes, no developer needed.",
    customerSegments: "Solo and small-team sellers on Shopify, Amazon and Etsy.",
    revenueStreams: "Tiered monthly SaaS subscriptions plus per-transaction fees at scale.",
    costStructure: "Cloud hosting, a small engineering team, and paid acquisition.",
    keyMetrics: "Activation rate, MRR, and net revenue retention.",
    milestones90Days: "Launch beta, reach 100 paying sellers, and hit $10K MRR.", fundingAsk: "$250,000 pre-seed"
  },
  "business-plan-lean-canvas": {
    founderName: "Nadia Khan", date: "July 3, 2026",
    problemTop3: "1) Freelancers lose track of deadlines; 2) invoicing is manual; 3) cash flow is unpredictable.",
    customerSegments: "Independent freelancers and 2–5 person studios.",
    uniqueValueProposition: "The single workspace that turns a project into an invoice automatically.",
    solutionTop3: "1) Deadline board; 2) one-click invoicing; 3) cash-flow forecast.",
    channels: "Content SEO, freelancer communities, and referrals.",
    revenueStreams: "Freemium with a $12/month Pro tier.", costStructure: "Engineering, hosting, and content.",
    keyMetrics: "Weekly active users, free-to-paid conversion, churn.",
    unfairAdvantage: "Proprietary project-to-invoice automation and an engaged community."
  },
  "quotation-security-services": {
    address: "Tower B, DLF Cyber City, Gurugram 122002", email: "ops@guardwell.com", phone: "+91 124 400 5500",
    clientName: "Vikram Malhotra", clientCompany: "Horizon Malls Pvt. Ltd.", quoteNumber: "QT-SEC-2026-018",
    quoteDate: "July 3, 2026", validUntil: "July 31, 2026", siteType: "retail mall premises",
    psaraLicenseNo: "PSARA/HR/2021/4477", notes: "Deployment can begin within 7 days of a signed work order."
  },
  "quotation-amc": {
    address: "22 Residency Road, Bengaluru 560025", email: "support@techcare.io", phone: "+91 80 4123 8800",
    clientName: "Ananya Rao", clientCompany: "Finserv Solutions Pvt. Ltd.", quoteNumber: "QT-AMC-2026-031",
    quoteDate: "July 3, 2026", validUntil: "July 31, 2026", amcType: "Comprehensive AMC (labour + listed spares)",
    visitsPerYear: "12 preventive visits + unlimited breakdown calls", responseTimeSla: "4 business hours on-site",
    contractStartDate: "August 1, 2026", contractEndDate: "July 31, 2027", notes: "Renewable annually with a 5% escalation."
  }
};

const OVERRIDES: Record<string, Record<string, string>> = {
  "invoice-catering": {
    guestCount: "120"
  },
  "catering-contract": {
    guestCount: "120",
    clientName: "Rachel Kim",
    clientContact: "+1 (555) 668-2019 | rachel.kim@email.com",
    clientSignature: "Rachel Kim"
  },
  "licensing-agreement": {
    royaltyRate: "6.5%"
  },
  "equipment-rental-agreement": {
    ownerName: "Daniel Whitfield"
  },
  "subcontractor-agreement": {
    completionDate: "October 15, 2026",
    subcontractorSignature: "Carlos Mendez"
  },
  "commercial-lease-agreement": {
    leaseEndDate: "August 31, 2031"
  },
  "employment-contract": {
    companyLogo: ""
  },
  "invoice-medical": {
    serviceDescription: "General patient consultation, comprehensive lab panels, and health diagnostic screening."
  },
  "independent-contractor-agreement": {
    deliverables: "Database migration plan, custom schema scripts, PostgreSQL indexing guidelines, and system backup configurations."
  },
  "consulting-agreement": {
    deliverables: "Strategic market research report, product growth roadmap, and weekly advisory session slide decks."
  },
  "photography-services-contract": {
    deliverables: "High-resolution edited digital photo archive, professional color grading, and print release documentation."
  },
  "influencer-collaboration-agreement": {
    deliverables: "Three dedicated Instagram post shares, two interactive story series, and one custom short-form video review."
  },
  "invoice-electrician": {
    partsCost: "$2,480.00",
    laborCost: "$950.00",
    warrantyPeriod: "1-year warranty on parts & labor"
  },
  "invoice-auto-repair": {
    partsCost: "$429.00",
    laborCost: "$530.00",
    warrantyPeriod: "90-day parts & labor repair guarantee"
  },
  "vendor-agreement": {
    warrantyTerms: "12-month standard replacement and hardware diagnostic warranty for defective equipment."
  },
  "nda-template": {
    partyAName: "John Doe",
    partyBName: "Jane Smith"
  },
  "resume-software-engineer": {
    graduationYear: "2018",
    jobTitle: "Senior Software Engineer",
    careerSummary: "Lead software developer with 7+ years of experience building scalable SaaS architectures, microservices, and modern Next.js/React frontend systems.",
    degree: "B.S. in Computer Science",
    university: "Stanford University",
    certificationName: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    year: "2024"
  },
  "resume-data-analyst": {
    summary: "Detail-oriented Data Analyst with 8+ years of experience translating complex datasets into actionable business insights using SQL, Python, and Power BI.",
    degree: "B.S. in Statistics",
    university: "University of California, Berkeley",
    graduationYear: "2017",
    certificationName: "Google Advanced Data Analytics Certificate",
    organization: "Google",
    year: "2023"
  },
  "resume-project-manager": {
    summary: "PMP-certified Project Manager with 9+ years of experience leading cross-functional teams to deliver enterprise software solutions on time and under budget.",
    degree: "B.B.A. in Operations Management",
    university: "University of Texas at Austin",
    graduationYear: "2016",
    certificationName: "Project Management Professional (PMP)",
    organization: "Project Management Institute (PMI)",
    year: "2021"
  },
  "resume-graphic-designer": {
    summary: "Creative Graphic Designer with 8+ years of experience designing visual identity systems, brand marketing collateral, and high-impact digital experiences.",
    degree: "B.F.A. in Graphic Design",
    university: "Rhode Island School of Design",
    graduationYear: "2017",
    certificationName: "Adobe Certified Professional — Creative Cloud",
    organization: "Adobe",
    year: "2020",
    awardsAchievements: "Winner — Regional Brand Identity Award 2024; featured in the Behance 'Best of Branding' gallery"
  },
  "resume-registered-nurse": {
    summary: "Compassionate Registered Nurse (RN) with 8+ years of clinical experience in high-volume emergency rooms and intensive care units, dedicated to patient advocacy.",
    degree: "Bachelor of Science in Nursing (BSN)",
    university: "Johns Hopkins School of Nursing",
    graduationYear: "2015",
    certificationName: "Advanced Cardiac Life Support (ACLS)",
    organization: "American Heart Association",
    year: "2019",
    awardsAchievements: "DAISY Award for Extraordinary Nursing (2023); Emergency Department Employee of the Year"
  },
  "resume-teacher": {
    summary: "Dedicated high school Mathematics Educator with 10+ years of experience designing project-based STEM curricula, raising AP Calculus pass rates, and mentoring students across grades 9-12.",
    degree: "Bachelor of Science in Mathematics Education",
    university: "Boston University",
    graduationYear: "2015",
    certificationName: "State Board Teacher Certification (Secondary Mathematics)",
    organization: "State Dept of Education",
    year: "2016"
  },
  "resume-marketing-manager": {
    summary: "Results-driven Marketing Manager with 9+ years of experience scaling customer acquisition channels through SEO, email marketing, and search/social advertising.",
    degree: "B.S. in Marketing",
    university: "New York University",
    graduationYear: "2016",
    certificationName: "Google Analytics Individual Qualification (GAIQ)",
    organization: "Google",
    year: "2022"
  },
  "resume-customer-service": {
    summary: "Empathetic Customer Support Lead with 9+ years of experience resolving complex complaints, training agents, and maintaining a 96% CSAT rating.",
    degree: "B.A. in Communications",
    university: "Arizona State University",
    graduationYear: "2016",
    certificationName: "Customer Service Excellence Trainer",
    organization: "Customer Service Institute",
    year: "2022"
  },
  "resume-accountant": {
    summary: "CPA-certified Accountant with 10+ years of experience managing corporate ledgers, tax filing, payroll processing, and internal audit controls.",
    degree: "B.S. in Accounting & Finance",
    university: "University of Illinois Urbana-Champaign",
    graduationYear: "2015",
    certificationName: "Certified Public Accountant (CPA)",
    organization: "AICPA",
    year: "2020"
  },
  "resume-sales-representative": {
    summary: "Dynamic Sales Representative with 8+ years of experience exceeding quotas, managing enterprise pipelines, and pitching complex SaaS offerings.",
    degree: "B.A. in Business Administration",
    university: "Ohio State University",
    graduationYear: "2017",
    certificationName: "Salesforce Certified Administrator",
    organization: "Salesforce",
    year: "2021"
  },
  "resume-fresher-graduate": {
    objective: "Motivated Computer Science graduate seeking an entry-level software engineering role to apply strong programming fundamentals and a passion for building user-focused products.",
    degree: "B.S. in Computer Science",
    university: "University of Michigan",
    graduationYear: "2025",
    certificationName: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    year: "2025",
    programmingLanguages: "Java, Python, C++, JavaScript, SQL",
    awardsAchievements: "Dean's List (all semesters); 1st place, University Hackathon 2025"
  },
  "resume-product-manager": {
    summary: "Product Manager with 8+ years of experience owning product lifecycles, translating user feedback into roadmaps, and collaborating with design and engineering teams.",
    degree: "B.S. in Management Information Systems",
    university: "Carnegie Mellon University",
    graduationYear: "2017",
    certificationName: "Certified Scrum Product Owner (CSPO)",
    organization: "Scrum Alliance",
    year: "2021"
  },
  "resume-devops-engineer": {
    summary: "DevOps Engineer with 9+ years of experience automating cloud infrastructure, orchestrating containers, and optimizing CI/CD release pipelines.",
    degree: "B.S. in Computer Engineering",
    university: "Georgia Institute of Technology",
    graduationYear: "2016",
    certificationName: "Certified Kubernetes Administrator (CKA)",
    organization: "Cloud Native Computing Foundation",
    year: "2022",
    programmingLanguages: "Bash, Python, Go, PowerShell"
  },
  "resume-ux-designer": {
    summary: "UX Designer with 8+ years of experience designing intuitive customer journeys, interactive wireframes, and accessible brand design systems.",
    degree: "B.S. in Human-Computer Interaction",
    university: "University of Washington",
    graduationYear: "2017",
    certificationName: "UX Certificate (Interaction Design)",
    organization: "Nielsen Norman Group",
    year: "2022"
  },
  "resume-financial-analyst": {
    summary: "Financial Analyst with 8+ years of experience constructing 3-statement models, forecasting cash flow, and providing strategic investment advice.",
    degree: "B.B.A. in Finance",
    university: "University of Pennsylvania",
    graduationYear: "2017",
    certificationName: "Chartered Financial Analyst (CFA) Level I",
    organization: "CFA Institute",
    year: "2022"
  },
  "resume-hr-manager": {
    summary: "HR Manager with 10+ years of experience overseeing employee relations, corporate talent acquisition, benefits admin, and training programs.",
    degree: "B.S. in Human Resource Management",
    university: "Rutgers University",
    graduationYear: "2015",
    certificationName: "SHRM Certified Professional (SHRM-CP)",
    organization: "SHRM",
    year: "2021"
  },
  "resume-mechanical-engineer": {
    summary: "Mechanical Engineer with 10+ years of experience designing robust automotive assemblies, running thermal/FEA simulations, and supervising CNC fabrication.",
    degree: "B.S. in Mechanical Engineering",
    university: "Purdue University",
    graduationYear: "2015",
    certificationName: "Professional Engineer (PE) License",
    organization: "State Licensing Board",
    year: "2023"
  },
  "resume-content-writer": {
    summary: "Versatile Content Writer with 8+ years of experience authoring SEO blog posts, corporate whitepapers, and customer-converting landing pages.",
    degree: "B.A. in English Literature",
    university: "Northwestern University",
    graduationYear: "2017",
    certificationName: "Inbound Marketing Certification",
    organization: "HubSpot",
    year: "2021"
  },
  "resume-business-analyst": {
    summary: "Business Analyst with 9+ years of experience gathering technical requirements, modeling business processes, and supporting UAT cycles.",
    degree: "B.S. in Business Information Systems",
    university: "Indiana University Bloomington",
    graduationYear: "2016",
    certificationName: "Certified Business Analysis Professional (CBAP)",
    organization: "IIBA",
    year: "2022"
  },
  "resume-executive-assistant": {
    summary: "Polished Executive Assistant with 10+ years of experience coordinating calendars, travel logistics, and client presentations for C-level officers.",
    degree: "B.A. in English",
    university: "University of Southern California",
    graduationYear: "2015",
    certificationName: "Certified Administrative Professional (CAP)",
    organization: "IAAP",
    year: "2021"
  },
  "resume-cybersecurity-analyst": {
    summary: "Cybersecurity Analyst with 8+ years of experience conducting vulnerability scans, configuring SIEM alerts, and mitigating security incidents.",
    degree: "B.S. in Cybersecurity",
    university: "University of Maryland",
    graduationYear: "2017",
    certificationName: "CompTIA Security+",
    organization: "CompTIA",
    year: "2021"
  },
  "resume-pharmacist": {
    summary: "Licensed Pharmacist with 10+ years of experience dispensing prescription medications, reviewing safety interactions, and advising clinical patients.",
    degree: "Doctor of Pharmacy (Pharm.D.)",
    university: "University of North Carolina at Chapel Hill",
    graduationYear: "2015",
    certificationName: "Board Certified Pharmacotherapy Specialist (BCPS)",
    organization: "Board of Pharmacy Specialties",
    year: "2020"
  },
  "resume-civil-engineer": {
    summary: "Structural Civil Engineer with 10+ years of experience drafting concrete/steel structures, managing site inspections, and ensuring building code compliance.",
    degree: "B.S. in Civil Engineering",
    university: "Texas A&M University",
    graduationYear: "2015",
    certificationName: "Professional Engineer (PE) License",
    organization: "NCEES",
    year: "2022"
  }
};

function extractText(node: any): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node.text !== undefined) return node.text;
  if (node.content) return extractText(node.content);
  return "";
}

function computeInvoiceTotals(template: any, currentValues: Record<string, string>): Record<string, string> {
  const table = template?.content?.editorState?.content?.find((node: any) => node.type === "table");
  if (!table || !table.content) return {};

  let computedSubtotal = 0;
  const rows = table.content;
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row && row.content && row.content.length > 0) {
      const lastCell = row.content[row.content.length - 1];
      const cellText = extractText(lastCell).trim();
      
      let resolvedText = cellText;
      Object.entries(currentValues).forEach(([k, v]) => {
        if (resolvedText.includes(`{{${k}}}`)) {
          resolvedText = resolvedText.replace(new RegExp(`\\{\\{${k}\\}\\}`, "g"), v || "0");
        }
      });
      
      const cleaned = resolvedText.replace(/[^\d.-]/g, "");
      const val = parseFloat(cleaned);
      if (!isNaN(val)) {
        computedSubtotal += val;
      }
    }
  }

  if (computedSubtotal === 0) return {};

  // Honour the template's own currency symbol — a GST invoice must not render
  // its computed subtotal and total as US dollars.
  const symbol = currentValues.currency || "$";
  const formatMoney = (amount: number) => {
    return symbol + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  let taxRate = 0.08;
  const taxVal = currentValues.tax || "8%";
  const parsedTaxRate = parseFloat(taxVal.replace(/[^\d.-]/g, ""));
  if (!isNaN(parsedTaxRate)) {
    taxRate = parsedTaxRate / 100;
  }

  const subtotalStr = formatMoney(computedSubtotal);
  const taxAmount = computedSubtotal * taxRate;
  const taxStr = formatMoney(taxAmount);
  // Only fold tax into the total when the document actually SHOWS a tax line.
  // Many invoices list items and a grand total with no "Tax" row — adding 8%
  // there made the total inexplicably higher than the items add up to (e.g.
  // cleaning $970 rendered as $1,047.60). Detecting a tax/GST/VAT reference in
  // the document keeps the arithmetic self-consistent on every template.
  const docStr = JSON.stringify(template?.content?.editorState || {});
  const showsTax = /\b(tax|gst|vat|cgst|sgst|igst)\b/i.test(docStr);
  let totalAmount = computedSubtotal + (showsTax ? taxAmount : 0);

  // Shipping and order-level discounts are shown as their own summary lines, not
  // as table rows, so the line-item sum never includes them. Fold them into the
  // grand total — otherwise it won't match what the reader adds up (e.g. a store
  // invoice showed "Shipping $45" yet omitted it from the total). Gate on the
  // template's declared fields so the universal FIELD_DEFAULTS.discount can never
  // silently discount an invoice that doesn't actually show one.
  const invoiceFields: string[] = template?.content?.fields || [];
  const money = (s: string) => {
    const v = parseFloat(String(s || "").replace(/[^\d.-]/g, ""));
    return isNaN(v) ? 0 : v;
  };
  if (invoiceFields.includes("shippingCost")) totalAmount += money(currentValues.shippingCost);
  if (invoiceFields.includes("discount")) totalAmount -= money(currentValues.discount);

  if (template.slug === "invoice-legal-services") {
    const retainerStr = currentValues.retainerApplied || "2500";
    const retainer = parseFloat(retainerStr.replace(/[^\d.-]/g, ""));
    if (!isNaN(retainer)) {
      totalAmount = computedSubtotal - retainer;
    }
  }

  // Milestone invoices bill only the CURRENT release, but the schedule table
  // lists every milestone (M1+M2+M3 = $20,000). Basing the summary on the table
  // sum made the amount due ($21,600) contradict the document's "This Release
  // (M2): $8,000 → $8,640" lines. Bill the current milestone instead.
  let subtotalOut = subtotalStr;
  if (template.slug === "invoice-milestone") {
    const release = 8000;
    subtotalOut = formatMoney(release);
    totalAmount = release + release * taxRate;
  }

  const totalStr = formatMoney(totalAmount);

  return {
    subtotal: subtotalOut,
    tax: taxVal,
    taxAmount: taxStr,
    total: totalStr,
    amountDue: totalStr,
    grandTotal: totalStr,
  };
}

// Contact details derived from the template's OWN brand / persona.
//
// The global FIELD_DEFAULTS contact block belongs to one persona (Sarah
// Jenkins: sarah.j@techsolutions.com, +1 (555) 382-9281, linkedin
// sarah-jenkins-lead, 1200 Business Way San Francisco). Any key not explicitly
// resolved used to fall through to it, so every resume and every letterhead
// leaked her details. This is applied as an underlay in BOTH resolvers, so a
// document can never show another persona's contact info.
function deriveContactValues(
  template: any,
  brand: string | undefined,
  specific: Record<string, string>,
): Record<string, string> {
  const out: Record<string, string> = {};
  const phoneFor = (seedStr: string) => {
    const seed = seedStr.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    return `+1 (555) ${String(200 + (seed % 700)).padStart(3, "0")}-${String(
      1000 + ((seed * 7) % 9000),
    ).padStart(4, "0")}`;
  };

  if (template?.categorySlug === "resumes") {
    // Strip credential suffixes ("Emily Carter, RN" → "Emily Carter").
    const person = (specific.fullName || brand || "").replace(/,.*$/, "").trim();
    if (!person) return out;
    const dot = person.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, "");
    const dash = person.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const plain = person.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const seed = person.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const cities = [
      "Austin, TX", "Denver, CO", "Seattle, WA", "Chicago, IL",
      "Boston, MA", "Atlanta, GA", "Portland, OR", "New York, NY",
    ];
    const city = cities[seed % cities.length];
    if (dot) out.email = `${dot}@email.com`;
    out.phone = phoneFor(person);
    if (dash) out.linkedin = dash;
    if (plain) {
      out.github = `${plain}-dev`;
      out.portfolio = `${plain}.dev`;
    }
    out.location = city;
    // A resume letterhead shows the person's city, never a corporate street.
    out.address = city;
    return out;
  }

  if (brand) {
    const letters = brand.replace(/[^a-zA-Z]/g, "");
    const handle = brand.toLowerCase().replace(/[^a-z0-9]+/g, "");
    // India context (a ₹ invoice, or a known India template) → Indian address +
    // a +91 number, so a GST / proforma / export invoice never shows a US
    // letterhead — the exact pages meant to win Indian searches.
    const isIndia =
      specific.currency === "₹" ||
      ["invoice-gst", "invoice-proforma", "invoice-commercial-export", "gst-quotation"].includes(template?.slug);
    const usCities = [
      "New York, NY 10001", "Austin, TX 78701", "San Francisco, CA 94105",
      "Seattle, WA 98101", "Chicago, IL 60601",
    ];
    const inCities = [
      "Mumbai, Maharashtra 400001", "Bengaluru, Karnataka 560001",
      "Pune, Maharashtra 411001", "New Delhi 110001", "Hyderabad, Telangana 500034",
    ];
    const seed = letters.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const streetNum = 100 + (letters.charCodeAt(0) || 0) * 2;
    out.address = isIndia
      ? `${streetNum}, ${inCities[letters.length % 5]}`
      : `${streetNum} Business Way, ${usCities[letters.length % 5]}`;
    if (handle) out.email = `hello@${handle}.com`;
    out.phone = isIndia
      ? `+91 ${String(90000 + (seed % 9999))} ${String(10000 + ((seed * 7) % 89999))}`
      : phoneFor(brand);
    // Templates that use companyAddress/companyPhone (rather than address/phone)
    // must resolve too, or they render the literal field name.
    out.companyAddress = out.address;
    out.companyPhone = out.phone;
  }
  return out;
}

export function getTemplateBrand(template: any): string {
  return SLUG_BRAND[template?.slug] || FIELD_DEFAULTS.companyName || "Your Company";
}

export function getTemplateDefaults(template: any): Record<string, string> {
  const slug = template?.slug;
  const brand = SLUG_BRAND[slug] || FIELD_DEFAULTS.companyName || "Your Company";
  const slugOverrides: Record<string, string> = {
    ...(SLUG_EXTRA_DEFAULTS[slug] || {}),
    ...(SLUG_SPECIFIC_DEFAULTS[slug] || {}),
    ...(OVERRIDES[slug] || {}),
  };

  const isResume = template?.categorySlug === "resumes";
  // FIELD_DEFAULTS.fullName is a real name, so `!initial.fullName` never fired
  // and every resume kept the global persona. Resolve it explicitly.
  const personaName = slugOverrides.fullName || (isResume ? SLUG_BRAND[slug] : undefined);
  const derived = deriveContactValues(template, SLUG_BRAND[slug], {
    ...slugOverrides,
    ...(personaName ? { fullName: personaName } : {}),
  });

  const initial: Record<string, string> = {
    ...FIELD_DEFAULTS,
    ...derived,       // this template's own contacts beat the global persona
    ...slugOverrides, // explicit per-template values still win
    companyName: brand,
  };

  if (isResume && personaName) {
    initial.fullName = personaName;
  }

  if (template?.categorySlug === "invoices") {
    const computedTotals = computeInvoiceTotals(template, initial);
    Object.entries(computedTotals).forEach(([k, v]) => {
      initial[k] = v;
    });
  }

  return initial;
}

// `initial` only holds keys listed in content.fields, but the totals calculator
// needs `currency` and `tax` — which most invoices never declare as fields. A
// GST invoice therefore computed "$50,000.00" at 8% instead of "₹50,000.00" at
// 18%. Layer the defaults underneath so the context is always complete.
function totalsContext(
  specific: Record<string, string>,
  initial: Record<string, string>,
): Record<string, string> {
  return { ...FIELD_DEFAULTS, ...specific, ...initial };
}

export function getTemplateValues(template: any): Record<string, string> {
  const initial: Record<string, string> = {};
  const specific = {
    ...(SLUG_EXTRA_DEFAULTS[template?.slug] || {}),
    ...(SLUG_SPECIFIC_DEFAULTS[template?.slug] || {}),
    ...(OVERRIDES[template?.slug] || {}),
  };
  const fields: string[] = template?.content?.fields || [];
  const brand = SLUG_BRAND[template?.slug];

  const isResume = template?.categorySlug === "resumes";
  if (isResume && brand && !specific.fullName) {
    specific.fullName = brand;
  }

  // Exactly the derivation the defaults underlay applies, so a template's card
  // and its detail page always resolve identical contact details.
  const derived = deriveContactValues(template, brand, specific);

  fields.forEach((field) => {
    let brandDefault: string | undefined;
    if (field === "companyName") {
      brandDefault = brand;
    } else if (field === "companyEmail" && brand && !specific[field]) {
      const handle = brand.toLowerCase().replace(/[^a-z0-9]+/g, "");
      brandDefault = handle ? `hello@${handle}.com` : undefined;
    }

    // email / phone / linkedin / github / portfolio / location / address —
    // all belong to this template's own persona or brand.
    else if (derived[field] !== undefined && !specific[field]) {
      brandDefault = derived[field];
    }

    // Dynamic signature alignments
    else if (field === "clientSignature" && !specific[field]) {
      brandDefault = specific.clientName || FIELD_DEFAULTS.clientName;
    } else if (field === "freelancerSignature" && !specific[field]) {
      brandDefault = specific.freelancerName || brand || FIELD_DEFAULTS.freelancerName;
    } else if (field === "employerSignature" && !specific[field]) {
      brandDefault = specific.hrRepresentative || specific.companyName || brand || FIELD_DEFAULTS.companyName;
    } else if (field === "employeeSignature" && !specific[field]) {
      brandDefault = specific.employeeFullName || specific.employeeName || FIELD_DEFAULTS.employeeName;
    } else if (field === "catererSignature" && !specific[field]) {
      brandDefault = specific.catererName || specific.catererCompany || FIELD_DEFAULTS.catererName;
    } else if (field === "renterSignature" && !specific[field]) {
      brandDefault = specific.renterName || specific.tenantName || FIELD_DEFAULTS.renterName;
    } else if (field === "ownerSignature" && !specific[field]) {
      brandDefault = specific.ownerName || specific.ownerCompany || FIELD_DEFAULTS.ownerName;
    } else if (field === "landlordSignature" && !specific[field]) {
      brandDefault = specific.landlordName || FIELD_DEFAULTS.landlordName;
    } else if (field === "tenantSignature" && !specific[field]) {
      brandDefault = specific.tenantName || FIELD_DEFAULTS.tenantName;
    } else if (field === "partner1Signature" && !specific[field]) {
      brandDefault = specific.partner1Name || FIELD_DEFAULTS.partner1Name;
    } else if (field === "partner2Signature" && !specific[field]) {
      brandDefault = specific.partner2Name || FIELD_DEFAULTS.partner2Name;
    } else if (field === "vendorSignature" && !specific[field]) {
      brandDefault = specific.vendorName || specific.companyName || FIELD_DEFAULTS.vendorSignature;
    } else if (field === "licensorSignature" && !specific[field]) {
      brandDefault = specific.licensorName || FIELD_DEFAULTS.licensorName;
    } else if (field === "licenseeSignature" && !specific[field]) {
      brandDefault = specific.licenseeName || FIELD_DEFAULTS.licenseeName;
    } else if (field === "lenderSignature" && !specific[field]) {
      brandDefault = specific.lenderName || FIELD_DEFAULTS.lenderName;
    } else if (field === "borrowerSignature" && !specific[field]) {
      brandDefault = specific.borrowerName || FIELD_DEFAULTS.borrowerName;
    } else if (field === "subcontractorSignature" && !specific[field]) {
      brandDefault = specific.subcontractorName || FIELD_DEFAULTS.subcontractorName;
    } else if (field === "contractorSignature" && !specific[field]) {
      brandDefault = specific.contractorName || FIELD_DEFAULTS.contractorName;
    }
    
    // Dynamic email alignments
    else if (field === "employeeEmail" && !specific[field]) {
      const name = specific.employeeFullName || specific.employeeName || FIELD_DEFAULTS.employeeName;
      const handle = name.toLowerCase().replace(/[^a-z0-9]+/g, ".");
      brandDefault = handle ? `${handle}@email.com` : undefined;
    } else if (field === "clientEmail" && !specific[field]) {
      const name = specific.clientName || FIELD_DEFAULTS.clientName;
      const handle = name.toLowerCase().replace(/[^a-z0-9]+/g, ".");
      brandDefault = handle ? `${handle.replace(/\.services$|\.llc$|\.corp$|\.inc$/g, "")}@email.com` : undefined;
    } else if (field === "catererEmail" && !specific[field]) {
      const name = specific.catererName || specific.catererCompany || FIELD_DEFAULTS.catererName;
      const handle = name.toLowerCase().replace(/[^a-z0-9]+/g, ".");
      brandDefault = handle ? `${handle}@email.com` : undefined;
    } else if (field === "hrEmail" && !specific[field]) {
      const name = specific.hrRepresentative || FIELD_DEFAULTS.hrRepresentative;
      const handle = name.toLowerCase().replace(/[^a-z0-9]+/g, ".");
      brandDefault = handle ? `${handle}@email.com` : undefined;
    }

    // A few globals are written for a software/design persona and read as a
    // content leak elsewhere (CS degree on a chef's CV, Figma files as a
    // photography deliverable). Resolve those per-document instead.
    if (!specific[field] && !brandDefault && CONTEXT_SENSITIVE_FIELDS.has(field)) {
      brandDefault = deriveFallbackValue(field, template, {
        brand: brand || "",
        values: initial,
        defaults: FIELD_DEFAULTS,
      });
    }

    initial[field] = specific[field] || brandDefault || FIELD_DEFAULTS[field] || "";
  });

  // Derive money totals for any priced document, not just invoices. Quotations
  // and the expense report declare subtotal+total and carry a line-item table
  // too, but were excluded here — so they fell through to the generic
  // FIELD_DEFAULTS ($4,250 subtotal / $4,500 total), which don't even agree with
  // each other, let alone with the rows above them.
  const declaredFields: string[] = template?.content?.fields || [];
  const isPricedDoc =
    template?.categorySlug === "invoices" ||
    (declaredFields.includes("subtotal") && declaredFields.includes("total"));
  if (isPricedDoc) {
    const computedTotals = computeInvoiceTotals(template, totalsContext(specific, initial));
    Object.entries(computedTotals).forEach(([k, v]) => {
      initial[k] = v;
    });
  }

  // Safety net. `fields` only lists the tokens a template *declares*; anything
  // used in the body but left undeclared (or declared with no default anywhere)
  // reaches DocumentPaper unresolved and renders as its humanized field name —
  // that's how "shipping from Origin to Destination" and "Job Title1 — Company1"
  // shipped. Resolve every token the body actually uses, preferring explicit
  // values, then a derivation from this template's own identity.
  const ctx = { brand: brand || "", values: initial, defaults: FIELD_DEFAULTS };
  for (const key of collectTemplateTokens(template)) {
    if (initial[key]) continue;
    const value = specific[key] || FIELD_DEFAULTS[key] || deriveFallbackValue(key, template, ctx);
    if (value) initial[key] = value;
  }

  return initial;
}
