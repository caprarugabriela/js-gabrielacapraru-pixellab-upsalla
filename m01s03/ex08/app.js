var cart = {
  id: 'cart-id-12345',
  ownerId: 'user-id-54321',
  firstName: 'Gabriela',
  lastName: 'Capraru',
  email: 'gabriela@capraru.com',
  products: [
    {
      id: 'product-id-0',
      name: 'Mouse',
      price: 200,
      quantity: 2,
    },
    {
      id: 'product-id-1',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
    },
    {
      id: 'product-id-2',
      name: 'Keyboard Mat',
      price: 119,
      quantity: 1,
    },
  ],
};

console.warn(
  `Afiseaza propozitia “Numele meu este xxx yyy iar emailul meu este: eee.”`,
);
console.log(
  'Numele meu este ' +
    cart.firstName +
    ' ' +
    cart.lastName +
    ' ' +
    'iar emailul meu este: ' +
    cart.email +
    '.',
);

console.warn(
  `Afiseaza propozitia “Utilizatorul cu idul iii are xxx tipuri de produse in cartul cu idul ccc.”
  folosind proprietatea length pe arrayul de produse`,
);
console.log(
  'Utilizatorul cu idul ' +
    cart.ownerId +
    ' are ' +
    cart.products.length +
    ' tipuri de produse in cartul cu idul ' +
    cart.id +
    '.',
);

console.warn(
  `Afiseaza propozitia “Al treilea produs pe care il cumpara xxx este ppp.”`,
);
console.log(
  'Al treilea produs pe care il cumpara ' +
    cart.firstName +
    ' este ' +
    cart.products[2].name +
    '.',
);

console.warn(
  `Afiseaza propozitia “xxx yyy cumpara ppp produse in total”;
  folosind accesul direct la fiecare din obiectele din arrayul products.`,
);
console.log(
  cart.firstName +
    ' ' +
    cart.lastName +
    ' cumpara ' +
    (cart.products[0].quantity +
      cart.products[1].quantity +
      cart.products[2].quantity) +
    ' produse in total.',
);

console.warn(
  `Afiseaza propozitia “Sunt xxx si cumpar produsele p1, p2 si p3.”; folosind accesul direct la fiecare din obiectele din arrayul products.`,
);
console.log(
  'Sunt ' +
    cart.firstName +
    ' si cumpar produsele ' +
    cart.products[0].name +
    ', ' +
    cart.products[1].name +
    ' si ' +
    cart.products[2].name +
    '.',
);

console.warn(
  `“Valoarea totala a cartului cu idul iii este ttt.”;
  folosind accesul direct la fiecare din obiectele din arrayul products (price, quantity). (product[0].price * product[0].quantity )`,
);
console.log(
  'Valoarea totala a cartului cu idul ' +
    cart.id +
    ' este ' +
    (cart.products[0].price * cart.products[0].quantity +
      cart.products[1].price * cart.products[1].quantity +
      cart.products[2].price * cart.products[2].quantity) +
    '.',
);

console.warn(`Afiseaza propozitia ”xxx yyy a cumparat produsul ppp in cantitatea ccc in valoare totala de ttt.”
Foloseste produsul de pe indexul 0.`);
console.log(
  cart.firstName +
    ' ' +
    cart.lastName +
    ' a cumparat produsul ' +
    cart.products[0].name +
    ' in cantitatea ' +
    cart.products[0].quantity +
    ' in valoare totala de ' +
    cart.products[0].price * cart.products[0].quantity +
    '.',
);
