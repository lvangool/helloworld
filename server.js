var sys = require('sys'),    
  http = require('http');

http.createServer(function (req, res) {
  res.sendHeader(200, {'Content-Type': 'text/plain'});
  res.write('hello world')
  res.end();
}).listen(80);

/* server started */  
sys.puts('> hello world running on port 80');
