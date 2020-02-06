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