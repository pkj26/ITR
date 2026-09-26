import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  schema?: string;
}

export default function SEO({ 
  title = "Best Online ITR Filing, GST Registration & CA Services in Jaipur & India | KarSeva", 
  description = "Expert online ITR filing, GST registration, company incorporation, and legal services in Jaipur & Pan-India. E-file your income tax returns with certified CA experts.",
  keywords = "GST registration Jaipur, GST return filing Jaipur, online ITR filing India, CA in Vidyadhar Nagar Jaipur, best CA in Jaipur, company registration Jaipur, income tax return online, tax consultant near me, GST notice reply CA, trademark registration India, KarSeva, ITR 1 filing, ITR 2 filing, ITR 4 filing, private limited company registration, GST return filing online",
  url = "https://karseva.in",
  schema
}: SEOProps) {
  
  // High-performance unified Knowledge Graph schema structure favored by Google Search Engine
  const defaultSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://karseva.in/#organization",
        "name": "KarSeva",
        "alternateName": "KarSeva India",
        "url": "https://karseva.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://karseva.in/favicon_image_1784640809089.jpg",
          "caption": "KarSeva Logo"
        },
        "foundingDate": "2014",
        "founder": {
          "@type": "Person",
          "name": "Tax Experts and Chartered Accountants of India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-97836-99635",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://twitter.com/karsevaindia",
          "https://facebook.com/karsevaindia"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://karseva.in/#website",
        "url": "https://karseva.in",
        "name": "KarSeva",
        "description": "E-file your Income Tax Returns and manage GST compliance easily with CA-assisted tax filing.",
        "publisher": {
          "@id": "https://karseva.in/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://karseva.in/pricing?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "AccountingService",
        "@id": "https://karseva.in/#service",
        "name": "KarSeva CA & GST Tax Services",
        "image": "https://karseva.in/favicon_image_1784640809089.jpg",
        "description": "India's leading platform for online ITR filing, GST return, and company registration services in Jaipur and Pan India.",
        "url": "https://karseva.in",
        "telephone": "+91-97836-99635",
        "priceRange": "INR ₹499 - ₹7999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "F51 Alankar Plaza, Central Spine, Vidyadhar Nagar",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302039",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.9602",
          "longitude": "75.7766"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "CA & GST Compliance Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "GST Registration in Jaipur & Pan India",
                "description": "Fast 3-7 day GST registration with dedicated CA support for shops, e-commerce sellers, and companies."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)",
                "description": "Monthly and quarterly GST return filing with 100% accurate ITC reconciliation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Online Income Tax Return (ITR) Filing",
                "description": "Expert CA-assisted ITR filing for salaried individuals, freelancers, businesses, and traders."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Private Limited & LLP Company Registration",
                "description": "Complete online company incorporation with MCA name approval, DSC, DIN, MOA, and AOA."
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1534020",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://karseva.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How to file ITR online in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can easily file your Income Tax Return (ITR) online in India through the KarSeva platform. Just select your applicable plan, upload your Form 16, and our expert CAs will prepare and e-file your ITR directly with the Income Tax Department to ensure maximum tax refund."
            }
          },
          {
            "@type": "Question",
            "name": "Is CA assistance required for ITR filing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While you can file ITR yourself on the government portal, CA-assisted filing ensures 100% accuracy. A Chartered Accountant helps claim maximum tax deductions under sections like 80C, 80D, and HRA, and significantly reduces the risk of receiving a defective return notice from the IT department."
            }
          },
          {
            "@type": "Question",
            "name": "When is GST Registration mandatory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GST Registration is legally mandatory for businesses involved in the intra-state supply of goods if their turnover exceeds ₹40 Lakhs (₹20 Lakhs for special category states). For service providers, the threshold is ₹20 Lakhs. It is also mandatory regardless of turnover for inter-state suppliers and e-commerce aggregators."
            }
          },
          {
            "@type": "Question",
            "name": "What is required for Private Limited Company Registration in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To register a Private Limited Company, you need a minimum of 2 directors and 2 shareholders. Documents required include PAN cards, Aadhaar cards, bank statements of directors, and a utility bill for the registered office address. KarSeva handles the DIN, DSC, name approval, MOA, and AOA drafting process online."
            }
          }
        ]
      }
    ]
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="KarSeva" />
      <meta property="og:image" content="https://karseva.in/favicon_image_1784640809089.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://karseva.in/favicon_image_1784640809089.jpg" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur" />
      <meta name="geo.position" content="26.9602;75.7766" />
      <meta name="ICBM" content="26.9602, 75.7766" />

      <script type="application/ld+json">
        {schema || defaultSchema}
      </script>
    </Helmet>
  );
}
