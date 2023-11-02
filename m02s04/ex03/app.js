const stage = document.querySelector('.stage');
const hero = stage.querySelector('.hero');

const controls = document.querySelector('.controls');

const axisMotionMap = {
  E: {
    x: 1,
  },
  S: {
    y: 1,
  },
};
const keysMap = {
  // ArrowUp: ,
  ArrowRight: axisMotionMap.E,
  ArrowDown: axisMotionMap.S,
  // ArrowLeft: ,
};
const step = 30;

// game state (desi nu-i un joc)
const heroState = {
  x: 0,
  y: 0,
};

// page load
renderHero();

controls.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.dataset.direction ||
    target.dataset.direction.trim().length <= 0
  ) {
    return;
  }

  const button = target;
  const value = button.dataset.direction;
  const axes = axisMotionMap[value];

  updateHeroPosition(axes);
  renderHero();
});

document.addEventListener('keydown', function (event) {
  const { key } = event;
  const axes = keysMap[key];

  updateHeroPosition(axes);
  renderHero();
});

// function hoisting
function renderHero() {
  const { x, y } = heroState;
  const cssValue = `${x}px ${y}px`;

  hero.style.translate = cssValue;
}

function updateHeroPosition(axes) {
  Object.keys(axes).forEach(function (axis) {
    heroState[axis] = heroState[axis] + axes[axis] * step;
  });

  // adjustments / boundaries
  if (heroState.x >= stage.clientWidth - hero.clientWidth) {
    heroState.x = stage.clientWidth - hero.clientWidth;
  }

  if (heroState.y >= stage.clientHeight - hero.clientHeight) {
    heroState.y = stage.clientHeight - hero.clientHeight;
  }

  // insert code for N and W
}
