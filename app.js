#!/usr/bin/env node

// module dependencies
var express = require('express');
var path = require('path');

// get port from environment and store in Express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, '/public')));

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// settings page
app.get('/settings', function(req, res) {
	res.render('pages/settings');
});

// Get port from environment and store in Express
var port = process.env.PORT || 3000;
app.listen(port)
console.log('Server is listening on port', port, 'http://localhost:3000/')
