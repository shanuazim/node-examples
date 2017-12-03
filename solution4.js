var fs = require('fs')

function fileRead(callback) {
     fs.readFile(process.argv[1],'utf8', function (err, data) {
       if (err) throw err;
       var strArray = data.split('\n')

       for(i=0; i<strArray.length; i++){
         i = i++
       }
      callback() 
     });
}

function totalLines() {
  console.log(i)
}

fileRead(totalLines)