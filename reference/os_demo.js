const os = require('os');

// Get the Platform AKA OS you're on
console.log(os.platform());

// Return the CPU architecture
console.log(os.arch());

// Return CPU core info
console.log(os.cpus());

// Curious about free memory? (answer in bytes)
console.log(os.freemem());

// Or how about total memory?
console.log(os.totalmem());

// Return the home directory
console.log(os.homedir());

// Uptime: how long has this system been available, uninterrupted, in seconds?
console.log(os.uptime());
