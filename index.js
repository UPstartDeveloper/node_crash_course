const Logger = require('./logger');

// instaniate a logger object
const logger = new Logger();

// setup an event listener
logger.on('message', data => console.log('Called listener: ', data));

// Trigger the listener
logger.log('Hello World');
