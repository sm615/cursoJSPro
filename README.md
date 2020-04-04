<div align='center'> 
    <h1>Curso Profesional de JS en Platzi</h1>
</div>

## Tabla de contenido
- [Promesas](#promesas)
- [Getters y Setters](#getters-y-setters)
- [Proxys](#proxys)
- [Generators](#generators)
- [Fetch](#fetch)
	- [Response](#response)
	- [Request](#request)

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
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
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
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
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
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
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
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
</div>

2020-04-03 22:37:18 Friday
## fetch
### Links:
- #### [Platzi](https://platzi.com/clases/1642-javascript-profesional/22174-fetch-como-cancelar-peticiones/ "Platzi")
- #### [API fetch](https://www.todojs.com/api-fetch-el-nuevo-estandar-que-permite-hacer-llamadas-http/ "API fetch")
- #### [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response "Response")
- #### [Headers](https://developer.mozilla.org/es/docs/Web/API/Headers "Headers")

utilizamos **fetch()** para hacer peticiones o llamadas **HTTP** con un diseño moderno, **basado en promesas**, con mas flexibilidad y un mayor control.
fetch devuelve un promesa, y para obtener el body o cuerpo del objeto debemos obtener una segunda promesa mediante los metodos del objetos response.

API fetch() básico

```javascript
fetch('https://httpbin.org/ip')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
```
cuando no indicamos que metodo utilizar se considera el metodo **GET** por defecto.
La forma de **configurar** el llamado es utilizar el **segundo** parámetro de fetch (), donde pasaremos un objeto con las opciones

```javascript
fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'a=1&b=2'
    })
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
```
Las opciones que podemos configurar son:

- **method**: método a utilizar
- **headers:** cabeceras que se deben enviar (ver objeto Headers).
- **body:** cuerpo que se envía al servidor, que puede ser una cadena, un objecto Blob, BufferSource, FormData o URLSearchParams.
- **mode:** modo del la solicitud: ‘cors’, ‘no-cors’, ‘same-origin’, ‘navigate’.
- **credentials:** credenciales utilizadas: ‘omit’, ‘same-origin’, ‘include’.
- **cache:** forma de utilización de la caché: ‘default’, ‘no-store’, ‘reload’, ‘no-cache’, ‘force-cache’, ‘only-if-cached’.
- **redirect:** forma de gestionar la redirección: ‘follow’, ‘error’, ‘manual’.
- **referrer:** valor utilizado como referrer: ‘client’, ‘no-referrer’ una URL.
- **referrerPolicy:** especifica el valor de la cabecera referer: ‘no-referrer’, ‘no-referrer-when-downgrade’, ‘origin’, ‘origin-when-cross-origin’, ‘unsafe-url’.
- **integrity:** valor de integridad de la solicitud.

### Response
como resultado de fetch recibimos un **objeto** Response. este objeto es la respuesta del sevidor a nuestro llamado.
el contenido del body no esta disponible directamente en este objeto por lo que usamos uno de sus metodos para realizar otra promesa y asi recibir el valor enviado por el servidor.
#### Propiedades
- **Response.headers:** objeto headers asociado al response
- **Response.ok:** un boleano que indica si el response fue exitoso
- **Reponse.redirected:** boleano que indica si el response es resultado de una redirección.
- **Response.status:** el codigo de estado del response. (Sera 200 si es exitosa).
- **Response.statusText:** el mensaje de estatus correspondiente al codigo de estado. (Sera ok para 200).
- **Response.type:** el tipo de respuesta
- **Response.url:** contiene la URL de la respuesta

#### Metodos
- **Response.clone()** crea un clon del objeto response
- **response.error()** devuelve un objeto response asociado a un error de red
- **response.redirect()** crea un nuevo response con un URL diferente
- **response.text()** para que nos devuelve el contenido en formato texto
- **response.json()** para que lo devuelva como objeto Javascript
- **response.arrayBuffer()** para obtenerlo como ArrayBuffer
- **response.blob()** como valor que podemos manejar con URL.createObjectURL()
- **response.formData()** para obtenerlos como FormData.

### Request
es una forma alternativa de **configurar** el **comportamiento** de fecth. Representa una **solicitud** de respuesta. Podemos crear un objeto Request y pasarlo como parametro a fetch.
el constructo de request recibe dos parámetros: la URL y el objetos con las opciones.
```javascript
var request = new Request('https://httpbin.org/get', {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        cache: 'only-if-cached',
        referrerPolicy: 'no-referrer'
    });
console.log('request =', request);
fetch(request)
    .then(function(response) {
        console.log('response =', response);
        return response.text();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
```
#### Propiedades
- **Request.method:** contiene el metodo de la solicitud.
- **Request.url:** contiene la URL de la solicitud.
- **Request.headers:** contiene el objeto asociado de la solicitud de Headers.
- **Request.referrer:** contiene la referencia de la solicitud.
- **Request.referrerPolicy:** contiene la politica de  referencia de la solicitud.
- **Request.mode:** contiene el modo de la solicitud.
- **Request.credentials:** contiene las credenciales de la solitud.
- **Request.redirect:** contiene el modo de como son manipuladas las redirecciones. puedes ser follow, error, o manual.
- **Request.cache:** contiene el modo de cache de la solicitud.

<div align='right'> 
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
</div>
