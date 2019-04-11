const express 	= require('express');
const app		= express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

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
router.use('/user', userRouter);

//Registramos las rutas
app.use('/api', router);

//conexion a base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dawa_blog');
mongoose.Promise = global.Promise;

//Iniciamos el servidor
app.listen(port);
console.log('La magia sucede en el puerto ' + port);