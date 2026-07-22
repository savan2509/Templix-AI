// A second batch of per-template document content for the "reports" category.
// Ten additional fresh, distinct report types — each with its own sections,
// realistic sample data tables, and tailored language so no two read alike.
export const reportsExtra2Templates: any[] = [
  {
    id: "environmental-report",
    slug: "environmental-report",
    title: "Environmental Report Template",
    description: "Free environmental report template to document emissions, waste, energy use, and sustainability findings for ESG and compliance reviews.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Environmental Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "siteName", "reportingPeriod", "carbonFootprint", "recommendation"],
      layout: {
        header: "ENVIRONMENTAL PERFORMANCE REPORT",
        footer: "Prepared in line with ISO 14001 environmental management standards."
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
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Site: " }, { type: "text", text: "{{siteName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Period: " }, { type: "text", text: "{{reportingPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Carbon Footprint: " }, { type: "text", text: "{{carbonFootprint}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Resource & Emissions Overview" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Indicator" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "This Year" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Last Year" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Change" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "CO2 Emissions (tonnes)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,240" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1,510" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-17.9%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Water Use (m³)" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "38,600" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "41,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-6.3%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Waste Recycled" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "72%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "64%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+8 pts" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Carbon emissions fell 17.9% following the switch to a renewable energy supplier." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Recycling rates crossed the 70% target for the first time this reporting cycle." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Water intensity per unit of output remains above the industry benchmark." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "quality-assurance-report",
    slug: "quality-assurance-report",
    title: "Quality Assurance Report Template",
    description: "Free quality assurance report template to track defect rates, test pass results, and QA findings for reliable product releases.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Quality Assurance Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "productName", "buildVersion", "defectDensity", "recommendation"],
      layout: {
        header: "QUALITY ASSURANCE REPORT",
        footer: "QA sign-off required before release to production."
      },
      styles: {
        primaryColor: "#0369a1",
        secondaryColor: "#7dd3fc"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Product: " }, { type: "text", text: "{{productName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Build: " }, { type: "text", text: "{{buildVersion}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Defect Density: " }, { type: "text", text: "{{defectDensity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Test Execution Summary" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Test Suite" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Executed" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Passed" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Pass Rate" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Functional" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "412" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "398" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "96.6%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Regression" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "285" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "279" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "97.9%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Performance" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "48" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "44" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "91.7%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Overall pass rate of 96.4% exceeds the 95% release quality gate." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Four open performance defects relate to checkout latency under peak load." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "No critical or blocker severity defects remain unresolved." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "production-report",
    slug: "production-report",
    title: "Production Report Template",
    description: "Free production report template to record output volume, downtime, yield, and efficiency findings across manufacturing shifts.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Production Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "plantName", "shift", "unitsProduced", "recommendation"],
      layout: {
        header: "PRODUCTION OUTPUT REPORT",
        footer: "Distributed to plant operations and supply planning teams."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#fcd34d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Plant: " }, { type: "text", text: "{{plantName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Shift: " }, { type: "text", text: "{{shift}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Units Produced: " }, { type: "text", text: "{{unitsProduced}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Line Performance" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Line" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Target" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Actual" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Downtime" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Line A" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4,860" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "42 min" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Line B" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4,620" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "12 min" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Line C" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "3,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2,940" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "88 min" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Line B exceeded its target output with the lowest recorded downtime." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Line C missed target due to an 88-minute stoppage from a jammed feeder." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Overall equipment effectiveness held at 89% against a 90% goal." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "it-infrastructure-report",
    slug: "it-infrastructure-report",
    title: "IT Infrastructure Report Template",
    description: "Free IT infrastructure report template to summarize uptime, capacity, security, and system health for technology operations reviews.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "IT Infrastructure Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "environment", "reportingPeriod", "uptimePercent", "recommendation"],
      layout: {
        header: "IT INFRASTRUCTURE REPORT",
        footer: "Prepared by the IT operations team for the technology steering committee."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#93c5fd"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Environment: " }, { type: "text", text: "{{environment}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Period: " }, { type: "text", text: "{{reportingPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Uptime: " }, { type: "text", text: "{{uptimePercent}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "System Health Metrics" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "System" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Uptime" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Avg Response" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Incidents" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Core API" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "99.98%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "112 ms" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Database Cluster" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "99.95%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "8 ms" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Storage / Backup" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "100%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "n/a" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "0" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "All systems met their 99.9% availability SLA for the reporting period." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two database incidents were resolved within the four-hour recovery target." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Storage utilization reached 78%, approaching the planned expansion threshold." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "case-study-report",
    slug: "case-study-report",
    title: "Case Study Report Template",
    description: "Free case study report template to present a client challenge, solution approach, and measurable results in a persuasive format.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Case Study Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "clientName", "industry", "engagementLength", "recommendation"],
      layout: {
        header: "CASE STUDY REPORT",
        footer: "Published with client permission for marketing and sales use."
      },
      styles: {
        primaryColor: "#9d174d",
        secondaryColor: "#f9a8d4"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Industry: " }, { type: "text", text: "{{industry}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Engagement: " }, { type: "text", text: "{{engagementLength}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Challenge & Solution" }] },
          { type: "paragraph", content: [{ type: "text", text: "The client faced stagnating conversion rates and a fragmented customer journey across channels. Our team ran a discovery audit, rebuilt the funnel, and introduced a personalization layer to address the root causes." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Results at a Glance" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Metric" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Before" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "After" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Improvement" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Conversion Rate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2.1%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "4.7%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+124%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Avg Order Value" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$68" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$91" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+34%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Churn Rate" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "9.4%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "5.8%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-38%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Personalized onboarding drove the largest single lift in conversion." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Reducing checkout steps from five to two cut cart abandonment sharply." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The client recouped the project investment within four months." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "survey-report",
    slug: "survey-report",
    title: "Survey Report Template",
    description: "Free survey report template to present response rates, respondent demographics, and key insights from any questionnaire or poll.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Survey Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "surveyName", "sampleSize", "responseRate", "recommendation"],
      layout: {
        header: "SURVEY RESULTS REPORT",
        footer: "Results weighted to reflect the target population."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#a5b4fc"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Survey: " }, { type: "text", text: "{{surveyName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Sample Size: " }, { type: "text", text: "{{sampleSize}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Response Rate: " }, { type: "text", text: "{{responseRate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Response Breakdown" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Question" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Agree" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Neutral" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Disagree" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Easy to use" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "68%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "21%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "11%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Good value" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "54%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "30%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "16%" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Would recommend" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "73%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "9%" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Ease of use is the strongest driver of overall satisfaction." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Value perception lags usability and represents the biggest opportunity." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Nearly three in four respondents would recommend the product to a peer." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "variance-report",
    slug: "variance-report",
    title: "Variance Report Template",
    description: "Free variance report template to compare budget versus actuals, explain variances, and flag corrective actions for finance teams.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Variance Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "department", "reportingPeriod", "netVariance", "recommendation"],
      layout: {
        header: "BUDGET VARIANCE REPORT",
        footer: "Figures in USD; favorable variances shown as positive."
      },
      styles: {
        primaryColor: "#065f46",
        secondaryColor: "#6ee7b7"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Department: " }, { type: "text", text: "{{department}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Period: " }, { type: "text", text: "{{reportingPeriod}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Net Variance: " }, { type: "text", text: "{{netVariance}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Budget vs Actual" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Line Item" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Budget" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Actual" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Variance" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Salaries" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$240,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$232,500" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+$7,500" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Software" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$45,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$52,800" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "-$7,800" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Travel" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$18,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$11,200" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "+$6,800" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Software costs overran budget by 17% due to unplanned license renewals." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Travel came in well under budget after a shift to remote client meetings." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Salary savings from delayed hiring partly offset the software overspend." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "due-diligence-report",
    slug: "due-diligence-report",
    title: "Due Diligence Report Template",
    description: "Free due diligence report template to assess a target company's financial, legal, and operational risks ahead of an acquisition.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Due Diligence Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "targetCompany", "dealValue", "riskRating", "recommendation"],
      layout: {
        header: "DUE DILIGENCE REPORT",
        footer: "Strictly confidential — prepared for the transaction committee."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#94a3b8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Target: " }, { type: "text", text: "{{targetCompany}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Deal Value: " }, { type: "text", text: "{{dealValue}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Risk Rating: " }, { type: "text", text: "{{riskRating}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Diligence Findings by Area" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Area" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Risk Level" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Financial Statements" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Reviewed" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Low" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Legal & Contracts" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Open Items" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "IT & Cybersecurity" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gaps Identified" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "High" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Customer Concentration" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Reviewed" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Medium" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Financials are clean with three years of audited statements and stable margins." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cybersecurity gaps and unpatched systems represent the highest-priority risk." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two key contracts contain change-of-control clauses requiring counterparty consent." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "project-closure-report",
    slug: "project-closure-report",
    title: "Project Closure Report Template",
    description: "Free project closure report template to capture deliverables, budget outcomes, and lessons learned as a project formally wraps up.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Project Closure Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "projectName", "projectSponsor", "completionDate", "recommendation"],
      layout: {
        header: "PROJECT CLOSURE REPORT",
        footer: "Signed off by the project sponsor to formally close the project."
      },
      styles: {
        primaryColor: "#7e22ce",
        secondaryColor: "#d8b4fe"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Project: " }, { type: "text", text: "{{projectName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Sponsor: " }, { type: "text", text: "{{projectSponsor}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Completed: " }, { type: "text", text: "{{completionDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Objectives vs Outcomes" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Objective" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Planned" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Actual" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Status" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Delivery Date" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Jun 30" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Jul 08" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Slight Delay" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Budget" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$180,000" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "$174,300" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Under Budget" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Scope Delivered" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "100%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "96%" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "2 items deferred" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "The project finished under budget despite an eight-day schedule slip." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two low-priority scope items were deferred to a follow-on phase." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Stakeholder satisfaction at handover was rated 4.6 out of 5." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  },
  {
    id: "uat-report",
    slug: "uat-report",
    title: "UAT Report Template",
    description: "Free UAT report template to document user acceptance testing scenarios, pass rates, and sign-off readiness before go-live.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "UAT Report Template",
      fields: ["reportTitle", "preparedBy", "reportDate", "executiveSummary", "systemName", "releaseVersion", "acceptanceStatus", "recommendation"],
      layout: {
        header: "USER ACCEPTANCE TESTING REPORT",
        footer: "Business sign-off required before promotion to go-live."
      },
      styles: {
        primaryColor: "#0e7490",
        secondaryColor: "#67e8f9"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{reportTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by {{preparedBy}} — {{reportDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "System: " }, { type: "text", text: "{{systemName}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Release: " }, { type: "text", text: "{{releaseVersion}}" }, { type: "text", text: "   |   " }, { type: "text", marks: [{ type: "bold" }], text: "Acceptance: " }, { type: "text", text: "{{acceptanceStatus}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scenario Results" }] },
          { type: "table", content: [
            { type: "tableRow", content: [
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Scenario" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Cases" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Passed" }] }] },
              { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Result" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Order Placement" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "32" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "32" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Accepted" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Payments" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "24" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "22" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Conditional" }] }] }
            ] },
            { type: "tableRow", content: [
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Reporting" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "18" }] }] },
              { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Accepted" }] }] }
            ] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Key Findings" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "94% of acceptance cases passed on the first testing cycle." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Two payment scenarios failed on a currency-rounding edge case." }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Business users confirmed the workflow matches documented processes." }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Recommendations" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendation}}" }] }
        ]
      }
    }
  }
];
