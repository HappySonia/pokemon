function renderPokemonList() {
    document.querySelector('#page').innerHTML=`
        <section class='pokemon-list'>
            ${renderPokemon()}
        </section>
    `
}

function renderPokemon() {
    return state.pokemon.map(pokemonPair => `
      <section class='pokemon' data-id="${pokemonPair.id}">
        <header>
          <h2>${pokemonPair.name}</h2>
          <span class="material-icons delete-pokemon" onClick="deletePokemon(event)">delete</span>
        </header>
        <img src="${pokemonPair.img}" class="img"></img>    
      </section>
    `).join('')
  }

  function deletePokemon(event) {
    const deleteBtn = event.target
    const pokemonDOM = deleteBtn.closest('.pokemon')
    const pokemonId = pokemonDOM.dataset.id
    axios
      .delete(`/api/pokemon/${pokemonId}`)
      .then(() => {
        
      state.pokemon = state.pokemon.filter(p => p.id != pokemonId)
      // Remove the pokemon from the DOM
      // Approach 1:
      render('pokemonList')
      // Approach 2:
      // pokemonDOM.remove()
      })
  }