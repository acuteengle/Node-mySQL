const express = require("express");
const router = express.Router();

const Pokemon = require("../models/Pokemon");

router.get("/", async (req, res, next) => {
    try {
        let results = await Pokemon.selectAll();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        let results = await Pokemon.selectOne(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
