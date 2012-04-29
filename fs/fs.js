var fs = require('fs'); // fs === filesystem
var path = __dirname + '/files/';

function getFile(filename, no, callback) {
	fs.readFile(path + filename, function (err, data) {
		if(err) { callback(err); }
		
		callback(null, data, filename, no);

	});
}

var sizes = ['160 KB', '13 KB', '11 KB'];
var files = ['turtles.jpg', 'renandstimpy.jpeg', 'marioandluigi.jpeg'];

function getAllFiles() {
	var filefetched = 0;

	for (var i=0; i<files.length; i++) {
		console.log(i + ': ' + files[i] + ' (' + sizes[i] + ')');

		getFile(files[i], i, function (err, data, filename, no) {
			if(err) {console.error('An error!!');}
			
			console.log(no + ': ' + filename + ' (' + sizes[no] + ')');

			filefetched ++;
			
			if(filefetched === files.length) {
				console.log('all files fetched');
			}
		});
	}

	console.log('\n for loop complete\n');

}

getAllFiles()
