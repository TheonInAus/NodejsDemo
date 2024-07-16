// npm install upper-case

// can not import ESModule in CommonJS Module
// but can use dynamic import() for either module type
// import() return a promise
var uc = import('upper-case');
var http = require('http');
uc.then((data) => {
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data.upperCase("Hello World!"));
        res.end();
      }).listen(8080);
});