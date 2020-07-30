const express = require("express");
const router = express.Router();

const Pokemon_type = require("../models/Pokemon_type");

router.get("/", async (req, res, next) => {
    try {
        let results = await Pokemon_type.selectAll();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        let results = await Pokemon_type.selectOne(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post("/", async (req, res, next) => {
    try {
        let results = await Pokemon_type.insertOne(req.body);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        let results = await Pokemon_type.updateOne(req.params.id, req.body);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
