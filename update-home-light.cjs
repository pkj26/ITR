const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Change Tax Tools section from dark to light
content = content.replace(
  'className="py-6 md:py-8 bg-slate-900 text-white border-t-4 border-green-500"',
  'className="py-12 md:py-16 bg-slate-50 text-slate-900 border-t border-slate-200"'
);

// Form was also hardcoded in a dark/navy section
// Let's find "bg-[#1D3557]" or similar that might have become "bg-slate-900" in Enquiry Form & CTA Section
content = content.replace(
  'className="bg-slate-900 py-12 md:py-16 relative overflow-hidden"',
  'className="bg-green-700 py-12 md:py-16 relative overflow-hidden"'
);

content = content.replace(
  'bg-blue-500/20 blur-3xl',
  'bg-white/20 blur-3xl' // remove blue tint
);
content = content.replace(
  'bg-green-600/10 blur-3xl',
  'bg-slate-900/10 blur-3xl'
);

// The tools nav in dark theme used `bg-slate-700`, `text-slate-100`. We need to convert them to light theme.
content = content.replace(/bg-slate-700/g, 'bg-white shadow-sm border border-slate-200');
content = content.replace(/text-slate-100 group-hover:text-green-400/g, 'text-slate-700 group-hover:text-green-700');
content = content.replace(/text-green-400 scale-110/g, 'text-green-600 scale-110');
content = content.replace(/text-green-400 group-hover:scale-110/g, 'text-green-600 group-hover:scale-110');
content = content.replace(/text-slate-400 max-w-2xl/g, 'text-slate-500 max-w-2xl');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
console.log('Home.tsx Tax tools and CTA section lightened');
