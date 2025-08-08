/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

/**@author Olga Macías */

// 1. Crea un función que utilice error correctamente
function errorCorrecto() {
    try {
        console.error("Esto es un error");
    } catch (error) {
        console.log("Error: ", error);
    }
}
console.log("\nEjercicio 1: ")
errorCorrecto();

// 2. Crea una función que utilice warn correctamente
function WarnCorrecto() {
    try {
        console.warn("Esto es una advertencia");
    } catch (error) {
        console.log("Error: ", error);
    }
}
console.log("\nEjercicio 2: ")
WarnCorrecto();

// 3. Crea una función que utilice info correctamente
function InfoCorrecto() {
    try {
        console.info("Esto es información adicional");
    } catch (error) {
        console.log("Error: ", error);
    }
}
console.log("\nEjercicio 3: ")
InfoCorrecto();

// 4. Utiliza table
let datosTabla = {
    "Nombre": ["Juan", "Pedro", "Ana"],
    "Apellido": ["Pérez", "García", "López"],
    "Edad": [25, 30, 35]
}

let datosTabla2 = [
    { name: "Juan", surname: "Pérez", age: 25 },
    { name: "Pedro", surname: "García", age: 30 },
    { name: "Ana", surname: "López", age: 35 }
]

let datosTabla3 = [
    ["Juan", "Pérez", 37],
    ["Pedro", "García", 30],
    ["Ana", "López", 35]
]

console.log("\nEjercicio 4: ")
console.table(datosTabla)
console.table(datosTabla2)
console.table(datosTabla3)

// 5. Utiliza group
console.log("\nEjercicio 5: ")
console.group("Olga")
console.log("Nombre: Olga")
console.log("Apellido: Macías")
console.log("Edad: 28")
console.groupEnd()

console.group("\nJuan")
console.log("Nombre: Juan")
console.log("Apellido: Pérez")
console.log("Edad: 25")
console.groupEnd()

// 6. Utiliza time
console.log("\nEjercicio 6: ")
console.time("Tiempo total:")
for (i = 0; i < 100; i++) {

}
console.timeEnd("Tiempo total:")

// 7. Valida con assert si un número es positivo
console.log("\nEjercicio 7: ")
let numero = -5
// la impresión por consola varía según la ejecución - impredecible
console.assert(numero > 0, "El número debe ser mayor a cero")

// 8. Utiliza count
console.log("\nEjercicio 8: ")
console.count("Count")
console.count("Count")

// 9. Utiliza trace
console.log("\nEjercicio 9: ")
function suma(a, b) {
    console.trace("La suma de a y b es: ", a + b)
}
console.trace(suma(5, 7))

// 10. Utiliza clear
console.clear()