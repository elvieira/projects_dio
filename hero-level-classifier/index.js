const read = require('readline-sync')

console.clear()
let nome = read.question("Digite o seu nome: ")
let exp = Number(read.question("Digite a quantidade de experiência do seu herói: "))

if (exp <= 1750) {
    console.log("Olá " + nome + ", a classificação atual do seu herói, com " + exp + "XP, é de nível FERRO!")
} else if (exp >= 1751 && exp <= 3500) {
    console.log("Olá " + nome + ", a classificação atual do seu herói, com " + exp + "XP, é de nível BRONZE!")
} else if (exp >= 3501 && exp <= 5250) {
    console.log("Olá " + nome + ", a classificação atual do seu herói, com " + exp + "XP, é de nível PRATA!")
} else if (exp >= 5251 && exp <= 7000) {
    console.log("Olá " + nome + ", a classificação atual do seu herói, com " + exp + "XP, é de nível OURO!")
} else if (exp >= 7001 && exp <= 8000) {
    console.log("Olá " + nome + ", a classificação atual do seu herói, com " + exp + "XP, é de nível PLATINA!")
} else if (exp >= 8001 && exp <= 9000) {
    console.log("Olá " + nome + ", a classificação atual do seu herói, com " + exp + "XP, é de nível ASCENDENTE!")
} else if (exp >= 9001 && exp <= 10000) {
    console.log("Olá " + nome + ", a classificação atual do seu herói, com " + exp + "XP, é de nível IMORTAL!")
} else if (exp >= 10001) {
    console.log("Olá " + nome + ", a classificação atual do seu herói, com " + exp + "XP, é de nível RADIANTE!")
}
