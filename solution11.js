const http = require('http')
const fs = require('fs')

http.createServer((request,response)=> {
    const startTime = Date.now()
     fs.readFile(process.argv[3],'utf8', (error,fileData)=> {
      if(error) return response.end(error)
        response.end(fileData)
     })
}).listen(process.argv[2])

/* real code
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/