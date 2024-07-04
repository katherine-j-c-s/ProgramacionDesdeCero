function calcular(x) {
    return 3 * x + 5 - x ** 2
}

var cadena = ""

for (let index = 0; index < 100; index++) {
    let result = calcular(Number(index))
    cadena += " " + result + " "
}

document.write("<p>" + cadena + "</p>")