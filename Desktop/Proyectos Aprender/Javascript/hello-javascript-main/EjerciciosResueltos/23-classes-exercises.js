/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

/**@author: Olga Macías */

// 1. Crea una clase que reciba dos propiedades
class Fruta {
    nombre
    color
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    // 2. Añade un método a la clase que utilice las propiedades
    madurar() {
        console.log(` ${this.nombre} está madurando`);
    }

    // 4. Añade un método estático a la primera clase
    static comer() {
        console.log("Hola, me están comiendo desde un método estático");
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let Fruta1 = new Fruta("Fresa", "Rojo");
console.log(Fruta1.nombre);
console.log(Fruta1.color);
Fruta1.madurar();

// 5. Haz uso del método estático
Fruta.comer()

// 6. Crea una clase que haga uso de herencia
class Kiwi extends Fruta {

    // 8. Modifica la clase con getters y setters para que use propiedades privadas
    #nombre
    #color
    #peso

    constructor(nombre, color, peso) {
        super(nombre, color);
        this.#nombre = nombre;
        this.#color = color;
        this.#peso = peso;
    }

    // 10. Sobrescribe un método de una clase que utilice herencia 
    madurar() {
        console.log(`Soy ${this.#nombre} y estoy madurando...`)
    }
    // 7. Crea una clase que haga uso de getters y setters
    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get color() {
        return this.#color;
    }

    set color(nuevoColor) {
        this.#color = nuevoColor;
    }

    get peso() {
        return this.#peso;
    }

    set peso(nuevoPeso) {
        this.#peso = nuevoPeso;
    }
}

// 9. Utiliza los get y set y muestra sus valores
let kiwi = new Kiwi("Kiwi", "Verde", 80);
console.log(kiwi.nombre)
console.log(kiwi.color)
kiwi.peso = 90
console.log(kiwi.peso)
kiwi.madurar()


