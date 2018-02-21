var fs = require('fs');
var path = require('path');
module.exports = function(dirName, extStr, callb){
  fs.readdir(dirName, function cb(err, list){
    if(err){return cb(err)} //We start a callback, readdir is also asynchronous

    var le = list.length;
    for(var x = 0; x < le; x++){ //If x is smaller than the length, it will keep adding until they're equivalent
    var d = list[x]; //Taking the number x will end at, and putting it in an array
    var e = path.extname(d);

    if (e == "."+extStr){arr.push(x); }
    }
    return cb(null, arr)
  })

}
