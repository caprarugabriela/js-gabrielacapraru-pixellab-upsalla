var person = {
  name: 'Gabriela',
  surname: 'Capraru',
  age: 24,
  petOwner: true,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    node: false,
    firebase: false,
    AWS: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },

    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },

    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(
  `Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true. Folosind propozitii de forma: “person.name cunoaste: html.” “person.name cunoaste: javaScript.”`,
);
var skillNames = Object.keys(person.skills);
skillNames.forEach(function (skillName) {
  if (person.skills[skillName] === true) {
  }
  console.log(`${person.name} cunoaste: ${skillName}.`);
});

console.warn(
  `Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor. `,
);
var friendKeyNames = Object.keys(person.friends);
var reversedArray = friendKeyNames.reverse();

reversedArray.forEach(function (friendName) {
  var friend = person.friends[friendName];
  console.log(`${friend.surname} ${friend.name}`);
});

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()`,
);
var message = 'Prietenii mei sunt ';
// ['larry', 'steven', 'carol']
Object.keys(person.friends).forEach(function (
  friendKeyName,
  index,
  friendKeyNames,
) {
  var friend = person.friends[friendKeyName];
  var punctuation = ', ';

  // last iteration
  if (friendKeyNames.length - 1 === index) {
    punctuation = '.';
  }

  // next to last iteration
  if (friendKeyNames.length - 2 === index) {
    punctuation = ' si ';
  }

  message += `${friend.name}${punctuation}`;
});
console.log(message);

console.warn(`
  Folosind bucla, afiseaza mai multe propozitii (cate una per console.log())
  care sa afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…
`);
Object.keys(person.friends).forEach(function (friendKeyName) {
  var friend = person.friends[friendKeyName];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(
    `Diferenta de varsta intre ${friend.name} si ${person.name} este de ${ageDiff} ani.`,
  );
});

console.warn(
  `Folosind Object.keys() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills.`,
);
var skillNames = Object.keys(person.skills);
skillNames.forEach(function (skillName) {
  console.log(skillName);
});

console.warn(
  `Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor. `,
);
Object.keys(person.friends).forEach(function (friendKey) {
  var friend = person.friends[friendKey];
  var fullName = `${friend.name} ${friend.surname}`;
  console.log(fullName);
});

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()`,
);
var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (
  friendKeyName,
  index,
  friendKeyNames,
) {
  var friend = person.friends[friendKeyName];
  var punctuation = ', ';

  if (friendKeyNames.length - 1 === index) {
    punctuation = '.';
  }

  if (friendKeyNames.length - 2 === index) {
    punctuation = ' si ';
  }

  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(
  `Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”`,
);
Object.keys(person.friends).forEach(function (friendKeyName) {
  var friend = person.friends[friendKeyName];

  console.log(`${friend.name} are ${friend.age} ani.`);
});
