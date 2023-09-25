const person = {
  getName: function () {
    return 'Gabriela Capraru';
  },
  getAge: function () {
    return 24;
  },
};

const currentYear = new Date().getFullYear();

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()
`);
console.log(person.getName().split(' ')[0]);

console.warn(`Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.
`);
console.log(currentYear - person.getAge());

console.warn(
  `Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`,
);
console.log("'" + (currentYear - person.getAge()).toString().slice(-2));

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);
const firstName = person.getName().split(' ')[0];
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);
