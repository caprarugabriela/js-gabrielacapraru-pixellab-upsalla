// avem nevoie de o clasa Car
// care atunci cand este instantiata
// si se ruleaza metoda .render()
// sa afiseze in DOM masinita cu proprietatile specificate;
// ca proprietati avem nevoie de: pozitie (top/left), color pentru culoare

// new Car (100, 200, purple)
// left: 100, top: 200, background: purple;

class Car {
  constructor(left = 10, top = 10, color = 'black') {
    this.positionX = left;
    this.positionY = top;
    this.color = color;

    this.isLightOn = false;

    this.frame = this.e('div');
    this.frame.classList.add('frame');
    this.frame.style.left = this.positionX + 'px';
    this.frame.style.top = this.positionY + 'px';

    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.lightBack = this.e('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);

    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);

    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);
  }
  // nu se mai practica aceasta tehnica - abstractizare pt createElement
  // wrapper pentru creare document
  e(elementType = 'div') {
    return document.createElement(elementType);
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');

    return this;
  }

  changeTireColor(wheelBackColor, wheelFrontColor) {
    this.wheelBack.style.backgroundColor = wheelBackColor;

    this.wheelFront.style.backgroundColor = wheelFrontColor;

    return this;
  }

  changeCapColor(hubCapBack, hubCapFront) {
    this.hubCapBack.style.backgroundColor = hubCapBack;

    this.hubCapFront.style.backgroundColor = hubCapFront;

    return this;
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');

    return this;
  }

  disenagageBreak() {
    this.ligthBack.classList.remove('light--on');

    return this;
  }

  // doi parametri: top nou si left nou, daca nu sunt definite si nu sunt numere -> exit early return

  move(left, top) {
    const positionX = Number(left);
    const positionY = Number(top);

    if (!isNaN(positionX)) {
      this.frame.style.left = positionX + 'px';
    }

    if (!isNaN(positionY)) {
      this.frame.style.top = positionY + 'px';
    }
  }

  render() {
    // only touch the DOM at the last moment - nu ne atingem de DOM decat daca trebuie si neaparat la sfarsit
    document.body.append(this.frame);

    return this;
  }
}

const purpleCar = new Car(200, 300, 'purple').render();
// new Date().getFullYear();

// (JS) modul in care obtinem instanta depinde de patternul de programare pe care il folosim,
// daca folosim un obiect literal - in OOP se numeste single thor (un singur obiect care nu poate fi instantiat)
purpleCar.changeCapColor('pink', 'pink');
purpleCar.changeTireColor('plum', 'plum');

purpleCar.toggleHazards(); // Aprinde luminile de avarie
setTimeout(() => {
  purpleCar.toggleHazards(); // Stinge luminile de avarie după un interval de timp
}, 3000);
