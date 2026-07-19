// India-specific document templates for Templix AI (free templates).
// Two contracts commonly used in India: a Leave and License Agreement (the Indian
// norm instead of a US-style lease) and an Employment Bond Agreement.

export const indiaContractsTemplates: any[] = [
  {
    id: "leave-and-license-agreement",
    slug: "leave-and-license-agreement",
    title: "Leave and License Agreement Template",
    description: "Free India leave and license agreement format for renting a flat or shop, covering 11-month license period, ₹ fee, deposit, stamp duty &amp; registration; download in PDF or Word.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Leave and License Agreement",
      fields: ["agreementDate", "licensorName", "licensorAddress", "licensorPan", "licenseeName", "licenseeAddress", "licenseePan", "premisesAddress", "premisesArea", "licensePeriod", "commencementDate", "expiryDate", "monthlyLicenseFee", "feeDueDate", "securityDeposit", "lockInPeriod", "noticePeriod", "maintenanceCharges", "permittedUse", "utilitiesResponsibility", "stampDutyBorneBy", "governingCity", "governingState", "licensorSignature", "licenseeSignature", "witnessOneName", "witnessTwoName"],
      layout: {
        header: "LEAVE AND LICENSE AGREEMENT",
        footer: "Must be registered under the Registration Act, 1908 and applicable state rules. Retain a stamped copy."
      },
      styles: {
        primaryColor: "#7c2d12",
        secondaryColor: "#b45309"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "LEAVE AND LICENSE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Leave and License Agreement is made on {{agreementDate}} at {{governingCity}}, {{governingState}}, between {{licensorName}} (the Licensor / Owner) and {{licenseeName}} (the Licensee / Occupant) in respect of the premises situated at {{premisesAddress}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensor: " }, { type: "text", text: "{{licensorName}}, residing at {{licensorAddress}} (PAN: {{licensorPan}})." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensee: " }, { type: "text", text: "{{licenseeName}}, residing at {{licenseeAddress}} (PAN: {{licenseePan}})." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Licensed Premises" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Licensor grants leave and license to occupy the premises at {{premisesAddress}}, admeasuring {{premisesArea}}, together with fixtures and fittings therein, on a purely leave and license basis and not as a tenancy." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. License Period" }] },
          { type: "paragraph", content: [{ type: "text", text: "The license is granted for a period of {{licensePeriod}} (commonly 11 months in India), commencing on {{commencementDate}} and expiring on {{expiryDate}}, renewable by mutual consent on revised terms." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. License Fee" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Licensee shall pay a monthly license fee of ₹{{monthlyLicenseFee}}, payable on or before the {{feeDueDate}} of each English calendar month, without deduction save for statutory TDS where applicable." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Interest-Free Security Deposit" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Licensee shall deposit an interest-free refundable security deposit of ₹{{securityDeposit}} with the Licensor, refundable at termination after adjusting arrears of fees, utilities, and any damage beyond normal wear and tear." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Maintenance" }] },
          { type: "paragraph", content: [{ type: "text", text: "Society maintenance and outgoings of {{maintenanceCharges}} shall be borne as agreed herein; day-to-day upkeep and minor repairs of the premises during the license period shall be the responsibility of the Licensee." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Use of Premises" }] },
          { type: "paragraph", content: [{ type: "text", text: "The premises shall be used only for {{permittedUse}} and shall not be sub-licensed, assigned, or used for any unlawful or nuisance-causing purpose." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Utilities" }] },
          { type: "paragraph", content: [{ type: "text", text: "Electricity, water, gas, internet, and other utility charges shall be borne by {{utilitiesResponsibility}} and paid promptly to avoid disconnection." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "8. Termination and Lock-In" }] },
          { type: "paragraph", content: [{ type: "text", text: "Neither party shall terminate during the lock-in period of {{lockInPeriod}}. Thereafter, either party may terminate by giving {{noticePeriod}} prior written notice, upon which the Licensee shall hand over vacant and peaceful possession." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "9. Stamp Duty and Registration" }] },
          { type: "paragraph", content: [{ type: "text", text: "Stamp duty and registration charges shall be borne by {{stampDutyBorneBy}}. This agreement must be executed on stamp paper of proper value and compulsorily registered under the Registration Act, 1908 and applicable {{governingState}} rules; an unregistered leave and license agreement may be inadmissible as evidence." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "10. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This agreement shall be governed by the laws of India, and the courts at {{governingCity}}, {{governingState}} shall have exclusive jurisdiction." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Consult a lawyer and register the agreement as required under applicable state law before relying on it." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensor: " }, { type: "text", text: "{{licensorSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensee: " }, { type: "text", text: "{{licenseeSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Witness 1: " }, { type: "text", text: "{{witnessOneName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Witness 2: " }, { type: "text", text: "{{witnessTwoName}}" }] }
        ]
      }
    }
  },
  {
    id: "employment-bond-agreement",
    slug: "employment-bond-agreement",
    title: "Employment Bond Agreement Template",
    description: "Free India employment bond agreement format between employer and employee for training investment, ₹ bond amount, service period &amp; confidentiality; editable in Word or PDF.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Employment Bond Agreement",
      fields: ["agreementDate", "employerName", "employerAddress", "employerRepresentative", "employeeName", "employeeAddress", "employeeDesignation", "employeePan", "trainingPurpose", "trainingCost", "bondPeriod", "bondStartDate", "bondEndDate", "bondAmount", "noticePeriod", "confidentialityScope", "governingCity", "governingState", "employerSignature", "employeeSignature", "witnessOneName", "witnessTwoName"],
      layout: {
        header: "EMPLOYMENT BOND AGREEMENT",
        footer: "Enforceable in India only to the extent of reasonable, actual costs incurred, not as a penalty."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#0e7490"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EMPLOYMENT BOND AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Employment Bond Agreement is made on {{agreementDate}} at {{governingCity}}, {{governingState}}, between {{employerName}} (the Employer) and {{employeeName}} (the Employee), setting out the minimum service commitment in consideration of the training and investment provided by the Employer." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employer: " }, { type: "text", text: "{{employerName}}, having its office at {{employerAddress}}, represented by {{employerRepresentative}}." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee: " }, { type: "text", text: "{{employeeName}}, {{employeeDesignation}}, residing at {{employeeAddress}} (PAN: {{employeePan}})." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Purpose" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Employer shall provide the Employee with {{trainingPurpose}}, including specialised training and upskilling, at an estimated cost of ₹{{trainingCost}}, in consideration of which the Employee agrees to serve the Employer for the bond period specified below." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Bond / Service Period" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Employee agrees to remain in continuous service for a bond period of {{bondPeriod}}, commencing on {{bondStartDate}} and ending on {{bondEndDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Bond Amount" }] },
          { type: "paragraph", content: [{ type: "text", text: "Should the Employee resign or leave before completing the bond period, the Employee shall reimburse the Employer a bond amount of up to ₹{{bondAmount}}, representing the reasonable, actual training cost incurred and reducing proportionately for the period already served." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Training Cost" }] },
          { type: "paragraph", content: [{ type: "text", text: "The training cost of ₹{{trainingCost}} covers course fees, materials, and related expenses actually borne by the Employer, documentary proof of which shall be produced in the event of any recovery." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Notice Period" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Employee shall give {{noticePeriod}} written notice prior to separation and complete a proper handover of duties and Employer property." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Employee shall keep confidential all {{confidentialityScope}}, trade secrets, and proprietary information of the Employer, both during and after employment." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Enforceability Note" }] },
          { type: "paragraph", content: [{ type: "text", text: "Under Indian law, an employment bond is enforceable only to the extent of reasonable compensation for the actual, documented costs incurred by the Employer, and not as a penalty. Section 27 of the Indian Contract Act, 1872 also restrains agreements in restraint of lawful employment; any amount claimed must be genuine and proportionate." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "8. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This agreement shall be governed by the laws of India, and the courts at {{governingCity}}, {{governingState}} shall have exclusive jurisdiction." }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Consult a lawyer before executing, as bond enforceability in India is limited to reasonable actual costs." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employer: " }, { type: "text", text: "{{employerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee: " }, { type: "text", text: "{{employeeSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Witness 1: " }, { type: "text", text: "{{witnessOneName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Witness 2: " }, { type: "text", text: "{{witnessTwoName}}" }] }
        ]
      }
    }
  }
];
