var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact me page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact us' });
});

/*
MVC
Model --> to connect our logic
View --> pages
Controller --> logic behind routes
*/

module.exports = router;
