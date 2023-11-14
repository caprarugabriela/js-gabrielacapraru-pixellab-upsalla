// Creeaza trei butoane in document, atunci cand fiecare este apasat, cutia sa tranzitioneze spre o culoare la alegerea ta. Fiecare buton trebuie sa aiba culoarea spre care va tranzitiona cutia
// Adauga un al doilea buton, si un camp input de tip text, atunci cand se adauga o culoare in campul text (hex sau string) fundalul butonului sa tranzitioneze spre culoarea destinatie, iar la apasarea sa sa tranzitioneze si fundalul cutiei spre aceasta
// Adauga un al treilea buton care sa reseteze efectul butonului dinamic, folosind
// https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
// Imbunatateste exemplul folosind un element input de tip color

const controls = document.querySelector('.controls');
const boxes = document.querySelectorAll('.box input[type="radio"]');
const colorInput = controls.querySelector('.color-input');
const resetButton = controls.querySelector('.reset-button');

// event delegation
controls.addEventListener('click', function (event) {
  // event.target = elementul de pe care a plecat clickul
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.dataset.color ||
    target.dataset.color.trim().length <= 0
  ) {
    return;
  }

  const button = target;
  const color = button.dataset.color;

  const checkedBox = document.querySelector('.box input[type="radio"]:checked');

  if (checkedBox) {
    const box = checkedBox.parentElement;
    box.style.backgroundColor = color;
  }
});

colorInput.addEventListener('change', function (event) {
  // dom traversal
  const input = event.currentTarget;
  const button = input.previousElementSibling;
  const value = input.value;

  button.dataset.color = value;
  button.style.backgroundColor = value;

  // Revenind de la color la un input de tip text, nu aplica stil pe element decat daca in campul text se afla un string de format hex corect (google regex for hex color)
  if (/^#[0-9A-F]{6}$/i.test(value)) {
    const checkedBox = document.querySelector(
      '.box input[type="radio"]:checked',
    );

    if (checkedBox) {
      const box = checkedBox.parentElement;
      box.style.backgroundColor = value;
    }
  }
});

resetButton.addEventListener('click', function () {
  boxes.forEach(function (box) {
    box.parentElement.removeAttribute('style');
  });
});
