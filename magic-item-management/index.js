const read = require('readline-sync')

console.clear()
class itemMagico {
    constructor(tipoItem, danoItem, resistenciaItem) {
        this.tipo = tipoItem
        this.dano = danoItem
        this.resistencia = resistenciaItem
    }
}

function calcularDano() {
    return tipoItem === 'arma' ? danoItem * 2 : danoItem
}

const tipoItem = read.question("Digite o tipo do item: ")
const danoItem = parseInt(read.question("Digite o dano do item: "))
const resistenciaItem = parseInt(read.question("Digite a resistência do item: "))

var itemPersonalizado = {
    tipo: tipoItem,
    dano: danoItem,
    resistencia: resistenciaItem,
}

console.log(`Tipo: ${itemPersonalizado.tipo}`)
console.log(`Dano: ${itemPersonalizado.dano}`)
console.log(`Resistência: ${itemPersonalizado.resistencia}`)

const danoTotal = calcularDano()
console.log(`Dano em combate: ${danoTotal}`)