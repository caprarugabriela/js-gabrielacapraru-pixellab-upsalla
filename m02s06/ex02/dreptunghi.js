console.log(process.argv);
// destructurare ->> scurtatura (seamana cu sintactic sugar pt jS)
// identic cu let length = process.argv[2]
// identic cu let width = process.argv[3]
let [, , length = 1, width = 1] = process.argv;
length = Number(length);
width = Number(width);

console.log(length * width);
