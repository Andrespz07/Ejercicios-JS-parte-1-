const button = document.getElementById("buttonFrase")

button.onclick = function() {
let frase = prompt("Escribe una frase");
let contador = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] == "a" || frase[i] == "A" ) {
    contador++;
  }
}
document.getElementById("ejercicio7").innerHTML = "La letra a aparece " + contador + " veces";
}