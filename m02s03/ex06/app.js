// Folosind codul HTML din exercitiu creeaza un script care atunci cand se apasa butonul, va adauga un
// paragraf in sectiunea corecta cu textul: “Butonul a fost apasat in aceasta rezolutie.”

// brittle cod => cod nerobust, casant/fragil - nu verificam daca btn are chestii
const button = document.getElementsByClassName('btn')[0];
const loResContainer = document.querySelector('.lo-res');
const midResContainer = document.querySelector('.mid-res');
const hiResContainer = document.querySelector('.hi-res');
let windowWidth = window.innerWidth;
const message = 'Butonul a fost apasat in aceasta rezolutie.';

function createMessage(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  return messageContainer;
}

// debounce or not debounce
window.addEventListener('resize', function () {
  windowWidth = window.innerWidth;
});

button.addEventListener('click', function () {
  if (windowWidth < 650) {
    loResContainer.append(createMessage(message));
  }

  if (windowWidth >= 650 && windowWidth <= 1000) {
    midResContainer.append(createMessage(message));
  }

  if (windowWidth > 1000) {
    hiResContainer.append(createMessage(message));
  }
});
