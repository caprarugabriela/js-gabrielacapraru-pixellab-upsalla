const person = {
  name: 'Gabriela',
  surname: 'Capraru',
  age: 24,
  petOwner: false,
  skills: [
    'html',
    'Javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

// // intre x si y este o diferenta de abc ani.

// Rezolvare 1 - eu

// for (var i = 0; i < person.friends.length; i++) {
//   var friend1 = person.friends[i];
//   for (var j = 0; j < person.friends.length; j++) {
//     var friend2 = person.friends[j];
//     if (i !== j) {
//       var ageDifference = Math.abs(friend1.age - friend2.age);
//       console.log(
//         `Intre ${friend1.name} si ${friend2.name} este o diferenta de ${ageDifference} ani.`,
//       );
//     }
//   }
// }

// Rezolvare 2 - clasa
const length = person.friends.length;
for (let i = 0; i < length; ++i) {
  // note 1: outerfriend ramane acelasi; practic, aceasta variabila este globala pentru bucla interioara (al doilea for) si locala pentru primul for
  const outerFriend = person.friends[i];

  for (let j = 0; j < length; ++j) {
    if (i === j) {
      continue;
    }
    // note 2: daca suntem pe aceiasi indexare (Larry=Larry), facem un early exit cu continue (nu are sens sa avem de ex. Intre Larry si Larry exista o dif de 0 ani.)

    const innerFriend = person.friends[j];
    const ageDifference = Math.abs(outerFriend.age - innerFriend.age);
    const message = `Intre ${outerFriend.name} si ${innerFriend.name} este o diferenta de ${ageDifference} ani.`;
    console.log(message);
  }
}
