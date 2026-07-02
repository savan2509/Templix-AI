// Enriched, per-template document content for the "reports" category.
// Each report has a distinct set of sections, report-type-specific data
// tables, and tailored language so no two documents read the same.
export const reportsTemplates = [
  {
    id: "business-report",
    slug: "business-report",
    title: "Business Report Template",
    description: "Quarterly business report layout summarizing performance, KPIs, revenue trends, risks, and strategic recommendations.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Business Report",
      fields: ["companyName", "address", "email", "phone", "reportPeriod", "preparedBy", "department", "executiveSummary", "revenueGrowth", "netMargin", "keyRisk", "strategicRecommendation"],
      layout: {
        header: "QUARTERLY BUSINESS REPORT",
        footer: "Confidential — for internal distribution only."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#60a5fa", layoutVariant: 0, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Quarterly Business Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{companyName}} — {{reportPeriod}}. Compiled by {{preparedBy}}, {{department}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Revenue Growth: " }, { type: "text", text: "{{revenueGrowth}}" }, { type: "text", text: "  |  " }, { type: "text", marks: [{ type: "bold" }], text: "Net Margin: " }, { type: "text", text: "{{netMargin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Performance Highlights" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "New customer acquisition exceeded target by double digits." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Operating expenses held flat against prior quarter." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise segment renewals reached record retention." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Performance Indicators" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "This Period" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Prior Period" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Change" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Total Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$4.2M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3.7M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+13.5%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gross Margin" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "62%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "59%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+3 pts" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Active Customers" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,840" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,610" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+14.3%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Risks & Challenges" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Primary Risk: " }, { type: "text", text: "{{keyRisk}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Strategic Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{strategicRecommendation}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Contact" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} — {{address}} | {{email}} | {{phone}}" }] }
        ]
      }
    }
  },
  {
    id: "project-status-report",
    slug: "project-status-report",
    title: "Project Status Report Template",
    description: "Weekly project status report tracking milestones, budget burn, risks, blockers, and next-week action items.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Project Status Report",
      fields: ["companyName", "clientName", "projectName", "reportPeriod", "preparedBy", "overallStatus", "percentComplete", "budgetStatus", "topBlocker", "nextMilestone"],
      layout: {
        header: "PROJECT STATUS REPORT",
        footer: "Distributed to project sponsors and delivery leads."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#2dd4bf", layoutVariant: 1, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Project Status Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project {{projectName}} for {{clientName}}, delivered by {{companyName}}. Reporting period: {{reportPeriod}}. Prepared by {{preparedBy}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Status Overview" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Overall Status: " }, { type: "text", text: "{{overallStatus}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Completion: " }, { type: "text", text: "{{percentComplete}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Budget: " }, { type: "text", text: "{{budgetStatus}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Milestone Tracker" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Milestone" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Owner" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Due Date" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Requirements Sign-off" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Analysis Team" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wk 2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Complete" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Core Build" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Engineering" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wk 6" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On Track" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "User Acceptance Testing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "QA & Client" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Wk 8" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Not Started" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Accomplishments This Period" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Completed integration with the client identity provider." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Closed 12 backlog items ahead of schedule." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Finalized the staging environment for demo access." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Risks & Blockers" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Top Blocker: " }, { type: "text", text: "{{topBlocker}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Steps" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Advance toward the next milestone: {{nextMilestone}}." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Resolve open blockers with the sponsor by end of week." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Schedule the mid-project review with stakeholders." }] }] }
          ] }
        ]
      }
    }
  },
  {
    id: "annual-report",
    slug: "annual-report",
    title: "Annual Report Template",
    description: "Corporate annual report format covering the year in review, financial highlights, governance, and outlook for shareholders.",
    isPremium: true,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Annual Report",
      fields: ["companyName", "address", "email", "reportPeriod", "preparedBy", "chairMessage", "fullYearRevenue", "yoyGrowth", "dividendPerShare", "outlookStatement"],
      layout: {
        header: "ANNUAL REPORT TO SHAREHOLDERS",
        footer: "Published in accordance with corporate disclosure standards."
      },
      styles: {
        primaryColor: "#7c2d12",
        secondaryColor: "#d97706", layoutVariant: 2, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Annual Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} — Fiscal {{reportPeriod}}. Presented to shareholders and prepared under the direction of {{preparedBy}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Letter from the Chair" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{chairMessage}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "The Year in Review" }] },
          { type: "paragraph", content: [{ type: "text", text: "The organization delivered resilient results across all operating segments while investing in long-term capacity and talent." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Highlights" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Measure" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Current Year" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Prior Year" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Total Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{fullYearRevenue}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$182.4M" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Net Income" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$34.7M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$29.1M" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Earnings per Share" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$2.14" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1.79" }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Year-over-Year Growth: " }, { type: "text", text: "{{yoyGrowth}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Dividend per Share: " }, { type: "text", text: "{{dividendPerShare}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Corporate Governance" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Independent board majority maintained throughout the year." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Audit and compensation committees met quarterly." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise risk framework reviewed and updated." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sustainability & People" }] },
          { type: "paragraph", content: [{ type: "text", text: "Investments in employee development, community programs, and emissions reduction advanced our long-term commitments." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Outlook" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{outlookStatement}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Registered office: {{address}} | Investor relations: {{email}}" }] }
        ]
      }
    }
  },
  {
    id: "financial-report",
    slug: "financial-report",
    title: "Financial Report Template",
    description: "Detailed financial report presenting income statement, balance sheet summary, cash flow, and analyst commentary.",
    isPremium: true,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Financial Report",
      fields: ["companyName", "reportPeriod", "preparedBy", "department", "totalRevenue", "operatingExpenses", "netProfit", "cashPosition", "analystNote"],
      layout: {
        header: "FINANCIAL STATEMENT REPORT",
        footer: "Prepared in accordance with applicable accounting standards."
      },
      styles: {
        primaryColor: "#065f46",
        secondaryColor: "#10b981", layoutVariant: 3, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Financial Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} financial results for {{reportPeriod}}, prepared by {{preparedBy}} of the {{department}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Revenue: " }, { type: "text", text: "{{totalRevenue}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Net Profit: " }, { type: "text", text: "{{netProfit}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Income Statement" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Line Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "% of Revenue" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{totalRevenue}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "100%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost of Goods Sold" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$1.9M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "38%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Operating Expenses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{operatingExpenses}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "26%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Profit" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{netProfit}}" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Balance Sheet Highlights" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Total assets grew on the back of higher receivables and cash." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Long-term debt reduced through scheduled principal repayment." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Shareholder equity strengthened from retained earnings." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Cash Flow" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Closing Cash Position: " }, { type: "text", text: "{{cashPosition}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Analyst Commentary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{analystNote}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Assumptions & Notes" }] },
          { type: "paragraph", content: [{ type: "text", text: "Figures are unaudited and subject to year-end adjustment. All amounts are stated in the reporting currency." }] }
        ]
      }
    }
  },
  {
    id: "sales-report",
    slug: "sales-report",
    title: "Sales Report Template",
    description: "Monthly sales report breaking down revenue by region, top products, pipeline health, and rep performance.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Sales Report",
      fields: ["companyName", "reportPeriod", "preparedBy", "department", "totalSales", "quotaAttainment", "topRegion", "pipelineValue", "salesAction"],
      layout: {
        header: "MONTHLY SALES PERFORMANCE REPORT",
        footer: "For sales leadership and revenue operations."
      },
      styles: {
        primaryColor: "#9a3412",
        secondaryColor: "#f97316", layoutVariant: 4, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Sales Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} sales results for {{reportPeriod}}, prepared by {{preparedBy}}, {{department}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Headline Numbers" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Sales: " }, { type: "text", text: "{{totalSales}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Quota Attainment: " }, { type: "text", text: "{{quotaAttainment}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Revenue by Region" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Region" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Bookings" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deals" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Avg Deal" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "North America" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$620K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "48" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12.9K" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "EMEA" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$410K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "31" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$13.2K" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "APAC" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$285K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "22" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$12.9K" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Top Performing Products" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise Suite — strongest contributor to bookings." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Team Plan — highest volume of new logos." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Add-on Modules — leading expansion revenue." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Pipeline Health" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Open Pipeline Value: " }, { type: "text", text: "{{pipelineValue}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Leading Region: " }, { type: "text", text: "{{topRegion}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Action Items" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{salesAction}}" }] }
        ]
      }
    }
  },
  {
    id: "marketing-report",
    slug: "marketing-report",
    title: "Marketing Report Template",
    description: "Campaign marketing report tracking channel performance, traffic, conversions, spend efficiency, and next-quarter plans.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Marketing Report",
      fields: ["companyName", "reportPeriod", "preparedBy", "department", "totalSpend", "leadsGenerated", "costPerLead", "bestChannel", "nextQuarterFocus"],
      layout: {
        header: "MARKETING PERFORMANCE REPORT",
        footer: "Shared with the growth and demand-generation teams."
      },
      styles: {
        primaryColor: "#6b21a8",
        secondaryColor: "#c084fc", layoutVariant: 5, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Marketing Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} marketing performance for {{reportPeriod}}, prepared by {{preparedBy}}, {{department}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Campaign Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total Spend: " }, { type: "text", text: "{{totalSpend}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Leads Generated: " }, { type: "text", text: "{{leadsGenerated}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Cost per Lead: " }, { type: "text", text: "{{costPerLead}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Channel Performance" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Channel" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Spend" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Leads" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Conv. Rate" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Paid Search" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "540" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4.2%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Organic / SEO" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$6K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "710" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5.8%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Email" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$3K" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "320" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "6.9%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Wins" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Organic traffic reached an all-time monthly high." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Email nurture sequence lifted qualified conversions." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Retargeting reduced blended cost per acquisition." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Audience Insights" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Best Performing Channel: " }, { type: "text", text: "{{bestChannel}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Next Quarter Focus" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{nextQuarterFocus}}" }] }
        ]
      }
    }
  },
  {
    id: "incident-report",
    slug: "incident-report",
    title: "Incident Report Template",
    description: "Operational incident report documenting timeline, impact, root cause, corrective actions, and preventive measures.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Incident Report",
      fields: ["companyName", "reportPeriod", "preparedBy", "department", "incidentId", "severity", "incidentSummary", "rootCause", "correctiveAction"],
      layout: {
        header: "INCIDENT REPORT",
        footer: "Confidential — restricted to operations and compliance review."
      },
      styles: {
        primaryColor: "#991b1b",
        secondaryColor: "#ef4444", layoutVariant: 0, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Incident Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Filed for {{companyName}} by {{preparedBy}}, {{department}}. Reporting window: {{reportPeriod}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Incident Overview" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Incident ID: " }, { type: "text", text: "{{incidentId}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Severity: " }, { type: "text", text: "{{severity}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{incidentSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Timeline of Events" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Time" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Event" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Owner" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "09:14" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Automated alert triggered" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Monitoring" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "09:22" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On-call engineer engaged" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Response Team" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "10:05" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Service fully restored" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Response Team" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Impact Assessment" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Affected users: subset of customers on the primary region." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Duration of degradation: approximately 51 minutes." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "No data loss or unauthorized access detected." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Root Cause" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{rootCause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Corrective Actions" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{correctiveAction}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Preventive Measures" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Add automated regression checks for the failure path." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Tighten alert thresholds to shorten detection time." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Run a post-incident review with all stakeholders." }] }] }
          ] }
        ]
      }
    }
  },
  {
    id: "research-report",
    slug: "research-report",
    title: "Research Report Template",
    description: "Structured research report with abstract, methodology, findings, data analysis, and evidence-based conclusions.",
    isPremium: true,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Research Report",
      fields: ["companyName", "reportPeriod", "preparedBy", "department", "researchTitle", "abstract", "methodology", "keyFinding", "conclusion"],
      layout: {
        header: "RESEARCH REPORT",
        footer: "Findings are provisional pending peer review."
      },
      styles: {
        primaryColor: "#1e40af",
        secondaryColor: "#38bdf8", layoutVariant: 1, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Research Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{researchTitle}} — a study conducted by {{companyName}}, {{department}}. Authored by {{preparedBy}}. Study period: {{reportPeriod}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Abstract" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{abstract}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Methodology" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{methodology}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sample & Data Sources" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Primary survey of 1,200 respondents across three cohorts." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Secondary review of published industry datasets." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Structured interviews with domain practitioners." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Findings" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Variable" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Observed" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Baseline" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Significance" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Adoption Rate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "68%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "52%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "p < 0.01" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Satisfaction" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4.3 / 5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3.8 / 5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "p < 0.05" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Retention" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "81%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "74%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "n.s." }] }] }
            ] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Key Finding: " }, { type: "text", text: "{{keyFinding}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Limitations" }] },
          { type: "paragraph", content: [{ type: "text", text: "Results may be affected by self-selection bias and the single-period observation window." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Conclusion" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{conclusion}}" }] }
        ]
      }
    }
  },
  {
    id: "progress-report",
    slug: "progress-report",
    title: "Progress Report Template",
    description: "Consulting progress report covering work completed, hours logged, upcoming tasks, and outstanding client dependencies.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Progress Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "engagementName", "overallProgress", "hoursThisPeriod", "clientDependency", "upcomingFocus"],
      layout: {
        header: "ENGAGEMENT PROGRESS REPORT",
        footer: "Prepared for the client engagement sponsor."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#5eead4", layoutVariant: 2, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Progress Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Engagement {{engagementName}} for {{clientName}}, delivered by {{companyName}}. Period: {{reportPeriod}}. Prepared by {{preparedBy}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Overall Progress" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Completion: " }, { type: "text", text: "{{overallProgress}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Hours This Period: " }, { type: "text", text: "{{hoursThisPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work Completed" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered the current-state assessment and gap analysis." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Facilitated two stakeholder alignment workshops." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Drafted the recommended operating model." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Workstream Status" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Workstream" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Progress" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Health" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "100%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Green" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Design" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "70%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Amber" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Rollout" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "15%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Green" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Outstanding Dependencies" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client Dependency: " }, { type: "text", text: "{{clientDependency}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Planned Work" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Finalize the design workstream deliverables." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Begin rollout readiness and change planning." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prepare the executive steering update." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Upcoming Focus" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{upcomingFocus}}" }] }
        ]
      }
    }
  },
  {
    id: "audit-report",
    slug: "audit-report",
    title: "Audit Report Template",
    description: "Formal audit report presenting scope, control findings, risk ratings, management responses, and remediation timelines.",
    isPremium: true,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Audit Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "auditScope", "overallOpinion", "highRiskCount", "keyFindingSummary", "managementResponse"],
      layout: {
        header: "INTERNAL AUDIT REPORT",
        footer: "Confidential — audit committee distribution only."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#94a3b8", layoutVariant: 3, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Audit Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Audit of {{clientName}} conducted by {{companyName}}. Period under review: {{reportPeriod}}. Lead auditor: {{preparedBy}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Audit Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{auditScope}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Overall Opinion" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Opinion: " }, { type: "text", text: "{{overallOpinion}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "High-Risk Findings: " }, { type: "text", text: "{{highRiskCount}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Findings Register" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Ref" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Finding" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Risk" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Due" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "A-01" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Access reviews not performed quarterly" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30 days" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "A-02" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Vendor contracts missing SLA clauses" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "60 days" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "A-03" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Backup restoration not tested" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "45 days" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Summary of Key Findings" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{keyFindingSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Formalize a quarterly access certification process." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Standardize vendor contract clauses with legal review." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Establish a tested disaster-recovery schedule." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Management Response" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{managementResponse}}" }] }
        ]
      }
    }
  },
  {
    id: "weekly-status-report",
    slug: "weekly-status-report",
    title: "Weekly Status Report Template",
    description: "Weekly status report tracking team health, accomplishments, task progress, blockers, and priorities for the coming week.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Weekly Status Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "department", "weekEnding", "overallHealth", "highlightSummary", "topBlocker", "upcomingPriority"],
      layout: {
        header: "WEEKLY STATUS REPORT",
        footer: "Confidential — for internal distribution only."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#818cf8", layoutVariant: 4, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Weekly Status Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared for {{clientName}} by {{companyName}}. Week ending {{weekEnding}} within {{reportPeriod}}. Compiled by {{preparedBy}}, {{department}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Status at a Glance" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Overall Health: " }, { type: "text", text: "{{overallHealth}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{highlightSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Accomplishments This Week" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Closed the outstanding items carried over from last week." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivered the agreed deliverable ahead of the review meeting." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Onboarded a new contributor to the workstream." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Task Progress" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Task" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Owner" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Progress" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Discovery interviews" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Analyst" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "100%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Done" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Draft recommendations" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lead" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "60%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "On Track" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stakeholder review" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "PM" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "0%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Scheduled" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Blockers & Risks" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Top Blocker: " }, { type: "text", text: "{{topBlocker}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Priorities for Next Week" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Advance the priority workstream: {{upcomingPriority}}." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Resolve the open blocker with the sponsor." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Prepare materials for the weekly review." }] }] }
          ] }
        ]
      }
    }
  },
  {
    id: "monthly-performance-report",
    slug: "monthly-performance-report",
    title: "Monthly Performance Report Template",
    description: "Monthly operations performance report covering uptime, SLA compliance, throughput, incident trends, and improvement actions.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Monthly Performance Report",
      fields: ["companyName", "reportPeriod", "preparedBy", "department", "monthLabel", "uptimePercent", "slaCompliance", "throughputVolume", "performanceSummary", "improvementAction"],
      layout: {
        header: "MONTHLY PERFORMANCE REPORT",
        footer: "Distributed to operations leadership and service owners."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#7dd3fc", layoutVariant: 5, headingStyle: 1
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Monthly Performance Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} operations performance for {{monthLabel}} ({{reportPeriod}}), prepared by {{preparedBy}}, {{department}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Performance Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{performanceSummary}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Uptime: " }, { type: "text", text: "{{uptimePercent}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "SLA Compliance: " }, { type: "text", text: "{{slaCompliance}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Throughput: " }, { type: "text", text: "{{throughputVolume}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Service Level Metrics" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Target" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Actual" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Availability" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "99.9%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "99.95%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Met" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Avg Response Time" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "< 300ms" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "268ms" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Met" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Incidents" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "< 5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Met" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Notable Achievements" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Zero critical-severity incidents this month." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mean time to recovery reduced versus prior month." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Capacity headroom maintained above the safety threshold." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Areas Needing Attention" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Recurring latency spikes during peak windows." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Backlog of low-priority maintenance tickets." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Improvement Actions" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{improvementAction}}" }] }
        ]
      }
    }
  },
  {
    id: "expense-report",
    slug: "expense-report",
    title: "Expense Report Template",
    description: "Itemized expense report for reimbursement listing costs by category, receipts, totals, and approval sign-off.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Expense Report",
      fields: ["companyName", "preparedBy", "department", "reportPeriod", "subtotal", "total", "reportId", "reimbursableAmount", "approverName", "expenseNotes"],
      layout: {
        header: "EXPENSE REPORT",
        footer: "Submit with itemized receipts for reimbursement processing."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#fbbf24", layoutVariant: 0, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Expense Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Submitted to {{companyName}} by {{preparedBy}}, {{department}}. Expense period: {{reportPeriod}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Report Details" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Report ID: " }, { type: "text", text: "{{reportId}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Reimbursable Amount: " }, { type: "text", text: "{{reimbursableAmount}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Itemized Expenses" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Date" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Category" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Day 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Airfare" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Round-trip flight" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$412.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Day 1" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Lodging" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Hotel, 2 nights" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$318.00" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Day 2" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Meals" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Client dinner" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$96.50" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Totals" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subtotal: " }, { type: "text", text: "{{subtotal}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Total: " }, { type: "text", text: "{{total}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Policy Compliance" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All expenses fall within approved daily allowances." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Itemized receipts attached for every line item." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "No personal or non-reimbursable charges included." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Notes" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{expenseNotes}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Approval" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Approved by: " }, { type: "text", text: "{{approverName}}" }] }
        ]
      }
    }
  },
  {
    id: "inventory-report",
    slug: "inventory-report",
    title: "Inventory Report Template",
    description: "Warehouse inventory report summarizing stock levels, valuation, low-stock alerts, turnover, and reorder recommendations.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Inventory Report",
      fields: ["companyName", "reportPeriod", "preparedBy", "department", "warehouseLocation", "totalSkus", "stockValue", "lowStockCount", "reorderAction"],
      layout: {
        header: "INVENTORY STATUS REPORT",
        footer: "For warehouse operations and supply planning."
      },
      styles: {
        primaryColor: "#15803d",
        secondaryColor: "#4ade80", layoutVariant: 1, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Inventory Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} inventory snapshot for {{reportPeriod}}, prepared by {{preparedBy}}, {{department}}. Facility: {{warehouseLocation}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Inventory Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Total SKUs: " }, { type: "text", text: "{{totalSkus}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Stock Value: " }, { type: "text", text: "{{stockValue}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Low-Stock Items: " }, { type: "text", text: "{{lowStockCount}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Stock by Category" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Category" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "On Hand" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Reorder Point" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Raw Materials" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4,820" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Healthy" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Finished Goods" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,140" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Reorder" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Packaging" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "9,600" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Healthy" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Low-Stock Alerts" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Finished goods have dropped below the reorder threshold." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two fast-moving SKUs projected to stock out within the lead time." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Seasonal items should be replenished ahead of demand." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Turnover & Aging" }] },
          { type: "paragraph", content: [{ type: "text", text: "Inventory turnover held steady while slow-moving stock older than 180 days remained within tolerance." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Reorder Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{reorderAction}}" }] }
        ]
      }
    }
  },
  {
    id: "employee-performance-report",
    slug: "employee-performance-report",
    title: "Employee Performance Report Template",
    description: "Employee performance review report covering goals, competency ratings, achievements, development areas, and next-cycle plan.",
    isPremium: true,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Employee Performance Report",
      fields: ["companyName", "department", "preparedBy", "reportPeriod", "employeeName", "jobTitle", "overallRating", "reviewCycle", "managerName", "developmentGoal"],
      layout: {
        header: "EMPLOYEE PERFORMANCE REVIEW",
        footer: "Confidential — HR and reviewing manager only."
      },
      styles: {
        primaryColor: "#7e22ce",
        secondaryColor: "#d8b4fe", layoutVariant: 2, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Employee Performance Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Performance review for {{employeeName}} ({{jobTitle}}) at {{companyName}}, {{department}}. Review cycle: {{reviewCycle}}. Reviewing manager: {{managerName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Overall Assessment" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Overall Rating: " }, { type: "text", text: "{{overallRating}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Competency Ratings" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Competency" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rating" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Comment" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Quality of Work" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4.5 / 5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Consistently exceeds standards" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Collaboration" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4.0 / 5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Strong team contributor" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Ownership" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3.8 / 5" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Growing steadily" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Achievements" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Led a cross-functional initiative to a successful launch." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Mentored two junior team members through onboarding." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Exceeded individual objectives for the cycle." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Development Areas" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Broaden exposure to strategic planning discussions." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Strengthen delegation to free capacity for higher-value work." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Development Goal for Next Cycle" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{developmentGoal}}" }] }
        ]
      }
    }
  },
  {
    id: "market-analysis-report",
    slug: "market-analysis-report",
    title: "Market Analysis Report Template",
    description: "Market analysis report covering market sizing, growth, segmentation, competitive landscape, and strategic opportunities.",
    isPremium: true,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Market Analysis Report",
      fields: ["companyName", "reportPeriod", "preparedBy", "department", "marketName", "marketSize", "cagr", "leadingCompetitor", "keyOpportunity", "strategicImplication"],
      layout: {
        header: "MARKET ANALYSIS REPORT",
        footer: "Prepared for strategy and corporate development."
      },
      styles: {
        primaryColor: "#be123c",
        secondaryColor: "#fb7185", layoutVariant: 3, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Market Analysis Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Analysis of the {{marketName}} market prepared by {{companyName}}, {{department}}. Authored by {{preparedBy}}. Reference period: {{reportPeriod}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Market Overview" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Market Size: " }, { type: "text", text: "{{marketSize}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Projected CAGR: " }, { type: "text", text: "{{cagr}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Segment Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Segment" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Share" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Growth" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Outlook" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "46%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+9%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Expanding" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Mid-Market" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "34%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+14%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fastest growing" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "SMB" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "20%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+5%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Stable" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Competitive Landscape" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Leading Competitor: " }, { type: "text", text: "{{leadingCompetitor}}" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Incumbents compete primarily on breadth and brand." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "New entrants target underserved niches with lower pricing." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Switching costs remain a meaningful barrier to churn." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Opportunities & Threats" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Key Opportunity: " }, { type: "text", text: "{{keyOpportunity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Strategic Implications" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{strategicImplication}}" }] }
        ]
      }
    }
  },
  {
    id: "quarterly-report",
    slug: "quarterly-report",
    title: "Quarterly Report Template",
    description: "Corporate quarterly report presenting revenue, profitability, segment results, leadership commentary, and forward guidance.",
    isPremium: true,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Quarterly Report",
      fields: ["companyName", "address", "email", "reportPeriod", "preparedBy", "quarterLabel", "quarterRevenue", "quarterlyGrowth", "ebitdaMargin", "ceoComment", "nextQuarterGuidance"],
      layout: {
        header: "QUARTERLY REPORT",
        footer: "Prepared under corporate disclosure standards."
      },
      styles: {
        primaryColor: "#1d4ed8",
        secondaryColor: "#93c5fd", layoutVariant: 4, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Quarterly Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} results for {{quarterLabel}} ({{reportPeriod}}), prepared under the direction of {{preparedBy}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Quarter Highlights" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Revenue: " }, { type: "text", text: "{{quarterRevenue}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Growth: " }, { type: "text", text: "{{quarterlyGrowth}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "EBITDA Margin: " }, { type: "text", text: "{{ebitdaMargin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Segment Results" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Segment" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Revenue" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "YoY" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Margin" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Products" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$52.3M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+11%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "34%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Services" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$28.9M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+7%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "41%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Subscriptions" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$19.6M" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+22%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "58%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Operational Highlights" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Subscription revenue reached a record share of the mix." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Operating leverage improved margins sequentially." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Free cash flow conversion remained strong." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Leadership Commentary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{ceoComment}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Forward Guidance" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{nextQuarterGuidance}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Investor Contact" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} — {{address}} | {{email}}" }] }
        ]
      }
    }
  },
  {
    id: "compliance-report",
    slug: "compliance-report",
    title: "Compliance Report Template",
    description: "Regulatory compliance report documenting control status, framework coverage, violations, remediation, and attestation.",
    isPremium: true,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Compliance Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "department", "regulationFramework", "complianceScore", "openViolations", "remediationOwner", "attestationStatement"],
      layout: {
        header: "COMPLIANCE REPORT",
        footer: "Confidential — compliance and risk committee only."
      },
      styles: {
        primaryColor: "#0e7490",
        secondaryColor: "#22d3ee", layoutVariant: 5, headingStyle: 2
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Compliance Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Compliance assessment of {{clientName}} by {{companyName}}, {{department}}. Framework: {{regulationFramework}}. Period: {{reportPeriod}}. Prepared by {{preparedBy}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Compliance Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Compliance Score: " }, { type: "text", text: "{{complianceScore}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Open Violations: " }, { type: "text", text: "{{openViolations}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Control Assessment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Control Area" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Evidence" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Access Management" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Compliant" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Reviewed" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Data Retention" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Partial" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gap noted" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Incident Response" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Compliant" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Tested" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Identified Gaps" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Data retention schedules not consistently enforced." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Third-party risk assessments overdue for two vendors." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Policy attestations pending for a subset of staff." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Remediation Plan" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Enforce automated retention policies across systems." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Complete outstanding vendor assessments within 30 days." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Close policy attestation gaps before the next cycle." }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Remediation Owner: " }, { type: "text", text: "{{remediationOwner}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Attestation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{attestationStatement}}" }] }
        ]
      }
    }
  },
  {
    id: "feasibility-report",
    slug: "feasibility-report",
    title: "Feasibility Report Template",
    description: "Project feasibility report assessing technical, financial, and operational viability with cost, ROI, and recommendation.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Feasibility Report",
      fields: ["companyName", "clientName", "reportPeriod", "preparedBy", "projectName", "estimatedCost", "projectedRoi", "paybackPeriod", "viabilityScore", "recommendation"],
      layout: {
        header: "FEASIBILITY STUDY REPORT",
        footer: "Advisory findings prepared for the project sponsor."
      },
      styles: {
        primaryColor: "#78350f",
        secondaryColor: "#facc15", layoutVariant: 0, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Feasibility Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Feasibility study of {{projectName}} for {{clientName}}, prepared by {{companyName}}. Author: {{preparedBy}}. Study period: {{reportPeriod}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Estimated Cost: " }, { type: "text", text: "{{estimatedCost}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Projected ROI: " }, { type: "text", text: "{{projectedRoi}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Payback: " }, { type: "text", text: "{{paybackPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Feasibility Assessment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Dimension" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Rating" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Notes" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Technical" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Proven technology stack" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Financial" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Sensitive to adoption rate" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Operational" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Fits existing processes" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Assumptions" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Demand grows in line with the base-case forecast." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Required talent can be sourced within the timeline." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Regulatory conditions remain stable during rollout." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Risks & Mitigations" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cost overrun — phase investment against milestones." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Slower adoption — pilot before full-scale launch." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendation" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Viability Score: " }, { type: "text", text: "{{viabilityScore}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "site-inspection-report",
    slug: "site-inspection-report",
    title: "Site Inspection Report Template",
    description: "Construction site inspection report recording conditions, defects, safety observations, and required follow-up actions.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Site Inspection Report",
      fields: ["companyName", "clientName", "date", "preparedBy", "siteName", "inspectorName", "overallCondition", "defectCount", "permitStatus", "followUpAction"],
      layout: {
        header: "SITE INSPECTION REPORT",
        footer: "Findings issued by the licensed inspecting authority."
      },
      styles: {
        primaryColor: "#3f6212",
        secondaryColor: "#a3e635", layoutVariant: 1, headingStyle: 0
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Site Inspection Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Inspection of {{siteName}} for {{clientName}}, conducted by {{companyName}}. Inspector: {{inspectorName}}. Date of inspection: {{date}}. Prepared by {{preparedBy}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Inspection Summary" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Overall Condition: " }, { type: "text", text: "{{overallCondition}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Defects Found: " }, { type: "text", text: "{{defectCount}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Permit Status: " }, { type: "text", text: "{{permitStatus}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Area Assessment" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Area" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Condition" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Action" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Structural / Framing" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Satisfactory" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "None" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Electrical" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Minor Issues" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Rectify" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Site Safety" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Needs Attention" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Immediate" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Defects Identified" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Exposed wiring near the east stairwell requires enclosure." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Guardrail height below code at the second-floor edge." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Minor water ingress observed at the north foundation." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Safety Observations" }] },
          { type: "paragraph", content: [{ type: "text", text: "Personal protective equipment was in use, though housekeeping around material storage should improve to reduce trip hazards." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Required Follow-Up" }] },
          { type: "orderedList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Address all high-priority defects before the next pour." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Schedule a re-inspection to verify corrections." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Inspector Recommendation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{followUpAction}}" }] }
        ]
      }
    }
  },
];
