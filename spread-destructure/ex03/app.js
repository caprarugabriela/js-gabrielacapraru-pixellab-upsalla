let person1 = {
  name: 'Steven',
  surname: 'Stevenson',
};

let person2 = {
  name: 'Rolf',
  surname: 'Rolfson',
};

let person3 = {
  name: 'Andra',
  surname: 'Andrason',
};

let age1 = {
  age: 20,
};

let age2 = {
  age: 25,
};

console.warn(`In fisierul app.js Andra are trebui sa aiba 25 de ani,
Steven 20, iar Rolf 40, folosind operatorul spread, creeaza obiecte de tipul fullPerson1,
fullPerson2 si fullPerson3 care sa reflecte acest lucru`);

const fullPerson1 = { ...person1, ...age1 };

console.log(fullPerson1);

const fullPerson2 = {
  age: 40,
  ...person2,
};
console.log(fullPerson2);

const fullPerson3 = {
  ...person3,
  ...age2,
};
console.log(fullPerson3);

console.warn(`Folosind noul obiect fullPerson3 creeaza intr-un obiect numit
fullPerson4 cu numele de familie al Andrei care sa se numeasca Anita si sa aiba 36 de ani.`);
