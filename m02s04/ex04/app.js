// // Valideaza formularul din fisier folosind libraria Pristine
// http://pristine.js.org/ ---> nmp i pristinejs
// Campurile nume si prenume trebuie sa aiba nu mai putin de 5 caractere si nu mai mult de 30 fiecare -->> HTML done
// Campul email trebuie sa contina un email valid
// Campul varsta trebuie sa accepte doar numere intre 14 si 99,  ---> HTML done
// atunci cand aceste limite sunt depasite, trebuie afisate mesaje potrivite pentru valoarea introdusa
// Butonul trebuie sa fie dezactivat cand campurile nu sunt completate corect --> JS

document.addEventListener('DOMContentLoaded', function () {
  // scoatem form din dom
  const personForm = document.getElementById('personForm');
  const submitButton = personForm.querySelector('button[type="submit"]');

  // instantiam un pristine
  const pristine = new Pristine(personForm);

  // verificam la dom load
  const isValid = pristine.validate(true);

  if (!isValid) {
    submitButton.disabled = true;
  }

  // event delegation
  personForm.addEventListener('input', function (event) {
    const target = event.target;

    if (!target.name || target.name.trim().length <= 0) {
      return;
    }

    const isValid = pristine.validate(true);

    submitButton.disabled = !isValid;
  });

  personForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.currentTarget;

    const data = {
      name: form.name.value,
      surname: form.surname.value,
      age: form.age.value,
      email: form.email.value,
    };

    console.log('send to server', data);
  });
});
