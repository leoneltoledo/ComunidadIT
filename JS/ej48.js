let mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
let pi = parseFloat(mensaje.substr(0, 4));
let significadoDeLaVida = parseInt(mensaje.substr(38, 2));
let resultado = pi + significadoDeLaVida;

console.log(resultado);
console.log(`45.14 es el resultado de sumar las variables ${pi.toString()} y ${significadoDeLaVida.toString()}, concatenando los valores.`);