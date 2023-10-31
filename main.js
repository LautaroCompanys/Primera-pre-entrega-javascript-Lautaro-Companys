
function sumar(numA,numB){
    numA = parseFloat (prompt("Ingresa el primer número"))
    numB = parseFloat (prompt("Ingres el segundo númuero"))

    let resultado = numA + numB
    alert ("El resultado de la suma es: " + resultado)
}

function resta(numA,numB){
    numA = parseFloat (prompt("Ingresa el primer número"))
    numB = parseFloat (prompt("Ingres el segundo númuero"))

    let resultado = numA - numB
    alert ("El resultado de la resta es: " + resultado)
}

function multiplicacion(numA,numB){
    numA = parseFloat (prompt("Ingresa el primer número"))
    numB = parseFloat (prompt("Ingres el segundo númuero"))

    let resultado = numA * numB
    alert ("El resultado de la multiplicación es: " + resultado)
}

function division(numA,numB){
    numA = parseFloat (prompt("Ingresa el primer número"))
    numB = parseFloat (prompt("Ingres el segundo númuero"))

    let resultado = numA / numB
    alert ("El resultado de la división es: " + resultado)
}


let calculadora = parseInt (prompt("Ingresa un número para relizar una operación: 1.Suma 2.Resta 3.Multiplicación 4.División"))

while (calculadora < 1 || calculadora > 4) {
    alert("La operación no es válida, por favor ingresa un número del 1 al 4.");
    calculadora = parseInt(prompt("Ingresa un número para realizar una operación: 1.Suma 2.Resta 3.Multiplicación 4.División"));
}

if(calculadora == 1){
    sumar()
}
else if(calculadora == 2){
    resta()
}
else if(calculadora == 3){
    multiplicacion()
}
else if(calculadora == 4){
    division()
}

alert("Gracias por usar la calculadora. ¡Hasta luego!")