const fs = require('fs');

let content = fs.readFileSync('src/components/Calculators.tsx', 'utf8');

content = content.replace(/accent-green-600/g, 'accent-amber-500');
content = content.replace(/focus:border-green-500/g, 'focus:border-amber-500');
content = content.replace(/focus:ring-green-500/g, 'focus:ring-amber-500');
content = content.replace(/text-green-500/g, 'text-amber-400');
content = content.replace(/text-green-600/g, 'text-amber-500');
content = content.replace(/bg-green-600/g, 'bg-amber-500');
content = content.replace(/bg-green-500/g, 'bg-amber-400');

content = content.replace(/bg-white/g, 'bg-slate-800');
content = content.replace(/bg-slate-50/g, 'bg-slate-900');
content = content.replace(/border-slate-200/g, 'border-slate-700');
content = content.replace(/text-slate-900/g, 'text-white');
content = content.replace(/text-slate-600/g, 'text-slate-400');
content = content.replace(/text-slate-700/g, 'text-slate-300');

fs.writeFileSync('src/components/Calculators.tsx', content, 'utf8');
