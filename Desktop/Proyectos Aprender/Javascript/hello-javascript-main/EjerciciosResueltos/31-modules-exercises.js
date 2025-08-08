/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

/**@author Olga Macías */

// 1. Exporta una función
export function concatenar(palabra1, palabra2) {
    return palabra1 + " " + palabra2;
}

// 2. Exporta una constante
export const palabra = "Hola"

// 3. Exporta una clase
export class Departamento {
    constructor(nombre, ubicacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
}

// 4. Importa una función
import { concatenar } from "./31-modules-exercises"

// 5. Importa una constante
import { palabra } from "./31-modules-exercises"

// 6. Importa una clase
import { Departamento } from "./31-modules-exercises"

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function sumar() {
    return 5 + 5;
}
// export default const suma = 10; /* Como se ha visto en la lección, da error 
//                                 porque 'Un módulo no puede tener varias exportaciones 
//                                 predeterminadas', según informa el porpio IDE */

// export default class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }


// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import defaultImport from "./31-modules-exercises"
console.log(sumar()) /* Al igual que el ejercicio anterior, 
                    no se puede importar más de un elemento 
                    por defecto en el mismo fichero, pues da error */

// 9. Exporta una función, una constante y una clase desde una carpeta

// Ejercicio completado en ./ExportarImportar/exportar

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

// Ejercicio completado en ./ExportarImportar/importar