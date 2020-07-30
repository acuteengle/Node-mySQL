const orm = require("../config/orm");

const table = "pokemon_type";

const Pokemon_type = {
    selectAll: () => {
        return orm.selectAll(table);
    },
    selectOne: (id) => {
        return orm.selectOne(table, id);
    },
    insertOne: (params) => {
        return orm.insertOne(table, params);
    },
    updateOne: (id, params) => {
        return orm.updateOne(table, id, params);
    },
};

module.exports = Pokemon_type;
