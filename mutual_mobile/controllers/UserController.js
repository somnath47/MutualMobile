const UserController = function () {

	this.model = require(`${process.env.ROOT_PATH}/models/Users.js`)

	this.register = async (request, response, next) => {

		try{

			// Validation code goes here | to be done later

			const params = {
				"email": request.body.email,
				"first_name": request.body.first_name,
				"last_name": request.body.last_name,
				"password": request.body.password,
			}

			var result = await this.model.addNewUserToDB(params);

			if(result) response.json("User Added to DB!");
			else response.json("Some error occoured!");

		} catch (e) {
			next(e)
		}

	}

	this.login = async (request, response, next) => {
		try{

			// Validation code goes here | to be done later

			const params = {
				"email": request.body.email,
				"password": request.body.password,
			}

			var result = await this.model.getUserFromDB(params);

			if(result) response.json({
				"Response": "Authentication Successful",
				"User-data": result
			});
			else response.json("User Name or Password incorrect!");

		} catch (e) {
			next(e)
		}
	}

}

module.exports = new UserController();