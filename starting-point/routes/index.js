var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
const api = require('./api');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.use('/api', api);

module.exports = router;
