# cursoJSPro
Curso Profesional de JS en Platzi

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