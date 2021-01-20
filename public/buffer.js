var http = require('http');
var fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log('request was made' + req.url);
    if (req.url === '/home' || req.url==='/') {      
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
    else if(req.url === '/cont'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
    }
    else if(req.url === '/api'){
        var api = [{name:'Code',age:20},{name:'Qoch',age:24}];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(api));
    }
    else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Hey CodeQoch, We are listening to port 3000');      