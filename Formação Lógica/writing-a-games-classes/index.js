const read = require('readline-sync')

console.clear()
class hero {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nome = nomeHeroi
        this.idade = idadeHeroi
        this.tipo = tipoHeroi
    }
    transformar() {
        return this.tipo[0].toUpperCase() + this.tipo.substring(1)
    }
    atacar() {
        if (this.tipo === "guerreiro") {
            return "espada"
        } else if (this.tipo === "mago") {
            return "magia"
        } else if (this.tipo === "monge") {
            return "artes marciais"
        } else {
            return "shuriken"
        }
    }
}

let nome = read.question("Digite o nome do seu herói: ")
let idade = read.question("Digite a idade do seu herói: ")
console.log("Dentre os tipos de herói: guerreiro, mago, monge e ninja")
let tipo = read.question("Digite o tipo do seu heroi: ")

var meuHeroi = new hero(nome, idade, tipo)
const newTipo = meuHeroi.transformar()
const ataque = meuHeroi.atacar()
console.log(`O ${newTipo} ${meuHeroi.nome}, de ${meuHeroi.idade} anos, atacou usando ${ataque}`)