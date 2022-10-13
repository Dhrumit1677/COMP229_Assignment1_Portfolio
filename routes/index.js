var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact' });
});


router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About' });
});

// router.get('/products', function(req, res, next) {
//   res.render('products', { title: 'Home' });
// });

// router.get('/products', function(req, res, next) {
//   res.render('index', { title: 'Products' });
// });

module.exports = router;
