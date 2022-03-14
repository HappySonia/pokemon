function renderAddPokemon() {
    document.querySelector('#page').innerHTML = `
      <section class="create-pokemon">
        <form action="" onSubmit="createPokemon(event)">
          <h2>Add pokemon:</h2>
          <fieldset>
            <label for="">Name: </label><br>
            <input type="text" name="name">
          </fieldset>
          <fieldset>
            <label for="">img_url: </label><br>
            <input type="text" name="img">
          </fieldset>          
          <button>Add Pokemon</button>
        </form>
      </section>
    `
  }
  
  function createPokemon(event) {
    event.preventDefault()
    const form = event.target
    // whenever we want to get the input data from a form into an object
    const data = Object.fromEntries(new FormData(form))
    axios.post('/api/pokemon', data)
      .then(res => res.data)
      .then(newPokemon => state.pokemon.push(newPokemon))
      .then(() => renderPokemonList())
  }