const fs = require('fs');

let content = fs.readFileSync('src/components/Calculators.tsx', 'utf8');

// The main tax-tools container was bg-slate-900. Let's make it bg-white in Home.tsx later
// But for now, just change amber to green in Calculators
content = content.replace(/accent-amber-500/g, 'accent-green-600');
content = content.replace(/focus:border-amber-500/g, 'focus:border-green-500');
content = content.replace(/focus:ring-amber-500/g, 'focus:ring-green-500');
content = content.replace(/text-amber-400/g, 'text-green-500');
content = content.replace(/text-amber-500/g, 'text-green-600');
content = content.replace(/bg-amber-500/g, 'bg-green-600');
content = content.replace(/bg-amber-400/g, 'bg-green-500');

// Making it light theme instead of dark theme
content = content.replace(/bg-slate-800/g, 'bg-white');
content = content.replace(/bg-slate-900/g, 'bg-slate-50');
content = content.replace(/border-slate-700/g, 'border-slate-200');
content = content.replace(/border-slate-600/g, 'border-slate-200');
content = content.replace(/text-white/g, 'text-slate-900');
content = content.replace(/text-slate-400/g, 'text-slate-600');
content = content.replace(/text-slate-300/g, 'text-slate-700');

fs.writeFileSync('src/components/Calculators.tsx', content, 'utf8');
console.log('Calculators updated');
