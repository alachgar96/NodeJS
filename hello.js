// create server && parse url and know in-built modules

/* var http = require('http');
var url = require('url');

http.createServer( function(req , res){
res.writeHead(200, {'Content-Type' : 'text/html' });
var q = url.parse(req.url , true).query;
var dates = q.year + " " + q.month;
res.write(dates);
res.end();


}).listen(8080); */

// read file  && access a html file

// var http = require('http');
// var fs = require('fs');

// http.createServer( function(req, res){
//     fs.readFile('index.html', function(err, data){

//         res.writeHead(200 , {'Content-type' : 'text/html'});
//         res.write(data);
//         console.log(req.url);
//         res.end();

//     })

// }).listen(8080)

// var http = require('http');
// var fs = require('fs');
// var url = require('url');


// http.createServer(function(req, res){
//         var q = url.parse(req.url, true);
//         var filename = "." + q.pathname;
//         fs.readFile(filename, function(err, data){
//             if(err){
//                 res.writeHead(404 , {'Contebt-Type' : 'text/html'});
//                 return res.end('404 page Not Found');
//             }
//             res.writeHead(200, {'Contebt-Type' : 'text/html'});
//             res.write(data);
//             return res.end();

//        });



// }).listen(8080);


// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// http.createServer(function(req, res){
//      var q = url.parse(req.url, true);
//      var filename = "." + q.pathname;
//      if(filename == './'){
//          filename = './index.html';
//      }
//      fs.readFile(filename, function(err, data){
//          if(err){
//              res.writeHead(404, {'Content-Type' : 'text/html'});
//              return res.end("Page Not Found");
//          }
//          res.writeHead(200, {'Content-Type' : 'text/html'})
//          res.write(data);
//          return res.end();
//      });

// }).listen(8080);


var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
     var q = url.parse(req.url, true);
     var filename = "." + q.pathname;
     if(filename == './'){
         filename = './index';
     }

     var filename = filename + ".html";
     fs.readFile(filename, function(err, data){
         if(err){
             res.writeHead(404, {'Content-Type' : 'text/html'});
             return res.end("Page Not Found");
         }
         res.writeHead(200, {'Content-Type' : 'text/html'})
         res.write(data);
         return res.end();
     });

}).listen(8080);