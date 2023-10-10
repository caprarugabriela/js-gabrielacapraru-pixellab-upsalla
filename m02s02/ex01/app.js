const form = document.getElementById('personForm');

const person = {
  name: 'Gabriela',
  surname: 'Capraru',
  age: 24,
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // refactor
  const personDisplay = renderPerson(person);
  // refactor
  form.after(personDisplay);
});

function renderPerson(person) {
  const paragraph = document.createElement('p');

  paragraph.innerText = `${person.name} ${person.surname}: ${person.age}`;

  return paragraph;
}
