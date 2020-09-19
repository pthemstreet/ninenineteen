class Game {
    constructor() {
        this.sockets = {};
        this.players = {};
        this.torpedos = [];
        this.pings = [];
        this.lastUpdateTime = Date.now();
        this.shouldSendUpdate = false;
        setInterval(this.update.bind(this), 1000 / 60);
    }
}