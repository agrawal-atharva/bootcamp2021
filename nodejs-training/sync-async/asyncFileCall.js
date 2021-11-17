var fs = require('fs');

var content = fs.readFile('./users.txt', 'utf-8', function (error, content) {
	if (error) {
		console.log(error.message);
	}
	console.log(content);
});
console.log('Async file call');
