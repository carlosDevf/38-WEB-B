// contador = una variable que inicializar = 0

// 1.-  condicion = hasta cuando voy a iterar el bloque
// 2.- mientras el i sea menor a 5, seguimos ejecutando el for
// bucle infinito => no queremos esto!!!
// incremento => i = i + 1

for (let i = 0; i <= 5; i++) {
  // console.log(i, "i")
}

// Sumar los primeros 10 números naturales
// Utiliza un ciclo for para sumar los números del 1 al 10 e imprime el resultado.
// Sumatoria factorial
// suma  / iterador / resultado
// 0       + 1         = 1
// 1       + 2         = 3
// 3       + 3         = 6

// let suma = 0;
// for (let i = 0; i <= 10; i++) {
//   suma = suma + i;
//   console.log("iterador", i);
//   console.log("suma", suma);
// }

// % residuo de una division
// Imprimir los números pares del 1 al 20
// Crea un ciclo for que imprima solo los números pares entre 1 y 20.

// let par = 0;
// for (let i = 60; i <= 720; i++) {
//   if (i % 2 === 0) {
//     // cuando es un numero par?
//     console.log("es par => ", i )
//   }
// }

// Tabla de multiplicar //
// Pide al usuario un número e imprime su tabla de multiplicar del 1 al 10.

// const number = prompt("Dame un numero");
// console.log(number);
// alt + 096 => windows, 
//
// for (let i = 1; i <= 10; i++) {
//   multip = number * i;
//   console.log(number + " X " + i + " = " + multip)
//   // tamplate string `${variables}`
//   // jr  / middle 
//   // 
//   console.log(`${number} X ${i} = ${multip}`)
// }

// Contar las vocales en una palabra
// Solicita una palabra al usuario y utiliza un ciclo para contar cuántas vocales contiene.
// Metodos de string!!!

// Objeto PADRE de JS String, metodos y tiene propiedades
const saludo = "hola"
// // propiedad
// console.log(saludo.length)

// // metodo includes // funciones
// console.log(saludo.includes("z"))

// //1 paso pedir la palabra
// const vocales = "aeiou"
// const palabra = prompt("Que palabra quieres analizar")
// let contador = 0
// // 2 iterar la palabra 
// // (opcional) while? cuando no sabemos la cantidad de veces de debo itear 
// for (let i = 0; i < palabra.length; i++){
//     // una forma de extraer cada letra de la palabra
//         // p posicion 0
//         // e posicion 1
//         // r posicion 2
//         // r posicion 3
//         // o posicion 4

//     // console.log(palabra[i] + " posicion " + i)
//     // paso 3
//     const currentWord = palabra[i]    
//     // console.log(currentWord)
//     // indexOf 
//     if (vocales.includes(currentWord)) {
//         // sumar si es una vocal = contador
//         // console.log("es un vocal " + currentWord)
//         contador = contador + 1
//     }
// }

// console.log("la palabra " + palabra + " tiene " + contador + " vocales ")

// const username = "Carlos"
// console.log(username[2]) //=> 

// Invertir una cadena
// Escribe un programa que invierta una cadena de texto utilizando un ciclo for.
//     
// metodo del string 

let contadorWhile = 0;
// mientras la condicion contador < 5 se cumpla (true) se va ejecutar 
// lo que esta dentro de las llaves
while (contadorWhile < 5) {

    console.log(contadorWhile);
    // contadorWhile = contadorWhile + 1
    contadorWhile++;

}

// reto resolver los 5 con el ciclo while

const word = prompt("Escribe la palabra o frase que desees invertir");
// let reversedword = ""
// console.log(word);
// for (let i = word.length - 1; i >= 0; i--) {
//    console.log(word[i]);
//    reversedword = reversedword + word[i]
// }
// console.log(reversedword)
// 
console.log(word.split(" ").reverse().join(" "))