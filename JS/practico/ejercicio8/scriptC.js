function obtenerNavegadorCliente() {
    // Obtener el agente de usuario del navegador
    let agenteUsuario = navigator.userAgent;
    
    let navegador;

    // Detectar el navegador basado en el agente de usuario
    if (agenteUsuario.indexOf("Firefox") != -1) {
        navegador = "Mozilla Firefox";
    } else if (agenteUsuario.indexOf("Chrome") != -1) {
        navegador = "Google Chrome";
    } else if (agenteUsuario.indexOf("Safari") != -1) {
        navegador = "Safari";
    } else if (agenteUsuario.indexOf("Opera") != -1 || agenteUsuario.indexOf("OPR") != -1) {
        navegador = "Opera";
    } else if (agenteUsuario.indexOf("Edge") != -1) {
        navegador = "Microsoft Edge";
    } else if (agenteUsuario.indexOf("MSIE") != -1 || agenteUsuario.indexOf("Trident") != -1) {
        navegador = "Internet Explorer";
    } else {
        navegador = "Navegador desconocido";
    }

    return navegador;
}

document.addEventListener("DOMContentLoaded",alert(obtenerNavegadorCliente()))