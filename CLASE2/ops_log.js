// Va a comprar que dos condiciones sean verdaderas
// operador logico AND && // todas

const mayores = 3 > 3 // verdadero
const menores = 2 <= 2  // verdadero
// 
console.log(mayores, "mayores")
console.log(menores, "menores")
console.log(mayores && menores && 20 > 16)


// operador logico OR || 
// si alguna condicion es true => retorna un true

// la cond dice que si el 4 es igual a 8
const cond1 = 4 === 8
console.log(cond1, "cond1")
const cond2 = 8 < 16
console.log(cond2, "cond2")
console.log(cond1 || cond2)

// el valor que se asignara a la variable es 
// la condicion verdadera // caso de uso el el front
const saldo = 0 || "No tienes suficiente saldo"
console.log(Boolean(10), "ES CERO")
console.log(Boolean(""), "hola")
console.log(saldo)


// ! Operador lógico NOT
// contradiccion
// Devuelve el valor opuesto

const isRain = false
console.log(!isRain, "isRain")
/// caso de uso completamente con el IF

















