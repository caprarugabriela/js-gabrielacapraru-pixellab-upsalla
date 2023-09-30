var cart = {
  name: 'Gabriela',
  surname: 'Capraru',
  email: 'gabriela@capraru.com',
  products: [
    {
      category: 'PC and Laptop',
      name: 'Mouse',
      price: 200,
      quantity: 2,
      weight: 180,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard Mat',
      price: 119,
      quantity: 1,
      weight: 90,
    },
    {
      category: 'Mobile',
      name: 'USB Multicharger',
      price: 150,
      quantity: 3,
      weight: 15,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
      weight: 280,
    },
    {
      category: 'Mobile',
      name: 'Phone dock',
      price: 200,
      quantity: 2,
      weight: 350,
    },
    {
      category: 'Home',
      name: 'Picture frame',
      price: 800,
      quantity: 1,
      weight: 150,
    },
  ],
};

console.warn(
  `Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart.”`,
);
cart.products.forEach(function () {
  var cartLength = cart.products.length;
  console.log(
    `${cart.name} ${cart.surname} are ${cartLength} tipuri de produse in cart.`,
  );
});

console.warn(
  `Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”`,
);

var message = `${cart.name} are urmatoarele produse in cart: `;
cart.products.forEach(function (product, index, products) {
  var punctuation = ', ';

  if (cart.products.length - 1 === index) {
    punctuation = '.';
  }

  if (cart.products.length - 2 === index) {
    punctuation = ' si ';
  }

  message += `${product.name}${punctuation}`;
});
console.log(message);

console.warn(
  `Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”`,
);
var sumProduct = 0;
cart.products.forEach(function (product) {
  sumProduct += product.price * product.quantity;
});
console.log(
  `Valoarea totala a cartului lui ${cart.name} este ${sumProduct.toString()}.`,
);

console.warn(
  `Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”`,
);
var totalWeight = 0;
cart.products.forEach(function (product) {
  totalWeight += product.weight * product.quantity;
});
console.log(
  `Greutatea totala a cartului lui ${
    cart.name
  } este ${totalWeight.toString()}.`,
);

console.warn(`Afiseaza propozitia “Name isi cumpara un total de xxx produse.”`);
var totalQuantity = 0;
cart.products.forEach(function (product) {
  totalQuantity += product.quantity;
});
console.log(`${cart.name} isi cumpara un total de ${totalQuantity} produse.`);

console.warn(
  `Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”`,
);
var totalValueMobile = 0;
cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    totalValueMobile += product.price * product.quantity;
  }
});
console.log(
  `Cartul contine produse din categoria Mobile in valoare totala de ${totalValueMobile}.`,
);

console.warn(
  `Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”`,
);
var totalWeightMobile = 0;
cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    totalWeightMobile += product.weight * product.quantity;
  }
});
console.log(
  `Greutatea totala a produselor din categoria Mobile este ${totalWeightMobile}.`,
);

// pe mine m-a bagat in ceata putin cerinta asta :))) m-a dus cu gandul la un fel de pret mediu si sa fac o medie ponderata=)))
console.warn(
  `Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”`,
);
var totalProductPrice = 0;

cart.products.forEach(function (product) {
  totalProductPrice += product.price;
});
console.log(`Totalul pretului per produs din cart este ${totalProductPrice}.`);

console.warn(`Nume prenume isi permite | nu isi permite cartul.” In functie de valoarea aleasa
`);
var maximumBudget = 2000;
var totalValueCart = 0;
cart.products.forEach(function (product) {
  totalValueCart += product.price * product.quantity;
});
if (maximumBudget >= totalValueCart) {
  console.log(`${cart.name} ${cart.surname} isi permite cartul.`);
} else {
  console.log(`${cart.name} ${cart.surname} nu isi permite cartul.`);
}

console.warn(
  `Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de greutatea totala a produselor din cart.`,
);
var maximumWeight = 1725;
var totalWeightCart = 0;
cart.products.forEach(function (product) {
  totalWeightCart += product.weight * product.quantity;
});
if (maximumWeight >= totalWeightCart) {
  console.log('Firma de curierat poate livra comanda.');
} else {
  console.log('Firma de curierat nu poate livra comanda.');
}
