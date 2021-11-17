const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert")
};

const server = https.createServer(options);
server.listen(8000);