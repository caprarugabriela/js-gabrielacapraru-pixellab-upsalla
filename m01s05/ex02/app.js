function calculateRectangleArea(width, lenght) {
  const area = width * lenght;

  return area;
}

console.warn(
  `Folosind functia calculateRectangleArea(), afiseaza suprafata unui dreptunghi de 4 pe 3`,
);
console.log(calculateRectangleArea(3, 4));

console.warn(
  `Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.`,
);

const rectangle1Surface = calculateRectangleArea(5, 3);
const rectangle2Surface = calculateRectangleArea(3, 2);

console.log(rectangle1Surface + rectangle2Surface);
console.log(rectangle1Surface);
console.log(rectangle2Surface);

const squareSurface = calculateRectangleArea3(3, 3);
