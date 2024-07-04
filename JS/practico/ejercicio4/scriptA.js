function generarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var estadoCivil = document.getElementById("estadoCivil").value;
    var edad = document.getElementById("edad").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var dni = document.getElementById("dni").value;

    var datosPersonales = [nombre,apellido,estadoCivil,edad,fechaNacimiento,dni];
    var datos =["nombre","apellido","estadoCivil","edad","fechaNacimiento","dni"];

    document.write("<h1>Datos Personales:</h1>");

    for (let i = 0; i < datosPersonales.length; i++) {
        document.write("<p><strong>" + datos[i] + ": </strong>" + datosPersonales[i] +"</p>");
    }
    setTimeout(() => {
        alert("Sus datos han sido impresos.");
    }, 1000);
}