'use strict';

function getMyPlayerRatio(player, number) {
    return player.attack - number
}

function fight(other) {
    const ratio1 = getMyPlayerRatio(this, other.defense);
    const ratio2 = getMyPlayerRatio(other, this.defense);

    const players = [
        { ... this, ratio: ratio1 },
        { ... other, ratio: ratio2 }
    ]
    let winner, looser;
    if (ratio1 >= ratio2) {
        [winner, looser] = players;
    } else {
        [looser, winner] = players;
    }

    looser.hp = 0;
    winner.hp = looser.ratio * (winner.hp / winner.ratio);

    winner.displayMyPlayerInfo();
}

module.exports = { 
    'getMyPlayerRatio': getMyPlayerRatio,
    'fight': fight
}