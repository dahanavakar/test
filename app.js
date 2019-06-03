const http = require('http');

const APP_PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello World from AWS again&again\n');
});

server.listen(APP_PORT, function () {
    console.log(`Server running on port ${this.address().port}`);
});
