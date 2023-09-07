var object = {
  name: 'Nylon',
  surname: 'Windbreaker',
  age: 23,
  petOwner: false,
};

console.warn(`
  Afiseaza fraza “Ma numesc xxx yyy si am xx ani.”
  in consola, folosind operatorul de concatenare.
`);
console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' ' +
    'si am' +
    ' ' +
    object.age +
    ' ' +
    'ani.',
);

console.warn(`
  Afiseaza anul in care te-ai nascut scazand
  varsta pe care ai trecut-o in obiect din anul curent
  (un proces numit hardcodare).
`);
console.log((2023 - object.age).toString());

console.warn(`
  Adauga o cheie noua de tip boolean cu numele
  petOwner (observa capitalizarea).
`);
