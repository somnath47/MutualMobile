const NotesController = function () {

	this.model = require(`${process.env.ROOT_PATH}/models/Notes.js`)
	this.umodel = require(`${process.env.ROOT_PATH}/models/Users.js`)

	this.allNotes = async (request, response, next) => {
		try{
			const validity = await this.umodel.validateToken(request, next);
			if(validity.success) {
				var allNotes = await this.model.getAllNotesFromDb(validity.decoded.email);
				response.json({
					"success":true,
					"data": allNotes
				})
			} else throw("Invalid request!");
		} catch (e) {
			next(e);
			response.json(e);
		}
	}

	this.getNote = async (request, response, next) => {
		try{

			// Note Id validation code goes here

			const validity = await this.umodel.validateToken(request, next);
			if(validity.success) {

				var note = await this.model.getNoteFromDb([validity.decoded.email, request.query.note_id], next);
				response.json({
					"success":true,
					"data": note
				})

			} else throw("Invalid request!");
		} catch (e) {
			next(e);
			response.json(e);
		}
	}

	this.addNote = async (request, response, next) => {
		try{
			// validation code goes here

			const validity = await this.umodel.validateToken(request, next);
			if(validity.success) {

				var noteData = {
					"email": validity.decoded.email,
					"note_info": [
						request.body.note_heading,
						request.body.note_details
					]
				}

				var note = await this.model.addNoteToDb(noteData, this.umodel, next);
				if(note) response.json({"success": true, "message": "Note Added!"});
				else throw("Error Occoured!");

			} else throw("Invalid request!");
		} catch (e) {
			next(e);
			response.json(e);
		}
	}

	this.updateNote = async (request, response, next) => {
		try{
			const validity = await this.umodel.validateToken(request, next);
			if(validity.success) {

				response.json("success");

			} else throw("Invalid request!");
		} catch (e) {
			next(e);
			response.json(e);
		}
	}

	this.deleteNote = async (request, response, next) => {
		try{
			const validity = await this.umodel.validateToken(request, next);
			if(validity.success) {

				response.json("success");

			} else throw("Invalid request!");
		} catch (e) {
			next(e);
			response.json(e);
		}
	}

}

module.exports = new NotesController();