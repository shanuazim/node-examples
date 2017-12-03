var fs = require('fs')
buf = new Buffer(50);

buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
var strArray = str.split('\n')

for(i=0; i<strArray.length; i++){
    i = i++
}
console.log(i-1)