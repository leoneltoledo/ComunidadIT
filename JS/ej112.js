function mostrarNumeros(inicio, fin) {
    if (typeof inicio !== 'number' || typeof fin !== 'number') {
        console.log('Alguno de los parámetros no son números');
    }

    if (inicio < fin) {
        while (inicio <= fin) {
            console.log(inicio);
            inicio++;
        }
    }
    else if (inicio == fin) {
        console.log('Los números son iguales');
    }
    else {
        while (inicio >= fin) {
            console.log(inicio);
            inicio--;
        }
    }
}

mostrarNumeros(1200, 900);