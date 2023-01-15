let button = document.getElementById("buttonEj5");


button.onclick = function() {

let num1 = prompt("Introduce el primer número");
let num2 = prompt("Introduce el segundo número");

if (num1 > num2) {
  document.getElementById("ejercicio5").innerHTML = "El número mayor es " + num1;
} else if (num1 < num2) {
  document.getElementById("ejercicio5").innerHTML = "El número mayor es " + num2;
} else {
  document.getElementById("ejercicio5").innerHTML = "Los números son iguales";
}}
