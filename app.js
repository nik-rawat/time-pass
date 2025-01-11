const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 5000;

const home = fs.readFileSync(path.join(__dirname, 'index.html'));

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(home);
    }
    if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About Page</h1>');
    }
    if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Contact Page</h1>');
    }

    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page Not Found</h1>');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});