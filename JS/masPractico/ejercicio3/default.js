function dentroRango(valor){
    let resultado = false
    let num = Number(valor)
    console.log(num);
    if (num > 0 && num < 400) {
        resultado = true
    }
    
    return resultado
}