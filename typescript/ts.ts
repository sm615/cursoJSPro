// Tipos de datos en Typescript
// En Typescript podemos asignar que tipo de valores va a contener una varible
// si queremos anotar el tipo de variable lo anotamos al lado de la variable

// Boolean
let boolean: boolean = true;

// Number
let numerador: number = 4;
let denominador = 2;

// String
let nombre: string = 'santiago'
let saludo = `mi nombre es ${nombre}`

// Arrays
let people: string[] = []
people = ['isabela', 'mario']

let age: number[] = []
age = [2, 3, 4]

let peopleAndAge: Array< string | number > = []
peopleAndAge = [...people, ...age]

console.log(peopleAndAge); // ["isabela", "mario", 2, 3, 4]

// Any: se le asigna a la variable que puede, en un futuro, cambiar de tipo
let comodin: any = 'joker'
comodin = 2

// object
let someObject: object = {type: 'wild'}

/* enum es como crear un tipo de variable y el conjunto de valores que podemos asignarles
 *
 */
enum color {
    rojo = 'Rojo',
    verde = 'Verde',
    azul = 'Azul'
}

let colorFavorito: color = color.rojo

console.log(colorFavorito); // rojo

// Cuando no le asignamos un valor como en el siguiente caso, las variables van a tomar los valores de 0, 1, 2, 3... etc

enum color2 {
    rojo, // 0
    verde, // 1
    azul,  // 2
    amarillo // 3
}

console.log(color2.amarillo); // 3
