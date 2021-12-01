const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8000;

const server = http.createServer();
server.listen(8000, () => {
	console.log(`Server running at PORT ${port}!`);
});
