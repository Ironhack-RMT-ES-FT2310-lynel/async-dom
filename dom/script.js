console.log("probando")


// Selectores

console.log(document)

// querySelector => metodo que nos permite hacer busquedas en el documento

let h1Node = document.querySelector("h1") // nos devuelve la referencia de ese elemento

console.log(h1Node);

console.log(h1Node.innerText);

h1Node.innerText = "Modificando el DOM";


// Existen muchos metodos y selectores que vamos a aprender

// Existen dos principales formas por las que haremos manipulacion de dom

// 1. Por acciones automatizadas

setTimeout( () => {
  h1Node.innerText = "Cambio despues de 2s"
}, 2000 )

setInterval( () => {
  // document.querySelector("h2").innerText++
  
  let h2Node = document.querySelector("h2")
  // h2Node.innerText = Number(h2Node.innerText) + 1
  h2Node.innerText++
  // .todo lo que nosotros traemos del DOM es un string

}, 1000 )


// 2. Por interacciones de usuarios

let buttonNode = document.querySelector("button")
let h3Node = document.querySelector("h3")

// eventListeners => ejecuciones que estan continuamente escuchando cuando un usuario interactua con la pagina

buttonNode.addEventListener("click", () => {
  // cuando el usuario haga "click" sobre el boton "buttonNode" entonces se ejecuta esto
  console.log("presionando el button")
  h3Node.innerText += "Patata"
})