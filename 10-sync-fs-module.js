// const fs = requiere('fs')
const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

//First argument is the file where the writing will be done,
// the second argument is the content written and 
//the third, object argument, is the way it will be written (appended, f.e.)
writeFileSync('./content/result-sync.txt', `Hi, thi is the result: ${first}, ${second}`, {flag:'a'})

console.log('done with this task');
console.log('starting the next one');