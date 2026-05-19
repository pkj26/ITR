const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Hero Buttons
content = content.replace(/bg-green-600 hover:bg-green-700 text-slate-900 font-bold py-3\.5 px-10 rounded-full/g, 'bg-[#FFB400] hover:bg-[#e6a200] text-[#1D3557] font-bold py-3.5 px-10 rounded-lg');
content = content.replace(/text-green-600">₹1766\.69/g, 'text-[#00d084]">₹1766.69');
content = content.replace(/bg-green-600 text-white px-3 py-1\.5 rounded-full text-xs/g, 'bg-[#00d084] text-white px-3 py-1.5 rounded-full text-xs');

// 2. Sections Colors
function replaceColors(block, from, to) {
    if (!block) return block;
    block = block.replace(new RegExp(`bg-${from}-600`, 'g'), `bg-${to}-600`);
    block = block.replace(new RegExp(`hover:bg-${from}-600`, 'g'), `hover:bg-${to}-600`);
    block = block.replace(new RegExp(`hover:bg-${from}-700`, 'g'), `hover:bg-${to}-700`);
    block = block.replace(new RegExp(`text-${from}-600`, 'g'), `text-${to}-600`);
    block = block.replace(new RegExp(`text-${from}-700`, 'g'), `text-${to}-700`);
    block = block.replace(new RegExp(`text-${from}-800`, 'g'), `text-${to}-800`);
    block = block.replace(new RegExp(`bg-${from}-100`, 'g'), `bg-${to}-100`);
    block = block.replace(new RegExp(`bg-${from}-50`, 'g'), `bg-${to}-50`);
    block = block.replace(new RegExp(`border-${from}-200`, 'g'), `border-${to}-200`);
    block = block.replace(new RegExp(`border-${from}-600`, 'g'), `border-${to}-600`);
    return block;
}

// Extract sections
const splitITR = content.split('id="{/* Pricing Section (ITR Filing) */}');
// Actually, it uses ID string for sections.
const itrIndex = content.indexOf('{/* Pricing Section (ITR Filing) */}');
const gstIndex = content.indexOf('{/* GST Services Section */}');
const companyIndex = content.indexOf('{/* Company Registration Section */}');
const toolsIndex = content.indexOf('{/* Free Tax & Financial Tools Section */}');

if (itrIndex > -1 && gstIndex > -1 && companyIndex > -1 && toolsIndex > -1) {
    let top = content.substring(0, itrIndex);
    let itr = content.substring(itrIndex, gstIndex);
    let gst = content.substring(gstIndex, companyIndex);
    let comp = content.substring(companyIndex, toolsIndex);
    let bottom = content.substring(toolsIndex);

    // ITR = blue
    itr = replaceColors(itr, 'green', 'blue');
    // GST = indigo
    gst = replaceColors(gst, 'green', 'indigo');
    // Comp = teal
    comp = replaceColors(comp, 'green', 'teal');

    // Tax Tools = amber/slate-900 (dark mode)
    bottom = bottom.replace(/bg-slate-50 text-slate-900 border-t border-slate-200/, 'bg-slate-900 text-white border-t-4 border-amber-500');
    // It was amber-500 line
    bottom = bottom.replace(/border-t border-slate-200/g, 'border-t-4 border-amber-500');
    bottom = replaceColors(bottom, 'green', 'amber'); // For text-green-700 -> text-amber-700
    bottom = bottom.replace(/bg-white shadow-sm border border-slate-200/g, 'bg-slate-700 text-slate-100');
    bottom = bottom.replace(/text-slate-700 group-hover:text-amber-700/g, 'text-slate-100 group-hover:text-amber-400');
    bottom = bottom.replace(/text-slate-900>Free Financial & Tax Tools/g, '>Free Financial & Tax Tools');
    // The buttons in tools
    bottom = bottom.replace(/bg-white p-6/g, 'bg-slate-800 p-6');
    bottom = bottom.replace(/hover:bg-white\/80/g, 'hover:bg-slate-800/80');
    bottom = bottom.replace(/bg-slate-700 p-6/g, 'bg-slate-800 p-6'); // in case it hit previous

    // Form Section
    bottom = bottom.replace(/bg-amber-700/g, 'bg-[#1D3557]'); // we changed green-700 -> amber-700 in bottom, so now change amber-700 -> 1D3557 for the section
    bottom = bottom.replace(/bg-[#1D3557] py-12/g, 'bg-[#1D3557] py-12'); 
    bottom = bottom.replace(/bg-slate-900 hover:bg-slate-800/g, 'bg-[#1D3557] hover:bg-[#162a45]');
    bottom = bottom.replace(/focus:border-amber-500/g, 'focus:border-[#FFB400]');
    bottom = bottom.replace(/focus:ring-amber-500/g, 'focus:ring-[#FFB400]');
    
    // Put together
    content = top + itr + gst + comp + bottom;
}

// 3. Why Choose Us / What We Do (Pastels)
// Just replace bg-green-50, text-green-700, etc., inside top carefully
// We'll revert top's green to the standard blue/amber/orange if required or just leave the text color as slate-800 for now.
const pastels = ['#f2744c', '#ffcc00', '#c9eef1', '#c1ece2', '#fd9b6b', '#ffd32e', '#e4e5e7', '#51cdc4'];
let pIdx = 0;
content = content.replace(/bg-green-50/g, function() {
    let p = pastels[pIdx % pastels.length];
    pIdx++;
    return `bg-[${p}]`;
});
content = content.replace(/shadow-\[0_0_0_2px_#22c55e_inset\]/g, function() {
    let p = pastels[pIdx % pastels.length];
    return `shadow-[0_0_0_2px_${p}_inset]`;
});
content = content.replace(/bg-green-200/g, 'bg-[#f07b5a]');
content = content.replace(/text-green-700/g, 'text-black');
content = content.replace(/fill="#15803d"/g, 'fill="black"');

// 4. Buttons globally rounded-full -> rounded-lg
content = content.replace(/rounded-full shadow-lg/g, 'rounded-lg shadow-lg');
content = content.replace(/rounded-full shadow-md/g, 'rounded-lg shadow-md');
content = content.replace(/py-3 rounded-full/g, 'py-3 rounded-lg');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
console.log('Restored Home.tsx');
