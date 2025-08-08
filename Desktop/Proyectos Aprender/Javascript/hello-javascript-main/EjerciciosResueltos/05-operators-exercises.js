/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

/**@author Olga Macías */

// 1. Crea una variable para cada operación aritmética
let a = 5;
let b = 2;

console.log("Ejercicio 1: ")
console.log(2 + 5)
console.log(2 * 5)
console.log(2 / 5)
console.log(2 - 5)
console.log(2 % 5)
console.log(2 ** 5)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log("\nEjercicio 2: ")
console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b)
console.log(a != b)
console.log(a === b)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("\nEjercicio 3: ")
console.log(5 == 5)
console.log((5 * 5) == 25)
console.log(((5 * 3) == (10 + 5) && 20 - 5) == 15)
console.log(!(6 * 3 == 20))
console.log((5 + 3 || 4 * 3) == 8)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("\nEjercicio 4: ")
console.log(5 != 5)
console.log((5 * 5) == 27)
console.log((5 * 3) && (10 + 5) != 15)
console.log((6 * 3 == 20))
console.log((5 + 3 && 4 * 3) == 8)

// 5. Utiliza el operador lógico and
console.log("\nEjercicio 5: ")
console.log((2 ** 2) && (8 / 2) == 4)

// 6. Utiliza el operador lógico or
console.log("\nEjercicio 6: ")
console.log((8 % 2 || 10 - 5) == 4)

// 7. Combina ambos operadores lógicos
console.log("\nEjercicio 7: ")
let x = 4
let z = 8
console.log(((x * x && z + z) || 12 + x) == 16)

// 8. Añade alguna negación
console.log("\nEjercicio 8: ")
console.log(((x * x && z + z) || 12 + x) != 20)

// 9. Utiliza el operador ternario
console.log("\nEjercicio 9: ")
const encontrarTrabajo = true
encontrarTrabajo ? console.log("Encontraré trabajo este mes") : console.log("No encontraré trabajo este mes")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("\nEjercicio 10: ")
const numero = 20
a = 5
b = 10
a ? console.log(((a + b) == (numero - 5)) && ((a * 4) - 5) == 15) : console.log(numero != 20)
