var http = require('http');

function firsthttp(response){
response.setEncoding('utf-8');
//console.log("Got response ");
response.on("data",function(data){
console.log(data);
});
response.on("end", () => {
    console.log('')
    //req.end()
  })
};
var url = process.argv[2];
http.get(url,firsthttp);

//real code
/*var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
*/
