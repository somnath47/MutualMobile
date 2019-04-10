process.env.ROOT_PATH = __dirname;

// Configurations and Settings
const conf = require("./conf.json");
const connection  = require("./lib/con/mysql.js");

// Requied Packages
const express = require("express");
const bodyParser = require('body-parser');

// Application Settings
const app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Controller Files
const UserController = require(`./controllers/UserController.js`);
const NotesController = require(`./controllers/NotesController.js`);

// Routes & End Points
app.post("/register", UserController.register);
app.post("/login", UserController.login);
app.get("/allnotes", NotesController.allNotes);
app.get("/note", NotesController.getNote);
app.post("/note", NotesController.addNote);
app.put("/note", NotesController.updateNote);
app.delete("/note", NotesController.deleteNote);

app.listen(conf.port, conf.host, () => {

	console.log(`Application is running @ ${conf.host}:${conf.port}`);

})