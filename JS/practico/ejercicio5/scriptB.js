// suma(X,Y), resta(X,Y), división(X,Y), multiplicación(X,Y), potencia(X,Y), 
// cuadrado(X).
function calculo(tipoCalculo) {
    let resultadoBox = document.getElementById("resultado");
    resultadoBox.innerHTML = ""; // Limpiamos el contenido existente
    switch(tipoCalculo){
        case "suma":
            agregarHTML(tipoCalculo,suma);
        break;
        case "resta":
            agregarHTML(tipoCalculo,resta);
        break;
        case "division":
            agregarHTML(tipoCalculo,division);
        break;
        case "multiplicacion":
            agregarHTML(tipoCalculo,multiplicacion);
        break;
        case "potencia":
            agregarHTML(tipoCalculo,potencia);
        break;
        case "cuadrado":
            agregarHTML(tipoCalculo,cuadrado);
        break;
    }
}

function agregarHTML(tipoCalculo,metodo){
    //toda las funciones excepto cuadrado piden dos datos
    //aqui verificamos si es cuadrado para solo pedir un dato en ves de dos
    let cantidad = 2;
    let id = 1;
    if (tipoCalculo == "cuadrado") {
        cantidad = 1;
    }

    //creamos el titulo
    let title = document.getElementById("title");
    title.innerHTML = ""; // Limpiamos el contenido existente
    title.textContent = "Sacaremos la " + tipoCalculo + " de:";

    //seleccionamos el form donde se pediran los datos
    let formCalculo = document.getElementById("ingreseDatos")
    formCalculo.innerHTML = ""; // Limpiamos el contenido existente

     // Creamos los inputs dinámicamente
     for (let i = 1; i <= cantidad; i++) {
        // Creamos y agregamos un label
        let label = document.createElement("label");
        label.textContent = "Ingrese el número " + i + ": ";
        formCalculo.appendChild(label);

        // Creamos y agregamos el input
        let input = document.createElement("input");
        input.id = "num" + i;
        input.type = "text";
        formCalculo.appendChild(input);

        // Agregamos un salto de línea
        formCalculo.appendChild(document.createElement("br"));
    }

    // Creamos y agregamos el botón de resultado
    let btn = document.createElement("button");
    btn.textContent = "Calcular";
    btn.id = "btn";
    btn.type = "button";
    btn.addEventListener("click", function() {
        let resultado;
        if (tipoCalculo === "cuadrado") {
            let x = parseInt(document.getElementById("num1").value);
            resultado = metodo(x);
        } else {
            let x = parseInt(document.getElementById("num1").value);
            let y = parseInt(document.getElementById("num2").value);
            resultado = metodo(x, y);
        }
        // Mostramos el resultado
        mostrarResultado(resultado);
    });
    
    formCalculo.appendChild(btn);
}
// Función para mostrar el resultado
function mostrarResultado(resultado) {
    let resultadoBox = document.getElementById("resultado");
    resultadoBox.innerHTML = ""; // Limpiamos el contenido existente
    let textarea = document.createElement("textarea");
    textarea.textContent = "El resultado es: " + resultado;
    resultadoBox.appendChild(textarea);
}