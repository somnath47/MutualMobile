const ROOT_PATH = process.env.ROOT_PATH;
const conf = require(`${ROOT_PATH}/conf.json`)
// const conf = require(`../../conf.json`)
const mysql = require('mysql');
let connection = mysql.createConnection(conf.db.mysql);
connection.connect();

module.exports = connection;
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();