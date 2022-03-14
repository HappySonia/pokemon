const db = require("../db/db")

const Pokemon = {
  findAll:()=>{
    const sql='SELECT * FROM pokemon_spa'
    return db
      .query(sql)
      .then(dbRes=>dbRes.rows)      
  },
  create: (name, img)=> {
    const sql = `INSERT INTO pokemon_spa(name,img)VALUES($1,$2) RETURNING * `

    return db
        .query(sql, [name, img])
        .then(dbRes => dbRes.rows[0])
  },  
  delete: pokemonId => {
      const sql='DELETE FROM pokemon_spa WHERE id=$1'
      return db
      .query(sql,[pokemonId])
      
  }
}

module.exports = Pokemon