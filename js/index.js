/* ********** ********** ********** ********** ********** ********** ********** */
// SCRIPT "DIVISORES Y NÚMEROS PRIMOS"
/* ********** ********** ********** ********** ********** ********** ********** */

const numeroQueSeRevisa = document.querySelector("input[type='number']");
const mostrarDivisores = document.querySelector("#mostrar-divisores");
const numeroPrimo = document.querySelector("#numero-primo");
const misDivisores = document.querySelector("#mis-divisores");
const soyPrimo = document.querySelector("#soy-primo");

const buscarDivisores = document.querySelector("#buscar-divisores");
const resetearCampos = document.querySelector(".resetear-campos");

const divisores = () => {    
    let divisor = [];
    if(numeroQueSeRevisa.value === "") {
        misDivisores.textContent = "";
        mostrarDivisores.textContent = "";
        return "";
    }
    else if(Number(numeroQueSeRevisa.value) !== parseInt(numeroQueSeRevisa.value) 
        || Number(numeroQueSeRevisa.value) < 2) {
        misDivisores.textContent = "";
        mostrarDivisores.style.color = "red";
        mostrarDivisores.textContent = "Escribe un número natural mayor que 1";
    }
    else if (Number(numeroQueSeRevisa.value) === parseInt(numeroQueSeRevisa.value)) {            
        for (let i = 1; i <= numeroQueSeRevisa.value; i++) {            
            if (numeroQueSeRevisa.value % i === 0) {
                divisor.push(i);                
            }                      
        }
        misDivisores.style.color = "blue";
        misDivisores.style.fontWeight = "bold";
        misDivisores.textContent = " " + numeroQueSeRevisa.value;
        mostrarDivisores.style.color = "black";
        mostrarDivisores.textContent = divisor.join(" - ");
    }
} 
buscarDivisores.addEventListener("click", divisores);

const primo = () => {
    if(numeroQueSeRevisa.value === "" || Number(numeroQueSeRevisa.value) < 2 
        || Number(numeroQueSeRevisa.value) !== parseInt(numeroQueSeRevisa.value)) {
        soyPrimo.textContent = "";
        numeroPrimo.textContent= "";
        return "";
    }    
    else if (Number(numeroQueSeRevisa.value) === parseInt(numeroQueSeRevisa.value)) {        
        for (let i = 2; i <= Math.sqrt(numeroQueSeRevisa.value); i++) {
            if (numeroQueSeRevisa.value % i === 0) {
                soyPrimo.style.color = "blue";
                soyPrimo.style.fontWeight = "bold";
                soyPrimo.textContent = " " + numeroQueSeRevisa.value;
                numeroPrimo.style.color = "blue";
                return numeroPrimo.textContent = "NO ES NÚMERO PRIMO";
            }            
        }
        soyPrimo.style.color = "blue";
        soyPrimo.style.fontWeight = "bold";
        soyPrimo.textContent = " " + numeroQueSeRevisa.value;
        numeroPrimo.style.color = "red";
        return numeroPrimo.textContent = "SI ES NÚMERO PRIMO";
    }
} 
buscarDivisores.addEventListener("click", primo);

resetearCampos.addEventListener("click", function () {
    misDivisores.textContent = "";
    soyPrimo.textContent = "";
    numeroQueSeRevisa.value = "";    
    mostrarDivisores.textContent = "";
    numeroPrimo.textContent= "";
});

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */