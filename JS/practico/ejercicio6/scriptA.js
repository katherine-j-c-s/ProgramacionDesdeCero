function login() {
    let contraseñaAprobada = "minombre";
    let contraseña = document.getElementById("contraseña");
    let usuario = document.getElementById("usuario");
    if (contraseña.value !== contraseñaAprobada) {
        alert("contraseña incorrecta")
        contraseña.value= ""
        usuario.value= ""
    }else{
        mostrarDatos()
    }
}
function mostrarDatos() {
    // Definición de variables con tus datos personales
    var nombre = "Juan";
    var apellido = "Pérez";
    var estadoCivil = "Soltero";
    var edad = 30;
    var fechaNacimiento = "01/01/1994";
    var dni = "12345678A";

    // Escribir los datos en la página web utilizando document.write()
    document.write("<h1>Datos Personales</h1>");
    document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
    document.write("<p><strong>Apellido:</strong> " + apellido + "</p>");
    document.write("<p><strong>Estado Civil:</strong> " + estadoCivil + "</p>");
    document.write("<p><strong>Edad:</strong> " + edad + "</p>");
    document.write("<p><strong>Fecha de Nacimiento:</strong> " + fechaNacimiento + "</p>");
    document.write("<p><strong>DNI:</strong> " + dni + "</p>");

}