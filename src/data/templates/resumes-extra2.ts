export const resumesExtra2Templates: any[] = [
  {
    id: "resume-truck-driver",
    slug: "resume-truck-driver",
    title: "Truck Driver Resume Template",
    description: "Free, ATS-friendly truck driver resume template for CDL professionals highlighting safe mileage, on-time delivery rates, and clean driving records.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Truck Driver Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "CDL TRUCK DRIVER", footer: "Clean MVR and references available on request" },
      styles: { primaryColor: "#0f766e", secondaryColor: "#134e4a" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Logged 250,000+ accident-free miles across 48 states with a 99% on-time delivery rate." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cut fuel costs 12% by optimizing routes and maintaining steady, efficient driving habits." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Completed 100% of pre-trip inspections and DOT logs with zero compliance violations." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Hauled temperature-sensitive freight on tight 48-hour cross-country runs without spoilage." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trained 5 new drivers on backing, coupling, and electronic logging device procedures." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained a spotless 4-year safety record with zero preventable incidents." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Class A CDL, long-haul and regional routes, flatbed and reefer hauling" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "DOT compliance, ELD logging, pre-trip and post-trip inspections" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Route planning, load securement, defensive driving" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Class A Commercial Driver's License (CDL) with Hazmat and Tanker endorsements" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Smith System Defensive Driving Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-social-worker",
    slug: "resume-social-worker",
    title: "Social Worker Resume Template",
    description: "Free social worker resume template for licensed professionals highlighting case management, client advocacy, and measurable community outcomes and support results.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Social Worker Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "LICENSED SOCIAL WORKER", footer: "License number and references available on request" },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#5b21b6" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed a caseload of 45 clients, connecting 90% to stable housing and support services within 60 days." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Developed individualized care plans that reduced repeat crisis interventions by 35%." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Coordinated with 12 community agencies to expand access to mental health and food resources." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Conducted 200+ intake assessments and risk screenings with thorough, timely documentation." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Facilitated weekly support groups that improved participant follow-through by 40%." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Advocated in court and IEP meetings, securing services for 30+ at-risk families." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Case management, crisis intervention, and trauma-informed care" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Client advocacy, resource coordination, and motivational interviewing" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Confidential documentation, HIPAA compliance, and interdisciplinary collaboration" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Licensed Clinical Social Worker (LCSW)" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-dentist",
    slug: "resume-dentist",
    title: "Dentist Resume Template",
    description: "Free dentist resume template for licensed DDS and DMD professionals highlighting clinical expertise, patient care outcomes, and modern practice management skills.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Dentist Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "DOCTOR OF DENTAL SURGERY", footer: "License and references available on request" },
      styles: { primaryColor: "#0891b2", secondaryColor: "#155e75" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Performed 3,000+ restorative and cosmetic procedures with a 98% patient satisfaction rating." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Grew the practice's recall retention 25% by launching a preventive-care follow-up program." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Introduced digital intraoral scanning that cut crown turnaround time from 2 weeks to 3 days." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Diagnosed and treated a diverse patient base of 20+ daily appointments across all age groups." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mentored 4 dental hygienists and assistants on chairside protocols and infection control." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained a 100% compliance record across OSHA and state board inspections." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Restorative dentistry, endodontics, and cosmetic procedures" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Digital radiography, intraoral scanning, and treatment planning" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Patient education, practice management, and infection control" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "State Dental License (DDS/DMD)" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CPR and Basic Life Support (BLS) Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-bank-teller",
    slug: "resume-bank-teller",
    title: "Bank Teller Resume Template",
    description: "Free bank teller resume template for cash-handling professionals highlighting accuracy, customer service, cross-selling results, and strong compliance and integrity.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Bank Teller Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "BANK TELLER", footer: "References available on request" },
      styles: { primaryColor: "#166534", secondaryColor: "#14532d" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Processed 150+ daily transactions with a 99.9% balancing accuracy over three years." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Referred 200+ qualified customers to loan and account products, exceeding cross-sell goals by 30%." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Identified and flagged 3 fraudulent transactions, preventing an estimated $12,000 in losses." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained a personal cash drawer with zero shortages across 18 consecutive months." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Resolved customer inquiries with a 96% satisfaction score on branch feedback surveys." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trained 4 new tellers on transaction procedures and BSA/AML compliance." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cash handling, transaction processing, and drawer balancing" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Customer service, product cross-selling, and account servicing" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Fraud detection, BSA/AML compliance, and banking software" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bank Secrecy Act (BSA) and Anti-Money Laundering (AML) Training" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-warehouse-associate",
    slug: "resume-warehouse-associate",
    title: "Warehouse Associate Resume Template",
    description: "Free warehouse associate resume template for logistics workers highlighting order accuracy, forklift certification, safety records, and fast fulfillment productivity.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Warehouse Associate Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "WAREHOUSE ASSOCIATE", footer: "References available on request" },
      styles: { primaryColor: "#c2410c", secondaryColor: "#7c2d12" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Picked and packed 400+ orders per shift at a 99.8% accuracy rate, exceeding team targets by 20%." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Operated forklifts and pallet jacks to move 500+ pallets weekly with zero safety incidents." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reduced inventory discrepancies 30% by improving cycle-count and labeling procedures." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Loaded and unloaded 30+ trucks daily while meeting tight dock-to-stock deadlines." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained a spotless 2-year safety record by enforcing proper lifting and PPE practices." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trained 6 seasonal hires on RF scanners and warehouse management system workflows." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Order picking, packing, shipping, and receiving" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Forklift and pallet jack operation, inventory control, RF scanning" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Warehouse safety, OSHA standards, and WMS software" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "OSHA Forklift Operator Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-receptionist",
    slug: "resume-receptionist",
    title: "Receptionist Resume Template",
    description: "Free receptionist resume template for front-desk professionals highlighting scheduling, multi-line phone handling, customer service, and organized office administration skills.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Receptionist Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "FRONT DESK RECEPTIONIST", footer: "References available on request" },
      styles: { primaryColor: "#db2777", secondaryColor: "#9d174d" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Greeted 100+ daily visitors and managed a 6-line phone system with a 98% call-routing accuracy." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Coordinated 60+ weekly appointments, cutting scheduling conflicts by 40% through a shared calendar." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Streamlined mail and courier handling, reducing document turnaround from 2 days to same-day." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained office supply inventory and cut ordering costs 15% by consolidating vendors." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Achieved a 97% visitor satisfaction score through warm, professional front-desk service." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Supported 5 executives with travel booking, expense reports, and meeting preparation." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Front-desk reception, multi-line phone handling, and visitor management" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Calendar scheduling, data entry, and office administration" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Microsoft Office, customer service, and confidential recordkeeping" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Microsoft Office Specialist (MOS) Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-video-editor",
    slug: "resume-video-editor",
    title: "Video Editor Resume Template",
    description: "Free video editor resume template for post-production creatives highlighting storytelling, editing software mastery, engagement metrics, and high-volume content delivery.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Video Editor Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "VIDEO EDITOR", footer: "Portfolio and reel available on request" },
      styles: { primaryColor: "#e11d48", secondaryColor: "#9f1239" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Edited 300+ short-form videos that grew channel watch time 45% and subscribers by 120K." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cut turnaround time 30% by building reusable templates and streamlining the review workflow." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Produced a branded campaign that reached 2M+ views and lifted click-through rate by 18%." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered 50+ client projects on deadline with a 4.9-star average satisfaction rating." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Designed motion graphics and color grades that elevated production value across all deliverables." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mentored 2 junior editors on pacing, sound design, and export optimization." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Adobe Premiere Pro, After Effects, and DaVinci Resolve" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Storytelling, pacing, color grading, and motion graphics" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Sound design, audio mixing, and multi-platform content delivery" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Adobe Certified Professional in Digital Video (Premiere Pro)" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-network-administrator",
    slug: "resume-network-administrator",
    title: "Network Administrator Resume Template",
    description: "Free network administrator resume template for IT professionals highlighting network uptime, infrastructure security, troubleshooting, and measurable system reliability improvements.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Network Administrator Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "NETWORK ADMINISTRATOR", footer: "References and certifications available on request" },
      styles: { primaryColor: "#2563eb", secondaryColor: "#1e40af" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained 99.99% network uptime across 500+ endpoints and 12 branch sites." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cut incident resolution time 40% by deploying centralized monitoring and automated alerts." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Hardened the network against threats, reducing security incidents by 60% year over year." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Migrated on-premise infrastructure to a hybrid cloud, cutting hardware costs 25%." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Configured and managed 40+ switches, routers, and firewalls across the enterprise WAN." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Documented network topology and DR procedures, improving audit readiness to 100%." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "LAN/WAN, TCP/IP, VLANs, routing, and switching" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Firewalls, VPNs, network security, and monitoring tools" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cisco, Windows Server, Active Directory, and cloud networking" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cisco Certified Network Associate (CCNA)" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CompTIA Network+ Certification" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-paralegal",
    slug: "resume-paralegal",
    title: "Paralegal Resume Template",
    description: "Free paralegal resume template for legal support professionals highlighting case research, document drafting, litigation support, and strong deadline-driven organization.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Paralegal Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "PARALEGAL", footer: "References available on request" },
      styles: { primaryColor: "#1e3a8a", secondaryColor: "#172554" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Drafted and filed 400+ pleadings, motions, and discovery documents with zero missed deadlines." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cut document review time 35% by organizing case files in an eDiscovery platform." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Supported attorneys through 25+ trials, preparing exhibits and witness binders on tight timelines." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Conducted legal research on 100+ matters, summarizing case law into concise attorney memos." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed a caseload of 60+ active files while maintaining meticulous billing records." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Coordinated with courts and clients, improving filing accuracy to 100% across all jurisdictions." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Legal research, document drafting, and case management" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "eDiscovery, Westlaw, LexisNexis, and court e-filing systems" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Litigation support, trial preparation, and confidential recordkeeping" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Certified Paralegal (CP) — NALA" }] }] }
        ] }
      ] }
    }
  },
  {
    id: "resume-recruiter",
    slug: "resume-recruiter",
    title: "Recruiter Resume Template",
    description: "Free recruiter resume template for talent acquisition professionals highlighting time-to-fill, quality hires, sourcing strategy, and strong candidate pipeline results.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes",
    content: {
      title: "Recruiter Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "summary", "jobTitle1", "company1", "role1dates", "jobTitle2", "company2", "role2dates", "degree", "school"],
      layout: { header: "TALENT ACQUISITION RECRUITER", footer: "References available on request" },
      styles: { primaryColor: "#0d9488", secondaryColor: "#115e59" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle1}} — {{company1}} " }, { type: "text", text: "({{role1dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Filled 120+ roles annually, cutting average time-to-fill from 45 to 28 days." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built a passive-candidate pipeline that raised offer-acceptance rate to 92%." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Improved 90-day new-hire retention 25% by refining screening and structured interviews." }] }] }
        ] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{jobTitle2}} — {{company2}} " }, { type: "text", text: "({{role2dates}})" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Sourced and screened 3,000+ candidates across technical and non-technical requisitions." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Partnered with 15 hiring managers to define role scorecards and streamline the interview loop." }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launched an employee-referral program that generated 30% of all quality hires." }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Full-cycle recruiting, sourcing, and candidate screening" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Applicant tracking systems (ATS), LinkedIn Recruiter, and Boolean search" }] }] },
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Interview coordination, offer negotiation, and stakeholder management" }] }] }
        ] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}} — {{school}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "bulletList", content: [
          { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "LinkedIn Certified Professional Recruiter" }] }] }
        ] }
      ] }
    }
  }
];
