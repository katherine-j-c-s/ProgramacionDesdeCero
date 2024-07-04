
// a- Desarrollar una librería javascript EjJavaScript005.js con las funciones de 
// suma(X,Y), resta(X,Y), división(X,Y), multiplicación(X,Y), potencia(X,Y), 
// cuadrado(X).

function suma(x,y) {
    //solo con la suma lo pasamos a numerico porque sino haria una cadena de string
    return Number(x) + Number(y);
}

function resta(x,y) {
    return x - y;
}

function division(x,y) {
    return x / y;
}

function multiplicacion(x,y) {
    return x * y;
}

function potencia(x,y) {

    let resultado = 1;

    if (y > 0) {
        // Calcular la potencia
        for (var i = 0; i < Math.abs(y); i++) {
            resultado *= x;
        }
    }
    
    // Si la potencia es negativa, devolver el inverso del resultado
    if (y < 0) {
        resultado = 1 / resultado;
    }

    // Devolver el resultado
    return resultado;
}

function cuadrado(x) {
    return x * x;
}
