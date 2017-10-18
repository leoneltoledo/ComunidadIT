const resultado = {"nombre": "fecha6",
            "uno": { "L": 1, "E": null, "V": null },
            "dos": { "L": 1, "E": null, "V": null },
            "tres": { "L": null, "E": 1, "V": null },
            "cuatro": { "L": 1, "E": null, "V":null  },
            "cinco": { "L": null, "E": null, "V": 1 },
            "seis": { "L": 1, "E": null, "V": null },
            "siete": { "L": 1, "E": null, "V": null },
            "ocho": { "L": null, "E": 1, "V": null },
            "nueve": { "L": null, "E": 1, "V": null },
            "diez": { "L": 1, "E": null, "V": null },
            "once": { "L": 1, "E": null, "V": null },
            "doce": { "L":null , "E": null, "V": 1 },
            "trece": { "L": null, "E": null, "V": 1 },
            "catorce": { "L": null, "E": 1, "V": null }
}
        
const calcularPuntos = function(pronostico) {
    let acum = 0;
    if(resultado.uno.L == pronostico.uno.L) {
        acum++;
    }
    if(resultado.dos.L == pronostico.dos.L) {
        acum++;
    }
    if(resultado.tres.E == pronostico.tres.E) {
        acum++;
    }
    if(resultado.cuatro.L == pronostico.cuatro.L) {
        acum++;
    }
    if(resultado.cinco.V == pronostico.cinco.V) {
        acum++;
    }
    if(resultado.seis.L == pronostico.seis.L) {
        acum++;
    }
    if(resultado.siete.L == pronostico.siete.L) {
        acum++;
    }
    if(resultado.ocho.E == pronostico.ocho.E) {
        acum++;
    }
    if(resultado.nueve.E == pronostico.nueve.E) {
        acum++;
    }
    if(resultado.diez.L == pronostico.diez.L) {
        acum++;
    }
    if(resultado.once.L == pronostico.once.L) {
        acum++;
    }
    if(resultado.doce.V == pronostico.doce.V) {
        acum++;
    }
    if(resultado.trece.V == pronostico.trece.V) {
        acum++;
    }
    if(resultado.catorce.E == pronostico.catorce.E) {
        acum++;
    }
    return acum
}

module.exports = calcularPuntos