var http = require('http');
    http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World ok\n');
}).listen(8767);
console.log('Server running at http://http://Node305-alexng88536444.codeanyapp.com:8080/');