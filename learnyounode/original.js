var mymodule = require('./mymodule');
var dir = process.argv[2];
var filter = process.argv[3];

mymodule(dir, filter, function (err, files) {
	for (var i = 0; i < files.length; i++)
		console.log(files[i]);
});
