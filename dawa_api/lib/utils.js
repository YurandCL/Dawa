const jwt = require('jsonwebtoken');

module.exports = {
	generateToken: user => {
		const u = {
			_id: user._id,
			name: user.name,
			username: user.username,
			email: user.email
		};
		return token = jwt.sign(u, 'funciona',{
			expiresIn: 60 * 60 * 24 //Expira en 24 horas
			// process.env.JWT_SECRET
		});
	},
	verifyToken: token => {
		return new Promise((resolve, reject) => {
			jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{
				if (err){
					reject(err);
				}
				resolve(user);
			});
		});
	},
	getCleanUser: user => {
		const{ password, age, createdAT, updateAt, __v, ...exposedData} = user;
		return exposedData;
	}
};