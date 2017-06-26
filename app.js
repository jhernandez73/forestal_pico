	//SERVER
	var express = require('express');
	var app = express();

	app.listen(3000, function () {
  		console.log('Example app listening on port 3000!');
	});

	app.set('views', __dirname + '/');

	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');
	
	app.use('/css', express.static(__dirname + '/public/css'));
	app.use('/scripts', express.static(__dirname + '/public/scripts'));
	app.use('/img', express.static(__dirname + '/public/img'));
	app.use('/controllers', express.static(__dirname + '/public/controllers'));
	app.use('/views', express.static(__dirname + '/public/views'));
	app.use('/pdf', express.static(__dirname + '/pdf'));

	app.get('/', function (req, res) {
  		res.render('index')
	})