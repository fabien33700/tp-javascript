'use strict';

function getMyPlayerRatio(player, number) {
    return player.attack - number
}


const DEFAULT_HP = 10;

module.exports = class Player {
    constructor (name, attack, defense) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = DEFAULT_HP;
    }

    fight(other) {
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
    displayMyPlayerInfo () {
        console.log(`My name is ${this.name}, I have ${this.attack} attack, ${this.defense} defense and ${this.hp} health points.`)
    }
}