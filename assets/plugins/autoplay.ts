import { MediaPlayer } from "../mediaplayer"

class AutoPlay 
{
    constructor() {}
    run(player: MediaPlayer) {
        player.sound()
        player.media.paused?
            player.play()
            :player.pause()        
    }
}

export {AutoPlay}
