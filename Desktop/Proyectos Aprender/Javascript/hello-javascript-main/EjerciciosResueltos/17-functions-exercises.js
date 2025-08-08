/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

/**@author Olga Macías*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("Ejercicio 1: ")
function suma(a, b) {
    return a + b;
}
console.log(suma(5, 10));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("\nEjercicio 2: ")
let array = [5, 2, 6, 10, 4, 7]
function maximo(array) {
    return Math.max(...array);
}
console.log(maximo(array));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("\nEjercicio 3: ")
let cadena = "Hola Mundo"

function contarVocales(cadena) {
    let vocales = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales(cadena));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("\nEjercicio 4: ")

let arrayStrings = ["Pelota", "Tejado", "Piscina"]
function mayusculas(array) {
    return array.map(string => string.toUpperCase());
}
console.log(mayusculas(arrayStrings));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("\nEjercicio 5: ")
const esPrimo = function (numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
};

console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("\nEjercicio 6: ")
let array1 = [1, 2, 3, 4, 5]
let array2 = [4, 5, 6, 7, 8]
function elementosComunes(arr1, arr2) {
    return arr1.filter(valor => arr2.includes(valor));
}
console.log(elementosComunes(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("\nEjercicio 7: ")
let arrayNumeros = [1, 2, 3, 4, 5]
const sumaPares = arr => arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
console.log(sumaPares(arrayNumeros))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("\nEjercicio 8: ")
const elevarCuadrado = function (arr) {
    return arr.map(n => n ** 2);
};
console.log(elevarCuadrado(arrayNumeros))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log("\nEjercicio 9: ")
const invertirPalabras = texto => texto.split(" ").reverse().join(" ");
console.log(invertirPalabras("Hola mundo"))

// 10. Crea una función que calcule el factorial de un número dado
console.log("\nEjercicio 10: ")
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)) // 120
