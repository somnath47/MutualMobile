const Notes = function () {

	this.db = require(`${process.env.ROOT_PATH}/lib/con/mysql.js`);
	this.jwt = require('jsonwebtoken');

	this.getAllNotesFromDb = (email, next) => {

		return new Promise((resolve, reject) => {

			this.db.query(
				'SELECT n.* FROM users u INNER JOIN notes n ON u.user_id = n.user_id WHERE u.email = ?', [email], 
				(error, results, fields) => {
				  if (error) reject(error)
				  resolve(results);
			});

		})

	}

	this.getNoteFromDb = (params, next) => {

		return new Promise((resolve, reject) => {

			this.db.query(
				'SELECT n.* FROM users u INNER JOIN notes n ON u.user_id = n.user_id WHERE u.email = ? AND n.note_id = ?', params, 
				(error, results, fields) => {
				  if (error) reject(error)
				  resolve(results);
			});

		})

	}

	this.addNoteToDb = (noteData, uModel, next) => {

		return new Promise( async (resolve, reject) => {

			var user_id = await uModel.getUserIdFromEmail(noteData.email);

			var noteFinalData = {
				"user_id": user_id,
				"note_heading": noteData.note_info[0],
				"note_details": noteData.note_info[1]
			}

			this.db.query('INSERT INTO notes SET ?', noteFinalData, 
				(error, results, fields) => {
			  		if (error) reject(error)
					resolve(true);
			});

		})

	}


}

module.exports = new Notes();