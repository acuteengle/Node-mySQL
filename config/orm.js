const pool = require("./connection");

const orm = {
    selectAll: (table) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM " + table + ";";
            pool.query(queryString, (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results);
                }
            });
        });
    },
    selectOne: (table, id) => {
        return new Promise((resolve, reject) => {
            let queryString = "SELECT * FROM " + table;
            queryString += " WHERE id = ?;";
            pool.query(queryString, [id], (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results);
                }
            });
        });
    },
    insertOne: (table, params) => {
        return new Promise((resolve, reject) => {
            const cols = Object.getOwnPropertyNames(params);
            let queryString =
                "INSERT INTO " + table + " (" + cols.join(", ") + ") ";
            queryString +=
                "VALUES (" + Array(cols.length).fill("?").join(", ") + ");";
            pool.query(queryString, Object.values(params), (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results);
                }
            });
        });
    },
    updateOne: (table, id, params) => {
        const sets = Object.entries(params).map((p) => {
            return `${p[0]} = ?`;
        });
        params.append(id);
        return new Promise((resolve, reject) => {
            let queryString = "UPDATE " + table;
            queryString += "SET " + sets.join(", ");
            queryString += "WHERE id = ?;";
            pool.query(queryString, Object.values(params), (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results);
                }
            });
        });
    },
};

module.exports = orm;
