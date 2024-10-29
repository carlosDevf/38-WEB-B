
function suma () {
    // scope 
    const sum = 1 + 2
    // solo sirve para programar || debugear el codigo
    console.log("dentro de la funcion")
    // siempre usar return
    return sum
}

// alcance de una funcion
// ambito local
// scope global 
// scope local 
// con el parentesis llamo o ejecuto la funcion
console.log(suma())
console.log()

// ATRIBUTOS DE UNA FUNCION
function resta (a, b){
    // estos atributos son variables que puedo 
    // usar dentro de la funcion 
    // dentro del Ambito de la funcion resta
    const result = a - b
    return result
}

// el Orden de los factores (Atributos)
// si altera el producto
console.log(resta(700, 282))

function saludo(nombre, dia){
    // template string alt + 096 
    return `Buen ${dia} ${nombre}`
    // return "buen " + dia + " " + nombre
}

console.log(saludo("Carlos", "noches"))
