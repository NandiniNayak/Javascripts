var http = require('http');

var server = http.createServer(function(request, response) {
  console.log("hello world")
  response.end("hello module1")
});
server.listen(3000)
