var http = require('http');

http.createServer( function(req, res){
res.writeHead(200 , {'Content-text' : 'text/html'});
res.end('<h1>he Achraf again is Millinaire on 2020<h1>')



}).listen(8080);