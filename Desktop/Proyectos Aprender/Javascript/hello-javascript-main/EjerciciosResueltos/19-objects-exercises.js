/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

/**@author Olga Macías*/

// 1. Crea un objeto con 3 propiedades
let guitarra = {
    nombre: "Yamaha",
    madera: "Cerezo",
    color: "Negro"
}

// 2. Accede y muestra su valor
console.log("Ejercicio 2: ")
console.log(guitarra)

// 3. Agrega una nueva propiedad
guitarra.cuerdas = "Nylon"

// 4. Elimina una de las 3 primeras propiedades
delete guitarra.color

// 5. Agrega una función e invócala
console.log("\nEjercicio 5: ")
guitarra.tocarGuitarra = function () {
    console.log("Estoy tocando la guitarra.")
}
guitarra.tocarGuitarra()

// 6. Itera las propiedades del objeto
console.log("\nEjercicio 6: ")
for (let key in guitarra) {
    console.log(key + ": " + guitarra[key])
}

// 7. Crea un objeto anidado
guitarra.pua = {
    marca: "Dunlop",
    color: "Amarillo",
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("\nEjercicio 8: ")
for (let key in guitarra.pua) {
    console.log(key + ":" + guitarra.pua[key])
}

// 9. Comprueba si los dos objetos creados son iguales
console.log("\nEjercicio 9: ")
console.log(guitarra == guitarra.pua)
console.log(guitarra === guitarra.pua)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("\nEjercicio 10: ")
console.log(guitarra.nombre == guitarra.madera)
console.log(guitarra.nombre === guitarra.madera)
// si se llaman igual sí que son iguales
guitarra.repuestoCuerda = "Nylon"
console.log(guitarra.repuestoCuerda == guitarra.cuerdas)
