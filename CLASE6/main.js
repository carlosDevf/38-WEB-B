// como busco un elemento en el DOM
// 
// te retorna 1 solo elemento!!!
// document.getElementById()
// retornar un arreglo => for, for of forEach de Elementos DOM
// document.getElementsByClassName()

// Js moderno
// retorna un solo elemento
const span = document.querySelector("#saludo")

const menu = document.querySelector(".menu")
console.log(menu)

const allMenu = document.querySelector("body div ol")
console.log(allMenu)

// retornar un arreglo => for, for of forEach de Elementos DOM
document.querySelectorAll(".menu")
//
// https://lenguajejs.com/dom/contenido/textcontent-innertext/
// textContent, innerText
console.log(span.innerText = "Probando el DOM")
console.log(span.innerHTML = "<h1>HOLA</h1>")

// textContent, innerText => escribir elementos en el HTML

