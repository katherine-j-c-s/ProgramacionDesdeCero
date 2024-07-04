//  b- Hacer una página web con código javascript que le pida al usuario dos números 
//  y muestre en pantalla el resultado de la suma, resta, multiplicación y división
function calculos() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let suma = Number(num1) + Number(num2);
    let resta = num1 - num2;
    let mult = num1 * num2;
    let divs = num1 / num2;

    document.write("<h1>los resultados del numero1 = " + num1 + " y el numero2 = " + num2 + " son:</h1><br/>");
    document.write("<p><strong>suma = </strong>"+ suma +"</p><br>");
    document.write("<p><strong>resta = </strong>"+ resta +"</p><br>");
    document.write("<p><strong>multiplicacion = </strong>"+ mult +"</p><br>");
    document.write("<p><strong>division = </strong>"+ divs +"</p><br>");
}