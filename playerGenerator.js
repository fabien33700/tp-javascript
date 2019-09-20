'use strict';

const DEFAULT_HP = 100;

const fight = require('./playerUtils').fight;

module.exports = function playerGenerator(name, attack, defense) {
    function displayMyPlayerInfo() {
        console.log(`My name is ${this.name}, I have ${this.attack} attack, ${this.defense} defense and ${this.hp} health points.`)
    }
    return {
        name: name,
        attack: attack,
        defense: defense,
        hp: DEFAULT_HP,
        displayMyPlayerInfo: displayMyPlayerInfo,
        fight: fight
    }
}
