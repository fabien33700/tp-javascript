const Player = require('./Player')

module.exports = class PayToWinPlayer extends Player {
    constructor (name, attack, defense) {
        super(name, attack * 1.4, defense);
    }
}