var fs = require('fs')

var data = 'test writeStream file!'
function createFile(i) {

var writeStream = fs.createWriteStream('output'+i+'.txt')

writeStream.write(data + 'no-' + i,'utf8')

writeStream.end();

writeStream.on('finish',function(){
  console.log('写入完成！')
})

writeStream.on('error',function(err){
  console.log(err.stack)
})
}

let i = 0
do {
  createFile(i)
  i++
} while (i < 10)

console.log('程序执行完毕！')