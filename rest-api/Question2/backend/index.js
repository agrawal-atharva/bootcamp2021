const http = require('http');
const port = process.env.PORT || 5000;

const students = require('./studentList');

const server = http.createServer((req, res) => {
	if (req.url === '/studentList') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(students));
	}
});

server.listen(port, () => {
	console.log(`Server running on PORT ${port}`);
	// console.log(students);
});
