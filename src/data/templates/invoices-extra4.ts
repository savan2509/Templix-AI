// invoices-extra4.ts — 20 SEO-targeted invoice templates (Fifth wave)
// Each template has maximally distinct, specialized fields and rich editorState content.

export const invoicesExtra4Templates: any[] = [
  {
    "id": "invoice-free-template",
    "slug": "invoice-free-template",
    "title": "Free Invoice Template",
    "description": "Simple, professional free invoice template. Download as PDF or Word in seconds — no sign-up or credit card required.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-free-template.jpg",
    "content": {
      "title": "Free Invoice Template",
      "fields": [
        "senderName",
        "senderBusinessName",
        "senderEmail",
        "senderPhone",
        "senderAddress",
        "recipientName",
        "recipientCompany",
        "recipientAddress",
        "invoiceNumber",
        "invoiceDate",
        "dueDate",
        "serviceDescription",
        "quantity",
        "unitRate",
        "lineTotal",
        "discountAmount",
        "taxPercent",
        "taxAmount",
        "invoiceTotal",
        "paymentInstructions",
        "notes"
      ],
      "layout": {
        "header": "INVOICE",
        "footer": "Thank you for your business!"
      },
      "styles": {"primaryColor": "#1d4ed8",
        "secondaryColor": "#1e3a8a", "layoutVariant": 1, "headingStyle": 0 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice No.: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Date: {{invoiceDate}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "From"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Name: "
              },
              {
                "type": "text",
                "text": "{{senderName}} — {{senderBusinessName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{senderAddress}}   |   {{senderEmail}}   |   {{senderPhone}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Bill To"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Client: "
              },
              {
                "type": "text",
                "text": "{{recipientName}} — {{recipientCompany}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{recipientAddress}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Itemized Services"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Service Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Qty"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rate"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Line Total"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{serviceDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{quantity}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{unitRate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Discount: "
              },
              {
                "type": "text",
                "text": "({{discountAmount}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax ({{taxPercent}}%): "
              },
              {
                "type": "text",
                "text": "{{taxAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "TOTAL DUE: "
              },
              {
                "type": "text",
                "text": "{{invoiceTotal}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Payment Instructions"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{paymentInstructions}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Notes: {{notes}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-gst-standard",
    "slug": "invoice-gst-standard",
    "title": "GST Invoice Template",
    "description": "GST-compliant tax invoice for Indian businesses. Includes GSTIN, HSN/SAC codes, and CGST/SGST/IGST auto-splits.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-gst-standard.jpg",
    "content": {
      "title": "GST Invoice Template",
      "fields": [
        "sellerLegalName",
        "sellerGSTIN",
        "sellerPAN",
        "sellerStateCode",
        "sellerAddress",
        "sellerPhone",
        "buyerLegalName",
        "buyerGSTIN",
        "buyerPAN",
        "buyerStateCode",
        "buyerAddress",
        "invoiceNumber",
        "invoiceDate",
        "placeOfSupply",
        "hsnSacCode",
        "goodsOrServiceDescription",
        "quantity",
        "unit",
        "taxableValue",
        "cgstRate",
        "cgstAmount",
        "sgstRate",
        "sgstAmount",
        "igstRate",
        "igstAmount",
        "cessAmount",
        "invoiceTotalInWords",
        "grandTotal"
      ],
      "layout": {
        "header": "TAX INVOICE (GST)",
        "footer": "E. & O.E. — This is a computer-generated invoice. No signature required."
      },
      "styles": {"primaryColor": "#15803d",
        "secondaryColor": "#14532d", "layoutVariant": 2, "headingStyle": 0 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "TAX INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice No.: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Date: {{invoiceDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Place of Supply: "
              },
              {
                "type": "text",
                "text": "{{placeOfSupply}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Seller / Supplier"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Legal Name: "
              },
              {
                "type": "text",
                "text": "{{sellerLegalName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "GSTIN: "
              },
              {
                "type": "text",
                "text": "{{sellerGSTIN}}   PAN: {{sellerPAN}}   State Code: {{sellerStateCode}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{sellerAddress}}   |   {{sellerPhone}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Buyer / Recipient"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Legal Name: "
              },
              {
                "type": "text",
                "text": "{{buyerLegalName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "GSTIN: "
              },
              {
                "type": "text",
                "text": "{{buyerGSTIN}}   PAN: {{buyerPAN}}   State Code: {{buyerStateCode}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{buyerAddress}}"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "HSN/SAC"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Qty"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Unit"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Taxable Value"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CGST"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "SGST"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "IGST"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Cess"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Total"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{hsnSacCode}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{goodsOrServiceDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{quantity}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{unit}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{taxableValue}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cgstRate}}% — Rs.{{cgstAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{sgstRate}}% — Rs.{{sgstAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{igstRate}}% — Rs.{{igstAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rs.{{cessAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rs.{{grandTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Amount in Words: "
              },
              {
                "type": "text",
                "text": "{{invoiceTotalInWords}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Grand Total: "
              },
              {
                "type": "text",
                "text": "Rs. {{grandTotal}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-freelance-v2",
    "slug": "invoice-freelance-v2",
    "title": "Freelance Invoice Template",
    "description": "Flexible freelance invoice for independent contractors — supports both hourly billing and flat milestone fees.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-freelance-v2.jpg",
    "content": {
      "title": "Freelance Invoice Template",
      "fields": [
        "freelancerFullName",
        "tradeName",
        "taxId",
        "freelancerEmail",
        "freelancerWebsite",
        "freelancerPhone",
        "clientCompanyName",
        "clientContactPerson",
        "clientEmail",
        "projectTitle",
        "contractReference",
        "invoiceNumber",
        "invoiceDate",
        "paymentDueDate",
        "billingPeriodStart",
        "billingPeriodEnd",
        "taskDescription",
        "billingType",
        "hoursWorked",
        "hourlyRate",
        "milestoneDescription",
        "milestoneFlatFee",
        "subtotal",
        "earlyPaymentDiscount",
        "taxRate",
        "taxAmount",
        "amountDue",
        "preferredPaymentMethod",
        "bankName",
        "accountNumber",
        "ifscSwiftCode",
        "invoiceNote"
      ],
      "layout": {
        "header": "FREELANCE INVOICE",
        "footer": "Ownership of all deliverables transfers upon receipt of final payment."
      },
      "styles": {"primaryColor": "#6366f1",
        "secondaryColor": "#312e81", "layoutVariant": 3, "headingStyle": 0 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "FREELANCE INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Period: {{billingPeriodStart}} – {{billingPeriodEnd}}   |   Due: {{paymentDueDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Freelancer"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Name / Trade: "
              },
              {
                "type": "text",
                "text": "{{freelancerFullName}} — {{tradeName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax ID: "
              },
              {
                "type": "text",
                "text": "{{taxId}}   |   Web: {{freelancerWebsite}}   |   Tel: {{freelancerPhone}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Email: {{freelancerEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Company: "
              },
              {
                "type": "text",
                "text": "{{clientCompanyName}}   Attn: {{clientContactPerson}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{clientEmail}}   |   Project: {{projectTitle}}   |   Contract Ref: {{contractReference}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Billable Work"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Task / Milestone"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Type"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Hours"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rate"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Flat Fee"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{taskDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Hourly"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{hoursWorked}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{hourlyRate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "—"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{hourlyTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{milestoneDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Milestone"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "—"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "—"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{milestoneFlatFee}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{milestoneFlatFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Early Payment Discount: "
              },
              {
                "type": "text",
                "text": "({{earlyPaymentDiscount}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax ({{taxRate}}%): "
              },
              {
                "type": "text",
                "text": "{{taxAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "AMOUNT DUE: "
              },
              {
                "type": "text",
                "text": "{{amountDue}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Bank Transfer Details"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Bank: {{bankName}}   |   A/C: {{accountNumber}}   |   IFSC/SWIFT: {{ifscSwiftCode}}   |   Method: {{preferredPaymentMethod}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Note: {{invoiceNote}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-consulting-v2",
    "slug": "invoice-consulting-v2",
    "title": "Consulting Invoice Template",
    "description": "Professional consulting invoice for management and IT consultants. Supports multi-phase engagements, expense reimbursement, and retainer offsets.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-consulting-v2.jpg",
    "content": {
      "title": "Consulting Invoice Template",
      "fields": [
        "firmName",
        "firmRegistrationNumber",
        "leadConsultantName",
        "consultantTitle",
        "firmAddress",
        "firmEmail",
        "firmPhone",
        "clientOrganization",
        "clientDepartment",
        "clientAuthorizedSignatory",
        "engagementId",
        "engagementTitle",
        "statementOfWorkRef",
        "invoiceNumber",
        "invoiceDate",
        "billingPeriod",
        "dueDate",
        "phase1Description",
        "phase1Fee",
        "phase2Description",
        "phase2Fee",
        "phase3Description",
        "phase3Fee",
        "travelExpenses",
        "accommodationExpenses",
        "miscExpenses",
        "subtotalFees",
        "subtotalExpenses",
        "totalBeforeRetainer",
        "retainerBalance",
        "outstandingBalance",
        "paymentCurrency",
        "wireTransferDetails",
        "latePaymentPenalty"
      ],
      "layout": {
        "header": "CONSULTING SERVICES INVOICE",
        "footer": "All intellectual property created during this engagement remains the property of the consulting firm until payment is received in full."
      },
      "styles": {"primaryColor": "#0f172a",
        "secondaryColor": "#1e40af", "layoutVariant": 4, "headingStyle": 0 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "CONSULTING SERVICES INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Engagement ID: {{engagementId}}   |   Billing Period: {{billingPeriod}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "SOW Reference: "
              },
              {
                "type": "text",
                "text": "{{statementOfWorkRef}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Consulting Firm"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Firm: "
              },
              {
                "type": "text",
                "text": "{{firmName}} (Reg. #{{firmRegistrationNumber}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Lead Consultant: "
              },
              {
                "type": "text",
                "text": "{{leadConsultantName}}, {{consultantTitle}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{firmAddress}}   |   {{firmEmail}}   |   {{firmPhone}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Organization: "
              },
              {
                "type": "text",
                "text": "{{clientOrganization}} — {{clientDepartment}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Authorized Signatory: "
              },
              {
                "type": "text",
                "text": "{{clientAuthorizedSignatory}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Fees by Phase"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Phase / Deliverable"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fee ({{paymentCurrency}})"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{phase1Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{phase1Fee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{phase2Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{phase2Fee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{phase3Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{phase3Fee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Expense Reimbursements"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Expense Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount ({{paymentCurrency}})"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Travel & Flights"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{travelExpenses}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Accommodation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{accommodationExpenses}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Miscellaneous"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{miscExpenses}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal — Fees: "
              },
              {
                "type": "text",
                "text": "{{subtotalFees}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal — Expenses: "
              },
              {
                "type": "text",
                "text": "{{subtotalExpenses}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Total Before Retainer: "
              },
              {
                "type": "text",
                "text": "{{totalBeforeRetainer}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Retainer Balance Applied: "
              },
              {
                "type": "text",
                "text": "({{retainerBalance}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "OUTSTANDING BALANCE: "
              },
              {
                "type": "text",
                "text": "{{outstandingBalance}} {{paymentCurrency}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Wire Transfer Details: {{wireTransferDetails}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Late Payment Penalty: {{latePaymentPenalty}} per month after due date."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-photography-v2",
    "slug": "invoice-photography-v2",
    "title": "Photography Invoice Template",
    "description": "Photography studio invoice covering shoot fees, post-processing, print packages, travel costs, and image licensing rights.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-photography-v2.jpg",
    "content": {
      "title": "Photography Invoice Template",
      "fields": [
        "photographerFullName",
        "studioName",
        "studioAddress",
        "studioPhone",
        "studioEmail",
        "studioWebsite",
        "clientName",
        "clientEmail",
        "clientPhone",
        "eventType",
        "eventDate",
        "eventStartTime",
        "eventEndTime",
        "shootLocation",
        "deliverableFormat",
        "deliverableDeadline",
        "invoiceNumber",
        "invoiceDate",
        "dueDate",
        "shootDurationHours",
        "shootHourlyRate",
        "shootFeeTotal",
        "editedImagesCount",
        "editingFeePerImage",
        "editingFeeTotal",
        "printPackageDescription",
        "printPackagePrice",
        "albumDescription",
        "albumPrice",
        "travelDistanceKm",
        "travelRatePerKm",
        "travelTotal",
        "licensingType",
        "licensingFee",
        "depositPaid",
        "balanceDue",
        "paymentMethod",
        "cancellationPolicy"
      ],
      "layout": {
        "header": "PHOTOGRAPHY INVOICE",
        "footer": "All images remain copyright of the photographer until full payment is received."
      },
      "styles": {"primaryColor": "#7c3aed",
        "secondaryColor": "#4c1d95", "layoutVariant": 5, "headingStyle": 0 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "PHOTOGRAPHY INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Date: {{invoiceDate}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Photographer / Studio"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Photographer: "
              },
              {
                "type": "text",
                "text": "{{photographerFullName}} — {{studioName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{studioAddress}}   |   {{studioPhone}}   |   {{studioEmail}}   |   {{studioWebsite}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Client: "
              },
              {
                "type": "text",
                "text": "{{clientName}}   |   {{clientEmail}}   |   {{clientPhone}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Shoot Details"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Event: "
              },
              {
                "type": "text",
                "text": "{{eventType}}   Date: {{eventDate}}   Time: {{eventStartTime}} – {{eventEndTime}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Location: "
              },
              {
                "type": "text",
                "text": "{{shootLocation}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Deliverable Format: "
              },
              {
                "type": "text",
                "text": "{{deliverableFormat}}   Deadline: {{deliverableDeadline}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Invoice Breakdown"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Service Item"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Detail"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rate"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Photography Session"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{shootDurationHours}} hrs @ {{shootHourlyRate}}/hr"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "—"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{shootFeeTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Photo Editing & Retouching"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{editedImagesCount}} images @ {{editingFeePerImage}}/img"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "—"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{editingFeeTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Print Package"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{printPackageDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{printPackagePrice}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Photo Album / Book"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{albumDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{albumPrice}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Travel"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{travelDistanceKm}} km @ {{travelRatePerKm}}/km"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "—"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{travelTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Image Licensing ({{licensingType}})"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rights grant"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{licensingFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Deposit Paid: "
              },
              {
                "type": "text",
                "text": "({{depositPaid}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "BALANCE DUE: "
              },
              {
                "type": "text",
                "text": "{{balanceDue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment: "
              },
              {
                "type": "text",
                "text": "{{paymentMethod}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Cancellation Policy: {{cancellationPolicy}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-graphic-design-v2",
    "slug": "invoice-graphic-design-v2",
    "title": "Graphic Design Invoice Template",
    "description": "Creative design studio invoice covering logo design, brand identity, print production, digital assets, and intellectual property transfer.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-graphic-design-v2.jpg",
    "content": {
      "title": "Graphic Design Invoice Template",
      "fields": [
        "designerName",
        "studioName",
        "studioAddress",
        "designerEmail",
        "designerPortfolio",
        "clientBrandName",
        "clientContactName",
        "clientEmail",
        "projectCodename",
        "brandCategory",
        "invoiceNumber",
        "invoiceDate",
        "projectStartDate",
        "projectDeliveryDate",
        "dueDate",
        "conceptRounds",
        "logoPackageType",
        "logoDesignFee",
        "brandGuidelinesFee",
        "printCollaterlDescription",
        "printCollaterlFee",
        "socialMediaKitDescription",
        "socialMediaKitFee",
        "animationOrMotionFee",
        "stockAssetLicenses",
        "stockAssetCost",
        "revisionsIncluded",
        "extraRevisionFee",
        "ipTransferFee",
        "subtotal",
        "tax",
        "finalTotal",
        "paymentTerms",
        "sourceFilesDelivery"
      ],
      "layout": {
        "header": "CREATIVE DESIGN INVOICE",
        "footer": "Source files are delivered only upon receipt of full payment. IP transfers upon settlement."
      },
      "styles": {"primaryColor": "#db2777",
        "secondaryColor": "#831843", "layoutVariant": 0, "headingStyle": 1 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "CREATIVE DESIGN INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Project: {{projectCodename}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Start: "
              },
              {
                "type": "text",
                "text": "{{projectStartDate}}   |   Delivery: {{projectDeliveryDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Designer / Studio"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Designer: "
              },
              {
                "type": "text",
                "text": "{{designerName}} — {{studioName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{studioAddress}}   |   {{designerEmail}}   |   Portfolio: {{designerPortfolio}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Brand: "
              },
              {
                "type": "text",
                "text": "{{clientBrandName}} ({{brandCategory}})   Attn: {{clientContactName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Email: {{clientEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Design Services"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Deliverable"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Specification"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fee"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Logo Design Package"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{logoPackageType}} — {{conceptRounds}} concept rounds"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{logoDesignFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Brand Style Guide"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Typography, colour palette, usage rules"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{brandGuidelinesFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Print Collateral"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{printCollaterlDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{printCollaterlFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Social Media Kit"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{socialMediaKitDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{socialMediaKitFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Motion / Animation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Brand animations & GIFs"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{animationOrMotionFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Stock Asset Licenses"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{stockAssetLicenses}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{stockAssetCost}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Extra Revisions (beyond {{revisionsIncluded}})"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Per round"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{extraRevisionFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "IP & Copyright Transfer"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Full ownership transfer"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{ipTransferFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax: "
              },
              {
                "type": "text",
                "text": "{{tax}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "FINAL TOTAL: "
              },
              {
                "type": "text",
                "text": "{{finalTotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment Terms: "
              },
              {
                "type": "text",
                "text": "{{paymentTerms}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Source File Delivery Method: {{sourceFilesDelivery}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-contractor-v2",
    "slug": "invoice-contractor-v2",
    "title": "Contractor Invoice Template",
    "description": "Construction contractor invoice with labor crew breakdown, materials, subcontractor costs, equipment, permit fees, and retention.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-contractor-v2.jpg",
    "content": {
      "title": "Contractor Invoice Template",
      "fields": [
        "contractorBusinessName",
        "contractorLicenseNumber",
        "contractorInsurancePolicy",
        "contractorAddress",
        "contractorPhone",
        "contractorEmail",
        "clientName",
        "clientAddress",
        "projectSiteAddress",
        "buildingPermitNumber",
        "contractNumber",
        "invoiceNumber",
        "invoiceDate",
        "dueDate",
        "workOrderPeriod",
        "leadCrewMember",
        "crewSize",
        "laborHours",
        "laborRatePerHour",
        "laborTotal",
        "materialsList",
        "materialsTotal",
        "subcontractorName",
        "subcontractorWork",
        "subcontractorCost",
        "equipmentRentalDescription",
        "equipmentRentalCost",
        "permitAndInspectionFees",
        "disposalAndWasteFees",
        "insuranceSurcharge",
        "subtotal",
        "salesTax",
        "retentionPercent",
        "retentionAmount",
        "previouslyInvoiced",
        "currentAmountDue",
        "paymentDueDate",
        "checkOrWireDetails"
      ],
      "layout": {
        "header": "CONSTRUCTION INVOICE",
        "footer": "All work is warranted for 12 months from project completion date. License #{{contractorLicenseNumber}}"
      },
      "styles": {"primaryColor": "#92400e",
        "secondaryColor": "#451a03", "layoutVariant": 1, "headingStyle": 1 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "CONSTRUCTION INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Contract #: {{contractNumber}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Work Period: "
              },
              {
                "type": "text",
                "text": "{{workOrderPeriod}}   |   Permit #: {{buildingPermitNumber}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Contractor"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Business: "
              },
              {
                "type": "text",
                "text": "{{contractorBusinessName}}   License: {{contractorLicenseNumber}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Insurance Policy: "
              },
              {
                "type": "text",
                "text": "{{contractorInsurancePolicy}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{contractorAddress}}   |   {{contractorPhone}}   |   {{contractorEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client / Owner"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Client: "
              },
              {
                "type": "text",
                "text": "{{clientName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Property Address: "
              },
              {
                "type": "text",
                "text": "{{projectSiteAddress}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Billing Address: {{clientAddress}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Labor"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Lead Crew"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Crew Size"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Hours Worked"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rate/hr"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Total Labor"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{leadCrewMember}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{crewSize}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{laborHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{laborRatePerHour}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{laborTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Materials & Subcontractors"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Materials"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{materialsList}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{materialsTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Subcontractor — {{subcontractorName}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{subcontractorWork}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{subcontractorCost}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Equipment Rental"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{equipmentRentalDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{equipmentRentalCost}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Permits & Inspections"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Municipal fees"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{permitAndInspectionFees}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Disposal & Site Cleanup"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Waste removal"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{disposalAndWasteFees}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Insurance Surcharge"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Project liability premium"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{insuranceSurcharge}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Sales Tax: "
              },
              {
                "type": "text",
                "text": "{{salesTax}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Retention ({{retentionPercent}}%): "
              },
              {
                "type": "text",
                "text": "({{retentionAmount}}) — held until sign-off"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Previously Invoiced: "
              },
              {
                "type": "text",
                "text": "({{previouslyInvoiced}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "CURRENT AMOUNT DUE: "
              },
              {
                "type": "text",
                "text": "{{currentAmountDue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Payment: {{checkOrWireDetails}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-digital-agency",
    "slug": "invoice-digital-agency",
    "title": "Digital Agency Invoice Template",
    "description": "Digital marketing agency monthly retainer invoice for SEO, PPC, social media, content, analytics, and email marketing services.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-digital-agency.jpg",
    "content": {
      "title": "Digital Agency Invoice Template",
      "fields": [
        "agencyName",
        "agencyRegistrationNumber",
        "accountManagerName",
        "agencyAddress",
        "agencyEmail",
        "agencyPhone",
        "clientBrandName",
        "clientMarketerName",
        "clientEmail",
        "clientAccountId",
        "campaignBundleName",
        "invoiceNumber",
        "invoiceDate",
        "retainerMonth",
        "dueDate",
        "seoKeywordsManaged",
        "seoMonthlyFee",
        "ppcAdSpendBudget",
        "ppcManagementFeePercent",
        "ppcManagementFeeAmount",
        "socialPlatforms",
        "socialPostsPerMonth",
        "socialManagementFee",
        "contentPiecesDelivered",
        "contentMonthlyFee",
        "emailCampaignsDelivered",
        "emailMarketingFee",
        "conversionRateOptimizationFee",
        "analyticsAndReportingFee",
        "additionalServiceDescription",
        "additionalServiceFee",
        "subtotal",
        "agencyTax",
        "invoiceTotal",
        "paymentMethod",
        "autoRenewalNote"
      ],
      "layout": {
        "header": "DIGITAL MARKETING INVOICE",
        "footer": "Campaign performance reports are delivered on the 5th of every month."
      },
      "styles": {"primaryColor": "#0891b2",
        "secondaryColor": "#164e63", "layoutVariant": 2, "headingStyle": 1 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "DIGITAL MARKETING INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Retainer Month: {{retainerMonth}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Client Account ID: "
              },
              {
                "type": "text",
                "text": "{{clientAccountId}}   |   Campaign Bundle: {{campaignBundleName}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Agency"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Agency: "
              },
              {
                "type": "text",
                "text": "{{agencyName}} (Reg. #{{agencyRegistrationNumber}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Account Manager: "
              },
              {
                "type": "text",
                "text": "{{accountManagerName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{agencyAddress}}   |   {{agencyEmail}}   |   {{agencyPhone}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Brand: "
              },
              {
                "type": "text",
                "text": "{{clientBrandName}}   Attn: {{clientMarketerName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{clientEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Monthly Retainer Services"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Service"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Scope"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Monthly Fee"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "SEO Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{seoKeywordsManaged}} keywords tracked & optimized"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{seoMonthlyFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "PPC Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Ad Spend: {{ppcAdSpendBudget}} × {{ppcManagementFeePercent}}% mgmt fee"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{ppcManagementFeeAmount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Social Media Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{socialPlatforms}} | {{socialPostsPerMonth}} posts/month"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{socialManagementFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Content Marketing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{contentPiecesDelivered}} pieces delivered"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{contentMonthlyFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Email Marketing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{emailCampaignsDelivered}} campaigns"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{emailMarketingFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CRO Optimization"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Landing page testing & analysis"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{conversionRateOptimizationFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Analytics & Reporting"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Monthly performance report"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{analyticsAndReportingFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{additionalServiceDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Ad hoc"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{additionalServiceFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax: "
              },
              {
                "type": "text",
                "text": "{{agencyTax}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "INVOICE TOTAL: "
              },
              {
                "type": "text",
                "text": "{{invoiceTotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment Method: "
              },
              {
                "type": "text",
                "text": "{{paymentMethod}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Auto-Renewal: {{autoRenewalNote}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-web-development-v2",
    "slug": "invoice-web-development-v2",
    "title": "Web Development Invoice Template",
    "description": "Web & app development invoice with discovery, design, front-end, back-end, API integration, QA, deployment, and ongoing maintenance line items.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-web-development-v2.jpg",
    "content": {
      "title": "Web Development Invoice Template",
      "fields": [
        "developerOrAgencyName",
        "developerEmail",
        "developerPhone",
        "githubOrPortfolioUrl",
        "clientCompanyName",
        "clientTechContact",
        "clientEmail",
        "projectName",
        "projectType",
        "repositoryUrl",
        "liveProjectUrl",
        "hostingProvider",
        "contractNumber",
        "invoiceNumber",
        "invoiceDate",
        "projectStartDate",
        "estimatedGoLiveDate",
        "dueDate",
        "discoveryAndPlanningHours",
        "discoveryRate",
        "discoveryFee",
        "uxWireframingHours",
        "uxRate",
        "uxFee",
        "frontendDevelopmentHours",
        "frontendRate",
        "frontendFee",
        "backendDevelopmentHours",
        "backendRate",
        "backendFee",
        "apiIntegrations",
        "apiIntegrationFee",
        "databaseDesignFee",
        "thirdPartyLicenses",
        "thirdPartyLicenseCost",
        "qaTestingHours",
        "qaRate",
        "qaFee",
        "deploymentAndCICDFee",
        "documentationFee",
        "maintenanceMonths",
        "maintenanceMonthlyRate",
        "maintenanceFee",
        "subtotal",
        "tax",
        "grandTotal",
        "paymentSchedule",
        "sourceCodeOwnershipNote"
      ],
      "layout": {
        "header": "WEB DEVELOPMENT INVOICE",
        "footer": "Full source code and IP transfers to the client upon final payment settlement."
      },
      "styles": {"primaryColor": "#059669",
        "secondaryColor": "#064e3b", "layoutVariant": 3, "headingStyle": 1 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "WEB DEVELOPMENT INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Contract #: {{contractNumber}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Project: "
              },
              {
                "type": "text",
                "text": "{{projectName}} ({{projectType}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Repo: "
              },
              {
                "type": "text",
                "text": "{{repositoryUrl}}   |   Live URL: {{liveProjectUrl}}   |   Host: {{hostingProvider}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Start: "
              },
              {
                "type": "text",
                "text": "{{projectStartDate}}   |   Go-Live: {{estimatedGoLiveDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Developer / Agency"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Name: "
              },
              {
                "type": "text",
                "text": "{{developerOrAgencyName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{developerEmail}}   |   {{developerPhone}}   |   Portfolio: {{githubOrPortfolioUrl}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Company: "
              },
              {
                "type": "text",
                "text": "{{clientCompanyName}}   Tech Contact: {{clientTechContact}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{clientEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Development Phases"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Phase"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Hours"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rate/hr"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Discovery & Technical Planning"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{discoveryAndPlanningHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{discoveryRate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{discoveryFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "UX Design & Wireframing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{uxWireframingHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{uxRate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{uxFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Frontend Development (HTML/CSS/JS)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{frontendDevelopmentHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{frontendRate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{frontendFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Backend Development & APIs"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{backendDevelopmentHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{backendRate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{backendFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "API Integrations ({{apiIntegrations}})"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Included"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{apiIntegrationFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Database Architecture & Setup"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Included"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{databaseDesignFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "3rd Party Licenses ({{thirdPartyLicenses}})"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Included"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{thirdPartyLicenseCost}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "QA Testing & Bug Fixes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{qaTestingHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{qaRate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{qaFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Deployment & CI/CD Pipeline"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Included"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{deploymentAndCICDFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Technical Documentation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Included"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{documentationFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Post-Launch Maintenance ({{maintenanceMonths}} months)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Recurring"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{maintenanceMonthlyRate}}/mo"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{maintenanceFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax: "
              },
              {
                "type": "text",
                "text": "{{tax}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "GRAND TOTAL: "
              },
              {
                "type": "text",
                "text": "{{grandTotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Payment Schedule: {{paymentSchedule}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Source Code Ownership: {{sourceCodeOwnershipNote}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-cleaning-service-v2",
    "slug": "invoice-cleaning-service-v2",
    "title": "Cleaning Service Invoice Template",
    "description": "Residential and commercial cleaning service invoice with per-room pricing, deep-clean add-ons, supply charges, and recurring billing.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-cleaning-service-v2.jpg",
    "content": {
      "title": "Cleaning Service Invoice Template",
      "fields": [
        "cleaningCompanyName",
        "cleaningLicenseNumber",
        "companyPhone",
        "companyEmail",
        "supervisorName",
        "clientName",
        "clientEmail",
        "clientPhone",
        "propertyAddress",
        "propertyType",
        "invoiceNumber",
        "serviceDate",
        "invoiceDate",
        "nextScheduledService",
        "dueDate",
        "serviceFrequency",
        "numberOfRooms",
        "numberOfBathrooms",
        "squareFootage",
        "standardCleanRate",
        "standardCleanTotal",
        "deepCleanAddOn",
        "deepCleanFee",
        "ovenAndApplianceCleaning",
        "ovenCleanFee",
        "windowCleaningInside",
        "windowInsideFee",
        "windowCleaningOutside",
        "windowOutsideFee",
        "carpetSteamCleaning",
        "carpetSteamFee",
        "upholsteryCleaning",
        "upholsteryFee",
        "refrigeratorCleaning",
        "fridgeFee",
        "garageOrBasementCleaning",
        "garageOrBasementFee",
        "ecoProductsSurcharge",
        "supplyFee",
        "parkingFee",
        "subtotal",
        "tax",
        "tipOption",
        "totalDue",
        "paymentMethod",
        "satisfactionGuarantee"
      ],
      "layout": {
        "header": "CLEANING SERVICE INVOICE",
        "footer": "100% Satisfaction Guarantee — if not satisfied, we re-clean for free within 24 hours."
      },
      "styles": {"primaryColor": "#0284c7",
        "secondaryColor": "#0c4a6e", "layoutVariant": 4, "headingStyle": 1 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "CLEANING SERVICE INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Service Date: {{serviceDate}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Next Scheduled Clean: "
              },
              {
                "type": "text",
                "text": "{{nextScheduledService}}   |   Frequency: {{serviceFrequency}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Cleaning Company"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Company: "
              },
              {
                "type": "text",
                "text": "{{cleaningCompanyName}}   License: {{cleaningLicenseNumber}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Supervisor: "
              },
              {
                "type": "text",
                "text": "{{supervisorName}}   |   {{companyPhone}}   |   {{companyEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Client: "
              },
              {
                "type": "text",
                "text": "{{clientName}}   |   {{clientEmail}}   |   {{clientPhone}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Property: "
              },
              {
                "type": "text",
                "text": "{{propertyAddress}} ({{propertyType}})   |   Rooms: {{numberOfRooms}}   Baths: {{numberOfBathrooms}}   |   {{squareFootage}} sq ft"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Services Performed"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Service"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Add-on"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Standard Clean ({{squareFootage}} sq ft × {{standardCleanRate}})"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{standardCleanTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Deep Clean Add-On"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{deepCleanAddOn}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{deepCleanFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Oven & Appliance Cleaning"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{ovenAndApplianceCleaning}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{ovenCleanFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Inside Window Cleaning"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{windowCleaningInside}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{windowInsideFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Outside Window Cleaning"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{windowCleaningOutside}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{windowOutsideFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Carpet Steam Cleaning"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{carpetSteamCleaning}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{carpetSteamFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Upholstery Cleaning"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{upholsteryCleaning}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{upholsteryFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Refrigerator Deep Clean"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{refrigeratorCleaning}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{fridgeFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Garage / Basement"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{garageOrBasementCleaning}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{garageOrBasementFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Eco Products Surcharge"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{ecoProductsSurcharge}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Cleaning Supplies Kit"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{supplyFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Parking / Access Fee"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{parkingFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax: "
              },
              {
                "type": "text",
                "text": "{{tax}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Optional Tip: "
              },
              {
                "type": "text",
                "text": "{{tipOption}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "TOTAL DUE: "
              },
              {
                "type": "text",
                "text": "{{totalDue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment: "
              },
              {
                "type": "text",
                "text": "{{paymentMethod}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Guarantee: {{satisfactionGuarantee}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-restaurant-v2",
    "slug": "invoice-restaurant-v2",
    "title": "Restaurant Invoice Template",
    "description": "Restaurant and catering invoice for bulk food orders, corporate events, office lunches, and recurring food delivery contracts.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-restaurant-v2.jpg",
    "content": {
      "title": "Restaurant Invoice Template",
      "fields": [
        "restaurantName",
        "restaurantFSSAILicense",
        "chefManagerName",
        "restaurantAddress",
        "restaurantPhone",
        "restaurantEmail",
        "clientCompanyName",
        "cateringContactPerson",
        "eventName",
        "eventType",
        "eventDate",
        "eventVenue",
        "guestCount",
        "dietaryRestrictions",
        "invoiceNumber",
        "invoiceDate",
        "dueDate",
        "appetizersDescription",
        "appetizersTotal",
        "mainCourseDescription",
        "mainCourseTotal",
        "dessertDescription",
        "dessertTotal",
        "beveragesDescription",
        "beveragesTotal",
        "alcholicBeveragesTotal",
        "serviceCrew",
        "serviceCrewFee",
        "serviceCharge",
        "tablewareAndEquipmentRental",
        "deliveryCharges",
        "groomingAndSetupFee",
        "foodSubtotal",
        "serviceTax",
        "vatOrGST",
        "grandTotal",
        "advanceReceived",
        "balanceDue",
        "paymentMode",
        "leftoverFoodPolicy"
      ],
      "layout": {
        "header": "CATERING & RESTAURANT INVOICE",
        "footer": "Food prepared fresh using FSSAI-certified ingredients. Leftover food policy: {{leftoverFoodPolicy}}"
      },
      "styles": {"primaryColor": "#dc2626",
        "secondaryColor": "#7f1d1d", "layoutVariant": 5, "headingStyle": 1 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "CATERING & RESTAURANT INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Event Date: {{eventDate}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Restaurant / Caterer"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Name: "
              },
              {
                "type": "text",
                "text": "{{restaurantName}}   FSSAI License: {{restaurantFSSAILicense}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Manager / Chef: "
              },
              {
                "type": "text",
                "text": "{{chefManagerName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{restaurantAddress}}   |   {{restaurantPhone}}   |   {{restaurantEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client / Event"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Company: "
              },
              {
                "type": "text",
                "text": "{{clientCompanyName}}   Contact: {{cateringContactPerson}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Event: "
              },
              {
                "type": "text",
                "text": "{{eventName}} ({{eventType}})   Venue: {{eventVenue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Guests: "
              },
              {
                "type": "text",
                "text": "{{guestCount}}   Dietary Restrictions: {{dietaryRestrictions}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Menu & Services"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Course / Service"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Appetizers & Starters"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{appetizersDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{appetizersTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Main Course"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{mainCourseDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{mainCourseTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Desserts"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{dessertDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{dessertTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Non-Alcoholic Beverages"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{beveragesDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{beveragesTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Alcoholic Beverages"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{alcholicBeveragesTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Service Crew ({{serviceCrew}} staff)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{serviceCrewFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tableware & Equipment Rental"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{tablewareAndEquipmentRental}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Delivery & Transportation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{deliveryCharges}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Setup, Decor & Grooming"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{groomingAndSetupFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Food Subtotal: "
              },
              {
                "type": "text",
                "text": "{{foodSubtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Service Charge: "
              },
              {
                "type": "text",
                "text": "{{serviceCharge}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "VAT / GST: "
              },
              {
                "type": "text",
                "text": "{{vatOrGST}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax: "
              },
              {
                "type": "text",
                "text": "{{serviceTax}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Grand Total: "
              },
              {
                "type": "text",
                "text": "{{grandTotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Advance Received: "
              },
              {
                "type": "text",
                "text": "({{advanceReceived}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "BALANCE DUE: "
              },
              {
                "type": "text",
                "text": "{{balanceDue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment Mode: "
              },
              {
                "type": "text",
                "text": "{{paymentMode}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-retail-store",
    "slug": "invoice-retail-store",
    "title": "Retail Store Invoice Template",
    "description": "Retail and wholesale store invoice for product sales with SKU, barcode, batch number, MSRP vs sale price, and return policy.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-retail-store.jpg",
    "content": {
      "title": "Retail Store Invoice Template",
      "fields": [
        "storeName",
        "storeRegistrationNumber",
        "storeGSTOrVAT",
        "storeAddress",
        "storePhone",
        "storeEmail",
        "storeWebsite",
        "customerName",
        "customerEmail",
        "customerPhone",
        "customerLoyaltyId",
        "billingAddress",
        "shippingAddress",
        "orderNumber",
        "invoiceNumber",
        "invoiceDate",
        "shippingDate",
        "expectedDeliveryDate",
        "dueDate",
        "productName",
        "productSKU",
        "barcode",
        "batchNumber",
        "category",
        "msrpPrice",
        "salePricePerUnit",
        "quantityOrdered",
        "quantityShipped",
        "lineDiscount",
        "lineTotal",
        "couponCode",
        "couponDiscount",
        "subtotal",
        "shippingAndHandling",
        "insuranceFee",
        "packagingFee",
        "taxRate",
        "taxAmount",
        "grandTotal",
        "returnWindowDays",
        "warrantyPeriod",
        "paymentMethod",
        "transactionId"
      ],
      "layout": {
        "header": "RETAIL / WHOLESALE INVOICE",
        "footer": "Returns accepted within {{returnWindowDays}} days with original invoice. Warranty: {{warrantyPeriod}}."
      },
      "styles": {"primaryColor": "#d97706",
        "secondaryColor": "#78350f", "layoutVariant": 0, "headingStyle": 2 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "RETAIL STORE INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Order #: {{orderNumber}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice Date: "
              },
              {
                "type": "text",
                "text": "{{invoiceDate}}   |   Shipped: {{shippingDate}}   |   Delivery ETA: {{expectedDeliveryDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Store"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Store: "
              },
              {
                "type": "text",
                "text": "{{storeName}} (Reg. #{{storeRegistrationNumber}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "GST/VAT: "
              },
              {
                "type": "text",
                "text": "{{storeGSTOrVAT}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{storeAddress}}   |   {{storePhone}}   |   {{storeEmail}}   |   {{storeWebsite}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Customer"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Customer: "
              },
              {
                "type": "text",
                "text": "{{customerName}}   Loyalty ID: {{customerLoyaltyId}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{customerEmail}}   |   {{customerPhone}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Billing: "
              },
              {
                "type": "text",
                "text": "{{billingAddress}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Shipping: "
              },
              {
                "type": "text",
                "text": "{{shippingAddress}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Order Items"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Product"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "SKU"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Barcode"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Batch"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "MSRP"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Sale Price"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Qty Ordered"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Qty Shipped"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Discount"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Line Total"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{productName}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{productSKU}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{barcode}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{batchNumber}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{category}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{msrpPrice}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{salePricePerUnit}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{quantityOrdered}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{quantityShipped}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineDiscount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Coupon ({{couponCode}}): "
              },
              {
                "type": "text",
                "text": "({{couponDiscount}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Shipping & Handling: "
              },
              {
                "type": "text",
                "text": "{{shippingAndHandling}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Insurance: "
              },
              {
                "type": "text",
                "text": "{{insuranceFee}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Packaging: "
              },
              {
                "type": "text",
                "text": "{{packagingFee}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax ({{taxRate}}%): "
              },
              {
                "type": "text",
                "text": "{{taxAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "GRAND TOTAL: "
              },
              {
                "type": "text",
                "text": "{{grandTotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment: "
              },
              {
                "type": "text",
                "text": "{{paymentMethod}}   Transaction ID: {{transactionId}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-medical-v2",
    "slug": "invoice-medical-v2",
    "title": "Medical Invoice Template",
    "description": "Healthcare provider invoice for outpatient consultations, diagnostics, procedures, prescriptions, and insurance co-pay billing.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-medical-v2.jpg",
    "content": {
      "title": "Medical Invoice Template",
      "fields": [
        "hospitalOrClinicName",
        "npiNumber",
        "facilityAddress",
        "billingDepartmentPhone",
        "billingEmail",
        "treatingPhysicianName",
        "physicianSpecialty",
        "referringPhysicianName",
        "patientFullName",
        "patientDateOfBirth",
        "patientMRN",
        "patientInsuranceProvider",
        "patientInsuranceMemberId",
        "patientGroupNumber",
        "visitDate",
        "visitType",
        "icdDiagnosisCode",
        "diagnosisDescription",
        "invoiceNumber",
        "invoiceDate",
        "dueDate",
        "cptCode1",
        "procedure1Description",
        "procedure1Fee",
        "cptCode2",
        "procedure2Description",
        "procedure2Fee",
        "labTestsDescription",
        "labTestsFee",
        "radiologyDescription",
        "radiologyFee",
        "prescriptionsDispensed",
        "prescriptionFee",
        "roomAndBoardFee",
        "nursingCareFee",
        "medicalSuppliesFee",
        "totalCharges",
        "insuranceClaimAmount",
        "insuranceAllowedAmount",
        "contractualAdjustment",
        "insurancePaid",
        "coPayAmount",
        "deductibleUnmet",
        "patientResponsibility",
        "paymentPlan",
        "patientPortalLink"
      ],
      "layout": {
        "header": "MEDICAL SERVICES INVOICE",
        "footer": "This statement is for billing purposes only. Consult your insurer for coverage details."
      },
      "styles": {"primaryColor": "#0d9488",
        "secondaryColor": "#134e4a", "layoutVariant": 1, "headingStyle": 2 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "MEDICAL SERVICES INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Visit Date: {{visitDate}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Visit Type: "
              },
              {
                "type": "text",
                "text": "{{visitType}}   |   Diagnosis (ICD): {{icdDiagnosisCode}} — {{diagnosisDescription}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Provider"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Facility: "
              },
              {
                "type": "text",
                "text": "{{hospitalOrClinicName}} (NPI: {{npiNumber}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Physician: "
              },
              {
                "type": "text",
                "text": "{{treatingPhysicianName}}, {{physicianSpecialty}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Referring Physician: "
              },
              {
                "type": "text",
                "text": "{{referringPhysicianName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{facilityAddress}}   |   Billing: {{billingDepartmentPhone}}   |   {{billingEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Patient"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Patient: "
              },
              {
                "type": "text",
                "text": "{{patientFullName}}   DOB: {{patientDateOfBirth}}   MRN: {{patientMRN}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Insurance: "
              },
              {
                "type": "text",
                "text": "{{patientInsuranceProvider}}   Member ID: {{patientInsuranceMemberId}}   Group: {{patientGroupNumber}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Services & Charges"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CPT Code"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Service Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Charge"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cptCode1}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{procedure1Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{procedure1Fee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cptCode2}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{procedure2Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{procedure2Fee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "LAB"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{labTestsDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{labTestsFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "RAD"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{radiologyDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{radiologyFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "RX"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{prescriptionsDispensed}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{prescriptionFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "R&B"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Room & Board"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{roomAndBoardFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "NSG"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Nursing Care"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{nursingCareFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "SUP"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Medical Supplies"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{medicalSuppliesFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Total Charges: "
              },
              {
                "type": "text",
                "text": "{{totalCharges}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Insurance Claim Submitted: "
              },
              {
                "type": "text",
                "text": "{{insuranceClaimAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Allowed Amount: "
              },
              {
                "type": "text",
                "text": "{{insuranceAllowedAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Contractual Adjustment: "
              },
              {
                "type": "text",
                "text": "({{contractualAdjustment}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Insurance Paid: "
              },
              {
                "type": "text",
                "text": "({{insurancePaid}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Co-Pay: "
              },
              {
                "type": "text",
                "text": "{{coPayAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Unmet Deductible: "
              },
              {
                "type": "text",
                "text": "{{deductibleUnmet}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "PATIENT RESPONSIBILITY: "
              },
              {
                "type": "text",
                "text": "{{patientResponsibility}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Payment Plan Options: {{paymentPlan}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Patient Portal: {{patientPortalLink}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-legal-v2",
    "slug": "invoice-legal-v2",
    "title": "Legal Invoice Template",
    "description": "Law firm billing statement with attorney and paralegal time entries, court filing fees, disbursements, and retainer reconciliation.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-legal-v2.jpg",
    "content": {
      "title": "Legal Invoice Template",
      "fields": [
        "lawFirmName",
        "barAssociationNumber",
        "firmJurisdiction",
        "leadAttorneyName",
        "leadAttorneyBarNumber",
        "secondAttorneyName",
        "paralegalName",
        "firmAddress",
        "firmPhone",
        "firmEmail",
        "clientFullName",
        "clientFileNumber",
        "matterTitle",
        "caseNumber",
        "courtName",
        "opposingParty",
        "invoiceNumber",
        "billingStatement",
        "invoiceDate",
        "billingPeriodStart",
        "billingPeriodEnd",
        "dueDate",
        "timeEntry1Date",
        "timeEntry1Attorney",
        "timeEntry1Description",
        "timeEntry1Hours",
        "timeEntry1Rate",
        "timeEntry1Amount",
        "timeEntry2Date",
        "timeEntry2Attorney",
        "timeEntry2Description",
        "timeEntry2Hours",
        "timeEntry2Rate",
        "timeEntry2Amount",
        "paralegalHours",
        "paralegalRate",
        "paralegalAmount",
        "courtFilingFee",
        "expertWitnessFee",
        "processorServerFee",
        "courierAndCopyFee",
        "travelAndAccommodation",
        "miscDisbursements",
        "totalFees",
        "totalDisbursements",
        "grossTotal",
        "previousInvoiceBalance",
        "paymentsReceived",
        "retainerBalance",
        "amountNowDue",
        "trustAccountDetails",
        "interestRate",
        "arbitrationClause"
      ],
      "layout": {
        "header": "LEGAL BILLING STATEMENT",
        "footer": "Privileged & Confidential — Attorney-Client Communication. Governed by applicable professional conduct rules."
      },
      "styles": {"primaryColor": "#1e3a5f",
        "secondaryColor": "#0f172a", "layoutVariant": 2, "headingStyle": 2 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "LEGAL BILLING STATEMENT"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Statement #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   {{billingStatement}}   |   Period: {{billingPeriodStart}} – {{billingPeriodEnd}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Due: "
              },
              {
                "type": "text",
                "text": "{{dueDate}}   |   File #: {{clientFileNumber}}   |   Case #: {{caseNumber}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Law Firm"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Firm: "
              },
              {
                "type": "text",
                "text": "{{lawFirmName}} (Bar Assoc. #{{barAssociationNumber}}) — {{firmJurisdiction}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Lead Attorney: "
              },
              {
                "type": "text",
                "text": "{{leadAttorneyName}} (Bar #{{leadAttorneyBarNumber}})   Co-Counsel: {{secondAttorneyName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Paralegal: "
              },
              {
                "type": "text",
                "text": "{{paralegalName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{firmAddress}}   |   {{firmPhone}}   |   {{firmEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client / Matter"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Client: "
              },
              {
                "type": "text",
                "text": "{{clientFullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Matter: "
              },
              {
                "type": "text",
                "text": "{{matterTitle}}   Court: {{courtName}}   Opposing Party: {{opposingParty}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Time Entries"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Date"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Attorney"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Description of Work"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Hours"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rate/hr"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry1Date}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry1Attorney}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry1Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry1Hours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry1Rate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry1Amount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry2Date}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry2Attorney}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry2Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry2Hours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry2Rate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{timeEntry2Amount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Paralegal Work"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{paralegalName}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Research & Document Preparation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{paralegalHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{paralegalRate}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{paralegalAmount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Disbursements & Costs"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Disbursement"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Court Filing Fees"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{courtFilingFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Expert Witness Fees"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{expertWitnessFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Process Server Fees"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{processorServerFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Courier, Copies & Postage"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{courierAndCopyFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Travel & Accommodation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{travelAndAccommodation}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Miscellaneous Disbursements"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{miscDisbursements}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Total Professional Fees: "
              },
              {
                "type": "text",
                "text": "{{totalFees}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Total Disbursements: "
              },
              {
                "type": "text",
                "text": "{{totalDisbursements}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Gross Total: "
              },
              {
                "type": "text",
                "text": "{{grossTotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Previous Balance: "
              },
              {
                "type": "text",
                "text": "{{previousInvoiceBalance}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payments Received: "
              },
              {
                "type": "text",
                "text": "({{paymentsReceived}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Retainer Balance Applied: "
              },
              {
                "type": "text",
                "text": "({{retainerBalance}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "AMOUNT NOW DUE: "
              },
              {
                "type": "text",
                "text": "{{amountNowDue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Trust Account: {{trustAccountDetails}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Interest on overdue amounts: {{interestRate}} per annum. Arbitration: {{arbitrationClause}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-software-saas",
    "slug": "invoice-software-saas",
    "title": "Software Invoice Template",
    "description": "SaaS and software vendor invoice for license subscriptions, API calls, user seats, implementation, and annual support contracts.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-software-saas.jpg",
    "content": {
      "title": "Software Invoice Template",
      "fields": [
        "vendorCompanyName",
        "vendorRegistrationNumber",
        "vendorAddress",
        "vendorSupportEmail",
        "vendorBillingEmail",
        "accountExecutiveName",
        "clientCompanyName",
        "clientAdminEmail",
        "clientOrganizationId",
        "productName",
        "productVersion",
        "deploymentType",
        "contractId",
        "subscriptionTier",
        "billingCycle",
        "contractStartDate",
        "contractEndDate",
        "invoiceNumber",
        "invoiceDate",
        "dueDate",
        "userSeatsLicensed",
        "pricePerSeat",
        "seatLicenseFee",
        "apiCallsIncluded",
        "overage",
        "overageRate",
        "overageCharge",
        "storageGB",
        "storageRate",
        "storageCharge",
        "implementationHours",
        "implementationRate",
        "implementationFee",
        "trainingSessionsCount",
        "trainingFee",
        "customDevelopmentHours",
        "customDevRate",
        "customDevFee",
        "sla",
        "premiumSupportFee",
        "thirdPartyIntegrationFees",
        "subtotal",
        "tax",
        "annualContractValue",
        "prorationAdjustment",
        "totalDue",
        "autoRenewalDate",
        "paymentMethod",
        "cancellationNoticePeriod"
      ],
      "layout": {
        "header": "SOFTWARE LICENSE & SERVICE INVOICE",
        "footer": "Subscription auto-renews on {{autoRenewalDate}}. Cancel with {{cancellationNoticePeriod}} written notice."
      },
      "styles": {"primaryColor": "#7c3aed",
        "secondaryColor": "#4c1d95", "layoutVariant": 3, "headingStyle": 2 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "SOFTWARE LICENSE & SERVICE INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Contract ID: {{contractId}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Product: "
              },
              {
                "type": "text",
                "text": "{{productName}} v{{productVersion}} ({{deploymentType}})   |   Tier: {{subscriptionTier}}   |   Billing: {{billingCycle}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Contract Period: "
              },
              {
                "type": "text",
                "text": "{{contractStartDate}} to {{contractEndDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Vendor"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Company: "
              },
              {
                "type": "text",
                "text": "{{vendorCompanyName}} (Reg. #{{vendorRegistrationNumber}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Account Executive: "
              },
              {
                "type": "text",
                "text": "{{accountExecutiveName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{vendorAddress}}   |   Support: {{vendorSupportEmail}}   |   Billing: {{vendorBillingEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Client"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Organization: "
              },
              {
                "type": "text",
                "text": "{{clientCompanyName}} (Org ID: {{clientOrganizationId}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Admin: {{clientAdminEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "License & Usage"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Line Item"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Detail"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rate"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "User Seat Licenses"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{userSeatsLicensed}} seats"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{pricePerSeat}}/seat"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{seatLicenseFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "API Overage"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Included: {{apiCallsIncluded}} | Overage: {{overage}} calls"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{overageRate}}/1k calls"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{overageCharge}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Cloud Storage"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{storageGB}} GB"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{storageRate}}/GB"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{storageCharge}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Services"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Service"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Hours/Units"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rate"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Implementation & Onboarding"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{implementationHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{implementationRate}}/hr"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{implementationFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Training Sessions"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{trainingSessionsCount}} sessions"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{trainingFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Custom Development"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{customDevelopmentHours}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{customDevRate}}/hr"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{customDevFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Premium Support (SLA: {{sla}})"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{premiumSupportFee}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "3rd Party Integration Fees"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "-"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Fixed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{thirdPartyIntegrationFees}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax: "
              },
              {
                "type": "text",
                "text": "{{tax}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Annual Contract Value (ACV): "
              },
              {
                "type": "text",
                "text": "{{annualContractValue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Proration Adjustment: "
              },
              {
                "type": "text",
                "text": "{{prorationAdjustment}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "TOTAL DUE: "
              },
              {
                "type": "text",
                "text": "{{totalDue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment: "
              },
              {
                "type": "text",
                "text": "{{paymentMethod}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-purchase-v2",
    "slug": "invoice-purchase-v2",
    "title": "Purchase Invoice Template",
    "description": "Supplier purchase invoice for procurement departments with PO matching, goods received note, quality inspection, and AP workflow fields.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-purchase-v2.jpg",
    "content": {
      "title": "Purchase Invoice Template",
      "fields": [
        "supplierName",
        "supplierCode",
        "supplierGSTIN",
        "supplierAddress",
        "supplierContactName",
        "supplierEmail",
        "supplierPhone",
        "buyingCompanyName",
        "buyingCompanyGSTIN",
        "procurementOfficerName",
        "buyingAddress",
        "purchaseOrderNumber",
        "goodsReceiptNoteNumber",
        "qualityInspectionStatus",
        "invoiceNumber",
        "invoiceDate",
        "deliveryDate",
        "paymentDueDate",
        "paymentTerms",
        "itemCode",
        "itemDescription",
        "unitOfMeasure",
        "orderedQuantity",
        "receivedQuantity",
        "acceptedQuantity",
        "rejectedQuantity",
        "unitCost",
        "lineAmount",
        "discountPercent",
        "discountAmount",
        "netLineAmount",
        "freightAndInsurance",
        "customsDuty",
        "loadingUnloadingCharges",
        "packagingCharges",
        "subtotalGoods",
        "subtotalCharges",
        "taxableAmount",
        "cgstOrVatRate",
        "cgstOrVatAmount",
        "totalInvoiceAmount",
        "currency",
        "advancePaid",
        "tdsDeductible",
        "tdsAmount",
        "netPayable",
        "bankName",
        "accountNumber",
        "ifscCode",
        "expectedPaymentDate",
        "disputeResolutionContact"
      ],
      "layout": {
        "header": "PURCHASE INVOICE",
        "footer": "Payment subject to satisfactory GRN and quality inspection approval. TDS deducted as applicable."
      },
      "styles": {"primaryColor": "#0369a1",
        "secondaryColor": "#082f49", "layoutVariant": 4, "headingStyle": 2 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "PURCHASE INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   PO #: {{purchaseOrderNumber}}   |   GRN #: {{goodsReceiptNoteNumber}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice Date: "
              },
              {
                "type": "text",
                "text": "{{invoiceDate}}   |   Delivery Date: {{deliveryDate}}   |   Payment Due: {{paymentDueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "QC Status: "
              },
              {
                "type": "text",
                "text": "{{qualityInspectionStatus}}   |   Payment Terms: {{paymentTerms}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Supplier"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Supplier: "
              },
              {
                "type": "text",
                "text": "{{supplierName}} (Code: {{supplierCode}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "GSTIN: "
              },
              {
                "type": "text",
                "text": "{{supplierGSTIN}}   Contact: {{supplierContactName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{supplierAddress}}   |   {{supplierEmail}}   |   {{supplierPhone}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Buyer / Procurement"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Company: "
              },
              {
                "type": "text",
                "text": "{{buyingCompanyName}} (GSTIN: {{buyingCompanyGSTIN}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Procurement Officer: "
              },
              {
                "type": "text",
                "text": "{{procurementOfficerName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{buyingAddress}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Goods Received"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Item Code"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "UOM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Ordered"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Received"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Accepted"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Rejected"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Unit Cost"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Line Amount"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Discount"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Net Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{itemCode}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{itemDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{unitOfMeasure}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{orderedQuantity}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{receivedQuantity}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{acceptedQuantity}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{rejectedQuantity}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{unitCost}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{discountPercent}}% — {{discountAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{netLineAmount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Additional Charges"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Charge"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount ({{currency}})"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Freight & Insurance"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{freightAndInsurance}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Customs Duty"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{customsDuty}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Loading & Unloading"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{loadingUnloadingCharges}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Packaging Charges"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{packagingCharges}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal — Goods: "
              },
              {
                "type": "text",
                "text": "{{subtotalGoods}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal — Charges: "
              },
              {
                "type": "text",
                "text": "{{subtotalCharges}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Taxable Amount: "
              },
              {
                "type": "text",
                "text": "{{taxableAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "CGST/VAT ({{cgstOrVatRate}}%): "
              },
              {
                "type": "text",
                "text": "{{cgstOrVatAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Total Invoice Amount: "
              },
              {
                "type": "text",
                "text": "{{totalInvoiceAmount}} {{currency}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Advance Paid: "
              },
              {
                "type": "text",
                "text": "({{advancePaid}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "TDS Deductible: "
              },
              {
                "type": "text",
                "text": "({{tdsAmount}}) — Rate: {{tdsDeductible}}%"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "NET PAYABLE: "
              },
              {
                "type": "text",
                "text": "{{netPayable}} {{currency}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Bank: {{bankName}} | A/C: {{accountNumber}} | IFSC: {{ifscCode}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Expected Payment Date: {{expectedPaymentDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Disputes: {{disputeResolutionContact}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-sales",
    "slug": "invoice-sales",
    "title": "Sales Invoice Template",
    "description": "Sales department invoice for B2B and B2C product transactions with volume tiers, sales rep attribution, commission tracking, and multi-currency.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-sales.jpg",
    "content": {
      "title": "Sales Invoice Template",
      "fields": [
        "sellerCompanyName",
        "sellerTaxId",
        "salesRegion",
        "salesRepresentativeName",
        "salesRepEmployeeId",
        "sellerAddress",
        "sellerEmail",
        "sellerPhone",
        "customerName",
        "customerId",
        "customerClass",
        "customerAddress",
        "customerEmail",
        "customerPhone",
        "shippingAddress",
        "quoteReferenceNumber",
        "salesOrderNumber",
        "invoiceNumber",
        "invoiceDate",
        "deliveryDate",
        "paymentDueDate",
        "paymentTerms",
        "currency",
        "productCode",
        "productName",
        "productCategory",
        "unitOfMeasure",
        "quantityOrdered",
        "quantityDelivered",
        "listPrice",
        "volumeDiscountTier",
        "volumeDiscountPercent",
        "volumeDiscountAmount",
        "salePrice",
        "lineSubtotal",
        "bundlePromotionDescription",
        "bundleDiscountAmount",
        "couponOrPromoCode",
        "additionalDiscountPercent",
        "additionalDiscountAmount",
        "subtotal",
        "freightCost",
        "handlingFee",
        "insurancePremium",
        "taxZone",
        "taxPercent",
        "taxAmount",
        "surcharge",
        "invoiceTotal",
        "depositApplied",
        "creditNoteApplied",
        "amountDue",
        "commissionRate",
        "commissionAmount",
        "paymentMethod",
        "returnAndRefundPolicy"
      ],
      "layout": {
        "header": "SALES INVOICE",
        "footer": "Prices are subject to change. Returns and refunds governed by company policy: {{returnAndRefundPolicy}}"
      },
      "styles": {"primaryColor": "#16a34a",
        "secondaryColor": "#14532d", "layoutVariant": 5, "headingStyle": 2 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "SALES INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   SO #: {{salesOrderNumber}}   |   Quote Ref: {{quoteReferenceNumber}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice Date: "
              },
              {
                "type": "text",
                "text": "{{invoiceDate}}   |   Delivery: {{deliveryDate}}   |   Due: {{paymentDueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment Terms: "
              },
              {
                "type": "text",
                "text": "{{paymentTerms}}   |   Currency: {{currency}}   |   Region: {{salesRegion}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Seller"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Company: "
              },
              {
                "type": "text",
                "text": "{{sellerCompanyName}} (Tax ID: {{sellerTaxId}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Sales Rep: "
              },
              {
                "type": "text",
                "text": "{{salesRepresentativeName}} (ID: {{salesRepEmployeeId}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{sellerAddress}}   |   {{sellerEmail}}   |   {{sellerPhone}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Customer"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Customer: "
              },
              {
                "type": "text",
                "text": "{{customerName}} (ID: {{customerId}}) — Class: {{customerClass}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{customerEmail}}   |   {{customerPhone}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Bill To: "
              },
              {
                "type": "text",
                "text": "{{customerAddress}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Ship To: "
              },
              {
                "type": "text",
                "text": "{{shippingAddress}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Products"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Code"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Product"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "UOM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Ordered"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Delivered"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "List Price"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Volume Tier"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Discount"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Sale Price"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Line Total"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{productCode}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{productName}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{productCategory}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{unitOfMeasure}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{quantityOrdered}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{quantityDelivered}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{listPrice}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{volumeDiscountTier}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{volumeDiscountPercent}}% — {{volumeDiscountAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{salePrice}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineSubtotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Discounts & Adjustments"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Adjustment"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Code"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Bundle Promotion"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{bundlePromotionDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "({{bundleDiscountAmount}})"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Coupon / Promo"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{couponOrPromoCode}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{additionalDiscountPercent}}% — ({{additionalDiscountAmount}})"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Freight: "
              },
              {
                "type": "text",
                "text": "{{freightCost}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Handling: "
              },
              {
                "type": "text",
                "text": "{{handlingFee}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Insurance: "
              },
              {
                "type": "text",
                "text": "{{insurancePremium}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax Zone {{taxZone}} ({{taxPercent}}%): "
              },
              {
                "type": "text",
                "text": "{{taxAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Surcharge: "
              },
              {
                "type": "text",
                "text": "{{surcharge}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice Total: "
              },
              {
                "type": "text",
                "text": "{{invoiceTotal}} {{currency}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Deposit Applied: "
              },
              {
                "type": "text",
                "text": "({{depositApplied}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Credit Note Applied: "
              },
              {
                "type": "text",
                "text": "({{creditNoteApplied}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "AMOUNT DUE: "
              },
              {
                "type": "text",
                "text": "{{amountDue}} {{currency}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment: "
              },
              {
                "type": "text",
                "text": "{{paymentMethod}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Commission: Rep {{salesRepresentativeName}} — Rate: {{commissionRate}}% — Amount: {{commissionAmount}} (internal record)"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-tax-standard",
    "slug": "invoice-tax-standard",
    "title": "Tax Invoice Template",
    "description": "International tax invoice compliant with VAT, GST, and sales tax regulations. Includes tax registration numbers, taxable vs exempt amounts.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-tax-standard.jpg",
    "content": {
      "title": "Tax Invoice Template",
      "fields": [
        "supplierLegalName",
        "supplierTaxRegistrationNumber",
        "supplierVATNumber",
        "supplierCountry",
        "supplierAddress",
        "supplierPhone",
        "supplierEmail",
        "customerLegalName",
        "customerTaxRegistrationNumber",
        "customerVATNumber",
        "customerCountry",
        "customerAddress",
        "taxAuthority",
        "invoiceNumber",
        "invoiceSeriesPrefix",
        "invoiceDate",
        "taxPointDate",
        "supplyPeriod",
        "dueDate",
        "lineItem1Description",
        "lineItem1IsExempt",
        "lineItem1TaxCode",
        "lineItem1Qty",
        "lineItem1UnitPrice",
        "lineItem1TaxableAmount",
        "lineItem1ExemptAmount",
        "lineItem1TaxRate",
        "lineItem1TaxAmount",
        "lineItem1GrossTotal",
        "lineItem2Description",
        "lineItem2IsExempt",
        "lineItem2TaxCode",
        "lineItem2Qty",
        "lineItem2UnitPrice",
        "lineItem2TaxableAmount",
        "lineItem2ExemptAmount",
        "lineItem2TaxRate",
        "lineItem2TaxAmount",
        "lineItem2GrossTotal",
        "totalTaxableAmount",
        "totalExemptAmount",
        "totalTaxAmount",
        "invoiceGrandTotal",
        "reversalChargeNotice",
        "currencyCode",
        "exchangeRate",
        "equivalentAmountLocalCurrency",
        "paymentMethod",
        "fiscalNotes"
      ],
      "layout": {
        "header": "OFFICIAL TAX INVOICE",
        "footer": "Tax issued by: {{taxAuthority}}. Retain this invoice for your tax records."
      },
      "styles": {"primaryColor": "#1e40af",
        "secondaryColor": "#1e3a8a", "layoutVariant": 0, "headingStyle": 0 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "OFFICIAL TAX INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice No.: "
              },
              {
                "type": "text",
                "text": "{{invoiceSeriesPrefix}}{{invoiceNumber}}   |   Invoice Date: {{invoiceDate}}   |   Tax Point Date: {{taxPointDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Supply Period: "
              },
              {
                "type": "text",
                "text": "{{supplyPeriod}}   |   Due: {{dueDate}}   |   Currency: {{currencyCode}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Supplier"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Legal Name: "
              },
              {
                "type": "text",
                "text": "{{supplierLegalName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax Reg. No.: "
              },
              {
                "type": "text",
                "text": "{{supplierTaxRegistrationNumber}}   VAT No.: {{supplierVATNumber}}   Country: {{supplierCountry}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{supplierAddress}}   |   {{supplierPhone}}   |   {{supplierEmail}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Customer / Recipient"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Legal Name: "
              },
              {
                "type": "text",
                "text": "{{customerLegalName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax Reg. No.: "
              },
              {
                "type": "text",
                "text": "{{customerTaxRegistrationNumber}}   VAT No.: {{customerVATNumber}}   Country: {{customerCountry}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{customerAddress}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Tax Summary by Line"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Exempt?"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tax Code"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Qty"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Unit Price"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Taxable Amt"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Exempt Amt"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tax Rate"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tax Amt"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Gross Total"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1IsExempt}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1TaxCode}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1Qty}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1UnitPrice}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1TaxableAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1ExemptAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1TaxRate}}%"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1TaxAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem1GrossTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2IsExempt}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2TaxCode}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2Qty}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2UnitPrice}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2TaxableAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2ExemptAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2TaxRate}}%"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2TaxAmount}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lineItem2GrossTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Tax Totals"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount ({{currencyCode}})"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Total Taxable Amount"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{totalTaxableAmount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Total Exempt Amount"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{totalExemptAmount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Total Tax Amount"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{totalTaxAmount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "GRAND TOTAL"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{invoiceGrandTotal}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Exchange Rate: "
              },
              {
                "type": "text",
                "text": "1 {{currencyCode}} = {{exchangeRate}} (local)   Equivalent: {{equivalentAmountLocalCurrency}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Payment Method: "
              },
              {
                "type": "text",
                "text": "{{paymentMethod}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Reverse Charge Notice: {{reversalChargeNotice}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Fiscal Notes: {{fiscalNotes}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-commercial-v2",
    "slug": "invoice-commercial-v2",
    "title": "Commercial Invoice Template",
    "description": "International trade commercial invoice for customs clearance, letters of credit, export documentation, and freight forwarding.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-commercial-v2.jpg",
    "content": {
      "title": "Commercial Invoice Template",
      "fields": [
        "exporterName",
        "exporterIECCode",
        "exporterAddress",
        "exporterPhone",
        "exporterEmail",
        "exporterBankName",
        "letterOfCreditNumber",
        "importerName",
        "importerAddress",
        "importerCustomsBroker",
        "consigneeName",
        "consigneeAddress",
        "notifyParty",
        "shippingAgent",
        "vesselOrFlightNumber",
        "billOfLadingNumber",
        "portOfLoading",
        "portOfDischarge",
        "finalDestination",
        "invoiceNumber",
        "invoiceDate",
        "exportDate",
        "paymentTerms",
        "incoterms",
        "currency",
        "countryOfOrigin",
        "goodsDescription",
        "harmonizationCode",
        "packageType",
        "numberOfPackages",
        "grossWeightKg",
        "netWeightKg",
        "measurementCBM",
        "quantityUnit",
        "unitQuantity",
        "unitFOBPrice",
        "totalFOBValue",
        "freightCost",
        "insurancePremium",
        "cifValue",
        "customsDeclarationValue",
        "exportLicenseNumber",
        "endUserCertificate",
        "sanctionsComplianceStatement",
        "bankSwiftCode",
        "bankIBAN",
        "paymentDueDate",
        "signatureBlock"
      ],
      "layout": {
        "header": "COMMERCIAL INVOICE FOR EXPORT",
        "footer": "I/We declare that this invoice shows the actual price of the goods described and all particulars are true and correct."
      },
      "styles": {"primaryColor": "#374151",
        "secondaryColor": "#111827", "layoutVariant": 1, "headingStyle": 0 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "COMMERCIAL INVOICE FOR EXPORT"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Invoice Date: {{invoiceDate}}   |   Export Date: {{exportDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "B/L No.: "
              },
              {
                "type": "text",
                "text": "{{billOfLadingNumber}}   |   L/C No.: {{letterOfCreditNumber}}   |   Payment Terms: {{paymentTerms}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Incoterms: "
              },
              {
                "type": "text",
                "text": "{{incoterms}}   |   Currency: {{currency}}   |   Country of Origin: {{countryOfOrigin}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Exporter / Shipper"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Exporter: "
              },
              {
                "type": "text",
                "text": "{{exporterName}} (IEC: {{exporterIECCode}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{exporterAddress}}   |   {{exporterPhone}}   |   {{exporterEmail}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Bank: "
              },
              {
                "type": "text",
                "text": "{{exporterBankName}}   SWIFT: {{bankSwiftCode}}   IBAN: {{bankIBAN}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Importer / Consignee"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Importer: "
              },
              {
                "type": "text",
                "text": "{{importerName}}   Customs Broker: {{importerCustomsBroker}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{importerAddress}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Consignee: "
              },
              {
                "type": "text",
                "text": "{{consigneeName}} — {{consigneeAddress}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Notify Party: "
              },
              {
                "type": "text",
                "text": "{{notifyParty}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 3
            },
            "content": [
              {
                "type": "text",
                "text": "Shipment Details"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Vessel/Flight: "
              },
              {
                "type": "text",
                "text": "{{vesselOrFlightNumber}}   Shipping Agent: {{shippingAgent}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Port of Loading: "
              },
              {
                "type": "text",
                "text": "{{portOfLoading}}   Port of Discharge: {{portOfDischarge}}   Final Destination: {{finalDestination}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Goods Description"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "HS Code"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Package Type"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Packages"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Gross Wt (kg)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Net Wt (kg)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CBM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Unit"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Qty"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Unit FOB"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Total FOB"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{goodsDescription}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{harmonizationCode}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{packageType}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{numberOfPackages}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{grossWeightKg}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{netWeightKg}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{measurementCBM}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{quantityUnit}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{unitQuantity}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{currency}} {{unitFOBPrice}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{currency}} {{totalFOBValue}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Value Summary"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Component"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount ({{currency}})"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "FOB Value"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{totalFOBValue}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Freight Cost"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{freightCost}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Insurance Premium"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{insurancePremium}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CIF Value (for Customs)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cifValue}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Customs Declaration Value"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{customsDeclarationValue}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Export License #: "
              },
              {
                "type": "text",
                "text": "{{exportLicenseNumber}}   End-User Certificate: {{endUserCertificate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sanctions Compliance: {{sanctionsComplianceStatement}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Payment Due: {{paymentDueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Authorized Signature: {{signatureBlock}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "invoice-simple",
    "slug": "invoice-simple",
    "title": "Simple Invoice Template",
    "description": "Minimalist one-page simple invoice for freelancers, small businesses, and personal use. Fill in 5 fields and download instantly.",
    "isPremium": false,
    "categorySlug": "invoices",
    "categoryName": "Invoices",
    "image": "/templates/invoice-simple.jpg",
    "content": {
      "title": "Simple Invoice Template",
      "fields": [
        "yourFullName",
        "yourEmail",
        "yourPhone",
        "clientName",
        "clientEmail",
        "invoiceNumber",
        "invoiceDate",
        "dueDate",
        "item1Description",
        "item1Amount",
        "item2Description",
        "item2Amount",
        "item3Description",
        "item3Amount",
        "subtotal",
        "taxPercent",
        "taxAmount",
        "totalAmountDue",
        "paymentMethod",
        "thankYouMessage"
      ],
      "layout": {
        "header": "INVOICE",
        "footer": "{{thankYouMessage}}"
      },
      "styles": {"primaryColor": "#334155",
        "secondaryColor": "#0f172a", "layoutVariant": 2, "headingStyle": 0 },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "INVOICE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Invoice #: "
              },
              {
                "type": "text",
                "text": "{{invoiceNumber}}   |   Date: {{invoiceDate}}   |   Due: {{dueDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "From: "
              },
              {
                "type": "text",
                "text": "{{yourFullName}}   |   {{yourEmail}}   |   {{yourPhone}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "To: "
              },
              {
                "type": "text",
                "text": "{{clientName}}   |   {{clientEmail}}"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Description"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Amount"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{item1Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{item1Amount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{item2Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{item2Amount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{item3Description}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{item3Amount}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Subtotal: "
              },
              {
                "type": "text",
                "text": "{{subtotal}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Tax ({{taxPercent}}%): "
              },
              {
                "type": "text",
                "text": "{{taxAmount}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "TOTAL DUE: "
              },
              {
                "type": "text",
                "text": "{{totalAmountDue}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Pay via: "
              },
              {
                "type": "text",
                "text": "{{paymentMethod}}"
              }
            ]
          }
        ]
      }
    }
  }
];
