const express = require('express')
const exphbs  = require('express-handlebars')
const Handlebars = require('handlebars')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
var passwordHash = require('password-hash');
const session = require('express-session')
const obtenerResultado = require('./calculo')
const app = express()
const url = 'mongodb://localhost:27017/prode'

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: "123qwerty456",
    resave: false,
    saveUninitialized: false
}))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        var coleccion = db.collection('equipos')
        coleccion.find().toArray(function(err, equipo) {
            if(req.session.name == null) {
                res.render('home', { equipos: equipo, user: req.session.name, selected: { equipos: true }})
            }
            else {
                MongoClient.connect(url, function(err, db) {
                    var coleccion = db.collection('usuarios')
                    coleccion.findOne({nombre: req.session.name}, function(err, user) {
                        req.session.pronostico = user.pronostico
                        if(req.session.pronostico.flag != 1) {
                            var puntos = obtenerResultado(req.session.pronostico)
                            res.render('home', { equipos: equipo, resultado: puntos, user: req.session.name, selected: { equipos: true }})
                        }
                        else {
                            res.render('home', { equipos: equipo, user: req.session.name, selected: { equipos: true }})
                        }
                    db.close()
                    })   
                })
            }
        })
    })      
})

app.get('/pronosticos', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        var coleccion = db.collection('usuarios')
        coleccion.findOne({nombre: req.session.name}, function(err, user) {
            req.session.pronostico = user.pronostico
            if(req.session.pronostico.flag != 1) {
                var puntos = obtenerResultado(req.session.pronostico)
                res.render('pronosticos', { resultado: puntos, user: req.session.name})
            }
            else {
                MongoClient.connect(url, function(err, db) {
                    var coleccion = db.collection('equipos')
                    coleccion.find().toArray(function(err, equipo) {
                        db.close()
                        res.render('pronosticos', { equipos: equipo, user: req.session.name, selected: { equipos: true }})
                    })
                })
            }
        })
    })
})

app.post('/pronosticos', function (req, res) {
    const usuario = {
        nombre: req.session.name,
        pass: req.session.pass,
        pronostico: {
            uno: { L: req.body.unoL, E: req.body.unoE, V: req.body.unoV },
            dos: { L: req.body.dosL, E: req.body.dosE, V: req.body.dosV },
            tres: { L: req.body.tresL, E: req.body.tresE, V: req.body.tresV },
            cuatro: { L: req.body.cuatroL, E: req.body.cuatroE, V: req.body.cuatroV },
            cinco: { L: req.body.cincoL, E: req.body.cincoE, V: req.body.cincoV },
            seis: { L: req.body.seisL, E: req.body.seisE, V: req.body.seisV },
            siete: { L: req.body.sieteL, E: req.body.sieteE, V: req.body.sieteV },
            ocho: { L: req.body.ochoL, E: req.body.ochoE, V: req.body.ochoV },
            nueve: { L: req.body.nueveL, E: req.body.nueveE, V: req.body.nueveV },
            diez: { L: req.body.diezL, E: req.body.diezE, V: req.body.diezV },
            once: { L: req.body.onceL, E: req.body.onceE, V: req.body.onceV },
            doce: { L: req.body.doceL, E: req.body.doceE, V: req.body.doceV },
            trece: { L: req.body.treceL, E: req.body.treceE, V: req.body.treceV },
            catorce: { L: req.body.catorceL, E: req.body.catorceE, V: req.body.catorceV }
        }
    }

    MongoClient.connect(url, function(err, db) {
        var coleccion = db.collection('usuarios')
        coleccion.findOneAndUpdate({nombre: req.session.name}, usuario, function(err, user) {
            db.close()
            res.render('pronosticos', {user: req.session.name, message: 'Se a enviado su pronóstico de esta fecha!'})           
        })
    })
})

app.get('/registro', function (req, res) {
    res.render('registro', {user: req.session.name})
})

app.post('/registro', function (req, res) {
    const usuario = { 
        nombre: req.body.username, 
        pass: passwordHash.generate(req.body.password),
        pronostico : {flag: 1}
    }
    
    MongoClient.connect(url, function(err, db) {
        var coleccion = db.collection('usuarios')
        coleccion.insertOne(usuario, function(err, resultado) {
            db.close()
            res.render('registro', {message: 'Usted se ha registrado en Prode Argentino! Inicie sesión para empezar a jugar!'})
        })
    })
})

app.get('/login', function (req, res) {
    res.render('login', {user: req.session.name})
})

app.post('/login', function (req, res) {
    const usuario = {
        nombre: req.body.username,
        pass: req.body.password
    }

    MongoClient.connect(url, function(err, db) {
        var coleccion = db.collection('usuarios')
        coleccion.findOne({ nombre: usuario.nombre }, function(err, user) {
            if((passwordHash.verify(usuario.pass, user.pass))) {
                req.session.user_id = user._id
                req.session.name = user.nombre
                req.session.pronostico = user.pronostico
                req.session.pass = user.pass
                res.render('login', {usuario: user, user: req.session.name, message: `Bienvenido ${usuario.nombre}! Ingresa a tus pronósticos para empezar a jugar.`})
            }
            else {
                res.render('login', {error: `Su nombre de usuario y contraseña no son validos`})
            }
            db.close()
        })
    })
})

app.get('/recomendaramigo', function (req, res) {
    res.render('recomendaramigo', {user: req.session.name})
})

app.get('/info', function (req, res) {
    res.render('recomendaramigo', {user: req.session.name})
})

app.get('/contacto', function (req, res) {
    res.render('contacto', {user: req.session.name})
})

app.listen(3000)