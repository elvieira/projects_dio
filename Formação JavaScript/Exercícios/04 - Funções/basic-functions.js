const read = require('readline-sync')

let name = read.question('Digite o seu nome: ')
let age = read.questionInt('Digite a sua idade: ')

function writeName(name) {
    console.log(`Olá ${name}, seja bem vindo!`)
    checkAge(age)
}

function checkAge(age) {
    if (age >= 18) {
        console.log('Você é maior de idade.')
    } else {
        console.log('Você é menor de idade.')
    }
}

console.log()
writeName(name)