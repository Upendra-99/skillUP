document.getElementById('clickEvent').addEventListener('click', function() {
  document.getElementById('message').innerText = 'Click event triggered!';
});

document.getElementById('mouseoverEvent').addEventListener('mouseover', function() {
  document.getElementById('message').innerText = 'Mouseover event triggered!';
});

document.getElementById('mouseoutEvent').addEventListener('mouseout', function() {
  document.getElementById('message').innerText = 'Mouseout event triggered!';
});

document.getElementById('keyupEvent').addEventListener('keyup', function() {
  document.getElementById('message').innerText = 'Keyup event triggered! You typed: ' + this.value;
});

document.getElementById('submitEvent').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('message').innerText = 'Submit event triggered!';
});
