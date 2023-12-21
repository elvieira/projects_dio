const read = require('readline-sync')

console.clear()
class itemMagico {
    constructor(tipoItem, danoItem, resistenciaItem) {
        this.tipo = tipoItem
        this.dano = danoItem
        this.resistencia = resistenciaItem
    }
    calcularDano() {
        //Exemplo de operador ternário = CONDIÇÃO ? TRUE : FALSE
        return this.tipo === 'arma' ? this.dano * 2 : this.dano
    }
}


const tipoItem = read.question("Digite o tipo do item: ")
const danoItem = parseInt(read.question("Digite o dano do item: "))
const resistenciaItem = parseInt(read.question("Digite a resistência do item: "))

let itemPersonalizado = new itemMagico(tipoItem, danoItem, resistenciaItem)

console.log(`Tipo: ${itemPersonalizado.tipo}`)
console.log(`Dano: ${itemPersonalizado.dano}`)
console.log(`Resistência: ${itemPersonalizado.resistencia}`)

const danoTotal = itemPersonalizado.calcularDano()
console.log(`Dano em combate: ${danoTotal}`)