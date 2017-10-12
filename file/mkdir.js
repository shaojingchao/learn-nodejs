var fs = require("fs");

console.log("创建目录 ./tmp/test/");
fs.mkdir("./tmps/",function(err){
  console.log(__dirname)
   if (err) {
       return console.log(JSON.stringify(err));
   }
   console.log("目录创建成功。");
});