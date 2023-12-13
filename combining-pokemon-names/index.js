const read = require('readline-sync')

function combinandoNomesPokemons(palavra) {
    var palavraPokemon = palavra + "saur"
    return palavraPokemon
}

var nomeEntrada = read.question("Digite o nome do seu Pokémon: ")
var palavraGerada = combinandoNomesPokemons(nomeEntrada)
console.log(palavraGerada)