const fs = require('fs-extra');
const path = require('path');

// Ensure libs directory exists
const libsDir = path.join(__dirname, 'libs/bridgestone-web-components');
fs.ensureDirSync(libsDir);

// Copy web components from node_modules
const sourceDir = path.join(__dirname, 'node_modules/@springbokagency/bridgestone-web-components/dist');
console.log(`Copying web components from ${sourceDir} to ${libsDir}`);

if (fs.existsSync(sourceDir)) {
  fs.copySync(sourceDir, libsDir, { overwrite: true });
  console.log('Web components copied successfully');
} else {
  console.error('Source directory does not exist:', sourceDir);
}
