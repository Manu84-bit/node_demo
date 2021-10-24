//OS module

const os = require('os')

//info about current user
const user = os.userInfo()

console.log(user);

//system uptime in seconds
console.log(`The system uptime is: ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);