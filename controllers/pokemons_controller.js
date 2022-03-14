
const express = require('express')

const Pokemon = require('../models/pokemon')

const router = express.Router()

router.get('/',(req,res)=>{
    Pokemon
    .findAll()
    .then(pokemons=>res.json(pokemons))        
})

router.post('/', (req, res) => {
    if(req.session.userId){
    const name = req.body.name
    const img = req.body.img
   
    Pokemon
        .create(name, img)
        .then(pokemon => res.json(pokemon))
    } else {
        res.status(422).json({message:'not logged in'})
    }
})

router.delete('/:id', (req, res) => {
    const pokemonId = req.params.id

    Pokemon
        .delete(pokemonId)
        .then(() => res.json({message:'delete sucessfully'}))
})

module.exports = router