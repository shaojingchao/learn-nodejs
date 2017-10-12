var http = require("http");
var url = require("url");
var qs = require('querystring')

// console.trace()
 
function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    let time = qs.parse(url.parse(request.url).query).time
 
    let data = route(JSON.stringify(url.parse(request.url)));
 
    setTimeout(function(){
      response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(data);
    response.end();
  },time)
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
exports.start = start;