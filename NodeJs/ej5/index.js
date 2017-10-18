const Logger = require('logplease');
const logger = Logger.create('utils');
const esPar = require('./numeros');

if (esPar(2)) {
    logger.info('El número es par');
}
else {
    logger.error('El número no es par');
}

if (esPar(3)) {
    logger.info('El número es par');
}
else {
    logger.error('El número no es par');
}

if (esPar(101)) {
    logger.info('El número es par');
}
else {
    logger.error('El número no es par');
}

if (esPar(201)) {
    logger.info('El número es par');
}
else {
    logger.error('El número no es par');
}

if (esPar(202)) {
    logger.info('El número es par');
}
else {
    logger.error('El número no es par');
}

if (esPar(100)) {
    logger.info('El número es par');
}
else {
    logger.error('El número no es par');
}