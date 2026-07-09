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
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Software Engineer " }, { type: "text", text: "— Northwind Systems (2022–2026)" }] },
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
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Substitute & Student Teacher " }, { type: "text", text: "— Sunnyvale Unified School District (2016–2019)" }] },
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
        footer: "CPA Licensed. Audit Ready."
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
  },
  {
    id: "resume-ux-designer",
    slug: "resume-ux-designer",
    title: "UX Designer Resume Template",
    description: "User experience designer resume highlighting wireframing, usability testing, design systems, and product research portfolios.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "UX Designer Resume Template",
      fields: ["fullName", "email", "phone", "portfolio", "linkedin", "summary", "uxResearchSkills", "designTools", "prototypingSkills", "designSystems", "featuredCaseStudy", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "UX DESIGNER RESUME",
        footer: "Interactive case studies available in online portfolio."
      },
      styles: {
        primaryColor: "#9333ea",
        secondaryColor: "#3b0764"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "UX Designer · {{email}} · {{phone}} · Portfolio: {{portfolio}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior UX Designer " }, { type: "text", text: "— CloudNine SaaS (2021-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Redesigned the onboarding flow through 30+ moderated usability tests, lifting task-completion rate from 62% to 91%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built and maintained a Figma design system of 120+ components adopted across 4 product squads." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ran generative and evaluative research that reshaped the roadmap and cut support tickets by 24%." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Product Designer " }, { type: "text", text: "— Nova Software Agency (2018-2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered high-fidelity prototypes and interaction specs for a mobile checkout that raised conversion by 18%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Facilitated design-thinking workshops that aligned engineering, product, and marketing on a shared UX vision." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Design Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Research: {{uxResearchSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tools: {{designTools}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prototyping: {{prototypingSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Design systems: {{designSystems}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Featured Case Study" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{featuredCaseStudy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-financial-analyst",
    slug: "resume-financial-analyst",
    title: "Financial Analyst Resume Template",
    description: "Financial analyst resume highlighting valuation modeling, forecasting, variance analysis, and investment research experience.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Financial Analyst Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "financialModeling", "valuationSkills", "financialSoftware", "forecastingSkills", "keyDeal", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "FINANCIAL ANALYST RESUME",
        footer: "CFA Level II Candidate. Detailed models available on request."
      },
      styles: {
        primaryColor: "#1d4ed8",
        secondaryColor: "#172554"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Financial Analyst · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Financial Analyst " }, { type: "text", text: "— Meridian Capital Partners (2021-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built a 3-statement DCF model that supported a $45M acquisition and delivered a 22% projected IRR." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Owned the annual budget and rolling 12-month forecast for a $200M business unit, holding variance under 3%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Automated monthly board reporting in Excel and Power Query, saving 20 analyst hours each close." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Financial Analyst " }, { type: "text", text: "— GlobalTech Industries (2018-2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Performed variance and profitability analysis across 6 product lines to guide pricing decisions." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Modeled capital-expenditure scenarios that reallocated $8M toward higher-return initiatives." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Modeling: {{financialModeling}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Valuation: {{valuationSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Software: {{financialSoftware}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Forecasting: {{forecastingSkills}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Transaction" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyDeal}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-hr-manager",
    slug: "resume-hr-manager",
    title: "HR Manager Resume Template",
    description: "Human resources manager resume highlighting talent acquisition, employee relations, HRIS systems, and performance management.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "HR Manager Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "talentAcquisition", "employeeRelations", "hrSoftware", "compensationSkills", "hrInitiative", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "HR MANAGER RESUME",
        footer: "SHRM-CP Certified. People-first leadership."
      },
      styles: {
        primaryColor: "#be123c",
        secondaryColor: "#4c0519"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "HR Manager · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Human Resources Manager " }, { type: "text", text: "— Acme Global Inc. (2020-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scaled headcount from 120 to 340 employees while reducing time-to-hire from 52 days to 29 days." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launched an engagement and retention program that lifted annual retention by 15% company-wide." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Rolled out a new HRIS and performance-review cycle covering the full employee lifecycle." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "HR Generalist " }, { type: "text", text: "— Rivera Strategy Group (2016-2020)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Handled employee relations, investigations, and conflict resolution for a 200-person workforce." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Administered benefits, payroll coordination, and open enrollment with 100% compliance." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Competencies" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Talent acquisition: {{talentAcquisition}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Employee relations: {{employeeRelations}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "HR systems: {{hrSoftware}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Compensation & benefits: {{compensationSkills}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signature Initiative" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrInitiative}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-mechanical-engineer",
    slug: "resume-mechanical-engineer",
    title: "Mechanical Engineer Resume Template",
    description: "Mechanical engineer resume highlighting CAD design, FEA simulation, manufacturing processes, and product development experience.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Mechanical Engineer Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "cadSkills", "simulationSkills", "manufacturingSkills", "engineeringStandards", "keyProject", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "MECHANICAL ENGINEER RESUME",
        footer: "EIT Certified. Portfolio of CAD drawings available."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#422006"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Mechanical Engineer · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Mechanical Engineer " }, { type: "text", text: "— Apex Manufacturing Corp. (2020-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led the design of a hydraulic actuator assembly in SolidWorks that cut part count by 30% and unit cost by 18%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ran FEA and thermal simulations in ANSYS that eliminated 3 field-failure modes before tooling release." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Drove a DFM initiative with suppliers that shortened production lead time from 12 weeks to 7." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Design Engineer " }, { type: "text", text: "— GlobalTech Industries (2016-2020)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Produced GD&T-compliant drawings and tolerance stack-ups for high-volume consumer products." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built and tested prototypes on the shop floor, iterating designs from concept to first article." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CAD: {{cadSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Simulation: {{simulationSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Manufacturing: {{manufacturingSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Standards: {{engineeringStandards}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Flagship Project" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyProject}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-content-writer",
    slug: "resume-content-writer",
    title: "Content Writer Resume Template",
    description: "Content writer resume highlighting SEO copywriting, editorial strategy, CMS publishing, and portfolio of published articles.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Content Writer Resume Template",
      fields: ["fullName", "email", "phone", "portfolio", "linkedin", "summary", "writingSkills", "seoWritingSkills", "cmsTools", "contentTypes", "featuredByline", "degree", "university", "graduationYear"],
      layout: {
        header: "CONTENT WRITER RESUME",
        footer: "Full writing portfolio and published bylines available online."
      },
      styles: {
        primaryColor: "#0e7490",
        secondaryColor: "#164e63"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Content Writer · {{email}} · {{phone}} · Portfolio: {{portfolio}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Content Writer " }, { type: "text", text: "— GrowthHive Marketing (2021-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Wrote 300+ SEO articles that grew organic blog traffic 180% and earned 40 first-page keyword rankings." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Owned the editorial calendar and style guide across a 5-writer team, keeping a consistent brand voice." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Turned long-form guides into email and social series that added 12,000 newsletter subscribers." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Copywriter " }, { type: "text", text: "— Apex Digital Agency (2018-2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Produced landing-page and ad copy that improved conversion rates by up to 35% in A/B tests." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Interviewed subject-matter experts to ghostwrite thought-leadership pieces for client executives." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Writing Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Writing craft: {{writingSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "SEO: {{seoWritingSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "CMS & tools: {{cmsTools}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Formats: {{contentTypes}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Featured Byline" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{featuredByline}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] }
        ]
      }
    }
  },
  {
    id: "resume-business-analyst",
    slug: "resume-business-analyst",
    title: "Business Analyst Resume Template",
    description: "Business analyst resume highlighting requirements gathering, process mapping, stakeholder management, and data-driven decision support.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Business Analyst Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "analysisSkills", "requirementsSkills", "baTools", "processModeling", "keyEngagement", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "BUSINESS ANALYST RESUME",
        footer: "CBAP Certified. Requirements documentation available on request."
      },
      styles: {
        primaryColor: "#3730a3",
        secondaryColor: "#1e1b4b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Business Analyst · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Business Analyst " }, { type: "text", text: "— GlobalTech Industries (2021-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Elicited and documented 200+ requirements for an ERP rollout, cutting post-launch change requests by 40%." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mapped current- and future-state processes in BPMN that surfaced $600K in annual efficiency savings." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Bridged business and engineering as product owner proxy, grooming a backlog across 3 Agile teams." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Business Analyst " }, { type: "text", text: "— Rivera Strategy Group (2017-2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Authored user stories, acceptance criteria, and UAT test cases for a customer-portal redesign." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built SQL and Tableau reports that gave leadership real-time visibility into KPIs across regions." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Analysis: {{analysisSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Requirements: {{requirementsSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tools: {{baTools}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Process modeling: {{processModeling}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Engagement" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyEngagement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-executive-assistant",
    slug: "resume-executive-assistant",
    title: "Executive Assistant Resume Template",
    description: "Executive assistant resume highlighting calendar management, travel coordination, board support, and confidential communications.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Executive Assistant Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "administrativeSkills", "schedulingSkills", "officeSoftware", "communicationSkills", "keyContribution", "degree", "university", "graduationYear", "languagesKnown"],
      layout: {
        header: "EXECUTIVE ASSISTANT RESUME",
        footer: "Trusted with confidential executive and board communications."
      },
      styles: {
        primaryColor: "#9d174d",
        secondaryColor: "#500724"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Executive Assistant · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Executive Assistant to the CEO " }, { type: "text", text: "— Acme Global Inc. (2020-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed a complex calendar of 40+ weekly meetings across 5 time zones with zero double-bookings." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Coordinated international travel, expense reports, and board-meeting logistics for a 9-member executive team." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Drafted confidential correspondence and prepared board decks that saved the CEO 10+ hours weekly." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Administrative Coordinator " }, { type: "text", text: "— Rivera Strategy Group (2016-2020)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ran front-office operations and vendor relationships for a 120-person office." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Organized company events and offsites for up to 150 attendees, consistently under budget." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Administration: {{administrativeSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scheduling: {{schedulingSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Software: {{officeSoftware}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Communication: {{communicationSkills}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Contribution" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyContribution}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Languages" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}}) · Languages: {{languagesKnown}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-cybersecurity-analyst",
    slug: "resume-cybersecurity-analyst",
    title: "Cybersecurity Analyst Resume Template",
    description: "Cybersecurity analyst resume highlighting threat detection, incident response, SIEM tooling, and security compliance frameworks.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Cybersecurity Analyst Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "securitySkills", "securityTools", "complianceFrameworks", "scriptingSkills", "keyIncident", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "CYBERSECURITY ANALYST RESUME",
        footer: "CISSP Certified. Security clearance details on request."
      },
      styles: {
        primaryColor: "#dc2626",
        secondaryColor: "#450a0a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Cybersecurity Analyst · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Security Analyst " }, { type: "text", text: "— SentinelShield Security (2021-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ran a 24/7 SOC using Splunk SIEM, cutting mean time to detect threats from 45 minutes to under 8." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led incident response for a ransomware attempt, containing the threat with zero data exfiltration." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Hardened cloud infrastructure to SOC 2 and ISO 27001, closing 120+ findings across two audits." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Security Analyst " }, { type: "text", text: "— GlobalTech Industries (2018-2021)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Performed vulnerability scans and penetration tests, remediating critical CVEs within SLA." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Built phishing-simulation and security-awareness training that dropped click-through rates by 60%." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Security: {{securitySkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tools: {{securityTools}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Compliance: {{complianceFrameworks}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scripting: {{scriptingSkills}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Notable Incident Response" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyIncident}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-pharmacist",
    slug: "resume-pharmacist",
    title: "Pharmacist Resume Template",
    description: "Pharmacist resume highlighting medication dispensing, patient counseling, clinical protocols, and pharmacy licensure.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Pharmacist Resume Template",
      fields: ["fullName", "email", "phone", "summary", "pharmacyLicenseNumber", "clinicalPharmacySkills", "pharmacySoftware", "patientCounseling", "keyContribution", "degree", "university", "graduationYear", "certificationName", "organization", "year", "languagesKnown"],
      layout: {
        header: "PHARMACIST RESUME",
        footer: "Licensed Pharmacist (RPh) in good standing."
      },
      styles: {
        primaryColor: "#047857",
        secondaryColor: "#022c22"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Pharmacist, RPh · {{email}} · {{phone}} · License #: {{pharmacyLicenseNumber}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Staff Pharmacist " }, { type: "text", text: "— Riverside Community Pharmacy (2020-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Verified and dispensed 350+ prescriptions daily with a 99.98% accuracy rate and zero dispensing errors." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered medication therapy management and immunizations to 1,200+ patients annually." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Launched a medication-adherence program that improved refill compliance by 22% among chronic patients." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Clinical Pharmacist " }, { type: "text", text: "— Stanford Health Care (2016-2020)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reviewed inpatient orders for dosing, interactions, and renal adjustments across a 200-bed hospital." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led antimicrobial-stewardship rounds that reduced broad-spectrum antibiotic use by 18%." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Clinical pharmacy: {{clinicalPharmacySkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Pharmacy systems: {{pharmacySoftware}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Patient counseling: {{patientCounseling}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Contribution" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyContribution}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}}) · Languages: {{languagesKnown}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-civil-engineer",
    slug: "resume-civil-engineer",
    title: "Civil Engineer Resume Template",
    description: "Civil engineer resume highlighting structural design, site management, AutoCAD drafting, and infrastructure project delivery.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Civil Engineer Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "summary", "structuralSkills", "civilSoftware", "siteManagementSkills", "engineeringCodes", "keyProject", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
      layout: {
        header: "CIVIL ENGINEER RESUME",
        footer: "Professional Engineer (PE) licensed. Project portfolio on request."
      },
      styles: {
        primaryColor: "#a16207",
        secondaryColor: "#422006"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Civil Engineer, PE · {{email}} · {{phone}} · LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Senior Civil Engineer " }, { type: "text", text: "— BuildRight Contractors (2020-2026)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led structural design and delivery of a $30M highway-overpass project completed 2 months early." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Managed site inspections and QA/QC for 3 concurrent projects while maintaining a zero-incident safety record." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Optimized foundation designs in STAAD.Pro that reduced concrete volume and saved $450K in materials." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Civil Engineer " }, { type: "text", text: "— GlobalTech Industries (2016-2020)" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Produced AutoCAD and Civil 3D drawings, grading plans, and drainage designs for commercial developments." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Coordinated with permitting authorities to secure approvals in compliance with local codes." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Structural: {{structuralSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Software: {{civilSoftware}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Site management: {{siteManagementSkills}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Codes & standards: {{engineeringCodes}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Flagship Project" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyProject}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationName}} — {{organization}}, {{year}}" }] }
        ]
      }
    }
  }
];
