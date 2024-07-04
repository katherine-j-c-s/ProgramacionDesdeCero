function convertir(){
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
    var resultado = 0 ;
    switch (origen) {
        case 'pesos':
            switch (destino) {
                case 'dolares':
                    resultado = cantidad / 20; // Cambiar el valor según el tipo de cambio actual
                    break;
                case 'reales':
                    resultado = cantidad / 4; // Cambiar el valor según el tipo de cambio actual
                    break;
                case 'euros':
                    resultado = cantidad / 22; // Cambiar el valor según el tipo de cambio actual
                    break;
                default:
                    resultado = cantidad;
            }
            break;
        
        case 'dolares':
            switch (destino) {
                case 'pesos':
                    resultado = cantidad * 20; // Cambiar el valor según el tipo de cambio actual
                    break;
                default:
                    resultado = cantidad;
            }
            break;
        
        case 'reales':
            switch (destino) {
                case 'pesos':
                    resultado = cantidad * 4; // Cambiar el valor según el tipo de cambio actual
                    break;
                default:
                    resultado = cantidad;
            }
            break;
        
        case 'euros':
            switch (destino) {
                case 'pesos':
                    resultado = cantidad * 22; // Cambiar el valor según el tipo de cambio actual
                    break;
                default:
                    resultado = cantidad;
            }
            break;
        
        default:
            resultado = cantidad;
    }
    let contenedor = document.getElementById("resultado");
    let elemtentoResultado = document.createElement("p");
    elemtentoResultado.textContent = resultado;
    contenedor.appendChild(elemtentoResultado)
}