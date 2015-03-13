var fs = require('fs');
var mymodule = require('./mymodule');
var file = process.argv[2];
var filter = process.argv[3];
fs.readdir(file, mymodule);
