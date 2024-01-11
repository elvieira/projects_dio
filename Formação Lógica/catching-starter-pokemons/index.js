const read = require('readline-sync')
console.clear()

console.log("Esses são os pokémons disponiveis")
console.log("1 - Bulbasaur")
console.log("2 - Charmander")
console.log("4 - Pikachu")
console.log("5 - Mewtwo")
console.log("Escolha o número do Pokémon que você quer iniciar:")

let escolhaDoTreinador = parseInt(read.question())
let pokemonEscolhido

if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur"
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander"
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu"
} else {
    pokemonEscolhido = "Mewtwo"
}

if (escolhaDoTreinador === 1 || escolhaDoTreinador === 2 || escolhaDoTreinador === 4 || escolhaDoTreinador === 5) {
    console.log(`Você escolheu o ${pokemonEscolhido} como seu Pokémon inicial.`)
} else {
    console.log("Digite um número válido!")
}