const http = require('http');

const server = http.createServer(function(req,res){
    console.log('request was made'+ req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hey Guyz...');
});

server.listen(3000,'127.0.0.1');
console.log('Hey CodeQoch, We are listening to port 3000');     