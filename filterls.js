var fs = require('fs');
var path = require('path'); //Here I want to require fs, and a path

var dir = process.argv[2]; //This is to filter the directory name
var ext = process.argv[3]; //This is for the file extension we will filter by


fs.readdir(dir, function callback(err, list){
  if(err){return err} //We start a callback, readdir is also asynchronous

  var le = list.length;
  for(var x = 0; x < le; x++){ //If x is smaller than the length, it will keep adding until they're equivalent
  var d = list[x]; //Taking the number x will end at, and putting it in an array
  var e = path.extname(d);

  if (e == "."+ext){
  //The most important part, we take the extension filter we are given, and only log it when its the same as the extension
    console.log(d);
  }
  }
})
