var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById('message');

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMessage);
} else if (number < 20) {
  var message = `Numarul ${number} este mai mic decat 20.`;
  // mai mic | smaller
  console.log(message);
  paragraphElement.innerText = message;
} else if (number > 20) {
  var message = `Numarul ${number} este mai mare decat 20`;
  // mai mare | larger
  console.log(message);
  paragraphElement.innerText = message;
} else {
  var message = `Numarul ${number} este egal cu 20`;
}
// egal cu | equal to
