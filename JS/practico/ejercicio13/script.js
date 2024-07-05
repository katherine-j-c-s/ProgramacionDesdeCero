var reguistros = [["Nombre","Direccion","Ciudad","Telefono"]]
var tablaReguistros = document.getElementById("reguistros")

function nuevoReguistro(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre")
    let direccion = document.getElementById("direccion")
    let ciudad = document.getElementById("ciudad")
    let telefono = document.getElementById("telefono")

    let nuevoReguistro = [nombre.value,direccion.value,ciudad.value,telefono.value]
    reguistros.push(nuevoReguistro)
    mostrarReguistros()
    //limpiamos los inputs
    nombre.value = ""
    direccion.value = ""
    ciudad.value = ""
    telefono.value = ""
}

function mostrarReguistros() {
    //limpiamos la tabla 
    tablaReguistros.innerHTML = "";
    tablaReguistros.border = "1"
    //recorremos los reguistros y por cada dato creamos una fila
    
    for (let i = 0; i < reguistros.length; i++) {
        let fila = document.createElement("tr")
        
        reguistros[i].forEach(dato => {
            console.log(dato);
            if (i == 0) {
                let header = document.createElement("th")
                header.textContent = dato
                fila.appendChild(header)
            }else{
                let datoFila = document.createElement("td")
                datoFila.textContent = dato
                fila.appendChild(datoFila)
            }
        });

        tablaReguistros.appendChild(fila)
    }
}
