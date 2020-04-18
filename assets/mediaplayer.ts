class MediaPlayer
{
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config: any) {
        this.media = config.el
        this.plugins = config.plugins || [];
        this.initPlugins()
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
        
    }

    play() {
        this.media.play()
    }

    pause() {
        this.media.pause()
    }

    togglePlay() {
        this.media.paused?
            this.play()
            :this.pause()
    }

    mute() {
        this.media.muted = true;
    }

    unMute() {
        this.media.muted = false;
    }
    
    sound() {
        !this.media.muted?
            this.mute()
            :this.unMute()
    }
}

export {MediaPlayer}
