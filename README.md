<div align='center'> 
    <h1>Curso Profesional de JS en Platzi</h1>
</div>

## Tabla de contenido
- [Promesas](#promesas)
- [Getters y Setters](#getters-y-setters)
- [Proxys](#proxys)
- [Generators](#generators)

2020-03-18 21:40:59 Wednesday
## Promesas
### Links:
- #### [Platzi](https://platzi.com/clases/1642-javascript-profesional/22170-promesas/ "Clase")
- #### [Youtube](https://www.youtube.com/watch?v=Q3HtXuDEy5s "Youtube")

### Async-Await
Async-await lo utilizamos en funciones donde se hagan llamadas de manera asincrona, con Async le decimos al programa que la funcion es asincrona y con await le decimos que debe esperar a que se resuelva una promesa.

    async function () {
    	const valor = await taskOne()
    }
- **SECUENCIAL**
Cuando realizamos un llamado de manera secuencial, se van resolviendo los llamados de manera lineal, **uno despues del otro**, asi que se **suman los tiempos** de ejecucion de cada tarea.
**Ejemplo:** Tarea1 toma 2 segundos y la Tarea2 toma 4 segundos el tiempo total de ejecucion serian 6 segundos aprox.

- **PARALELO**
Cuando utilizamos promesas de manera paralela se hacen los llamados **al mismo tiempo** y se espera a que todas las promesas se resuelvan correctamente, **si una de ellas lanza un error**, se **rechazan todas** las promesas inmediatamente.
Utilizamos ``Promise.all()`` y le pasamos un **arreglo** con las promesas que queremos resolver.
Tambien podemos usar ``Promise.race()`` para que nos retorne solo la **primera** promesa que se resuelva exitosamente.

<div align='right'> 
    <small><a href = '##tabla-de-contenido'>vovler al inicio</a></small>
</div>

2020-03-22 21:05:14 Sunday
## Getters y Setters
### Links:
- ####  [Platzi](https://platzi.com/clases/1642-javascript-profesional/22171-getters-y-setters/ "Platzi")
- #### [Articulo](https://www.hongkiat.com/blog/getters-setters-javascript/ "Articulo")

**Getters** y **Setters** son funciones o metodos que permiten **obtener** o **establecer** propiedades. 
Al utilizar getters y setters **escondemos** la informacion para que no pueda ser **accedida** por **otro** codigo y terminemos modificandola accidentalmente.
Son muy usados cuando se va **aplicar** cierta operacion, como la validacion, sobre la informacion **antes** de guardarla o mostrarla. Ej:

    var obj = {
      n: 67,
      get id() {
          return 'The ID is: ' + this.n;
      },
      set id(val) {
          if (typeof val === 'number')
              this.n = val;
      }
    }
     
    console.log(obj.id);
    // "The ID is: 67"
     
    obj.id = 893;
     
    console.log(obj.id);
    // "The ID is: 893"
     
    obj.id = 'hello';
     
    console.log(obj.id);
    // "The ID is: 893"

<div align='right'> 
    <small><a href = '##tabla-de-contenido'>vovler al inicio</a></small>
</div>

2020-03-25 21:42:50 Wednesday
## Proxys
### Links:
- #### [Platzi](https://platzi.com/clases/1642-javascript-profesional/22172-proxy/ "Platzi")
- #### [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy "MDN")

**var p = new Proxy( target, handler )**

Un objeto **TARGET** (puede ser cualquier órden de objetos, incluyendo un array nativa, funcion o incluso otro proxy) o función que contenga el Proxy; es sobre el cual se va a realizar las validaciones del handler

**HANDLER** un objeto cuyas propiedades son funciones que definen el comportamiento del proxy cuando una operación es realizada en él

El método **Object.keys()** devuelve un array de los nombres de la propiedades de un objeto, en el mismo orden como se obtienen en un loop norma

<div align='right'> 
    <small><a href = '##tabla-de-contenido'>vovler al inicio</a></small>
</div>

## Generators
### Links:
- ####  [Platzi](https://platzi.com/clases/1642-javascript-profesional/22173-generators/ "Platzi")
- #### [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/function* "MDN")

Los generadores son funciones especiales de las que se puede entrar y salir, en otras palabras empezar a ejecutar y luego parar para seguir con otra parte del codigo. Su contexto (ambito de las variables) sera recordado, es decir, que tiene en cuenta el scope. 

La llamada a una función generadora **no** ejecuta su cuerpo inmediatamente; se devuelve un objeto iterador para la función en su lugar. Cuando el metodo **next()** del iterador es llamado , el cuerpo de la función generadora es **ejecutado** hasta la **primera** expresión **yield**, la cual especifica el **valor** que será retornado por el iterador o con, yield*, delega a otra función generadora. El método next() **retorna** un objeto con una **propiedad** **value** que contiene el **valor** bajo el operador yield y una propiedad **done** que indica, con un **booleano**, si la función generadora ha hecho yield al **último** valor.

    function* anotherGenerator(i) {
      yield i + 1;
      yield i + 2;
      yield i + 3;
    }
    
    function* generator(i){
      yield i;
      yield* anotherGenerator(i);
      yield i + 10;
    }
    
    var gen = generator(10);
    
    console.log(gen.next().value); // 10
    console.log(gen.next().value); // 11
    console.log(gen.next().value); // 12
    console.log(gen.next().value); // 13
    console.log(gen.next().value); // 20
    
<div align='right'> 
    <small><a href = '##tabla-de-contenido'>vovler al inicio</a></small>
</div>
