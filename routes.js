const express = require("express");
const db = require("./database");

const router = express.Router();

router.get("/pokemon", async (req, res, next) => {
    try {
        let results = await db.allPokemon();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/pokemon/:id", async (req, res, next) => {
    try {
        let results = await db.onePokemon(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/pokemon_type/", async (req, res, next) => {
    try {
        let results = await db.allPokemonTypes(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/pokemon_type/:id", async (req, res, next) => {
    try {
        let results = await db.onePokemonType(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
