var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var tweets = [];

app.get('/', function(req, res) {
	res.send('Welcome to Node Twitter');
})

app.get('/send', bodyParser.json(), function(req, res) {
	console.log(req.body);
	if (req.body && req.body.tweet) {
		tweets.push(req.body.tweet);
		res.send({status: "ok", message: "Tweet received~"});
		console.log('received tweet');
	} else {
		res.send({status: "nok", message: "No tweet received..."});
	}
})

app.get('/tweets', function(req, res) {
	res.send(tweets);
});

app.listen(8000);
