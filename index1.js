var fs = require("fs");

var filepath = "./sample.txt";

console.log("Start Reading file")

var data = fs.readFile(filepath,function(err,data){
if(err){
	console.log(err)
}
console.log(data.toString())
})



console.log("Done Reading file !!")