const express = require('express')
const app = express()

var requestTime = function (req, res, next) {
  res.status(200).json({ status: 200, message: 'Este request/response está OK'});
  const mensaje = `Request realizado ${Date.now()}`
  console.log(mensaje)
  next();
};

app.use(requestTime);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});