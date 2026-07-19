// India-specific document templates for the "letters" category.
// Free HR & workplace document formats tailored to Indian companies:
// salary slips (₹, PF/ESI/PT/TDS), relieving letters, full & final
// settlement statements, bonafide and internship certificates, and
// employment confirmation letters.

export const indiaLettersTemplates: any[] = [
  {
    id: "salary-slip-format",
    slug: "salary-slip-format",
    title: "Salary Slip Format Template",
    description: "Free India salary slip format in PDF and Word with Basic, HRA, PF, ESI, Professional Tax and TDS breakup showing gross and net pay in ₹.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Salary Slip Format",
      fields: [
        "companyName", "companyAddress", "payPeriodMonth", "payPeriodYear",
        "employeeName", "employeeId", "designation", "department", "panNumber",
        "uanNumber", "bankAccountNumber", "daysPaid",
        "basicPay", "hra", "conveyanceAllowance", "specialAllowance",
        "providentFund", "esi", "professionalTax", "tds",
        "grossEarnings", "totalDeductions", "netPay", "netPayInWords"
      ],
      layout: {
        header: "SALARY SLIP / PAY SLIP",
        footer: "This is a computer-generated salary slip and does not require a signature."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#2563eb"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "Salary Slip for {{payPeriodMonth}} {{payPeriodYear}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee Name: " }, { type: "text", text: "{{employeeName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee ID: " }, { type: "text", text: "{{employeeId}}    " }, { type: "text", marks: [{ type: "bold" }], text: "Designation: " }, { type: "text", text: "{{designation}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Department: " }, { type: "text", text: "{{department}}    " }, { type: "text", marks: [{ type: "bold" }], text: "Days Paid: " }, { type: "text", text: "{{daysPaid}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "PAN: " }, { type: "text", text: "{{panNumber}}    " }, { type: "text", marks: [{ type: "bold" }], text: "UAN: " }, { type: "text", text: "{{uanNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Bank A/C No: " }, { type: "text", text: "{{bankAccountNumber}}" }] },
          {
            type: "table",
            content: [
              {
                type: "tableRow",
                content: [
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Earnings" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount (₹)" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Deductions" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount (₹)" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Basic" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{basicPay}}" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Provident Fund (PF)" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{providentFund}}" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "HRA" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{hra}}" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "ESI" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{esi}}" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Conveyance Allowance" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{conveyanceAllowance}}" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Professional Tax" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{professionalTax}}" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Special Allowance" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{specialAllowance}}" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "TDS" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{tds}}" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Gross Earnings" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{grossEarnings}}" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Total Deductions" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{totalDeductions}}" }] }] }
                ]
              }
            ]
          },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Net Pay: ₹{{netPay}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Net Pay in words: {{netPayInWords}}" }] }
        ]
      }
    }
  },
  {
    id: "relieving-letter",
    slug: "relieving-letter",
    title: "Relieving Letter Format Template",
    description: "Free relieving letter format in PDF and Word on company letterhead confirming an Indian employee's tenure, cleared dues and good standing on resignation.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Relieving Letter Format",
      fields: [
        "companyName", "companyAddress", "letterDate", "referenceNumber",
        "employeeName", "designation", "employeeId", "department",
        "dateOfJoining", "lastWorkingDay", "hrManagerName", "hrDesignation"
      ],
      layout: {
        header: "RELIEVING LETTER",
        footer: "Issued by the Human Resources Department. This letter is valid without a company seal."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#14b8a6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Ref: {{referenceNumber}}    Date: {{letterDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "RELIEVING LETTER" }] },
          { type: "paragraph", content: [{ type: "text", text: "To Whomsoever It May Concern," }] },
          { type: "paragraph", content: [{ type: "text", text: "This is to certify that {{employeeName}}, bearing Employee ID {{employeeId}}, was employed with {{companyName}} as {{designation}} in the {{department}} department." }] },
          { type: "paragraph", content: [{ type: "text", text: "{{employeeName}} served the organisation from {{dateOfJoining}} to {{lastWorkingDay}}. Following acceptance of the resignation, {{employeeName}} has been relieved from all duties and responsibilities with effect from the close of business on {{lastWorkingDay}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "All company assets have been returned and full and final dues have been settled and cleared. During the tenure with us, the conduct and performance were found to be satisfactory, and the employee leaves the organisation in good standing." }] },
          { type: "paragraph", content: [{ type: "text", text: "We thank {{employeeName}} for the contributions made to {{companyName}} and wish every success in future endeavours." }] },
          { type: "paragraph", content: [{ type: "text", text: "For {{companyName}}," }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{hrManagerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrDesignation}}, Human Resources" }] }
        ]
      }
    }
  },
  {
    id: "full-and-final-settlement-letter",
    slug: "full-and-final-settlement-letter",
    title: "Full and Final Settlement Letter Template",
    description: "Free full and final settlement letter format in PDF and Word with an itemised ₹ statement of salary, leave encashment, gratuity, bonus and recoveries for Indian employees.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Full and Final Settlement Letter",
      fields: [
        "companyName", "companyAddress", "letterDate", "referenceNumber",
        "employeeName", "employeeId", "designation", "lastWorkingDay",
        "salaryForMonth", "leaveEncashment", "gratuity", "bonus",
        "noticeRecovery", "advancesRecovery", "netAmountPayable",
        "netAmountInWords", "hrManagerName"
      ],
      layout: {
        header: "FULL AND FINAL SETTLEMENT STATEMENT",
        footer: "Amounts are indicative and subject to statutory deductions as applicable under Indian law."
      },
      styles: {
        primaryColor: "#7c2d12",
        secondaryColor: "#ea580c"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Ref: {{referenceNumber}}    Date: {{letterDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "FULL AND FINAL SETTLEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This statement details the full and final settlement of dues payable to {{employeeName}} (Employee ID: {{employeeId}}), {{designation}}, whose last working day was {{lastWorkingDay}}." }] },
          {
            type: "table",
            content: [
              {
                type: "tableRow",
                content: [
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Particulars" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount (₹)" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Salary for the month" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{salaryForMonth}}" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Leave Encashment" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{leaveEncashment}}" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Gratuity" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{gratuity}}" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Bonus" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{bonus}}" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Less: Notice Period Recovery" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "(₹{{noticeRecovery}})" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "Less: Salary Advances" }] }] },
                  { type: "tableCell", content: [{ type: "paragraph", content: [{ type: "text", text: "(₹{{advancesRecovery}})" }] }] }
                ]
              },
              {
                type: "tableRow",
                content: [
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "Net Amount Payable" }] }] },
                  { type: "tableHeader", content: [{ type: "paragraph", content: [{ type: "text", text: "₹{{netAmountPayable}}" }] }] }
                ]
              }
            ]
          },
          { type: "paragraph", content: [{ type: "text", text: "Net Amount Payable in words: {{netAmountInWords}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "The above settlement is final and will be credited to the registered bank account within the statutory timeline. Kindly acknowledge receipt." }] },
          { type: "paragraph", content: [{ type: "text", text: "For {{companyName}}," }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{hrManagerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Human Resources Department" }] }
        ]
      }
    }
  },
  {
    id: "bonafide-certificate",
    slug: "bonafide-certificate",
    title: "Bonafide Certificate Template",
    description: "Free bonafide certificate format in PDF and Word certifying an Indian employee's designation and tenure, issued for visa, bank loan or address proof purposes.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Bonafide Certificate",
      fields: [
        "companyName", "companyAddress", "letterDate", "referenceNumber",
        "employeeName", "designation", "employeeId", "department",
        "dateOfJoining", "purpose", "hrManagerName", "hrDesignation"
      ],
      layout: {
        header: "BONAFIDE CERTIFICATE",
        footer: "This certificate is issued on the specific request of the employee for the stated purpose only."
      },
      styles: {
        primaryColor: "#5b21b6",
        secondaryColor: "#8b5cf6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Ref: {{referenceNumber}}    Date: {{letterDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "BONAFIDE CERTIFICATE" }] },
          { type: "paragraph", content: [{ type: "text", text: "To Whomsoever It May Concern," }] },
          { type: "paragraph", content: [{ type: "text", text: "This is to certify that {{employeeName}}, bearing Employee ID {{employeeId}}, is a bona fide employee of {{companyName}} and is currently working as {{designation}} in the {{department}} department." }] },
          { type: "paragraph", content: [{ type: "text", text: "{{employeeName}} has been associated with our organisation since {{dateOfJoining}} and continues to be in active service as on the date of this certificate. The details furnished above are true and correct as per our official employment records." }] },
          { type: "paragraph", content: [{ type: "text", text: "This certificate is being issued on the request of the employee for the purpose of {{purpose}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "For {{companyName}}," }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{hrManagerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrDesignation}}, Human Resources" }] }
        ]
      }
    }
  },
  {
    id: "internship-completion-certificate",
    slug: "internship-completion-certificate",
    title: "Internship Completion Certificate Template",
    description: "Free internship completion certificate format in PDF and Word for Indian students, capturing college, project, duration and mentor sign-off with a conduct remark.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Internship Completion Certificate",
      fields: [
        "companyName", "companyAddress", "letterDate", "referenceNumber",
        "internName", "collegeName", "department", "projectTitle",
        "internshipStartDate", "internshipEndDate", "mentorName", "mentorDesignation"
      ],
      layout: {
        header: "INTERNSHIP COMPLETION CERTIFICATE",
        footer: "Issued in recognition of the successful completion of the internship programme."
      },
      styles: {
        primaryColor: "#155e75",
        secondaryColor: "#06b6d4"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Ref: {{referenceNumber}}    Date: {{letterDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "INTERNSHIP COMPLETION CERTIFICATE" }] },
          { type: "paragraph", content: [{ type: "text", text: "This is to certify that {{internName}}, a student of {{collegeName}}, has successfully completed an internship with {{companyName}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "The internship was carried out in the {{department}} department from {{internshipStartDate}} to {{internshipEndDate}}, during which the intern contributed to the project titled \"{{projectTitle}}\"." }] },
          { type: "paragraph", content: [{ type: "text", text: "During the internship period, {{internName}} demonstrated sincerity, a strong willingness to learn, and a professional attitude. The overall conduct and performance were found to be excellent." }] },
          { type: "paragraph", content: [{ type: "text", text: "We wish {{internName}} all the very best for future academic and professional pursuits." }] },
          { type: "paragraph", content: [{ type: "text", text: "For {{companyName}}," }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{mentorName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{mentorDesignation}} (Internship Mentor)" }] }
        ]
      }
    }
  },
  {
    id: "employment-confirmation-letter",
    slug: "employment-confirmation-letter",
    title: "Employment Confirmation Letter Template",
    description: "Free employment confirmation letter format in PDF and Word confirming an Indian employee's services post-probation with revised CTC in ₹ and continued terms.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Employment Confirmation Letter",
      fields: [
        "companyName", "companyAddress", "letterDate", "referenceNumber",
        "employeeName", "employeeId", "designation", "department",
        "dateOfJoining", "probationEndDate", "confirmationEffectiveDate",
        "revisedCtc", "hrManagerName", "hrDesignation"
      ],
      layout: {
        header: "EMPLOYMENT CONFIRMATION LETTER",
        footer: "Please retain this letter for your records. Terms are governed by the company HR policy."
      },
      styles: {
        primaryColor: "#166534",
        secondaryColor: "#22c55e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Ref: {{referenceNumber}}    Date: {{letterDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "CONFIRMATION OF EMPLOYMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{employeeName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "We are pleased to inform you that, based on your performance during the probation period which concluded on {{probationEndDate}}, your services as {{designation}} in the {{department}} department (Employee ID: {{employeeId}}) are hereby confirmed with effect from {{confirmationEffectiveDate}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "You joined {{companyName}} on {{dateOfJoining}}, and your contribution during this period has been valued by the team. In recognition of the same, your revised annual Cost to Company (CTC) will be ₹{{revisedCtc}}, effective from your confirmation date." }] },
          { type: "paragraph", content: [{ type: "text", text: "All other terms and conditions of your employment, as outlined in your appointment letter and the prevailing company policies, will continue to remain in force. We look forward to your continued commitment and growth with the organisation." }] },
          { type: "paragraph", content: [{ type: "text", text: "Congratulations and welcome as a confirmed member of the {{companyName}} family." }] },
          { type: "paragraph", content: [{ type: "text", text: "For {{companyName}}," }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{hrManagerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrDesignation}}, Human Resources" }] }
        ]
      }
    }
  }
];
