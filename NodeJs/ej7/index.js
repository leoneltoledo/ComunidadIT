const saludar = require('./saludador');

let segundoSaludo = () => {
    console.log('Luego de saludar se ejecuta el callback');
}

saludar('Leonel','Toledo',segundoSaludo);