let saludar = (nombre,apellido,callback)=> {
    console.log(`Hola ${nombre} ${apellido}`);
    callback();
}

let segundoSaludo = () => {
    console.log('Luego de saludar se ejecuta el callback');
}

saludar('Leonel','Toledo',segundoSaludo);