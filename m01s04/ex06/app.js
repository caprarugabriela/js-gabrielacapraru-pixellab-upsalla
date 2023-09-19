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

// insert code

console.warn(`
  In mod similar, afiseaza skillurile
  care NU incep cu j, folosind propozitii de
  forma "Tehnologia xxx nu incepe cu j!".
`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (!skill.toLowerCase().startsWith('j')) {
    console.log('Tehnologia ' + skill + ' nu incepe cu j!');
  }
}

console.warn(`
  Folosind un for, afiseaza propozitia:
  "Prietenii mei se numesc: xxx yyy, xxx yyy, xxx yyy."
`);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(`
  Folosind un for, afiseaza numarul total de ani
  pe care il au persoanele din arrayul friends,
  doar daca varsta este mai mare sau egala cu 30
  de ani intr-o propozitie de felul:
  "Suma varstelor persoanelor peste yy de ani este: ssss.".
`);
var sumAge = 0;
var message = 'Suma varstelor persoanelor peste 30 de ani este: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumAge = sumAge + friend.age;
  }
}
console.log(message + sumAge + '.');

console.warn(`
  Afiseaza diferenta de varsta dintre persoana
  si prietenii din arrayul friends, doar daca aceasta
  este mai mare de 2 ani intr-o propozitie de forma
  "Diferenta de varsta mai mare de xxx ani este yyy.".
`);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log('Diferenta de varsta mai mare de 2 ani este ' + ageDiff + '.');
  }
}

console.warn(`
  Afiseaza fraza:
  "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ",
  doar daca varsta prietenului este impara.
`);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (friend.age % 2 !== 0) {
    message =
      message +
      'Intre ' +
      person.name +
      ' si ' +
      friend.name +
      ' este o diferenta de ' +
      ageDiff +
      ' ani. ';
  }
}
console.log(message.trim());

console.warn(`
  Folosind proprietatea length a arrayului skills si o bucla for,
  afiseaza in ordine inversa elementele arrayului skills.
  Atentie, va trebui sa numeri invers, de la length la 0.
`);
for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}
