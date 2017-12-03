var http = require('http')
var bl = require('bl')
var result =[]
var count=0

for(let i=0; i<3; i++){

   http.get(process.argv[2+i], function(response) 
{
    //response.setEncoding('utf-8');
    response.pipe(bl(function (err,data) {
       if(err){console.log(err)}
    result[i] = data.toString()
    count++

    if(count ==3){
     for (var x = 0; x<3; x++)
       console.log(result[x])
    }
   // response.on("end", () => {
    //  console.log('')})
}))
})
}

/* result
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
*/

