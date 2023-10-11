// syntatic sugar =  facem sintaxa sa semene cu un alt limbaj de programare, desi nu are in fapt suport
// js nu are clase
// constructor = metoda noua, pregateste instanta
// this = pointer pentru locatia din memorie
// metodele traiesc pe prototip (accelerate/decelerate)

class Car {
  // notatia 1 din JS nou
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(`Viteza noua este: ${this.speed}.`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    setTimeout(() => {
      this.turnLightsOn();
      this.turnLightsOff();
    }, 2000);
  }
}

// in variabila Audi punem o noua instanta
const audi = new Car('Audi', 'black', 4, 55);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];
// sa vedem bucla pe tema

// aici nu se mai inverzea Pixeltabul daca puneam car.speed-5(sa decelerez cu 5km)
cars.forEach(function (car) {
  console.log(`Viteza noua este ${car.speed} km/h.`);
});
