const video = document.querySelector("video")
const button = document.querySelector("button")

class MediaPlayer
{
    constructor(config) {
        this.media = config.el
    }
    play()
    {
        if (this.media.paused) {
            this.media.play()
        } else {
            this.media.pause()
        }
    }
}

const player = new MediaPlayer({ el: video });

button.onclick = () => player.play();