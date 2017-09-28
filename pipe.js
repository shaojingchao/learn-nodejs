var fs = require('fs')

var readerStream = fs.createReadStream('input.txt')

var writeStream = fs.createWriteStream('output3.txt')
writeStream.on('finish',function(){
  console.log('文件创建完成！')
})
readerStream.pipe(writeStream)

console.log('程序执行完毕')