// Interface
// Permiten declarar la forma exacta que tiene el objeto
// no se pueden agregar ni quitar propiedades

interface rectangulo {
    ancho: number
    alto: number
}

// Las interfaces se vuelven un tipo de dato para los objetos

let rect: rectangulo = {
    ancho: 4,
    alto: 5
}

// De esta manera le estamos diciendo a la funcion que r es una variable de tipo rectangulo

const area = (r: rectangulo) => r.alto * r.ancho;
const rectArea = area(rect);

console.log(`el area del rectangulo es: ${rectArea}`); // 20

// Es obligatorio pasarle todos los valores a las propiedades del objeto, para hacerlo opcional agregamos el ?
interface rectangulo2 {
    ancho: number
    alto?: number
}

let rect2: rectangulo2 = {
    ancho: 4
}

const area2 = (r: rectangulo2) => r.alto * r.ancho;
const rectArea2 = area2(rect2);

console.log(`el area del rectangulo es: ${rectArea2}`); // NaN