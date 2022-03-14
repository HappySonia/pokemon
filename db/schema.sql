CREATE DATABASE pokemon_spa;

\c pokemon_spa

CREATE TABLE pokemon_spa(id SERIAL PRIMARY KEY,name TEXT,img TEXT);

INSERT INTO pokemon_spa(name,img)VALUES('Bulbasaur','http://img.pokemondb.net/artwork/bulbasaur.jpg'),('Ivysaur','http://img.pokemondb.net/artwork/ivysaur.jpg'),('Venusaur','http://img.pokemondb.net/artwork/venusaur.jpg'),('Charmander','http://img.pokemondb.net/artwork/charmander.jpg'),('Charizard','http://img.pokemondb.net/artwork/charizard.jpg'),('Squirtle','http://img.pokemondb.net/artwork/squirtle.jpg'),('Wartortle','http://img.pokemondb.net/artwork/wartortle.jpg');

CREATE TABLE users(id SERIAL PRIMARY KEY,name TEXT,email TEXT,password_digest TEXT);
