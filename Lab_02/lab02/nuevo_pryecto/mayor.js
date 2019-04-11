(function(){
	var mayor = function(o1, o2){
		if (o1 > o2) {
			console.log('o1 es mayor');
		} else{
			console.log('o2 es mayor');
		}
	};

	var numero = function(num){
		return {
			num: num,
			tamano: function(){return num;}
		};
	};
	var x = new numero(3);
	var y = new numero(9);

	mayor(x,y);
}());
	