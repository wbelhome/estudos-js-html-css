//Criando um objeto vazio
const pokeApi = {}

//Promise = Receber resposta após processamento dar certo
//Then = Quando estiver concluído
//Catch = Caso der erro
//Finally = Sempre que finalizar 

//Função que converte a API em um Modelo nosso, fazendo um pokemon ser uma classe de objeto POKEMON 
function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    // Pega os detalhes da lista da API e coloca no objeto POKEMON
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    //Mapeia a lista de tipo do pokemon e colocar o tipo primário dele
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types //Uma forma de pegar o primeiro elemento da lista
    pokemon.type = type
    pokemon.types = types

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}


//Transforma as requisições de detalhes do promises em novas listas dos detalhes dos pokemons em json
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    //buscando um resultado HTTP a promise vira response
    return fetch(url)
        //Primeiro THEN transforma a promise em json
        .then((response) =>  response.json())
        //Segundo THEN recebe a lista de resultado em json
        .then((jsonBody) => jsonBody.results)
        //Lista de pokemons, mapeia as requisições dos detalhes dos pokemons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) 
        //Aguarda todos os detalhes da requisição de pokemons terminem 
        .then((detailRequests) => Promise.all(detailRequests))
        //PEga a lista dos detalhes dos pokemons 
        .then((pokemonsDetails) => pokemonsDetails)
}

