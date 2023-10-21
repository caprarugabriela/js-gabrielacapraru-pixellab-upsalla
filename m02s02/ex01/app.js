const form = document.getElementById('personForm');
const personDisplayClass = 'personDisplay';
// selectorul va aduce practic fieldsetul cu detalii
const existingFieldset = form.querySelector('fieldset:nth-child(2)');

existingFieldset.append(renderSkillInput());

// hoisted
// returns (input and button)
function renderSkillInput() {
  // fragmentul de DOM --> document fragment permite generarea unui fragment de document care nu are parinte/nu exista
  // renuntam astfel la un div(element intermediar) pe care nu il vrem (de ex. liste, tabele)
  const container = new DocumentFragment();
  const skillInput = document.createElement('input');
  skillInput.type = 'text';
  // adaugam clasa addSkill
  skillInput.classList.add('addSkill');
  // adaugam placeholder
  skillInput.placeholder = 'Adauga Skill';
  // adaugam butonasul, cu titlul si il appenduim si pe el
  const skillInputButton = document.createElement('button');
  skillInputButton.title = 'Adauga Skill';
  skillInputButton.innerText = ' + ';

  // La fiecare apasare a butonului, daca in input exista text, afiseaza abilitatea noua intr-o lista neordonata.
  skillInputButton.addEventListener('click', function (event) {
    const button = event.currentTarget;
    // DOM traversal - traversarea DOM-ului
    const skillInput = button.previousElementSibling;
    const skillValue = skillInput.value;
    if (skillValue.trim().length < 1) {
      return;
    }

    button.after(renderSkillsUl(skillValue));

    // cream lista neordonata langa buton
    // renderSkillUl(skillValue)
  });

  container.append(skillInput);
  container.append(skillInputButton);

  return container;
}

function renderSkillsUl(skillName) {
  const className = 'skillsUl';
  let skillsUl = document.querySelector('.' + className);

  if (skillsUl === null) {
    skillsUl = document.createElement('ul');
    skillsUl.classList.add(className);
  }

  const skillLi = document.createElement('li');
  skillLi.innerText = skillName;

  // In dreptul fiecarui element din lista adauga un buton de stergere.

  const deleteSkillButton = document.createElement('button');
  deleteSkillButton.type = 'button';
  deleteSkillButton.innerText = 'Sterge';
  deleteSkillButton.title = 'Sterge Skill';
  deleteSkillButton.classList.add('deleteSkillButton');

  // In momentul in care se apasa butonul, sterge elementul.
  // Exemplu bad practice:
  // deteleSkillButton.addEventListener ('click', function() { alert('test')}); - multe probleme mai ales cand avem mai multe li-uri - de evitat;
  // rezolvarea se va face dupa form reset prin metoda addEventListener pe FORM

  skillLi.append(deleteSkillButton);

  skillsUl.append(skillLi);

  return skillsUl;
}

// pentru evenimentul de submit adauga un eventlistener care este functia de mai jos;
// prin event.preventDefault vrem sa prevenim comportamentul normal
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const person = {};
  // currentTarget => pointer catre obiectul de DOM pe care s-a rulat addEventListener
  const form = event.currentTarget;

  person.name = form.name.value;
  person.surname = form.surname.value;
  person.age = form.age.value;

  clearDisplay();
  const personDisplay = render(person);
  form.after(personDisplay);

  form.reset();
});

// apasare buton stergere -> sterge elementul
// bubly - evenimentul se intampla pe buton, dupa urca prin fiecare element pana ajunge la document (sau comparatia cu turnul)
form.addEventListener('click', function () {
  // obtain button from DOM
  // target este obiectul DE PE CARE A PLECAT EVENIMENTUL
  const target = event.target;
  // check if actual button (vedem daca este butonul corect)
  // nodeName = numele nodului, se scrie cu caps
  // traducere = daca target.nodeName nu este buton SAU target.classlist nu include deleteskillbutton
  // lasam evenimentul sa plece mai departe
  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('deleteSkillButton')
  ) {
    // return early;
    return;
  }
  // readability hack
  const deleteSkillButton = target;

  // DOM tranversal
  // button.parentElement.remove()
  deleteSkillButton.parentElement.remove();
});

// hoisted
// deduplicam rezultatul din display(consola) si aveam 2 variante: queryselector + remove (easiest one)
// sau cu nextElementSibling si cateva if-uri + remove pe clasa personDisplay (thougher one)
function clearDisplay() {
  const display = document.querySelector('.' + personDisplayClass);

  if (display !== null) {
    display.remove();
  }
}

function render(person) {
  // in memory
  const personDisplay = document.createElement('div');
  personDisplay.classList.add(personDisplayClass);

  personDisplay.append(renderPerson(person));

  return personDisplay;
}

// hoisting at the top - a ridica, a urni (punem functia imediat sub locul in care va fi folosita)

function renderPerson(person) {
  const paragraph = document.createElement('p');

  paragraph.innerText = `${person.name} ${person.surname}: ${person.age}`;

  return paragraph;
}
