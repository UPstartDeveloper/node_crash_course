    const http = require('http');

    // Instaniate a server object, req-res cycle, and give a port to listen to
    http.createServer((req, res) => {
        res.write('Hello World'); // goes on browse page
        res.end();
    }).listen(5000, () => console.log('Server running...'));
