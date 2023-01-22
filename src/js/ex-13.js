const button = document.getElementById("divisoresButton");

button.onclick = function result() {
  let numero = prompt("Introduce un número");
  let divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      divisores.push(i);
    }
  }
  let divisoresString = divisores.join(", ");
  let divisoresDiv = document.getElementById("PrintDivisores");
  divisoresDiv.innerHTML = divisoresString;
  document.body.appendChild(divisoresDiv);
};
