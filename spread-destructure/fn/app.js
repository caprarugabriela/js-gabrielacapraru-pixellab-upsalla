function domLog() {
  // argument work

  let message = '';

  for (let i = 0; i < arguments.length; ++i) {
    message += arguments[i] + ' ';
  }

  if (message.length < 1) {
    return;
  }

  const p = document.createElement('p');
  p.innerText = message;
  document.body.append(p);
}

domLog('hello');
domLog('hello', 'world');
domLog('hello', 'world', 'I');
domLog('hello', 'world', 'I', 'code');

const domLog2 = (...arguments) => {
  // arguments don't work
  let message = '';

  for (let i = 0; i < arguments.length; ++i) {
    message += arguments[i] + ' ';
  }

  if (message.length < 1) {
    return;
  }

  const p = document.createElement('p');
  p.innerText = message;
  document.body.append(p);
};

domLog2('hello');
domLog2('hello', 'world');
domLog2('hello', 'world', 'I');
domLog2('hello', 'world', 'I', 'code');
