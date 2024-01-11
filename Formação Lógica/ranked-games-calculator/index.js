const read = require('readline-sync')

console.clear()
let vitorias = Number(read.question("Digite o número de vitórias do seu herói: "))
let derrotas = Number(read.question("Digite o número de derrotas do seu herói: "))
let saldo = calcularVitorias(vitorias, derrotas)
let nivelDoHeroi

switch (true) {
    case (saldo <= 10):
        nivelDoHeroi = "Ferro"
        break
    case (saldo > 10 && saldo <= 20):
        nivelDoHeroi = "Bronze"
        break
    case (saldo > 20 && saldo <= 50):
        nivelDoHeroi = "Prata"
        break
    case (saldo > 50 && saldo <= 80):
        nivelDoHeroi = "Ouro"
        break
    case (saldo > 80 && saldo <= 90):
        nivelDoHeroi = "Diamante"
        break
    case (saldo > 90 && saldo <= 100):
        nivelDoHeroi = "Lendário"
        break
    case (saldo > 100):
        nivelDoHeroi = "Imortal"
        break
}

console.log(`O herói tem o saldo de ${saldo} vitórias e está no nível ${nivelDoHeroi}!`)

function calcularVitorias(vit, der){
    let saldoTotal = vit - der
    return saldoTotal
}