const express = require('express');
const router = express.Router();
const models = require("../../models");
const Activities = models.Activity;

router.get("/", function (req, res) {
    Activities.findAll()
        .then(function (result) {
            res.json(result);
        })
});

module.exports = router;