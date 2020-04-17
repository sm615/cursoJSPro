// Function

// De esta manera typescript sabe que el dato a regresar es un numero
let add = (x: number, y: number) => x + y

// Si queremos ser mas especificos podemos agregar el tipo al final del parentesis
let add2 = (x: number, y: number): number => x + y

let createAdder = (a: number) => (b: number) => b + a;

const addOne = createAdder(1)
const addTwo = addOne(2)

console.log(addTwo); // 3

// Si queremos crear una funcion donde uno de sus parametros sea opcional
// agregamos ? antes de los dos puntos. Ej:

const fullName = (firstName: string, lastName?: string) => `${firstName} ${lastName}`

const richard = fullName('Richard');

console.log(richard); // Richard undefined


// Si deseamos que el parametro tenga un valor por defecto
// lo agregamos despues del tipado

const fullName2 = (firstName: string, lastName: string = 'Nieto') => `${firstName} ${lastName}`

const richard2 = fullName2('Richard');

console.log(richard2); // Richard Nieto
