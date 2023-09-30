var person = {
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

for (var i = 0; i < person.friends.length; i++) {
  var friend1 = person.friends[i];
  for (var j = 0; j < person.friends.length; j++) {
    var friend2 = person.friends[j];
    if (i !== j) {
      var ageDifference = Math.abs(friend1.age - friend2.age);
      console.log(
        `Intre ${friend1.name} si ${friend2.name} este o diferenta de ${ageDifference} ani.`,
      );
    }
  }
}
