const fs = require('fs');
const path = require('path');

const filesToReplace = [
  'src/pages/Journey.tsx',
  'src/pages/Refund.tsx',
  'src/pages/Disclaimer.tsx',
  'src/pages/Home.tsx',
  'src/pages/Pricing.tsx',
  'src/pages/Terms.tsx',
  'src/pages/Privacy.tsx',
  'src/pages/AboutUs.tsx',
  'src/components/SEO.tsx',
  'src/App.tsx',
  'index.html',
  'public/sitemap.xml',
  'public/robots.txt'
];

filesToReplace.forEach(file => {
  const filePath = path.resolve(file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace lower case domains
    content = content.replace(/taxserve\.in/g, 'karseva.in');
    
    // Replace capitalized Brand
    content = content.replace(/TaxServe/g, 'KarSeva');
    
    // Replace support email just in case it is capitalized differently
    content = content.replace(/support@taxserve\.in/i, 'support@karseva.in');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced in ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
