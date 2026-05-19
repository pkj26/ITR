const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Fix Tax Tools buttons
content = content.replace(/bg-slate-800/g, 'bg-white');
content = content.replace(/bg-slate-800\/80/g, 'bg-slate-50');
content = content.replace(/border-amber-400/g, 'border-green-500');
content = content.replace(/border-slate-700/g, 'border-slate-200');
content = content.replace(/text-slate-400/g, 'text-slate-500');
content = content.replace(/text-green-400/g, 'text-green-700'); // active state title color

content = content.replace(/>Free Financial & Tax Tools/g, 'text-slate-900>Free Financial & Tax Tools');
content = content.replace(/text-slate-400 text-lg/g, 'text-slate-600 text-lg'); // subtitle fix

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
console.log('Fixed Tax tool button colors');
