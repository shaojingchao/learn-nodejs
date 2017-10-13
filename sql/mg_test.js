var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; // 数据库为 runoob
var fs = require('fs')
var app = require("express")()

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})




app.get("/",function(req, res){
    res.sendFile( __dirname + "/" + "index.html" );
})



app.get("/api_add",function(req,res){

var insertData = function(db, callback) {
    //连接到表 site
    var collection = db.collection('site');
    //插入数据
    var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        res.send(result)
        db.close();
    });
});

})

app.get("/api_find",function(req,res){
    console.log(req.body)

var findData = function(db, callback) {
    //连接到表 site
    var collection = db.collection('site');

    var findSql = {"name":"菜鸟教程"}

    //查找数据
    collection.find(findSql).toArray(function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    findData(db, function(result) {
        res.send(result)
        db.close();
    });
});

})


/*更新数据*/

app.get("/api_update",function(req, res){
    var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('site');
    //更新数据
    var whereStr = {"name":'菜鸟教程'};
    var updateStr = {$set: { "url" : "https://www.runoob.com/new" }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    updateData(db, function(result) {
        console.log(typeof result , result)
        if(result.result.ok === 1){
            res.send({'msg':'修改成功'})
        }
        db.close();
    });
});
})



/*删除数据*/

app.get("/api_remove",function(req, res){
    var removeData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('site');
    //删除数据
    var removeStr = {"name":'菜鸟教程'};
    collection.remove(removeStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    removeData(db, function(result) {
        res.send(result)
        db.close();
    });
});
})