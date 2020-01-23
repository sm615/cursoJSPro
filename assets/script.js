const video = document.querySelector("video")
const button = document.querySelector("button")

class MediaPlayer
{
    constructor(config) {
        this.media = config.el
    }
    
    togglePlay()
    {
        if (this.media.paused) {
            this.media.play()
        } else {
            this.media.pause()
        }
    }
}

const player = new MediaPlayer({ el: video });

button.onclick = () => player.togglePlay();

/* ----------------------Cómo llega un script al navegador ----------------------*/

/* atributo async en los scripts externos permite que el DOM se siga cargando mientras hacemos la peticion del script externo
por ejemplo: google analytics; una vez se resulva la peticion, se detiene la carga del DOM y se ejecuta el js para luego
seguir con la carga del DOM */

/* atributo defer: este atributo va a dejar la ejecucion del archivo js hasta el final, la peticion es asincrona 
pero deja la ejecucion al final */