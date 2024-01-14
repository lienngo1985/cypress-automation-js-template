
const fs = require('fs');
const path = require('path');
const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  files.forEach((file) => {
    if (file.isDirectory()) {
      arrayOfFiles = getAllFiles(`${dirPath}/${file.name}`, arrayOfFiles);
    } else {
      arrayOfFiles.push(`${path.join(dirPath, '/', file.name)}`);
    }
  });
  return arrayOfFiles;
};

const dirPath = process.env.DIR_PATH || 'cypress/e2e/1-getting-started';
const specs = getAllFiles(dirPath);
process.stdout.write(`${JSON.stringify(specs)}\n`);
