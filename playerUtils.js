'use strict';

module.exports = { 
    'getMyPlayerRatio': function (player, number) {
        return player.attack - number
    },
    'fight': function (player1, player2) {
        const ratio1 = this.getMyPlayerRatio.call({}, player1, player2.defense);
        const ratio2 = this.getMyPlayerRatio.call({}, player2, player1.defense);

        const players = [
            { ... player1, ratio: ratio1 },
            { ... player2, ratio: ratio2 }
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
}