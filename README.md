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
	- [AbortController](#abortcontroller)
- [Intersection Observer](#intersectionobserver)
- [Visibility Change](#visibilitychange)
- [Service Workers](#serviceworkers)
- [Typescript](#typescript)
  - [Tipos Basicos](#tipos-basicos)
  - [Function](#function)
  - [Interface](#interface)

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
## Fetch
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
La forma de **configurar** el llamado es utilizar el **segundo** parámetro de fetch (), donde pasaremos un objeto con las opciones de configuracion que deseamos.

```javascript
fetch( url, config )
```

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

2020-04-06 22:32:58 Monday

### AbortController
AbortController te da los controles para poder detener las peticiones hechas con fetch().
AbortControler tiene un parametro llamado signal que se le pasa a fetch como segundo parametro y luego para detener la peticion simplemente llamamos al metodo AbortController.abort();
el metodo .abort() anula un request DOM que no se haya completado.
```javascript
let controller = new AbortController();
fetch(url, { signal: controller.signal })
```

<div align='right'> 
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
</div>

2020-04-10 16:05:47 Friday

## IntersectionObserver
### Links:
- #### [MDN](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API "MDN")
- #### [Platzi](https://platzi.com/clases/1642-javascript-profesional/22175-intersectionobserver/ "Platzi")

Permite configurar un funcion callback que es llamada cada vez que un elemento (target) intersecta con otro, ya se el viewport u otro elemento cualquiera (root). Usualmente queremos observar los cambios con respecto al viewport (para esto especificamos 'null' como elemento root).
El grado de intersection entre el target y el root se llama intersection ratio. Y es una representacion porcentual que va desde 0 a 1.

##### Creando un intersection observer

para crear un intersectin observer llamos a su constructor y le pasamos como parametros una funcion callback, que se ejecuta cada vez que un nivel (threshold) sea cruzado en una direccion o en la otra, y un objeto de configuración.

```javascript
var options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

var observer = new IntersectionObserver(callback, options);
```
threshold es un numero o un array de numeros que indican el porcentaje de visibilidad del elemento target a la cual la funcion callback va a ser llamada.

##### Determinando un objeto para ser obsevado

una vez ya tengamos el observer, necesitamos darle un elemento target para observar
```javascript
var target = document.querySelector('#listItem');
observer.observe(target);
```
#### Entries

La funcion callback recibe una lista de objetos llamda IntersectionObserverEntry y el observer, que describe la interseccion entre el target y el root en un momento dado

<div align='right'> 
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
</div>

2020-04-11 15:08:59 Saturday
## VisibilityChange
### Links:
- #### [Platzi](https://platzi.com/clases/1642-javascript-profesional/22176-visibilitychange/ "Platzi")

El **visibilityChange** forma parte del API del DOM llamado **Page Visibility** y nos deja saber si el elemento es visible.
```javascript
document.addEventListener('visibilitychange', handlerVisiblilityChange)
```
Es un evento que nos permite detectar cuando la pestaña esta siendo **usada** por el usuario o no a traves de **visibilityState.**
visibilityState tiene dos valores: visible o hidden;
```javascript
const isVisible = document.visibilityState === 'visible'
```
de esta manera la variable isVisible nos devuelve un booleano dependiendo de si la pestaña esta siendo usada o no.

2020-04-13 18:01:17 Monday
## ServiceWorkers
- #### [Google dev](https://developers.google.com/web/fundamentals/primers/service-workers "Google dev")

Es una secuencia de comandos que el navegador ejecuta separado de la pagina web. Lo realmente emocionante acerca de esta api es que permite el administrar expericiencias sin conexión, lo que permite tener mayor control sobre la expericiencia.

Un Service Worker (SW) es un proxy programable. Esto permite controlar la manera en que se procesan las solicitudes la pagina.

El SW tiene un ciclo de vida separado de la pagina web.

Si quieres instalar un service worker para tu sitio, debes registrarlo. Esto se realiza en el lenguaje JavaScript de tu página. Cuando registres un service worker, el navegador iniciará la etapa de instalación del proceso en segundo plano.

Por lo general, durante la etapa de instalación, te convendrá almacenar en caché algunos elementos estáticos. Si todos los archivos se almacenan correctamente en caché, se instalará el service worker. Si no se puede descargar o almacenar en caché alguno de los archivos, el paso de instalación fallará y el service worker no se activará (es decir, no se instalará). Si esto ocurre, no te preocupes; se realizará un nuevo intento la próxima vez. Sin embargo, si la instalación tiene éxito, podrás estar seguro de que dichos elementos estáticos estarán en la caché

Despues de su activacion el SW controlará todas las paginas web que esten a su alcance. Se necesita HTTPS para poder implemetarlo en un sitio web

#### Registro de un Service Worker
Para instalar un service worker, debes registrarlo en tu página para iniciar el proceso. De esta forma, se comunica al navegador dónde reside el archivo JavaScript de tu service worker.
```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
```
Es muy importante tener en cuenta la direccion del archivo sw.js porque esto determinara el scope y que eventos fetch podra identificar.
#### Instalación
Luego del registro, debemos instalar el service worker. Para esto, vamos a al archivo sw.js donde utilizaremos el evento install
```javascript
self.addEventListener('install', function(event) {
  // Perform install steps
});
```
en la devolucion de la llamada install debemos abrir un cache, cargar los archiivos la cache y asegurarnos de que los archivos fueron cargados en el cache o no.
```javascript
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
```
Aquí podrás ver que se llama a caches.open() con el nombre de caché deseado; después se llama a cache.addAll() y se pasa la matriz de archivos. Esta es una cadena de promesas (caches.open() y cache.addAll()). El método event.waitUntil() toma una promesa y la usa para saber cuánto tarda la instalación y si se realizó correctamente.
#### Solicitud de devolución y caché
```javascript
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
```
Aquí hemos definido nuestro evento fetch y en event.respondWith(), pasamos una promesa de caches.match(). Este método examina la solicitud y encuentra cualquier resultado almacenado en caché de cualquiera de los caché creados por tu service worker.

Si existe una respuesta, se devuelve el valor almacenado en caché. Si no existe, se devuelve el resultado de una llamada a fetch, que realizará una solicitud de red y devolverá los datos si se puede recuperar algo de la red. Este es un ejemplo simple y en él se usa cualquier recurso que hayamos almacenado en caché durante la instalación.
<div align='right'> 
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
</div>

2020-04-16 16:41:56 Thursday
# TypeScript

## Tipos Basicos
### Links:
- #### [Platzi](https://platzi.com/clases/1642-javascript-profesional/22179-tipos-basicos/ "Platzi")

En Typescript podemos asignar que tipo de valores va a contener una varible,
lo que nos va a permitir detectar errores mas rapido.
Si queremos anotar el tipo de variable lo anotamos al lado de la variable

- Boolean
```javascript
let boolean: boolean = true;
```

- Number
```javascript
let numerador: number = 4;
let denominador = 2;
```

-  String
```javascript
let nombre: string = 'santiago'
let saludo = `mi nombre es ${nombre}` // mi nombre es santiago
```

-  Arrays
```javascript
let people: string[] = []
people = ['isabela', 'mario']
```
```javascript
let age: number[] = []
age = [2, 3, 4]
```
```javascript
let peopleAndAge: Array< string | number > = []
peopleAndAge = [...people, ...age]
console.log(peopleAndAge); // ["isabela", "mario", 2, 3, 4]
```

- Any: se le asigna a la variable que puede, en un futuro, cambiar de tipo
```javascript
let comodin: any = 'joker'
comodin = 2
```

- object
```javascript
let someObject: object = {type: 'wild'}
```

- Enum es como crear un tipo de variable y el conjunto de valores que podemos asignarles
```javascript
enum color {
    rojo = 'Rojo',
    verde = 'Verde',
    azul = 'Azul'
}
let colorFavorito: color = color.rojo
console.log(colorFavorito); // rojo
```
 Cuando no le asignamos un valor como en el siguiente caso, las variables van a tomar los valores de 0, 1, 2, 3... etc
```javascript
enum color2 {
    rojo, // 0
    verde, // 1
    azul,  // 2
    amarillo // 3
}
console.log(color2.amarillo); // 3
```
<div align='right'> 
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
</div>

2020-04-16 22:52:24 Thursday
## Function
### Links:
- #### [Platzi](https://platzi.com/clases/1642-javascript-profesional/22180-funciones/ "Platzi")

De esta manera typescript sabe que el dato a regresar es un numero
```javascript
let add = (x: number, y: number) => x + y
```

Si queremos ser mas especificos podemos agregar el tipo al final del parentesis
```javascript
let add2 = (x: number, y: number): number => x + y
let createAdder = (a: number) => (b: number) => b + a;
const addOne = createAdder(1)
const addTwo = addOne(2)
console.log(addTwo); // 3
```

Si queremos crear una funcion donde uno de sus parametros sea opcional
agregamos ? antes de los dos puntos. Ej:
```javascript
const fullName = (firstName: string, lastName?: string) => `${firstName} ${lastName}`
const richard = fullName('Richard');
console.log(richard); // Richard undefined
```

Si deseamos que el parametro tenga un valor por defecto
lo agregamos despues del tipado
```javascript
const fullName2 = (firstName: string, lastName: string = 'Nieto') => `${firstName} ${lastName}`
const richard2 = fullName2('Richard');
console.log(richard2); // Richard Nieto
```
<div align='right'> 
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
</div>

2020-04-17 21:04:18 Friday
## Interface
### Links:
- #### [Platzi](https://platzi.com/clases/1642-javascript-profesional/22181-interfaces/ "Platzi")

Permiten **declarar** la forma **exacta** que tiene el **objeto**, no se pueden agregar ni quitar propiedades
```javascript
interface rectangulo {
    ancho: number
    alto: number
}
```
Las interfaces se vuelven **un tipo de dato** para los **objetos**
```javascript
let rect: rectangulo = {
    ancho: 4,
    alto: 5
}
```
De esta manera le estamos diciendo a la funcion que r es una variable de tipo rectangulo
```javascript
const area = (r: rectangulo) => r.alto * r.ancho;
const rectArea = area(rect);
console.log(`el area del rectangulo es: ${rectArea}`); // 20
```
 Es obligatorio pasarle todos los valores a las propiedades del objeto, para hacerlo opcional agregamos el ?
```javascript
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
```

<div align='right'> 
    <small><a href = '#tabla-de-contenido'>vovler al inicio</a></small>
</div>