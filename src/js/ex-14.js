const button = document.getElementById("divisores2Button");

button.onclick = function() {
    let numeroUno = prompt ("Introduce un número");
    let numeroDos = prompt ("Introduce otro número");    
        let divisores = [];
        for (let i = 1; i <= numeroUno; i++) {
          if (numeroUno % i === 0 && numeroDos % i === 0) {
            divisores.push(i);
          }
        }
        document.getElementById("PrintDivisores2").innerHTML = divisores;
      };

