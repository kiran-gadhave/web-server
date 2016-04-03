module.exports = {

	reqAuth: function (req, res, next){
		console.log('Private Route Hit');
		next();
	},

	logger: function (req, res, next){
		console.log('Request: ' + req.method + " " + req.originalUrl + "on" + new Date().toString());
		next();
	}

};