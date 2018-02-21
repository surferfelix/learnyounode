var fs = require('fs'); //We require a filesystem operation
var filePath = process.argv[2]; //Starting after the second argument

  fs.readFile(filePath, function callback(err, data){  //Callback function, and it will only continue after the file has been read
  if(err){return err}

  var str = data.toString(); //Will coerce it to a string
  var array = str.split('\n');
  var length = array.length-1; //We do -1 because it starts counting at 0
  console.log(length);})
