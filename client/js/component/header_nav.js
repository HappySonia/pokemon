function renderHeaderNav(){
    document.querySelector('#header-nav').innerHTML=`
        <ul>
            <li class="material-icons add-pokemon" onClick=render("addPokemon")>add_circle</li>
            <li class="material-icons edit-pokemon" onClick=render("pokemonList")>edit</li>
            <li class="material-icons sign-up-icon" onClick=render("signUp")>person_add</li> 
            <li class="material-icons login-icon" onClick=render("login")>login</li>             
        </ul>
`
}

renderHeaderNav()

function render(component) {
    if (component === 'addPokemon') {
      renderAddPokemon()
    } else if (component === 'pokemonList') {
      renderPokemonList()
    } else if(component ==='signUp'){
        renderSignUp()
    } else if(component ==='login'){
        renderLogin()
    }
  }


render('pokemonList')

