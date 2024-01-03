
// scripts/readSpectoMatrix.js
/*const fs = require('fs');

function readSpectoMatrix(testPath) {
  const files = fs.readdirSync(testPath);

  let matrix = {
    specs: [],
  };

  for (const file of files) {
    //if (file.endsWith('.js') && !file.startsWith('x') && !file.startsWith('X') && !file.startsWith('Analytics')) {
    if (file.endsWith('.js')) {
      const name = file.replace(/\.[^/.]+$/, ''); // Remove file extension
      matrix.specs.push({ name, spec: `${testPath}/${file}` });
    }
  }

  return matrix;
}

//module.exports = { readSpectoMatrix };

console.log(readSpectoMatrix('cypress/e2e/1-getting-started'));
*/

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

module.exports = { getAllFiles };

//console.log(getAllFiles('cypress/e2e/1-getting-started'));

//const specs = getAllFiles('cypress/e2e/2-advanced-examples');
//process.stdout.write(`${JSON.stringify(specs)}\n`);
