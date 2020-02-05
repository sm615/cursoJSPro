import MediaPlayer from './MediaPlayer.js';
//import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        // new AutoPlay()

    ] })
video.onclick = () => player.togglePlay()


const playButton = document.getElementById('play_btn')
playButton.onclick = () => player.togglePlay()

const soundButton = document.getElementById('sound_btn')
soundButton.onclick = () => player.sound()

// call applay y bind no ayudan a cambiar el contexto de this


function caminar(metros, direccion) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y hoy caminé: ${metros}mts en dirección ${direccion}`);
}

const santiago = {
    nombre: 'Santiago',
    apellido: 'Mozo'
}

// CAll
// caminar.call(santiago, 400, 'norte') //el primer argumento que pasamos es el contexto de this, luego pasamos los argumentos de la funcion 

// APPLY 
// es similar a call, solo que los argumentos se pasan de manera ligeramente distinta

// caminar.apply(santiago, [40, 'norte']) // los parametros de la funcion se pasa como parte de un arreglo

// hay ocasiones en que es mas facil utilizar apply, por ejemplo, si ya tenemos los valores como parte de un arreglo

// const valores = [50, 'noreste']
// caminar.apply(santiago, valores)

/* recuerda
    call - valores separados por Coma
    apply - valores dentro de un Arreglo
*/

// Bind
// bind a diferencia de call y apply no va a llamar a la funcion automaticamente, solo va a contruir una nueva funcion con el this ya integrado

const daniel = {
    nombre: 'Daniel',
    apellido: 'Sanchez'
}

const danielCamina = caminar.bind(daniel) //aqui se esta declarando una nueva funcion en la cual se entrelaza caminar con el objeto daniel

danielCamina(40, 'norte') // aqui estamos invocando esa nueva funcion

// tambien podemos pasarle argumentos al bind

const danielCamina2 = caminar.bind(daniel, 5000, 'sur')
danielCamina2()

// o incluso de manera parcial

const danielCamina3 = caminar.bind(daniel, 300)
danielCamina3('oeste')

//cuando obtenemos elementos de html por su clase se crea un nodelist que es parecido a un array pero que no tiene alguno de sus metodos
//en estos caso podemos usar call, apply o bind para cambiar el contexto del array

// Array.prototype.forEach.call(__nodelist, funcion_ejecutar)