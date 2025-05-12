//Função que converte os pokemons em lista HTML
function convertPokemonToLi(pokemon){
    return `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}"> ${type}</li>`).join('')}
                        </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `
}
// Pega o Lista com ID pokemonList 
const pokemonList = document.getElementById('pokemonList')

// Cria um novo array, com uma função de converter o json em lista html
// Se arrow function tiver uma linha, não precisa de return
// //passando referência direto (Ppokemons), pois a função convertPokemonToLi já recebe pokemons
//PokeApi é a requisão da URL dos pokemons
pokeApi.getPokemons().then((pokemons = []) => {
    //junta a string com o separador que colocar no join
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;

})
