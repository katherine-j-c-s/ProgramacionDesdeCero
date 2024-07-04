// a- Hacer una página web con código javascript que inicialice una variable por cada 
// uno sus datos personales. Y luego las muestre en la página en el formato del 
// Ejercicio 1.

var nombre = "Katherine";
var apellido = "Contreras";
var estadoCivil = "De Novia <3";
var edad = 20;
var fechaNacimiento = "13/04/2004";
var dni = "96050823";

document.write("<h1>Datos Personales:</h1>");
document.write("<p><strong>Nombre: </strong>" + nombre +"</p>");
document.write("<p><strong>Apellido: </strong>" + apellido +"</p>");
document.write("<p><strong>Estado Civil: </strong>" + estadoCivil +"</p>");
document.write("<p><strong>Edad: </strong>" + edad +"</p>");
document.write("<p><strong>Fecha Nacimiento: </strong>" + fechaNacimiento +"</p>");
document.write("<p><strong>DNI: </strong>" + dni +"</p>");