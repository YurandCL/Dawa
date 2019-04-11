var express = require('express');
var app = express()

app.get('/', function(req, res){
  res.send('Hola mundo! en Express :)')
})

app.post('/',function(req, res){
  res.send('Llamada POST misma url')
})

app.put('/user', function(req, res){
  res.send('Recibimos un PUT en /user')
})

app.delete('/user', function(req, res){
  res.send('Recibimos un DELETE en /user')
})

app.listen(3000, function(){
  console.log('Aplicacion de ejemplo escuchado en el puerto 3000!')
});
