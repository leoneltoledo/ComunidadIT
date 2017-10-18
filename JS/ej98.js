let suma = 0;

for (let n = 0; n < 1001; n++) {
    suma += n;
    if (suma > 100) {
        break;
    }
}

console.log(suma);