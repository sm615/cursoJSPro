class MediaPlayer
{
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
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

export default MediaPlayer