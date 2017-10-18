function obtenerPerimetroRectangulo(base, altura) {
    let perimetro;
    if (base == altura) {
        perimetro = (base + base) * 2;
    }
    else if (base !== altura) {
        perimetro = (base + altura) * 2;
    }

    console.log(`El perímetro es ${perimetro}`);

    if (perimetro > 100) {
        console.log('El perímetro es muy grande');
    }
    else {
        console.log('El perímetro no es muy grande');
    }
}

obtenerPerimetroRectangulo(50, 50);