export interface Notification {
  slug: string;
  title: string;
  date: string;
  description: string;
  intro: string;
  sections: {
    title: string;
    content: string;
    links?: { text: string; url: string }[];
  }[];
}

export const notifications: Notification[] = [
  {
    slug: "income-tax-updates-september-2026",
    title: "Income Tax Updates September 2026: Foreign Assets Disclosure Scheme Rules, NRI Property TDS Reporting & More",
    date: "24 September 2026",
    description: "Income Tax Department updates for September 2026 – Notification 114/2026 (Foreign Assets of Small Taxpayers Disclosure Scheme), Notification 121/2026 on NRI property TDS reporting, Notification 120/2026 and Form 98 registration procedure.",
    intro: "Here is a simple summary of the important updates released by the Income Tax Department in September 2026.",
    sections: [
      {
        title: "1. Notification No. 121/2026 – TDS Reporting for Non-Resident Property Transactions (24 Sep 2026)",
        content: "CBDT has issued Notification No. 121/2026 which extends TDS reporting requirements for non-resident property transactions and updates Forms 132 and 141.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-09/Notification-no-121-2026.pdf" }
        ]
      },
      {
        title: "2. Notification No. 120/2026 – Registration Deadline Extended to 31 March 2027 (24 Sep 2026)",
        content: "CBDT has issued Notification No. 120/2026 extending the registration deadline for Registered Valuers and Authorised Income-tax Practitioners to 31 March 2027 and introducing revised Forms 169 and 171.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-09/Notification-no-120-2026.pdf" }
        ]
      },
      {
        title: "3. Notification No. 3 of 2026 – Registration and Form No. 98 Procedure (21 Sep 2026)",
        content: "CBDT has issued Notification No. 3 of 2026 notifying the procedure for registration of reporting person/entity and submission of Form No. 98 as per rule 160 of the Income-tax Rules, 2026.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-09/Notification-3-of-2026.pdf" }
        ]
      },
      {
        title: "4. Notification No. 114/2026 – Foreign Assets of Small Taxpayers Disclosure Scheme, 2026 (01 Sep 2026)",
        content: "CBDT has issued Notification No. 114/2026 [F. No. 370142/18/2026-TPL], notifying the rules and prescribed forms under the Foreign Assets of Small Taxpayers Disclosure Scheme, 2026.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-08/Notification%20114.pdf" }
        ]
      }
    ]
  },
  {
    slug: "income-tax-updates-august-2026",
    title: "Income Tax Updates August 2026: ITR-5, ITR-6 & ITR-7 Online and Offline Filing Now Available for AY 2026-27",
    date: "20 August 2026",
    description: "Income Tax Department updates for August 2026 – online filing and offline/Excel utilities of ITR-5, ITR-6 and ITR-7 for AY 2026-27 are now available on the e-Filing portal.",
    intro: "In August 2026, the Income Tax Department enabled filing of ITR-5, ITR-6 and ITR-7 for AY 2026-27. Here is the complete timeline.",
    sections: [
      {
        title: "1. ITR-6 Offline Utility Available (20 Aug 2026)",
        content: "Offline utility of ITR-6 for AY 2026-27 is available now for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "2. ITR-6 Online Filing Available (18 Aug 2026)",
        content: "Online filing of ITR-6 for AY 2026-27 is available now."
      },
      {
        title: "3. ITR-7 Offline Utility Available (14 Aug 2026)",
        content: "Offline utility of ITR-7 for AY 2026-27 is available for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "4. ITR-7 Online Utility Enabled (11 Aug 2026)",
        content: "Online utility of ITR-7 for AY 2026-27 is enabled for filing on the portal."
      },
      {
        title: "5. ITR-5 Offline Utility Available (07 Aug 2026)",
        content: "Offline utility of ITR-5 for AY 2026-27 is available for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "6. ITR-5 Online Utility Available (05 Aug 2026)",
        content: "The online utility of ITR-5 for AY 2026-27 is available for filing on the e-Filing portal."
      },
      {
        title: "7. ITR-6 Excel Utility Available (04 Aug 2026)",
        content: "The Excel utility of ITR-6 for AY 2026-27 is now available for filing on the e-Filing portal.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      }
    ]
  },
  {
    slug: "income-tax-updates-july-2026",
    title: "Income Tax Updates July 2026: New Form ITR-BN, Foreign Assets in AIS, TDS Relief for IFSC Units & More",
    date: "27 July 2026",
    description: "Income Tax Department updates for July 2026 – Notification 97/2026 (Form ITR-BN), foreign asset information in AIS, TDS exemptions for IFSC Units (Notifications 80/2026 and 74/2026), ITR-5 and ITR-7 Excel utilities and more.",
    intro: "Here is a simple summary of the important updates released by the Income Tax Department in July 2026.",
    sections: [
      {
        title: "1. Notification No. 97/2026 – New Form ITR-BN (27 Jul 2026)",
        content: "The CBDT, vide Notification No. 97/2026 [F. No. 370142/11/2026-TPL], has notified the Income-tax (Third Amendment) Rules, 2026. The notification introduces Form ITR-BN and amends Rule 332 by inserting Appendix IV to govern returns relating to search and requisition cases. These amendments come into effect from 1 April 2026.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Notification-97-2026.pdf" }
        ]
      },
      {
        title: "2. Foreign Asset Information Now Visible in AIS (20 Jul 2026)",
        content: "CBDT has enabled taxpayers to view their Foreign Asset Information (CRS/FATCA) through the Annual Information Statement (AIS) on the e-Filing portal. A note regarding this facility has also been hosted.",
        links: [
          { text: "Annexure (PDF)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Annexure.pdf" },
          { text: "Office Memorandum (PDF)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/OM_17.07.2026_Hosting%20of%20Note%20on%20CRS%20in%20AIS.pdf" }
        ]
      },
      {
        title: "3. Notification No. 80/2026 – TDS Exemption for IFSC Units (13 Jul 2026)",
        content: "CBDT has issued Notification No. 80/2026 [F. No. 275/19/2026-IT(B)], notifying that specified payments such as interest, dividends, professional fees, commission, brokerage and other financial service-related income received by eligible IFSC Units shall be exempt from TDS under the Income-tax Act, 2025.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Notification-80-2026.pdf" }
        ]
      },
      {
        title: "4. ITR-7 Excel Utility Available (09 Jul 2026)",
        content: "Excel utility of ITR-7 for AY 2026-27 is available for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "5. ITR-5 Excel Utility Available (07 Jul 2026)",
        content: "Excel utility of ITR-5 for AY 2026-27 is now available for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "6. Notification No. 74/2026 – No TDS on Aircraft Lease Rent Paid to IFSC Units (06 Jul 2026)",
        content: "CBDT has issued Notification No. 74/2026 on non-deduction of TDS on aircraft lease rent paid to IFSC Units under Section 147 of the Income-tax Act, 2025.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/ENnotification-no-74-2026.pdf" }
        ]
      },
      {
        title: "7. Section 10(46) Exemption to Mussoorie Dehradun Development Authority (06 Jul 2026)",
        content: "CBDT has issued a notification under Section 10(46) granting income tax exemption to the Mussoorie Dehradun Development Authority for Assessment Years 2022-23 and 2023-24.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Notification%20No.%2073_0.pdf" }
        ]
      },
      {
        title: "8. Condonation of Delay in Filing Form No. 10AB (06 Jul 2026)",
        content: "CBDT has issued a circular on condonation of delay in filing Form No. 10AB electronically for approval under clause (ii) of the first proviso to section 80G(5) of the Income-tax Act, 1961.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Circular-No-06-2026.pdf" }
        ]
      }
    ]
  },
  {
    slug: "income-tax-updates-june-2026",
    title: "Income Tax Updates June 2026: ITR-3 Filing Opens, Updated Return Utilities for AY 2022-23 & New Statutory Forms",
    date: "30 June 2026",
    description: "Income Tax Department updates for June 2026 – ITR-3 online, Excel and offline utilities for AY 2026-27, updated return (ITR-U) utilities for AY 2022-23 and the second set of statutory forms under Income Tax Rules, 2026.",
    intro: "Here is a simple summary of the important updates released by the Income Tax Department in June 2026.",
    sections: [
      {
        title: "1. Second Set of Statutory Forms Rolled Out (30 Jun 2026)",
        content: "The second set of statutory forms as per the Income Tax Rules, 2026 has been rolled out on the e-Filing portal."
      },
      {
        title: "2. ITR-3 Offline Utility Available (23 Jun 2026)",
        content: "Offline utility for ITR-3 for AY 2026-27 is available for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "3. ITR-3 Online Filing and Excel Utility Enabled (19 Jun 2026)",
        content: "Online filing and Excel utility of ITR-3 for AY 2026-27 is enabled on the e-Filing portal.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "4. Updated Return Utilities for AY 2022-23 (19 Jun 2026)",
        content: "Excel utilities for filing updated return for ITR-1 to ITR-7 for AY 2022-23 as per the Finance Act, 2026 are available for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      }
    ]
  },
  {
    slug: "income-tax-updates-may-2026",
    title: "Income Tax Updates May 2026: ITR-1, ITR-2 & ITR-4 Filing Now Open for AY 2026-27",
    date: "29 May 2026",
    description: "Income Tax Department updates for May 2026 – online filing, Excel and offline utilities of ITR-1, ITR-2 and ITR-4 for AY 2026-27 are enabled on the e-Filing portal.",
    intro: "ITR filing season for AY 2026-27 started in May 2026. Here is when each form became available.",
    sections: [
      {
        title: "1. ITR-2 Offline Utility Available (29 May 2026)",
        content: "Offline utility for ITR-2 for AY 2026-27 is available for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "2. ITR-2 Online Filing and Excel Utility Enabled (26 May 2026)",
        content: "Online filing and Excel utility of ITR-2 for AY 2026-27 are enabled on the e-Filing portal.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "3. ITR-1 and ITR-4 Offline Utilities Available (20 May 2026)",
        content: "Offline utilities for ITR-1 and ITR-4 for AY 2026-27 are available for filing.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      },
      {
        title: "4. ITR-1 and ITR-4 Online Filing and Excel Utility Enabled (15 May 2026)",
        content: "Online filing and Excel utility for ITR-1 and ITR-4 for AY 2026-27 are enabled on the e-Filing portal.",
        links: [
          { text: "Official link", url: "https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns" }
        ]
      }
    ]
  },
  {
    slug: "income-tax-updates-april-2026",
    title: "Income Tax Updates April 2026: New ITR Forms Notified for AY 2026-27, Corrigendum, Form 145 & 146 Utility & More",
    date: "24 April 2026",
    description: "Income Tax Department updates for April 2026 – ITR-1 to ITR-7, ITR-V and ITR-U forms notified for AY 2026-27, corrigendum notifications, offline utility for Form 145 and 146, and CBDT circulars.",
    intro: "April 2026 marked the start of the new Income-tax Act, 2025 and Income-tax Rules, 2026. Here is a simple summary of the important updates.",
    sections: [
      {
        title: "1. Corrigendum to ITR Form Notifications (24 Apr 2026)",
        content: "CBDT issued corrigendum notifications related to Forms ITR-1 & 4, ITR-2, ITR-3, ITR-5, ITR-6, ITR-7 and ITR-U.",
        links: [
          { text: "ITR-1 & 4 (No. 57)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.57_2026.pdf" },
          { text: "ITR-2 (No. 58)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.58_2026.pdf" },
          { text: "ITR-3 (No. 59)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.59_2026.pdf" },
          { text: "ITR-5 (No. 60)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.60_2026.pdf" },
          { text: "ITR-6 (No. 61)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.61_2026.pdf" },
          { text: "ITR-7 (No. 62)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.62_2026.pdf" },
          { text: "ITR-U (No. 63)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.63_2026.pdf" }
        ]
      },
      {
        title: "2. Offline Utility for Form 145 and Form 146 (15 Apr 2026)",
        content: "Offline utility for Form 145 and Form 146 has been enabled on the e-Filing portal. Users can download, fill and submit the forms directly through the utility available under “Downloads → Income tax Forms → Income tax Act, 2025”."
      },
      {
        title: "3. ITR Forms Notified for AY 2026-27 (08 Apr 2026)",
        content: "CBDT has notified the ITR-1 & 4, ITR-2, ITR-3, ITR-5, ITR-6, ITR-7, ITR-V and ITR-U forms for AY 2026-27.",
        links: [
          { text: "ITR-1 & 4 (No. 45)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.45_2026.pdf" },
          { text: "ITR-2 (No. 46)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.46_2026.pdf" },
          { text: "ITR-3 (No. 47)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification_No_47_2026.pdf" },
          { text: "ITR-5 (No. 48)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.48_2026.pdf" },
          { text: "ITR-6 (No. 49)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.49_2026.pdf" },
          { text: "ITR-7 (No. 50)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.50_2026.pdf" },
          { text: "ITR-V (No. 51)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.51_2026.pdf" },
          { text: "ITR-U (No. 52)", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-04/Notification%20No.52_2026.pdf" }
        ]
      },
      {
        title: "4. Clarification on Condonation of Delay in Filing Form No. 10A (01 Apr 2026)",
        content: "CBDT issued a clarification regarding the power to condone delay in filing of Form No. 10A under sub-clause (i) of clause (ac) of sub-section (1) of section 12A of the Income Tax Act, 1961.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-03/circular-no-1-2026-pdf.pdf" }
        ]
      },
      {
        title: "5. Extension of Timeline for Issuing TDS Certificates (01 Apr 2026)",
        content: "CBDT issued an order under section 119 of the Income-tax Act, 1961 for extension of the timeline for issuance of TDS certificate under section 203 of the Act for the quarter ending 31 December 2025.",
        links: [
          { text: "Official PDF", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-03/circular-2-2026-pdf.pdf" }
        ]
      }
    ]
  }
];
