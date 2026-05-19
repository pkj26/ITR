const fs = require('fs');

const pages = [
  { file: 'src/pages/Terms.tsx', title: 'Terms & Conditions', url: '/terms-conditions' },
  { file: 'src/pages/Privacy.tsx', title: 'Privacy Policy', url: '/privacy-policy' },
  { file: 'src/pages/Refund.tsx', title: 'Refund Policy', url: '/refund-policy' },
  { file: 'src/pages/Disclaimer.tsx', title: 'Disclaimer', url: '/disclaimer' },
];

for (const { file, title, url } of pages) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Add import
  if (!content.includes("import SEO")) {
    content = content.replace("import React from 'react';", "import React from 'react';\nimport SEO from '../components/SEO';");
  }
  
  // Add SEO component
  const seoTag = `\n      <SEO title="${title} | Online ITR Filing" url="https://taxserve.in/#${url}" />`;
  if (!content.includes("<SEO")) {
    content = content.replace('<main className="flex-grow bg-white py-16">', `<main className="flex-grow bg-white py-16">${seoTag}`);
  }
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
}
