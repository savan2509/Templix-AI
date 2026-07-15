// Additional per-template document content for the "reports" category.
// Ten fresh, distinct report types, each with its own sections, sample data
// tables, and tailored language so no two documents read alike.
export const reportsExtraTemplates: any[] = [
  {
    id: "daily-activity-report",
    slug: "daily-activity-report",
    title: "Daily Activity Report Template",
    description: "Free daily activity report template to log tasks completed, hours worked, blockers, and next-day priorities in one clean summary.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Daily Activity Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "teamName", "shift", "hoursLogged", "topPriority"],
      layout: {
        header: "DAILY ACTIVITY REPORT",
        footer: "Submitted at end of shift for supervisor review."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#5eead4"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Team: " }, { type: "text", text: "{{teamName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Shift: " }, { type: "text", text: "{{shift}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Hours Logged: " }, { type: "text", text: "{{hoursLogged}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Task Log" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Task" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Time Spent" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Client onboarding calls" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2.5 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Complete" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Inventory reconciliation" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1.0 hr" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Complete" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Vendor follow-up emails" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1.5 hrs" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "In Progress" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All scheduled onboarding calls were completed ahead of shift end." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Vendor response times remain the main blocker to closing open tickets." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "No safety incidents or downtime recorded during the shift." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Top Priority Tomorrow: " }, { type: "text", text: "{{topPriority}}" }] }
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
      layout: {
        header: "HUMAN RESOURCES REPORT",
        footer: "Confidential — people analytics for leadership use only."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#c4b5fd"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Reporting Period: " }, { type: "text", text: "{{reportPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Headcount: " }, { type: "text", text: "{{headcount}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Attrition: " }, { type: "text", text: "{{attritionRate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Workforce Metrics" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "This Period" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Prior Period" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Change" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "New Hires" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+33%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Voluntary Attrition" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6.1%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "7.4%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-1.3 pts" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Engagement Score" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "78/100" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "74/100" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+4 pts" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Hiring velocity increased while cost-per-hire held steady quarter over quarter." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Attrition fell after the revised onboarding and mentorship program launched." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Engagement gains were strongest among tenured mid-level employees." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "safety-report",
    slug: "safety-report",
    title: "Safety Report Template",
    description: "Free workplace safety report template to document incidents, hazards, corrective actions, and compliance for EHS teams and audits.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Safety Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "siteLocation", "reportPeriod", "incidentCount", "correctiveAction"],
      layout: {
        header: "WORKPLACE SAFETY REPORT",
        footer: "Filed with the EHS committee per site safety policy."
      },
      styles: {
        primaryColor: "#b91c1c",
        secondaryColor: "#fca5a5"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Site: " }, { type: "text", text: "{{siteLocation}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Period: " }, { type: "text", text: "{{reportPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Recordable Incidents: " }, { type: "text", text: "{{incidentCount}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Incident & Hazard Log" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Category" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Reported" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Resolved" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Severity" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Slip / Trip / Fall" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Low" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Equipment Fault" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Near Miss" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Low" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Lost-time injury rate remained at zero for the reporting period." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "One equipment fault remains open pending a replacement guard part." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Near-miss reporting rose after the anonymous hazard tip line launched." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Corrective Action: " }, { type: "text", text: "{{correctiveAction}}" }] }
        ]
      }
    }
  },
  {
    id: "training-report",
    slug: "training-report",
    title: "Training Report Template",
    description: "Free training report template to measure course attendance, completion rates, assessment scores, and learning outcomes for L&D teams.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Training Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "programName", "sessionsDelivered", "completionRate", "recommendation"],
      layout: {
        header: "TRAINING & DEVELOPMENT REPORT",
        footer: "Prepared by the Learning & Development team."
      },
      styles: {
        primaryColor: "#1d4ed8",
        secondaryColor: "#93c5fd"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Program: " }, { type: "text", text: "{{programName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Sessions Delivered: " }, { type: "text", text: "{{sessionsDelivered}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Completion Rate: " }, { type: "text", text: "{{completionRate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Course Outcomes" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Course" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Attendees" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Avg. Score" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Pass Rate" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cybersecurity Basics" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "142" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "88%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "96%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Leadership Fundamentals" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "63" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "82%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "91%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Compliance Refresher" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "210" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "90%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "98%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Compliance refresher reached the highest pass rate across all cohorts." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Leadership Fundamentals had the lowest completion due to scheduling conflicts." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Learner satisfaction averaged 4.5 out of 5 across post-course surveys." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "customer-feedback-report",
    slug: "customer-feedback-report",
    title: "Customer Feedback Report Template",
    description: "Free customer feedback report template to summarize survey scores, sentiment themes, NPS trends, and service improvement actions.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Customer Feedback Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "reportPeriod", "responsesCollected", "npsScore", "recommendation"],
      layout: {
        header: "CUSTOMER FEEDBACK REPORT",
        footer: "Voice-of-customer summary for the experience team."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#fdba74"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Period: " }, { type: "text", text: "{{reportPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Responses: " }, { type: "text", text: "{{responsesCollected}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "NPS: " }, { type: "text", text: "{{npsScore}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Feedback Themes" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Theme" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Mentions" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Sentiment" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Product reliability" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "312" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Positive" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Support wait times" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "188" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Negative" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Pricing clarity" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "97" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Neutral" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Product reliability is the strongest driver of promoter scores." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Support wait time is the leading detractor and top churn-risk signal." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Response volume grew 22% after in-app survey prompts were added." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "social-media-report",
    slug: "social-media-report",
    title: "Social Media Report Template",
    description: "Free social media report template to track follower growth, engagement, reach, and top posts across channels for marketing teams.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Social Media Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "reportPeriod", "totalReach", "engagementRate", "recommendation"],
      layout: {
        header: "SOCIAL MEDIA PERFORMANCE REPORT",
        footer: "Channel analytics compiled by the social team."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#f9a8d4"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Period: " }, { type: "text", text: "{{reportPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Reach: " }, { type: "text", text: "{{totalReach}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Engagement Rate: " }, { type: "text", text: "{{engagementRate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Channel Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Channel" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Followers" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Growth" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Engagement" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Instagram" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "48.2K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+6.1%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4.3%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "LinkedIn" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "21.7K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+9.4%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5.8%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "X (Twitter)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "33.9K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+2.0%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2.1%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "LinkedIn delivered the fastest follower growth and highest engagement rate." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Short-form video outperformed static posts by roughly three to one on reach." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "X engagement plateaued, signaling a need to refresh content formats." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "website-analytics-report",
    slug: "website-analytics-report",
    title: "Website Analytics Report Template",
    description: "Free website analytics report template to present traffic, conversions, bounce rate, and top-page performance for digital teams.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Website Analytics Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "reportPeriod", "totalSessions", "conversionRate", "recommendation"],
      layout: {
        header: "WEBSITE ANALYTICS REPORT",
        footer: "Traffic and conversion insights for the growth team."
      },
      styles: {
        primaryColor: "#0891b2",
        secondaryColor: "#67e8f9"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Period: " }, { type: "text", text: "{{reportPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Sessions: " }, { type: "text", text: "{{totalSessions}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Conversion Rate: " }, { type: "text", text: "{{conversionRate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Traffic by Channel" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Channel" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Sessions" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Bounce Rate" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Conversions" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Organic Search" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "62,400" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "41%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,120" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid Social" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18,900" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "55%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "410" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Direct" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24,150" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "38%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "690" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Organic search drives the most sessions and the strongest conversion volume." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid social has the highest bounce rate, pointing to landing-page mismatch." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mobile now accounts for 64% of all sessions this period." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "risk-assessment-report",
    slug: "risk-assessment-report",
    title: "Risk Assessment Report Template",
    description: "Free risk assessment report template to identify, score, and mitigate operational, financial, and compliance risks with clear owners.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Risk Assessment Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "assessmentScope", "reviewCycle", "highestRisk", "recommendation"],
      layout: {
        header: "RISK ASSESSMENT REPORT",
        footer: "Reviewed by the risk and governance committee."
      },
      styles: {
        primaryColor: "#9333ea",
        secondaryColor: "#d8b4fe"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Scope: " }, { type: "text", text: "{{assessmentScope}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Review Cycle: " }, { type: "text", text: "{{reviewCycle}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Risk Register" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Risk" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Likelihood" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Impact" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rating" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Supply chain disruption" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Critical" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Data breach" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Regulatory change" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Moderate" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Supply chain concentration is the single highest-rated enterprise risk." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cyber controls tested effective, though breach impact remains severe." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two risks were downgraded following mitigation actions this cycle." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Highest-Priority Risk: " }, { type: "text", text: "{{highestRisk}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "board-meeting-report",
    slug: "board-meeting-report",
    title: "Board Meeting Report Template",
    description: "Free board meeting report template to brief directors on performance, decisions, financials, and strategic priorities before each session.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Board Meeting Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "meetingDate", "quorum", "decisionRequested", "recommendation"],
      layout: {
        header: "BOARD MEETING REPORT",
        footer: "Confidential — for board directors only."
      },
      styles: {
        primaryColor: "#1e293b",
        secondaryColor: "#94a3b8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Meeting Date: " }, { type: "text", text: "{{meetingDate}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Quorum: " }, { type: "text", text: "{{quorum}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Performance Snapshot" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Indicator" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Actual" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Target" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Annual Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$52.4M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$50.0M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Above" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "EBITDA Margin" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Below" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cash Runway" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "16 months" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 months" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On Track" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue exceeded plan, driven by expansion into two new regions." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Margin fell short of target due to elevated cloud and logistics costs." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cash position remains healthy with runway ahead of the board threshold." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Decision Requested: " }, { type: "text", text: "{{decisionRequested}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "budget-report",
    slug: "budget-report",
    title: "Budget Report Template",
    description: "Free budget report template to compare planned versus actual spend by category, flag variances, and guide reforecasting decisions.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Budget Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "reportPeriod", "totalBudget", "totalSpent", "recommendation"],
      layout: {
        header: "BUDGET REPORT",
        footer: "Finance summary for departmental budget owners."
      },
      styles: {
        primaryColor: "#15803d",
        secondaryColor: "#86efac"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Period: " }, { type: "text", text: "{{reportPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Budget: " }, { type: "text", text: "{{totalBudget}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total Spent: " }, { type: "text", text: "{{totalSpent}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Budget vs. Actual" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Category" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Budgeted" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Actual" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Variance" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Payroll" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$320,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$312,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-$7,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Marketing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$90,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$104,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+$14,200" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Software & Tools" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$41,800" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-$3,200" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Marketing overspent on a mid-quarter campaign that beat its lead target." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Payroll and software came in under budget from delayed backfills." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Overall spend remained within 2% of the approved period budget." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  }
];
