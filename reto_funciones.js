// modelado de objetos => el uso en una BD
const Libro = {
    // cuando queremos buscar un texto en una base de datos
    // indexado => 
    title: "Cien años de soledad",
    autor: "Gabriel Garcia Márquez",
    year: "1967",
    state: true,
    description: "Es un buen libro",
    capitulos: [],
    showInfo: function(){
        // this => se refiere al objeto o clase al que esta llamando
        // constructor => 
        console.log(this.title)
    },
    changeState: function(estado){
        if (estado === 'prestado')  {
            this.state = true
        } 

        if (estado === 'disponible') {
            this.state = false
        }
            
        if (this.state) {
            console.log("Este libro fue prestado")
        } else {
            console.log("Libro esta disponible")
        }
    },
    addChapter: function(titulo){
        // validar que titulo si sea un string
        // que el titulo no este ya añadido (evitar duplicidad)
        // { id: 123, order: 1, nombre: "José Arcadio"}

    }
}

Libro.showInfo()
Libro.changeState("disponible")
console.log(Libro)

// constructor ? 

const libroSelva = {
    ...Libro,
    title: "Libro de la selva",
    description: "De un niño huérfano y salvaje",
    year: "1894",
    autor: "Rudyard Kipling"
}

console.log(libroSelva, "🐵")

function Book(title, autor, year, state, description){
    this.title = title
    this.autor = autor
    this.year = year
    this.state = state
    this.description = description
    this.capitulos = []

    this.showInfo = function(){
        // this => se refiere al objeto o clase al que esta llamando
        // constructor => 
        console.log(this.title)
    }

    this.changeState = function(estado){
        if (estado === 'prestado')  {
            this.state = true
        } 

        if (estado === 'disponible') {
            this.state = false
        }
            
        if (this.state) {
            console.log("Este libro fue prestado")
        } else {
            console.log("Libro esta disponible")
        }
    }

    this.addChapter = function(titulo){
        // validar que titulo si sea un string
        // que el titulo no este ya añadido (evitar duplicidad)
        // { id: 123, order: 1, nombre: "José Arcadio"}
    }

} 

// Instancia del Objeto Book
const loRings = new Book(
    "El señor de los anillos", 
    "J.R.R. Tolkien",
    "1978",
    "prestado",
    "Dos muchachos muy valientes hacen el trabajo de los demas"
 )

 //
 console.log(loRings.showInfo())

// Eliminar valores de un arreglo
// DOM
// Generador de contraseñas
// constante

const _modulo = []
const URL = ""
