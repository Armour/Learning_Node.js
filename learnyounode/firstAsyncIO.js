var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function(err, buf) {
	var lines = buf.toString().split('\n').length - 1;
	console.log(lines);
});
