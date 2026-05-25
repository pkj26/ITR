const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">\s*Buy Now\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('Salaried ITR')} className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                Buy Now
              </button>`);
              
content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md">\s*Buy Now\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('Capital Gains / Crypto')} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
                Buy Now
              </button>`);

content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">\s*Buy Now\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('Business & Profession')} className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                Buy Now
              </button>`);

content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-indigo-50 text-indigo-700 font-bold py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">\s*Buy Now\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('GST Registration')} className="w-full bg-indigo-50 text-indigo-700 font-bold py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                Buy Now
              </button>`);

content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">\s*Buy Now\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('GST Return Filing')} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
                Buy Now
              </button>`);

content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-indigo-50 text-indigo-700 font-bold py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">\s*Buy Now\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('Nil GST Return')} className="w-full bg-indigo-50 text-indigo-700 font-bold py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                Buy Now
              </button>`);

content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition shadow-md">\s*Get Started\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('Pvt Ltd Company')} className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition shadow-md">Get Started</button>`);
              
content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-teal-50 text-teal-700 font-bold py-3 rounded-lg hover:bg-teal-600 hover:text-white transition">\s*Get Started\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('LLP Registration')} className="w-full bg-teal-50 text-teal-700 font-bold py-3 rounded-lg hover:bg-teal-600 hover:text-white transition">Get Started</button>`);

content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="w-full bg-teal-50 text-teal-700 font-bold py-3 rounded-lg hover:bg-teal-600 hover:text-white transition">\s*Get Started\s*<\/button>/, 
`<button onClick={() => handleWhatsAppRedirect('Trademark Registration')} className="w-full bg-teal-50 text-teal-700 font-bold py-3 rounded-lg hover:bg-teal-600 hover:text-white transition">Get Started</button>`);

// Hero
content = content.replace(/<button\s+onClick=\{handleWhatsAppRedirect\}\s+className="bg-\[\#FFB400\] text-\[\#1D3557\] font-bold py-3\.5 px-10 rounded-lg shadow-lg hover:bg-\[\#e6a200\] transition-all duration-300 text-lg w-full sm:w-auto">\s*Talk to a Tax Expert\s*<\/button>/,
`<button onClick={() => handleWhatsAppRedirect('Expert Consultation')} className="bg-[#FFB400] text-[#1D3557] font-bold py-3.5 px-10 rounded-lg shadow-lg hover:bg-[#e6a200] transition-all duration-300 text-lg w-full sm:w-auto">
                  Talk to a Tax Expert
                </button>`);

content = content.replace(/<button onClick=\{handleWhatsAppRedirect\} className="bg-\[\#FFB400\] text-\[\#1D3557\] font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-\[\#e6a200\] transition transform hover:-translate-y-1">\s*Chat on WhatsApp\s*<\/button>/,
`<button onClick={() => handleWhatsAppRedirect('General Enquiry')} className="bg-[#FFB400] text-[#1D3557] font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#e6a200] transition transform hover:-translate-y-1">
                  Chat on WhatsApp
                </button>`);


fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
