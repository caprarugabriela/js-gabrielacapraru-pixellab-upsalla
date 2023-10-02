const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');
const query = document.getElementById(`query`);
const errorMessage = 'Nu ai introdus un numar!';
const paragraphElement = document.getElementById('message');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

console.warn(`Adauga un buton nou in document cu id-ul query si folosind addEventListener() ataseaza un
eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.
(fara validari, sau optional)`);

function ageQuery() {
  const ageInput = prompt('Ce varsta ai?');
  if (ageInput === null || ageInput.trim() === '' || isNaN(ageInput)) {
    console.log(errorMessage);
  } else {
    const message = `Ai ${ageInput} ani`;
    console.log(message);
    paragraphElement.innerText = message;
  }
}

query.addEventListener('click', ageQuery);
