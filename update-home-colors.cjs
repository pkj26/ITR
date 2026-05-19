const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Replace Hero Section Colors
content = content.replace(/bg-\[\#00d084\]/g, 'bg-green-600');
content = content.replace(/text-\[\#00d084\]/g, 'text-green-600');
content = content.replace(/text-\[\#1D3557\]/g, 'text-slate-900');
content = content.replace(/bg-\[\#FFB400\]/g, 'bg-green-600');
content = content.replace(/hover:bg-\[\#e6a200\]/g, 'hover:bg-green-700');

// Replace random pastel bubble backgrounds (Why Choose Us, What We Do)
const pastels = [
  '#f2744c', '#ffcc00', '#c9eef1', '#c1ece2', 
  '#fd9b6b', '#ffd32e', '#e4e5e7', '#51cdc4'
];

pastels.forEach(color => {
  const bgRegex = new RegExp(`bg-\\[${color}\\]`, 'g');
  const shadowRegex = new RegExp(`shadow-\\[0_0_0_2px_${color}_inset\\]`, 'g');
  content = content.replace(bgRegex, 'bg-green-50');
  content = content.replace(shadowRegex, 'shadow-[0_0_0_2px_#22c55e_inset]'); // green-500 inset
});

// Underlines
content = content.replace(/bg-\[\#f07b5a\]/g, 'bg-green-200');

// Black text in bubbles to green
content = content.replace(/text-black/g, 'text-green-700');
content = content.replace(/fill="black"/g, 'fill="#15803d"'); // green-700

// Service Sections (ITR = blue, GST = indigo, Company Registration = teal)
// Let's standardise to green theme
// Blue
content = content.replace(/bg-blue-600/g, 'bg-green-600');
content = content.replace(/hover:bg-blue-600/g, 'hover:bg-green-600');
content = content.replace(/hover:bg-blue-700/g, 'hover:bg-green-700');
content = content.replace(/text-blue-600/g, 'text-green-600');
content = content.replace(/text-blue-700/g, 'text-green-700');
content = content.replace(/text-blue-100/g, 'text-green-100');
content = content.replace(/bg-blue-100/g, 'bg-green-100');
content = content.replace(/bg-blue-50/g, 'bg-green-50');
content = content.replace(/border-blue-600/g, 'border-green-600');

// Indigo
content = content.replace(/bg-indigo-600/g, 'bg-green-600');
content = content.replace(/hover:bg-indigo-600/g, 'hover:bg-green-600');
content = content.replace(/hover:bg-indigo-700/g, 'hover:bg-green-700');
content = content.replace(/text-indigo-600/g, 'text-green-600');
content = content.replace(/text-indigo-700/g, 'text-green-700');
content = content.replace(/text-indigo-800/g, 'text-green-800');
content = content.replace(/bg-indigo-100/g, 'bg-green-100');
content = content.replace(/bg-indigo-50/g, 'bg-green-50');
content = content.replace(/border-indigo-200/g, 'border-green-200');

// Teal
content = content.replace(/bg-teal-600/g, 'bg-green-600');
content = content.replace(/hover:bg-teal-600/g, 'hover:bg-green-600');
content = content.replace(/hover:bg-teal-700/g, 'hover:bg-green-700');
content = content.replace(/text-teal-600/g, 'text-green-600');
content = content.replace(/text-teal-700/g, 'text-green-700');
content = content.replace(/text-teal-800/g, 'text-green-800');
content = content.replace(/bg-teal-100/g, 'bg-green-100');
content = content.replace(/bg-teal-50/g, 'bg-green-50');
content = content.replace(/text-teal-500/g, 'text-green-500');

// Warning theme (Orange/Amber) for Tax Tools
content = content.replace(/text-amber-400/g, 'text-green-400');
content = content.replace(/border-amber-500/g, 'border-green-500');

// Request Callback Form Section
content = content.replace(/bg-\[\#1D3557\]/g, 'bg-slate-900');
content = content.replace(/hover:bg-\[\#162a45\]/g, 'hover:bg-slate-800');
content = content.replace(/focus:ring-\[\#FFB400\]/g, 'focus:ring-green-500');
content = content.replace(/focus:border-\[\#FFB400\]/g, 'focus:border-green-500');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
console.log('Home.tsx updated completely to clean green/white theme');
