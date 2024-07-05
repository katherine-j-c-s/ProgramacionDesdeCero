function buscarOponente(event){
    event.preventDefault();
    
    let pais = document.getElementById("pais")
    let oponente = oponentes(pais.value)

    let container = document.getElementById("mensaje")
    container.style.backgroundColor = "pink"
    container.style.padding = "20px"
    container.style.color = "black"
    
    let texto = document.createElement("p")
    texto.textContent = `El oponente a ${pais.value} en la segunda fecha de la Copa America es: ${oponente}`
    
    container.appendChild(texto)
}