var globalVariable = 'Ma aflu in contextul global';

console.log(localVariable);

if (true) {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma aflu in contextul global';
}

console.log(localVariable);
console.log(globalVariable);
