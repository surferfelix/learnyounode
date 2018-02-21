var mymodule = require('./mod.js');
var dir = process.argv[2];
var ext = process.argv[3];
var callback = function(err, data){
  if(err){return err}

  for(var x = 0; x < data.length; x++){console.log(data[x]}
}

mymodule(dir, ext, callback);
