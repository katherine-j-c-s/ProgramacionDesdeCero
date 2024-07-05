function mover(event) {
    event.preventDefault();

    let top = document.getElementById("top")
    let left = document.getElementById("left")

    let cajaRoja = document.getElementById("cadaRoja")
    cajaRoja.innerHTML = ""
    let texto = document.createElement("p")
    texto.textContent = ""

    if(dentroRango(top.value) && dentroRango(left.value)){
        texto.textContent = `Posición del div - Top: ${top.value} / Left: ${left.value}`
        cajaRoja.style.top = top.value
        cajaRoja.style.left = left.value
    }else{
        texto.textContent = `Indices fuera de rango`
    }
    cajaRoja.appendChild(texto)
}