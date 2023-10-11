const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

    this.displaySpeed();
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topSpeedReversed) {
      this.speed = this.topSpeedReversed;

      return;
    }

    this.speed = speed;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },

  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    setTimeout(() => {
      this.turnLightsOn();
      this.turnLightsOff();
    }, 2000);
  },
};

// car este prototipul pentru Audi, aceasta din urma fiind o clona a lui car (un obiect)
const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 220;

console.log(audi);
