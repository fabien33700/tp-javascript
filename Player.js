'use strict';

module.exports = Player;

const DEFAULT_HP = 100;

function Player(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = DEFAULT_HP;
}

Player.prototype.fight = function (other) {
    const ratio1 = getMyPlayerRatio(this, other.defense);
    const ratio2 = getMyPlayerRatio(other, this.defense);
    
    this.ratio = ratio1;
    other.ratio = ratio2;
    let winner = (ratio1 >= ratio2) ? this : other;
    let looser = (ratio1 >= ratio2) ? other : this;

    looser.hp = 0;
    winner.hp = looser.ratio * (winner.hp / winner.ratio);
    winner.displayMyPlayerInfo();
}

Player.prototype.displayMyPlayerInfo = function () {
    console.log(`My name is ${this.name}, I have ${this.attack} attack, ${this.defense} defense and ${this.hp} health points.`)
}

Player.prototype.DEFAULT_HP = DEFAULT_HP;

function getMyPlayerRatio(player, number) {
    return player.attack - number
}