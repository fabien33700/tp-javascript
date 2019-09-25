'use strict'

const rp = require('request-promise')
const baseUrl = "https://www.random.org/integers/"

const DEBUG = false
const DEFAULT_HP = 10

function getMyPlayerRatio(player, number) {
    return player.attack - number
}

function randomNumber(min, max) {
    return rp({
        url: baseUrl,
        qs: {
            num: 1,
            min: min,
            max: max,
            col: 1,
            base: 10,
            format: "plain"
        }
    })
    .then(output => parseInt(output.replace("\n", "")))
    .catch(err => console.error(err))
}

function randomSequence() {
    const ps = [Promise.resolve(100)]
    for (let i = 0; i < 10; i++) {
        const p = ps[ps.length-1]
            .then(n => randomNumber(1, Math.ceil(n * 1.2)))
        ps.push(p)
    }
    return Promise.all(ps).catch(console.error)
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
    constructor (name, attack, defense) {
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
    displayMyPlayerInfo () {
        console.log(`My name is ${this.name}, I have ${this.attack} attack, ${this.defense} defense and ${this.hp} health points.`)
    }
}