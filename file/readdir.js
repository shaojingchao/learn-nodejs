var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("./tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }

   console.log(files)
   files.forEach( function (file){
       console.log( file );
   });
});