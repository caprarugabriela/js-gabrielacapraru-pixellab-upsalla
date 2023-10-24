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
  // daca vrem sa evitam transmiterea formularului (gen submit) pun MEREU BUTTON TYPE=BUTTON
  skillInputButton.type = 'button';

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

    // add keydown addeventlistener pentru skillInput

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

  // Imbracam textul skillului intr-un span pentru a da functionalitate butonului de edit
  const skillText = document.createElement('span');
  skillText.classList.add('skillText');
  skillText.innerText = skillName;

  // Am creat langa text un input type hidden cu valoarea skillului
  const skillInput = document.createElement('input');
  skillInput.type = 'hidden';
  skillInput.name = `skill-${skillName}`;
  skillInput.value = skillName;

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

  // In dreptul fiecarei abilitati din lista neordonata adauga si un buton de editare.
  const editSkillButton = document.createElement('button');
  editSkillButton.type = 'button';
  editSkillButton.innerText = 'Editeaza';
  editSkillButton.title = 'Editeaza Skill';
  editSkillButton.classList.add('editSkillButton');

  // Am creat butonul de Cancel edit care este by default ascuns
  const cancelEditSkillButton = document.createElement('button');
  cancelEditSkillButton.type = 'button';
  cancelEditSkillButton.innerText = 'Cancel';
  cancelEditSkillButton.title = 'Cancel Edit';
  cancelEditSkillButton.classList.add('cancelEditSkillButton');
  cancelEditSkillButton.hidden = true;

  // Am creat butonul de Save edit care este by default ascuns
  const saveSkillButton = document.createElement('button');
  saveSkillButton.type = 'button';
  saveSkillButton.innerText = 'Save';
  saveSkillButton.title = 'Save Edit';
  saveSkillButton.classList.add('saveSkillButton');
  cancelEditSkillButton.hidden = true;

  // ordinea conteaza
  skillLi.append(skillText);
  skillLi.append(skillInput);
  skillLi.append(deleteSkillButton);
  skillLi.append(editSkillButton);
  skillLi.append(cancelEditSkillButton);
  skillLi.append(saveSkillButton);

  skillsUl.append(skillLi);

  return skillsUl;
}

// pentru evenimentul de submit adauga un eventlistener care este functia de mai jos;
// prin event.preventDefault vrem sa prevenim comportamentul normal
// event delegation
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const person = {};
  // currentTarget => pointer catre obiectul de DOM pe care s-a rulat addEventListener
  const form = event.currentTarget;

  // reprezinta una din formele prin care putem scoate (citi) inf din formular - varianta mai veche
  person.name = form.name.value;
  person.surname = form.surname.value;
  person.age = form.age.value;
  person.skills = [];

  // extragem campurile prefixate cu skill- din form
  const skillNames = form.querySelectorAll('input[name^="skill-"]');
  // daca facem document.querySelector('input[name^="skill-"]') in consola -> vom primi Nodelist[], cu length -- este un
  // array like object (nu este de fapt un array)

  // apoi numaram daca sunt 0 nu facem nimic
  // daca nu sunt 0, atunci vom face o bucla prin toate (node list, array like object, prototype chain)
  // extragem valoarea si o adaugam in arrayul skills (prin .push() -> muteaza date)
  skillNames.forEach(function (skillInput) {
    person.skills.push(skillInput.value);
  });

  clearDisplay();
  const personDisplay = render(person);
  form.after(personDisplay);

  form.reset();
});

// apasare buton stergere -> sterge elementul
// bubly - evenimentul se intampla pe buton, dupa urca prin fiecare element pana ajunge la document (sau comparatia cu turnul)
form.addEventListener('click', function (event) {
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

// apasare buton editare -> editeaza elementul
form.addEventListener('click', function (event) {
  // target este obiectul DE PE CARE A PLECAT EVENIMENTUL
  const target = event.target;

  // check if actual button (vedem daca este butonul corect)
  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('editSkillButton')
  ) {
    return;
  }

  // readability hack
  const editSkillButton = target;

  //  hide delete button
  editSkillButton.parentElement.querySelector(
    '.deleteSkillButton',
  ).hidden = true;

  // hide skillText
  editSkillButton.parentElement.querySelector('.skillText').hidden = true;

  // hide actual edit button
  editSkillButton.hidden = true;

  // change type hidden in text
  editSkillButton.parentElement.querySelector('input[name^="skill-"]').type =
    'text';

  // show cancel btn - afiseaza butonul de cancel
  editSkillButton.parentElement.querySelector(
    '.cancelEditSkillButton',
  ).hidden = false;

  // show save btn -  afiseaza butonul de save
  editSkillButton.parentElement.querySelector(
    '.saveSkillButton',
  ).hidden = false;
});

// // event delegation for cancelEditSkillButton -> facem sa mearga butonul de cancel
form.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('cancelEditSkillButton')
  ) {
    return;
  }

  const cancelButton = target;
  const parentElement = cancelButton.parentElement;

  // show span.SkillLi
  parentElement.querySelector('.skillText').hidden = false;
  // show button.editSkillButton
  parentElement.querySelector('.editSkillButton').hidden = false;
  // show button.deleteSkillButton
  parentElement.querySelector('.deleteSkillButton').hidden = false;
  // hide this buttton - cancelbtn
  cancelButton.hidden = true;
  // hide saveSkillButton
  parentElement.querySelector('.saveSkillButton').hidden = true;
  // change type from text to hidden on input
  parentElement.querySelector('[name^="skill-"]').type = 'hidden';
});

// event delegation for saveSkillButton -> facem sa mearga butonul de Save
form.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('saveSkillButton')
  ) {
    return;
  }

  saveSkill(target);
});

// enter -> buton de save/submit(?)
form.children[1].addEventListener(
  'keypress',
  function (event) {
    const target = event.target;

    if (
      target.nodeName !== 'INPUT' ||
      !target.name.startsWith('skill-') ||
      event.key !== 'Enter'
    ) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    saveSkill(target);
  },
  true,
);

function saveSkill(target) {
  const parentElement = target.parentElement;

  // copy value from input to skillText
  // (tema, early return)
  const skillInput = parentElement.querySelector('input[name^="skill-"]');
  const value = skillInput.value;

  // insert code here

  const skillText = parentElement.querySelector('.skillText');
  skillText.innerText = value;
  skillText.hidden = false;

  // hide cancel
  parentElement.querySelector('.cancelEditSkillButton').hidden = true;
  // change type to
  skillInput.type = 'hidden';
  // show edit
  parentElement.querySelector('.editSkillButton').hidden = false;
  // show delete
  parentElement.querySelector('.deleteSkillButton').hidden = false;
}

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

  const skillsUl = renderSkills(person.skills);
  if (skillsUl !== null) {
    personDisplay.append(skillsUl);
  }

  return personDisplay;
}

// hoisting at the top - a ridica, a urni (punem functia imediat sub locul in care va fi folosita)

function renderPerson(person) {
  const paragraph = document.createElement('p');

  paragraph.innerText = `${person.name} ${person.surname}: ${person.age}`;

  return paragraph;
}

function renderSkills(skills = []) {
  if (skills.length <= 0) {
    return null;
  }

  const container = new DocumentFragment();
  const heading = document.createElement('h3');
  heading.innerText = 'Skills';
  container.append(heading);

  const ul = document.createElement('ul');
  skills.forEach(function (skillName) {
    const li = document.createElement('li');
    li.innerText = skillName;
    ul.append(li);
  });

  container.append(ul);

  return container;
}
