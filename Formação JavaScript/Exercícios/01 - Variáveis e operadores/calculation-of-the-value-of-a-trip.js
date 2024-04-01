/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const read = require('readline-sync')

let priceFuel = read.question('Digite o preço do combustível: R$')
let fuelExpense = Number(read.question('Digite o gasto médio de combustível do carro KM/l: '))
let tripDistance = Number(read.question('Digite a distância em KM da viagem: '))

if (priceFuel.includes(',')) {
    priceFuel = Number(priceFuel.replace(',', '.'))
} else {
    priceFuel = Number(priceFuel)
}

let result = (priceFuel * (tripDistance / fuelExpense)).toFixed(2)

if (result.includes('.')) {
    result = result.replace('.', ',')
}

console.log(`O total que será gasto na viagem será R$${result}`)