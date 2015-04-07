var net = require("net");

var chatServer = net.createServer();
clientList = [];

chatServer.on("connection", function(client) {
	client.name = client.remoteAddress + ":" + client.remotePort;
	client.write("hi~ " + client.name);
	clientList.push(client);
	client.on("data", function(data) {
		broadcast(data.toString(), client);
	})
}).listen(9000);

function broadcast(message, client) {
	for (var i = 0; i < clientList.length; i++)
		if (clientList[i] !== client)
			clientList[i].write(client.name + " says: " + message);
}
