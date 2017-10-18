function invertir(texto) {
    texto = texto.charAt(texto.length - 1) + texto.charAt(texto.length - 2) + texto.charAt(texto.length - 3) + texto.charAt(texto.length - 4);
    console.log(texto);
}

invertir('hola');