/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

/**@author Olga Macías */

/* NOTA:  El orden de los ejercicios varía para poder ejecutar correctamente el programa */

// 4. Crea una excepción personalizada
class PersonaException extends Error {
    constructor(mensaje) {
        super(mensaje);
    }
}

// 1. Captura una excepción utilizando try-catch
class Persona {
    constructor(edad) {
        if (typeof edad !== "number") {
            throw new PersonaException("La edad debe ser un número");
        }

        this.edad = edad;
    }
}
console.log("Ejercicio 1: ")
let persona = new Persona(28);
try {
    persona.nombre.toUpperCase()
} catch (error) {
    console.log("Error: ", error.message)
}

// 5. Lanza una excepción personalizada
console.log("\nEjercicio 5: ")
try {
    persona = new Persona("a");
    console.log(persona.edad)
} catch (error) {
    console.log("Error de excepción personalizada: ", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally
console.log("\nEjercicio 2: ")
persona = new Persona(28);
try {
    persona.nombre.toUpperCase()
} catch (error) {
    console.log("Error: ", error.message)
}
finally {
    console.log("Finally se ejecuta igualmente")
}

// 3. Lanza una excepción genérica
console.log("\nEjercicio 3: ")
persona = new Persona(28);
try {
    persona.nombre.toUpperCase()
} catch (error) {
    console.log("Error de excepción genérica: ", error.message)
}

// 6. Lanza varias excepciones según una lógica definida
class ErrorSuma extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorSuma";
    }
}

console.log("\nEjercicio 6: ");

function suma(numero1, numero2) {
    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
        throw new ErrorSuma("Sólo se admiten números.");
    }
    if (numero1 === 0 || numero2 === 0) {
        throw new ErrorSuma("No se admiten ceros.");
    }
    return numero1 + numero2;
}

// Caso 1: válido
try {
    let resultado = suma(10, 5);
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Error:", error.message);
}

// Caso 2: tipo incorrecto
try {
    let resultado = suma("a", 5);
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Error:", error.message);
}

// Caso 3: con cero
try {
    let resultado = suma(0, 5);
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Error:", error.message);
}


// 7. Captura varias excepciones en un mismo try-catch
class TipoDatoError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "TipoDatoError";
    }
}

class ValorCeroError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ValorCeroError";
    }
}

function suma7(numero1, numero2) {
    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
        throw new TipoDatoError("Sólo se admiten números.");
    }
    if (numero1 === 0 || numero2 === 0) {
        throw new ValorCeroError("No se admiten ceros.");
    }
    return numero1 + numero2;
}

console.log("\nEjercicio 7: ")
// Caso 1: válido
try {
    let resultado = suma7(10, 5);
    console.log("Resultado:", resultado);
} catch (error) {
    if (error instanceof TipoDatoError) {
        console.log("Error de tipo:", error.message);
    } else if (error instanceof ValorCeroError) {
        console.log("Error valor cero:", error.message);
    } else {
        console.log("Error:", error.message);
    }
}

// Caso 2: tipo incorrecto
try {
    let resultado = suma7("a", 5);
    console.log("Resultado:", resultado);
} catch (error) {
    if (error instanceof TipoDatoError) {
        console.log("Error de tipo:", error.message);
    } else if (error instanceof ValorCeroError) {
        console.log("Error valor cero:", error.message);
    } else {
        console.log("Error:", error.message);
    }
}

// Caso 3: valor cero
try {
    let resultado = suma7(0, 5);
    console.log("Resultado:", resultado);
} catch (error) {
    if (error instanceof TipoDatoError) {
        console.log("Error de tipo:", error.message);
    } else if (error instanceof ValorCeroError) {
        console.log("Error valor cero:", error.message);
    } else {
        console.log("Error:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("\nEjercicio 8: ")
let arrayEnteros = [1, "a", null, 4, 5, 6];
let arrayDecimales = [];

for (let i = 0; i < arrayEnteros.length; i++) {
    try {
        let resultado = parseFloat(arrayEnteros[i]);

        if (isNaN(resultado)) {
            throw new Error(`No se puede convertir "${arrayEnteros[i]}" a número`);
        }

        arrayDecimales.push(resultado);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
console.log("Array final:", arrayDecimales)

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropiedadException extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "PropiedadException";
    }
}

function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {
        throw new PropiedadException(`La propiedad '${propiedad}' no existe`);
    }
}

let persona2 = new Persona(28);
console.log("\nEjercicio 9: ")

try {
    verificarPropiedad(persona2, "nombre");  // la propiedad debe ir como string
    console.log("La propiedad existe.");
} catch (error) {
    console.log("Error:", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function verificarIntentos(objeto, propiedades, maxIntentos = 10) {
    let intentos = 0;
    for (let i = 0; i < propiedades.length && intentos < maxIntentos; i++) {
        try {
            verificarPropiedad(objeto, propiedades[i]);
            console.log(`La propiedad '${propiedades[i]}' existe :)`);
            break;
        } catch (error) {
            intentos++;
            console.log(`Intento ${intentos} fallido: ${error.message} :( Reintentando...`);
        }
    }
    if (intentos === maxIntentos) {
        console.log(`Se agotaron los intentos. Ninguna propiedad existe en el objeto.`);
    }
}

let persona3 = new Persona(28);
let propiedadesAProbar = ["peso", "altura", "edad"];

console.log("\nEjercicio 10: ")
verificarIntentos(persona2, propiedadesAProbar);


