// Enriched, per-profession resume template documents.
// Structural fields (id, slug, title, description, isPremium, categorySlug,
// categoryName, content.title, content.layout, content.styles) are preserved
// exactly from templates-fallback.ts. Only content.fields and
// content.editorState.content are rewritten to be rich and unique per role.

export const resumesTemplates = [
  {
    id: "resume-software-engineer",
    slug: "resume-software-engineer",
    title: "Software Engineer Resume Template",
    description: "ATS-friendly developer resume layout highlighting technical skills, languages, software projects, and work history.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Software Engineer Resume Template",
      fields: ["fullName", "jobTitle", "email", "phone", "location", "linkedin", "github", "portfolio", "careerSummary", "programmingLanguages", "frameworks", "databases", "cloudPlatforms", "devOpsTools", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "SOFTWARE ENGINEER CURRICULUM VITAE",
        footer: "References available upon request."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#1e293b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} · {{email}} · {{phone}} · {{location}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "LinkedIn: {{linkedin}} · GitHub: {{github}} · Portfolio: {{portfolio}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{careerSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Software Engineer " }, { type: "text", text: "— Acme Global Inc. (2022–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Architected a microservices platform on Next.js and Node.js serving 2M monthly active users at 99.98% uptime." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cut API response latency by 40% by introducing Redis caching and query-level Postgres index tuning." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mentored a squad of 4 engineers and drove adoption of trunk-based development with CI gating." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Full-Stack Developer " }, { type: "text", text: "— TechVentures Corp. (2019–2022)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Shipped a React and TypeScript design system consumed by 6 product teams across the company." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built automated GitHub Actions pipelines that reduced release cycle time from days to under an hour." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Languages: {{programmingLanguages}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Frameworks: {{frameworks}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Databases: {{databases}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud & DevOps: {{cloudPlatforms}} · {{devOpsTools}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-data-analyst",
    slug: "resume-data-analyst",
    title: "Data Analyst Resume Template",
    description: "Data professional resume highlighting SQL, Python, metrics visualization, and database query experience.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Data Analyst Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "sqlSkills", "excelSkills", "powerBi", "tableau", "dataVisualization", "analyticsProjects", "certificationName", "organization", "year", "degree", "university", "graduationYear"],
      layout: {
        header: "DATA ANALYST PORTFOLIO",
        footer: "Additional certifications shared upon request."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Data Analyst · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Data Analyst " }, { type: "text", text: "— DataCorp Systems (2021–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built a churn cohort model in SQL and Python that flagged at-risk accounts and lifted retention by 12%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Designed executive Power BI dashboards with DAX measures adopted by the C-suite for weekly reviews." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Automated a 6-hour manual reporting process into a scheduled pipeline that runs in under 5 minutes." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Business Intelligence Analyst " }, { type: "text", text: "— Retail Insights Group (2018–2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered a sales forecasting model in Tableau that improved inventory accuracy by 18% across 40 stores." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Optimized slow warehouse queries using CTEs and window functions, cutting run time by 60%." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "SQL: {{sqlSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Spreadsheets: {{excelSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "BI Tools: Power BI ({{powerBi}}), Tableau ({{tableau}})" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Visualization: {{dataVisualization}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Featured Projects" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{analyticsProjects}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-project-manager",
    slug: "resume-project-manager",
    title: "Project Manager Resume Template",
    description: "Structured resume layout showing project scope, agile methodologies, and scrum certifications.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Project Manager Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "leadershipSkills", "pmMethodologies", "pmTools", "projectPortfolio", "pmpCertified", "scrumCertified", "degree", "university", "graduationYear"],
      layout: {
        header: "PROJECT MANAGER PROFILE",
        footer: "PMP Certified. Agile Methodology Expert."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#0f172a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Manager, PMP · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Project Manager " }, { type: "text", text: "— GlobalTech Industries (2021–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered a $2M digital transformation program 3 weeks ahead of schedule and 8% under budget." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Coordinated 5 cross-functional teams across 3 time zones using Scrum ceremonies and clear RACI ownership." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reduced sprint scope creep by 30% through disciplined backlog grooming and stakeholder alignment." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Project Coordinator " }, { type: "text", text: "— Rivera Strategy Group (2017–2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed project budgets and risk registers for a portfolio of 12 concurrent client engagements." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Standardized status reporting in Jira and Confluence, improving on-time milestone delivery to 94%." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Competencies" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Leadership: {{leadershipSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Methodologies: {{pmMethodologies}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tools: {{pmTools}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Selected Portfolio" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{projectPortfolio}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications & Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{pmpCertified}} · {{scrumCertified}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] }
        ]
      }
    }
  },
  {
    id: "resume-graphic-designer",
    slug: "resume-graphic-designer",
    title: "Graphic Designer Resume Template",
    description: "Creative resume layout highlighting branding, illustration, UI design, and visual art portfolios.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Graphic Designer Resume Template",
      fields: ["fullName", "email", "phone", "portfolio", "behanceProfile", "dribbbleProfile", "summary", "adobeCreativeSuite", "figma", "brandingExperience", "behanceLink", "awardsAchievements", "degree", "university", "graduationYear"],
      layout: {
        header: "CREATIVE RESUME",
        footer: "View full online design portfolio at personal website."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#4d0728"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Graphic Designer · {{email}} · {{phone}} · {{portfolio}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Behance: {{behanceProfile}} · Dribbble: {{dribbbleProfile}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Graphic Designer " }, { type: "text", text: "— Morgan Creative Studio (2021–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led rebrands for 20+ clients, delivering logo systems, color palettes, and full brand style guides." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Designed marketing collateral and social campaigns that grew client engagement by an average of 45%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built a reusable Figma component library and auto-layout system that halved design turnaround time." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Visual Designer " }, { type: "text", text: "— Apex Marketing Group (2018–2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Produced print and digital assets for product launches across web, email, and out-of-home." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Illustrated custom iconography and editorial art that became the studio's signature visual style." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Design Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Adobe Creative Suite: {{adobeCreativeSuite}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "UI/UX: {{figma}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Branding: {{brandingExperience}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Awards & Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{awardsAchievements}} · Featured case study: {{behanceLink}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] }
        ]
      }
    }
  },
  {
    id: "resume-registered-nurse",
    slug: "resume-registered-nurse",
    title: "Registered Nurse Resume Template",
    description: "Clinical resume format highlighting nurse licensing, emergency care, and patient advocacy.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Registered Nurse Resume Template",
      fields: ["fullName", "email", "phone", "summary", "nursingLicenseNumber", "medicalCertifications", "clinicalSkills", "patientCareExperience", "degree", "university", "graduationYear", "languagesKnown", "awardsAchievements"],
      layout: {
        header: "CLINICAL NURSE CV",
        footer: "Registered Nurse (RN) License in good standing."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#064e3b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Registered Nurse · {{email}} · {{phone}} · License #: {{nursingLicenseNumber}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Charge Nurse, Emergency Department " }, { type: "text", text: "— Stanford Health Care (2020–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Triaged and stabilized high-acuity patients in a 45-bed Level I trauma ED averaging 200 visits per shift." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led a bedside handoff protocol that reduced medication reconciliation errors by 22% unit-wide." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Precepted 8 new-graduate nurses through orientation while maintaining a 98% patient-satisfaction score." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Staff Nurse, Medical-Surgical Unit " }, { type: "text", text: "— Riverside Medical Clinic (2016–2020)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed post-operative care, IV therapy, and wound management for a rotating caseload of 6 patients." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Championed a fall-prevention initiative that lowered unit fall rates by 35% over two quarters." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Skills & Certifications" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Certifications: {{medicalCertifications}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Clinical: {{clinicalSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Patient care: {{patientCareExperience}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Recognition" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}}) · Languages: {{languagesKnown}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Recognition: {{awardsAchievements}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-teacher",
    slug: "resume-teacher",
    title: "Teacher Resume Template",
    description: "Academic educator resume template focusing on lesson plans, student guidance, and classroom management.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Teacher Resume Template",
      fields: ["fullName", "email", "phone", "summary", "teachingSubjects", "gradeLevels", "classroomManagementSkills", "certificationName", "organization", "year", "degree", "university", "graduationYear", "workshopsAttended", "languagesKnown"],
      layout: {
        header: "EDUCATOR PROFILE",
        footer: "State Certified Educator. References available."
      },
      styles: {
        primaryColor: "#d97706",
        secondaryColor: "#451a03"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Certified Educator · {{email}} · {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Teaching Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Mathematics Teacher " }, { type: "text", text: "— Lincoln High School (2019–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Raised AP Calculus pass rates from 71% to 92% through targeted small-group instruction and data tracking." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Designed a project-based STEM curriculum adopted department-wide across grades 9 through 12." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ran weekly parent-engagement conferences and restorative-discipline routines that cut referrals by 40%." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Substitute & Student Teacher " }, { type: "text", text: "— Springfield Unified District (2016–2019)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered differentiated lesson plans across mixed-ability classrooms of up to 34 students." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Integrated interactive whiteboard tools and formative assessments to lift student participation." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Instructional Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Subjects: {{teachingSubjects}} · Grade levels: {{gradeLevels}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Classroom management: {{classroomManagementSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional development: {{workshopsAttended}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certification" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}}) · Languages: {{languagesKnown}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-marketing-manager",
    slug: "resume-marketing-manager",
    title: "Marketing Manager Resume Template",
    description: "Metrics-focused marketing resume showing ROI performance, SEO growth, and digital ads campaigns.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Marketing Manager Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "marketingSkills", "seoSkills", "googleAds", "metaAds", "emailMarketing", "campaignExperience", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "MARKETING PROFESSIONAL CV",
        footer: "ROI metrics documented in online campaign case studies."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#2e1065"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Marketing Manager · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Marketing Manager " }, { type: "text", text: "— Apex Digital Agency (2021–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led a Q4 product-launch campaign that delivered a 320% ROI increase on a $180K media budget." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Grew organic search traffic 140% year-over-year through a technical SEO and content overhaul." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed a 6-person team spanning paid media, lifecycle email, and brand content." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Growth Marketing Specialist " }, { type: "text", text: "— GrowthHive Marketing (2017–2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scaled Google and Meta Ads accounts to $2M annual spend while improving blended CAC by 28%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built automated Klaviyo journeys and A/B testing programs that lifted email revenue by 60%." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Strategy: {{marketingSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "SEO/SEM: {{seoSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid media: Google Ads ({{googleAds}}), Meta Ads ({{metaAds}})" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Lifecycle: {{emailMarketing}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signature Campaign" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{campaignExperience}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}}) · {{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-customer-service",
    slug: "resume-customer-service",
    title: "Customer Service Resume Template",
    description: "Support roles resume template highlighting ticketing software, SLAs, and customer retention metrics.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Customer Service Resume Template",
      fields: ["fullName", "email", "phone", "summary", "customerSupportSkills", "crmSoftware", "communicationSkills", "problemSolving", "degree", "university", "graduationYear", "languagesKnown"],
      layout: {
        header: "CUSTOMER SUPPORT SPECIALIST",
        footer: "Available for shifts. Bilingual support agent."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#1e1b4b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Customer Support Specialist · {{email}} · {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Support Specialist " }, { type: "text", text: "— CloudNine SaaS (2021–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Resolved 60+ daily tickets across live chat, phone, and email while holding a 97% CSAT rating." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cut average first-response time from 4 hours to 35 minutes by rebuilding Zendesk macros and routing." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Authored a self-service help-center library that deflected 20% of inbound support volume." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Customer Service Representative " }, { type: "text", text: "— Downtown General Store (2017–2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Handled escalations and returns with de-escalation techniques that preserved 85% of at-risk accounts." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Trained 10 seasonal hires on CRM workflows, tone, and SLA compliance." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Support: {{customerSupportSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CRM & helpdesk: {{crmSoftware}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Communication: {{communicationSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Problem solving: {{problemSolving}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Languages" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}}) · Languages: {{languagesKnown}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-accountant",
    slug: "resume-accountant",
    title: "Accountant Resume Template",
    description: "Finance resume layout detailing corporate taxes, audits, general ledgers, and accounting programs.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Accountant Resume Template",
      fields: ["fullName", "email", "phone", "summary", "accountingSoftware", "bookkeeping", "taxPreparation", "financialReporting", "payroll", "cpaCertified", "otherCertifications", "degree", "university", "graduationYear"],
      layout: {
        header: "ACCOUNTING & FINANCE PROFILE",
        footer: "CPA Candidate. Audit Ready."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Accountant, CPA · {{email}} · {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Accountant " }, { type: "text", text: "— Smith & Associates LLC (2020–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Owned month-end close for a $40M revenue portfolio, shortening the close cycle from 10 days to 5." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prepared corporate and quarterly tax filings with zero penalties across four consecutive fiscal years." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led a clean external audit and implemented internal controls that flagged $120K in duplicate payments." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Staff Accountant " }, { type: "text", text: "— Rivera Strategy Group (2016–2020)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed accounts payable, receivable, and bank reconciliations for 30+ business clients." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Migrated bookkeeping from spreadsheets to QuickBooks Online, cutting data-entry errors by 45%." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Software: {{accountingSoftware}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bookkeeping: {{bookkeeping}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tax: {{taxPreparation}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reporting & payroll: {{financialReporting}} · {{payroll}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Credentials & Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cpaCertified}} · {{otherCertifications}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] }
        ]
      }
    }
  },
  {
    id: "resume-sales-representative",
    slug: "resume-sales-representative",
    title: "Sales Representative Resume Template",
    description: "Sales representative resume mapping CRM tracking, pipeline growth, and closing ratios.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Sales Representative Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "salesSkills", "crmTools", "leadGen", "negotiationSkills", "salesAchievements", "degree", "university", "graduationYear", "certificationName", "organization", "year", "languagesKnown"],
      layout: {
        header: "SALES PROFESSIONAL PROFILE",
        footer: "Consistent over-achiever in pipeline sales targets."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#431407"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sales Representative · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Account Executive " }, { type: "text", text: "— TechVentures Corp. (2021–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Exceeded annual quota by 142% in FY25, closing $3.4M in new B2B recurring revenue." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built and worked a self-sourced pipeline via LinkedIn Sales Navigator and targeted cold outreach." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Maintained a 34% win rate and average sales cycle 18% shorter than the team benchmark." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Sales Development Representative " }, { type: "text", text: "— GlobalTech Industries (2018–2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Booked 40+ qualified demos per month and consistently ranked top-3 in outbound conversion." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Kept a clean Salesforce pipeline with disciplined forecasting accuracy within 5% of actuals." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sales Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Selling: {{salesSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CRM: {{crmTools}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prospecting: {{leadGen}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Negotiation: {{negotiationSkills}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Achievements" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{salesAchievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}}) · {{certificationName}} — {{organization}}, {{year}} · Languages: {{languagesKnown}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-fresher-graduate",
    slug: "resume-fresher-graduate",
    title: "Fresher / Graduate Resume Template",
    description: "Entry-level resume template for fresh graduates and students with no experience, highlighting education, projects, and skills.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Fresher / Graduate Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "objective", "degree", "university", "graduationYear", "gpa", "programmingLanguages", "softSkills", "awardsAchievements"],
      layout: {
        header: "GRADUATE RESUME",
        footer: "References available upon request."
      },
      styles: {
        primaryColor: "#0891b2",
        secondaryColor: "#155e75"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Recent Graduate · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Career Objective" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{objective}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{degree}} " }, { type: "text", text: "— {{university}} ({{graduationYear}}), GPA {{gpa}}" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Relevant coursework: Data Structures, Databases, Web Development, and Software Engineering." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Dean's List for three consecutive semesters and active member of the campus coding club." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Academic Projects" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Campus Events Web App " }, { type: "text", text: "— Final-Year Capstone Project" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built a full-stack event platform with React and Node.js used by 500+ students during pilot." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Designed the PostgreSQL schema and REST API, and wrote unit tests achieving 80% coverage." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Personal Finance Tracker " }, { type: "text", text: "— Open-Source Side Project" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Published a budgeting app to GitHub that earned 120+ stars and 8 community contributors." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills & Achievements" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Technical: {{programmingLanguages}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Soft skills: {{softSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Awards: {{awardsAchievements}}" }] }] }
          ] }
        ]
      }
    }
  },
  {
    id: "resume-product-manager",
    slug: "resume-product-manager",
    title: "Product Manager Resume Template",
    description: "Results-driven resume template for product managers highlighting roadmaps, metrics, cross-functional leadership, and shipped products.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Product Manager Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "productSkills", "pmTools", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "PRODUCT MANAGER RESUME",
        footer: "Portfolio and references available on request."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#312e81"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Product Manager · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Product Manager " }, { type: "text", text: "— CloudNine SaaS (2021–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Owned the roadmap for a 3-product portfolio and grew activation-to-paid conversion by 27%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Shipped a self-serve onboarding flow that cut time-to-value from 9 days to under 24 hours." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ran continuous discovery with 40+ customer interviews per quarter to prioritize the backlog." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Associate Product Manager " }, { type: "text", text: "— Nova Software Agency (2018–2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launched a mobile checkout redesign that lifted conversion 15% and reduced cart abandonment." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Partnered with engineering and design to define OKRs and instrument analytics across features." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Product craft: {{productSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tools: {{pmTools}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-devops-engineer",
    slug: "resume-devops-engineer",
    title: "DevOps Engineer Resume Template",
    description: "Technical resume template for DevOps and cloud engineers featuring CI/CD, infrastructure-as-code, and automation achievements.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "DevOps Engineer Resume Template",
      fields: ["fullName", "email", "phone", "github", "summary", "cloudPlatforms", "devOpsTools", "programmingLanguages", "certifications", "degree", "university", "graduationYear"],
      layout: {
        header: "DEVOPS ENGINEER RESUME",
        footer: "GitHub and certifications available on request."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#134e4a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "DevOps Engineer · {{email}} · {{phone}} · GitHub: {{github}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior DevOps Engineer " }, { type: "text", text: "— CloudNine SaaS (2021–2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Migrated a monolith to Kubernetes on AWS EKS, improving deploy frequency from weekly to 30+ times a day." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Codified all infrastructure in Terraform, eliminating configuration drift across 4 environments." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built GitHub Actions CI/CD with automated rollback, cutting mean time to recovery by 65%." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Site Reliability Engineer " }, { type: "text", text: "— GlobalTech Industries (2017–2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Stood up Prometheus and Grafana observability that raised production uptime to 99.99%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Automated incident response runbooks and on-call tooling, reducing pages per week by 40%." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cloud: {{cloudPlatforms}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tooling: {{devOpsTools}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scripting: {{programmingLanguages}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications & Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certifications}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] }
        ]
      }
    }
  }
];
