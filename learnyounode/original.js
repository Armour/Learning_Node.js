var mymodule = require('./mymodule');
var dir = process.argv[2];
var filter = process.argv[3];

mymodule(dir, filter, function (err, files) {
	if (err) 
		return console.error('Error: ', err);
	files.forEach(function(file) {
		console.log(file);
	});
});
