const fs = require('fs');

function updateFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [search, replace] of replacements) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
}

updateFile('src/pages/Home.tsx', [
    ['py-10 md:py-12', 'py-6 md:py-8'],
    ['gap-12 lg:gap-8', 'gap-6 lg:gap-4'],
    ['mt-8 lg:mt-0', 'mt-4 lg:mt-0'],
    ['mb-8 md:mb-10', 'mb-4 md:mb-6'],
    ['mb-6 md:mb-8', 'mb-3 md:mb-4']
]);

