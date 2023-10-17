console.log("probando")


// HOISTING

// un proceso interno de JS de pre-lectura de codigo.
// JS hacer una prelectura. Busca todas las variables creadas con var y las sube al inicio del codigo pero sin su valor.

// en funciones sube las funciones y mantiene la referencia con todo el codigo a ejecutar.


// console.log("antes de declarar", myName) // ReferenceError: Cannot access 'myName' before initialization
console.log("antes de declarar", myAge) // undefined. Ocurre Hoisting.


let myName = "Jorge";
var myAge = 28;

console.log("despues de declarar", myName)
console.log("despues de declarar", myAge)


// let myName = "Bob"; // Identifier 'myName' has already been declared
var myAge = 10;
console.log("despues de redeclarar", myAge)

// conclusion 1. No usar var


console.log( myFunction() )

function myFunction() {
  return "Hola"
}

console.log( myFunction() )

function myFunction() {
  return "Adios"
}



// con funciones de expression y flecha no ocurre Hoisting
const arrowFunction = () => {

}

// conclusion 2. Usar funciones de flecha, siempre que sea adecuado.


// SCOPES => ambientes donde escribimos codigo

// 1. Scope global => la base del codigo
// 2. Scope de Bloque => alguna operacione entre {  } como condicionales, bucles, switch
// 3. Scope de funciones => lo que escribimos dentro de ua funcion.



// Scope Global

let someString = "Hola" // yo tengo acceso a esta variable en CUALQUIER lugar del codigo.

function someFunction() {

  if (true) {

    for (let i = 0; i < 10; i++) {
      console.log(someString)
    }

  }

}

someFunction()


// Scope de bloque

{
  let myString1 = "Variable con let"; // encapsula esta variable en este scope
  var myString2 = "Variable con var";
  myString3 = "variable sin declarar";
}

// console.log(myString1) // ReferenceError: myString1 is not defined
console.log(myString2) 
console.log(myString3)

// No usar var y NUNCA crear variables sin declarar

// for (let i = 0;)



// Scope de funcion


function someWords() {
  console.log(words2)

  let words1 = "string con let";
  var words2 = "string con var"; // no lo sube al scope global. El hoisting suba la variable al inicio de la funcion
  words3 = "string sin declarar"; // siempre son de acceso global.

}

someWords()

// console.log(words1) // ReferenceError: words1 is not defined
// console.log(words2) // ReferenceError: words2 is not defined
console.log(words3)


// Conclusiones:

// 1. No usar var. Solo let y const
// 2. Usar funciones de flecha, siempre que sea adecuado.
// 3. Siempre declarar variables
// 4. Cuando esten preparandose para entrevistas tecnicas, repasar esto.






// Tienen la logica de codigo



// todas las funciones

// ejemplo de funcion reducida fea
const decirHola = name => name ? `Hola ${name}` : "hola extraño"
// condicional ternario

console.log(decirHola("Jairo"))
