const fs = require('fs');
const http = require('http');

const rStream = fs.createReadStream(__dirname + '/testFile.txt', 'utf-8');

rStream.on('data', (data) => {
	console.log(data);
	console.log(rStream);
});

rStream.on('error', (error) => {
	console.log(error.message);
});
