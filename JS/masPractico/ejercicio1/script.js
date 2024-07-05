function validarCampos(event) {

    event.preventDefault();
    let valido = true

    //traemos los valos de cada elemento
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let direccion = document.getElementById("direccion")
    let correo = document.getElementById("CorreoElectronico")
    let comentario = document.getElementById("comentario")

    //traemos los textos que avisan para que llenen los campos
    let nombreVacio = document.getElementById("vacioNombre")
    let apellidoVacio = document.getElementById("vacioApellido")
    let direccionVacio = document.getElementById("vacioDireccion")
    let correoVacio = document.getElementById("vacioCorreo")
    let comentarioVacio = document.getElementById("vacioComent")

    //quitamos los textos de aviso que ya se encontraban 
    nombreVacio.textContent= ""
    apellidoVacio.textContent= ""
    direccionVacio.textContent= ""
    correoVacio.textContent= ""
    comentarioVacio.textContent= ""

    //quitamos los errores que ya tenia para volver a validar
    nombre.classList.remove("error")
    nombre.classList.add("box")

    apellido.classList.remove("error")
    apellido.classList.add("box")

    direccion.classList.remove("error")
    direccion.classList.add("box")

    correo.classList.remove("error")
    correo.classList.add("box")

    comentario.classList.remove("error")
    comentario.classList.add("box")

    //validamos nombre
    if (!validarSinNumeros(nombre.value)) {
        nombre.classList.remove("box")
        nombre.classList.add("error")
        valido = false
    }
    if (nombre.value == "") {
        nombreVacio.textContent = "debe de agregar el nombre"
        nombreVacio.style.color = "red"
        nombre.classList.remove("box")
        nombre.classList.add("error")
        valido = false
    }
    //validamos apellido
    if (!validarSinNumeros(apellido.value)) {
        apellido.classList.remove("box")
        apellido.classList.add("error")
        valido = false
    }
    if (apellido.value == "") {
        apellidoVacio.textContent = "debe de agregar el apellido"
        apellidoVacio.style.color = "red"
        apellido.classList.remove("box")
        apellido.classList.add("error")
        valido = false
    }
    //validamos direccion
    if (direccion.value == "") {
        direccionVacio.textContent = "debe de agregar la direccion"
        direccionVacio.style.color = "red"
        direccion.classList.remove("box")
        direccion.classList.add("error")
        valido = false
    }
    //validamos correo
    if (!validarCorreoElectronico(correo.value)) {
        if (correo.value == "") {
            correoVacio.textContent = "debe de agregar el correo electronico"
            correoVacio.style.color = "red"
        }
        correo.classList.remove("box")
        correo.classList.add("error")
        valido = false
    }
    //validamos comentario
    if (comentario.value == "") {
        comentarioVacio.textContent = "debe de agregar el comentario"
        comentarioVacio.style.color = "red"
        comentario.classList.remove("box")
        comentario.classList.add("error")
        valido = false
    }


    if (valido) {
        let datos = [nombre.value,apellido.value,direccion.value,correo.value,comentario.value]
        alert("contacto agregado")
        mostrarDatos(datos)
        nombre.value= ""
        apellido.value= ""
        direccion.value= ""
        correo.value= ""
        comentario.value= ""
    }
}

function mostrarDatos(datos) {
    let tipoDato = ["Nombre","Apellido","Direccion","Correo Electronico","Comentario"]
    let container = document.getElementById("contactaValidado")
    for (let i = 0; i < datos.length; i++) {
        let dato = document.createElement("p")
        dato.textContent = `${tipoDato[i]} : ${datos[i]}`
        container.appendChild(dato)
    }
}

function validarSinNumeros(texto) {
    // Expresión regular que verifica si hay al menos un dígito del 0 al 9 en el texto
    let regex = /\d/;

    // Verificar si la expresión regular encuentra algún dígito en el texto
    if (regex.test(texto)) {
        return false; // Hay números, la validación falla
    } else {
        return true; // No hay números, la validación es exitosa
    }
}

function validarCorreoElectronico(correo) {
    // Expresión regular para validar un correo electrónico
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo cumple con el formato esperado
    if (regex.test(correo)) {
        return true; // El correo es válido
    } else {
        return false; // El correo no es válido
    }
}