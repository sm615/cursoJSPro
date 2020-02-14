/* import MediaPlayer from './MediaPlayer.js';
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
 */

//  Para conocer el proto padre de un objeto escribimos object.getPrototypeOf(__objeto)
/* cuando tenemos: 'algunObjeto.prototype.algo' estamos definiendo las propiedades que van a heredar todas las instancias del objeto */
/* cuando tenemos: 'algunObjeto.[[prototype]] algunObjeto hereda las propiedades de prototype*/

/* -------------------------------- Event Loop -------------------------------- */

/* js utiliza dos estructuras: el stack y memory heap */
/* stack es la zona donde js guarda el rastro de donde esta el programa
el memory heap es donde se guarda infomacion acerca de las variables el scope etc */

/* queue ("fila") es tipo fifo (first in, first out) */
/* event loop de la prioridad a las microtask luego a las task en la cola */