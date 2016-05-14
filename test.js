var http = require('http');
var jsreport = require('jsreport');
var fs = require('fs');

http.createServer(function (req, res) {

  var contents = fs.readFileSync('hello.html', 'utf8');

  jsreport.render(contents).then(function(out) {
    out.stream.pipe(res);
  }).catch(function(e) {    
    res.end(e.message);
  });

}).listen(1337, '127.0.0.1');
