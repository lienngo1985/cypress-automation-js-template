
// scripts/readSpectoMatrix.js
const fs = require('fs');

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

module.exports = { readSpectoMatrix };
