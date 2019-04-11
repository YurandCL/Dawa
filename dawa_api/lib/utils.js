const jwt = require('jsonwebtoken');

module.exports = {
	generatToken: user => {
		const u = {
			_id: user. _id,
			name: user.name,
			username: user.username,
			email: user.email
		};
		return token = just.sign(u, process.env.JWT_SECRET,{
			expiresIn: 60 * 60 * 24 //Expira en 24 horas
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
		const{ password, agen createdAT, updateAt, _v, ...exposedData} = user;
		return exposedData;
	}
};