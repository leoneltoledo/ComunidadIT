const express = require('express')
const app = express()

app.get('/', function(request, response) {
  response.status(200).send('Este request/response está OK');
});

app.get('/productos', function(request, response) {
  response.status(500).send('Ha ocurrido un error de servidor');
});

app.get('/contacto', function(request, response) {
  response.status(404).send('404 No encontrado');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});