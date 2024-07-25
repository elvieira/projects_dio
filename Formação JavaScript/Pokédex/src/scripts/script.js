const pokemonList = document.getElementById('pokemonList')

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function formatPokemonId(id) {
    return String(id).padStart(4, '0')
}

function createPokemonCard(name, id, image, types) {
    const typeList = types.split(', ').map(type => `<div class="${type}"></div>`).join('')
    offset++
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=24`
    return `
        <div class="pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${image}.svg">
            <span class="pokemon-number">N&deg;${id}</span>
            <h3>${name}</h3>
            <div class="types">
                ${typeList}
            </div>
        </div>
    `;
}

function fetchPokemon(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const promises = data.results.map(pokemon => {
                return fetch(pokemon.url)
                    .then(response => response.json())
            })

            Promise.all(promises)
                .then(pokemonDatas => {
                    pokemonDatas.forEach(pokemonData => {
                        const pokemonName = capitalizeFirstLetter(pokemonData.name)
                        const pokemonId = formatPokemonId(pokemonData.id)
                        const types = pokemonData.types.map(type => type.type.name).join(', ')
                        pokemonList.innerHTML += createPokemonCard(pokemonName, pokemonId, pokemonData.id, types)
                    })
                })
                .catch(error => console.error('Erro ao buscar informações do Pokémon: ', error))
        })
        .catch(error => console.error('Erro ao buscar a lista de Pokémon: ', error))
}

let offset = 12
let url = `https://pokeapi.co/api/v2/pokemon/?offset=12&limit=24`

function loadButton() {
    fetchPokemon(url)
}

fetchPokemon(url)