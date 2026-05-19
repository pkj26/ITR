const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Change CTA buttons from rounded-lg to rounded-full
content = content.replace(/rounded-lg shadow-lg/g, 'rounded-full shadow-lg');
content = content.replace(/rounded-lg shadow-md/g, 'rounded-full shadow-md');
content = content.replace(/py-3 rounded-lg/g, 'py-3 rounded-full');
content = content.replace(/px-8 py-3 rounded-lg/g, 'px-8 py-3 rounded-full');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
console.log('Updated button radius');
