const read = require('readline-sync')

const quantidadeGolpes = parseInt(read.question("Digite a quantidade de golpes que você deseja dar: "))
let minerais = ["Pedra", "Carvão", "Ferro", "Diamante"]

for (let i = 1; i <= quantidadeGolpes; i++) {
    let minaIndex = i % minerais.length
    console.log(`${i}: ${minerais[minaIndex]}`)
}