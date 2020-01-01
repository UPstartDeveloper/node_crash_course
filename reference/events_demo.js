// import the EventEmitter class
const EventEmitter = require('events');

// Subclass it for our own purposes
class MyEmitter extends EventEmitter {}

// instantiate an object
const myEmitter = new MyEmitter();

// Create an eventl listener
myEmitter.on('event', () => console.log('Event fired!'));

// Construct an event, and see it FIRE!
myEmitter.emit('event');
