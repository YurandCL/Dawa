var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'express'});
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', {title:'contacto'});
});

module.