function listar(){
    let menu = document.getElementById("menu")
    recorrer(menu)
}

function recorrer(elemento) {
    let items = elemento.childNodes

    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        if (item.tagName && item.tagName.toLowerCase() === 'li') {
            // Mostrar el contenido del item en un alert
            alert(item.textContent.trim());

            // Cambiar el color del texto a gris
            item.style.color = 'grey';
        }

        // Si el item tiene hijos, llamar recursivamente a recorrerArbol
        if (item.childNodes.length > 0) {
            recorrer(item);
        }
    }
    
}