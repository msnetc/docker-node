'use strict';

var express = require('express');

var PORT = 80;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n' + new Date());
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);