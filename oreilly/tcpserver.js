var net = require("net");

var chatServer = net.createServer();
var clientList = [];

chatServer.on("connection", function(client) {
	client.name = client.remoteAddress + ":" + client.remotePort;
	client.write("hi~ " + client.name);

	clientList.push(client);

	client.on("data", function(data) {
		broadcast(data.toString(), client);
	})

	client.on("end", function(data) {
		console.log(client.name + " quit");
		clientList.splice(clientList.indexOf(client), 1);
	})

	client.on("error", function(e) {
		console.log(e);
	})
}).listen(9000);

function broadcast(message, client) {
	var cleanup = [];

	for (var i = 0; i < clientList.length; i++) {
		if (clientList[i] !== client) {
			clientList[i].write(client.name + " says: " + message);
		} else {
			cleanup.push(clientList[i]);
			clientList[i].destory();
		}
	}

	for (var i = 0; i < cleanup.length; i++) {
		clientList.splice(clientList.indexOf(cleanup[i]), 1);
	}
}
