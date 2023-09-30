var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `,
);
person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);
var sumAge = 0;
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  sumAge += pet.age;
}
console.log(sumAge);

console.warn(`Folosind forEach(), afiseaza cate una pe linie propozitiile:
“Twix este papagal si are 4 ani. Mars este caine si are… etc”.`);
Object.keys(person.pets).forEach(function (petKeyName) {
  var pet = person.pets[petKeyName];

  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`Folosind o bucla for, afiseaza cate una pe linie propozitiile:
“Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ”
(repeta pentru toate intrarile din array).`);
Object.keys(person.pets).forEach(function (petKeyName) {
  var pet = person.pets[petKeyName];
  var currentYear = new Date().getFullYear();
  var personAge = currentYear - person.birthYear;
  var ageDiff = Math.abs(personAge - pet.age);

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(
  `Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array sub forma de propozitii:
  “Animalul meu se numeste xxxx.”. `,
);
for (var i = person.pets.length - 1; i >= 0; i--) {
  var pet = person.pets[i];
  console.log(`Animalul meu se numeste ${pet.name}.`);
}

console.warn(`Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia:
“xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla,
daca varsta animalului curent din bucla este mai mare decat oldestPet.age,
atunci oldestPet devine animalul curent.`);
var oldestPet = person.pets[0];
var ageDiff = 0;
var petAge = 0;
var currentYear = new Date().getFullYear();

for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var personAge = currentYear - person.birthYear;

  if (petAge < pet.age) {
    oldestPet = pet;
    petAge = pet.age;
    var ageDiff = Math.abs(personAge - petAge);
  }

  var message = `${pet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`;
}
console.log(message);

console.warn(``);
var message = 'Am ';
Object.keys(person.pets).forEach(function (petKeyName, index, petKeyNames) {
  var pet = person.pets[petKeyName];
  var punctuation = ', ';

  if (petKeyNames.length - 1 === index) {
    punctuation = '.';
  }

  if (petKeyNames.length - 2 === index) {
    punctuation = ' si ';
  }

  message += `${pet.species}${punctuation}`;
});
console.log(message);
