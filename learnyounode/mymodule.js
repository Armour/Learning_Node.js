var fs = require('fs');
var path = require('path');

module.exports = function (dir, filter, callback) {		
	var ext = '.' + filter;
	fs.readdir(dir, function (err, list) {
		if (err) 
			callback(err, null);
		else {
			var answer = [];
			for (var i = 0; i < list.length; i++) {
				if (path.extname(list[i]) === ext)
					answer.push(list[i]);
			}
			callback(null, answer);
		}	
	});
}
 
