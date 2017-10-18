var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Pagina: products, método: get');
});

router.post('/', function(req, res) {
  res.send('Pagina: products, método: post');
});

module.exports = router;