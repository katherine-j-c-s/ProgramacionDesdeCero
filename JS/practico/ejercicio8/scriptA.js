var colores = ["Blanco","Negro","Azul","Rojo","Amarillo"]
var colorCss = ["white","black","blue","Red","yellow"]
var contenedor = document.getElementById("colores")

for (let i = 0; i < colores.length; i++) {
    let color = document.createElement("li")
    color.textContent = colores[i]
    color.style.transition = "ease-in-out 0.2s";
    color.addEventListener("mouseover", () => {
        color.style.color = colorCss[i]
    }) 
    color.addEventListener("mouseout", () => {
        color.style.color = "black"
    }) 
    contenedor.appendChild(color)
}