class AutoPause {
    constructor() {
        // al utilizar bind de esta manera unimos this a la instancia del objeto
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisiblilityChange = this.handlerVisiblilityChange.bind(this)
        this.pausedByVisibility = false
    }
    run(player){
        this.player = player
        // como es intersection observer el que esta llamando a la funcion play, tenemos que unir this a la instancia del objeto y no al intersectionOBserver
        const observer = new IntersectionObserver(this.handlerIntersection, { 
            threshold: 0.5
        })
        observer.observe(player.media)

        document.addEventListener('visibilitychange', this.handlerVisiblilityChange)
    }
    handlerIntersection(entries) {
            const entry = entries[0]
            // isIntersecting es un booleano que, en este caso, nos dice si el video esta en pantalla
            entry.isIntersecting? 
                this.player.play()
                :this.player.pause()
    }
    handlerVisiblilityChange() {
            const isVisible = document.visibilityState === 'visible'
            if (isVisible) {
                if (this.pausedByVisibility) {
                    this.player.play()
                }
            } else {
                this.player.media.paused?
                    this.pausedByVisibility = false
                    :this.pausedByVisibility = true
                this.player.pause()
            }
    }
}
export {AutoPause}