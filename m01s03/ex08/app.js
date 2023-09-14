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
