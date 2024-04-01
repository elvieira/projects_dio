/*
O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave.
*/
const read = require('readline-sync')

console.log('Digite o peso e a altura do usuário: ')
let weight = read.question('Peso: ')
let height = read.question('Altura: ')

if (weight <= 0 || height <= 0) {
    console.log('Peso e altura inválidos')
    return
}

if (weight.includes(',')) {
    weight = weight.replace(',', '.')
}

if (height.includes(',')) {
    height = height.replace(',', '.')
}

let imc = Number(weight) / (Number(height) * Number(height))

console.log(`O IMC do usuário é: ${imc.toFixed(1)}`)

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal')
} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso')
} else if (imc >= 30 && imc <= 40) {
    console.log('Obeso')
} else {
    console.log('Obsesidade Grave')
}