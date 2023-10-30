// // Folosind evenimentul resize al obiectului window, afiseaza o alerta care sa contina mesajul: “Fereastra si-a schimbat dimensiunea.”
// Folosind evenimentul resize si proprietatea innerWidth al obiectului window, afiseaza intr-un paragraf in DOM
// noua latime a ferestrei dupa fiecare eveniment de resize.

// Folosind evenimentul resize si proprietatea innerWidth al obiecutului window, afiseaza in alt paragraf mesajul:
// “Fereastra si-a schimbat dimensiunea orizontala.”
const showMessage = function (message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  // prepend=la inceput vs append la sf
  document.body.prepend(messageContainer);
};

// measure window at load time -> dimensiunea curenta
let oldWidth = window.innerWidth;

// event debounce + de pus in html (nu mai apare de fiecare data cand s a modif dimensiunea)
const debouncedResizeHandler = debounce(function () {
  const currentWidth = window.innerWidth;
  showMessage(currentWidth);

  if (oldWidth !== currentWidth) {
    showMessage('Fereastra si-a schimbat dimensiunea orizontala');
  }

  oldWidth = currentWidth;
}, 50);
// 50-> daca in intervalul acesta modificam de mai multe ori, apare doar o singura data textul

window.addEventListener('resize', debouncedResizeHandler);
// nu folosim alert, multe probleme
// alert('Fereastra si-a schimbat dimensiunea.');

// Folosind evenimentul resize al obiectului window si proprietatile innerWidth si innerHeight, la fiecare redimensionare a ferestrei,
//  afiseaza intr-un paragraf mesajul: “Fereastra are acum suprafata de xxx pixeli.”.

// Folosind evenimentul de DOMContentLoaded si o functie reutilizabila afiseaza suprafata ferestrei si la momentul incarcarii site-ului.
