var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
app.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about me page. */
app.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About' });
});

/* GET projects page. */
app.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});


/* GET contact me page. */
app.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact' });
});

/*
MVC
Model --> to connect our logic
View --> pages
Controller --> logic behind routes
*/

module.exports = app;
