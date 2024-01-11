const read = require('readline-sync')
console.clear()

const posicaoInicial = parseInt(read.question("Digite a posição inicial do seu herói: "))
const totalPassos = parseInt(read.question("Digite o número de passos que o seu herói deve dar: "))

const posicaoFinal = posicaoInicial + totalPassos

console.log(`Posição final do heroi: ${posicaoFinal}`)