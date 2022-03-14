function renderSignUp() {
    document.querySelector('#page').innerHTML=`
        <section class='sign-up'>
            <form action="" onSubmit="signUp(event)">
                <fieldset>
                    <label for="">name</label>
                    <input type="text" name="name">
                </fieldset>
                <fieldset>
                    <label for="">email</label>
                    <input type="text" name="email">
                </fieldset>
                <fieldset>
                    <label for="">password</label>
                    <input type="password" name="password">
                </fieldset>
                <button>Sign up</button>
            </form>
           
        </section>
    `
}

function signUp(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    axios.post('/api/users',data)
    .then(res=>res.data)
  }