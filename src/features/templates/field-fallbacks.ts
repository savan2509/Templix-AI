/**
 * Last-resort resolution for `{{token}}`s used in a template body.
 *
 * DocumentPaper renders any token it can't resolve as the humanized field name,
 * so a missing default doesn't fail loudly — it ships as body text like
 * "shipping from Origin to Destination" or "Job Title1 — Company1". This module
 * guarantees every token in every document resolves to something plausible, and
 * keeps doing so for templates added later.
 *
 * Order of preference (highest first):
 *   1. The template's own explicit values (SLUG_* maps) — handled by the caller.
 *   2. A structural derivation from the template's identity (its brand, client,
 *      title and profession) — so the value is actually *about* this document.
 *   3. A semantic guess from the field name's shape (…Fee -> money, …Date ->
 *      a date, …Terms -> a clause), which is generic but never nonsense.
 *
 * Everything is seeded from the slug, so values are stable across renders and
 * two templates don't end up with identical filler.
 */

function seedOf(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Collects every {{token}} used anywhere in the document body. */
export function collectTemplateTokens(template: any): string[] {
  const raw = JSON.stringify(template?.content?.editorState ?? {});
  return [...new Set([...raw.matchAll(/\{\{([a-zA-Z0-9_]+)\}\}/g)].map((m) => m[1]))];
}

const PERSONAS = [
  "Marcus Reed", "Alicia Moreno", "Dev Patel", "Nina Kowalski", "Andre Dubois",
  "Grace Lim", "Tobias Fischer", "Rania Haddad", "Owen Bradley", "Sofia Rinaldi",
  "Ivan Petrov", "Chloe Beaumont", "Samuel Osei", "Hana Takeda", "Diego Marquez",
  "Freya Lindqvist", "Malik Johnson", "Elena Vasquez", "Ruth Adeyemi", "Caleb Stone",
];

const EMPLOYERS = [
  "Northwind Group", "Brightline Services", "Halcyon Partners", "Cedar & Co.",
  "Meridian Works", "Stonebridge Ltd.", "Lakeview Associates", "Ironwood Industries",
  "Summit Collective", "Blue Harbor Group",
];

const SCHOOLS = [
  "Fairview State University", "Northgate Community College", "Riverside Institute",
  "Lakeland Technical College", "Ashford University", "Whitmore State College",
];

const STATES = [
  "the State of California", "the State of Texas", "the State of New York",
  "the State of Washington", "the Commonwealth of Massachusetts", "the State of Illinois",
];

const CITIES = [
  "Austin, TX", "Denver, CO", "Seattle, WA", "Chicago, IL",
  "Boston, MA", "Atlanta, GA", "Portland, OR", "Charlotte, NC",
];

/**
 * Domain-specific values. Each of these keys is used by exactly one (or a
 * couple of) template(s), so a hand-written value here IS that template's
 * content — a generic guess would read as filler in the preview, and the
 * preview is the product.
 */
const DOMAIN_VALUES: Record<string, string> = {
  // ── HR / employment letters ────────────────────────────────────────────────
  hrDesignation: "Head of Human Resources",
  reportingManager: "Anita Desai, Delivery Manager",
  employeeTitle: "Senior Operations Associate",
  employeeDesignation: "Senior Operations Associate",
  employmentStatus: "Full-time, permanent",
  currentDepartment: "Customer Operations",
  requestedDepartment: "Product Support",
  mentorDesignation: "Engineering Team Lead",
  employerRepresentative: "Rakesh Menon, Director – People Operations",
  revisedCtc: "₹9,60,000 per annum",
  ctc: "₹8,40,000 per annum",
  coveringColleague: "Priya Nair, Senior Associate",
  contactDuringLeave: "Reachable by email for urgent handovers only",
  residingSince: "March 2021",
  accountType: "Savings account",

  // ── India payroll / statutory ──────────────────────────────────────────────
  payPeriodMonth: "June",
  payPeriodYear: "2026",
  basicPay: "₹35,000.00",
  hra: "₹14,000.00",
  conveyanceAllowance: "₹1,600.00",
  specialAllowance: "₹9,400.00",
  providentFund: "₹4,200.00",
  esi: "₹525.00",
  professionalTax: "₹200.00",
  tds: "₹2,750.00",
  grossEarnings: "₹60,000.00",
  totalDeductions: "₹7,675.00",
  netPay: "₹52,325.00",
  netPayInWords: "Fifty-two thousand three hundred twenty-five rupees only",
  salaryForMonth: "₹52,325.00",
  leaveEncashment: "₹18,400.00",
  noticeRecovery: "₹0.00",
  advancesRecovery: "₹5,000.00",
  netAmountPayable: "₹65,725.00",
  netAmountInWords: "Sixty-five thousand seven hundred twenty-five rupees only",
  landlordPan: "AABPL1234C",
  licensorPan: "AAKPS7788Q",
  licenseePan: "BNZPM4512K",
  employeePan: "CDXPK9087R",
  consignorGstin: "27AABCU9603R1ZX",
  consigneeGstin: "29AACCM1234F1Z5",
  sellerGstin: "27AABCU9603R1ZX",
  buyerGstin: "06AACCP8912J1ZQ",
  rentAmountWords: "Eighteen thousand rupees only",
  paymentMode: "Bank transfer (NEFT)",
  totalValue: "₹1,24,500.00",
  totalValueWords: "One lakh twenty-four thousand five hundred rupees only",
  taxableSubtotal: "₹50,000.00",
  grandTotalWords: "Fifty-nine thousand rupees only",
  governingCity: "Mumbai",
  governingState: "Maharashtra",
  agreementPlace: "Pune, Maharashtra",
  premisesArea: "1,150 sq. ft. (carpet area)",
  maintenanceCharges: "₹2,500 per month, payable by the Licensee",
  permittedUse: "Residential use by the Licensee and immediate family only",
  stampDutyBorneBy: "the Licensee",

  // ── Contracts ──────────────────────────────────────────────────────────────
  finalFileFormats: "Layered source files plus print-ready PDF, SVG and PNG exports",
  designDeliverables: "Primary logo, secondary mark, colour palette and type scale",
  fitnessGoals: "Rebuild lower-body strength and complete a 10K within six months",
  sessionPackage: "12 sessions, valid for 16 weeks",
  vendorCoordination: "Venue, catering, florals and AV booked and managed by the Planner",
  cancellationNotice: "24 hours",
  progressReporting: "A written progress summary at the end of every month",
  managerDuties: "Tenant screening, rent collection, routine maintenance and annual reporting",
  subscriptionPlan: "Business tier — up to 25 seats",
  serviceLevel: "99.9% monthly uptime, support response within one business day",
  resourceContributions: "Each party funds its own staff time; shared costs are split evenly",
  coachingFocus: "Leadership presence and executive communication",
  programTerm: "Six months, reviewed at the midpoint",
  licenseTerm: "12 months, renewing annually unless cancelled",
  ipOwnership: "The Licensor retains all right, title and interest in the Software",
  ipAssignment: "All work product created for the venture is assigned to the company",
  productLine: "Commercial water-filtration units",
  distributionTerritory: "The Pacific Northwest (WA, OR, ID)",
  agreementTerm: "Two years from the effective date",
  minimumOrder: "250 units per quarter",
  franchiseBrand: "Brightline Coffee Co.",
  franchiseTerritory: "Greater Austin, exclusive within a 5-mile radius",
  franchiseTerm: "Ten years, renewable once",
  brandStandards: "Store build-out, menu, packaging and staff training per the Brand Manual",
  eventOrProperty: "The Riverside Summer Series",
  sponsorshipBenefits: "Naming rights, on-site branding and four social features",
  sponsorshipTerm: "One season (May–September 2026)",
  qualifiedReferral: "An introduced party that signs a paid agreement within 90 days",
  trackingMethod: "Unique affiliate link with 60-day cookie attribution",
  commissionStructure: "15% of first-year net revenue, paid monthly",
  retainerServices: "Up to 20 hours per month of advisory and hands-on support",
  equitySplit: "55% / 45%, vesting over four years with a one-year cliff",
  rolesResponsibilities: "One founder leads product and engineering; the other leads growth and finance",
  companyLicense: "Lic. #CN-448120",

  // ── Letters ────────────────────────────────────────────────────────────────
  sharedMemory: "the afternoon he talked the whole team through his first big build",
  achievement: "your promotion to Regional Director",
  orderVolume: "roughly 4,000 units per quarter",
  currentRent: "$1,850 per month",
  newRent: "$1,975 per month",
  accommodationDetails: "Staying at my residence for the duration of the visit",
  storyAngle: "How small studios are winning work from national agencies",
  keyHook: "Independent shops grew billings 34% while the big firms shrank",
  supportingData: "A 400-studio survey run between January and April 2026",
  interviewOffer: "Our founder is available for interview any weekday afternoon",
  collaborationIdea: "A co-authored guide and a joint webinar for both audiences",
  mutualBenefit: "Each side reaches an engaged audience it doesn't already serve",

  // ── Reports ────────────────────────────────────────────────────────────────
  shift: "Day shift (7:00 AM – 3:30 PM)",
  hoursLogged: "7.5",
  topPriority: "Clear the backlog on line 2 before Friday's run",
  correctiveAction: "Guard rails refitted and a toolbox talk delivered to all operators",
  sessionsDelivered: "14",
  responsesCollected: "1,284",
  npsScore: "+42",
  totalReach: "184,600",
  highestRisk: "Single-supplier dependency on the primary component",
  quorum: "7 of 9 directors present — quorum met",
  decisionRequested: "Approval of the FY27 capital budget",
  totalSpent: "$412,800",
  carbonFootprint: "1,240 tCO₂e, down 8% year on year",
  buildVersion: "4.12.0-rc3",
  defectDensity: "0.8 defects per 1,000 lines",
  unitsProduced: "12,450",
  environment: "Production — 3 regions, 48 nodes",
  industry: "Mid-market logistics",
  sampleSize: "1,284 respondents",
  netVariance: "-$18,400 (3.2% under budget)",
  targetCompany: "Cedar Ridge Manufacturing",
  dealValue: "$14.2M",
  riskRating: "Moderate",
  projectSponsor: "Elena Vasquez, VP Operations",
  releaseVersion: "2026.7.1",
  acceptanceStatus: "Accepted with two minor observations",

  // ── Business plans ─────────────────────────────────────────────────────────
  appCategory: "Health & fitness",
  targetIndustry: "Mid-market professional services",
  pricingModel: "Per-seat subscription with an annual discount",
  cuisineStyle: "Modern South Indian",
  cuisineType: "Pan-Asian comfort food",
  eventNiche: "Corporate offsites and product launches",
  freightType: "Dry van, regional less-than-truckload",
  fleetSize: "12 vehicles",
  birdCapacity: "18,000 birds per cycle",
  productFocus: "Table eggs and dressed broilers",
  washType: "Touchless automatic plus self-serve bays",
  serviceModel: "Mobile grooming vans on a subscription schedule",
  specialty: "General practice with a paediatric focus",
  brewCapacity: "3,500 barrels per year",
  productNiche: "Home organisation and small-space storage",
  salesPlatform: "Shopify storefront plus two marketplaces",
  subjectFocus: "Maths and science, grades 6–12",
  studioStyle: "Vinyasa and restorative",
  boxTheme: "Single-origin coffee and brewing gear",
  targetCustomer: "Home brewers aged 25–44 in metro areas",

  // ── Quotations / invoices ──────────────────────────────────────────────────
  balanceDue: "$2,525.00",
  systemSize: "8.4 kW rooftop array",
  originPort: "Nhava Sheva (INNSA)",
  destinationPort: "Rotterdam (NLRTM)",
  travelDates: "14–22 October 2026",
  platforms: "iOS and Android, plus a responsive web build",
  roomArea: "620 sq. ft.",
  drawingRef: "DRG-2261 Rev. C",
  petSpecies: "Canine — Labrador Retriever, 6 yrs",
  clientBusiness: "A 30-seat dental practice",
  vehicleMakeModel: "2019 Maruti Suzuki Ciaz VXi",
  manufactureYear: "2019",
  saleAmountWords: "Six lakh forty thousand rupees only",
};

/**
 * A handful of FIELD_DEFAULTS are written for a software/design persona and are
 * plainly wrong on other documents — a CS degree on a chef's resume, "custom
 * Figma layout" as the deliverable of a wedding photography contract. These
 * fields therefore resolve per-document instead of from the global default,
 * unless the template names its own value.
 */
export const CONTEXT_SENSITIVE_FIELDS = new Set([
  "degree",
  "deliverables",
  "projectDescription",
]);

const DEGREE_BY_PROFESSION: Record<string, string> = {
  electrician: "Associate of Applied Science in Electrical Technology",
  chef: "Diploma in Culinary Arts",
  "flight-attendant": "Bachelor of Arts in Hospitality Management",
  "dental-hygienist": "Associate of Science in Dental Hygiene",
  attorney: "Juris Doctor (J.D.)",
  "physical-therapist": "Doctor of Physical Therapy (D.P.T.)",
  "truck-driver": "Commercial Driver's License (Class A), CDL Academy",
  "social-worker": "Master of Social Work (M.S.W.)",
  dentist: "Doctor of Dental Surgery (D.D.S.)",
  "bank-teller": "Bachelor of Business Administration",
  receptionist: "Associate of Arts in Business Administration",
  paralegal: "Paralegal Studies Certificate (ABA-approved)",
  nurse: "Bachelor of Science in Nursing (B.S.N.)",
  teacher: "Bachelor of Education",
  pharmacist: "Doctor of Pharmacy (Pharm.D.)",
  accountant: "Bachelor of Science in Accounting",
  "civil-engineer": "Bachelor of Science in Civil Engineering",
  "hr-manager": "Bachelor of Business Administration, Human Resources",
};

const DELIVERABLES_BY_SUBJECT: Record<string, string> = {
  photography: "Edited high-resolution gallery, online proofing link and a print release",
  "wedding-photography": "Edited high-resolution gallery, print release and a 30-page album",
  videography: "Edited highlight film, full-length feature cut and the raw footage archive",
  catering: "Agreed menu, staffing, service ware and on-site setup and breakdown",
  construction: "Completed works per the drawings, plus warranties and as-built records",
  consulting: "A written findings report, a prioritised roadmap and a readout session",
};

export interface FallbackCtx {
  brand: string;
  values: Record<string, string>;
  defaults: Record<string, string>;
}

/**
 * Returns a plausible value for `key`, or "" when nothing sensible applies (the
 * caller then leaves the token alone rather than inventing gibberish).
 */
export function deriveFallbackValue(key: string, template: any, ctx: FallbackCtx): string {
  const slug: string = template?.slug ?? "";
  const category: string = template?.categorySlug ?? "";
  const seed = seedOf(slug + ":" + key);
  const pick = <T,>(arr: T[]): T => arr[seed % arr.length];

  const title = String(template?.title ?? "").replace(/\s*(Template|Format|Sample)\s*$/i, "").trim();
  // "Electrician Resume" -> "Electrician"; "Catering Contract" -> "Catering".
  const subject = title.replace(/\s*(Resume|CV|Contract|Agreement|Invoice|Proposal|Letter|Report|Quotation|Business Plan)\s*$/i, "").trim() || title;

  const brand = ctx.brand || ctx.defaults.companyName || "Your Company";
  const client = ctx.values.clientName || ctx.defaults.clientName || "the Client";
  const date = ctx.values.date || ctx.defaults.date || "July 3, 2026";
  const person =
    ctx.values.fullName && ctx.values.fullName !== ctx.defaults.companyName
      ? ctx.values.fullName
      : pick(PERSONAS);

  // ── 0a. Fields whose global default is written for the wrong profession ───
  if (key === "degree") {
    const prof = slug.replace(/^(resume|cv)-/, "");
    return (
      DEGREE_BY_PROFESSION[prof] ??
      // Never guess a field of study we don't know — an unqualified degree is
      // always safe, a wrong one ("Computer Science" on a chef CV) is not.
      `Bachelor's degree, ${pick(SCHOOLS)}`
    );
  }
  if (key === "deliverables") {
    const themed = Object.keys(DELIVERABLES_BY_SUBJECT).find((k) => slug.includes(k));
    if (themed) return DELIVERABLES_BY_SUBJECT[themed];
    return `Agreed ${subject.toLowerCase() || "project"} deliverables, confirmed in writing before work begins`;
  }
  if (key === "projectDescription") {
    return `${subject} work for ${client}`;
  }

  // ── 0b. Hand-written domain values (one template each) ────────────────────
  if (DOMAIN_VALUES[key]) return DOMAIN_VALUES[key];

  // ── 1. Structural keys — derived from what this document actually is ───────
  switch (key) {
    // Two-party agreements
    case "partyOne":
    case "partyOneSignature":
      return brand;
    case "partyTwo":
    case "partyTwoSignature":
      return client;
    case "partyOneRole":
      return `${subject} provider`;
    case "partyTwoRole":
      return "Receiving party";
    case "governingLaw":
      return pick(STATES);

    // Document identity
    case "reportTitle":
    case "proposalTitle":
    case "planTitle":
      return title;
    case "reportDate":
    case "proposalDate":
    case "letterDate":
    case "effectiveDate":
      return date;

    // Correspondence
    case "senderName":
      return person;
    case "senderTitle":
      return pick(["Operations Manager", "Program Director", "Account Manager", "Managing Partner"]);
    case "recipientName":
      return pick(PERSONAS.filter((p) => p !== person));
    case "recipientTitle":
      return pick(["Head of Operations", "HR Manager", "Department Head", "Regional Director"]);
    case "contactInfo":
      return `${ctx.values.email || ctx.values.companyEmail || "hello@example.com"} · ${ctx.values.phone || "+1 (555) 204-8811"}`;

    // Résumé work history — profession-aware so an electrician never shows a
    // software title (the root of the "B.S. in Computer Science on a chef CV" bug).
    case "jobTitle1":
      return category === "resumes" ? `Senior ${subject}` : `Senior ${subject} Specialist`;
    case "jobTitle2":
      return subject;
    case "company1":
      return pick(EMPLOYERS);
    case "company2":
      return pick(EMPLOYERS.slice().reverse());
    case "role1dates":
      return "2021 – Present";
    case "role2dates":
      return "2017 – 2021";
    case "school":
      return pick(SCHOOLS);
    case "serviceArea":
      return `the ${pick(CITIES).split(",")[0]} metro area`;
  }

  // ── 2. Semantic shape of the field name ───────────────────────────────────
  const k = key.toLowerCase();

  if (/(^|[a-z])date$|^date[A-Z]|deadline|expiry|expiration/i.test(key)) return date;
  if (/(fee|cost|price|amount|budget|balance|deposit|surcharge|ask|revenue|salary|funding|investment|valuation)$/i.test(key)) {
    const amounts = ["$1,250.00", "$2,400.00", "$4,800.00", "$7,500.00", "$12,000.00", "$18,500.00"];
    return pick(amounts);
  }
  if (/(rate)$/i.test(key)) return pick(["$85/hour", "$120/hour", "8%", "12%"]);
  if (/(hours|duration|length|period|cycle)$/i.test(key)) return pick(["4 hours", "8 hours", "30 days", "12 months"]);
  if (/(schedule|timeline)$/i.test(key)) return pick(["Weekdays, 9:00 AM – 5:00 PM", "Two sessions per week", "4–6 weeks from kickoff"]);
  if (/(terms|policy|disclosure|waiver|nature|responsibility|rights|authority|protection)$/i.test(key)) {
    return `As set out in this ${subject.toLowerCase() || "agreement"}, agreed in writing by both parties.`;
  }
  if (/(name)$/i.test(key)) return /company|firm|vendor|agency|studio|contractor/i.test(k) ? brand : person;
  if (/(email)$/i.test(key)) return ctx.values.email || ctx.values.companyEmail || "hello@example.com";
  if (/(phone|mobile|contact)$/i.test(key)) return ctx.values.phone || "+1 (555) 204-8811";
  if (/(address|location|venue|site|origin|destination)$/i.test(key)) return pick(CITIES);
  if (/(number|no|id|reference|code)$/i.test(key)) return `${subject.slice(0, 3).toUpperCase() || "DOC"}-${2000 + (seed % 8000)}`;
  if (/(count|quantity|qty|units|sessions|rounds|revisions)$/i.test(key)) return String(2 + (seed % 10));
  if (/(percent|percentage|share|margin)$/i.test(key)) return `${5 + (seed % 25)}%`;
  if (/(goal|objective|purpose|reason|summary|scope|statement|recommendation|deliverables?|included|covered|provided)$/i.test(key)) {
    return `${subject} work agreed between ${brand} and ${client}.`;
  }

  return "";
}
