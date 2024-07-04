// b- Hacer una página web con código javascript que inicialice una variable array 
// con los valores de cada uno sus datos personales. Y luego las imprima en el 
// formato del Ejercicio 1.

var datosPersonales = ["Katherine","Contreras","De Novia <3",20,"13/04/2004","96050823"];
var datos =["nombre","apellido","estadoCivil","edad","fechaNacimiento","dni"];

document.write("<h1>Datos Personales:</h1>");

for (let i = 0; i < datosPersonales.length; i++) {
    document.write("<p><strong>" + datos[i] + ": </strong>" + datosPersonales[i] +"</p>");
}