const fruits = [
    "fresa", "pera", "granada", "uva", "fresa", "frambuesa", "kiwi", "frambuesa", "frambuesa", "uva", "manzana", "fresa", "fresa", "mandarina", "pera", "uva", "pera", "fresa", "manzana", "platano", "manzana", "arandano", "durazno", "lima", "frambuesa", "uva", "frambuesa", "frambuesa", "arandano", "lima", "naranja", "pera", "fresa", "fresa", "naranja", "fresa", "uva", "naranja", "manzana", "frambuesa", "fresa", "manzana", "kiwi", "mandarina", "platano", "durazno", "frambuesa", "arandano", "platano", "durazno", "naranja", "pera", "lima", "fresa", "naranja", "fresa", "pera", "granada", "fresa", "frambuesa", "platano", "frambuesa", "frambuesa", "frambuesa", "frambuesa", "papaya", "platano", "fresa", "fresa", "lima", "melon", "papaya", "melon", "mango", "fresa", "cereza", "lima", "platano", "pera", "arandano", "mandarina", "papaya", "mandarina", "naranja", "kiwi", "melon", "manzana", "melon", "naranja", "manzana", "platano", "cereza", "naranja", "frambuesa", "cereza", "kiwi", "kiwi", "durazno", "pera", "pera", "coco", "manzana", "mandarina", "mandarina", "granada", "mandarina", "arandano", "platano", "sandia", "arandano", "uva", "pera", "mango", "manzana", "arandano", "cereza", "arandano", "platano", "platano", "manzana", "uva", "mango", "uva", "uva", "uva", "papaya", "frambuesa", "arandano", "pera", "lima", "frambuesa", "durazno", "melon", "uva", "lima", "mandarina", "kiwi", "mandarina", "cereza", "uva", "mandarina", "cereza", "lima", "cereza", "frambuesa", "frambuesa", "arandano", "lima", "lima", "arandano", "kiwi", "kiwi", "mango", "arandano", "cereza", "mango", "mango", "arandano", "mandarina", "uva", "mandarina", "arandano", "coco", "cereza", "uva", "mandarina", "lima", "mandarina", "uva", "mandarina", "uva", "uva", "sandia", "lima", "lima", "kiwi", "piña", "mandarina", "piña", "mango", "sandia", "cereza", "cereza", "uva", "uva", "cereza", "uva", "melon"
]

// Frutas con ciclo "For" con objeto
console.log('FRUTAS CON CICLO "FOR" CON OBJETO')
const fruitsobject = {}

for (let i = 0; i < fruits.length; i++) {
    console.log(i)
    // añadir un elemento al objeto
    // fruitsobject.fresa = 4
    const frutaActual = fruits[i]
    const nextFruta = fruits[i + 1]
    console.log(nextFruta)

    // fresa
   fruitsobject[fruta] = (fruitsobject[fruta] || 0) + 1
}

console.log(`Tienes un total de ${fruits.length} frutas.`)
console.log(fruitsobject)
console.log(Object.keys(fruitsobject))
console.log(Object.values(fruitsobject))
console.log(Object.entries(fruitsobject))
console.log(fruitsobject.manzana + " elementos de manzana")

// Objet
// console.log(
//     `Tienes las siguientes frutas:
//     ${manzanatotal} manzanas.
//     ${platanototal} plátanos.
//     ${fresatotal} fresas.
//     ${naranjatotal} naranjas.
//     ${uvatotal} uvas.
//     ${piñatotal} piñas.
//     ${sandiatotal} sandías.
//     ${mangototal} mangos.
//     ${cerezatotal} cerezas.
//     ${kiwitotal} kiwis.
//     ${papayatotal} papayas.
//     ${peratotal} peras.
//     ${melontotal} melones.
//     ${duraznototal} duraznos.
//     ${granadatotal} granadas.
//     ${frambuesatotal} frambuesas.
//     ${arandanototal} arándanos.
//     ${limatotal} limas.
//     ${cocototal} cocos.
//     ${mandarinatotal} mandarinas.`
// )