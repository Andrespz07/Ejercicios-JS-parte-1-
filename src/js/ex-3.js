// let input = document.getElementById("inputNombre")
// console.log(input);
const input = document.querySelector('input');
const log = document.getElementById('salidaNombre');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = `Hola!` + " " + e.target.value + `.`;
}