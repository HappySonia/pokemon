const express = require('express')

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const pokemonController = require('./controllers/pokemons_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')


const app = express()

const port = 5000;
app.listen(port,()=>console.log(`server listen on port ${port}`))

app.use(logger)

app.use(express.static('client'))

app.use(express.json())

app.use(sessions)

app.use('/api/pokemon',pokemonController)
app.use('/api/users',usersController)
app.use('/api/sessions',sessionsController)






