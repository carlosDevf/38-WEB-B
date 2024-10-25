// VAR, LET, CONST
// js debil tipado

// let me deja re asignar el valor
let nombre = "carlos"
nombre = "carlos chavez"

// const se va a ocupar cuando el valor de la varibale no cambie en tiempo 
// ejecucion del programa 
const fecha = "12/12/1984"
console.log(nombre)

const $$ = "🤡"

const frutas = "uva,melo"

console.log(typeof fecha)
console.log(typeof $$)

// temporal, Intl, Dayjs +++ React +++ clima
const diaHoy = new Date()
console.log(typeof diaHoy) 


const edad = 39
console.log(typeof edad)

// del por que no debemos usar var, por que podemos cometer el error de
// redeclarar una variable scope ☢☢☢☢
// var direccion = "valle de bravo"
// var direccion = "rueda del pastor"

// OPERADORES MATEMATICOS 
// operador modulo % el residuo de una una division + - / * 
const suma = 8 + 2
console.log(suma)

// operador de incremento y decremento
let tickets = 10
console.log(tickets, "antes")
tickets++ // tickets = tickets + 1
console.log(tickets, "despues")
tickets-- // tickets = tickets - 1
console.log(tickets, "menos")

// OPERADORES DE COMPARACION
// igualdad 
console.log("------Op igualdad-------")
// dos == igualdad débil => error 
console.log(1 == "1", "débil")
// igudad stricta *** PARAR TODO 
console.log(1 === "1", "estricta")

// desigualdad  débil !=
// desigualdad  fuerte !== ***
console.log("perro" !== "gato")

const userName = ""
// el valor de userName es diferente a espacio vacio?
console.log(userName !== "")


// > < >= <= mayor que y menor que 
console.log(4 > 6, ">")

// esta comparando si 4 es menor al 6
console.log(4 < 6, "<")


// esta comparando si 4 es menos o igual a 4
console.log(4 <= 4, "<=")

// esta comparando si 4 es mayor o igual a 4
console.log(4 >= 4, ">=")

























