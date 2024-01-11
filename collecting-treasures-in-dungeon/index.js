const read = require('readline-sync')
console.clear()

const totalSalas = parseInt(read.question("Digite o número total de salas no dungeon: "))

const salasComTesouro = [2, 4, 7]
const salasComMonstro = [3, 6, 8]

for (let sala = 1; sala <= totalSalas; sala++) {
    const temTesouro = salasComTesouro.includes(sala)
    const temMonstro = salasComMonstro.includes(sala)

    if (temTesouro === true) {
        console.log(`Tesouro na sala ${sala}!`)
    } else if (temMonstro === true) {
        console.log(`Monstro na sala ${sala}!`)
    }
}