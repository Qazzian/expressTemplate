/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var mysql = require('mysql');

function database(options){

}

exports = database;

database.prototype = {
	database : null,
	options : null,
	
	connect: function(opts){
		
	},
	
	query: function(opts){
		
	}
	
}


var Database = 'nodeTest';

var client = mysql.createClient({
	user: 'root',
	password: ''
});

client.query('CREATE DATABASE ' + Database, function(err) {
	if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
		throw err;
	}
});


client.query('USE ' + Database);

client.query('CREATE TEMPRARY TABLE ...');
