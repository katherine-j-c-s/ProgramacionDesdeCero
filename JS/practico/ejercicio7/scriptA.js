var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


var ulMesesFor = document.createElement("ul")
var containerMesesFor = document.getElementById("mesesFor")

for (let i = 0; i < meses.length; i++) {
    let mes = document.createElement("li")
    mes.textContent = meses[i]
    ulMesesFor.appendChild(mes)
}

containerMesesFor.appendChild(ulMesesFor)


var ulMesesWhile = document.createElement("ul")
var containermesesWhile = document.getElementById("mesesWhile")
var cant = 0

while (cant < 12){
    let mes = document.createElement("li")
    mes.textContent = meses[cant]
    ulMesesWhile.appendChild(mes)
    cant++
}
containermesesWhile.appendChild(ulMesesWhile)

var ulMesesDoWhile = document.createElement("ul")
var containermesesDoWhile = document.getElementById("mesesDoWhile")
var cant = 0

do {
    let mes = document.createElement("li")
    mes.textContent = meses[cant]
    ulMesesDoWhile.appendChild(mes)
    cant++
} while (cant < 12)

containermesesDoWhile.appendChild(ulMesesDoWhile)

var ulMesesForIn = document.createElement("ul")
var containermesesForIn = document.getElementById("mesesForIn")

for (mes in meses) {
    let mess = document.createElement("li")
    mess.textContent = meses[mes]
    ulMesesForIn.appendChild(mess)
}

containermesesForIn.appendChild(ulMesesForIn)