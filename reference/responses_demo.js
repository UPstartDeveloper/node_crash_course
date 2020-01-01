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
        // response for home page
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                // error handling
                if (err) throw err;
                // display html, add HTTP header (status code and content type)
                res.writeHead(200, {"Content-Type": 'text/html'});
                res.end(content);
            }
        )
    }
    // response for About page
    if (req.url == '/about') {
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'),
            (err, content) => {
                // handle any errors (just like for home page)
                if (err) throw err;
                // display some HTML, add header (status code, content type)
                res.writeHead(200, {"Content-Type": 'text/html'});
                res.end(content);
            }
        )
    }
    // response for JSON (i.e. we're making a RESTful API here)
    if (req.url == '/api/users') {
        // note: usually fetch data from database, but we'll hardcode stuff here
        const users = [
            { name: 'Bob Smith', age: 45},
            { name: 'John Derrre', age: 67}
        ];
        // great, now let's return the JSON array above!
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // turn the array into JSON
        res.end(JSON.stringify(users));
    }
});

// PORT looks to environment variable, or defaults to 5000 (locally)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
