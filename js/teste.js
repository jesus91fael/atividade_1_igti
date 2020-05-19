function rangeRed() {
  var resultadoRed = document.getElementById('valueRed');
  var valorRed = document.getElementById('red').value;
  resultadoRed.placeholder = valorRed;
  return valorRed;
}

function rangeGreen() {
  var resultadoGreen = document.getElementById('valueGreen');
  var valorGreen = document.getElementById('green').value;
  resultadoGreen.placeholder = valorGreen;
  return valorGreen;
}

function rangeBlue() {
  var resultadoBlue = document.getElementById('valueBlue');
  var valorBlue = document.getElementById('blue').value;
  resultadoBlue.placeholder = valorBlue;
  return valorBlue;
}
rangeRed();
rangeGreen();
rangeBlue();

document.addEventListener('change', rangeRed);
document.addEventListener('change', rangeGreen);
document.addEventListener('change', rangeBlue);

const box = document.querySelector('.boxColor');
function backgroundBox() {
  var vermelho = rangeRed();
  var verde = rangeGreen();
  var azul = rangeBlue();
  const rgbColor = `rgb(${vermelho + ',' + verde + ',' + azul})`;
  box.style.backgroundColor = rgbColor;
  console.log(rgbColor);
}
document.addEventListener('change', backgroundBox);
backgroundBox();
