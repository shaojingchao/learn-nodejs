// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
  console.log('连接中...');
   setTimeout(function(){
    console.log('连接成功。');
     eventEmitter.emit('data_received');
   },1000)
  
   // 触发 data_received 事件 
  
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
  console.log('接收数据...');
   setTimeout(function(){
    console.log('数据接收成功。');
     eventEmitter.emit('connection_close');
   },1000)
});

eventEmitter.on('connection_close', function(){
  console.log('连接已关闭。');
  console.log("程序执行完毕。");
})

// 触发 connection 事件 
eventEmitter.emit('connection');