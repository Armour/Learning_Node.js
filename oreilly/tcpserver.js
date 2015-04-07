var net = require("net");

var chatServer = net.createServer();

chatServer.on("connection", function(client) {
	client.write("lalala\n");
	//client.end();
	client.on("data", function (data) {
		console.log(data.toString());
	})
}).listen(9000);
