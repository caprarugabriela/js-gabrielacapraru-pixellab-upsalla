const metricSpeeds = [10, 60, 100, 180, 850, 1000];

const centigradeTemperatures = [0, 100, -30, 16, -273, 1000];

const metricDistances = [1, 10, 100, 1000, 1500];

console.warn(`
  Afiseaza cate una pe linie propozitii de forma
  “10km/h inseamna xxxm/s sau yyymph.”.
  Stiind ca formula pentru a calcula metri pe secunda este:
  kmh * 5 / 18 si mile pe ora este: kmh * 1.609344
`);

function kmhtomps(kmh) {
  return (kmh * 5) / 18;
}

function kmhtomph(kmh) {
  return kmh * 1.609344;
}

for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  console.log(
    `${speed}km/h inseamna ${kmhtomps(speed)}m/s sau ${kmhtomph(speed)}mph.`,
  );
}

console.warn(`
  Aduna toate valorile din array si afiseaza
  o propozitie de forma: “xxxkm/h inseamna yyymph.”.
`);
let totalSpeeds = 0;
for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  totalSpeeds += speed;
}
console.log(`${totalSpeeds}km/h inseamna ${kmhtomph(totalSpeeds)}mph.`);
