// metodos y propiedades 
      // indice   0      1     2     3
const frutas = ["🍇", "🍊", "🍎", "🍌"]
// vemos el tamaño que tiene el arreglo
console.log(frutas.length)
console.log(frutas)

//Acceso a elementos del array?
console.log(frutas[2])
// 2018 - 2022
// metodo at()
console.log(frutas.at(1))

// como obtener el ultimo elemento
console.log(frutas.at(-1))
// antes 2021 
console.log(frutas[frutas.length - 1])

//Añadir o eliminar elementos
// metodo push
frutas.push("🎂", "🍡", "🌹")
console.log(frutas)

// pop()
// spred operator ...
// esta es una forma de copiar un arreglo
const copyFrutas = [...frutas]

const last = frutas.pop()
console.log(last)
// mutabilidad 🚫
// existen metodos que modifican el arreglo original
console.log(frutas, copyFrutas)

// unshift() añade los elementos al inicio del arreglo
// primo push()
console.log(frutas.unshift("😢"))
console.log(frutas)

// .shift()
// primo pop()
// elimiar los primeros elementos del arreglo
let first = frutas.shift("😢")
console.log("first", first)
// aqui tambien se pueden asignar a una variable
console.log(frutas)


