const express 	= require('express');
const app		= express();
var server 		= require('http').Server(app);
var io 			= require('socket.io')(server);
const bodyParser = require('body-parser');
const logger 	= require('morgan');

app.use(logger(':method :remote-addr :url :response-time'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use("/", function(req, res, next){
	res.header('Acces-Control-Allow-Origin','*');
	res.header('Acces-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Acces-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

app.options("/*", function(req, res, next){
	res.sendStatus(200);
});

//Rutas para la API
const router = express.Router();

//Ruta de prueba
router.get('/', function(req, res){
	res.json({message: 'genial! bienvenido a nuestra API!'});
});

const userRouter = require('./routes/user');
const fileRouter = require('./routes/file');
router.use('/user', userRouter);
router.use('/file', fileRouter);

//Registramos las rutas
app.use('/api', router);

//conexion a base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dawa_blog');
mongoose.Promise = global.Promise;

//Iniciamos el servidor
// app.listen(port);
// console.log('La magia sucede en el puerto ' + port);

server.listen(port);
console.log('la magia sucede en el puerto ' + port);

io.on('connection', function(socket){
	console.log('Conectado');
	socket.on('message', message => {
		//el evento broadcast nos permite enviarle a todos menos al emisor
		console.log('recibo', message);
		socket.broadcast.emit('message', message);
	})
});