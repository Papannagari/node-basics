var fs = require("fs");

var filepath = "./sample.txt";



var data = fs.readFileSync(filepath);

fs.writeFileSync('./output1.txt',data);
	
	

