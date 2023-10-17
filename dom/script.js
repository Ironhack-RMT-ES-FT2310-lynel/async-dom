console.log("probando")


// Selectores

console.log(document)

// querySelector => metodo que nos permite hacer busquedas en el documento. Consigue el PRIMER elemento que concuerde con la busqueda

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



// Otro tipo de selecciones

let titleNode = document.querySelector("#title")
titleNode.innerText = "Cambiando Titulo"

let paragNode = document.querySelector(".some-text")
paragNode.innerText = "Cambiando parrafo"

// querySelectorAll => busquedas de multiples elementos que concuerden con la busqueda

let allParagNode = document.querySelectorAll(".some-text")
console.log(allParagNode)

// el listas de nodos podemos:
// 1. usar notacion de corchete
// 2. podemos hacer bucles tradicionales
// 3. forEach

allParagNode[2].innerText = "Modificando solo el 3er parrafo"

for (let i = 0; i < allParagNode.length; i++) {
  allParagNode[i].innerText = "modificando con bucle for"
}

allParagNode.forEach((eachNode) => {
  eachNode.innerText = "modificando con el forEach"
})

// getElementById("algun-id")
// getElementsByClassName("alguna-clase")
// getElementsByTagName("etiqueta")

//  Crear y eliminar elementos del DOM

let containerNode = document.querySelector("#empty-container")

// createElement => crea un nuevo elemento de DOM para ser agregado a la pagina
let newNode = document.createElement("h2") // ref 1234
console.log(newNode)
newNode.innerText = "Nuevo Titulo";

// append => metodo de cualquier elemento de DOM para añadir otro elemento adentro

setTimeout(() => {
  // dondeAñadir.append( queAñadir )
  containerNode.append( newNode ) // ref 1234
}, 1000)


// .remove() => metodo de cualquier elemento de DOM para removerlo de la visualizacion (DOM)

setTimeout(() => {
  newNode.remove() // ref 1234
}, 3000)