const EventEmitter = require('events');
const uuid = require('uuid'); // a module for generating Universally Unique Ids

// generate an id
// console.log(uuid.v4());

// subclass a Logger class from EventEmitter
class Logger extends EventEmitter {
    log(msg) {
        // Call event, emit a message containing an id
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// export the Logger class
module.exports = Logger;
