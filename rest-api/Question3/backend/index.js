const http = require('http');
const fs = require('fs');
const { cpuUsage } = require('process');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	if (req.url === '/home') {
		const homePage = fs.readFileSync('./homePage.html', 'utf-8');
		res.end(homePage);
	} else if (req.url === '/aboutUs') {
		const aboutUsPage = fs.readFileSync('./aboutUsPage.html', 'utf-8');
		res.end(aboutUsPage);
	} else if (req.url === '/contactUs') {
		const contactUsPage = fs.readFileSync('./contactUsPage.html', 'utf-8');
		res.end(contactUsPage);
	}
});

server.listen(port, () => {
	console.log(`Server started on port ${port}!!!`);
});
