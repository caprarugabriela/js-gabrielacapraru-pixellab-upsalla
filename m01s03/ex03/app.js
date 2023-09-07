var person = {
  name: 'Gabriela',
  surname: 'Capraru',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.steven = steven;

andra.friends.carol = carol;
carol.friends.andra = andra;

console.warn(
  `Folosind keywordul delete,
  sterge prietenia dintre Person si Larry (si invers).
`,
);
delete person.friends.larry;
delete larry.friends.person;

console.warn(`
  Afiseaza numele complet al lui Person
  folosind obiectul Larry.
`);
console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.warn(`
  Afiseaza numele complet a lui Larry folosind obiectul Person.
`);
console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.warn(`
  Folosind obiectul Carol, afiseaza numele
  complet inversat al lui Person.
`);
console.log(
  carol.friends.andra.friends.person.surname +
    ' ' +
    carol.friends.andra.friends.person.name,
);

console.warn(`
  Folosind obiectul Andra, afiseaza numarul total
  de caractere al numelui complet al lui Person.
`);
console.log(
  (andra.friends.person.name + andra.friends.person.surname).length.toString(),
);
