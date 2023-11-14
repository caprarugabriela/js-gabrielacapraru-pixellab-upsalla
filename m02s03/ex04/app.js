// Foloseste elementul image pentru a afisa intr-un paragraf mesajul “Imaginea s-a incarcat.”, folosind eventul load.

const image = document.querySelector('.image');
const loadingParagraph = document.getElementById('loader');

function showMessage(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  // side effect
  document.body.append(messageContainer);
}
image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');
});

// // Adauga in HTML, in paragraf, textul: “Imaginea se incarca…” si schimba textul din paragraf in “Imaginea s-a incarcat.” atunci cand aceasta s-a incarcat.
// // - paragraf in HTML, extras in memorie din DOM, pe ventul de load, manipulati innerText
image.addEventListener('load', function () {
  loadingParagraph.innerText = 'Imaginea s-a incarcat';
});

// // Atunci cand imaginea s-a incarcat, adauga pe elementul image un eveniment de click care sa afiseze intr-o alerta mesajul: “Imaginea cu URLul: … s-a incarcat.”
// // - pe imagein atributul src (event.currentTarget, sau this.src, daca folositi function function)

image.addEventListener('click', () => {
  alert(`Imaginea cu urlul ${event.currentTarget.src} s-a incarcat`);
});
