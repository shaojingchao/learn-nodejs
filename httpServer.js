// var http = require("http");

// function onRequest(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);

// var net = require('net');
// var server = net.createServer(function(connection) { 
//    console.log('client connected');
//    connection.on('end', function() {
//       console.log('客户端关闭连接');
//    });
//    connection.write('Hello World!\r\n');
//    connection.pipe(connection);
// });
// server.listen(8080, function() { 
//   console.log('server is listening');
// });

// var net = require('net');
// var client = net.connect({port: 8080}, function(err) {

//   console.log(err)
//    console.log('连接到服务器！');  
// });
// client.on('data', function(data) {
//    console.log(data.toString());
//    client.end();
// });
// client.on('end', function() { 
//    console.log('断开与服务器的连接');
// });

var dns = require('dns');

dns.lookup('www.shaojingchao.site', function onLookup(err, address, family) {
   console.log('ip 地址:', address);
   dns.reverse(address, function (err, hostnames) {
   if (err) {
      console.log(err.stack);
   }

   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
});  
});