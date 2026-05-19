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
  title = "Best Online ITR Filing, GST & Company Registration in India | Online ITR Filing", 
  description = "Expert online ITR filing, GST registration, company incorporation, and legal services in India. E-file your income tax returns with India's top CA experts.",
  keywords = "ITR filing online, online CA services, file ITR India, GST registration online, GST return filing, company incorporation India, legal services India, trademark registration, best CA in India, tax consultant",
  url = "https://taxserve.in",
  schema
}: SEOProps) {
  
  const defaultSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Online ITR Filing",
    "description": "Expert online ITR filing, GST return, and company registration services in India.",
    "url": "https://taxserve.in",
    "areaServed": "IN",
    "priceRange": "₹499 - ₹7999",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500000"
    },
    "offers": {
      "@type": "AggregateOffer",
      "highPrice": "7999",
      "lowPrice": "499",
      "priceCurrency": "INR"
    }
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
      <meta property="og:site_name" content="Online ITR Filing" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {schema || defaultSchema}
      </script>
    </Helmet>
  );
}
