let suma = 0;

for (let n = 0; n < 10001; n += 2) {
    suma += n;
    if (n >= 20) {
        break;
    }
}

console.log(suma);