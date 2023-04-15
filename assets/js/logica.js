
function ordenarNumeros() {
    let lista = [23, 45, 78, 32, 12, 1, 4, 8, 34, 32, 1000, 34, 37, 22, 0, -4, -6]
    console.log(lista)
    for (let index = 0; index < lista.length; index++) {
        for (let index2 = 0; index2 < lista.length; index2++) {
            if (lista[index] < lista[index2]) {
                let aux = lista[index]
                lista[index] = lista[index2]
                lista[index2] = aux
            }
        }
        console.log(lista)
    }
}

ordenarNumeros()