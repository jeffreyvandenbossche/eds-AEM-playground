const fs = require('fs');
const path = require('path');

function updateReferences(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      updateReferences(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/src="(\.\/)?scripts\//g, 'src="/scripts/');
      content = content.replace(/href="(\.\/)?assets\//g, 'href="/assets/');
      fs.writeFileSync(filePath, content);
    }
  });
}

updateReferences('.');
console.log('References updated successfully.');
