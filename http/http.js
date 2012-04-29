var http = require('http');

var server = http.createServer (function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end('hello world');
});

server.listen(3001, '127.0.0.1');