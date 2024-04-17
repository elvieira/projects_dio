/*
Crie um programa que dado um número imprima a sua tabuada.
*/
const read = require('readline-sync')

console.log('PRONTO PARA FAZER SUA TABUADA?')
let multiplier = Number(read.question('Digite o número do multiplicador: '))
let repeater = Number(read.question('Digite o número de multiplicações que você quer: '))


for (i = 0; i <= repeater; i++) {
    console.log(`${i} X ${multiplier} = ${i * multiplier}`)
}