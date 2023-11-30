let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
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

console.warn(`Folosind destructurarea, salveaza al doilea skill din
array-ul skill (skill2)  si afiseaza propozitia:
“Vreau sa invat javascript.”.`);
const [, skill2] = person.skills;
console.log(`Vreau sa invat ${skill2}.`);

console.warn(`Intr-un mod similar, destructureaza arrayul friends
pentru a obtine obiectul de pe indexul 2 apoi destructureaza
obiectul obtinut in variabilele friend3Name, friend3Surname si friend3Age
astfel incat sa le poti folosi in propozitia:
Ma numesc Carol Carolson  si am 29 de ani. `);

const {
  name: friend3Name,
  surname: friend3Surname,
  age: friend3Age,
} = person.friends[2];

console.log(
  `Ma numesc ${friend3Name} ${friend3Surname} si am ${friend3Age} de ani.`,
);

console.warn(`Destructureaza obiectul person pentru a obtine variabile
numite myName si mySurname,
astfel incat sa poti afisa propozitia: “Ma numesc Iordache Dragos.”.`);
const { name: myName, surname: mySurname } = person;
console.log(`Ma numesc ${myName} ${mySurname}.`);

console.warn(`Destructureaza arrayul friends si obiectul de pe indexul 1
(friend2) pentru a putea afisa propozitia:
“Ma numesc Steven Stevenson si am 31 de ani.”.`);
const {
  name: friend2Name,
  surname: friend2Surname,
  age: friend2Age,
} = person.friends[1];

console.log(
  `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} de ani.`,
);

// aici nu mi se inverzeste complet pixelltabul - Variabila "friend2" nu este definita sau nu este un obiect cu proprietatile corecte.
