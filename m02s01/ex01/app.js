// syntatic sugar =  facem sintaxa sa semene cu un alt limbaj de programare, desi nu are in fapt suport
// js nu are clase
// constructor = metoda noua, pregateste instanta
// this = pointer pentru locatia din memorie
// metodele traiesc pe prototip (accelerate/decelerate)

class Car {
  // notatia 1 din JS nou
  topSpeed = 160;
  topReverseSpeed = -50;

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
}

// in variabila Audi punem o noua instanta
const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];
// sa vedem bucla pe tema
