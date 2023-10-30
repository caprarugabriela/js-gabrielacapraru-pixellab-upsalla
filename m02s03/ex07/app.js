// // Adauga un event handler numit de click pe butonul .btn care sa afiseze o alerta cu mesajul: “Butonul a fost apasat”.

// Folosind evenimentul de resize al ferestrei, elimina event handlerul de pe buton de fiecare data cand fereastra se afla sub latimea de 650 pixeli.
// Pe acelasi eveniment de resize, adauga event handlerul cand fereastra este mai mare de 650 pixeli.

// Folosind evenimentul de DOMContentLoaded, aplica verificarile si cand fereastra se incarca,
// astfel incat daca aceasta s-a incarcat sub latimea data, handlerul sa nu ruleze, iar daca este peste latimea data, acesta sa ruleze.

const button = document.querySelector('.btn');
const breakpoint = 650;

document.addEventListener('DOMContentLoaded', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth >= breakpoint) {
    button.addEventListener('click', onClick);
  }
});

// function functions are hoisted
function onClick() {
  alert('butonul a fost apsat');
}

button.addEventListener('click', onClick);

// debounce or not debounce
// not debounce here
window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth < breakpoint) {
    button.removeEventListener('click', onClick);
  } else {
    button.addEventListener('click', onClick);
  }
});
