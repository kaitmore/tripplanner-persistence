const express = require('express');
const router = express.Router();
const models = require("../../models");
const Restaurants = models.Restaurant;

router.get("/", function (req, res) {
    Restaurants.findAll()
        .then(function (result) {
            res.json(result);
        })
});

module.exports = router;