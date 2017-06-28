const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// server middleware setup
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));

// routes and data
const surveyData = [];

app.get('/api/survey', function (req, res) {
  res.json(surveyData);
});

app.post('/api/survey', function (req, res, next) {
  surveyData.push(req.body);
  res.status(201).end();
});

const port = 1337;
app.listen(port, function () {
  console.log('Server listening on port', port);
});
