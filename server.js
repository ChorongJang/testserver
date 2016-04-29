var http = require('http');
var url = require('url');
var color = require('colors');

http.createServer(function (req, res){

	res.writeHead(200, {'Content-Type': 'text/html'});

	res.end('<h1>  HELLO </h1>')

}).listen(8080, function(){

	 console.log('create server'.red);
	});