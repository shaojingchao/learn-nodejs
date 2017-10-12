//express_demo.js 文件
var express = require('express');

var cookie = require('cookie-parser')
var app = express();

console.log(cookie)
 
app.get('/', function (req, res) {
  var html = 
'<!DOCTYPE html>' +
'<html lang="en">' +
'<head>' +
  '<meta charset="UTF-8">' +
  '<title>hello world!</title>' +
'</head>' +
'<body>' +
  '<h4><pre>' +
    JSON.stringify(req.route,true,2) + '\n' + JSON.stringify(req.headers,true,2) +
    '</pre></h4>' +
'</body>' +
'</html>'
  
   // res.send(html);
   res.sendFile(__dirname + '\\JavaScript高级程序设计.pdf')
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})