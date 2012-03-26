/* 
 * Very simple example of using socket.io on the client side
 */


// Conect to the server's socket
var socket = io.connect();

// Listen for an event from the server
socket.on('test', function(data){
	document.getElementById('testResult').textContent = data;
});

// Fire an event to the server. The event names do not have to match.
socket.emit('test');


