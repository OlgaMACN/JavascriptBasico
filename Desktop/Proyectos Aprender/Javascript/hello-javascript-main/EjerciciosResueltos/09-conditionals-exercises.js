/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

/**@author Olga Macías */

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("Ejercicio 1: ")
let nombre = "Olga"
if (!nombre.match("Olga")) {
    console.log("Nada que imprimir")
} else {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("\nEjercicio 2: ")
let user = "Olga"
let password = "1234"
if (!(user.match("Olga") && password.match("1234"))) {
    console.log("Credenciales incorrectos.")
} else {
    console.log("Usuario: " + user + "; Contraseña: " + password)
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("\nEjercicio 3: ")
let numero = 5
if (numero > 0) {
    console.log("El número es positivo.")
} else if (numero < 0) {
    console.log("El número es negativo.")
} else {
    console.log("El número es cero.")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("\nEjercicio 4: ")
let edad = 15
let calculo = 18 - edad
if (edad < 18 && edad >= 0) {
    console.log("No puede votar hasta dentro de " + calculo + " años.")
} else if (edad < 0) {
    console.log("Valor incorrecto.")
} else {
    console.log("Puede votar.")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log("\nEjercicio 5: ")
let rango = 21
let resultado = (rango >= 18) ? "adulto" : "menor"
console.log("La persona es: " + resultado)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log("\nEjercicio 6: ")
let mes = 8
if (mes == 1) {
    console.log("Enero")
} else if (mes == 2) {
    console.log("Febrero")
} else if (mes == 3) {
    console.log("Marzo")
} else if (mes == 4) {
    console.log("Abril")
} else if (mes == 5) {
    console.log("Mayo")
} else if (mes == 6) {
    console.log("Junio")
} else if (mes == 7) {
    console.log("Julio")
} else if (mes == 8) {
    console.log("Agosto")
} else if (mes == 9) {
    console.log("Septiembre")
} else if (mes == 10) {
    console.log("Octubre")
} else if (mes == 11) {
    console.log("Noviembre")
} else if (mes == 12) {
    console.log("Diciembre")
} else {
    console.log("valor incorrecto.")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log("\nEjercicio 7: ")
let dia = 30
if (mes == 1) {
    dia = 31
    console.log("Enero tiene: " + dia + " días.")
} else if (mes == 2) {
    dia = 28
    console.log("Febrero tiene: " + dia + " días.")
} else if (mes == 3) {
    dia = 31
    console.log("Marzo tiene: " + dia + " días.")
} else if (mes == 4) {
    dia = 30
    console.log("Abril tiene: " + dia + " días.")
} else if (mes == 5) {
    dia = 31
    console.log("Mayo tiene: " + dia + " días.")
} else if (mes == 6) {
    dia = 30
    console.log("Junio tiene: " + dia + " días.")
} else if (mes == 7) {
    dia = 31
    console.log("Julio tiene: " + dia + " días.")
} else if (mes == 8) {
    dia = 31
    console.log("Agosto tiene: " + dia + " días.")
} else if (mes == 9) {
    dia = 30
    console.log("Septiembre tiene: " + dia + " días.")
} else if (mes == 10) {
    dia = 31
    console.log("Octubre tiene: " + dia + " días.")
} else if (mes == 11) {
    dia = 30
    console.log("Noviembre tiene: " + dia + " días.")
} else if (mes == 12) {
    dia = 31
    console.log("Diciembre tiene: " + dia + " días.")
} else {
    console.log("No se ha introducido un mes válido.")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log("\nEjercicio 8: ")
let idioma = "kr"
switch (idioma) {
    case "es":
        console.log("Hola, ¿cómo estás?")
        break
    case "en":
        console.log("Hello, how are you?")
        break
    case "fr":
        console.log("Bonjour, comment vas-tu?")
        break
    case "jp":
        console.log("Konnichiwa, o genki desu ka?")
        break
    case "kr":
        console.log("Annyeonghaseyo, joheunmal haeyo?")
        break
    default:
        console.log("Idioma no reconocido.")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log("\nEjercicio 9: ")
let mesNuevo = 6
switch (mesNuevo) {
    case 1:
        console.log("Enero")
        break
    case 2:
        console.log("Febrero")
        break
    case 3:
        console.log("Marzo")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Mayo")
        break
    case 6:
        console.log("Junio")
        break
    case 7:
        console.log("Julio")
        break
    case 8:
        console.log("Agosto")
        break
    case 9:
        console.log("Septiembre")
        break
    case 10:
        console.log("Octubre")
        break
    case 11:
        console.log("Noviembre")
        break
    case 12:
        console.log("Diciembre")
        break
    default:
        console.log("Valor incorrecto")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
console.log("\nEjercicio 10: ")
let diaNuevo
switch (mesNuevo) {
    case 1:
        diaNuevo = 31
        console.log("Enero tiene " + diaNuevo + " días.")
        break
    case 2:
        diaNuevo = 28
        console.log("Febrero tiene " + diaNuevo + " días.")
        break
    case 3:
        diaNuevo = 31
        console.log("Marzo tiene " + diaNuevo + " días.")
        break
    case 4:
        diaNuevo = 30
        console.log("Abril tiene " + diaNuevo + " días.")
        break
    case 5:
        diaNuevo = 31
        console.log("Mayo tiene " + diaNuevo + " días.")
        break
    case 6:
        diaNuevo = 30
        console.log("Junio tiene " + diaNuevo + " días.")
        break
    case 7:
        diaNuevo = 31
        console.log("Julio tiene " + diaNuevo + " días.")
        break
    case 8:
        diaNuevo = 31
        console.log("Agosto tiene " + diaNuevo + " días.")
        break
    case 9:
        diaNuevo = 30
        console.log("Septiembre tiene " + diaNuevo + " días.")
        break
    case 10:
        diaNuevo = 31
        console.log("Octubre tiene " + diaNuevo + " días.")
        break
    case 11:
        diaNuevo = 30
        console.log("Noviembre tiene " + diaNuevo + " días.")
        break
    case 12:
        diaNuevo = 31
        console.log("Diciembre tiene " + diaNuevo + " días.")
        break
    default:
        console.log("No se ha introducido un mes válido.")
}
