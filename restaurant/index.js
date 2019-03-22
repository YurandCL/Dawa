//Pagina de inicio
//Galeria de platos
//contactenos
//respuesta en post del formulario contactenos

var express = require('express')
var app = express();

app.get('/', function (req, res){
	res.send('Esto no funciona')
})

app.use(function (req, res, next){
	res.status(404).send('No se encuentra la Pagina')
})

app.use(function (req, res, next){
	res.status(500).send('Algo salio mal')
})

app.listen(3000, function(){
	console.log('Aplicacion de ejemplo escuchando en el puerto 3000')
});