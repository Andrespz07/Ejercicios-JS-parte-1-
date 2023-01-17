const button = document.getElementById("repeVocales");

button.onclick = function(){
    let frase = prompt("Introduce una frase");
    if (typeof frase){
        
            let vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
            let contadorVocales = 0;
        
            for(let i = 0; i < frase.length; ++i) {
                if (vocales.indexOf(frase[i]) !== -1) {
                   ++contadorVocales;
                
           
  document.getElementById("vocalesRepetidas").innerHTML = "La vocal " + vocales[i] + " aparece " + contadorVocales[i] + " veces";
}}}}

