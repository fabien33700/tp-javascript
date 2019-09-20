'use strict';

// const playerGenerator = require('./playerGenerator');

// const player1 = playerGenerator("Player 1", 4, 3);
// const player2 = playerGenerator("Player 2", 5, 1);

const Player = require('./Player');
const PayToWinPlayer = require('./PayToWinPlayer')

const player1 = new Player("Player 1", 4, 3);
const player2 = new Player("Player 2", 5, 1);

player1.displayMyPlayerInfo();
player2.displayMyPlayerInfo();
player1.fight(player2);

const player3 = new PayToWinPlayer("Richer than U, b**ch !", 4, 6);
player3.displayMyPlayerInfo();
