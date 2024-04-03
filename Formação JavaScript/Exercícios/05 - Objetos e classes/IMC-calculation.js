/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC.
*/
const read = require('readline-sync')

class Person {
    name
    weight
    height

    constructor(name, weight, height) {
        this.name = name
        this.weight = weight
        this.height = height
    }

    transformText() {
        this.name = this.name.toLowerCase()
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    checkPoint(element) {
        if (element.includes(',')) {
            return Number(element.replace(',', '.'))
        } else {
            return Number(element)
        }
    }

    calculationIMC() {
        let imc = this.checkPoint(this.weight) / (this.checkPoint(this.height) * this.checkPoint(this.height))
        this.transformText()
        console.log()
        console.log(`O IMC de ${this.name} é ${imc.toFixed(1)}`)
        this.classifyIMC(imc.toFixed(1))
    }

    classifyIMC(imc) {
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
    }
}

let name = read.question('Digite seu nome: ')
let weight = read.question('Digite seu peso: ')
let height = read.question('Digite sua altura: ')

const person = new Person(name, weight, height)
person.calculationIMC()