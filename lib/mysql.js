/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var mysql = require('mysql');

var Database = 'nodeTest';

var client = mysql.createClient({
	user: 'root',
	password: 'root'
});

client.query('CREATE DATABASE ' + Database, function(err) {
	if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
		throw err;
	}
});


client.query('USE ' + Database);

client.query('CREATE TEMPRARY TABLE ...');
