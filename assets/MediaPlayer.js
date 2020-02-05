class MediaPlayer
{
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || [];

        
        this._initPlugins()
    }
    _initPlugins = function () {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }
    togglePlay()
    {
        if (this.media.paused) {
            this.media.play()
        } else {
            this.media.pause()
        }
    }
    mute()
    {
        this.media.muted = true;
    }
    unMute()
    {
        this.media.muted = false;
    }
    sound()
    {
        if (!this.media.muted) {
            this.mute()
        } else {
            this.unMute()
        }
    }
}

export default MediaPlayer