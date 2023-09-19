var denominator = 16;
var lowerLimit = 12;
var upperLimit = 128;

console.warn(`
  Porneste o bucla for de la lowerLimit pana
  la upperLimit (inclusiv) si afiseaza propozitii
  de forma “Numarul i este multiplu de denominator.”.
`);
for (var i = lowerLimit; i <= upperLimit; i++) {
  if (i % 16 === 0) {
    console.log('Numarul ' + i + ' este multiplu de ' + denominator + '.');
  }
}
