var mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    user: "root",
    password: "test123*",
    database: "pokemonDB",
    host: "localhost",
    port: "3306",
});

module.exports = pool;
