// 1. Creeaza un script node numit suprafete care sa primeasca ca prim parametru felul suprafetei si apoi
// valorile necesare pentru a calcula suprafata ceruta. Script-ul trebuie sa poata sa calculeze suprafete pentru cerc, patrat si dreptunghi.
// Daca una din variante nu primeste valorile corecte, sa genereze mesaje de eroare relevante.
// Daca este chemat cu un singur parametru -h sa afiseze suprafetele pe care le poate calcula si exemple (node script -h).

// Salveaza intr-un fisier numit .log toate valorile si tipurile de suprafete cerute de utilizator.
// (node app cerc 23) (node app patrat 12) (node app dreptunghi 12 2)

// Daca script-ul este chemat cu un singur parametru -clear, goleste fisierul .log  (node app -clear)

const fs = require('fs');
const path = require('path');

const logFilePath = './.log';

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

function calculateSquareArea(side) {
  return side ** 2;
}

function calculateRectangleArea(length, width) {
  return length * width;
}

function logToFile(data) {
  fs.appendFileSync(logFilePath, `${data}\n`, 'utf-8');
}

function clearLogFile() {
  fs.writeFileSync(logFilePath, '', 'utf-8');
}

function displayHelp() {
  console.log(
    `Tipuri de suprafete suportate de script: cerc, patrat, dreptunghi. Incearca din nou, furnizand tipul suprafetei si valorile.`,
  );
}

function main() {
  const [, , surfaceType, ...surfaceValues] = process.argv;

  if (surfaceType === '-h') {
    displayHelp();
  } else if (surfaceType === '-clear') {
    clearLogFile();
  } else {
    const areaCalculator = {
      cerc: calculateCircleArea,
      patrat: calculateSquareArea,
      dreptunghi: calculateRectangleArea,
    };

    const calculator = areaCalculator[surfaceType];
    if (calculator) {
      const values = surfaceValues.map(Number);

      if (values.every((value) => !isNaN(value))) {
        const area = calculator(...values);
        if (!isNaN(area)) {
          console.log(`Suprafata ${surfaceType}: ${area}`);
          logToFile(`(${surfaceType} ${values.join(' ')})`);
        } else {
          console.error(
            `Eroare: Nu se poate calcula suprafata pentru valorile furnizate.`,
          );
        }
      } else {
        console.error(
          `Eroare: Valorile furnizate trebuie să fie numere valide.`,
        );
      }
    } else {
      console.error(`Eroare: Suprafata specificata nu este suportata.`);
    }
  }
}

main();
