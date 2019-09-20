'use strict';

const playerGenerator = require('./playerGenerator');

const player1 = playerGenerator("Player 1", 4, 3);
const player2 = playerGenerator("Player 2", 5, 1);

player1.displayMyPlayerInfo();
player2.displayMyPlayerInfo();
player1.fight(player2);
