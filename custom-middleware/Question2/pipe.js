const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	// // console.log('Request is sent');
	// // console.log(req, res);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	const rStream = fs.createReadStream(__dirname + '/testFile.txt', 'utf-8');
	rStream.pipe(res);
});

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
