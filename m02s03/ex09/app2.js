// Clasa - VARIANTA 1
document.addEventListener('DOMContentLoaded', function () {
  const breakpoint = 1024;
  const heading = document.querySelector('h1');
  // dom traversal - coboram la urm element de sub h1 -> ul
  const list = heading.nextElementSibling;

  // resize event
  // no debounce
  window.addEventListener('resize', checkResolution);

  function checkResolution() {
    console.log('checking resolution');
    // perform calculations - daca suntem sub 1024 sau peste
    if (window.innerWidth < breakpoint) {
      // hide list si bind event
      list.hidden = true;
      heading.addEventListener('click', toggleList);
    } else {
      // show list si unbind event
      list.hidden = false;
      heading.removeEventListener('click', toggleList);
    }

    // hoisting
    function toggleList() {
      list.hidden = !list.hidden;
    }
  }
  checkResolution();
});
