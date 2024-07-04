
function mostrarEstilos(){
    var texto = document.getElementById("texto")
    var container = document.getElementById("resultados")

    //Mayúscula.
    let textoMayuscula = document.createElement("p")
    textoMayuscula.textContent = texto.value
    textoMayuscula.style.textTransform = "uppercase"
    container.appendChild(textoMayuscula)

    //Minúscula.
    let textoMinúscula = document.createElement("p")
    textoMinúscula.textContent = texto.value
    textoMinúscula.style.textTransform = "lowercase"
    container.appendChild(textoMinúscula)

    //Solo el sub-mensaje que comienza el la posición 5 y de largo 10
    let subMensaje = document.createElement("p")
    let mensaje = texto.value
    subMensaje.textContent = mensaje.substring(5,15)
    container.appendChild(subMensaje)

    //Si la palabra hola está incluida dentro del mensaje escribir por pantalla “hola que tal”
    let palabraIncluida = document.createElement("p")
    palabraIncluida.textContent = texto.value
    if (palabraIncluida.textContent.includes("hola")) {
        palabraIncluida.textContent = "hola que tal"
    }else{
        palabraIncluida.textContent = "La palabra 'hola' no está incluida en el mensaje."
    }
    container.appendChild(palabraIncluida)

    //El mismo mensaje pero sin espacios en blanco. Y eliminado la palabra hola.
    let mesajeSinHolaNiEspacios = document.createElement("p")
    mesajeSinHolaNiEspacios.textContent = eliminarPalabraYEspacios(texto.value)
    container.appendChild(mesajeSinHolaNiEspacios)

}

function eliminarPalabraYEspacios(mensaje) {
    let palabras = mensaje.split(" ")
    let mensajeFinal = ""

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] !== "hola") {
            mensajeFinal+= palabras[i]
        }
    }

    return mensajeFinal;
}
