var express = require('express'),
	app		= express(),
	PORT 	= process.env.PORT || 3000;


var middleware = require('./middleware');

app.use(middleware.logger)


app.get('/', function(req, res){
	res.send('Hello World')
});

app.get('/about', middleware.reqAuth ,function(req, res){
	res.send('About Me')
})

app.listen(PORT, function(error){
	if(!error)
		console.log("Up")
});