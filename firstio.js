var fs = require('fs'); //We require a filesystem operation
var filePath = process.argv[2]; //Starting after the second argument
var str = data.toString();

var bufferObj = fs.readFileSync(filePath); //Returns the buffer object with the contents of the file
var str = bufferObj.toString(); //Makes it a string
var arr = str.split("\n");//Splits the string in an array of strings
var length = arr.length-1;//Makes the array shorter
console.log(length); //Returns the new length of the array
