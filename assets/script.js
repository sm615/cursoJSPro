import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

let plugins = [
    new AutoPlay(),
    new AutoPause()
]

const video = document.querySelector("video")
const player = new MediaPlayer({ el: video, plugins: plugins })
video.onclick = () => player.togglePlay()


const playButton = document.getElementById('play_btn')
playButton.onclick = () => player.togglePlay()

const soundButton = document.getElementById('sound_btn')
soundButton.onclick = () => player.sound()

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch( error => {
        console.log(error.message);
    })
}