/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

/** @author Olga Macías */

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("Ejercicio 1: ")
let array1 = [1, 2, 3, 4, 5]

let [valor1, valor2] = array1
console.log(valor1, valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("\nEjercicio 2: ")
let [valor3, valor4, valor5, valor6, valor7, valor8 = 6] = array1
console.log(valor3, valor4, valor5, valor6, valor7, valor8)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("\nEjercicio 3: ")
let persona = {
    nombre: "Olga",
    edad: 28,
    ciudad: "Madrid"
}

let { nombre, edad } = persona
console.log(nombre, edad)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log("\nEjercicio 4: ")
let { nombre: nombrePersona, edad: edadPersona } = persona
console.log(nombrePersona, edadPersona)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("\nEjercicio 5: ")
persona.profesion = {
    puesto: "Developer",
    experiencia: 2
}
let { profesion: { puesto: puestoProfesion, experiencia: experienciaProfesion } } = persona
console.log(puestoProfesion, experienciaProfesion)

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("\nEjercicio 6: ")
let array2 = [6, 7, 8, 9, 10]
let array3 = [...array1, ...array2]
console.log(array3)

// 7. Usa propagación para crear una copia de un array
console.log("\nEjercicio 7: ")
let copiaArray3 = [...array3]
console.log(copiaArray3)

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("\nEjercicio 8: ")
let coche = {
    marca: "Hyundai",
    modelo: "Kona",
    color: "Gris"
}

let personaCoche = { ...persona, ...coche }
console.log(personaCoche)

// 9. Usa propagación para crear una copia de un objeto
console.log("\nEjercicio 9: ")
let copiaPersonaCoche = { ...personaCoche }
console.log(copiaPersonaCoche)

// 10. Combina desestructuración y propagación
console.log("\nEjercicio 10: ")
let { nombre: nombreOlga, edad: edadOlga } = persona // desestructuración
let final = { ...persona, ...coche, email: "olga@email.com" } // propagación 
console.log(final)

