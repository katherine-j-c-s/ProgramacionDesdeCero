function valorSleccionado(valor){
    let result = -1
    switch (valor) {
        case valor >= 0 && valor < 10:
            result = 0
            break;
        case valor >= 10 && valor < 50:
            result = 1
            break;
        case valor >= 50 && valor < 100:
            result = 2
            break;
        case valor >= 100:
            result = 3
            break;
        default:
            break;
    }
    return result
}