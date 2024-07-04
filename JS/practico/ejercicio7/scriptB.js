document.write("<h2>numeros menores a 500</h2>")
var cadena = ""
var num = 0

while( num < 500){
    cadena+= " " + num + "";
    num+=2
}

document.write("<p>" + cadena + "</p>")