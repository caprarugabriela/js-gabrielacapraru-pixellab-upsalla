(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    let eventBound = true;

    function showAlert() {
      alert('butonul a fost apasat!');
    }

    // pe elementul showButton adauga un eveniment de tip click
    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        // scoate event
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'Porneste afisarea';
        showMessage('Alerta NU va fi afisata');
        eventBound = false;
      } else {
        // adauga event
        showButton.addEventListener('click', showAlert);
        this.innerText = 'Opreste afisarea';
        showMessage('Alerta va fi afisata');
        eventBound = true;
      }
    });

    function showMessage(message) {
      const className = 'message';
      let paragraphElement = document.querySelector('.' + className);

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add('className');
        document.body.append(paragraphElement);
      }

      paragraphElement.innerText = message;
    }
  });
})();

console.warn(`Adauga un buton in document pe care cand apesi, sunt eliminate celelate butoane cu metoda .remove()
(puteti sa-l scrieti direct in HTML cu id=”removeButtons. Folosind metoda confirm(),
modifica codul de la punctul anterior astfel incat utilizatorul sa confirme eliminarea elementelor din DOM:
“Esti sigur ca vrei sa stergi butoanele din DOM?”.
”)
`);

removeEventsButton.addEventListener('click', function () {
  if (confirm('Esti sigur ca vrei sa stergi butoanele din DOM?') === true) {
    showButton.remove();
    toggleEventButton.remove();
  }
});
