// try to print to the console
console.log('Hello, and this is my first Node.js project!');

// try to import from another folder in this project, using vanilla JavaScript
const Person = require('./person');
const person1 = new Person('Bimpson the Tiger', 54); // instantiation
person1.greeting();
