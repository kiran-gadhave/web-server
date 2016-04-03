var express = require('express'),
	app		= express();


var middleware = require('./middleware');

app.use(middleware.logger)


app.get('/', function(req, res){
	res.send('Hello World')
});

app.get('/about', middleware.reqAuth ,function(req, res){
	res.send('About Me')
})

app.listen(3000, function(error){
	if(!error)
		console.log("Up")
});