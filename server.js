var http = require("http");
var server = http.createServer(function(request,response){
response.writeHead(200,{'content-type':'text'})
response.end("Helo world")
}).listen(8080)

server.listen(8080,function(){
	console.log("server is listening at 8080")
})
