// const fs = require('fs');
// const writeFileSync = fs.writeFileSync;
// fs e un obiect
// sep e separator de director
const { writeFileSync, readFileSync } = require('fs');
const path = require('path');
const sep = path.sep;
writeFileSync('./my-file.txt', 'Invat node.js', 'utf8');
console.log(sep);

const contentMyFile = readFileSync('./my-file.txt', 'utf-8');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${day}.${month}.${year}`;

writeFileSync('./my-try.txt', `${contentMyFile}, azi, ${currentDate}!`, 'utf8');
