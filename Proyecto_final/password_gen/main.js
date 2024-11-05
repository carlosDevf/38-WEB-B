// trigger
// ejecuta 
// evento esta escuchando
// 
const span = document.querySelector("#password")
const inpuntLength = document.querySelector("#length")
const upperCaseOption = document.querySelector("#uppecase")

// que una linea haga un solo trabajo
// no repetir codigo

// input es un elemento de formulario o para que el usuario nos indique que valor
console.log(inpuntLength.value, "largo")

// algoritmo de generar un numero aleatorio
function generateRandomNumber (evento) {
    // props
    // actualizamos el DOM
    // react

    const caracterNumbers = inpuntLength.value
    const numeros = "0123456789"
    const letras = "abcdefghijklmnopqrstuvwxyz"
    const upperCase = "ABCDEFGHIJKLMNOPQRTUVXYZ"
    const especiales = "!#$"

    let combinaciones = numeros + letras + especiales
    // 
    if (upperCaseOption.checked) {
        combinaciones += upperCase
    }

    let password = ""
    
    for (let i = 0; i < caracterNumbers; i++) {       
        // Math, redondear numeros     
        // Math.random() genera un numero aleatorio con punt 3
        const random = Math.random()
        // de cero al numero de elementos disponibles
        const randomNumer = Math.floor(random * combinaciones.length)
        // obtener un numero aleatorio con rango 0 al numero de elementos que tiene combinaciones                        
        password += combinaciones[randomNumer]
        // password = password + combinaciones[randomNumer]
    }

    span.innerText = password
}

// lista de participantes 
// - la contraseña no repita caracteres
// - Genera un arreglo aleatorio
//                        0         1        2
const participantes = ["carlos", "david", "Angel"]
const l = "abcdefghijklmnopqrstuvwxyzABCDE"
console.log(l[2])

// Eventos del DOM
const buttonGen = document.querySelector("#generate")
// Funciones anonimas
// buttonGen.addEventListener('click', function(){
//     alert("hola")
// })
buttonGen.addEventListener('click', generateRandomNumber)

// change cambia una vez que se libera
// 1.- ve y busca // querySelector

// 2.- Escucha un evento // 
//addEventListener
// click boton 
// change => input

// 3.- ejecuta tu funcion o asigna un valor

// en linea 6const inpuntLength = document.querySelector("#length")
inpuntLength.addEventListener('change', function(e){    
    const span = document.querySelector(".controls label span")
    // asignado un valor
    span.innerText = e.target.value    
})

document.addEventListener('keypress', function(e){
    console.log(e)
    console.log("hola")
})