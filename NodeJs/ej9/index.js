const express = require('express');
const app = express();
puerto = 3000;

app.get('/', function(request, response) {
  response.send('Bienvenidos a Node.js Server Side');
});

app.listen(puerto, (err) => {  
  if (err) {
    return console.log(`No se pudo levantar el servidor en el puerto ${puerto}`, err)
  }
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});