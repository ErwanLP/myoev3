var express = require('express');
var router = express.Router();
var controller_main = require('./../controller/controller_main');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/myoInfo', function(req, res, next) {
  res.send(controller_main.myoData);
});

module.exports = router;
