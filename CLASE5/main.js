// Representacion de un elemento de la vida real
const microfonoCarlos = {
    color: "negro",
    marca: "fifine",
    usb: true,
    mic: true,
    dials: 2,
    led: true
}

//
const jugadorFutbol = {
    nombre: "",
    velocidad: "",
    altura: "",
    salto: "",
    sprint: "",
    regate: "",
    tiro: "",
    defensa: "",
    ataque: "",
    guapura: "",
}

const productoAmazon = {
    active: true,
    date: "12/12/2024",    
    tag: "laptops",
    title: 'HP Laptop Gaming OMEN Trascend 14-fb0001la, Intel Core Ultra 7, 16GB RAM, 1TB SSD, 14", OLED UWVA (2880x1800), NVIDIA GeForce RTX 4060(8GB), Windows 11 Home,Teclado en Español, Garantía México, Negro"',
    price: 4110764,    
    imagenes: [
        "81enlPlxtQL._AC_SL1500_.jpg",
         "81T9NuJSHFL._AC_SL1500_.jpg",
         "71dK4jglZLL._AC_SL1500_.jpg"
        ],
    properties: {
        marca: "HP",
        model: "14-fb000la",
        color: "negro"
    },
    propertiesExtend: [
        "✔️ [PROCESADOR] Intel Core Ultra 7 155H (hasta 4,8 GHz, con tecnología Intel Turbo Boost, 24 MB de caché L3, 16 núcleos y 22 subprocesos)",
        "✔️ [DISCO DURO & MEMORIA RAM] Unidad SSD M.2 PCIe Gen4 NVMe de 1 TB / 16 GB RAM LPDDR5x-7467 MHz (integrada)",
    ],
    comentaries: [
        {
            autor: "carlos",
            calif: 5,
            desc: "Pensé que no llegaría bien,"
        },
        {
            autor: null,
            calif: 3,
            desc: "Por su pronta y oportuna entrega y cumple con el costo beneficio."
        }
    ] 
}

// variable
// const, var, let => la forma de declarar dicha variable
// tipos de datos?
// string, numbers, NaN, array, Objeto, (null, undefined), booleans

const saludo = "Hola"
saludo.split(" ") // metodo
saludo.length // propiedad

// como accedo a una propiedad
// console.log(productoAmazon)
// usamos la notacion de punto // las aceptada****
console.log(productoAmazon.imagenes.at(-1))
console.log(productoAmazon.imagenes[productoAmazon.imagenes.length - 1])
for (let i = 0; i < productoAmazon.imagenes.length; i++) {
    console.log(productoAmazon.imagenes[i])
}

console.log(productoAmazon.title.replace("NVIDIA", "Nvidia"))

// puedo acceder a los elementos de un objeto con los corchetes
// tiene un caso especial de uso cuando la propiedad no es compatible con la sintaxis de js
// Diccionario***
console.log(productoAmazon["tag"])

// 
const marcaDelProducto = productoAmazon.properties.marca
console.log(marcaDelProducto)

const comentario1 = productoAmazon.comentaries[0].autor.toUpperCase()
console.log(comentario1)

const precio = productoAmazon.price

const imagenBusqueda = productoAmazon.imagenes[0]

// añadir una nueva propiedad // o actualziar una propiedad
productoAmazon.id = "123456"
console.log(productoAmazon.id)

// si la propiedad ya existe la va a actualizar
productoAmazon.title = "Laptop"
console.log(productoAmazon.title)

productoAmazon.propiedad2 = {}
console.log(productoAmazon.propiedad2)

productoAmazon.propiedad2.nombre = "Vico"
console.log(productoAmazon.propiedad2.nombre)

// elimino una propiedad
// **** borrado logico // con propiedad que lo convierta en falso para poder manipularlo una base de datos o en front
// mas insegura
// react => router
delete productoAmazon.title
console.log(productoAmazon)

// concatenear objetos
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// Object.assign => 
    // Object familia
    // keys
    // value

// DOM
// Object.entrie
[[{}],[{}]]

