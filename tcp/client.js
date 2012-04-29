var net = require('net');

var client = new net.Socket();
client.connect(3002, '127.0.0.1', function () {
	client.write('MSG|1337|Mr^Chuck^Norris\n');
	client.end();
});

// client.on('data', function (data) {
// 		console.log(data.toString());
		
// });

