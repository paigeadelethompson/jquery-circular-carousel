#!/usr/bin/env node

var express = require('express');
var app = express();

app.use('/', express.static('demo'));

app.use('/js/jquery.circular-carousel.js', express.static('js/jquery.circular-carousel.js'));
app.use('/css/jquery.circular-carousel.css', express.static('css/jquery.circular-carousel.css'));
app.use('/js/jquery.min.js', express.static('node_modules/jquery/dist/jquery.min.js'));
app.listen(3000);
