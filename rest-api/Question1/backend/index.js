const http = require('http');
const port = process.env.PORT || 5000;
const users = require('./userData');
const data = JSON.stringify(users);

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
})

server.listen(port, () => {
    console.log(`Server running on port ${port}!!!`);
    console.log(data);
});