var fs = require("fs");


// 同步
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());


// 异步
let time = new Date()
fs.readFile('input.txt', (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log(data.toString())
  console.log(new Date() - time)
})

console.log("程序执行结束!");