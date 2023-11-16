const breakpoint = 992;
const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
// event delegation
document.addEventListener('click', onClick);

function onClick(event) {
  // target -> elemetnul de pe care a plecat eventul
  const target = event.target;

  // verificari + early return
  if (target.nodeName !== 'H1') {
    return;
  }

  const list = target.nextElementSibling;
  list.hidden = !list.hidden;
}

// low resolution
if (mql.matches) {
  toggleLists();
}

// destructure
mql.addEventListener('change', function ({ matches }) {
  const lists = document.querySelectorAll('ul');
  console.log('change');
  if (matches === true) {
    // add listener
    document.addEventListener('click', onClick);

    lists.forEach(function (list) {
      list.hidden = true;
    });
  } else {
    // remove listener
    document.removeEventListener('click', onClick);

    lists.forEach(function (list) {
      list.hidden = false;
    });
  }
});

function toggleLists() {
  const lists = document.querySelectorAll('ul');

  lists.forEach(function (list) {
    list.hidden = true;
  });
}
