'use strict';

let DEFAULT_HP = 100;

function playerGenerator(name, attack, defense) {
    function displayMyPlayerInfo() {
        console.log(`My name is ${this.name}, I have ${this.attack} attack, ${this.defense} defense and ${this.hp} health points.`)
    }
    return {
        name: name,
        attack: attack,
        defense: defense,
        hp: DEFAULT_HP,
        displayMyPlayerInfo: displayMyPlayerInfo
    }
}

const player1 = playerGenerator("Player 1", 4, 3);
player1.displayMyPlayerInfo();

const player2 = playerGenerator("Player 2", 5, 1);
player2.displayMyPlayerInfo();