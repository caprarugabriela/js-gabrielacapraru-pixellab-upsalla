var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },
  {
    name: 'Google Analytics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

console.warn(`Afiseaza in consola propozitia “Siteul foloseste urmatoarele servicii: a, b, c, d si e.”
`);
var message = 'Siteul foloseste urmatoarele servicii: ';
for (var i = 0; i < services.length; i++) {
  var serviceName = services[i].name;
  var punctuation = ', ';

  if (services.length - 1 === i) {
    punctuation = '.';
  }

  if (services.length - 2 === i) {
    punctuation = ' si ';
  }
  message += serviceName + punctuation;
}
console.log(message);

console.warn(
  `Afiseaza doar numele serviciilor integrate dupa 2020 intr-o propozitie de forma “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”`,
);
var message = 'Serviciile ';
for (var i = 0; i < services.length; i++) {
  var serviceName = services[i].name;
  var serviceAdoption = services[i].adoption;

  if (serviceAdoption >= 2020) {
    message += `${serviceName}`;
    if (i < services.length - 1) {
      message += ', ';
    } else {
      message += ' au fost adoptate dupa 2020 inclusiv.';
    }
  }
}
console.log(message);

console.warn(`Afiseaza doar pentru serviciile de pe pozitii pare, cate una pe linie, propozitii de forma
“Serviciul se numeste xxx si a fost integrat in yyyy.”`);
for (var i = 0; i < services.length; i++) {
  var serviceName = services[i].name;
  var serviceAdoption = services[i].adoption;

  if (i % 2 === 0) {
    console.log(
      `Serviciul se numeste ${serviceName} si a fost integrat in ${serviceAdoption}.`,
    );
  }
}

console.warn(
  `Folosind anul curent afiseaza propozitii de forma “Siteul foloseste serviciul xxx de yyy ani.”`,
);
for (var i = 0; i < services.length; i++) {
  var serviceName = services[i].name;
  var serviceAdoptionYear = services[i].adoption;
  var currentYear = new Date().getFullYear();
  var yearDiff = currentYear - serviceAdoptionYear;

  console.log(`Siteul foloseste serviciul ${serviceName} de ${yearDiff} ani.`);
}

console.warn(`Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma “Folosim xxx de yyy ani.”
`);
var oldestService = services[0];

for (var i = 1; i < services.length; i++) {
  var currentYear = new Date().getFullYear();
  var yearDiff = currentYear - oldestService.adoption;
  var service = services[i];

  if (service.adoption < oldestService.adoption) {
    oldestService = service;
  }
}
console.log(`Folosim ${oldestService.name} de ${yearDiff} ani.`);
