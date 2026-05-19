const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

// Ensure CheckCircle2 is imported if not
if (!app.includes('CheckCircle2')) {
  app = app.replace(/import \{.*?\} from 'lucide-react';/, (match) => {
    return match.replace('{', '{ CheckCircle2,');
  });
}

const logoOldRegex = /<div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-sm">[\s\S]*?<\/svg>\s*<\/div>\s*<\/div>\s*<div className="flex flex-col ml-1 max-w-\[150px\] sm:max-w-none">\s*<span className="text-lg font-extrabold tracking-tight text-white whitespace-nowrap">Online ITR Filing<\/span>\s*<span className="text-\[10px\] text-\[\#FFB400\] font-bold tracking-widest uppercase mt-0\.5">\.IN<\/span>\s*<\/div>/;

const logoNew = `<div className="relative flex items-center justify-center w-10 h-10 bg-green-50 rounded-full border-2 border-green-500">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex flex-col ml-1 max-w-[150px] sm:max-w-none">
                <span className="text-lg font-extrabold tracking-tight text-gray-900 whitespace-nowrap">Online ITR Filing</span>
                <span className="text-[10px] text-green-600 font-bold tracking-widest uppercase mt-0.5">.IN</span>
              </div>`;

app = app.replace(logoOldRegex, logoNew);

// Replace Top Banner
app = app.replace('bg-[#FFB400] text-[#1D3557]', 'bg-green-50 text-green-800 border-b border-green-100');

// Replace Header Background
app = app.replace('bg-[#1D3557] text-white shadow-md sticky top-0 z-50', 'bg-white text-gray-900 shadow-sm border-b border-gray-100 sticky top-0 z-50');

// Menu icons
app = app.replace('text-white" onClick', 'text-gray-900" onClick');

// Nav links
app = app.replace(/text-slate-300 hover:text-white/g, 'text-gray-600 hover:text-green-600');

// Header CTA
app = app.replace('bg-[#FFB400] text-[#1D3557] px-6 py-2 rounded-md font-bold hover:bg-[#e6a200]', 'bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700');

// Mobile Nav Menu bg
app = app.replace('bg-[#162a45] border-t border-[rgba(255,255,255,0.1)]', 'bg-white border-t border-gray-100 shadow-lg');
app = app.replace('bg-[#FFB400] text-[#1D3557] px-3 py-2 rounded-md font-bold hover:bg-[#e6a200]', 'bg-green-600 text-white px-3 py-2 rounded-md font-bold hover:bg-green-700');

// Footer background & logo
app = app.replace('bg-[#1D3557] py-8 border-t mt-auto border-[rgba(255,255,255,0.1)] text-[#EAECEF]', 'bg-gray-50 py-12 border-t mt-auto border-gray-200 text-gray-600');
app = app.replace(/text-white font-bold mb-4 uppercase/g, 'text-gray-900 font-bold mb-4 uppercase');

const footerLogoOldRegex = /<div className="relative flex items-center justify-center w-8 h-8 bg-\[\#FFB400\] rounded-md shadow-sm">[\s\S]*?<\/div>\s*<\/div>\s*<span className="text-xl font-extrabold tracking-tight text-white leading-none">Online ITR Filing<\/span>/;
const footerLogoNew = `<div className="relative flex items-center justify-center w-8 h-8 bg-green-50 rounded-full border-2 border-green-500">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900 leading-none">Online ITR Filing</span>`;
app = app.replace(footerLogoOldRegex, footerLogoNew);

app = app.replace(/text-slate-500 text-xs/g, 'text-gray-500 text-xs');
app = app.replace(/border-\[rgba\(255,255,255,0\.1\)\] text-center text-xs/g, 'border-gray-200 text-center text-xs text-gray-500');

fs.writeFileSync('src/App.tsx', app, 'utf8');
console.log('App.tsx updated');
