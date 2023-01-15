let NumUser1 = parseInt(prompt(`Escribe un número entero`));
let NumUser2 = parseInt(prompt(`Escribe otro número entero`));
let resultado = NumUser1 + NumUser2;
document.getElementById("ejercicio4").innerHTML = `La suma de` + ' ' + NumUser1 + ' ' + `con ` + NumUser2 + ` es ` + (NumUser1 + NumUser2);