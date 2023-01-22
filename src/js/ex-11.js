const button = document.getElementById("buttonDivisible");

button.onclick = function result(num){
    let numUsuario = prompt("Introduce un número")
    
  let operation = (numUsuario % 2 === 0) || (numUsuario % 3 === 0) ||  (numUsuario % 5 === 0) || (numUsuario % 7 === 0) == true;


  
  document.getElementById("NumDivisible").innerHTML = operation

}