class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    this.make = make;
    this.color = color;
    this.speed = speed;
    this.wheels = wheels;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  // speed = 5 -> parametru
  setSpeed(speed = 5) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    // proprietatea de pe instanta este tot speed - exemplu bun pt incapsulare (atributele unei entitati sunt inchise in instanta in cazul acesta)
    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  // exemplu naiv de polimorfism - forteaza this.speed = 0, nu foloseste topReverseSpeed
  decelerate() {
    if (--this.speed < 0) {
      this.speed = 0;
    }

    this.displaySpeed();
  }
}

const bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);

bike.decelerate();
bike.decelerate();
bike.decelerate();

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
  }
}

const trike = new Tricycle('Tryke', 'red', 2, 9, -2);
trike.speed = 0;
for (let i = 0; i < 3; i++) {
  trike.decelerate();
}

trike.speed = -10;
console.log(`Viteza tricicleta: ${trike.speed}`);

const extraCar = new Car('audi', 'blue', 3, 140, -50);
extraCar.setSpeed(140);

for (let i = 0; i < 3; i++) {
  extraCar.accelerate();
  console.log(`Viteza dupa accelerare este ${extraCar.speed}`);
}

// datorita conditiilor de evitare a supraccelerarii si subaccelerarii, vehiculele nu vor depasi valorile maxime topSpeed si topReversespeed
