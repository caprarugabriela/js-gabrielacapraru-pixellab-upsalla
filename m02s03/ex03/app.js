// create a black box function with no side effects
function createLog(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  return messageContainer;
}

const stage = document.querySelector('.pane .stage');
const logsContainer = document.querySelector('.logs');
let counter = 0;
let sideCounter = 0;

// Folosind elementul stage, adauga un event de mouseover care sa afiseze in elementul paragraf mesajul:
// “Mouseul este pe scena” atunci cand mouseul face hover pe aceasta.
stage.addEventListener('mouseover', function () {
  const log = createLog('Mouseul este pe scena');
  counter = counter + 1;

  // Afiseaza intr-un alt element de cate ori mouseul a fost pe scena.
  const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori.`);
  logsContainer.append(log);
  logsContainer.append(counterLog);
});

// Folosind mouseout, afiseaza in paragraf mesajul “Mouseul nu este pe scena”.
stage.addEventListener('mouseout', function () {
  const log = createLog('Mouseul NU este pe scena');

  logsContainer.append(log);
});

// Afiseaza in al treilea paragraf de cate ori mouseul a trecut peste oricare din laturile patratului.
// (optional, folositi alta culoare pentru acest mesaj)
const sides = ['de sus', 'de jos', 'stanga', 'dreapta'];

sides.forEach((side) => {
  stage.addEventListener(`mouseover`, function (event) {
    if (event.target === stage) {
      sideCounter = sideCounter + 1;
      const sideLog = createLog(
        `Mouseul a trecut peste latura ${side} de ${sideCounter} ori.`,
      );
      logsContainer.append(sideLog);
    }
  });
});
