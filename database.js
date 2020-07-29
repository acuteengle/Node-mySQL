var mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    user: "root",
    password: "test123*",
    database: "sys",
    host: "localhost",
    port: "3306",
});

let pokemondb = {};

pokemondb.allPokemon = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM pokemon", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(results);
            }
        });
    });
};

pokemondb.onePokemon = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT * FROM pokemon WHERE id = ?",
            [id],
            (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results[0]);
                }
            }
        );
    });
};

pokemondb.allPokemonTypes = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM pokemon_type", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(results);
            }
        });
    });
};

pokemondb.onePokemonType = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT * FROM pokemon_type WHERE id = ?",
            [id],
            (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results[0]);
                }
            }
        );
    });
};

module.exports = pokemondb;
