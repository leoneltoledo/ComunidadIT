let dia = 2;
let nombreDelDia = null;

switch (dia) {
    case 1:
        nombreDelDia = 'Lunes';
        console.log(nombreDelDia);
        break;
    case 2:
        nombreDelDia = 'Martes';
        console.log(nombreDelDia);
        break;
    case 3:
        nombreDelDia = 'Miercoles';
        console.log(nombreDelDia);
        break;
    case 4:
        nombreDelDia = 'Jueves';
        console.log(nombreDelDia);
        break;
    case 5:
        nombreDelDia = 'Viernes';
        console.log(nombreDelDia);
        break;
    case 6:
        nombreDelDia = 'Sabado';
        console.log(nombreDelDia);
        break;
    case 7:
        nombreDelDia = 'Domingo';
        console.log(nombreDelDia);
        break;
    default:
        nombreDelDia = null;
        console.log('Por favor seleccionar un número de 1 a 7');
}
dia = 4;

if (dia == 1) {
    nombreDelDia = 'Lunes';
    console.log(nombreDelDia);
}
else if (dia == 2) {
    nombreDelDia = 'Martes';
    console.log(nombreDelDia);
}
else if (dia == 3) {
    nombreDelDia = 'Miercoles';
    console.log(nombreDelDia);
}
else if (dia == 4) {
    nombreDelDia = 'Jueves';
    console.log(nombreDelDia);
}
else if (dia == 5) {
    nombreDelDia = 'Viernes';
    console.log(nombreDelDia);
}
else if (dia == 6) {
    nombreDelDia = 'Sabado';
    console.log(nombreDelDia);
}
else if (dia == 7) {
    nombreDelDia = 'Domingo';
    console.log(nombreDelDia);
}
else {
    nombreDelDia = null;
    console.log('Por favor seleccionar un número de 1 a 7');
}