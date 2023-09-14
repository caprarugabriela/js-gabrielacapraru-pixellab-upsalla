var limitA = 32;

console.warn(`
  Modifica exemplul astfel incat bucla sa numere de la 1 la 32,
  afisand in consola propozitii de forma
  “Numar pana la 32 inclusiv: i.”.
`);
for (var i = 1; i <= limitA; i++) {
  console.log('Numar pana la ' + limitA + ' inclusiv: ' + i + '.');
}

console.warn(`
  Modifica exemplul astfel incat bucla sa numere de la 1 la 31
  (dar nu schimba numarul 32), afisand in consola
  propozitii de forma “Numar pana la 32 exclusiv: i.”.
`);
for (var i = 1; i < limitA; i++) {
  console.log('Numar pana la ' + limitA + ' exclusiv: ' + i + '.');
}

var limitB = 15;
console.warn(`
  Folosind keywordul break, opreste bucla atunci
  cand numarul este egal cu 15 (dar afiseaza-l),
  afisand propozitii de forma “Ma voi opri la 15: i.”.
`);
for (var i = 1; i < limitA; i++) {
  console.log('Ma voi opri la ' + limitB + ': ' + i + '.');

  if (i === limitB) {
    console.log('M-am oprit la ' + limitB + '.');

    break;
  }
}

console.warn(`
  Folosind keywordul continue,
  afiseaza doar numerele pare intre 1 si 32
  (inclusiv 32 ) cu propozitii de forma
  “Toate numele pare intre 1 si 32 inclusiv: i.”.
`);
for (var i = 1; i <= limitA; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(
    'Toate numerele pare intre 1 si ' + limitA + ' inclusiv: ' + i + '.',
  );
}

var denominator = 5;
console.warn(`
  In mod similar, afiseaza doar numerele care
  sunt divizibile cu 5 cu propozitii de forma
  “Toate numerele divizibile cu 5 pana la 32 inclusiv: i.”.
`);
for (var i = 1; i <= limitA; i++) {
  if (i % denominator === 0) {
    console.log(
      'Toate numerele divizibile cu ' +
        denominator +
        ' pana la ' +
        limitA +
        ' inclusiv: ' +
        i +
        '.',
    );
  }
}
