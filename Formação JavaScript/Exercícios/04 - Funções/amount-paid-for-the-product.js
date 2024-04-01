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

function checkPoint(element, transform) {
    if (transform === ',') {
        if (element.includes(',')) {
            return Number(element.replace(',', '.'))
        } else {
            return Number(element)
        }
    } else {
        element = element.toString()
        if (element.includes('.')) {
            return element.replace('.', ',')
        }
    }
}

function checkPayment(paymentCondition) {
    if (paymentCondition === 1) {
        return applyDiscountOrAdditional(price, 0.1, null)
    } else if (paymentCondition === 2) {
        return applyDiscountOrAdditional(price, 0.15, null)
    } else {
        return applyDiscountOrAdditional(price, 0, 0.1)
    }
}

function applyDiscountOrAdditional(price, discount, additional) {
    if (additional === null) {
        return (price - (price * discount)).toFixed(2)
    } else {
        return (price + (price * additional)).toFixed(2)
    }
}

if (paymentCondition === 3) {
    console.log()
    console.log(`O valor a ser pago é: R$${price}`)
} else if (paymentCondition > 4) {
    console.log()
    console.log('Condição de pagamento inválida!')
} else {
    price = checkPoint(price, ',')
    price = checkPayment(paymentCondition)
    price = checkPoint(price, '.')
    console.log()
    console.log(`O valor a ser pago é: R$${price}`)
}