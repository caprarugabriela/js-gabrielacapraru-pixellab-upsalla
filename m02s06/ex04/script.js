const { readFileSync } = require('fs');
const data1 = readFileSync('./another.txt', 'utf-8');
const data2 = readFileSync('./my-file.txt', 'utf-8');
const data3 = readFileSync('./dir/this-other-file.txt', 'utf-8');

console.log(`${data1} ${data2} ${data3}!`);
