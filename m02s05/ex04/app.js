const blueprint = document.querySelector('.alert');

function showAlert(message) {
  const clone = blueprint.cloneNode(true);
  const paragraph = clone.querySelector('p');

  paragraph.innerText = message;

  document.body.append(clone);

  clone.open = true;
}

// super bad practice
window.alert = showAlert;

document.body.addEventListener('submit', function (event) {
  const form = event.target;

  if (form.nodeName !== 'FORM' || !form.classList.contains('alert-close')) {
    return;
  }
  event.preventDefault();

  form.parentElement.remove();
});
