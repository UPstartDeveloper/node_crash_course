const url = require('url');

// make up a URL with conventional query string parameters
let someUrl = 'http://mywebsite.com/hello.html?id=100&status=active'

// instantiate a URL object
const myUrl = new URL(someUrl);

// Return the Serialized URL - aka what we just passed into the constructor
console.log(myUrl.href);
// alternatively, call the toString method
console.log(myUrl);

// Return the host, or root domain
console.log(myUrl.host);

// Return the hostname - will NOT include any PORTS)
console.log(myUrl.hostname);

// Return the path name - the document our URL points to of our site's pages
console.log(myUrl.pathname);

// Return the serialized query - aka the query string
console.log(myUrl.search);

// Return a Params object - shows the params and values passed into query string
console.log(myUrl.searchParams);

// Add a parameter (additional value pair to the query string)
myUrl.searchParams.append('abc', '123')

// Loop through the query string param-value pairs
myUrl.searchParams.forEach(
    (value, name) => {
        console.log(`${name}: ${value}`);
    }
)
