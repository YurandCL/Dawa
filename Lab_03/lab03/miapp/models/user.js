var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
	nombre: String,
	password: String,
});
prod_model = mongoose.model('user', producto_schema, 'user');

module.exports ={
	show: function(req, res){
		prod_model.find({}, function(err, items){
			if (!err) {
				//res.send(items);
				res.render('login');
			}else{
				return console.log(err);
			}
		});
	},
};