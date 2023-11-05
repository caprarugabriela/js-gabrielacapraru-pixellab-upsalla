// const fs = require('fs');
// const writeFileSync = fs.writeFileSync;
// fs e un obiect
// sep e separator de director
const { writeFileSync, write } = require('fs');
const sep = require('path'.sep);
writeFileSync('./my-file.txt', 'Invat node.js', 'utf8');
console.log(sep);
