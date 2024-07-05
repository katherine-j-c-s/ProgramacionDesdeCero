function mostrarChat(){
    let nombre = document.getElementById("nombre")
    let post = document.getElementById("post")

    let postContainer = document.getElementById("postContainer")
    let newPost = document.createElement("div")
    
    let fechaActual = new Date()

    let dia = fechaActual.getDate()
    let mes = fechaActual.getMonth()
    let year = fechaActual.getFullYear()

    let formatoFecha = `${dia}/${mes}/${year}`

    let hora = fechaActual.getHours()
    let min = fechaActual.getMinutes()
    let seg = fechaActual.getMilliseconds()

    let formatoHorario = `${hora}:${min}:${seg}`

    let creadoPor = document.createElement("p")
    creadoPor.textContent = formatoFecha + " " + formatoHorario + " por " + nombre.value

    let textoPost = document.createElement("p")
    textoPost.textContent = post.value

    newPost.appendChild(creadoPor)
    newPost.appendChild(textoPost)

    postContainer.appendChild(newPost)

    nombre.value = ""
    post.value = ""
}
