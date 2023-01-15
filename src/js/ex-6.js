let button = document.getElementById("buttonEj6");


button.onclick = function() {

let num1 = prompt("Introduce el primer número");
let num2 = prompt("Introduce el segundo número");
let num3 = prompt("Introduce el tercer número");

if (num1 > num2 && num1 > num3) {
  document.getElementById("ejercicio6").innerHTML = "El número mayor es " + num1;
} else if (num2 > num1 && num2 > num3) {
  document.getElementById("ejercicio6").innerHTML = "El número mayor es " + num2;
} else if (num3 > num1 && num3 > num2) {
    document.getElementById("ejercicio6").innerHTML = "El número mayor es " + num3;
} else {
  document.getElementById("ejercicio6").innerHTML = "Los números son iguales";
}}