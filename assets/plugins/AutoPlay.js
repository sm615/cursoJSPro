class AutoPlay 
{
    constructor() {}
    run(player) {
        player.sound()
        player.paused?
            player.play()
            :player.pause()        
    }
}

export {AutoPlay}
