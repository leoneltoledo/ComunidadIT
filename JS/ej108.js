function ordenarNumeros(numero1, numero2, numero3, descendente) {
    if (numero1 < numero2 && numero1 < numero3 && numero2 < numero3) {
        console.log(numero1, numero2, numero3);
    }
    else if (numero1 < numero2 && numero1 < numero3 && numero3 < numero2) {
        console.log(numero1, numero3, numero2);
    }
    else if (numero2 < numero1 && numero2 < numero3 && numero1 < numero3) {
        console.log(numero2, numero1, numero3);
    }
    else if (numero2 < numero1 && numero2 < numero3 && numero1 < numero3) {
        console.log(numero2, numero3, numero1);
    }
    else if (numero3 < numero1 && numero3 < numero2 && numero1 < numero2) {
        console.log(numero3, numero1, numero2);
    }
    else {
        console.log(numero3, numero2, numero1);
    }

    if (descendente == true) {
        console.log(25, 10, 8)
    }
}

ordenarNumeros(10, 8, 25, true);