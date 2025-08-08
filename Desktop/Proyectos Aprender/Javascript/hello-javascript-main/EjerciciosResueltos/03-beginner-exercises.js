/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// comentario en una línea

// 2. Escribe un comentario en varias líneas
/* comentario
en varias 
líneas
*/

/**@author Olga Macías */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombre = "Olga"
let edad = 28
let altura = 1.60
let esEstudiante = true
let esProfe = false
let undefined
let trabajo = null
let symbol = Symbol("nuevoSimbolo")

// 4. Imprime por consola el valor de todas las variables
console.log("Ejercicio 4: ")
console.log(nombre)
console.log(edad)
console.log(altura)
console.log(esEstudiante)
console.log(esProfe)
console.log(undefined)
console.log(trabajo)
console.log(symbol)

// 5. Imprime por consola el tipo de todas las variables
console.log("\nEjercicio 5: ")
console.log("\n" + typeof nombre)
console.log(typeof edad)
console.log(typeof altura)
console.log(typeof esEstudiante)
console.log(typeof esProfe)
console.log(typeof undefined)
console.log(typeof trabajo)
console.log(typeof symbol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "OlgaMACN"
edad = 29
altura = 1.61
esEstudiante = false
esProfe = true
undefined = undefined
trabajo = null
symbol = Symbol("nuevoSimbolo2")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 25
edad = "treinta"
altura = true
esEstudiante = 1
esProfe = "abc"
undefined = null
trabajo = "desarrolladora"
symbol = 0.10

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const name = "Olga"
const age = 28
const height = 1.60
const isStudent = false
const isTeacher = true
const undefinedConst = undefined
const job = null
const symbolConst = Symbol("simboloConstante")

// 9. A continuación, modifica los valores de las constantes
name = "OlgaMACN"
age = 29
height = 1.61
isStudent = true
isTeacher = false
undefinedConst = 50
job = "developer"
symbolConst = Symbol("nuevoSimbolo2")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
/* Todas las del ejercicio anterior, ya que al asignar valores nuevos a una constante, 
aparece el error 'Assignment to constant variable.', pues los valores iniciales deberían
permanecer inmutables a lo largo del programa*/