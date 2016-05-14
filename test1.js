var http = require('http');
var jsreport = require('jsreport');
var fs = require('fs');

http.createServer(function (req, res) {

  fs.readFile('hello.html', 'utf-8', function (err, data){

  jsreport.render(data).then(function(out) {
    out.stream.pipe(res);
  }).catch(function(e) {    
    res.end(e.message);
  });
  });

}).listen(1338, '127.0.0.1');
