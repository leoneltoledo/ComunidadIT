const express = require('express')
const app = express()
var wikiH = require('./home.js');
var wikiP = require('./products.js');

app.use('/', wikiH);
app.use('/products', wikiP);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});