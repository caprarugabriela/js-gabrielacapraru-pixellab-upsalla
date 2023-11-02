const controls = document.querySelector('.controls');
const box = document.querySelector('.box');
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
  box.style.backgroundColor = color;
});

colorInput.addEventListener('change', function (event) {
  // dom traversal
  const input = event.currentTarget;
  const button = input.previousElementSibling;
  const value = input.value;

  button.dataset.color = value;
  button.style.backgroundColor = value;
});

resetButton.addEventListener('click', function () {
  box.removeAttribute('style');
});
