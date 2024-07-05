function oponentes(P){
    var paises1=["Argentina","Bolivia","Brasil","Venezuela"]; 
    var paises2=["Colombia","CostaRica","Paraguay","Ecuador"];  

    let posicion = null

    for (let i = 0; i < paises1.length; i++) {
        if (paises1[i] == P) {
            posicion = i
        }        
    }

    return paises2[posicion]
}