
document.addEventListener("DOMContentLoaded",()=>{
    var datosTabla = [
        ["Nombre","Apellido","CorreoELecctronico"],
        ["Nombre1", "Apellido1", "correo1@example.com"],
        ["Nombre2", "Apellido2", "correo2@example.com"],
        ["Nombre3", "Apellido3", "correo3@example.com"],
        ["Nombre4", "Apellido4", "correo4@example.com"],
        ["Nombre5", "Apellido5", "correo5@example.com"],
        ["Nombre6", "Apellido6", "correo6@example.com"],
        ["Nombre7", "Apellido7", "correo7@example.com"],
        ["Nombre8", "Apellido8", "correo8@example.com"],
        ["Nombre9", "Apellido9", "correo9@example.com"],
        ["Nombre10", "Apellido10", "correo10@example.com"],
        ["Nombre11", "Apellido11", "correo11@example.com"],
        ["Nombre12", "Apellido12", "correo12@example.com"],
        ["Nombre13", "Apellido13", "correo13@example.com"],
        ["Nombre14", "Apellido14", "correo14@example.com"],
        ["Nombre15", "Apellido15", "correo15@example.com"],
        ["Nombre16", "Apellido16", "correo16@example.com"],
        ["Nombre17", "Apellido17", "correo17@example.com"],
        ["Nombre18", "Apellido18", "correo18@example.com"],
        ["Nombre19", "Apellido19", "correo19@example.com"],
        ["Nombre20", "Apellido20", "correo20@example.com"],
        ["Nombre21", "Apellido21", "correo21@example.com"],
        ["Nombre22", "Apellido22", "correo22@example.com"],
        ["Nombre23", "Apellido23", "correo23@example.com"],
        ["Nombre24", "Apellido24", "correo24@example.com"],
        ["Nombre25", "Apellido25", "correo25@example.com"]
    ]
    let tabla = document.getElementById("tabla")
    for (let i = 0; i < datosTabla.length; i++) {
        let fila = document.createElement("tr")
        fila.id = i
        for (let index = 0; index < datosTabla[i].length; index++) {
            if (i==0) {
                let header = document.createElement("th")
                header.id = index
                header.textContent = datosTabla[i][index]
                fila.appendChild(header)
            }else{
                let dato = document.createElement("td")
                dato.id = index
                dato.textContent = datosTabla[i][index]
                fila.appendChild(dato)
            }
        }
        tabla.appendChild(fila)
    }
})

function pintarCelda(event) {
    event.preventDefault()

    let tabla = document.getElementById("tabla")
    let filas = tabla.childNodes

    let color = document.getElementById("color").value
    let num = document.getElementById("numero")
    
    let error = document.getElementById("error")
    error.textContent = ""

    if (Number(num.value) <= 0) {
        error.textContent = "el numero debe ser mayor a cero"
        error.style.color = "red"
        error.style.backgroundColor 
    }

    let filaSeleccionada = filas[Number(num.value)]
    filaSeleccionada.style.backgroundColor = color
    
    let numero = parseInt(num.value)

    for (var i = 1; i < tabla.rows.length; i++) {
        if (i % numero === 0) {
            tabla.rows[i].style.backgroundColor = color;
        } else {
            tabla.rows[i].style.backgroundColor = ""; // Restablecer color original
        }
    }
}
