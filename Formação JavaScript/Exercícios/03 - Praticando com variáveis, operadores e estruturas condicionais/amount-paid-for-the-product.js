/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/
const read = require('readline-sync')

console.log('Digite o preço de etiqueta do produto: ')
let price = read.question('Preço: R$')
console.log()

console.log('Digite a condição de pagamento: ')
console.log('1 - À vista no Débito, recebe 10% de desconto')
console.log('2 - À vista no Dinheiro ou PIX, recebe 15% de desconto')
console.log('3 - Em duas vezes, preço normal de etiqueta sem juros')
console.log('4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%')
let paymentCondition = read.questionInt('Condição: ')

if (price.includes(',')) {
    price = Number(price.replace(',', '.'))
} else {
    price = Number(price)
}

if (paymentCondition === 1) {
    price = (price - (price * 0.1)).toFixed(2)
} else if (paymentCondition === 2) {
    price = (price - (price * 0.15)).toFixed(2)
} else if (paymentCondition === 3) {
    price = price.toFixed(2)
} else if (paymentCondition === 4) {
    price = (price + (price * 0.1)).toFixed(2)
} else {
    console.log('Condição de pagamento inválida')
}

if (price.includes('.')) {
    price = price.replace('.', ',')
}

console.log()
console.log(`O valor a ser pago é: R$${price}`)