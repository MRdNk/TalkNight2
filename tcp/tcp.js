var net = require('net');

var sockets = [];

var server = net.createServer( function (socket) {
	sockets.push(socket);

	socket.write('Hello new user!\n');

	socket.on('data', function (data) {
		// if(data.toString().substring(0,3) === 'MSG') {
		// 	console.log('MSG: ', data.toString());
		// 	return 1;
		// }

		for(var i=0; i<sockets.length; i++) {
			if (sockets[i] !== socket) {
				sockets[i].write(data + '\n');		
			}
		}
		console.log(data.toString());
	});

	socket.on('end', function () {
		var index = sockets.indexOf(socket);
		sockets.splice(index,1);
		console.log('Socket disconnected')
	})

});

server.listen(3002, '127.0.0.1');
