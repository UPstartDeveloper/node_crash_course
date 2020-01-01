// import the core modules
const http = require('http');
const path = require('path');
const fs = require('fs');

// set up the server
const server = http.createServer((req, res) => {
    // Build the file path dynamically
    let filePath = path.join(__dirname, 'public',
        // use a fancy 'smancy ternary operator
        req.url === '/' ? 'index.html' : req.url);
    // print the file path to the console
    console.log(filePath);

    // get the ext of the file
    let extension = path.extname(filePath);

    // configure how we'll send the content type - default to HTML most often
    let contentType;

    switch (extension) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    // read the file - so we display it!
    fs.readFile(filePath, (err, content) => {
        // error handling
        if (err) {
            //  page not found (most likely)
            if (err.code == "ENOENT") {
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'),
                    (err, content) => {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf8');
                    }
                );
            // handle some other type of server error
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        // configure the success! response
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

// PORT looks to environment variable, or defaults to 5000 (locally)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
