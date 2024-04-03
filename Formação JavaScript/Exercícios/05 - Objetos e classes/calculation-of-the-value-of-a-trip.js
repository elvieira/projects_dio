/*
Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
const read = require('readline-sync')

class Car {
    brand
    color
    fuelExpense

    constructor(brand, color, fuelExpense) {
        this.brand = brand
        this.color = color
        this.fuelExpense = fuelExpense
    }

    calculateSpending(priceFuel, tripDistance) {
        if (priceFuel.includes(',')) {
            priceFuel = Number(priceFuel.replace(',', '.'))
        } else {
            priceFuel = Number(priceFuel)
        }
        
        let result = (priceFuel * (tripDistance / this.fuelExpense)).toFixed(2)
        
        if (result.includes('.')) {
            result = result.replace('.', ',')
        }

        this.showTravel(result)
    }

    transformText() {
        this.brand = this.brand.toLowerCase()
        this.brand = this.brand.charAt(0).toUpperCase() + this.brand.slice(1)
        this.color = this.color.toLowerCase()
    }

    showTravel(spent) {
        this.transformText()

        console.log()
        console.log(`Seu ${this.brand} ${this.color} gastará R$${spent} nessa viagem!`)
    }
}

let brand = read.question('Digite qual a marca do carro: ')
let color = read.question('Digite qual a cor do carro: ')
let fuelExpense = read.question('Digite o gasto médio de combustível do carro KM/l: ')
let tripDistance = Number(read.question('Digite a distância em KM da viagem: '))
let priceFuel = read.question('Digite o preço do combustível: R$')

const theCar = new Car(brand, color, fuelExpense)
theCar.calculateSpending(priceFuel, tripDistance)