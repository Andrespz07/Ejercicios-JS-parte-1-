const button = document.getElementById("buttonVocales");
let vocales = "aeiou";
let vocalesMayus = "AEIOU";
let vocalesEnFrase = "";

button.onclick = function(){

let frase = prompt("¿Cuáles vocales hay?");

for (let i = 0; i < frase.length; i++) {
  if (vocales.indexOf(frase[i]) != -1)  {
    vocalesEnFrase += frase[i];
  }
  else if (vocalesMayus.indexOf(frase[i]) != -1) {
    vocalesEnFrase += frase[i];
  }

}
document.getElementById("vocalesresultado").innerHTML = vocalesEnFrase;
}