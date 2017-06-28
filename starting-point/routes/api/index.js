const express = require('express');
const router = express.Router();

const hotels = require('./hotels');
const restaurants = require('./restaurants');
const activities = require('./activities');

router.use('/hotels', hotels);
router.use('/restaurants', restaurants);
router.use('/activities', activities);

module.exports = router;