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
    slug: 'income-tax-updates-july-august-2026',
    title: 'Income Tax Updates July–August 2026: New Form ITR-BN, Foreign Assets in AIS, TDS Relief for IFSC Units & More',
    date: '26 September 2026',
    description: 'Latest Income Tax Department updates for July–August 2026 – ITR-5, ITR-6, ITR-7 Excel utilities for AY 2026-27, Notification 97/2026 (Form ITR-BN), foreign asset info in AIS, and TDS exemption for IFSC Units.',
    intro: 'The Income Tax Department has released several important updates on the e-Filing portal over the last few weeks. Here is a simple summary of what changed and what it means for taxpayers.',
    sections: [
      {
        title: '1. ITR-6 Excel Utility for AY 2026-27 is Live (04 Aug 2026)',
        content: 'The Excel utility of ITR-6 for AY 2026-27 is now available for filing on the e-Filing portal.',
        links: [{ text: 'Official link', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns' }]
      },
      {
        title: '2. Notification No. 97/2026 – New Form ITR-BN (27 Jul 2026)',
        content: 'The CBDT, vide Notification No. 97/2026 [F. No. 370142/11/2026-TPL], has notified the Income-tax (Third Amendment) Rules, 2026. The notification introduces Form ITR-BN and amends Rule 332 by inserting Appendix IV to govern returns relating to search and requisition cases. These amendments come into effect from 1 April 2026.',
        links: [{ text: 'Official PDF', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Notification-97-2026.pdf' }]
      },
      {
        title: '3. Foreign Asset Information Now Visible in AIS (20 Jul 2026)',
        content: 'CBDT has enabled taxpayers to view their Foreign Asset Information (CRS/FATCA) through the Annual Information Statement (AIS) on the e-Filing portal. A note regarding this facility has also been hosted.',
        links: [
            { text: 'Official PDF (Annexure)', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Annexure.pdf' },
            { text: 'Official PDF (Note)', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/OM_17.07.2026_Hosting%20of%20Note%20on%20CRS%20in%20AIS.pdf' }
        ]
      },
      {
        title: '4. Notification No. 80/2026 – TDS Exemption for IFSC Units (13 Jul 2026)',
        content: 'CBDT has issued Notification No. 80/2026 [F. No. 275/19/2026-IT(B)], notifying that specified payments such as interest, dividends, professional fees, commission, brokerage and other financial service-related income received by eligible IFSC Units shall be exempt from TDS under the Income-tax Act, 2025.',
        links: [{ text: 'Official PDF', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Notification-80-2026.pdf' }]
      },
      {
        title: '5. ITR-7 and ITR-5 Excel Utilities Released (09 Jul & 07 Jul 2026)',
        content: 'The Excel utilities of ITR-7 and ITR-5 for AY 2026-27 are now available for filing.',
        links: [{ text: 'Official link', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns' }]
      },
      {
        title: '6. Section 10(46) Exemption to Mussoorie Dehradun Development Authority (06 Jul 2026)',
        content: 'CBDT has issued a notification under Section 10(46) granting income tax exemption to the Mussoorie Dehradun Development Authority for Assessment Years 2022-23 and 2023-24.',
        links: [{ text: 'Official PDF', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Notification%20No.%2073_0.pdf' }]
      },
      {
        title: '7. Condonation of Delay in Filing Form No. 10AB (06 Jul 2026)',
        content: 'CBDT has issued a circular on condonation of delay in filing Form No. 10AB electronically for approval under clause (ii) of the first proviso to section 80G(5) of the Income-tax Act, 1961.',
        links: [{ text: 'Official PDF', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-07/Circular-No-06-2026.pdf' }]
      }
    ]
  }
];
