// import the core modules
const http = require('http');
const path = require('path');
const fs = require('fs');

// set up the server
const server = http.createServer((req, res) => {
    
});

// PORT looks to environment variable, or defaults to 5000 (locally)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
