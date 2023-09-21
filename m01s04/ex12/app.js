var globalVariable = 'Ma aflu in contextul global';

console.log(globalVariable);

function contextTest() {
  var localVariable = 'Ma aflu in contextul lolca';
  var globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
  // console.log(noVariable);
}

contextTest();

console.log(localVariable);
