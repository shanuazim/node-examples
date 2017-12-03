const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (request, response) {
  if (request.method !== 'POST') {
    return response.end('send me a POST\n')
  }

  request.pipe(map(function (data) {
    return data.toString().toUpperCase()
  })).pipe(response)
})

server.listen(Number(process.argv[2]))

/* real code
 var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
    */