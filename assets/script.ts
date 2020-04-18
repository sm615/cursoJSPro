import { MediaPlayer } from './mediaplayer';
import { AutoPlay } from './plugins/autoplay'
import { AutoPause } from './plugins/autopause'

const plugins = [
    new AutoPause(),
    new AutoPlay(),
]

const video = document.querySelector("video")
const player = new MediaPlayer({ el: video, plugins: plugins })
video.onclick = () => player.togglePlay()


const playButton: HTMLElement = document.getElementById('play_btn')
playButton.onclick = () => player.togglePlay()

const soundButton: HTMLElement = document.getElementById('sound_btn')
soundButton.onclick = () => player.sound()

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch( error => {
        console.log(error.message);
    })
}