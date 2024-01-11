const read = require('readline-sync')
console.clear()

let num1 = parseInt(read.question("Digite o nível do monstro: "))
let num2 = parseInt(read.question("Digite a dificuldade da batalha de 1 a 100: "))

if (num2 < 1 || num2 > 100) {
    console.log("Valor de dificuldade da batalha inválido!")
} else {
    const xpGanho = num1 * num2 * 100
    console.log(`Você ganhou ${xpGanho} XP!`)
}


