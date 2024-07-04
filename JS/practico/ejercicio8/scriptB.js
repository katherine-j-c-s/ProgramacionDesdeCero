
let container = document.getElementById("Provincias")

var datosProvincias = [
    {
        provincia: "Neuquén",
        ciudades: ["Neuquén","Zapala","San Martin","Junin"],
        activa: false
    },{
        provincia: "Rio Negro",
        ciudades: ["Cipolletti","Fernandez Oro","Roca","Cinco Saltos","Allen"],
        activa: false
    },{
        provincia: "Buenos Aires",
        ciudades: ["La Plata","Mar del Plata","Necochea"],
        activa: false
    },
]

for (let i = 0; i < datosProvincias.length; i++) {
    let provincia = document.createElement("li")
    provincia.textContent = datosProvincias[i].provincia
    provincia.style.cursor = "pointer"
    provincia.style.margin = "20px 10px"
    provincia.style.textDecoration = "underline"
    provincia.addEventListener("click", () => {
        let containerCiudades = document.createElement("ul")
        if (datosProvincias[i].activa) {
            datosProvincias[i].activa = false
            provincia.textContent = datosProvincias[i].provincia
            provincia.style.textDecoration = "underline"
        }else{
            datosProvincias[i].activa = true
            provincia.style.textDecoration = "none"
            for (let index = 0; index < datosProvincias[i].ciudades.length; index++) {
                let ciudad = document.createElement("li")
                ciudad.textContent= datosProvincias[i].ciudades[index]
                ciudad.style.margin = "20px 0px"
                containerCiudades.appendChild(ciudad)
            }
            provincia.textContent+= " - "
            provincia.appendChild(containerCiudades)
        }
    })
    container.appendChild(provincia)
}
