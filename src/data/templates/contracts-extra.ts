// Additional contract / legal agreement templates. Each document is a distinct
// contract type with clauses relevant to that engagement. Free (non-premium) set.

export const contractsExtraTemplates: any[] = [
  {
    id: "graphic-design-contract",
    slug: "graphic-design-contract",
    title: "Graphic Design Contract Template",
    description: "Free graphic design contract template covering project scope, design fees, revisions, file delivery, and copyright transfer between designer and client.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Graphic Design Contract Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "projectDescription", "designDeliverables", "revisionRounds", "projectFee", "depositAmount", "finalFileFormats", "copyrightTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "GRAPHIC DESIGN CONTRACT",
        footer: "A legally binding agreement between the Designer and the Client."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#5b21b6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "GRAPHIC DESIGN CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Designer) and {{partyTwo}} (the Client)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Work" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Designer agrees to create the following design work: {{projectDescription}}. Deliverables include {{designDeliverables}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Revisions" }] },
          { type: "paragraph", content: [{ type: "text", text: "The project fee includes {{revisionRounds}} of revisions. Additional revisions will be billed separately at rates agreed in writing before work continues." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total project fee is {{projectFee}}. A non-refundable deposit of {{depositAmount}} is due upon signing, with the balance payable upon final delivery." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. File Delivery" }] },
          { type: "paragraph", content: [{ type: "text", text: "Upon final payment, the Designer will deliver the approved artwork in the following formats: {{finalFileFormats}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Copyright & Ownership" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{copyrightTerms}} The Designer retains the right to display the completed work in a portfolio unless otherwise agreed." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Work completed up to the date of termination remains payable by the Client." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Designer: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "personal-training-agreement",
    slug: "personal-training-agreement",
    title: "Personal Training Agreement Template",
    description: "Free personal training agreement template outlining session packages, fitness goals, health waivers, cancellation policy, and liability for trainers and clients.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Personal Training Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "sessionPackage", "sessionRate", "trainingSchedule", "fitnessGoals", "healthDisclosure", "cancellationPolicy", "liabilityWaiver", "termLength", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "PERSONAL TRAINING AGREEMENT",
        footer: "Client confirms fitness to participate in physical exercise programs."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#c2410c"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PERSONAL TRAINING AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Trainer) and {{partyTwo}} (the Client)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Training Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Trainer will provide a {{sessionPackage}} personal training program designed to help the Client pursue the following goals: {{fitnessGoals}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sessions will be delivered according to the following schedule: {{trainingSchedule}}, over a program term of {{termLength}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Client agrees to pay {{sessionRate}} for the agreed package. Payment is due in advance of each session block unless otherwise arranged." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Health Disclosure" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Client confirms the following regarding their physical condition: {{healthDisclosure}}. The Client will inform the Trainer of any change in health status." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Cancellation Policy" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationPolicy}} Missed sessions without adequate notice may be forfeited." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Assumption of Risk & Liability" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{liabilityWaiver}} The Client participates in all exercise activities voluntarily and at their own risk." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Trainer: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "event-planning-contract",
    slug: "event-planning-contract",
    title: "Event Planning Contract Template",
    description: "Free event planning contract template detailing event scope, vendor coordination, budget, planner fees, cancellation, and liability for planners and clients.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Event Planning Contract Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "eventType", "eventDate", "eventVenue", "servicesIncluded", "eventBudget", "plannerFee", "vendorCoordination", "cancellationTerms", "liabilityTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "EVENT PLANNING CONTRACT",
        footer: "Binding agreement between the Event Planner and the Client."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#9d174d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EVENT PLANNING CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Event Planner) and {{partyTwo}} (the Client)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Event Details" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Planner will coordinate a {{eventType}} to be held on {{eventDate}} at {{eventVenue}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Services Provided" }] },
          { type: "paragraph", content: [{ type: "text", text: "Planning services include: {{servicesIncluded}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Budget & Vendor Coordination" }] },
          { type: "paragraph", content: [{ type: "text", text: "The event operates within an approved budget of {{eventBudget}}. The Planner will manage vendors as follows: {{vendorCoordination}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Planner Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Client agrees to pay the Planner a fee of {{plannerFee}}, payable per the agreed installment schedule." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Cancellation & Rescheduling" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationTerms}} Deposits are non-refundable once vendor commitments are made." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Liability" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{liabilityTerms}} The Planner is not liable for the acts or omissions of third-party vendors." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Event Planner: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "tutoring-agreement",
    slug: "tutoring-agreement",
    title: "Tutoring Agreement Template",
    description: "Free tutoring agreement template covering subjects, lesson schedule, hourly rates, cancellation notice, and progress reporting between tutor and student or parent.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Tutoring Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "subjectsCovered", "lessonSchedule", "lessonLocation", "hourlyRate", "paymentSchedule", "cancellationNotice", "progressReporting", "termLength", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "TUTORING AGREEMENT",
        footer: "Agreement between the Tutor and the Student or Parent/Guardian."
      },
      styles: {
        primaryColor: "#0891b2",
        secondaryColor: "#155e75"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TUTORING AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Tutor) and {{partyTwo}} (the Student or Parent/Guardian)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Tutoring Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Tutor will provide instruction in the following subjects: {{subjectsCovered}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Schedule & Location" }] },
          { type: "paragraph", content: [{ type: "text", text: "Lessons will follow this schedule: {{lessonSchedule}}, delivered at {{lessonLocation}} over a term of {{termLength}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Rates & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The tutoring rate is {{hourlyRate}} per hour, invoiced {{paymentSchedule}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Cancellation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationNotice}} Lessons cancelled without sufficient notice may be charged in full." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Progress Reporting" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Tutor will provide progress updates as follows: {{progressReporting}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tutor: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Student / Parent: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "property-management-agreement",
    slug: "property-management-agreement",
    title: "Property Management Agreement Template",
    description: "Free property management agreement template defining managed property, manager duties, management fees, rent collection, maintenance authority, and term for owners and managers.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Property Management Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "propertyAddress", "managerDuties", "managementFee", "rentCollectionTerms", "maintenanceAuthority", "termLength", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "PROPERTY MANAGEMENT AGREEMENT",
        footer: "Binding agreement between the Property Owner and the Managing Agent."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#134e4a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PROPERTY MANAGEMENT AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Owner) and {{partyTwo}} (the Managing Agent)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Managed Property" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Owner appoints the Managing Agent to manage the property located at {{propertyAddress}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Manager Duties" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Managing Agent will perform the following duties: {{managerDuties}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Management Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Owner agrees to pay a management fee of {{managementFee}}, deducted from collected rents or invoiced monthly." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Rent Collection" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{rentCollectionTerms}} Collected funds, less authorized expenses, will be remitted to the Owner on a regular basis." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Maintenance & Repairs" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{maintenanceAuthority}} Expenditures above the approved limit require the Owner's prior written consent." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Term & Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement runs for a term of {{termLength}}. {{terminationTerms}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Owner: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Managing Agent: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "saas-subscription-agreement",
    slug: "saas-subscription-agreement",
    title: "SaaS Subscription Agreement Template",
    description: "Free SaaS subscription agreement template covering software access, subscription fees, service levels, data protection, and termination between provider and subscriber.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "SaaS Subscription Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "serviceDescription", "subscriptionPlan", "subscriptionFee", "billingCycle", "serviceLevel", "dataProtectionTerms", "intellectualPropertyTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "SAAS SUBSCRIPTION AGREEMENT",
        footer: "Governs access to and use of the hosted software service."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#3730a3"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SAAS SUBSCRIPTION AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Provider) and {{partyTwo}} (the Subscriber)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Software Service" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Provider grants the Subscriber a non-exclusive right to access and use the following service: {{serviceDescription}}, under the {{subscriptionPlan}} plan." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Subscription Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Subscriber agrees to pay {{subscriptionFee}}, billed {{billingCycle}}. Fees are non-refundable except as required by law." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Service Levels" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Provider will use reasonable efforts to meet the following service commitment: {{serviceLevel}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Data Protection" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{dataProtectionTerms}} The Subscriber retains ownership of all data submitted to the service." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Intellectual Property" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{intellectualPropertyTerms}} All rights in the underlying software remain with the Provider." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Upon termination, the Subscriber's access will be disabled and data may be exported within a reasonable window." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subscriber: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "memorandum-of-understanding",
    slug: "memorandum-of-understanding",
    title: "Memorandum of Understanding Template",
    description: "Free memorandum of understanding template outlining shared purpose, roles, resource contributions, confidentiality, and non-binding intent between two cooperating parties.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Memorandum of Understanding Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "purposeStatement", "partyOneRole", "partyTwoRole", "resourceContributions", "confidentialityTerms", "bindingNature", "termLength", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "MEMORANDUM OF UNDERSTANDING",
        footer: "A statement of mutual intent between the cooperating parties."
      },
      styles: {
        primaryColor: "#1e40af",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MEMORANDUM OF UNDERSTANDING" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} and {{partyTwo}}, who wish to record their mutual understanding." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Purpose" }] },
          { type: "paragraph", content: [{ type: "text", text: "The parties enter into this Memorandum for the following purpose: {{purposeStatement}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Roles & Responsibilities" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{partyOne}} will be responsible for {{partyOneRole}}, and {{partyTwo}} will be responsible for {{partyTwoRole}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Resource Contributions" }] },
          { type: "paragraph", content: [{ type: "text", text: "Each party will contribute the following resources: {{resourceContributions}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{confidentialityTerms}} Each party will protect information shared in confidence during this collaboration." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Nature of the Understanding" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{bindingNature}} This Memorandum expresses the parties' intentions and does not create financial obligations except where separately agreed in writing." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Memorandum remains in effect for {{termLength}} unless extended or ended earlier by mutual agreement." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Memorandum is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Party One: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Party Two: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "videography-contract",
    slug: "videography-contract",
    title: "Videography Contract Template",
    description: "Free videography contract template covering shoot details, deliverables, filming fees, usage rights, cancellation, and liability between videographer and client.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Videography Contract Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "projectDescription", "shootDate", "shootLocation", "videoDeliverables", "deliveryTimeline", "projectFee", "depositAmount", "usageRights", "cancellationTerms", "liabilityTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "VIDEOGRAPHY CONTRACT",
        footer: "Binding agreement between the Videographer and the Client."
      },
      styles: {
        primaryColor: "#b91c1c",
        secondaryColor: "#7f1d1d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "VIDEOGRAPHY CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Videographer) and {{partyTwo}} (the Client)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Videographer will film the following project: {{projectDescription}}, on {{shootDate}} at {{shootLocation}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "Final deliverables include {{videoDeliverables}}, provided within {{deliveryTimeline}} of the shoot." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total fee is {{projectFee}}, with a booking deposit of {{depositAmount}} due at signing and the balance due before final delivery." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Usage & Licensing Rights" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{usageRights}} The Videographer retains copyright in the raw footage unless expressly transferred in writing." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Cancellation & Rescheduling" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationTerms}} The deposit is non-refundable if the Client cancels within the notice window." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Liability" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{liabilityTerms}} The Videographer's liability is limited to a refund of amounts paid for undelivered work." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Videographer: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "construction-contract",
    slug: "construction-contract",
    title: "Construction Contract Template",
    description: "Free construction contract template detailing project scope, work schedule, contract price, materials, change orders, warranty, and termination for contractor and owner.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Construction Contract Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "projectScope", "projectAddress", "workSchedule", "contractPrice", "paymentSchedule", "materialsResponsibility", "changeOrderTerms", "warrantyTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "CONSTRUCTION CONTRACT",
        footer: "Binding construction agreement between the Contractor and the Owner."
      },
      styles: {
        primaryColor: "#a16207",
        secondaryColor: "#854d0e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSTRUCTION CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Contractor) and {{partyTwo}} (the Owner)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Work" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Contractor agrees to perform the following work at {{projectAddress}}: {{projectScope}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Work Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "Work will proceed according to the following schedule: {{workSchedule}}, subject to permitting and weather conditions." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Contract Price & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total contract price is {{contractPrice}}, payable per the following schedule: {{paymentSchedule}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Materials" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{materialsResponsibility}} All materials will conform to applicable building codes and specifications." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Change Orders" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{changeOrderTerms}} No change will be performed without a signed change order describing the adjusted scope and price." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Warranty" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{warrantyTerms}} The Contractor warrants workmanship against defects for the stated warranty period." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Upon termination, the Owner will pay for work completed and materials ordered to date." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "8. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Owner: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "dj-services-contract",
    slug: "dj-services-contract",
    title: "DJ Services Contract Template",
    description: "Free DJ services contract template covering event performance, equipment, set duration, fees, overtime, cancellation, and liability between DJ and client.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "DJ Services Contract Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "eventType", "eventDate", "eventVenue", "performanceHours", "equipmentProvided", "performanceFee", "depositAmount", "overtimeRate", "cancellationTerms", "liabilityTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "DJ SERVICES CONTRACT",
        footer: "Binding performance agreement between the DJ and the Client."
      },
      styles: {
        primaryColor: "#9333ea",
        secondaryColor: "#6b21a8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DJ SERVICES CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the DJ) and {{partyTwo}} (the Client)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Performance Details" }] },
          { type: "paragraph", content: [{ type: "text", text: "The DJ will perform at a {{eventType}} on {{eventDate}} at {{eventVenue}} for a set duration of {{performanceHours}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Equipment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The DJ will supply the following equipment: {{equipmentProvided}}. The Client will provide adequate power and safe setup space." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Deposit" }] },
          { type: "paragraph", content: [{ type: "text", text: "The performance fee is {{performanceFee}}, with a booking deposit of {{depositAmount}} due at signing to reserve the date." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Overtime" }] },
          { type: "paragraph", content: [{ type: "text", text: "Performance beyond the booked hours will be charged at {{overtimeRate}}, subject to the DJ's availability and venue approval." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Cancellation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationTerms}} The booking deposit is non-refundable once the date is reserved." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Liability" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{liabilityTerms}} The DJ is not responsible for interruptions caused by venue power failure or circumstances beyond reasonable control." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "7. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "DJ: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] }
        ]
      }
    }
  }
];
