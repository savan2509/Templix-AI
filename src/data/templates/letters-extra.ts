// Auto-enriched "letters" category templates (extra set).
// Each template's document body is written to be genuinely specific to that
// letter's purpose so every template reads as its own distinct document.

export const lettersExtraTemplates: any[] = [
  {
    id: "letter-of-intent",
    slug: "letter-of-intent",
    title: "Letter of Intent Template",
    description: "Free letter of intent template to formally declare interest in a job, program, partnership, or purchase with clear terms.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Letter of Intent Template",
      fields: ["senderName", "senderTitle", "senderAddress", "date", "recipientName", "recipientTitle", "companyName", "opportunityName", "proposedStartDate", "keyTerms"],
      layout: {
        header: "LETTER OF INTENT",
        footer: "This letter expresses intent and is non-binding unless stated otherwise."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#3b82f6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally express my sincere intent to pursue {{opportunityName}} with {{companyName}}. After careful consideration, I am confident this is the right next step, and I want to put my interest in writing so we can move forward on a clear and shared understanding." }] },
          { type: "paragraph", content: [{ type: "text", text: "My goal is to begin on or around {{proposedStartDate}}, subject to our mutual agreement. I bring the commitment, resources, and preparation needed to make this a success, and I am ready to complete any remaining steps promptly so that neither side loses momentum." }] },
          { type: "paragraph", content: [{ type: "text", text: "The principal terms I propose are as follows: " }, { type: "text", marks: [{ type: "bold" }], text: "{{keyTerms}}" }, { type: "text", text: ". I view these as a starting point and welcome your feedback so we can finalize an arrangement that works well for everyone involved." }] },
          { type: "paragraph", content: [{ type: "text", text: "Please treat this letter as a good-faith declaration of my intentions. I would be glad to discuss the details at your convenience and to formalize the next stage once we are aligned." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}} | {{senderAddress}}" }] }
        ]
      }
    }
  },
  {
    id: "donation-request-letter",
    slug: "donation-request-letter",
    title: "Donation Request Letter Template",
    description: "Free donation request letter template for nonprofits and fundraisers to ask sponsors and donors for financial support.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Donation Request Letter Template",
      fields: ["senderName", "senderTitle", "organizationName", "date", "recipientName", "recipientTitle", "companyName", "causeName", "donationGoal", "eventDate", "contactInfo"],
      layout: {
        header: "DONATION REQUEST LETTER",
        footer: "All contributions are tax-deductible to the fullest extent permitted by law."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#f59e0b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "On behalf of {{organizationName}}, I am reaching out to invite you to support {{causeName}}, an initiative close to the heart of our community. Every day we work to make a measurable difference, and generous partners like you are what make that work possible." }] },
          { type: "paragraph", content: [{ type: "text", text: "This year we have set an ambitious but achievable goal of {{donationGoal}} to expand our programs and reach more people in need. Your contribution, of any size, directly funds services, supplies, and the volunteers who deliver them on the ground." }] },
          { type: "paragraph", content: [{ type: "text", text: "We would be honored to recognize {{companyName}} as a supporter at our upcoming event on {{eventDate}}, where your generosity will be celebrated before the community you help serve. Sponsorship also offers meaningful visibility for your brand among an engaged local audience." }] },
          { type: "paragraph", content: [{ type: "text", text: "To contribute or learn more, please reach me directly at {{contactInfo}}. Thank you for considering this request; your kindness will have a lasting and visible impact." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}, {{organizationName}}" }] }
        ]
      }
    }
  },
  {
    id: "refund-request-letter",
    slug: "refund-request-letter",
    title: "Refund Request Letter Template",
    description: "Free refund request letter template to formally ask a company for a money-back reimbursement on a faulty product or service.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Refund Request Letter Template",
      fields: ["senderName", "senderTitle", "senderAddress", "date", "recipientName", "recipientTitle", "companyName", "orderNumber", "purchaseDate", "productName", "refundAmount", "reason"],
      layout: {
        header: "REFUND REQUEST LETTER",
        footer: "Please retain a copy of this letter for your records."
      },
      styles: {
        primaryColor: "#991b1b",
        secondaryColor: "#dc2626"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally request a full refund for {{productName}}, which I purchased from {{companyName}} on {{purchaseDate}} under order number {{orderNumber}}. Unfortunately, the item has not met the standard I reasonably expected." }] },
          { type: "paragraph", content: [{ type: "text", text: "The specific issue is as follows: {{reason}}. I have attempted to resolve this through the usual channels without success, which is why I am now submitting a written request so there is a clear record of my concern and my requested outcome." }] },
          { type: "paragraph", content: [{ type: "text", text: "In light of the above, I am requesting a refund of " }, { type: "text", marks: [{ type: "bold" }], text: "{{refundAmount}}" }, { type: "text", text: " to my original payment method. I have enclosed copies of my receipt and relevant correspondence to support this claim." }] },
          { type: "paragraph", content: [{ type: "text", text: "I trust {{companyName}} values its customers and will resolve this fairly. Please confirm the refund in writing within fourteen days. You may reach me at {{senderAddress}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "condolence-letter",
    slug: "condolence-letter",
    title: "Condolence Letter Template",
    description: "Free condolence letter template to express heartfelt sympathy and support to a colleague, friend, or family after a loss.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Condolence Letter Template",
      fields: ["senderName", "senderTitle", "date", "recipientName", "recipientTitle", "companyName", "deceasedName", "relationship", "sharedMemory"],
      layout: {
        header: "WITH DEEPEST SYMPATHY",
        footer: "You are in our thoughts during this difficult time."
      },
      styles: {
        primaryColor: "#374151",
        secondaryColor: "#6b7280"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I was deeply saddened to learn of the passing of {{deceasedName}}, your {{relationship}}. Please accept my most heartfelt condolences during this profoundly difficult time. There are no words that can ease such a loss, but I wanted you to know that you are in my thoughts." }] },
          { type: "paragraph", content: [{ type: "text", text: "I will always remember {{deceasedName}} for the warmth and kindness they brought to everyone around them. {{sharedMemory}}. It is a memory I will hold onto, and I hope, in time, that the many good memories bring you a measure of comfort." }] },
          { type: "paragraph", content: [{ type: "text", text: "Please do not feel any need to respond to this letter. If there is anything at all I can do to help, whether practical support or simply a listening ear, I am here for you without hesitation." }] },
          { type: "paragraph", content: [{ type: "text", text: "May you find strength in the love of those around you and peace in the days ahead." }] },
          { type: "paragraph", content: [{ type: "text", text: "With deepest sympathy," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "congratulations-letter",
    slug: "congratulations-letter",
    title: "Congratulations Letter Template",
    description: "Free congratulations letter template to celebrate a promotion, achievement, award, or milestone with a warm professional message.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Congratulations Letter Template",
      fields: ["senderName", "senderTitle", "date", "recipientName", "recipientTitle", "companyName", "achievement", "achievementDate"],
      layout: {
        header: "CONGRATULATIONS",
        footer: "Wishing you continued success in all that lies ahead."
      },
      styles: {
        primaryColor: "#15803d",
        secondaryColor: "#22c55e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Congratulations on {{achievement}}! I was thrilled to hear the news on {{achievementDate}}, and I could not let the moment pass without writing to tell you how genuinely proud and happy I am for you." }] },
          { type: "paragraph", content: [{ type: "text", text: "This accomplishment is a direct reflection of your talent, dedication, and the hard work you have consistently put in. Success like this is never an accident, and everyone who knows you can see that it has been thoroughly earned through your persistence and skill." }] },
          { type: "paragraph", content: [{ type: "text", text: "I have no doubt this is only the beginning. You have a bright road ahead of you, and I look forward to seeing all the remarkable things you will go on to achieve. Please take a moment to celebrate this well-deserved milestone." }] },
          { type: "paragraph", content: [{ type: "text", text: "Once again, my warmest congratulations to you." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "transfer-request-letter",
    slug: "transfer-request-letter",
    title: "Transfer Request Letter Template",
    description: "Free transfer request letter template for employees to formally ask their employer for a relocation to another branch or department.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Transfer Request Letter Template",
      fields: ["senderName", "senderTitle", "employeeId", "currentDepartment", "date", "recipientName", "recipientTitle", "companyName", "requestedLocation", "requestedDepartment", "transferReason", "proposedDate"],
      layout: {
        header: "EMPLOYEE TRANSFER REQUEST",
        footer: "Copy filed with Human Resources for review and approval."
      },
      styles: {
        primaryColor: "#1d4ed8",
        secondaryColor: "#60a5fa"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally request a transfer from my current role in the {{currentDepartment}} to {{requestedDepartment}} at our {{requestedLocation}} location. As a committed member of {{companyName}} (Employee ID {{employeeId}}), I hope this move can be arranged with as little disruption as possible." }] },
          { type: "paragraph", content: [{ type: "text", text: "The primary reason for my request is {{transferReason}}. This change would allow me to continue contributing effectively to the company while better aligning my role with both my personal circumstances and my long-term professional goals." }] },
          { type: "paragraph", content: [{ type: "text", text: "I am confident that my experience and knowledge of our processes will transfer smoothly to the new team. I am also happy to assist in training a successor and ensuring a complete handover of my current responsibilities before the move." }] },
          { type: "paragraph", content: [{ type: "text", text: "I would be grateful if this transfer could take effect on or around {{proposedDate}}. Thank you for considering my request; I am glad to discuss it further at your convenience." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}, {{currentDepartment}}" }] }
        ]
      }
    }
  },
  {
    id: "employment-verification-letter",
    slug: "employment-verification-letter",
    title: "Employment Verification Letter Template",
    description: "Free employment verification letter template for employers to confirm an employee's job title, salary, and tenure for third parties.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Employment Verification Letter Template",
      fields: ["senderName", "senderTitle", "organizationName", "date", "recipientName", "recipientTitle", "companyName", "employeeName", "employeeTitle", "employmentStartDate", "employmentStatus", "annualSalary", "contactInfo"],
      layout: {
        header: "EMPLOYMENT VERIFICATION LETTER",
        footer: "Issued at the employee's request for verification purposes only."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#14b8a6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "This letter serves to formally verify the employment of {{employeeName}} with {{organizationName}}. It is issued at the employee's request and may be relied upon as an accurate statement of their current standing with our organization." }] },
          { type: "paragraph", content: [{ type: "text", text: "I can confirm that {{employeeName}} has been employed with us since {{employmentStartDate}} and currently holds the position of {{employeeTitle}}. Their present employment status is {{employmentStatus}}, and they remain in good standing." }] },
          { type: "paragraph", content: [{ type: "text", text: "For the purposes of this verification, the employee's current gross annual compensation is {{annualSalary}}. Please note that this figure is provided in confidence and should be used solely for the intended verification." }] },
          { type: "paragraph", content: [{ type: "text", text: "Should you require any further details or wish to confirm the information above, please contact me directly at {{contactInfo}}. I am happy to assist." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}, {{organizationName}}" }] }
        ]
      }
    }
  },
  {
    id: "notice-to-vacate-letter",
    slug: "notice-to-vacate-letter",
    title: "Notice to Vacate Letter Template",
    description: "Free notice to vacate letter template for tenants to formally inform a landlord of their intent to move out of a rental property.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Notice to Vacate Letter Template",
      fields: ["senderName", "senderTitle", "propertyAddress", "date", "recipientName", "recipientTitle", "companyName", "moveOutDate", "noticePeriod", "forwardingAddress"],
      layout: {
        header: "NOTICE TO VACATE",
        footer: "Please confirm receipt and schedule the final move-out inspection."
      },
      styles: {
        primaryColor: "#7c2d12",
        secondaryColor: "#ea580c"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Please accept this letter as my formal written notice that I intend to vacate the rental property located at {{propertyAddress}}. In accordance with my lease agreement, I am providing the required {{noticePeriod}} notice as of the date above." }] },
          { type: "paragraph", content: [{ type: "text", text: "My final day of occupancy will be {{moveOutDate}}, at which point I will return all keys and leave the property clean and in good condition. I would be grateful if we could arrange a mutually convenient time for the final move-out inspection." }] },
          { type: "paragraph", content: [{ type: "text", text: "Please send my security deposit refund, along with any itemized deductions, to my forwarding address: {{forwardingAddress}}. Kindly confirm in writing that you have received this notice and note the agreed move-out date." }] },
          { type: "paragraph", content: [{ type: "text", text: "Thank you for your attention to this matter and for a positive tenancy. I appreciate your cooperation in making the transition a smooth one." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "scholarship-application-letter",
    slug: "scholarship-application-letter",
    title: "Scholarship Application Letter Template",
    description: "Free scholarship application letter template for students to request financial aid by highlighting achievements, goals, and financial need.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Scholarship Application Letter Template",
      fields: ["senderName", "senderTitle", "studentId", "date", "recipientName", "recipientTitle", "companyName", "scholarshipName", "programName", "institutionName", "careerGoal"],
      layout: {
        header: "SCHOLARSHIP APPLICATION LETTER",
        footer: "Supporting documents and transcripts enclosed for review."
      },
      styles: {
        primaryColor: "#5b21b6",
        secondaryColor: "#8b5cf6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally apply for the {{scholarshipName}}. As a dedicated student enrolled in the {{programName}} at {{institutionName}}, I would be honored to be considered for this award, which would make a meaningful difference in my education." }] },
          { type: "paragraph", content: [{ type: "text", text: "Throughout my studies I have maintained strong academic results while balancing part-time work and volunteering in my community. These experiences have sharpened my discipline and deepened my commitment to my field, even in the face of financial pressure." }] },
          { type: "paragraph", content: [{ type: "text", text: "My long-term ambition is to {{careerGoal}}, and this scholarship would ease the financial burden that currently limits how fully I can focus on my studies. With your support, I could devote more time to research, coursework, and the practical experience my goal requires." }] },
          { type: "paragraph", content: [{ type: "text", text: "I have enclosed my transcripts and supporting documents for your review. Thank you for considering my application; I would welcome the opportunity to discuss it further." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}} | Student ID: {{studentId}}" }] }
        ]
      }
    }
  },
  {
    id: "price-negotiation-letter",
    slug: "price-negotiation-letter",
    title: "Price Negotiation Letter Template",
    description: "Free price negotiation letter template for buyers to professionally request a better rate, discount, or revised quote from a supplier.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Price Negotiation Letter Template",
      fields: ["senderName", "senderTitle", "buyerCompany", "date", "recipientName", "recipientTitle", "companyName", "quoteReference", "currentPrice", "proposedPrice", "orderVolume"],
      layout: {
        header: "PRICE NEGOTIATION LETTER",
        footer: "Looking forward to a mutually beneficial long-term partnership."
      },
      styles: {
        primaryColor: "#0e7490",
        secondaryColor: "#06b6d4"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Thank you for your recent quotation (reference {{quoteReference}}). On behalf of {{buyerCompany}}, I appreciate the detail you provided and the quality of the products your team offers. I am writing to discuss the pricing so we can move toward an agreement." }] },
          { type: "paragraph", content: [{ type: "text", text: "While we are keen to proceed, the quoted price of {{currentPrice}} sits above our current budget for this category. Based on comparable offers and the volume we intend to commit to, we would like to propose a revised unit price of {{proposedPrice}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "In return, we are prepared to place a committed order of {{orderVolume}} and to explore a longer-term supply relationship. We believe consistent, repeat business justifies preferential pricing and creates real value on both sides of the arrangement." }] },
          { type: "paragraph", content: [{ type: "text", text: "I am confident we can reach terms that work for both companies and would welcome the chance to finalize this quickly. Please let me know your thoughts on the proposed figure." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}, {{buyerCompany}}" }] }
        ]
      }
    }
  }
];
