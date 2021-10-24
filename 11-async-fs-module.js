const {readFile, writeFile} = require('fs')

console.log("start");

//Async requires a callback fucntion to cath error and return or log the result

readFile('./content/first.txt', 'utf8', (err, result)=> {
    if(err){
        console.log(err);
        return null
    }
    
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
          console.log(err);
          return null;
        }
        const second = result
        writeFile(
          "./content/result-async.txt",
          `Hi, thi is the result: ${first}, ${second}`, {flag: 'a'}, (err, result)=>{
              if(err) {
                  console.log(err);
              }
              console.log('done with this task');
          }
        );
    })
})

console.log("starting the next one");