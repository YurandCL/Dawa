var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'express'});
});

router.post('/contacto', function(req, res, next) {
  res.render('contacto', {title:'contacto'});
});

router.post('/reserva', function(req, res, next) {
  res.render('reserva', {title:'reserva'});
});

module.exports = router;
