const express = require('express');
const router = express.Router();
const models = require('../../models')
const Hotels = models.Hotel;

router.get("/", function (req, res, next) {
    console.log("here");
    Hotels.findAll()
        .then(function (result) {
            res.json(result);
        })
});

module.exports = router;