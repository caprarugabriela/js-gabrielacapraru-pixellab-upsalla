// cand pagina se incarca sub 500 de pixeli, ascunde lista neordonata (atributul hidden)
//  si o afiseaza sau o ascunde atunci cand se apasa headerul h1.
const breakpoint = 500;
const list = document.querySelector('ul');
const header = document.querySelector('h1');

// prima functionalitate - ascunderea listei neordonate cand <500px
document.addEventListener('DOMContentLoaded', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth < breakpoint) {
    list.hidden = true;
  }
});

// cream functia onClick pt header pt afisa/ascunde lista cand apasam pe h1
function onClick() {
  list.hidden = !list.hidden;
}

// aici o adaugam pe h1
header.addEventListener('click', onClick);

// Atunci cand fereastra se redimensioneaza peste 500 pixeli, afiseaza lista si elimina event handlerul de click de pe h1.
// Daca se redimensioneaza sub 500, adauga handlerul la loc, astfel incat lista sa poata fi ascunsa sau afisata.

window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth < breakpoint) {
    list.hidden = true;
  } else {
    list.hidden = false;
  }
});
