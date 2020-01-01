// import the core modules
const http = require('http');
const path = require('path');
const fs = require('fs');

// set up the server
const server = http.createServer((req, res) => {
    // print the request url - '/' represents the root
    console.log(req.url);
    // as a response, display some HTML
    if(req.url == '/') {
        // response:
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), (err, content) => {
                // error handling
                if (err) throw err;
                // display html, add HTTP header (status code and content type)
                res.writeHead(200, {"Content-Type": 'text/html'});
                res.end(content);
        })
    }
});

// PORT looks to environment variable, or defaults to 5000 (locally)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
