var net = require('net');

var client = new net.Socket();
client.connect(3002, '192.168.0.14', function () {
	client.write('MSG|1337|Mr^Chuck^Norris\n');
	client.end();
});

// client.on('data', function (data) {
// 		console.log(data.toString());
		
// });

