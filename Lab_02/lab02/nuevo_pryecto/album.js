var album_favorito = function(coleccion){
	if (coleccion.length === 0) {
		return;
	}
	var mas_reproducido = coleccion.tocado, mas_indice = 0;
	for (var i = 0, len = coleccion.length; i < len; i++){
		if (coleccion[i].tocado > mas_reproducido) {
			mas_reproducido = coleccion[i].tocado;
			mas_indice = i;
		}
	}
	return { play: mas_reproducido, index: mas_indice };
};
var music = {
	"tocada":0,
	"play":function(){
		return tocada;
	},
	"tocado":function(){
		
	}
}
var fav = album_favorito( music );
console.log("Tu album favorito fue tocado " + fav.play + " veces");