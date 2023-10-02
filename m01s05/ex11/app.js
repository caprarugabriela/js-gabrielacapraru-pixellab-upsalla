console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei,
sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.
`);

function calculateSurface(width, length, heigth) {
  if (arguments.length === 1) {
    return width ** 2;
  }
  if (arguments.length === 2) {
    return width * length;
  }

  if (arguments.length === 3) {
    return 2 * (width * length + width * heigth + heigth * length);
  }
}

console.warn(`Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
`);

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

circle1 = calculateCircleArea(2);
console.log(circle1);

circle2 = calculateCircleArea(20);
console.log(circle2);

circle3 = calculateCircleArea(16);
console.log(circle3);

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
`);
const pet = {
  getName: function () {
    return 'Spotuletz';
  },
  getSpecies: function () {
    return 'caine';
  },

  getAge: function () {
    return 1;
  },
};

console.warn(
  `Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”`,
);
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

console.warn(`Folosind metoda getAge calculeaza si salveaza intr-o variabila
numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”`);
petAge = pet.getAge();

console.log(`Animalul meu are ${petAge} ani.`);
