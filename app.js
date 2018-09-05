function readeWriteWithFs(inputFile, outputFile) { 
	var fs = require('fs'); 
	var content = fs.readFileSync(inputFile,'utf8');
	var arr = content.split('\n');
	var str = "";
	for (var i = arr.length - 2; i >= 0; --i) {
		str += arr[i] + '\n';
	}
	console.log(arr);
	fs.writeFile(outputFile, str, function (err) {
	});
}
readeWriteWithFs('a','b');



