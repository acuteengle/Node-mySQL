var mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'blah',
    user: 'ash',
    database: 'pkmn',
    host: 'localhost',
    port: '3306'
});

let pokemondb = {};

pokemondb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM pokemon', (err, results) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(results);
            }
        });
    });
};

pokemondb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM pokemon WHERE id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(results[0]);
            }
        });
    });
};

module.exports = pokemondb;