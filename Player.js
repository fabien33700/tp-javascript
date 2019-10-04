'use strict'

const rp = require('request-promise')
const baseUrl = "https://www.random.org/integers/"

const DEFAULT_HP = 10

function getMyPlayerRatio(player, number) {
    return player.attack - number
}

async function randomNumber(max) {
    return rp({
        url: baseUrl,
        qs: {
            num: 1,
            min: 1,
            max: max,
            col: 1,
            base: 10,
            format: "plain"
        }
    })
        .then(output => parseInt(output.replace("\n", "")))
        .catch(err => console.error(err))
}

async function randomSequence(max = 100, c = 10) {
    if (c === 0) return [max]

    return [max, ... await randomSequence(
        await randomNumber(Math.ceil(1.2 * max)), c - 1)]
}

function hofCleanValues(fn) {
    return (...params) =>
        fn(...params).then(nums => nums
            .filter(n => n >= 10)
            .map((n, i) => n * (n % 10 === i ? 2 : 1))
            .map(n => n / 100.0)
            .reduce((a, b) => a + b, 1)
        )
}

module.exports = class Player {
    constructor(name, attack, defense) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = DEFAULT_HP
    }

    async fight(other) {
        const sum1 = await hofCleanValues(randomSequence)()
        const sum2 = await hofCleanValues(randomSequence)()
        const ratio1 = getMyPlayerRatio(this, other.defense) * sum1
        const ratio2 = getMyPlayerRatio(other, this.defense) * sum2
        
        this.ratio = ratio1
        other.ratio = ratio2
        let winner = (ratio1 >= ratio2) ? this : other
        let looser = (ratio1 >= ratio2) ? other : this

        looser.hp = 0
        winner.hp = looser.ratio * (winner.hp / winner.ratio)
        console.log('Winner is : \n')
        winner.displayMyPlayerInfo()
    }
    displayMyPlayerInfo() {
        console.log(`My name is ${this.name}, I have ${this.attack} attack, ${this.defense} defense and ${this.hp} health points.`)
    }
}