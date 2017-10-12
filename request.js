const http = require('http')
const url = require('url')
const util = require('util')

http.createServer(function(req, res){
  res.writeHead(200, {
    'Content-type': 'text/plain'
  })

  var params = url.parse(req.url, true).query

  res.write('网站名：' + params.name)
  res.write('\n')
  res.write('网站名：' + params.url)
  res.end()
}).listen(3000)