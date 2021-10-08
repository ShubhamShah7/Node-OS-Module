const os = require("os")

console.log("OS CPU architecture: " + os.arch());
console.log("OS Platform: "+os.platform());
console.log("Total memory of the system: " + os.totalmem() / (1024 * 1024 * 1024));
console.log("Free memory of the system: "+os.freemem() / (1024 * 1024 * 1024));
console.log("Information about the current user is as follows ");
console.log(os.userInfo());