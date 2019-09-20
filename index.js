'use strict';

const playerGenerator = require('./playerGenerator');
const getMyPlayerRatio = require('./playerUtils');

const player1 = playerGenerator("Player 1", 4, 3);
player1.displayMyPlayerInfo();

const player2 = playerGenerator("Player 2", 5, 1);
player2.displayMyPlayerInfo();
console.log(getMyPlayerRatio(player2, 4));

