var button = document.getElementById('button');
var bg = document.getElementById('change');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

button.onclick = async function() {
  while (true) {
    bg.style.backgroundColor  = getRandomColor();
    bg.style.color = getRandomColor();
    await sleep(50)
  }

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
