const frutas = ["🍇", "🍊", "🍎", "🍌",  "🍌", "🍌",  "🍌", "🍌",  "🍌", "🍌",  "🍌"]

// Concatenar arrays
// contact
const verduras = ["🥬", "💚"]

const tienda = frutas.concat(verduras)
console.log(tienda)
console.log(tienda.concat(3, 4, 5))

// con el spread op
const tiendaSpread = [...frutas, ...verduras, ...tienda, "☀"]
console.log(tiendaSpread)

// arreglos y strings
// split() // metodo de String
// csv
const stringFrutas = "🍇 🍊 🍎 🍌"
console.log(typeof stringFrutas)
const splitFrutas = stringFrutas.split(" ")
console.log(splitFrutas)

const correo = "cchavezmx@gmail.com"
const nombre = correo.split("@")
console.log(nombre.pop())
// tema = destructuracion de arreglos

// reverse // solo le da la vuelta
// console.log(frutas.reverse())
// reverse muta el arreglo original 

// iterar arreglos
// 
// ciclo for
// let matchElement = -1
// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
//     if (frutas[i] === '🍎🍎') {
//         console.log("aqui esta la naraja")
//         // parar la iteracion
//         matchElement = i
//         break
//     }
// }
// console.log(matchElement)

let matchElement = ""
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
    if (frutas[i] === '🍎🍎') {
        console.log("aqui esta la naraja")
        // parar la iteracion
        matchElement = i
        break
    }
    matchElement = -1    
}

console.log(matchElement)

//metodo indexOf
// funciones // programacion funcional 
// encapsular un algoritmo para que sea re-usable
// 
// function | arrow function
// 1 sintaxis
// objeto this

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