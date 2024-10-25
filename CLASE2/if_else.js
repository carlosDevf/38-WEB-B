const isRain = false
console.log(!isRain, "isRain")
/// caso de uso completamente con el IF

// if(){}

// que si isRain es verdadero ejecuta lo que esta dentro de las llaves
if (!isRain){
    // ejecutar lo que yo necesite
    console.log("cierra el techo")
}

if (isRain){
    // esto se ejecuta si la condicion principal es verdadera
    console.log("esta lloviendo 💧💧💧💧")
} else {
    // esto se ejecuta si la condicion principal es falsa
    console.log("no llueve ☀")
}


if (isRain){
    // esto se ejecuta si la condicion principal es verdadera
    console.log("esta lloviendo 💧💧💧💧")
} else if (4 === 4) {
    // evaluar otra condicion 
    // esto se ejecuta si la condicion principal es falsa
    console.log("no llueve ☀")
} else {
    console.log("no llueve ☀")
}
