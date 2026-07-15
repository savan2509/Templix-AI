export const resumesExtraTemplates: any[] = [
  {
    id: "resume-electrician",
    slug: "resume-electrician",
    title: "Electrician Resume Template",
    description: "Free, ATS-friendly electrician resume template for licensed tradespeople showcasing wiring expertise, safety compliance, and hands-on project results.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Electrician Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "LICENSED ELECTRICIAN", footer: "License and references available on request" },
      styles: { primaryColor: "#b45309", secondaryColor: "#78350f" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Installed and terminated wiring across 40+ residential and commercial builds with zero code violations." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cut service callbacks 30% by standardizing panel labeling and load-testing procedures." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trained 3 apprentices on NEC compliance and safe lockout/tagout practices." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wired and commissioned 200A service upgrades on tight 2-day turnarounds." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Diagnosed and repaired faults across 15 industrial control panels, restoring uptime same day." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained a spotless 3-year safety record across all job sites." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Residential and commercial wiring, conduit bending, panel installation" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "NEC code compliance, blueprint reading, troubleshooting" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Motor controls, low-voltage systems, OSHA safety standards" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "State Journeyman Electrician License" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "OSHA 30-Hour Construction Safety Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-chef",
    slug: "resume-chef",
    title: "Chef Resume Template",
    description: "Free professional chef resume template for culinary leaders highlighting menu creation, kitchen management, and measurable cost and quality results.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Chef Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "EXECUTIVE CHEF", footer: "Portfolio and references available on request" },
      styles: { primaryColor: "#be123c", secondaryColor: "#881337" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Designed seasonal menus that lifted average check size 22% over two years." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reduced food costs 18% by renegotiating supplier contracts and tightening portion control." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led a 15-person brigade through 300-cover dinner services with consistent 4.7-star reviews." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Standardized 60 recipes and prep sheets, cutting new-hire ramp time in half." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained a 98% health inspection score across three consecutive audits." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launched a farm-to-table special that became a top-selling weekly feature." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Menu development, plating, and recipe costing" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Kitchen management, inventory, and food safety (HACCP)" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Staff training, scheduling, and high-volume service" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "ServSafe Manager Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-flight-attendant",
    slug: "resume-flight-attendant",
    title: "Flight Attendant Resume Template",
    description: "Free flight attendant resume template for cabin crew highlighting safety training, customer service excellence, and multilingual passenger care skills.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Flight Attendant Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "FLIGHT ATTENDANT", footer: "References available on request" },
      styles: { primaryColor: "#1d4ed8", secondaryColor: "#1e3a8a" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered safe, attentive service on 500+ domestic and international flights." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Earned a 95% passenger satisfaction score across quarterly onboard surveys." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed two in-flight medical events calmly, coordinating with the flight deck and ground crews." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mentored 12 new cabin crew on safety demonstrations and service standards." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Resolved passenger conflicts and rebooking issues while maintaining on-time departures." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Assisted non-English-speaking travelers in three languages, improving accessibility." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Emergency procedures, first aid, and CPR" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Customer service, conflict resolution, and cultural sensitivity" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Multilingual communication and cabin safety compliance" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "FAA Certificate of Demonstrated Proficiency" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Aviation First Aid and CPR Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-dental-hygienist",
    slug: "resume-dental-hygienist",
    title: "Dental Hygienist Resume Template",
    description: "Free dental hygienist resume template for licensed clinicians highlighting patient care, preventive treatments, and radiography and charting expertise.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Dental Hygienist Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "REGISTERED DENTAL HYGIENIST", footer: "License and references available on request" },
      styles: { primaryColor: "#0e7490", secondaryColor: "#155e75" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Performed 20+ cleanings and periodontal treatments daily with consistent patient satisfaction." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Boosted six-month recall attendance 25% through patient education and follow-up." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Captured and charted digital radiographs, reducing retakes by 15%." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Screened patients for oral cancer and periodontal disease, flagging 30+ early cases." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Streamlined sterilization workflow, keeping the practice fully OSHA compliant." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trained two hygiene assistants on charting and infection control protocols." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scaling, root planing, and preventive care" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Digital radiography, periodontal charting, and patient education" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Infection control, OSHA compliance, and dental software (Dentrix)" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Registered Dental Hygienist (RDH) License" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Local Anesthesia and Nitrous Oxide Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-attorney",
    slug: "resume-attorney",
    title: "Attorney Resume Template",
    description: "Free attorney resume template for lawyers highlighting litigation wins, contract negotiation, and client advocacy with quantifiable case results.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Attorney Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "ATTORNEY AT LAW", footer: "Bar admission and references available on request" },
      styles: { primaryColor: "#1e293b", secondaryColor: "#0f172a" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Won 85% of litigated cases across 40+ civil and commercial matters." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Negotiated settlements that saved clients over $5M in potential damages." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Drafted and reviewed 200+ contracts with a sub-2% dispute rate." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed a caseload of 30 active matters while meeting every filing deadline." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Conducted depositions and legal research that shaped winning trial strategies." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Supervised two junior associates and a team of paralegals." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Litigation, trial advocacy, and legal writing" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Contract negotiation, due diligence, and compliance" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Legal research, case management, and client counseling" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Admitted to the State Bar" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-real-estate-agent",
    slug: "resume-real-estate-agent",
    title: "Real Estate Agent Resume Template",
    description: "Free real estate agent resume template for realtors highlighting sales volume, client relationships, and negotiation and marketing achievements.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Real Estate Agent Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "REAL ESTATE AGENT", footer: "References available on request" },
      styles: { primaryColor: "#047857", secondaryColor: "#065f46" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Closed $18M in residential sales across 45 transactions in a single year." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Grew repeat and referral business to 60% of pipeline through client follow-up." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Sold listings an average of 12 days faster than the local market benchmark." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launched targeted social and email campaigns that tripled qualified buyer leads." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Negotiated offers to secure sellers an average 98% of list price." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Guided 30+ first-time buyers through financing, inspection, and closing." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Buyer and seller representation, negotiation, and closing" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Listing marketing, CRM management, and lead generation" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Market analysis, staging strategy, and contract preparation" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "State Real Estate Salesperson License" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-qa-engineer",
    slug: "resume-qa-engineer",
    title: "QA Engineer Resume Template",
    description: "Free, ATS-friendly QA engineer resume template for software testers highlighting automation, test coverage, and defect-reduction impact.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "QA Engineer Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "QA ENGINEER", footer: "References available on request" },
      styles: { primaryColor: "#6d28d9", secondaryColor: "#4c1d95" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built a Selenium and Cypress automation suite that cut regression time 70%." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Raised automated test coverage from 45% to 88% across core services." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Caught 120+ critical defects pre-release, reducing production bugs 35%." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Integrated automated tests into CI/CD, enabling daily releases." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Authored 300+ test cases and reusable API test collections in Postman." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Partnered with developers to shift testing left, halving defect turnaround." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Selenium, Cypress, Playwright, and Postman" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Manual and automated testing, API testing, and CI/CD" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Test planning, defect tracking (Jira), and Agile QA" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "ISTQB Certified Tester, Foundation Level" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-scrum-master",
    slug: "resume-scrum-master",
    title: "Scrum Master Resume Template",
    description: "Free Scrum Master resume template for Agile leaders highlighting sprint delivery, team coaching, and measurable velocity and process improvements.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Scrum Master Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "SCRUM MASTER", footer: "References available on request" },
      styles: { primaryColor: "#c2410c", secondaryColor: "#9a3412" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Coached three Agile teams, lifting sprint velocity 40% over four quarters." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cut cycle time 30% by removing recurring blockers and tightening WIP limits." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Improved on-time sprint commitment from 65% to 92%." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Facilitated all Scrum ceremonies for a 9-person cross-functional team." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Introduced retrospective action tracking that resolved 90% of raised issues." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Coordinated with product owners to refine and prioritize a 200-item backlog." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scrum, Kanban, and SAFe frameworks" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Sprint planning, facilitation, and impediment removal" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Jira, backlog refinement, and stakeholder communication" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Certified ScrumMaster (CSM)" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "SAFe Agilist Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-machine-learning-engineer",
    slug: "resume-machine-learning-engineer",
    title: "Machine Learning Engineer Resume Template",
    description: "Free, ATS-friendly machine learning engineer resume template highlighting model deployment, MLOps pipelines, and measurable business impact.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Machine Learning Engineer Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "MACHINE LEARNING ENGINEER", footer: "Portfolio and references available on request" },
      styles: { primaryColor: "#0891b2", secondaryColor: "#164e63" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Deployed a recommendation model that lifted conversion 18% in production." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built MLOps pipelines that cut model retraining time from days to hours." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reduced inference latency 45% by optimizing and quantizing served models." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trained and evaluated NLP models reaching 92% classification accuracy." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Established model monitoring that flagged drift and prevented two outages." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Partnered with data engineers to build a feature store serving 10M+ records daily." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Python, PyTorch, TensorFlow, and scikit-learn" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "MLOps, Docker, Kubernetes, and model serving" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Feature engineering, NLP, and cloud ML (AWS SageMaker)" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "AWS Certified Machine Learning – Specialty" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-physical-therapist",
    slug: "resume-physical-therapist",
    title: "Physical Therapist Resume Template",
    description: "Free physical therapist resume template for licensed clinicians highlighting patient rehabilitation, treatment planning, and measurable recovery outcomes.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Physical Therapist Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "PHYSICAL THERAPIST", footer: "License and references available on request" },
      styles: { primaryColor: "#15803d", secondaryColor: "#14532d" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Treated 15+ patients daily, achieving a 90% goal-attainment rate on care plans." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Designed post-surgical rehab programs that cut average recovery time 20%." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reduced patient no-shows 25% through education and home-exercise plans." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Assessed mobility and strength for 300+ orthopedic and neurological patients." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Supervised two PT assistants and coordinated care with referring physicians." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Documented treatment progress in EMR while maintaining full compliance." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Manual therapy, therapeutic exercise, and gait training" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Orthopedic and neurological rehabilitation" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Patient assessment, treatment planning, and EMR documentation" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Licensed Physical Therapist (DPT)" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CPR and Basic Life Support Certification" }] }] }
        ] }
      ] }
    }
  }
];
