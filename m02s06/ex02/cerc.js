console.log(process.argv);
let [, , radius = 2] = process.argv;
radius = Number(radius);

console.log(Math.PI * radius ** 2);
