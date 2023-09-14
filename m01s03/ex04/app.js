var myArray = [1, 2, 3, 4, 5, 6];

console.warn(`
Afiseaza numarul de pe /index 5 a arrayului
`);
console.log(myArray[5]);

console.warn(`
Afiseaza numarul 3 din arrayului
`);
console.log(myArray[2].toString());

console.warn(`Afiseaza lungimea arrayului.`);
console.log(myArray.length.toString());

console.warn(`Afiseaza suma numerelor de pe pozitiile 0 si 4.`);
console.log(myArray[0] + myArray[4]);

console.warn(`Afiseaza pozitia 1.`);
console.log(myArray[1].toString());

console.warn(`Afiseaza numarul de pe pozitia 2 a arrayului.`);
console.log(myArray[2]);

console.warn(`Afiseaza numarul 4 din array.`);
console.log(myArray[3].toString());

console.warn(
  `Afiseaza diferenta dintre lungimea arrayului si valoarea din pozitia 5.`,
);
console.log((myArray.length - myArray[5]).toString());

console.warn(`Afiseaza produsul numerelor de pe pozitiile 0 si 5. `);
console.log(myArray[0] * myArray[5]);

console.warn(`Afiseaza diferenta numerelor de pe pozitiile 3 si 4. `);
console.log(myArray[3] - myArray[4]);

console.warn(
  `Folosind metoda Math.pow() afla rezultatul ridicarii la putere a numarului de pe pozitia 5, la numarul de pe pozitia 3`,
);
console.log(Math.pow(myArray[5], myArray[3]));
