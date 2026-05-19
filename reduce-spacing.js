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
    ['py-16 md:py-20 lg:py-24', 'pt-6 pb-6 md:pt-8 md:pb-8 lg:pt-10 lg:pb-10'],
    ['py-20', 'py-10 md:py-12'],
    ['py-16', 'py-10 md:py-12'],
    ['mb-16', 'mb-8 md:mb-10'],
    ['mb-12', 'mb-6 md:mb-8'],
    // specific header gaps
    ['<main className="flex-grow">', '<main className="flex-grow pt-0 md:pt-2 lg:pt-4">']
]);

updateFile('src/App.tsx', [
    ['py-12', 'py-8'],
    ['mt-12', 'mt-6']
]);
