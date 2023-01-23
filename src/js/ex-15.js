const button = document.getElementById("buttonPrimo");

button.onclick = function esPrimo() {
    let numero = prompt("Introduce un número")

    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
    if(numero % i === 0){
        numero = false;
       document.getElementById("numeroPrimo").innerHTML = numero; 
    }
    if(numero > 1){
        numero = true;
        document.getElementById("numeroPrimo").innerHTML = numero
    }

}  