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

// cuando una funcion incluye 'this' y la llamos directamente, el motor de js la interpreta dandola como referencia a window(ventana)
//this se refiere al objeto que esta ejecutando un pedazo o parte del codigo actualmente
// el modo estricto lo podemos activar con el string "use strict" en cualquier parte del texto

// en el siguiente ejemplo podemos ver como this hace referencia al objeto porque la funcion esta dentro del objeto
const person = {
    name: 'santiago',
    saludar: function () {
        console.log(`hola mi nombre es: ${this.name}`);
    }
}
/*person.saludar() */

// pero si sacamos esa funcion del objeto, accion (en este caso), no se esta llamando en el contexto del objeto,
// por lo tanto name no existe ya que solo se encuentra de declarado dentro del objeto persona  

const accion = person.saludar;
accion()

//this dentro de objetos o "clases" se va a referir a la instancia de esa clase