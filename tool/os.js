const os = require('os')
const http = require('http')


let body = ''
Object.keys(os).forEach(function(item){
  if (typeof os[item] === 'function') {
    body += '\n'
    body += 'os.' + item + ':' + JSON.stringify(os[item](),true,2)
  }
})

http.createServer(function(req, res){
  res.write(body)
  res.end()
}).listen(1000)