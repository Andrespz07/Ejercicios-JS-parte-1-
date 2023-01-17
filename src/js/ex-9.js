const button = document.getElementById("numeroVocales");
let vocales = 0;

button.onclick = function(){

let frase = prompt("¿Cuántas vocales hay?");

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
      vocales++;
    }
  }
document.getElementById("vocalesCantidad").innerHTML = vocales;
}