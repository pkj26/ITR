import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  schema?: string;
  noindex?: boolean;
}

export default function SEO({ 
  title = "Online ITR Filing India & GST Registration Jaipur | KarSeva", 
  description = "File Income Tax Return (ITR) online across India and get fast-track GST registration in Jaipur with certified CAs. Maximum tax refund & 100% compliance.",
  keywords = "Online ITR Filing India, GST Registration Jaipur, GST return filing Jaipur, CA in Vidyadhar Nagar Jaipur, best CA in Jaipur, company registration Jaipur, income tax return online, tax consultant near me, GST notice reply CA, trademark registration India, KarSeva",
  url = "https://karseva.in/",
  schema,
  noindex = false
}: SEOProps) {
  useLayoutEffect(() => {
    const staticTags = document.head.querySelectorAll('[data-static-seo="true"]');
    staticTags.forEach((tag) => tag.remove());
  }, []);
  
  const localBusinessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AccountingService"],
    "name": "KarSeva",
    "url": "https://karseva.in",
    "telephone": "+919783699635",
    "email": "Karsevaa2026@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F51 Alankar Plaza, Central Spine, Vidyadhar Nagar",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302039",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Sa 10:00-19:00",
    "areaServed": "IN"
  });

  // High-performance unified Knowledge Graph schema structure favored by Google Search Engine
  const defaultSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://karseva.in/#organization",
        "name": "KarSeva",
        "url": "https://karseva.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://karseva.in/favicon.png",
          "caption": "KarSeva Logo"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919783699635",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
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
      <meta property="og:image" content="https://karseva.in/favicon.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://karseva.in/favicon.png" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="bingbot" content={noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur" />
      <meta name="geo.position" content="26.9602;75.7766" />
      <meta name="ICBM" content="26.9602, 75.7766" />

      <script type="application/ld+json">
        {localBusinessSchema}
      </script>
      <script type="application/ld+json">
        {schema || defaultSchema}
      </script>
    </Helmet>
  );
}
