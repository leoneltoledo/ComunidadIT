const express = require('express');
const app = express();
puerto = 3000;

app.get('/', function(request, response) {
  response.send('Bienvenidos a la Raiz del sitio');
});

app.get('/productos', function(request, response) {
  response.send('Listado de productos');
});

app.post('/productos', function(request, response) {
  response.send('Crear un producto');
});

app.put('/productos', function(request, response) {
  response.send('Actualizar un producto');
});

app.delete('/productos', function(request, response) {
  response.send('Borrar un producto');
});

app.get('/usuarios', function(request, response) {
  response.send('Listado de usuarios');
});

app.post('/usuarios', function(request, response) {
  response.send('Crear un usuario');
});

app.put('/usuarios', function(request, response) {
  response.send('Actualizar un usuario');
});

app.delete('/usuarios', function(request, response) {
  response.send('Borrar un usuario');
});


app.listen(puerto, (err) => {  
  if (err) {
    return console.log(`No se pudo levantar el servidor en el puerto ${puerto}`, err)
  }
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});