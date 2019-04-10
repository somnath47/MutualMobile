const Users = function () {

	this.db = require(`${process.env.ROOT_PATH}/lib/con/mysql.js`)
	this.jwt = require('jsonwebtoken');
	this.appSecret = require(`${process.env.ROOT_PATH}/conf.json`)["appSecret"];

	this.addNewUserToDB = (params, next) => {

		return new Promise((resolve, reject) => {

			this.db.query('INSERT INTO users SET ?', params, 
				(error, results, fields) => {
			  		if (error) reject(error)
					resolve(true);
			});

		})

	}

	this.getUserIdFromEmail = (email, next) => {

		return new Promise((resolve, reject) => {

			this.db.query('SELECT user_id FROM users WHERE email = ?', [email], 
				(error, results, fields) => {
				  if (error) reject(error)
				  else if(results[0] !== undefined)
				  	resolve(results[0]["user_id"]);
				  else resolve(false);
			});

		})

	}

	this.getUserFromDB = (params, next) => {

		var selectionArr = [
			params.email,
			params.password
		]

		return new Promise((resolve, reject) => {

			this.db.query('SELECT * FROM users WHERE email = ? AND password = ?', selectionArr, 
				(error, results, fields) => {
				  if (error) reject(error)
				  if(results[0] !== undefined)
				  	resolve(this.processLoginReq(results[0], next));
				  else resolve(false);
			});

		})

	}

	this.processLoginReq = (userData, next) => {
		var userDataForJwt = {
			"first_name": userData.first_name,
			"last_name": userData.last_name,
			"email": userData.email
		}

		let token = this.jwt.sign(userDataForJwt, this.appSecret, {
			expiresIn: '1h'
		});

		userDataForJwt["x-access-token"] = token
		return userDataForJwt;
	}

	this.validateToken = (request, next) => {
		return new Promise((resolve, reject) => {
			let token = request.headers['x-access-token'] || request.headers['authorization'];

			if(token) {
				this.jwt.verify(token, this.appSecret, (err, decoded) => {
					if(err) next(reject("Invalid Session "))
					resolve({
						"success": true,
						"decoded": decoded
					});
				})
			}

		})
	}

}

module.exports = new Users();	