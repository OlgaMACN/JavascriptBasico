/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

/**@author Olga Macías */

// 1. Crea un array que almacene cinco animales
console.log("Ejercicio 1: ")
let animales = ["Vaca", "Cerdo", "Caballo", "Tortuga", "Gallina"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
console.log("\nEjercicio 2: ")
animales.unshift("Perro") // inicio
animales.push("Gato") // final
console.log(animales)
// ["Perro", "Vaca", "Cerdo", "Caballo", "Tortuga", "Gallina", "Gato"]

// 3. Elimina el que se encuentra en tercera posición
console.log("\nEjercicio 3: ")
animales.splice(2, 1) // elimina 1 elemento desde la posición 2 (Cerdo)
console.log(animales)

// 4. Crea un set que almacene cinco libros
console.log("\nEjercicio 4: ")
let setLibros = new Set(["El clan del oso cavernario", "Fundación", "Marina", "El niño con el pijama de rayas", "Cumbres Borrascosas"])
console.log(setLibros)

// 5. Añade dos más. Uno de ellos repetido
console.log("\nEjercicio 5: ")
setLibros.add("El valle de los caballos")
setLibros.add("Fundación")
console.log(setLibros)

// 6. Elimina uno concreto a tu elección
console.log("\nEjercicio 6: ")
setLibros.delete("Marina")
console.log(setLibros)

// 7. Crea un mapa que asocie el número del mes a su nombre
console.log("\nEjercicio 7: ")
let mapaMeses = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"]
])
console.log(mapaMeses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("\nEjercicio 8: ")
mapaMeses.has("5") ? console.log(mapaMeses.get("5")) : console.log("No existe")

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log("\nEjercicio 9: ")
mapaMeses.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(mapaMeses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("\nEjercicio 10: ")
let lenguajes = ["Java", "Javascript", "Python", "Kotlin"]

let setLenguajes = new Set(lenguajes)

let mapLenguajes = new Map([
    ["Lenguajes", setLenguajes]
])
console.log(mapLenguajes)
