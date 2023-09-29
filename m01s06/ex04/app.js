(function () {
  const paragraphElement = document.createElement('p');
  // adauga clasa message langa celelalte clase
  paragraphElement.classList.add('message');
  // in DOM, pe body, lipeste la sfarsitul doc - paragraf element
  document.body.append(paragraphElement);

  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      const message = 'Mouse-ul este pe scena';

      console.log(message);
      showMessage(message);
    });

    stage.addEventListener('mouseout', function () {
      const message = 'Mouse-ul nu este pe scena';

      console.log(message);
      showMessage(message);
    });
  });

  function showMessage(message) {
    paragraphElement.innerText = message;
  }
})();
