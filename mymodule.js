var fs = require('fs');
var filePath= require('path');

module.exports = function (path, ext, callback) {
 var e = "." + ext;
  fs.readdir(path, function (err, data) {
    if (err) return callback(err);
    else {
        var fileList = []; 
        for (var i = 0; i < data.length; i++) {
            if (filePath.extname(data[i]) === e) {
                fileList.push(data[i]);
            }
        }
    callback(null,fileList)
    }
  });
}