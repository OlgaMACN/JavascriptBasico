/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

/**@author Olga Macías */

// 1. Concatena dos cadenas de texto
console.log("Ejercicio 1: ")
console.log("Hola, " + "soy Olga")

// 2. Muestra la longitud de una cadena de texto
console.log("\nEjercicio 2: ")
let nombre = "Olga"
console.log("La longitud de mi nombre es:", nombre.length)

// 3. Muestra el primer y último carácter de un string
console.log("\nEjercicio 3: ")
console.log("La primera letra de mi nombre es: " + nombre[0].toLowerCase() + ", y la última: " + nombre[3])


// 4. Convierte a mayúsculas y minúsculas un string
console.log("\nEjercicio 4: ")
console.log("Mayúsculas: " + nombre.toUpperCase() + ", minúsculas: " + nombre.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log("\nEjercicio 5: ")
console.log(`Cadena de texto
en varias líneas,
¿qué te parece?`)

// 6. Interpola el valor de una variable en un string
console.log("\nEjercicio 6: ")
console.log(`Mi nombre es ${nombre}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("\nEjercicio 7:");
let texto = "No quiero espacios en blanco";
texto = texto.replace(/ /g, "_"); /* expresión regular para cubrir todos los espacios */
console.log(texto);

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("\nEjercicio 8: ")
let cadena = "Me llamo Olga"
let contiene
contiene ? (console.log(cadena.includes("Olga"))) : (!console.log(cadena.includes("Olga")))

// 9. Comprueba si dos strings son iguales
console.log("\nEjercicio 9: ")
console.log(nombre === cadena)

// 10. Comprueba si dos strings tienen la misma longitud
console.log("\nEjercicio 10: ")
let cadena2 = "Me llamo Olga"
console.log(nombre.length === cadena.length)
console.log(cadena2.length === cadena.length)