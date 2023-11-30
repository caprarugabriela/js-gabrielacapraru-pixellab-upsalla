let person1 = {
  name: 'Larry',
  surname: 'Larryson',
};

let person2 = {
  name: 'Ben',
  surname: 'Benson',
};

let age1 = {
  age: 20,
};

console.warn(`In fisierul app.js Ben ar trebui sa aiba 29 de ani,
iar Larry 20. Folosind operatorul spread, creeaza obiecte de tipul
fullPerson1 si fullPerson2 care sa reflecte acest lucru`);

const fullPerson1 = { ...person1, age: 29 };
const fullPerson2 = { ...person2, ...age1 };
console.log(fullPerson1);
console.log(fullPerson2);

console.warn(`Folosind noul obiect fullPerson2, creeaza un obiect
numit fullPerson3 cu numele de familie al lui Ben,  si numele Carl,
care sa aiba 24 de ani.`);

const fullPerson3 = { ...fullPerson2, name: 'Carl', age: 24 };
console.log(fullPerson3);
