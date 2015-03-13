var path = require('path');
var callback = function (err, list) {
		for (var i = 0; i < list.length; i++) {
				if (path.extname(list[i]) === filter)
						console.log(list[i]);
		}
}
module.exports = callback;
