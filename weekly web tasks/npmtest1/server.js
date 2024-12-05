const http = require('http'); // Import node.js core module 
const server = http.createServer(function(req, res) {
    // Creating server 
    // ============================
    // handle coming requested here
    if(req.url == '/'){ // check Url of the current request
        // set response header
        res.writeHead(200, {'Content-Type':'text/html'});

        // set response content  
        res.write('<html><body>This is the home Page.</body></html>');
        res.end(); 
    }
    else if (req.url == "/student") {
        // set response header
        res.writeHead(200, {'Content-Type':'text/html'});

        // set response content  
        res.write('<html><body>This is the student Page.</body></html>');
        res.end(); 
    }
    else if (req.url == "/admin") {
        // set response header
        res.writeHead(200, {'Content-Type':'text/html'});

        // set response content  
        res.write('<html><body>This is the admin Page.</body></html>');
        res.end(); 
    }
    else if (req.url == "/data") {
        // set response header
        res.writeHead(200, {'Content-Type':'text/html'});

        // set response content  
        res.write(JSON.stringify({message: "Hello World JSON"}));
        res.end(); 
    }
    else
        res.end('Invalid Resquest!');
});
server.listen(8000) // listen for any coming request 
console.log('Node.js server at port 8000 is running.')