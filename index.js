var fs = require("fs");
console.log("Start Reading file")

var data = fs.readFileSync(filepath)

console.log(data)

console.log("Done Reading file !!")