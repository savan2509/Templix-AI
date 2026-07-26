// resumes-extra3.ts — 10 additional resume templates (Week 2)
export const resumesExtra3Templates: any[] = [
  { id: "resume-executive", slug: "resume-executive", title: "Executive Resume Template", description: "Free executive resume template for C-suite leaders — VP, Director, CEO, COO. Showcases strategic achievements, board experience, and P&L ownership.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Executive Resume Template", fields: ["name","email","phone","linkedin","location","summary","coreCompetencies","experience","boardMemberships","education","certifications"], layout: { header: "EXECUTIVE RESUME" }, styles: { primaryColor: "#1e3a8a", secondaryColor: "#1e40af" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | {{linkedin}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Profile" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Competencies" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{coreCompetencies}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Board Memberships & Affiliations" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{boardMemberships}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] }
      ] }
    }
  },
  { id: "resume-career-change", slug: "resume-career-change", title: "Career Change Resume Template", description: "Free career change resume template — combination format highlighting transferable skills before work history, ideal for professionals switching industries.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Career Change Resume Template", fields: ["name","email","phone","linkedin","targetRole","summary","transferableSkills","experience","education","certifications"], layout: { header: "COMBINATION RESUME" }, styles: { primaryColor: "#7c3aed", secondaryColor: "#4c1d95" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | {{linkedin}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Career Objective" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Transferable Skills" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{transferableSkills}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Training" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{certifications}}" }] }
      ] }
    }
  },
  { id: "resume-internship", slug: "resume-internship", title: "Internship Resume Template", description: "Free internship resume template for students and recent grads applying for their first role — education-first layout with skills and extracurriculars.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Internship Resume Template", fields: ["name","email","phone","university","degree","graduationYear","gpa","skills","experience","projects","extracurriculars"], layout: { header: "INTERNSHIP RESUME" }, styles: { primaryColor: "#059669", secondaryColor: "#064e3b" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{degree}}, {{university}} — Expected {{graduationYear}} | GPA: {{gpa}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{skills}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Projects" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{projects}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Extracurriculars & Achievements" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{extracurriculars}}" }] }
      ] }
    }
  },
  { id: "resume-teacher", slug: "resume-teacher", title: "Teacher Resume Template", description: "Free teacher resume template for K-12 educators applying for classroom, curriculum, or head of department roles — education-first format.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Teacher Resume Template", fields: ["name","email","phone","teachingLicense","subjects","gradeLevel","summary","experience","education","certifications","skills"], layout: { header: "TEACHER RESUME" }, styles: { primaryColor: "#0369a1", secondaryColor: "#0c4a6e" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | License: {{teachingLicense}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "Subjects: {{subjects}} | Grade Level: {{gradeLevel}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Teaching Philosophy" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Teaching Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications & CPD" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{certifications}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Skills" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{skills}}" }] }
      ] }
    }
  },
  { id: "resume-nurse", slug: "resume-nurse", title: "Nurse Resume Template", description: "Free nurse resume template for RNs, LPNs, and NPs — includes nursing license number, clinical specialties, and certifications section.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Nurse Resume Template", fields: ["name","email","phone","nursingLicense","rn","specialties","summary","experience","education","certifications","skills"], layout: { header: "NURSING RESUME" }, styles: { primaryColor: "#0891b2", secondaryColor: "#164e63" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}, {{rn}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | License: {{nursingLicense}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "Clinical Specialties: {{specialties}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications (BLS, ACLS, etc.)" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{certifications}}" }] }
      ] }
    }
  },
  { id: "resume-software-engineer", slug: "resume-software-engineer", title: "Software Engineer Resume Template", description: "Free software engineer resume template — single-column, ATS-friendly, with technical skills, GitHub projects, and system design experience.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Software Engineer Resume Template", fields: ["name","email","phone","linkedin","github","location","summary","techStack","experience","projects","education","openSource"], layout: { header: "SOFTWARE ENGINEER RESUME" }, styles: { primaryColor: "#1d4ed8", secondaryColor: "#1e3a8a" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | {{linkedin}} | {{github}} | {{location}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{techStack}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Projects" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{projects}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Open Source Contributions" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{openSource}}" }] }
      ] }
    }
  },
  { id: "resume-sales", slug: "resume-sales", title: "Sales Resume Template", description: "Free sales resume template for sales executives, account managers, and SDRs — quota achievement, pipeline metrics, and revenue growth highlighted.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Sales Resume Template", fields: ["name","email","phone","linkedin","location","summary","keyMetrics","skills","experience","education","awards"], layout: { header: "SALES RESUME" }, styles: { primaryColor: "#dc2626", secondaryColor: "#7f1d1d" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | {{linkedin}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Sales Metrics" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{keyMetrics}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sales Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Competencies" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{skills}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Awards & Recognition" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{awards}}" }] }
      ] }
    }
  },
  { id: "resume-accountant", slug: "resume-accountant", title: "Accountant Resume Template", description: "Free accountant resume template for CPAs, management accountants, and financial analysts — features regulatory expertise and financial reporting skills.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Accountant Resume Template", fields: ["name","email","phone","linkedin","certifications","summary","technicalSkills","experience","education","professionalMemberships"], layout: { header: "ACCOUNTANT / CPA RESUME" }, styles: { primaryColor: "#1e40af", secondaryColor: "#1e3a8a" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | {{linkedin}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "Certifications: {{certifications}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{technicalSkills}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Memberships" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{professionalMemberships}}" }] }
      ] }
    }
  },
  { id: "resume-marketing-manager", slug: "resume-marketing-manager", title: "Marketing Manager Resume Template", description: "Free marketing manager resume template — digital marketing, campaign management, brand strategy, and data-driven growth metrics.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Marketing Manager Resume Template", fields: ["name","email","phone","linkedin","location","summary","digitalSkills","channels","experience","education","certifications"], layout: { header: "MARKETING MANAGER RESUME" }, styles: { primaryColor: "#7c3aed", secondaryColor: "#4c1d95" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | {{linkedin}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Digital Marketing Skills" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{digitalSkills}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Channels: " }, { type: "text", text: "{{channels}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{certifications}}" }] }
      ] }
    }
  },
  { id: "resume-project-manager", slug: "resume-project-manager", title: "Project Manager Resume Template", description: "Free project manager resume template for PMs and PMPs — methodology, budget management, stakeholder communication, and key project outcomes.", isPremium: false, categorySlug: "resumes", categoryName: "Resumes",
    content: { title: "Project Manager Resume Template", fields: ["name","email","phone","linkedin","pmpCertification","methodology","summary","keyAchievements","experience","education","skills"], layout: { header: "PROJECT MANAGER RESUME" }, styles: { primaryColor: "#0369a1", secondaryColor: "#0c4a6e" },
      editorState: { type: "doc", content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{name}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | {{linkedin}} | {{pmpCertification}}" }] },
        { type: "paragraph", content: [{ type: "text", text: "Methodology: {{methodology}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Project Achievements" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{keyAchievements}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Experience" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{experience}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{education}}" }] },
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Skills" }] },
        { type: "paragraph", content: [{ type: "text", text: "{{skills}}" }] }
      ] }
    }
  },
];
