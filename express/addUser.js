var express = require('express');
var app = express();
var fs = require("fs");

//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/addUser', function (req, res) {
   // 读取已存在的数据
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );

       var dataStr = JSON.stringify(data,true,2)

       fs.writeFile(__dirname + '/dataAdded.json',dataStr,function(){
        console.log('添加成功！')
        res.end(dataStr);
       })
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})