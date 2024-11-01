// Problema: Clasificación de Frutas
// Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

// Instrucciones:
// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.
// Opcional: intenta implementar la solución con el otro ciclo (for/while).

const frutas = [
    "manzana",
    "banana",
    "naranja",
    "fresa",
    "uva",
    "kiwi",
    "mango",
    "piña",
    "cereza",
    "manzana",
    "durazno",
    "higo",
    "papaya",
    "sandía",
    "limón",
    "manzana",
    "higo",
    "mandarina",
    "arándano",
    "frambuesa",
    "coco",
    "melón",
    "manzana",
    "granadilla",
    "higo"
  ]

  const contador = {}
  let sumaMananza = 0
  let sumaHigo = 0

  for (let i = 0; i < frutas.length; i++){
    
    if (frutas[i] === "manzana") {
        console.log("es una manzana ")
        sumaMananza = sumaMananza  +  1 
    }

    if (frutas[i] === "higo"){
        sumaHigo = sumaHigo  +  1 
    }
  }

  contador.manzana = sumaMananza
  contador.higo = sumaHigo
  console.log(contador)
