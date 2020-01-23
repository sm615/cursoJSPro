/* ----------------------- Scope ----------------------- */

/* Global Scope (alcance global):
las variables son accesibles desde el ambiente global (windows) */

/* Function Scope (alcance funcional):
las variables solo existen dentro de la funcion */

/* Block Scope (alcance de bloque):
las variables se pueden acceder solo dentro del bloque de codigo (codigo entre "{}") */

/* Modulo Scope (alcance modular): se agrega type = "modulo" a la etiqueta script
concepto nuevo, las variables estan limitadas al archivo donde viven, no se pueden acceder ni de la consola */

/* Podemos usar import y export

agregamos "nombre__" import from "ruta del archivo" 
y en el archivo que vamos a exportar escribimos export default "nombre__"
para exportar una variable escribimos el nombre entre {} en el import
export const doo = 'algo'
import { doo } from ...
*/