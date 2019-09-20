'use strict';

const playerGenerator = require('./playerGenerator');
const playerUtils = require('./playerUtils');

const player1 = playerGenerator("Player 1", 4, 3);
const player2 = playerGenerator("Player 2", 5, 1);

player1.displayMyPlayerInfo();
player2.displayMyPlayerInfo();
playerUtils.fight(player1, player2);
