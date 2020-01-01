// import path, one of Node.js' core modules
const path = require('path');

// print name of file we're in
console.log(path.basename(__filename));

// print the name of the directory we're in
console.log(path.dirname(__filename));

// print the file extension we're working with
console.log(path.extname(__filename));

// instantiation of path object
console.log(path.parse(__filename));

// Concatenate paths: i.e. ../test/hello.js
console.log(path.join(__filename, 'test', 'hello.js'));
