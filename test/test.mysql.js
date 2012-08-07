/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var assert = require('assert'),
	mysql = require('./../lib/mysql.js');

function runTests(){
	for (var t in tests) {
		test(t, tests[t]());
	}
}

tests = {
	"Test the database connection" : function(){
		assert.equal(2+2, 4);
	}
}

suite('mysql', runTests);