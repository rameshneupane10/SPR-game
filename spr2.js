document.addEventListener('keydown', (event) => {
    var keyName = event.key;
    var keyCode = event.code;
    alert(`Keydown: The key pressed is ${keyName} and its code value is ${keyCode}`);
  }, false);

  