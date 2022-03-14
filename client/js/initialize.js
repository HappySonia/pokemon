const state = {pokemon:[]}

axios
    .get('/api/pokemon')
    .then(res=>res.data)
    .then(pokemon => {
        state.pokemon = pokemon
        renderPokemonList()
    })