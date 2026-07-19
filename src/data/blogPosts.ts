export interface BlogSection {
  type: 'h2' | 'h3' | 'paragraph' | 'list' | 'note';
  text: string | string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  readTime: string;
  author: string;
  authorRole: string;
  category: string;
  excerpt: string;
  keywords: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-file-itr-online-step-by-step-guide',
    title: 'How to File ITR Online: Complete Step-by-Step Guide for FY 2025-26',
    metaTitle: 'How to File ITR Online: Step-by-Step Guide for FY 2025-26',
    metaDescription: 'Step-by-step guide on how to file ITR online in India for FY 2025-26. Claim maximum deductions & avoid notices with CA-assisted tax e-filing.',
    publishDate: 'July 15, 2026',
    readTime: '6 min read',
    author: 'CA Prakash Sharma',
    authorRole: 'Senior Tax Consultant',
    category: 'Income Tax',
    excerpt: 'Confused about how to e-file your Income Tax Return (ITR)? Here is a complete guide to online filing, choosing the correct ITR form, and claiming maximum refunds.',
    keywords: 'how to file itr online, e-filing income tax return, choose ITR form, tax refund, ITR filing guide',
    sections: [
      {
        type: 'paragraph',
        text: 'Filing your Income Tax Return (ITR) is a crucial annual responsibility for every earning citizen in India. With the digital push, the Income Tax Department has simplified the e-filing process on the official portal. However, choosing the wrong form or missing key deductions can lead to defective return notices or lower tax refunds.'
      },
      {
        type: 'h2',
        text: 'Who Needs to File ITR for FY 2025-26?'
      },
      {
        type: 'paragraph',
        text: 'Under Indian tax laws, filing an ITR is mandatory if your gross total income exceeds the basic exemption limit before claiming deductions. Under the default New Tax Regime, the exemption limit is ₹3,00,000, while under the Old Tax Regime, it remains ₹2,50,000 for individuals below 60 years of age.'
      },
      {
        type: 'h3',
        text: 'Mandatory Filing Cases Regardless of Income'
      },
      {
        type: 'list',
        text: [
          'If you have deposited more than ₹1 crore in one or more current accounts.',
          'If you have incurred an expenditure of more than ₹2 lakh on foreign travel.',
          'If your electricity consumption bills exceed ₹1 lakh during the financial year.',
          'If you hold foreign assets or have signing authority in any foreign account.'
        ]
      },
      {
        type: 'h2',
        text: 'Step-by-Step Process to File ITR Online'
      },
      {
        type: 'paragraph',
        text: 'To begin the online filing process, you must have your PAN, Aadhaar, Form 16 (for salaried employees), bank statements, and investment proofs ready. Follow these simple steps:'
      },
      {
        type: 'h3',
        text: 'Step 1: Registration and Login on the E-filing Portal'
      },
      {
        type: 'paragraph',
        text: 'Visit the official Income Tax e-filing portal. If you are a new user, register using your PAN. Existing users can log in using their PAN/Aadhaar as the user ID and entering their secure password.'
      },
      {
        type: 'h3',
        text: 'Step 2: Access the ITR Filing Form'
      },
      {
        type: 'paragraph',
        text: 'Once logged in, click on "e-File" > "Income Tax Returns" > "File Income Tax Return". Select the appropriate Assessment Year (AY 2026-27 for FY 2025-26), choose the filing mode as "Online", and select "Individual" as the taxpayer status.'
      },
      {
        type: 'h3',
        text: 'Step 3: Select the Correct ITR Form'
      },
      {
        type: 'paragraph',
        text: 'Choosing the right form is critical to avoid rejection:'
      },
      {
        type: 'list',
        text: [
          'ITR-1 (Sahaj): For resident individuals with income from salary, one house property, and other sources (interest, etc.) totaling up to ₹50 Lakhs.',
          'ITR-2: For individuals and HUFs not having income from business or profession, but having capital gains, foreign assets, or multiple house properties.',
          'ITR-3: For individuals having income from a proprietary business or profession.',
          'ITR-4 (Sugam): For individuals, HUFs, and firms having presumptive business income under Section 44AD, 44ADA, or 44AE.'
        ]
      },
      {
        type: 'h3',
        text: 'Step 4: Verify Pre-filled Data and Upload Documents'
      },
      {
        type: 'paragraph',
        text: 'Verify your personal information, contact details, bank accounts, and pre-filled financial details fetched from your AIS (Annual Information Statement) and Form 26AS. Confirm the TDS/TCS amounts matched with your form.'
      },
      {
        type: 'h3',
        text: 'Step 5: File, Pay Taxes (if any), and E-Verify'
      },
      {
        type: 'paragraph',
        text: 'Review your tax calculation. If any tax is due, pay it online. If there is a refund, ensure your bank account is pre-validated. Submit your return and remember to e-Verify your ITR using Aadhaar OTP within 30 days of filing. Unverified ITR is treated as invalid.'
      },
      {
        type: 'note',
        text: 'Filing ITR can get complicated if you have multiple sources of income, stock market investments, or crypto gains. Hiring a certified tax expert or Chartered Accountant ensures 100% compliance and maximizes your deductions.'
      }
    ]
  },
  {
    slug: 'gst-registration-documents-required-india',
    title: 'GST Registration Documents Required & Step-by-Step Online Process',
    metaTitle: 'GST Registration Documents & Online Process | KarSeva',
    metaDescription: 'Complete checklist of GST registration documents for individuals, partnerships, and Pvt Ltd companies. Step-by-step online process explained.',
    publishDate: 'July 12, 2026',
    readTime: '5 min read',
    author: 'CA Amit Verma',
    authorRole: 'GST & Corporate Law Expert',
    category: 'GST',
    excerpt: 'Planning to apply for a GST number? Check the mandatory document list for different business entities and learn how to get your GST registration smoothly.',
    keywords: 'gst registration documents, online gst number process, partner gst documents, mandatory gst registration',
    sections: [
      {
        type: 'paragraph',
        text: 'Getting a Goods and Services Tax (GST) registration is one of the most vital steps to formalize your business in India. A GSTIN (GST Identification Number) allows you to collect tax from customers, claim Input Tax Credit (ITC), and sell goods across state lines or online platforms like Amazon and Flipkart.'
      },
      {
        type: 'h2',
        text: 'Who must compulsorily register for GST?'
      },
      {
        type: 'paragraph',
        text: 'GST registration is mandatory for businesses depending on turnover thresholds or activities:'
      },
      {
        type: 'list',
        text: [
          'Service Providers: Annual turnover exceeds ₹20 Lakhs (₹10 Lakhs for special category North-Eastern states).',
          'Goods Suppliers: Annual turnover exceeds ₹40 Lakhs (₹20 Lakhs for special category states).',
          'E-commerce Sellers: Anyone selling goods through e-commerce operators, regardless of their turnover.',
          'Inter-State Suppliers: Businesses supplying goods or services from one state to another.'
        ]
      },
      {
        type: 'h2',
        text: 'Documents Required for GST Registration'
      },
      {
        type: 'paragraph',
        text: 'The documentation varies depending on the type of business entity. Let\'s look at the specific requirements.'
      },
      {
        type: 'h3',
        text: '1. For Sole Proprietor / Individual Businesses'
      },
      {
        type: 'list',
        text: [
          'PAN Card and Aadhaar Card of the owner.',
          'Passport size photograph of the proprietor.',
          'Bank account details (cancelled cheque or bank statement with IFSC code).',
          'Proof of business address (Electricity bill, property tax receipt, or municipal khata copy).',
          'Consent letter or Rent Agreement (if the property is rented).'
        ]
      },
      {
        type: 'h3',
        text: '2. For Partnership Firms & LLPs'
      },
      {
        type: 'list',
        text: [
          'Partnership deed or LLP agreement.',
          'PAN card of the partnership firm / LLP.',
          'PAN and Aadhaar card of all active partners.',
          'Photographs of all authorized partners.',
          'Address proof of the principal place of business.'
        ]
      },
      {
        type: 'h3',
        text: '3. For Private Limited Companies'
      },
      {
        type: 'list',
        text: [
          'Certificate of Incorporation (COI) issued by Ministry of Corporate Affairs.',
          'PAN Card of the company.',
          'PAN and Aadhaar card of all Directors.',
          'Board resolution authorizing a director to apply for GST.',
          'Proof of registered company office address.'
        ]
      },
      {
        type: 'h2',
        text: 'How to Apply for GST Registration Online'
      },
      {
        type: 'paragraph',
        text: 'The application is submitted online on the government GST portal (gst.gov.in). It involves two main parts:'
      },
      {
        type: 'list',
        text: [
          'Part-A: Enter basic details like PAN, mobile number, and email. You will receive a Temporary Reference Number (TRN) after mobile and email OTP verification.',
          'Part-B: Log in using the TRN, upload all the required documents, enter details of business partners, describe goods/services, and submit using Aadhaar OTP or DSC (Digital Signature Certificate).'
        ]
      },
      {
        type: 'note',
        text: 'Errors in address proofs or mismatching names in PAN can lead to queries from tax officers (GST REG-03) and possible rejection. Seeking expert assistance for your GST registration ensures a hassle-free and swift approval within 3-5 working days.'
      }
    ]
  },
  {
    slug: 'tax-saving-deductions-beyond-80c-india',
    title: 'Top Tax-Saving Deductions Beyond Section 80C You Must Know',
    metaTitle: 'Tax-Saving Deductions Beyond 80C in India | KarSeva',
    metaDescription: 'Discover the best tax-saving deductions beyond Section 80C under the Indian Income Tax Act. Save tax on health insurance, NPS, home loans, and more.',
    publishDate: 'July 10, 2026',
    readTime: '5 min read',
    author: 'CA Prakash Sharma',
    authorRole: 'Senior Tax Consultant',
    category: 'Tax Planning',
    excerpt: 'Already exhausted your ₹1.5 Lakh limit under Section 80C? Here are the best legal tax-saving investments and exemptions under Sections 80D, 80CCD(1B), and more.',
    keywords: 'tax-saving deductions, section 80D health insurance, NPS deduction section 80CCD, save income tax india',
    sections: [
      {
        type: 'paragraph',
        text: 'Section 80C of the Income Tax Act is the most popular route for tax saving in India. However, the ₹1,50,000 annual limit of 80C is easily exhausted by PPF, ELSS, EPF, children tuition fees, and home loan principal repayments. Fortunately, the Income Tax Act offers several other legal deductions to lower your taxable income further.'
      },
      {
        type: 'h2',
        text: 'Key Tax Deductions to Explore Beyond 80C'
      },
      {
        type: 'paragraph',
        text: 'By planning your investments across different sections, you can significantly reduce your tax liability under the Old Tax Regime. Here are the top deductions you should utilize:'
      },
      {
        type: 'h3',
        text: '1. Section 80D: Health Insurance Premium'
      },
      {
        type: 'paragraph',
        text: 'You can claim a deduction for premiums paid towards health insurance for yourself, your spouse, children, and parents. This deduction is over and above the 80C limit.'
      },
      {
        type: 'list',
        text: [
          'Up to ₹25,000 for self, spouse, and dependent children (increases to ₹50,000 if self/spouse is a senior citizen).',
          'Additional ₹25,000 for parents\' health insurance (increases to ₹50,000 if parents are senior citizens).',
          'A maximum deduction of up to ₹1,00,000 can be claimed under Section 80D if both you and your parents are senior citizens.'
        ]
      },
      {
        type: 'h3',
        text: '2. Section 80CCD(1B): Additional NPS Contribution'
      },
      {
        type: 'paragraph',
        text: 'Investing in the National Pension System (NPS) can get you an additional deduction of up to ₹50,000. This is independent of the ₹1.5 Lakh limit under Section 80C/80CCD(1), meaning you can invest ₹1.5 Lakh in 80C and an additional ₹50,000 in NPS to get a total deduction of ₹2,00,000.'
      },
      {
        type: 'h3',
        text: '3. Section 24(b): Interest on Home Loan'
      },
      {
        type: 'paragraph',
        text: 'If you have a home loan for a self-occupied property, the interest paid on the loan is deductible up to ₹2,00,000 per financial year under Section 24(b) of the Income Tax Act. For rented properties, there is no upper limit on the interest deduction, although the overall loss from house property that can be offset against other income is capped at ₹2,00,000.'
      },
      {
        type: 'h3',
        text: '4. Section 80E: Interest on Education Loan'
      },
      {
        type: 'paragraph',
        text: 'Taxpayers who have taken an education loan for higher studies for self, spouse, or children can claim a deduction on the interest component under Section 80E. The great benefit of this section is that there is no upper monetary limit on the interest deduction. It can be claimed for a maximum of 8 years or until the interest is fully paid, whichever is earlier.'
      },
      {
        type: 'h3',
        text: '5. Section 80G: Charitable Donations'
      },
      {
        type: 'paragraph',
        text: 'Donations made to specific relief funds, charitable trusts, and government-approved institutions qualify for a 50% or 100% tax deduction under Section 80G. Ensure you receive a valid receipt along with a Form 10BE from the trust to claim this deduction during ITR filing.'
      },
      {
        type: 'note',
        text: 'While the default New Tax Regime offers lower tax slabs, it does not allow most of these deductions (except 80CCD(2) for employer contribution to NPS). Our tax experts can run a comparative analysis of your income to recommend the best regime and optimal investments for your financial profile.'
      }
    ]
  },
  {
    slug: 'company-registration-process-step-by-step-india',
    title: 'Private Limited Company Registration: Step-by-Step Incorporation Process',
    metaTitle: 'Pvt Ltd Company Registration Process India | KarSeva',
    metaDescription: 'Comprehensive step-by-step guide to Private Limited Company registration in India. Learn about DSC, DIN, SPICe+ form, and mandatory compliance for startups.',
    publishDate: 'July 05, 2026',
    readTime: '6 min read',
    author: 'CA Amit Verma',
    authorRole: 'GST & Corporate Law Expert',
    category: 'Business Setup',
    excerpt: 'Looking to incorporate your startup? Understand the step-by-step registration process of a Private Limited Company under the Ministry of Corporate Affairs (MCA).',
    keywords: 'company registration online, pvt ltd company incorporation, mca spice form, register startup india',
    sections: [
      {
        type: 'paragraph',
        text: 'Incorporating a Private Limited (Pvt Ltd) Company is the gold standard for startup registration in India. It offers limited liability protection, high credibility among investors, ease of raising equity funds, and permanent existence. The Ministry of Corporate Affairs (MCA) has fully digitized the incorporation process to encourage the Startup India initiative.'
      },
      {
        type: 'h2',
        text: 'Requirements for PVT LTD Registration'
      },
      {
        type: 'paragraph',
        text: 'Before initiating the incorporation process, make sure your startup meets the basic legal requirements:'
      },
      {
        type: 'list',
        text: [
          'Minimum Directors: Two directors (at least one must be an Indian resident).',
          'Minimum Shareholders: Two shareholders (directors can also be shareholders).',
          'No Minimum Capital: There is no legal minimum paid-up capital requirement to start a company.',
          'Registered Office: A physical address in India is mandatory to serve as the registered office of the company.'
        ]
      },
      {
        type: 'h2',
        text: 'Step-by-Step Incorporation Process via SPICe+'
      },
      {
        type: 'paragraph',
        text: 'The Ministry of Corporate Affairs has integrated multiple services into a single web form called SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus). Here is the workflow:'
      },
      {
        type: 'h3',
        text: 'Step 1: Obtain Digital Signature Certificate (DSC)'
      },
      {
        type: 'paragraph',
        text: 'Since all applications are filed digitally, the proposed directors must obtain a Class 3 Digital Signature Certificate (DSC) to sign the incorporation forms online. You will need a passport-sized photo, PAN card, Aadhaar card, and video/SMS validation for this.'
      },
      {
        type: 'h3',
        text: 'Step 2: Apply for Company Name Reservation'
      },
      {
        type: 'paragraph',
        text: 'Use SPICe+ Part A to reserve a unique name. The name must be unique, non-offensive, and must not conflict with any existing trademark. You can submit up to two preferred names. Upon approval, the name is reserved for 20 days.'
      },
      {
        type: 'h3',
        text: 'Step 3: Draft SPICe+ Part B & Charter Documents (MOA & AOA)'
      },
      {
        type: 'paragraph',
        text: 'Fill out SPICe+ Part B, which handles:'
      },
      {
        type: 'list',
        text: [
          'Application for Director Identification Number (DIN) for up to 3 directors.',
          'Details of the company capital structure, shares allotment, and office address.',
          'Drafting of Memorandum of Association (MOA) outlining company objects, and Articles of Association (AOA) containing internal management rules.',
          'Application for PAN and TAN of the new company.'
        ]
      },
      {
        type: 'h3',
        text: 'Step 4: File and Pay Fees'
      },
      {
        type: 'paragraph',
        text: 'Upload the linked e-forms along with the DSC of the directors. Pay the government stamp duty and incorporation fees online. For startups with nominal capital up to ₹15 Lakhs, the MCA has waived the zero-fee incorporation scheme, so you only pay stamp duty and PAN/TAN fee.'
      },
      {
        type: 'h3',
        text: 'Step 5: Receive Certificate of Incorporation'
      },
      {
        type: 'paragraph',
        text: 'Once the Registrar of Companies (ROC) reviews and approves your documents, you will receive the Certificate of Incorporation (COI) containing your Corporate Identity Number (CIN). The PAN and TAN will also be allotted instantly.'
      },
      {
        type: 'note',
        text: 'After incorporation, you must open a bank account, deposit the share capital, and file a Commencement of Business certificate (Form INC-20A) within 180 days before starting any operations. Getting CA-assisted registration prevents delays and guarantees complete compliance from Day 1.'
      }
    ]
  }
];
