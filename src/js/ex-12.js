const button = document.getElementById("buttonDivXcual");

button.onclick = function result() {

  let numero = prompt("Introduce un número");
  let divisible = false;

  if (numero % 2 == 0) {
    divisible = true;
    document.getElementById("NumDivXcual").innerHTML =
      "El número " + numero + " es divisible por 2";
  }
  
  if (numero % 3 == 0) {
    divisible = true;
    document.getElementById("NumDivXcual").innerHTML =
      "El número " + numero + " es divisible por 3";
  }

  if (numero % 5 == 0) {
    divisible = true;
    document.getElementById("NumDivXcual").innerHTML =
      "El número " + numero + " es divisible por 5";
  }

  if (numero % 7 == 0) {
    divisible = true;
    document.getElementById("NumDivXcual").innerHTML =
      "El número " + numero + " es divisible por 7";
  }

  if (divisible == false) {
    document.getElementById("NumDivXcual").innerHTML =
      "El número " + numero + " no es divisible por 2, 3, 5 o 7";
  }

}
