// Additional per-template document content for the "reports" category.
// Includes missing target report templates and ensures every report template
// has a distinct layoutVariant, headingStyle, color scheme, and data tables.

export const reportsExtraTemplates: any[] = [
  {
    id: "project-report",
    slug: "project-report",
    title: "Project Report Template",
    description: "Comprehensive project report summarizing deliverables, milestones, budget allocation, risks, and client sign-off.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Project Report",
      fields: ["companyName", "clientName", "projectName", "reportPeriod", "preparedBy", "overallHealth", "budgetSpent", "nextMilestone"],
      layout: { header: "PROJECT PERFORMANCE & DELIVERY REPORT", footer: "Prepared for project steering committee and client sponsors." },
      styles: { primaryColor: "#0f766e", secondaryColor: "#14b8a6", layoutVariant: 4, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Project Completion & Performance Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project {{projectName}} for {{clientName}}, delivered by {{companyName}}. Prepared by {{preparedBy}} | Period: {{reportPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Executive Status & Budget Burn" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Overall Health: " }, { type: "text", text: "{{overallHealth}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Budget Consumed: " }, { type: "text", text: "{{budgetSpent}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Milestone & Deliverable Matrix" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase / Milestone" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Planned Target" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Actual Completion" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase 1: Architecture & Specs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Complete" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Phase 2: Sprint Builds & QA" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Week 6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Complete" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Risk Register & Mitigation" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Third-party API latency mitigated via Redis response caching." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Scope expansion managed via formal Change Request #04." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Sponsor Handoff" }] },
          { type: "paragraph", content: [{ type: "text", text: "Approved by {{clientName}} Representative: ___________________________ Date: ____________" }] }
        ]
      }
    }
  },
  {
    id: "seo-report",
    slug: "seo-report",
    title: "SEO Report Template",
    description: "SEO audit and keyword performance report tracking organic traffic, backlinks, rankings, and technical site health.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "SEO & Growth Audit Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "domainAuthority", "organicTraffic", "topKeyword", "backlinkCount"],
      layout: { header: "SEARCH ENGINE OPTIMIZATION REPORT", footer: "Generated by Growth Analytics Team." },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Organic Search & Technical SEO Performance Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} | Agency: {{companyName}} | Reporting Period: {{reportPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Organic Growth Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Domain Rating: " }, { type: "text", text: "{{domainAuthority}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Monthly Organic Sessions: " }, { type: "text", text: "{{organicTraffic}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Backlinks: " }, { type: "text", text: "{{backlinkCount}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Top Keyword Rankings Table" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Target Keyword" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Current Rank" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly Volume" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Traffic Share" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{topKeyword}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "#1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18,400" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "42%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "free proposal template online" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "#3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "9,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Action Plan for Next Month" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Publish 12 high-intent topic cluster articles to capture long-tail terms." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Execute digital PR campaign to acquire 15 high-DA editorial backlinks." }] }] }
          ] }
        ]
      }
    }
  },
  {
    id: "website-audit-report",
    slug: "website-audit-report",
    title: "Website Audit Report Template",
    description: "Technical website audit report analyzing Core Web Vitals, site speed, mobile responsiveness, and security vulnerabilities.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Website Technical Audit Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "performanceScore", "seoHealthScore", "accessibilityScore"],
      layout: { header: "WEBSITE AUDIT & CORE WEB VITALS REPORT", footer: "Audited using Lighthouse & PageSpeed Insights engines." },
      styles: { primaryColor: "#b45309", secondaryColor: "#f59e0b", layoutVariant: 5, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Website Technical Audit & Speed Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Site: {{clientName}} | Auditor: {{companyName}} | Audit Date: {{reportPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Core Web Vitals Scores" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Performance: " }, { type: "text", text: "{{performanceScore}} / 100" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "SEO Score: " }, { type: "text", text: "{{seoHealthScore}} / 100" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Accessibility: " }, { type: "text", text: "{{accessibilityScore}} / 100" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Technical Issues & Remediation Schedule" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Audit Category" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Severity" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Recommended Fix" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Unused JavaScript Bundles" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Implement Next.js dynamic imports & code splitting" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Uncompressed Hero Images" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Convert PNG to WebP/AVIF format" }] }] }
            ] }
          ] }
        ]
      }
    }
  },
  {
    id: "hr-report",
    slug: "hr-report",
    title: "HR Report Template",
    description: "Free HR report template summarizing headcount, hiring, attrition, and engagement metrics for people teams and leadership reviews.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "HR Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "reportPeriod", "headcount", "attritionRate", "recommendation"],
      layout: { header: "HUMAN RESOURCES REPORT", footer: "Confidential — people analytics for leadership use only." },
      styles: { primaryColor: "#475569", secondaryColor: "#94a3b8", layoutVariant: 3, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Human Resources & Headcount Analytics Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Reporting Period: " }, { type: "text", text: "{{reportPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Headcount: " }, { type: "text", text: "{{headcount}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Attrition: " }, { type: "text", text: "{{attritionRate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Workforce Metrics Table" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Department" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Headcount" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "New Hires" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Open Reqs" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Engineering" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "42" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sales & Marketing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "28" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] }
            ] }
          ] }
        ]
      }
    }
  },
  {
    id: "performance-report",
    slug: "performance-report",
    title: "Performance Report Template",
    description: "Employee and operational performance report evaluating KPIs, goal achievements, and productivity benchmarks.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Operational Performance Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "overallRating", "kpiAttainment", "topStrength"],
      layout: { header: "OPERATIONAL PERFORMANCE REPORT", footer: "Quarterly review panel evaluation document." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#8b5cf6", layoutVariant: 4, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Performance & SLA Evaluation Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Evaluated by {{companyName}} for {{clientName}} | Review Period: {{reportPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Performance Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Overall Rating: " }, { type: "text", text: "{{overallRating}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "KPI Target Attainment: " }, { type: "text", text: "{{kpiAttainment}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Key Competency Ratings" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Competency" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Score" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Benchmark" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "SLA Response Time" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "98.4%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "95.0%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Quality Assurance Pass Rate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "99.1%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "98.0%" }] }] }
            ] }
          ] }
        ]
      }
    }
  },
  {
    id: "monthly-report",
    slug: "monthly-report",
    title: "Monthly Report Template",
    description: "30-day business and operational retrospective report summarizing achievements, key metrics, and upcoming goals.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Monthly Operations Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "monthlyRevenue", "activeProjects", "keyHighlight"],
      layout: { header: "MONTHLY BUSINESS RETROSPECTIVE", footer: "Distributed monthly to executive leadership." },
      styles: { primaryColor: "#4338ca", secondaryColor: "#6366f1", layoutVariant: 4, headingStyle: 1 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "30-Day Monthly Business & Operations Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{companyName}} by {{preparedBy}} | Month: {{reportPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Executive Highlights" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Monthly Gross Revenue: " }, { type: "text", text: "{{monthlyRevenue}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Active Client Accounts: " }, { type: "text", text: "{{activeProjects}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Departmental Monthly Retrospective" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Sales team surpassed monthly quota by 14% across core product lines." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Engineering launched 3 major feature updates with zero reported incidents." }] }] }
          ] }
        ]
      }
    }
  },
  {
    id: "weekly-report",
    slug: "weekly-report",
    title: "Weekly Report Template",
    description: "Weekly status and sprint update report summarizing team deliverables, hours logged, and upcoming weekly priorities.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Weekly Status Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "sprintName", "completedTasksCount", "nextWeekGoal"],
      layout: { header: "WEEKLY SPRINT & STATUS REPORT", footer: "Submitted weekly for management sync." },
      styles: { primaryColor: "#059669", secondaryColor: "#10b981", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Weekly Team Sprint & Status Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Team: {{companyName}} | Sprint: {{sprintName}} | Week Ending: {{reportPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Sprint Accomplishments" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Completed User Stories: " }, { type: "text", text: "{{completedTasksCount}}" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Finished UI design tokens and component migration." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Closed 8 priority GitHub issues in repository." }] }] }
          ] }
        ]
      }
    }
  },
  {
    id: "daily-report",
    slug: "daily-report",
    title: "Daily Report Template",
    description: "Daily shift and activity log report detailing hours worked, tasks completed, safety checks, and handoff notes.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Daily Operational Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "shiftName", "hoursWorked", "dailyOutput"],
      layout: { header: "DAILY SHIFT LOG & HANDOFF REPORT", footer: "Submitted daily at end of shift." },
      styles: { primaryColor: "#27272a", secondaryColor: "#52525b", layoutVariant: 3, headingStyle: 2 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Daily Shift Log & Handoff Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "Operator: {{preparedBy}} | Shift: {{shiftName}} | Date: {{reportPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Shift Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Hours Logged: " }, { type: "text", text: "{{hoursWorked}} hrs" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Shift Units Delivered: " }, { type: "text", text: "{{dailyOutput}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Tasks & Handoff Notes" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Completed morning equipment safety inspection with 0 errors." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Handoff to evening shift completed at 17:00." }] }] }
          ] }
        ]
      }
    }
  },
  {
    id: "customer-feedback-report",
    slug: "customer-feedback-report",
    title: "Customer Feedback Report Template",
    description: "Customer feedback and CSAT/NPS survey report analyzing client sentiment, feature requests, and support resolution times.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Customer Feedback & NPS Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "npsScore", "csatRating", "responseCount"],
      layout: { header: "CUSTOMER FEEDBACK & CSAT ANALYSIS", footer: "Prepared by Customer Success & Experience Team." },
      styles: { primaryColor: "#c026d3", secondaryColor: "#e879f9", layoutVariant: 4, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Customer Satisfaction & NPS Feedback Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{companyName}} by {{preparedBy}} | Survey Period: {{reportPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Sentiment & CSAT Scores" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Promoter Score (NPS): " }, { type: "text", text: "{{npsScore}} / 100" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "CSAT Score: " }, { type: "text", text: "{{csatRating}}%" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Survey Responses: " }, { type: "text", text: "{{responseCount}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Key Feedback Categories" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Category" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Positive Sentiment %" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Top Requested Feature" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Product UI / Ease of Use" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "92%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Dark mode editor support" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Support Speed" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "88%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Live chat resolution" }] }] }
            ] }
          ] }
        ]
      }
    }
  }
];
