const person = {
  getName: function () {
    return 'Gabriela Capraru';
  },
  getAge: function () {
    return 24;
  },
};

function accesor(methodSuffix) {
  const methodName = `get${methodSuffix}`;
  return person[methodName]();
}

console.warn(`Folosind accesorul, salveaza numele mic al persoanei intr-o variabila
si foloseste-l in propozitia: “Eu sunt xxx.”
`);
console.log(`Eu sunt ${accesor('Name')}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);
const currentYear = new Date().getFullYear();
console.log((currentYear - accesor('Age')).toString());
