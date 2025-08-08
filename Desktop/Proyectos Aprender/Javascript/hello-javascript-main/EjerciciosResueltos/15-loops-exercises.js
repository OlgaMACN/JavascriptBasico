/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

/**@author Olga Macías */

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("Ejercicio 1: ")
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("\nEjercicio 2: ")
let resultado = 0
let contador = 1
do {
    resultado += contador
    contador++
} while (contador <= 100)
console.log("Resultado: " + resultado)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("\nEjercicio 3: ")
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("\nEjercicio 4: ");
let nombres = ["Olga", "Manuel", "Lucía", "José David", "Lorena"];
let i = 0;

while (i < nombres.length) {
    console.log(nombres[i]);
    i++;
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("\nEjercicio 5: ")
let cadena = "¿Cuántas vocales hay en esta cadena?";
let numVocales = 0;
let todasVocales = "aeiouáéíóú";

for (let letra of cadena.toLowerCase()) {
    if (todasVocales.includes(letra)) numVocales++;
}
console.log("Hay " + numVocales + " vocales en la cadena");

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("\nEjercicio 6: ")
let numeros = [1, 2, 3, 4, 5]
let producto = 1
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i]
}
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("\nEjercicio 7: ")
let numero = 5
i = 1
do {
    console.log(numero + " x " + i + " = " + (numero * i))
    i++
} while (i <= 10)

// 8. Usa un bucle para invertir una cadena de texto
console.log("\nEjercicio 8: ")
let cadenaOriginal = "Aprendiendo Javascript"
let invertida
for (i = 0; i < cadenaOriginal.length; i++) {
    invertida += cadenaOriginal[cadenaOriginal.length - 1 - i]
}
console.log(invertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("\nEjercicio 9: ")
let primero = 0
let segundo = 1
let nuevo

for (i = 0; i < 10; i++) {
    console.log(primero)
    nuevo = primero + segundo
    primero = segundo
    segundo = nuevo
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("\nEjercicio 10: ")
let original = [1, 40, 35, 10, 15, 20, 5]
let mayores = []
for (let i = 0; i < original.length; i++) {
    if (original[i] > 10) mayores.push(original[i])
}
console.log(mayores)