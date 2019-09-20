'use strict';

let DEFAULT_HP = 100;

function playerGenerator(name, attack, defense) {
    function displayMyPlayerInfo() {
        console.log(`My name is ${name}, I have ${attack} attack, ${defense} defense and ${hp} health points.`)
    }
    return {
        name: name,
        attack: attack,
        defense: defense,
        hp: DEFAULT_HP,
        displayMyPlayerInfo: displayMyPlayerInfo
    }
}

const p = playerGenerator("Knight", 4, 3);
p.displayMyPlayerInfo();