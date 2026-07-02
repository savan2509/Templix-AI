"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, ArrowRight, CheckCircle2, ChevronRight, PenTool, Download } from "lucide-react";

interface TemplateContent {
  title: string;
  fields: string[];
  layout: {
    header?: string;
    footer?: string;
  };
  styles: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  editorState: {
    type: string;
    content: any[];
  };
}

interface TemplateDetailViewProps {
  locale: string;
  template: {
    id: string;
    slug: string;
    title: string;
    description: string;
    isPremium: boolean;
    categorySlug: string;
    categoryName: string;
    content: TemplateContent;
  };
}

export default function TemplateDetailView({ locale, template }: TemplateDetailViewProps) {
  const router = useRouter();

  // Comprehensive sample values for realistic live document preview across all template types
  const FIELD_DEFAULTS: Record<string, string> = {
    // — Universal / Shared —
    companyName: "Acme Global Inc.",
    companyEmail: "info@acmeglobal.com",
    companyLogo: "🏢",
    logo: "🏢",
    clientName: "John Doe Services",
    email: "sarah.j@techsolutions.com",
    phone: "+1 (555) 382-9281",
    website: "www.acmeglobal.com",
    address: "742 Evergreen Terrace, Springfield, IL 62704",
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
    amountDue: "4,500.00",
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
    projectScope: "Deliver Next.js App Router integrations, seed database schema, construct Tiptap editor canvas, and build PDF exporter plugins.",
    summary: "Lead developer with 8+ years experience scaling SaaS architectures, designing Next.js routers, and managing high-volume Postgres schemas.",

    // — Employment Contract —
    hrRepresentative: "Marcus Vance, HR Director",
    hrEmail: "marcus.v@acmeglobal.com",
    hrPhone: "+1 (555) 902-1122",
    employeeFullName: "David Miller",
    employeeAddress: "456 Oak Avenue, Apt 2B, Brooklyn, NY 11201",
    employeeEmail: "david.miller@gmail.com",
    employeePhone: "+1 (555) 443-8899",
    department: "Engineering & Technology",
    endDate: "N/A (Indefinite)",
    workLocation: "New York Corporate Office / Hybrid",
    bonus: "10% annual performance-based bonus target",
    benefits: "Medical, dental, vision, 401(k) matching, and 20 days PTO",
    payFrequency: "Semi-monthly (15th and last day of the month)",
    workingHours: "40 hours per week, flexible core hours",
    probationPeriod: "90 days from the start date",
    leavePolicy: "20 days paid vacation, 5 sick days, and 10 company holidays",
    noticePeriod: "30 days written notice required by either party",
    confidentialityClause: "Employee agrees to protect all proprietary and confidential business data.",
    nonCompeteClause: "12-month post-employment restriction within a 50-mile radius for competing services.",
    employerSignature: "Marcus Vance, HR Representative",
    employeeSignature: "David Miller",
    signatureDate: "2026-07-01",

    // — Freelance Contract —
    freelancerAddress: "789 Pine Lane, Portland, OR 97201",
    freelancerEmail: "alex@cartercreative.co",
    freelancerPhone: "+1 (555) 233-4455",
    projectTitle: "Brand Identity & Web Redesign",
    deliverables: "Logo pack, color palette, custom Figma layout, and Tailwind CSS code files.",
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
    partyAAddress: "123 Silicon Ave, San Jose, CA 95112",
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
    partyASignature: "John Doe, CEO Party A",
    partyBSignature: "Jane Smith, CTO Party B",

    // — Consulting Agreement —
    consultantCompany: "AI Cryptography Consultants",
    consultantContact: "+1 (555) 700-1122 | alan@turingconsulting.com",
    fixedFee: "$15,000.00 fixed project fee",
    expenses: "Travel and lodging expenses pre-approved up to $2,000.00",
    intellectualProperty: "All work product created by Consultant vests exclusively in the Client upon payment.",
    consultantSignature: "Alan Turing",

    // — Rental Agreement —
    landlordName: "Richard Hendricks",
    landlordAddress: "345 Palo Alto Rd, Palo Alto, CA 94301",
    landlordContact: "+1 (555) 888-2233",
    tenantName: "Erlich Bachman",
    tenantAddress: "5230 Newell Rd, Palo Alto, CA 94303",
    tenantPhone: "+1 (555) 777-4455",
    propertyType: "Residential Single Family Home (4 Bedrooms)",
    leaseStartDate: "2026-08-01",
    leaseEndDate: "2027-07-31",
    monthlyRent: "$4,500.00 per month",
    securityDeposit: "$9,000.00 refundable deposit",
    rentDueDate: "1st day of each calendar month",
    utilities: "Tenant is responsible for water, power, gas, and high-speed internet.",
    maintenance: "Landlord handles major structural repairs; Tenant maintains lawn and minor tasks.",
    petsPolicy: "Allowed with pre-approval and a $500 non-refundable pet fee.",
    smokingPolicy: "Strictly no smoking inside the premises.",
    landlordSignature: "Richard Hendricks",
    tenantSignature: "Erlich Bachman",

    // — Sales Contract —
    sellerName: "Daniel Craig",
    sellerCompany: "Craig Automotive Dealers",
    sellerAddress: "890 Auto Row, Detroit, MI 48201",
    buyerName: "James Bond",
    buyerCompany: "MI6 Services",
    buyerAddress: "85 Albert Embankment, London, UK",
    totalAmount: "$85,000.00",
    shippingMethod: "Enclosed vehicle container delivery",
    warrantyTerms: "12-month bumper-to-bumper dealer warranty included.",
    returnPolicy: "7-day exchange or full refund policy if vehicle is undamaged.",

    // — Partnership Agreement —
    partner1Name: "Erlich Bachman",
    partner1Address: "Palo Alto, CA",
    partner1Ownership: "50% ownership stake",
    partner2Name: "Richard Hendricks",
    partner2Address: "Palo Alto, CA",
    partner2Ownership: "50% ownership stake",
    industryType: "Software & Technology Incubator",
    capitalContribution: "$100,000.00 total initial capital contribution ($50,000.00 per partner)",
    profitSharing: "Profits and losses split 50/50, paid out quarterly.",
    partnerResponsibilities: "Erlich manages branding and relations; Richard handles tech development.",
    decisionMaking: "All major business expansion decisions require unanimous partner consent.",
    exitStrategy: "A partner may sell their shares back to the partnership or to an approved buyer.",
    partner1Signature: "Erlich Bachman",
    partner2Signature: "Richard Hendricks",

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
  const SLUG_SPECIFIC_DEFAULTS: Record<string, Record<string, string>> = {
    "invoice-freelancer": {
      unitPrice: "$1,200",
      total: "$4,500.00",
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
      discount: "$50.00"
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
      total: "$9,700.00",
      tax: "8%",
      discount: "$50.00"
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
    "freelance-agreement": {
      freelancerName: "Alex Carter",
      businessName: "Carter Creative Studio",
      clientName: "Jessica Wong",
      clientCompanyName: "Apex Marketing Group",
      clientAddress: "100 Broadway, Suite 400, Portland, OR 97205",
      clientEmail: "jessica.w@apexmarketing.com",
      clientPhone: "+1 (555) 877-6622",
      projectDescription: "Complete overhaul of company branding assets, style guides, and headless web layouts."
    },
    "freelance-contract": {
      freelancerName: "Alex Carter",
      businessName: "Carter Creative Studio",
      clientName: "Jessica Wong",
      clientCompanyName: "Apex Marketing Group",
      clientAddress: "100 Broadway, Suite 400, Portland, OR 97205",
      clientEmail: "jessica.w@apexmarketing.com",
      clientPhone: "+1 (555) 877-6622",
      projectDescription: "Complete overhaul of company branding assets, style guides, and headless web layouts."
    },
    "independent-contractor-agreement": {
      contractorName: "Robert Chen"
    },
    "service-agreement": {
      serviceDescription: "Commercial janitorial and office cleaning services.",
      serviceFee: "$1,200.00 per month"
    },
    "consulting-agreement": {
      consultantName: "Professor Alan Turing"
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
    }
  };

  // Initialize form state for all fields defined in the template JSON
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    const specific = SLUG_SPECIFIC_DEFAULTS[template.slug] || {};
    template.content.fields.forEach((field) => {
      initial[field] = specific[field] || FIELD_DEFAULTS[field] || "";
    });
    return initial;
  });

  const handleInputChange = (field: string, val: string) => {
    setFieldValues((prev) => ({ ...prev, [field]: val }));
  };

  // Helper to replace double curly braces with values in live preview text
  const renderTextWithVariables = (text: string) => {
    let result = text;
    Object.entries(fieldValues).forEach(([key, val]) => {
      result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), val || key.replace(/([A-Z])/g, " $1").trim());
    });
    // Clean up any remaining unreplaced {{variables}}
    result = result.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, (_match, varName) =>
      varName.replace(/([A-Z])/g, " $1").trim()
    );
    return result;
  };

  const handleCustomizeClick = () => {
    // Redirect to the editor page with template slug and pre-filled variables as search queries
    const params = new URLSearchParams();
    params.set("template", template.slug);
    Object.entries(fieldValues).forEach(([k, v]) => {
      params.set(`field_${k}`, v);
    });

    router.push(`/${locale}/editor/new?${params.toString()}`);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Left side: parameters controller form */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {template.categoryName}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
              Customize variables
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
              Fill in the parameters below. The preview paper will update dynamically in real time.
            </p>
          </div>

          <div className="space-y-4 max-h-[360px] overflow-y-auto overflow-x-hidden pr-3">
            {template.content.fields.map((field) => (
              <div key={field} className="space-y-1">
                <label htmlFor={`field-${field}`} className="block text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  id={`field-${field}`}
                  type="text"
                  value={fieldValues[field] || ""}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
            <button
              onClick={handleCustomizeClick}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/10 flex items-center justify-center gap-1.5 transition-colors"
            >
              <PenTool className="h-4 w-4" />
              <span>Customize in Editor</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-[10px] text-center text-zinc-400">
              Tapping opens our full tiptap canvas where you can add signature, upload logo, export PDF.
            </p>
          </div>
        </div>

        {/* Dynamic Trust Badges */}
        <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3.5">
          <h4 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
            Template Quality Guarantee
          </h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Tested & optimized for major Applicant Tracking Systems (ATS).</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Formatted to standard invoice audit configurations.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Supports instant offline PDF & DOCX compilations.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: dynamic live preview paper */}
      <div className="lg:col-span-7 space-y-4">
        <h3 className="font-bold text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="h-4 w-4 text-zinc-400" />
          <span>Live Document Preview</span>
          <span className="ml-auto text-[10px] text-green-500 font-semibold uppercase tracking-widest animate-pulse">● Live</span>
        </h3>

        {/* A4 Paper simulation */}
        <div className="w-full bg-white text-zinc-800 border border-zinc-300 rounded-xl shadow-2xl overflow-hidden font-sans relative" style={{ minHeight: "700px" }}>

          {/* Top accent stripe */}
          <div
            className="h-2 w-full"
            style={{ background: `linear-gradient(90deg, ${template.content.styles.primaryColor || "#2563eb"}, ${template.content.styles.secondaryColor || "#3b82f6"})` }}
          />

          <div className="px-5 sm:px-10 py-6 sm:py-8 space-y-5">
            {/* Header row: Company + branding */}
            <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-2 sm:gap-4 pb-5 border-b-2" style={{ borderColor: template.content.styles.primaryColor || "#2563eb" }}>
              <div>
                <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: template.content.styles.primaryColor || "#2563eb" }}>
                  {renderTextWithVariables("{{companyName}}")}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {renderTextWithVariables("{{address}}")}
                </div>
                <div className="text-xs text-zinc-400">
                  {renderTextWithVariables("{{email}}")} · {renderTextWithVariables("{{phone}}")}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">
                  {template.categoryName}
                </div>
                <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight" style={{ color: template.content.styles.primaryColor || "#2563eb" }}>
                  {template.content.layout.header
                    ? renderTextWithVariables(template.content.layout.header)
                    : template.title.replace(" Template", "").toUpperCase()}
                </div>
              </div>
            </div>

            {/* Render Tiptap document blocks */}
            <div className="space-y-3 text-zinc-700 text-[13px] leading-relaxed">
              {template.content.editorState.content.map((block, idx) => {
                // ── Heading ──────────────────────────────────────────────────
                if (block.type === "heading") {
                  const lvl = block.attrs?.level || 1;
                  const text = block.content?.map((c: any) => c.text).join("") || "";
                  const replaced = renderTextWithVariables(text);
                  if (lvl === 1) return (
                    // h2 (not h1): the page already has a single semantic h1 (the
                    // template title). This is a visual heading inside the preview.
                    <h2 key={idx} className="text-lg font-black mt-4 mb-1 pb-1 border-b" style={{ color: template.content.styles.primaryColor || "#1d4ed8", borderColor: template.content.styles.primaryColor || "#bfdbfe" }}>
                      {replaced}
                    </h2>
                  );
                  if (lvl === 2) return (
                    <h2 key={idx} className="text-sm font-bold mt-3 mb-0.5 uppercase tracking-wider" style={{ color: template.content.styles.primaryColor || "#2563eb" }}>
                      {replaced}
                    </h2>
                  );
                  return (
                    <h3 key={idx} className="text-xs font-bold mt-2 text-zinc-600 uppercase tracking-wide">
                      {replaced}
                    </h3>
                  );
                }

                // ── Paragraph ────────────────────────────────────────────────
                if (block.type === "paragraph") {
                  const hasContent = block.content && block.content.length > 0;
                  if (!hasContent) return <div key={idx} className="h-2" />;
                  return (
                    <p key={idx} className="text-[12px] text-zinc-600 leading-relaxed">
                      {block.content?.map((c: any, cidx: number) => {
                        const isBold = c.marks?.some((m: any) => m.type === "bold");
                        const isItalic = c.marks?.some((m: any) => m.type === "italic");
                        const textVal = renderTextWithVariables(c.text || "");
                        if (isBold && isItalic) return <strong key={cidx}><em>{textVal}</em></strong>;
                        if (isBold) return <strong key={cidx} className="font-semibold text-zinc-800">{textVal}</strong>;
                        if (isItalic) return <em key={cidx} className="text-zinc-500">{textVal}</em>;
                        return <span key={cidx}>{textVal}</span>;
                      })}
                    </p>
                  );
                }

                // ── Table ────────────────────────────────────────────────────
                if (block.type === "table") {
                  const rows = block.content || [];
                  const header = rows[0];
                  const body = rows.slice(1);
                  return (
                    <div key={idx} className="overflow-x-auto rounded-lg border border-zinc-200 my-3">
                      <table className="w-full text-left text-[11px] border-collapse">
                        {header && (
                          <thead>
                            <tr style={{ backgroundColor: template.content.styles.primaryColor || "#2563eb" }}>
                              {header.content?.map((cell: any, cellIdx: number) => (
                                <th key={cellIdx} className="px-3 py-2 font-semibold text-white whitespace-nowrap">
                                  {renderTextWithVariables(cell.content?.[0]?.content?.[0]?.text || "")}
                                </th>
                              ))}
                            </tr>
                          </thead>
                        )}
                        <tbody>
                          {body.map((row: any, rowIdx: number) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                              {row.content?.map((cell: any, cellIdx: number) => (
                                <td key={cellIdx} className="px-3 py-2 border-t border-zinc-100 text-zinc-600">
                                  {renderTextWithVariables(cell.content?.[0]?.content?.[0]?.text || "")}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                // ── Bullet list ──────────────────────────────────────────────
                if (block.type === "bulletList") {
                  return (
                    <ul key={idx} className="space-y-1 my-2 pl-1">
                      {block.content?.map((li: any, liIdx: number) => (
                        <li key={liIdx} className="flex items-start gap-2 text-[12px] text-zinc-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: template.content.styles.primaryColor || "#2563eb" }} />
                          {renderTextWithVariables(li.content?.[0]?.content?.[0]?.text || "")}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // ── Ordered list ─────────────────────────────────────────────
                if (block.type === "orderedList") {
                  return (
                    <ol key={idx} className="space-y-1 my-2 pl-4 list-decimal">
                      {block.content?.map((li: any, liIdx: number) => (
                        <li key={liIdx} className="text-[12px] text-zinc-600">
                          {renderTextWithVariables(li.content?.[0]?.content?.[0]?.text || "")}
                        </li>
                      ))}
                    </ol>
                  );
                }

                // ── Horizontal rule ──────────────────────────────────────────
                if (block.type === "horizontalRule") {
                  return <hr key={idx} className="border-zinc-200 my-3" />;
                }

                return null;
              })}
            </div>

            {/* Footer */}
            {template.content.layout.footer && (
              <div className="pt-5 mt-4 border-t border-zinc-200 flex items-center justify-between">
                <div className="text-[10px] text-zinc-400">
                  {renderTextWithVariables(template.content.layout.footer)}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: template.content.styles.primaryColor || "#2563eb" }}>
                  {renderTextWithVariables("{{companyName}}")}
                </div>
              </div>
            )}
          </div>

          {/* Bottom accent stripe */}
          <div
            className="h-1 w-full mt-auto"
            style={{ background: `linear-gradient(90deg, ${template.content.styles.primaryColor || "#2563eb"}, ${template.content.styles.secondaryColor || "#3b82f6"})` }}
          />
        </div>
      </div>
    </div>
  );
}
