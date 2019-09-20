const Player = require('./Player')
/*
function PayToWinPlayer(name, attack, defense) {
    this.name = name;
    this.attack = attack * 1.4;
    this.defense = defense;
    this.hp = Player.prototype.DEFAULT_HP;
}

PayToWinPlayer.prototype = Object.create(Player.prototype);

module.exports = PayToWinPlayer;

*/

module.exports = class PayToWinPlayer extends Player {

    constructor (name, attack, defense) {
        super(name, attack * 1.4, defense);
    }
}