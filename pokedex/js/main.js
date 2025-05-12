// Pega o Lista com ID pokemonList 
const pokemonList = document.getElementById('pokemonList');

// Pegando o botão de carregar mais pokemons
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;
const maxRecords = 151;



function loadPokemonItens(offset, limit){   
// Cria um novo array, com uma função de converter o json em lista html
// Se arrow function tiver uma linha, não precisa de return
// //passando referência direto (Ppokemons), pois a função convertPokemonToLi já recebe pokemons
//PokeApi é a requisão da URL dos pokemons
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    //junta a string com o separador que colocar no join
    const newHtml = pokemons.map((pokemon) => //Função que converte os pokemons em lista HTML
                       `<li class="pokemon ${pokemon.type}">
                            <span class="number">#${pokemon.number}</span>
                            <span class="name">${pokemon.name}</span>
                            <div class="detail">
                                <ol class="types">
                                    ${pokemon.types.map((type) => `<li class="type ${type}"> ${type}</li>`).join('')}
                                </ol>
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                            </div>
                        </li>
                    `).join('');
                pokemonList.innerHTML += newHtml;
    })
}

//Chama os primeiros 5 pokemons
loadPokemonItens(offset, limit);

//evento para caregar mais pokemons de 5 em 5, conforme variaveis
loadMoreButton.addEventListener('click', () => {
    offset += limit

    //Regra para remover o botão load quando terminar os pokemons
    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit) 

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else{
            loadPokemonItens(offset, limit)
        }
})

