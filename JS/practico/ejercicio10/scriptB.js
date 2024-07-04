function calcularEdad() {
    
    let fechaNacimiento = document.getElementById("añoNacimiento")
    let year = new Date().getFullYear()
    
    let edad =Number(year) - Number(fechaNacimiento.value) 
    
    let container = document.getElementById("edad")
    let contEdad = document.createElement("p")
    contEdad.textContent = "tienes " + edad + " años"
    container.appendChild(contEdad)
}