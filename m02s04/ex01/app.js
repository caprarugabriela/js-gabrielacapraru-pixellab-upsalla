const box = document.querySelector('.box');
const applyButton = document.querySelector('.apply-button');
const darkenButton = document.querySelector('.darken-button');
const className = 'animate-class';

setTimeout(function () {
  box.classList.add(className);

  // callback hell
  setTimeout(function () {
    box.classList.remove(className);
  }, 2000);
}, 2000);

applyButton.addEventListener('click', function (event) {
  // currentTarget = elementul pe care am rulat addEventListener
  const button = event.currentTarget;
  const classApplied = box.classList.contains(className);
  // ternary operator -> se citeste ca un if
  const message = classApplied ? 'Aplica' : 'Elimina';
  button.innerText = message;
  button.title = message;

  box.classList.toggle(className);
});

darkenButton.addEventListener('click', function () {
  const color = '#000';

  box.setAttribute('style', `background-color: ${color}`);
});
