/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const read = require('readline-sync')

let priceEthanol = read.question('Digite o preço do etanol: R$')
let priceGasoline = read.question('Digite o preço da gasolina: R$')
let typeFuel = read.question('Digite o tipo de combustível que está no seu carro, ETANOL ou GASOLINA: ').toUpperCase()
let fuelExpense = Number(read.question('Digite o gasto médio de combustível do carro KM/l: '))
let tripDistance = Number(read.question('Digite a distância em KM da viagem: '))

if (priceEthanol.includes(',') || priceGasoline.includes(',')) {
    priceEthanol = Number(priceEthanol.replace(',', '.'))
    priceGasoline = Number(priceGasoline.replace(',', '.'))
} else {
    priceEthanol = Number(priceEthanol)
    priceGasoline = Number(priceGasoline)
}

if (typeFuel === 'ETANOL') {
    let result = (priceEthanol * (tripDistance / fuelExpense)).toFixed(2)
    if (result.includes('.')) {
        result = result.replace('.', ',')
    }
    console.log(`O total que será gasto na viagem será R$${result}`)
} else if (typeFuel === 'GASOLINA') {
    let result = (priceGasoline * (tripDistance / fuelExpense)).toFixed(2)
    if (result.includes('.')) {
        result = result.replace('.', ',')
    }
    console.log(`O total que será gasto na viagem será R$${result}`)
} else {
    console.log('Tipo de combustível digitado inválido!')
}