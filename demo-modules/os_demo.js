const os = require("node:os");

// ? Platform name
console.log(os.platform()); // win32

// ? CPU Architecture
console.log(os.arch()); //x64

// ? CPU core info
// console.log(os.cpus());

// ? Free memory
console.log(os.freemem());

// ? Total memory
console.log(os.totalmem());

// ? Home directory
console.log(os.homedir());

// ? Up time
console.log(os.uptime());
